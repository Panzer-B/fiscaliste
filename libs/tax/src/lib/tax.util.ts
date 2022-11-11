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
/**
 * getTaxAMountByIncomeTax
 * apply all the different tax rate brackets on an income
 * @param amount 
 * @param tax 
 * @returns 
 */
export const getTaxAmountByIncomeTax = (
    amount: number,
    tax: IncomeTax
): number => {
    let totalTaxes = 0; // total taxes
    let amountBracketToCalculate = 0; // bracket [0-100 = 100, 100-250 = 150, 150-500 = 350]
    let totalBracket = 0; // totalBracket that has been calculated, adds up until it equals the amount.

    tax.brackets.forEach((taxBracket: TaxBracket) => {
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

/**
 * getIncomeTaxesTotal
 * calculate all income taxes on a gross income (federal + provincial)
 */
export const getIncomeTaxesTotal = (
    income: number,
    taxes: IncomeTax[]
): number => {
    let total = 0;
    taxes.forEach((tax: IncomeTax) => {
        const amountToAdd = getTaxAmountByIncomeTax(income, tax);
        total += amountToAdd;
    });
    return Math.round(total * 100) / 100;
};

export const getNetIncome = (grossIncome: number, taxes: IncomeTax[]): number => {
    // TODO : apply tax credits
    return grossIncome - getIncomeTaxesTotal(grossIncome, taxes);
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
