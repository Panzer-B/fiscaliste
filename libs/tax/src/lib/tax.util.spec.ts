import { IncomeTax } from './tax.model';
import {
    calcTotalIncomeTaxes,
    calcIncomeTaxes,
    multiplyByRate,
    getHarmonizedSalesTaxTotal,
    calcNetIncome,
} from './tax.util';
import { tax_ca_qc } from './data/tax_ca_qc';

describe('tax util', () => {
    test('multiplyByRate', () => {
        const rate = 0.05;
        expect(multiplyByRate(100, rate)).toEqual(5);
        expect(multiplyByRate(1000, rate)).toEqual(50);
    });

    test('calcIncomeTaxes', () => {
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
        expect(calcIncomeTaxes(30, incomeTax)).toEqual(6);
        expect(calcIncomeTaxes(50, incomeTax)).toEqual(10);
        expect(calcIncomeTaxes(300, incomeTax)).toEqual(115);
        expect(calcIncomeTaxes(20000, incomeTax)).toEqual(9965);
    });

    test('calcTotalIncomeTaxes', () => {
        const incomeTaxes = tax_ca_qc.incomeTaxes;
        expect(calcTotalIncomeTaxes(40000, incomeTaxes)).toEqual(9861.2);
    });

    test('getHarmonizedSalesTaxTotal', () => {
        const taxRates = tax_ca_qc.consummerTaxes;
        expect(getHarmonizedSalesTaxTotal(1, taxRates)).toEqual(0.15);
    });

    test('calcNetIncome', () => {
        const grossIncome = 40000;
        const taxRates = tax_ca_qc.incomeTaxes;
        expect(calcNetIncome(grossIncome, taxRates)).toEqual(30138.8);
    });
});
