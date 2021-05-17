let count = 0;
printCount();
$("#add").on("click", add);
$("#dec").on("click", dec);

function add() {
  count++;
  printCount();
}

function dec() {
  count--;
  printCount();
}

function printCount() {
  $("header:last-of-type").text(count);
}