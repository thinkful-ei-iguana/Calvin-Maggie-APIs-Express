// Create an endpoint /cipher. The handler function should accept a query parameter named text and one named shift. Encrypt the text using a simple shift cipher also known as a Caesar Cipher. It is a simple substitution cipher where each letter is shifted a certain number of places down the alphabet. So if the shift was 1 then A would be replaced by B, and B would be replaced by C and C would be replaced by D and so on until finally Z would be replaced by A. using this scheme encrypt the text with the given shift and return the result to the client. Hint - String.fromCharCode(65) is an uppercase A and 'A'.charCodeAt(0) is the number 65. 65 is the integer value of uppercase A in UTF-16. See the documentation for details.
const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));

console.log('hi world');

app.listen(8001, () => {
  console.log('Express has loaded one port joke.');
});

app.get('/cipher', (req, res) => {
  const { text, shift } = req.query;

  if (!text) {
    //3. text was not provided
    return res.status(400).send('Please provide some text');
  }

  if (!shift) {
    //3. Shift was not provided
    return res.status(400).send('We need to shift');
  }

  // const cipherText = text[].fromCharCode();
  const cipherShift = parseInt(shift);
  // 'I am a cipher'

  if (Number.isNaN(cipherShift)) {
    return 'cipherShift is NaN';
  }

  // need to build the cipher
  const basicValue = 'A'.charCodeAt(0);

  const cipher = text
    .toUpperCase()
    .split('')
    .map(character => {
      let code = character.charCodeAt(0);

      if (code < basicValue || code > (basicValue + 26)) {
        return character;
      }


      let diff = code - basicValue;
      diff = diff + cipherShift;

      diff = diff % 26;

      let shiftedCharacter = String.fromCharCode(basicValue + diff);
      return shiftedCharacter;
    })
    .join('');


  // const sumResponse = `text is ${text}, ${cipherShift}, ${shift}`;

  res
    .status(200)
    .send(cipher);
});
