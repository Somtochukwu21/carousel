const track = document.querySelector(".carousel__track");
const slides = Array.from(track.children);
const nextBtn = document.querySelector(".carousel__button--right");
const prevBtn = document.querySelector(".carousel__button--left");
const dotsNav = document.querySelector(".carousel__nav");
const dots = Array.from(dotsNav.children);


const slideSize = slides[0].getBoundingClientRect();
const slideWidth = slideSize.width;

// arrange slides flex
const setSlidePosition = (slide, index) => (slide.style.left = slideWidth * index + "px");

slides.forEach(
    setSlidePosition
);

const moveToSlide = (track,currentSlide,  targetSlide) => {
    track.style.transform = `translateX(-${targetSlide.style.left})`;
    [currentSlide, targetSlide].forEach(slide => slide.classList.toggle('current-slide'));
}

// move left
prevBtn.onclick = () => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    moveToSlide(track,currentSlide,prevSlide)
}

// move right
nextBtn.onclick = () => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;

    // Move to the next slide
    moveToSlide(track,currentSlide,nextSlide)

}
// move to indicated slide
dotsNav.addEventListener('click', (e) => {
    const targetDot = e.target.closest('button');
    if (!targetDot) return
    const currentSlide = track.querySelector('.current-slide');
    const currentDot = dotsNav.querySelector('current-slide')
    const targetIndex = dots.findIndex(dot => dot === targetDot)
    
})