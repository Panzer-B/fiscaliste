import { IncomeTax, TaxBracket, TaxRate } from './tax.model';

//==========================
// Utils
//==========================
export const getTaxAmountByRate = (amount: number, rate: number): number =>
    Math.round(amount * rate * 100) / 100;

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
): number =>
    taxes
        .map((tax: IncomeTax) => getTaxAmountByIncomeTax(income, tax))
        .reduce((partialSum, currentAmount) => partialSum + currentAmount, 0);

export const getNetIncome = (
    grossIncome: number,
    taxes: IncomeTax[]
): number => {
    // TODO : apply tax credits
    return grossIncome - getIncomeTaxesTotal(grossIncome, taxes);
};

//==========================
// Harmonized Sales Tax
//==========================
export const getHarmonizedSalesTaxTotal = (
    amount: number,
    taxRates: TaxRate[]
): number =>
    Number(
        taxRates
            .map((taxRate: TaxRate) => getTaxAmountByRate(amount, taxRate.rate))
            .reduce(
                (partialSum, currentAmount) => partialSum + currentAmount,
                0
            )
            .toFixed(2)
    );
