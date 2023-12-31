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


const updateDots=(currentDot,targetDot)=>
[currentDot, targetDot].forEach(dot => dot.classList.toggle('current-slide'));

const hideShowArrows = (slides,prevBtn,nextBtn ,targetIndex) => {
        prevBtn.classList.toggle('is-hidden', targetIndex === 0);
    nextBtn.classList.toggle('is-hidden', targetIndex === slides.length - 1);

}


// move left
prevBtn.onclick = () => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const prevDot = currentDot.previousElementSibling;
    const prevIndex=slides.findIndex(slide=>slide===prevSlide)


    moveToSlide(track, currentSlide, prevSlide)
    updateDots(currentDot, prevDot);
    hideShowArrows(slides, prevBtn, nextBtn, prevIndex);

    
}
 

// move right
nextBtn.onclick = () => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const nextDot = currentDot.nextElementSibling;
    const nextIndex=slides.findIndex(slide=>slide===nextSlide)
    // Move to the next slide
    moveToSlide(track,currentSlide,nextSlide)
    updateDots(currentDot, nextDot);
    hideShowArrows(slides, prevBtn, nextBtn, nextIndex);


}
// move to indicated slide
dotsNav.addEventListener('click', (e) => {
 const targetDot = e.target.closest('button');
if (!targetDot) return;

const currentSlide = track.querySelector('.current-slide');
const currentDot = dotsNav.querySelector('.current-slide');
const targetIndex = dots.findIndex(dot => dot === targetDot);
const targetSlide = slides[targetIndex];

moveToSlide(track, currentSlide, targetSlide);
updateDots(currentDot,targetDot)
 hideShowArrows(slides,prevBtn,nextBtn ,targetIndex) 

})