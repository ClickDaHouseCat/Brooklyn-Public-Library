// Выбор сезона
const winterR = document.querySelector('#winter')
const springR = document.querySelector('#spring')
const summerR = document.querySelector('#summer')
const autumnR = document.querySelector('#autumn')

const winter = document.querySelector('.season-winter')
const spring = document.querySelector('.season-spring')
const summer = document.querySelector('.season-summer')
const autumn = document.querySelector('.season-autumn')

winterR.addEventListener('click', function(){
    winter.classList.add('book-opacity');
    spring.classList.remove('book-opacity');
    summer.classList.remove('book-opacity');
    autumn.classList.remove('book-opacity');
});

springR.addEventListener('click', function(){
    winter.classList.remove('book-opacity');
    spring.classList.add('book-opacity');
    summer.classList.remove('book-opacity');
    autumn.classList.remove('book-opacity');
});

summerR.addEventListener('click', function(){
    winter.classList.remove('book-opacity');
    spring.classList.remove('book-opacity');
    summer.classList.add('book-opacity');
    autumn.classList.remove('book-opacity');
});

autumnR.addEventListener('click', function(){
    winter.classList.remove('book-opacity');
    spring.classList.remove('book-opacity');
    summer.classList.remove('book-opacity');
    autumn.classList.add('book-opacity');
});
