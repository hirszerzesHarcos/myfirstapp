$('.addBtn').on("click", addToDo);
$("li").on("click", lineThrough);
$('input[type="text"]').keypress(isEnter);

function isEnter(e) {
  if (e.key == "Enter") {
    $('.addBtn').click();
    return false;
  }
}

function addToDo() {
  if ($('input[type="text"]').val() !== "") {
    $("ul").append(`<li>${$('input[type="text"]').val()}</li>`);
    $("li").on("click", lineThrough);
  }
}

function lineThrough() {
  $(this).css("text-decoration", "line-through");
}