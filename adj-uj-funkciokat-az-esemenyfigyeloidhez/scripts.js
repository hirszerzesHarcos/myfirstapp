let colorPicker = $("#color");
let background = $(colorPicker).val("blue");

$('button[value="1"]').on("click", writeToConsole);
$('button[value="2"]').on("click", changeFirstButtonText);
$('button[value="3"]').on("click", function () { changeButtonBackgroundColor($('button[value="3"]')) });

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
  let randomColor = Math.floor(Math.random() * 16777215).toString(16); // 256*256*256-1=16777215
  $("button").css("background-color", "#" + randomColor);
}

function changeButtonBackgroundColor(element) {
  changeButtonsBackgroundColor();
  if (!element.prop("disabled")) {
    background = $(colorPicker).val();
    $(element).css("background-color", background);
    element.prop("disabled", true);
  }
}