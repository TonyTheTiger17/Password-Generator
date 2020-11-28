const characterAmountRange = document.getElementById
('characterAmountRange')
const characterAmountNumber = document.getElementById
('characterAmountNumber')
const includeUppercaseElement = document.getElementById
('includeUppercase')
const includeNumbersElement = document.getElementById('includeNumbers')
const includeSymbolsElement = document.getElementById('includeSymbols')
const form = document.getElementById('passwordGeneratorForm')
const passwordDisplay = document.getElementById('passwordDisplay')

const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57)
const Symbol_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(
  arrayFromLowToHigh(58, 64)
).concat(
  arrayFromLowToHigh(91, 96)
).concat(
  arrayFromLowToHigh(123, 126)
)

// Generator functions - http://www.net-comber.com/charset.html

fuction getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() *26) +97);
}

fuction getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() *26) +65);
}

fuction getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() *10) +48);
}

fuction getRandomSymbol() {
  const symbols = '!@#$%^&*()<?>+=';
  return String.fromCharCode(Math.floor(Math.random() *10) +48);
}

console.log(getRandomNumber())
characterAmountNumber.addEventListener('input', syncCharacterAmount)
characterAmountRange.addEventListener('input', syncCharacterAmount)

form.addEventListener('Submit' , e => {
  e.preventDefault()
  const characterAmount = characterAmountNumber.value
  const includeUppercase = includeUppercaseElement.checked
  const includeNumbers = includeNumbersElement.checked
  const includeSymbols = includeSymbolsElement.checked
  const password = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols)
  passwordDisplay.innerText = password
})

function generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols) {
  let charCodes = LOWERCASE_CHAR_CODES
  if (includeUppercase) charCodes = charCode.concat
  (UPPERCASE_CHAR_CODES)
  if (includeSymbols) charCodes = charCode.concat
  (SYMBOL_CHAR_CODES)
  if (includeNumbers) charCodes = charCode.concat
  (NUMBER_CHAR_CODES)
}

const passwordCharacters = []
for ( let i = 0; i < characterAmount; i++) {
  const characterCode = charCodes[Math.floor(Math.random() *
    charCode.length)]
    passwordCharacters.push(String.fromCharCode(characterCode))
}
  return passwordCharacters.join('')
}




function arrayFromlowToHigh(low,high) {
  const array = []
  for (let i = low; <= high; i++) {
    array.push(i)

  }
}

function syncCharacterAmount(e) {
  const value = e.target.value
  characterAmountNumber.value =value
  characterAmountRange.value =value
}

