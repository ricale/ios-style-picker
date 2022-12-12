function getDays(year: number, month: number, fromDate?: Date, toDate?: Date) {
  const fromDay =
    fromDate?.getFullYear() === year && (fromDate?.getMonth() ?? 0) + 1 === month
      ? fromDate.getDate()
      : 1;

  const toDay =
    toDate?.getFullYear() === year && (toDate?.getMonth() ?? 0) + 1 === month
      ? toDate.getDate()
      : new Date(year, month, 0).getDate();

  const days = [];

  for (let i = fromDay; i <= toDay; i++) {
    days.push({
      value: i,
      text: i + '일',
    });
  }

  return days;
}

export default getDays;
