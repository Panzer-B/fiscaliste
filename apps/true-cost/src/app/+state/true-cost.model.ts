export enum TimeFrequency {
    YEARLY = 'YEARLY',
    MONTHLY = 'MONTLY',
    WEEKLY = 'WEEKLY',
    DAYLY = 'DAILY'
}

export interface TrueCost {
    cost: number;
    isTipActive: boolean;
    isTaxActive: boolean;
    paymentFrequency: TimeFrequency;
    relativeNumberOfPayment: number;
    totalNumberOfPayment: number;
}