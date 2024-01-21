// Бургер меню

// Хватаемся за объекты в коде
const burger = document.querySelector('.burger')
const burgerClose = document.querySelector('.burger-close')
const navM = document.querySelector('.navM')

// Открываем Бургер. Добавляем класс при клике на Бургер
burger.addEventListener('click', function(){
    navM.classList.add('burger-open')
    profile.classList.remove('profile-auth-visible')
})


// Закрываем Бургер. Убираем класс при клике на бургер
burgerClose.addEventListener('click', function(){
    navM.classList.remove('burger-open')
})

// Закрываем Бургер. Кликаем в любое место
document.addEventListener('click', function(event){
    if (!burger.contains(event.target) && !navM.contains(event.target)) {
    navM.classList.remove('burger-open')
}})