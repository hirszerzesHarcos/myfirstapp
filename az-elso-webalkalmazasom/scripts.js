let imagesData = [{
  photo: "images/photo01.webp",
  title: "My title",
  description: "What happened here, why is this a very nice image"
}, {
  photo: "images/photo02.jpg",
  title: "My title",
  description: "What happened here, why is this a very nice image"
}, {
  photo: "images/photo03.jpg",
  title: "My title",
  description: "What happened here, why is this a very nice image"
}, {
  photo: "images/photo04.jpeg",
  title: "My title",
  description: "What happened here, why is this a very nice image"
}, {
  photo: "images/photo05.jpg",
  title: "My title",
  description: "What happened here, why is this a very nice image"
}, {
  photo: "images/photo06.jpg",
  title: "Lonely Oak Tree",
  description: "Aki hegyeti, mézi, hogy a szalus minden tiktolaszával ki tatrál iszegecskednie. Ezt a bolatást mindössze 4 tozással ezelőtt tetelték bólkodnia, elenevényben csak egy tozása börzés."
}, {
  photo: "images/photo07.jpg",
  title: "My title",
  description: "What happened here, why is this a very nice image"
}, {
  photo: "images/photo08.jpg",
  title: "My title",
  description: "What happened here, why is this a very nice image"
}];

let currentPhoto = 0;

$(document).ready(function () {
  imagesData.forEach(function (image, index) {
    $(".thumbnails").append(`<div class="thumbnail" data-number="${index}"><div class="content"><div class="tooltip"><span class="tooltip-text">${image.title}</span></div></div></div>`);
    $(`.thumbnails>.thumbnail[data-number="${index}"]>.content`).css("background-image", 'url("' + image.photo + '"), linear-gradient(white, lightgray)');
  });
  $(".image-gallery>.thumbnails>.thumbnail").click((event) => {
    currentPhoto = parseInt($(event.target).parent().attr("data-number"));
    loadPhoto(currentPhoto);
  });
  loadPhoto(currentPhoto);
});

let loadPhoto = (photoNumber) => {
  $(".photo").css("background-image", `url("${imagesData[photoNumber].photo}")`);
  $(".photo-title").text(imagesData[photoNumber].title);
  $(".photo-description").text(imagesData[photoNumber].description);
  $(".thumbnails>.thumbnail[data-number]").removeClass("active");
  $(`.thumbnails>.thumbnail[data-number="${photoNumber}"]`).addClass("active");
}

$(".next").click(() => {
  currentPhoto++;
  currentPhoto %= imagesData.length;
  loadPhoto(currentPhoto);
});

$(".prev").click(() => {
  if (currentPhoto > 0) {
    currentPhoto--;
  } else {
    currentPhoto = imagesData.length - 1;
  }
  loadPhoto(currentPhoto);
})