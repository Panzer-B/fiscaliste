/**
 * Interface for the 'Users' data
 */
export interface UsersEntity {
    id: string | number; // Primary ID
    name: string;
    hourlyRate: number;
    weeklyHours: number;
    dailyCommuteHours: number;
    grossIncome: number;
    netIncome: number
}
