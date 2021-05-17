$('input[type="button"]').on("click", addToDo);
$('input[type="text"]').keypress(isEnter);

function isEnter(e) {
  if(e.key=="Enter"){
    console.log("hahaha");
    $('input[type="button"]').click();
    return false;
  }
}

function addToDo() {
  $("ul").append("<li>" + $('input[type="text"]').val() + "</li>");
  $("li").on("click", lineThrough);
}

function lineThrough() {
  $(this).css("text-decoration", "line-through");
}