const navSlide = document.querySelector('.slide');
const page = document.querySelector('.page');

navSlide.addEventListener('click', () => {
    navSlide.classList.toggle('active');
    page.classList.toggle('active');
})