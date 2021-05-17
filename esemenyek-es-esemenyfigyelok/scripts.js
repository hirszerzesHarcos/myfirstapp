$('button[value="1"]').on("click", writeToConsole);
$('button[value="2"]').on("click", changeFirstButtonText);
$('button[value="3"]').on("click", changeButtonsBackgroundColor);

function writeToConsole() {
  console.log("Igen, most rám kattintottál");
}

function changeFirstButtonText() {
  let firstButtonText = $('button[value="1"]').text();
  if (firstButtonText == "Kattints rám, hogy a konzolra írhassak!") {
    $('button[value="1"]').text(firstButtonText + " Ugye, megváltoztam?!");
  } else {
    $('button[value="1"]').text("Kattints rám, hogy a konzolra írhassak!");
  }
}

function changeButtonsBackgroundColor() {
  let randomColor = Math.floor(Math.random()*16777215).toString(16);
  $("button").css("background-color", "#"+randomColor);
}