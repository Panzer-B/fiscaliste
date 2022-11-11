import { IncomeTax, TaxRate } from './tax.model';
import { getIncomeTaxesTotal, getTaxAmountByIncomeTax, getTaxAmountByTaxRate } from './tax.util';
import { tax_ca_qc } from './data/tax_ca_qc';

describe('tax util', () => {

    test('getTaxAmountByTaxRate', () => {
        const taxRate: TaxRate = {
            max: 400,
            rate: 0.05
        };

        expect(getTaxAmountByTaxRate(100, taxRate)).toEqual(5);
        expect(getTaxAmountByTaxRate(1000, taxRate)).toEqual(50);
    });

    test('getTaxAmountByIncomeTax', () => {
        const incomeTax: IncomeTax = {
            name: 'annoying tax',
            rates: [
                {
                    max: 50,
                    rate: 0.2
                },
                {
                    max: 100,
                    rate: 0.1
                },
                {
                    max: 99999999,
                    rate: 0.5
                }
            ]
        }
        expect(getTaxAmountByIncomeTax(30, incomeTax)).toEqual(6);
        expect(getTaxAmountByIncomeTax(50, incomeTax)).toEqual(10);
        expect(getTaxAmountByIncomeTax(300, incomeTax)).toEqual(115);
        expect(getTaxAmountByIncomeTax(20000, incomeTax)).toEqual(9965);
    });

    test('getIncomeTaxesTotal', () => {
        const incomeTaxes = tax_ca_qc.incomeTaxes;
        expect(getIncomeTaxesTotal(40000, incomeTaxes)).toEqual(9861.2);
    });
});