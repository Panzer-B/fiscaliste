export interface IncomeTax {
    name: string;
    brackets: TaxBracket[];
}

export interface TaxBracket {
    max: number;
    rate: number;
}

export interface TaxRate {
    name: string;
    rate: number;
}
