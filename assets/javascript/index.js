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

// move left
// move right
nextBtn.onclick = () => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const amountToMove = nextSlide.style.left;   
    
    // move to next slide
    track.style.transform = `translateX(-${amountToMove})`
    currentSlide.classList.remove('current-slide')
    nextSlide.classList.add('current-slide')
}
// move to indicated slide
