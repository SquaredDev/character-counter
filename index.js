const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is the input text? ', (answer) => {
  let count = answer.length

  if (count > 1 || count < 1) {
    console.log(`You text was \'${answer}\'. \'${answer}\' has ${count} characters.`);
  }
  else {
    console.log(`You text was \'${answer}\'. \'${answer}\' has ${count} character.`);
  }
  rl.close();
});
