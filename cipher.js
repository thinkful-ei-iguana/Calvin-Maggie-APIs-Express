const express = require("express");
const morgan = require("morgan");

const app = express();

// This is middleware that requests pass through
// on their way to the final handler
app.use(morgan("dev"));

//This is the final request handler
// app.get('/', (req, res) => {
//   res.send('Hello Express!');
// });

app.listen(8000, () => {
  console.log("Express server is listening on port 8001!");
});

app.get("/sum", (req, res) => {
  const { a, b } = req.query;

  if (!a) {
    return res.status(400).send("A is required.");
  }

  if (!b) {
    return res.status(400).send("B is required.");
  }

  const numberA = parseInt(a);
  const numberB = parseInt(b);

  if (Number.isNaN(numberA)) {
    return "NumberA is NaN";
  }

  if (Number.isNaN(numberB)) {
    return res.status(400).send("NumberB is not a number.");
  }

  const c = numberA + numberB;

  const sumResponse = `The sum of ${numberA} and ${numberB} is ${c}.`;

  res.send(sumResponse);
});

// Create an endpoint /cipher. The handler function should accept a query parameter named text and one named shift. Encrypt the text using a simple shift cipher also known as a Caesar Cipher. It is a simple substitution cipher where each letter is shifted a certain number of places down the alphabet. So if the shift was 1 then A would be replaced by B, and B would be replaced by C and C would be replaced by D and so on until finally Z would be replaced by A. using this scheme encrypt the text with the given shift and return the result to the client. Hint - String.fromCharCode(65) is an uppercase A and 'A'.charCodeAt(0) is the number 65. 65 is the integer value of uppercase A in UTF-16. See the documentation for details.

console.log("hi world");

app.listen(8001, () => {
  console.log("Express has loaded one port joke.");
});

app.get("/cipher", (req, res) => {
  const { text, shift } = req.query;

  if (!text) {
    //3. text was not provided
    return res.status(400).send("Please provide some text");
  }

  if (!shift) {
    //3. Shift was not provided
    return res.status(400).send("We need to shift");
  }

  // const cipherText = text[].fromCharCode();
  const cipherShift = parseInt(shift);
  // 'I am a cipher'

  if (Number.isNaN(cipherShift)) {
    return "cipherShift is NaN";
  }

  // need to build the cipher
  const basicValue = "A".charCodeAt(0);

  const cipher = text
    .toUpperCase()
    .split("")
    .map(character => {
      let code = character.charCodeAt(0);

      if (code < basicValue || code > basicValue + 26) {
        return character;
      }

      let diff = code - basicValue;
      diff = diff + cipherShift;

      diff = diff % 26;

      let shiftedCharacter = String.fromCharCode(basicValue + diff);
      return shiftedCharacter;
    })
    .join("");

  // const sumResponse = `text is ${text}, ${cipherShift}, ${shift}`;

  res.status(200).send(cipher);
});

//  send an array of values to the server via a query string simply repeat the key with different values. For instance, the query string ?arr=1&arr=2&arr=3 results in the query object { arr: [ '1', '2', '3' ] }. Create a new endpoint /lotto that accepts an array of 6 distinct numbers between 1 and 20 named numbers. The function then randomly generates 6 numbers between 1 and 20. Compare the numbers sent in the query with the randomly generated numbers to determine how many match. If fewer than 4 numbers match respond with the string "Sorry, you lose". If 4 numbers match respond with the string "Congratulations, you win a free ticket", if 5 numbers match respond with "Congratulations! You win $100!". If all 6 numbers match respond with "Wow! Unbelievable! You could have won the mega millions!".

//send array to server via query string, repeat key with different values
//have another endpoint '/lotto' that accepts an array of 6 different numbers between 1&20 named numbers
//function generates 6 numbers between 1-20, compare the numbers sent in against the randomly generated numbers to see how many matched.
//if loop, less than 4 matched "Sorry, you lose", if 4 == match "Congratulations, you win a free ticket", if 5 == match "Congratulations! You win $100!", if 6== match "Wow! Unbelievable! You could have won the mega millions!"

app.get("/lotto", (req, res) => {
  const { numbers } = req.query;

  if (!numbers) {
    return res.status(400).send("Needs to have six numbers");
  }
  if (!numbersArray.isArray(numbers)) {
    return res.status(200).send("numbers must be an array");
  }

  if (Number.isNaN(numbers)) {
    return "numbers is NaN";
  }

  const numbersArray = numbers.map(number => {
    parseInt(number);
  });

  if (numbersArray.length !== 6) {
    return res.status(400).send("Please enter 6 numbers");
  }

  const winNumbers = [];
  for (let i = 0; i < 6; i++) {
    const randomNumber = Math.floor(Math.random());
    winNumbers.push(randomNumber);
  }
});

if (!numbers) {
  return res.status(200).send("numbers is required");
}

if (!Array.isArray(numbers)) {
  return res.status(200).send("numbers must be an array");
}

const guesses = numbers
  .map(n => parseInt(n))
  .filter(n => !Number.isNaN(n) && n >= 1 && n <= 20);

if (guesses.length != 6) {
  return res
    .status(400)
    .send("numbers must contain 6 integers between 1 and 20");
}

//the following is the solution code minus the ending portion (we already have it) and the starting portion which we already have

// // here are the 20 numbers to choose from
// const stockNumbers = Array(20).fill(1).map((_, i) => i + 1);

// //randomly choose 6
// const winningNumbers = [];
// for(let i = 0; i < 6; i++) {
//   const ran = Math.floor(Math.random() * stockNumbers.length);
//   winningNumbers.push(stockNumbers[ran]);
//   stockNumbers.splice(ran, 1);
// }

// //compare the guesses to the winning number
// let diff = winningNumbers.filter(n => !guesses.includes(n));

// // construct a response
// let responseText;

// switch(diff.length){
//   case 0:
//     responseText = 'Wow! Unbelievable! You could have won the mega millions!';
//     break;
//   case 1:
//     responseText = 'Congratulations! You win $100!';
//     break;
//   case 2:
//     responseText = 'Congratulations, you win a free ticket!';
//     break;
//   default:
//     responseText = 'Sorry, you lose';
// }

// // uncomment below to see how the results ran
// res.json({
//   guesses,
//   winningNumbers,
//   diff,
//   responseText
// });
