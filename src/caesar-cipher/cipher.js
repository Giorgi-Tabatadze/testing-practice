const caesarCipher = {
  encript: (string, shiftNumber) => {
    if (typeof string !== "string" || typeof shiftNumber !== "number") {
      throw new Error("You must provide valid data");
    }
    const stringArray = string.split("");
    const shiftedArray = [];
    stringArray.forEach((character) => {
      const shiftedLetter = caesarCipher.initiateShift(character, shiftNumber);
      shiftedArray.push(shiftedLetter);
    });
    return shiftedArray.join("");
  },

  initiateShift: (character, shiftNumber) => {
    if (character.toUpperCase() == character.toLowerCase()) {
      return character;
    }
    if (character == character.toUpperCase()) {
      return caesarCipher.shiftUpperCase(character, shiftNumber);
    }
    if (character == character.toLowerCase()) {
      return caesarCipher.shiftLowerCase(character, shiftNumber);
    }
  },

  shiftUpperCase: (character, shiftNumber) => {
    const shiftedCode = character.charCodeAt(0) + shiftNumber;
    if (shiftedCode > 90) {
      return String.fromCharCode(shiftedCode - 26);
    }
    return String.fromCharCode(shiftedCode);
  },

  shiftLowerCase: (character, shiftNumber) => {
    const shiftedCode = character.charCodeAt(0) + shiftNumber;
    if (shiftedCode > 122) {
      return String.fromCharCode(shiftedCode - 26);
    }
    return String.fromCharCode(shiftedCode);
  },
};

export default caesarCipher;
