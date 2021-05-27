function todoAdd() {
  let todo = $("#addTodoLine input").val();
  if (todo == "") {
    alert("Nem adtál meg tennivalót!");
  } else {
    $("#todoList").prepend($('<li>' + todo + '<span class="fas fa-trash"></span><span class="far fa-check-circle"></span><span class="fas fa-check-circle"></span></li>').on("click", function () {
      $(this).toggleClass("checked");
    }));
  }
}

function isEnter(event) {
  if (event.key == "Enter") {
    $("#addButton").click();
    return false;
  }
}

$(document).ready(function () {
  $("#addButton").on("click", function () {
    todoAdd();
  });
  $("#todoList").on('click', '.fa-trash', (event) => {
    $(event.target).parent().remove();
  });
  $("#addTodoLine input").keypress(isEnter);
});