let additionalBlock = {
  title: "Beillesztve JavaScripttel",
  text: "Ez a blokk a JavaScript jQuery könyvtárával lett beillesztve. Király!"
};

let array = ["Tóth Anna", "Gipsz Jakab", "Oldal Gábor", "Nagy Béla", "Pünkösdi Johanna"];
array.forEach(nameToList);

$("body").append(`<h2>${additionalBlock.title}</h2><p>${additionalBlock.text}</p>`);

function nameToList(fullName) {
  $("ol > li:last-of-type").append(`<li>${strong(fullName)}</li>`);
}

function strong(fullName) {
  if (fullName == "Oldal Gábor") {
    return "<strong>" + fullName + "</strong>";
  } else {
    return fullName;
  }
}

/*
Adj új tartalmat az oldal végéhez: a title legyen egy fejlécben (pl. <h1>), a text pedig egy bekezdésben (<p>)
*/