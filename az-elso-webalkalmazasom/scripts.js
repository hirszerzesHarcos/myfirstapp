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
  title: 'My title',
  description: 'What happened here, why is this a very nice image'
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
  // ...
}
$(document).ready(function () {
  loadPhoto(currentPhoto);
});


$("#next").click(() => {
  if (imagesData.length - 1 > currentPhoto) {
    currentPhoto++;
    loadPhoto(currentPhoto);
  }
});

$("#prev").click(() => {
  if (currentPhoto > 0) {
    currentPhoto--;
    loadPhoto(currentPhoto);
  }
})