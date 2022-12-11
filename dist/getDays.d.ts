declare function getDays(year: number, month: number, fromDate?: Date, toDate?: Date): {
    value: number;
    text: string;
}[];
export default getDays;
