const favoritesBlock = document.querySelector('#favorites__block');//для остановки сеттайм
const favoritesContainer = document.querySelector('#favorites-items');
const favoritesTrack = document.querySelector('.favorites-track');
const seasonBtn = document.querySelectorAll('.season');
const seasonBtnPags = document.querySelectorAll('.season-form__info');
const favSlidersToShow = 1;
let favPosition = 0;
let favSlidersToScroll = 1;
let favBtnPagIndex = 0;
let favItemWidth;

favItemWidth = (favoritesContainer.clientWidth / favSlidersToShow);
const nextSlide = () => {
    if (favPosition < (seasonBtnPags.length - favSlidersToShow) * favItemWidth) {
        favPosition += favItemWidth;
        favBtnPagIndex++;
    } else{
        favPosition = 0;
        favBtnPagIndex = 0;
    };
    favoritesTrack.style.left = -favPosition + 'px';
};

seasonBtnPags.forEach((btnPag, index) => {
    btnPag.addEventListener('click', () => {
        favoritesTrack.classList.add('fade-out');
        setTimeout(() => {
            favPosition = favItemWidth * index;
            favoritesTrack.style.left = -favPosition + 'px';
        favBtnPagIndex = index;
        }, 400);
        setTimeout (() => {
            favoritesTrack.classList.remove('fade-out');
            favoritesTrack.classList.add('fade-in');
        }, 400);
     });
});
