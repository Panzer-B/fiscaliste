import { IncomeTax, TaxBracket, TaxRate } from './tax.model';

//==========================
// Utils
//==========================
export const getTaxAmountByRate = (amount: number, rate: number): number => {
    return amount * rate;
};

//==========================
// Income Tax
//==========================
export const getTaxAmountByIncomeTax = (
    amount: number,
    incomeTax: IncomeTax
): number => {
    let totalTaxes = 0; // total taxes
    let amountBracketToCalculate = 0; // bracket [0-100 = 100, 100-250 = 150, 150-500 = 350]
    let totalBracket = 0; // totalBracket that has been calculated, adds up until it equals the amount.

    incomeTax.brackets.forEach((taxBracket: TaxBracket) => {
        amountBracketToCalculate =
            (amount < taxBracket.max ? amount : taxBracket.max) - totalBracket;
        totalBracket += amountBracketToCalculate;
        const taxAmount = getTaxAmountByRate(
            amountBracketToCalculate,
            taxBracket.rate
        );
        totalTaxes += taxAmount;
    });
    return totalTaxes;
};

export const getIncomeTaxesTotal = (
    income: number,
    incomeTaxes: IncomeTax[]
): number => {
    let total = 0;
    incomeTaxes.forEach((incomeTax: IncomeTax) => {
        const amountToAdd = getTaxAmountByIncomeTax(income, incomeTax);
        total += amountToAdd;
    });
    return Math.round(total * 100) / 100;
};

//==========================
// Harmonized Sales Tax
//==========================
export const getHarmonizedSalesTaxTotal = (
    amount: number,
    taxRates: TaxRate[]
): number => {
    let totalTaxes = 0;
    taxRates.forEach((taxRate: TaxRate) => {
        totalTaxes += getTaxAmountByRate(amount, taxRate.rate);
    });
    return Math.round(totalTaxes * 100) / 100;
};
