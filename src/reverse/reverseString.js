const reverseString = (string) => {
  const array = string.split("");
  const reversedArray = array.reverse();
  const reversedString = reversedArray.join("");

  return reversedString;
};
export default reverseString;
