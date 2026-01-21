const menuBtn = document.querySelector('.menu');
const closeBtn = document.querySelector('.phone__close');
const header = document.querySelector('.header');

menuBtn.addEventListener('click', () => {
	header.classList.add('active');
});

closeBtn.addEventListener('click', () => {
	header.classList.remove('active');
});
