function setupSlider(sliderId) {
    const track = document.getElementById(`slider${sliderId}-track`);
    const dots = document.querySelectorAll(`#slider${sliderId}-pagination .dot`);
    const prevBtn = document.querySelector(`.slider-prev[data-slider="${sliderId}"]`);
    const nextBtn = document.querySelector(`.slider-next[data-slider="${sliderId}"]`);
    const totalSlides = dots.length;
    let currentSlide = 0;

    function updateSlider() {
        const offset = currentSlide * -33.33;
        track.style.transform = `translateX(${offset}%)`;

        dots.forEach(dot => dot.classList.remove('active'));
        dots[currentSlide].classList.add('active');
    }

    nextBtn.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlider();
    });

    prevBtn.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateSlider();
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            updateSlider();
        });
    });
}

setupSlider(1);
setupSlider(2);
setupSlider(3);