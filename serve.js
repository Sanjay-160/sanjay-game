<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Number Guessing Game</title>
  <style>
    body {
      text-align: center;
      font-family: Arial, sans-serif;
    }
  </style>
</head>
<body>

<h1>Number Guessing Game</h1>
<p>Guess a number between 1 and 100:</p>
<input type="number" id="userGuess" min="1" max="100">
<button onclick="checkGuess()">Submit Guess</button>
<p id="result"></p>

<script>
  // Generate a random number between 1 and 100
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  let attempts = 0;

  function checkGuess() {
    // Get the user's guess
    const userGuess = document.getElementById('userGuess').value;

    // Check if the guess is correct
    if (userGuess == randomNumber) {
      document.getElementById('result').innerHTML = `Congratulations! You guessed the correct number in ${attempts} attempts.`;
    } else if (userGuess < randomNumber) {
      document.getElementById('result').innerHTML = 'Too low! Try again.';
    } else {
      document.getElementById('result').innerHTML = 'Too high! Try again.';
    }

    // Increment the number of attempts
    attempts++;
  }
</script>

</body>
</html>
