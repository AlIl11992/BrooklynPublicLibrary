const aboutBlock = document.querySelector('#about__block')
const slidersToScroll = 1;
const container = document.querySelector('#slider__container');
const track = document.querySelector('#slider__track');
const btnPrev = document.querySelector('#arrow-left');
const btnNext = document.querySelector('#arrow-right');
const carouselPagination = document.querySelectorAll('#carousel__pagination');
const btnPags = document.querySelectorAll('.active-slide-pagination');
const btnFirst = document.querySelector('#btn__slider-item1');
let position = 0;
let btnPagIndex = 0;
let itemWidth;
let slidersToShow;

const mediaQuery = window.matchMedia('(max-width: 1439px)');
if (mediaQuery.matches) {
    slidersToShow = 1;
    itemWidth = container.clientWidth / slidersToShow;
    btnPrev.classList.add('active--none');

    const nextSlide = () => {
        btnPrev.classList.remove('active--none');
        if (position < (btnPags.length - slidersToShow) * itemWidth) {
            position += itemWidth;
            btnNext.classList.remove('active--none');
            btnPagIndex++;
        } else if (position <= (btnPags.length - slidersToShow) * itemWidth) {
            btnNext.disabled;
            btnNext.classList.add('active--none');         
        } else {
            position = 0;
            btnNext.classList.remove('active--none');
            btnPagIndex = 0;
        };
        track.style.left = -position + 'px';
        thisSlide(btnPagIndex);
    };
    
    const prevSlide = () => {
        btnNext.classList.remove('active--none');
        if (position > 0) {
            position -= itemWidth;
            btnPrev.classList.remove('active--none');
            btnPagIndex--;
        } else if (position === 0) {
            btnPrev.disabled;
            btnPrev.classList.add('active--none');
        } else {
            position = (btnPags.length - slidersToShow) * itemWidth;
            btnPrev.classList.remove('active--none');
            btnPagIndex = btnPags.length - slidersToShow;
        };
        track.style.left = -position + 'px';
        thisSlide(btnPagIndex);
    };
    
    btnNext.addEventListener('click', nextSlide); 
    btnPrev.addEventListener('click', prevSlide);
    
    let thisSlide = (index) => {
        for (let btnPag of btnPags) {
           btnPag.classList.remove('btn--active');
           btnPag.classList.remove('active--none');
           btnPag.classList.add('active--cursor');
        };
        btnPags[index].classList.add('btn--active');
        btnPags[index].classList.remove('active--cursor');
        btnPags[index].classList.add('active--none');
    }
    
    btnFirst.classList.add('btn--active');
    
    btnPags.forEach((btnPag, index) => {
        btnPag.addEventListener('click', () => {
            position = itemWidth * index;
            track.style.left = -position + 'px';
            btnPagIndex = index;
            thisSlide(btnPagIndex);
         });
    });
}
else {
    slidersToShow = 3;
    itemWidth = (container.clientWidth / slidersToShow) + 8;
    const nextSlide = () => {
        if (position < (btnPags.length - slidersToShow) * itemWidth) {
            position += itemWidth;
            btnPagIndex++;
        } else{
            position = 0;
            btnPagIndex = 0;
        };
        track.style.left = -position + 'px';
        thisSlide(btnPagIndex);
    };
  
    let thisSlide = (index) => {
        for (let btnPag of btnPags) {
           btnPag.classList.remove('btn--active');
           btnPag.classList.remove('active--none');
           btnPag.classList.add('active--cursor');
        };
        btnPags[index].classList.add('btn--active');
        btnPags[index].classList.remove('active--cursor');
        btnPags[index].classList.add('active--none');
    }
    
    btnFirst.classList.add('btn--active');
    btnFirst.classList.add('active--none');
    
    btnPags.forEach((btnPag, index) => {
        btnPag.addEventListener('click', () => {
            position = itemWidth * index;
            track.style.left = -position + 'px';
            btnPagIndex = index;
            thisSlide(btnPagIndex);
         });
    })

    let cycleSlider = setInterval( () => {
        nextSlide();
    }, 2000);

    aboutBlock.addEventListener('mouseover', () => {
        clearInterval(cycleSlider);
    });

    aboutBlock.addEventListener('mouseleave', () => {
        cycleSlider = setInterval( () => {
            nextSlide();
        }, 2000);
    });
};



    