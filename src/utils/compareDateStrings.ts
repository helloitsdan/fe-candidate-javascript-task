const compareDateStrings = (a: string, b: string) => {
  const dateA = Date.parse(a);
  const dateB = Date.parse(b);

  if (dateA > dateB) {
    return -1;
  }

  if (dateB > dateA) {
    return 1;
  }

  return 0;
};

export default compareDateStrings
