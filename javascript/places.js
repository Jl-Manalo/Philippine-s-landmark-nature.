const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".video-slide");
const contents = document.querySelectorAll(".content");

let currentIndex = 0;
let slideInterval = setInterval(nextSlide, 6000);

function showSlide(index) {
    btns.forEach(btn => btn.classList.remove("active"));
    slides.forEach(slide => slide.classList.remove("active"));
    contents.forEach(content => content.classList.remove("active"));

    btns[index].classList.add("active");
    slides[index].classList.add("active");
    contents[index].classList.add("active");
    contents[index].classList.add("active");
    currentIndex = index;
}

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        clearInterval(slideInterval);
        showSlide(i);
        slideInterval = setInterval(nextSlide, 6000);
    });
});

function nextSlide() {
    let nextIndex = (currentIndex +1) % slides.length;
    showSlide(nextIndex);
}