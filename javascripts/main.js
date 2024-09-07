const slider = document.getElementById('slider');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const cardWidth = document.querySelector('.card').offsetWidth + 16; // Width + margin

let scrollPosition = 0;

prevButton.addEventListener('click', () => {
    scrollPosition = Math.max(0, scrollPosition - cardWidth * 3);
    slider.scrollLeft = scrollPosition;
});

nextButton.addEventListener('click', () => {
    const maxScroll = slider.scrollWidth - slider.clientWidth;
    scrollPosition = Math.min(maxScroll, scrollPosition + cardWidth * 3);
    slider.scrollLeft = scrollPosition;
});