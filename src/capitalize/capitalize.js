const capitalize = (string) => {
  const lowerCased = string.toLowerCase();
  const Capitalized = lowerCased[0].toUpperCase() + lowerCased.slice(1);
  return Capitalized;
};

export default capitalize;
