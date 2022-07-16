const analyzeArray = (array) => {
  const results = {};
  results.average =
    array.reduce((previous, current) => previous + current) / array.length;
  results.min = array.reduce((previous, current) => {
    if (previous < current) {
      return previous;
    }
    return current;
  });
  results.max = array.reduce((previous, current) => {
    if (previous > current) {
      return previous;
    }
    return current;
  });
  results.length = array.length;

  return results;
};

export default analyzeArray;
