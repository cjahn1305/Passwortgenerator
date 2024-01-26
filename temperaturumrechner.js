// Benötigte Module laden
const readline = require('readline');

// readline-Interface erstellen
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Funktion zur Umrechnung von Celsius zu Fahrenheit
function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

// Benutzer nach der Temperatur in Celsius fragen
rl.question('Bitte geben Sie die Temperatur in Celsius ein: ', (input) => {
  // Eingabe in eine Dezimalzahl umwandeln
  const celsius = parseFloat(input);

  // Überprüfen, ob die Eingabe eine gültige Zahl ist
  if (isNaN(celsius)) {
    console.log('Ungültige Eingabe. Bitte geben Sie eine Zahl ein.');
  } else {
    // Temperatur umrechnen und ausgeben
    const fahrenheit = celsiusToFahrenheit(celsius);
    console.log(`${celsius} Grad Celsius entsprechen ${fahrenheit} Grad Fahrenheit.`);
  }

  // readline-Interface schließen
  rl.close();
});
