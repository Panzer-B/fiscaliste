import { IncomeTax, IncomeTaxBracket, TaxRate } from './tax.model';

//==========================
// Utils
//==========================
export const multiplyByRate = (amount: number, rate: number): number =>
    Math.round(amount * rate * 100) / 100;

//==========================
// Income Tax
//==========================
/**
 * calcIncomeTaxes
 * apply all the different tax rate brackets on an income
 * @param amount
 * @param tax
 * @returns
 */
export const calcIncomeTaxes = (
    amount: number,
    incomeTax: IncomeTax
): number => {
    let totalTaxes = 0; // total taxes
    let amountBracketToCalculate = 0; // bracket [0-100 = 100, 100-250 = 150, 150-500 = 350]
    let totalBracket = 0; // totalBracket that has been calculated, adds up until it equals the amount.

    incomeTax.brackets.forEach((taxBracket: IncomeTaxBracket) => {
        amountBracketToCalculate =
            (amount < taxBracket.max ? amount : taxBracket.max) - totalBracket;
        totalBracket += amountBracketToCalculate;
        const taxAmount = multiplyByRate(
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
export const calcTotalIncomeTaxes = (
    income: number,
    incomeTaxes: IncomeTax[]
): number =>
    incomeTaxes
        .map((tax: IncomeTax) => calcIncomeTaxes(income, tax))
        .reduce((partialSum, currentAmount) => partialSum + currentAmount, 0);

        // TODO : Check if we need a service or a meta reducer to get the context.. in order to get the tax data.
export const calcNetIncome = (
    grossIncome: number,
    incomeTaxes: IncomeTax[]
): number => {
    // TODO : apply tax credits
    // TODO : Other taxes
    return grossIncome - calcTotalIncomeTaxes(grossIncome, incomeTaxes);
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
            .map((taxRate: TaxRate) => multiplyByRate(amount, taxRate.rate))
            .reduce(
                (partialSum, currentAmount) => partialSum + currentAmount,
                0
            )
            .toFixed(2)
    );

