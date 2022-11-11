import { IncomeTax } from './tax.model';
import {
    getIncomeTaxesTotal,
    getTaxAmountByIncomeTax,
    getTaxTotalByRate,
    getHarmonizedSalesTaxTotal,
} from './tax.util';
import { tax_ca_qc } from './data/tax_ca_qc';

describe('tax util', () => {
    test('getTaxTotalByRate', () => {
        const rate = 0.05;

        expect(getTaxTotalByRate(100, rate)).toEqual(5);
        expect(getTaxTotalByRate(1000, rate)).toEqual(50);
    });

    test('getTaxAmountByIncomeTax', () => {
        const incomeTax: IncomeTax = {
            name: 'annoying tax',
            brackets: [
                {
                    max: 50,
                    rate: 0.2,
                },
                {
                    max: 100,
                    rate: 0.1,
                },
                {
                    max: 99999999,
                    rate: 0.5,
                },
            ],
        };
        expect(getTaxAmountByIncomeTax(30, incomeTax)).toEqual(6);
        expect(getTaxAmountByIncomeTax(50, incomeTax)).toEqual(10);
        expect(getTaxAmountByIncomeTax(300, incomeTax)).toEqual(115);
        expect(getTaxAmountByIncomeTax(20000, incomeTax)).toEqual(9965);
    });

    test('getIncomeTaxesTotal', () => {
        const incomeTaxes = tax_ca_qc.incomeTaxes;
        expect(getIncomeTaxesTotal(40000, incomeTaxes)).toEqual(9861.2);
    });

    test('getHarmonizedSalesTaxTotal', () => {
        const taxRates = tax_ca_qc.consummerTaxes;
        expect(getHarmonizedSalesTaxTotal(1, taxRates)).toEqual(0.15);
    });
});
