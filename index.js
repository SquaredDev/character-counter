const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is the input text? ', (answer) => {
  let count = answer.length

  console.log(`You text was \'${answer}\'. \'${answer}\' has ${count} characters.`);

  rl.close();
});
