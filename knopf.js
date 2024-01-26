<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Button Color Change</title>
  <style>
    /* Stil für den Button */
    button {
      padding: 10px 20px;
      font-size: 16px;
      cursor: pointer;
    }
  </style>
</head>
<body>

<button id="colorButton">Ändere die Farbe</button>

<script>
  // Funktion zum Generieren einer zufälligen Farbe in Hexadezimal-Schreibweise
  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  // Funktion zum Ändern der Farbe des Buttons
  function changeButtonColor() {
    var button = document.getElementById('colorButton');
    var randomColor = getRandomColor();
    button.style.backgroundColor = randomColor;
  }

  // Den Button mit der Funktion verknüpfen
  document.getElementById('colorButton').addEventListener('click', changeButtonColor);
</script>

</body>
</html>
