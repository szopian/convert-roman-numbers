/*
 * Description - This is part of a FreeCodeCamp Challenge
 */

function convertToRoman(num) {
  let romanNumResult = "";
  const romanNumbers = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  let individualValue;

  for (let key in romanNumbers) {
    individualValue = Math.floor(num / romanNumbers[key]);
    if (individualValue > 0) {
      for (let i = 0; i < individualValue; i++) {
        romanNumResult += key;
      }
    }
    num = num % romanNumbers[key];
  }
  return romanNumResult;
}

console.log(convertToRoman(44));
