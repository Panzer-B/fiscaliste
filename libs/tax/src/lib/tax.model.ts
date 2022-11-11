export interface IncomeTax {
    name: string;
    rates: TaxRate[]
}

export interface TaxRate {
    max: number;
    rate: number;
}