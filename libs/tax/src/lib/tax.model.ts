// Income Taxes
export interface IncomeTax {
    name: string;
    brackets: IncomeTaxBracket[];
}

export interface IncomeTaxBracket {
    max: number;
    rate: number;
}

// TVA, TPS, TVQ
export interface TaxRate {
    name: string;
    rate: number;
}
