function getMonths(currentYear: number, fromDate?: Date, toDate?: Date) {
  const fromMonth = currentYear === fromDate?.getFullYear() ? fromDate.getMonth() + 1 : 1;
  const toMonth = currentYear === toDate?.getFullYear() ? toDate.getMonth() + 1 : 12;

  const months = [];
  for (let i = fromMonth; i <= toMonth; i++) {
    months.push({
      value: i,
      text: i + '월',
    });
  }
  return months;
}

export default getMonths;
