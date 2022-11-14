const searchHotelLink = document.querySelector('.button-hotel-text');
const modal = document.querySelector('.modal-container');
const modalCloseButton = document.querySelector('.modal-close-button');

searchHotelLink.addEventListener('click', function (evt) {
    evt.preventDefault();
    modal.classList.add('modal-container--show');
});


modalCloseButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    modal.classList.remove('modal-container--show');
});
