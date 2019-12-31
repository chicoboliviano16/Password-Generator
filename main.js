//DOM elements
const resultEL = document.getElementById("result");
const lengthEL = document.getElementById("length");
const uppercaseEL = document.getElementById("uppercase");
const numbersEL = document.getElementById("numbers");
const lowercaseEL = document.getElementById("lowercase");
const symbolsEL = document.getElementById("symbols");
const generateEL = document.getElementById("generate");
const clipboardEL = document.getElementById("clipboard");

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};

generateEL.addEventListener("click", () => {
  const length = +lengthEL.value; //the plus is an ernery operator and it turns a string into a number
  const hasLower = lowercaseEL.checked; //checked property is either true or false
  const hasUpper = uppercaseEL.checked;
  const hasNumber = numbersEL.checked;
  const hasSymbol = symbolsEL.checked;

  resultEL.innerText = generatePassword(
    hasLower,
    hasUpper,
    hasNumber,
    hasSymbol,
    length
  );
});

//generator functions
function getRandomLower() {
  String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  //http://net-comber.com/charset.html
  //this will get random uppercase numbers from the table above
}
function getRandomUpper() {
  String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  //http://net-comber.com/charset.html
  //this will get random uppercase numbers from the table above
}
function getRandomNumber() {
  const test = String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  //http://net-comber.com/charset.html
  //this will get random uppercase numbers from the table above
  return test;
}

function getRandomSymbol() {
  const symbols = "!@#$%^&*()+<>{}[]?";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

// console.log(getRandomSymbol())
