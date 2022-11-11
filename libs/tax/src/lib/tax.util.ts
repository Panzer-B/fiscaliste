import { TaxRate, IncomeTax } from "./tax.model";

/**
 * @param amount 
 * @param taxRate 
 * @returns 
 */
export const getTaxAmountByTaxRate = (amount: number, taxRate: TaxRate): number => {
    return amount * taxRate.rate;
}

export const getTaxAmountByIncomeTax = (amount: number, incomeTax: IncomeTax): number => {
    let total = 0; // total taxes
    let amountBracketToCalculate = 0; // bracket [0-100 = 100, 100-250 = 150, 150-500 = 350]
    let totalBracket = 0; // totalBracket that has been calculated, adds up until it equals the amount.

    incomeTax.rates.forEach((rate: TaxRate) =>  {
        amountBracketToCalculate = (amount < rate.max ? amount : rate.max) - totalBracket;
        totalBracket += amountBracketToCalculate;
        const taxAmount = getTaxAmountByTaxRate(amountBracketToCalculate, rate);
        total += taxAmount;
    });
    return total;
}

export const getIncomeTaxesTotal = (income: number, incomeTaxes: IncomeTax[]): number => {
    let total = 0;
    console.log(income);
    incomeTaxes.forEach((incomeTax: IncomeTax) => {
        const amountToAdd = getTaxAmountByIncomeTax(income, incomeTax);
        console.log(amountToAdd);
        total += amountToAdd;
    })
    return Math.round(total*100)/100;
}