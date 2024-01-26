// Benötigte Module laden
const readline = require('readline');

// readline-Interface erstellen
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Funktion zum Generieren eines zufälligen Passworts
function generateRandomPassword(length) {
  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;:,.<>?';
  let password = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters.charAt(randomIndex);
  }

  return password;
}

// Benutzer nach der gewünschten Passwortlänge fragen
rl.question('Bitte geben Sie die gewünschte Passwortlänge ein: ', (input) => {
  // Eingabe in eine ganze Zahl umwandeln
  const passwordLength = parseInt(input);

  // Überprüfen, ob die Eingabe eine gültige Zahl ist
  if (isNaN(passwordLength) || passwordLength <= 0) {
    console.log('Ungültige Eingabe. Bitte geben Sie eine positive ganze Zahl ein.');
  } else {
    // Passwort generieren und ausgeben
    const password = generateRandomPassword(passwordLength);
    console.log(`Generiertes Passwort: ${password}`);
  }

  // readline-Interface schließen
  rl.close();
});
