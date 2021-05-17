let color = "purple";
let number = 10;
let word = "cool";
if (color=="purple") {
  $(".north").css("background-color", "purple");
}
if (number>100) {
  $(".east").text("wow, de nagy szám");
} else {
  $(".east").text("ez csak egy közönséges szám");
}
if (word=="cool") {
  $(".south").text("A DOM Ereje");
} else {
  $(".south").text("");
}