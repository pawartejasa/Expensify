export default (expenses, { text, sortBy, startdate, enddate }) => {
    return expenses.filter((expense) => {
      const startDateMatch = typeof startdate !== 'number' || expense.createdAt >= startdate;
      const endDateMatch = typeof enddate !== 'number' || expense.createdAt <= enddate;
      const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
  
      return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
      if (sortBy === 'date') {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === 'amount') {
        return a.amount < b.amount ? 1 : -1;
      }
    });
  };
  