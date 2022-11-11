export const tax_ca_qc = {
    consummerTaxes: [
        {
            name: 'gst',
            rate: 0.05,
        },
        {
            name: 'qst',
            rate: 0.09975,
        },
    ],
    incomeTaxes: [
        {
            name: 'RRQ',
            brackets: [
                {
                    max: 3500,
                    rate: 0,
                },
                {
                    max: 64900,
                    rate: 0.0615,
                },
            ],
        },
        {
            name: 'RQAP',
            brackets: [
                {
                    max: 88000,
                    rate: 0.00494,
                },
            ],
        },
        {
            name: 'ProvincialTaxes',
            brackets: [
                {
                    max: 16143,
                    rate: 0,
                },
                {
                    max: 46295,
                    rate: 0.15,
                },
                {
                    max: 92580,
                    rate: 0.2,
                },
                {
                    max: 112655,
                    rate: 0.24,
                },
                {
                    max: 9999999999,
                    rate: 0.2575,
                },
            ],
        },
        {
            name: 'FederalTaxes',
            brackets: [
                {
                    max: 14398,
                    rate: 0,
                },
                {
                    max: 50197,
                    rate: 0.15,
                },
                {
                    max: 100392,
                    rate: 0.205,
                },
                {
                    max: 155625,
                    rate: 0.26,
                },
                {
                    max: 221708,
                    rate: 0.29,
                },
                {
                    max: 9999999999,
                    rate: 0.33,
                },
            ],
        },
    ],
};
