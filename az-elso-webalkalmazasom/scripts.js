let imagesData = [{
  photo: 'images/photo01.webp',
  title: 'My title',
  description: 'What happened here, why is this a very nice image'
}, {
  photo: 'images/photo02.jpg',
  title: 'My title',
  description: 'What happened here, why is this a very nice image'
}, {
  photo: 'images/photo03.jpg',
  title: 'My title',
  description: 'What happened here, why is this a very nice image'
}, {
  photo: 'images/photo04.jpeg',
  title: 'My title',
  description: 'What happened here, why is this a very nice image'
}, {
  photo: 'images/photo05.jpg',
  title: 'My title',
  description: 'What happened here, why is this a very nice image'
}, {
  photo: 'images/photo06.jpg',
  title: 'Lonely Oak Tree',
  description: 'Aki hegyeti, mézi, hogy a szalus minden tiktolaszával ki tatrál iszegecskednie. Ezt a bolatást mindössze 4 tozással ezelőtt tetelték bólkodnia, elenevényben csak egy tozása börzés.'
}, {
  photo: 'images/photo07.jpg',
  title: 'My title',
  description: 'What happened here, why is this a very nice image'
}, {
  photo: 'images/photo08.jpg',
  title: 'My title',
  description: 'What happened here, why is this a very nice image'
}];

let currentPhoto = 0;

let loadPhoto = (photoNumber) => {
  $('#photo').attr('src', imagesData[photoNumber].photo);
  $('#photo-title').text(imagesData[photoNumber].title);
  $('#photo-description').text(imagesData[photoNumber].description);
}
$(document).ready(function () {
  loadPhoto(currentPhoto);
  imagesData.forEach(function (image, index) {
    $("#thumbnails").append(`<div data-number="${index}"></div>`);
    $(`#thumbnails>div[data-number="${index}"]`).css("background-image", 'url("' + image.photo + '"), linear-gradient(white, lightgray)');
  });
  $("#thumbnails>div").click((event) => {
    loadPhoto(parseInt($(event.target).attr('data-number')));
  });
});


$("#next").click(() => {
  currentPhoto++;
  currentPhoto %= imagesData.length;
  loadPhoto(currentPhoto);
});

$("#prev").click(() => {
  if (currentPhoto > 0) {
    currentPhoto--;
  } else {
    currentPhoto = imagesData.length - 1;
  }
  loadPhoto(currentPhoto);
})