function getYears(fromDate?: Date, toDate?: Date) {
  const fromYear = fromDate?.getFullYear() ?? new Date().getFullYear();
  const toYear = toDate?.getFullYear() ?? fromYear + 40;

  const years = [];

  for (let i = fromYear; i <= toYear; i++) {
    years.push({
      value: i,
      text: i + '년',
    });
  }
  return years;
}

export default getYears;
