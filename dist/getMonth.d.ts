declare function getMonths(currentYear: number, fromDate?: Date, toDate?: Date): {
    value: number;
    text: string;
}[];
export default getMonths;
