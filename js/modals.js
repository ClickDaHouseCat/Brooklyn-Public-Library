// Профиль
const profileIcon = document.querySelector('#profile-icon')
const profile = document.querySelector('.profile-auth')
const profileIconM = document.querySelector('.profile-iconM')
const profileLk = document.queryCommandIndeterm('.profile-lk')

profileIcon.addEventListener('click', function(){
    profile.classList.toggle('profile-auth-visible')
    navM.classList.remove('burger-open')
})

profileIconM.addEventListener('click', function(){
  profile.classList.toggle('profile-auth-visible')
  navM.classList.remove('burger-open')
})


const loginBtn = document.querySelector('.f')
const registerBtn = document.querySelector('.s')
const login = document.querySelector('.modal-login')
const register = document.querySelector('.modal-register')
const blackback = document.querySelector('.black-background')
const loginRegister = document.querySelector('#login-register')
const registerLogin = document.querySelector('#register-login')
const rb = document.querySelector('.rb')
const signupB = document.getElementById('signupB')
const loginB = document.getElementById('loginB')

//Закрытие на крестик
// Находим кнопки закрытия
const closeButtons = document.querySelectorAll(".close");

// Обработчик для кнопок закрытия
closeButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        if (this.closest(".modal-login")) {
            login.style.display = "none";
            blackback.style.display = 'none';
            document.body.style.overflow = "auto";
        } else if (this.closest(".modal-register")) {
            register.style.display = "none";
            blackback.style.display = 'none';
            document.body.style.overflow = "auto";
        }
    });
});


signupB.addEventListener('click', function(){
    register.classList.add('block')
    register.classList.add('modal-bottom')
    login.classList.add('modal-bottom')
    register.classList.remove('hide')
    login.classList.add('hide')
    blackback.classList.add('opacity-vision')
    profile.classList.toggle('profile-auth-visible')
})

loginB.addEventListener('click', function(){
    login.classList.add('profile-auth-visible')
    login.classList.add('modal-bottom')
    register.classList.add('modal-bottom')
    login.classList.remove('hide')
    register.classList.add('hide')
    blackback.classList.add('opacity-vision')
    profile.classList.toggle('profile-auth-visible')
})

loginBtn.addEventListener('click', function(){
    login.classList.add('profile-auth-visible')
    login.classList.remove('hide')
    register.classList.add('hide')
    blackback.classList.add('opacity-vision')
    profile.classList.toggle('profile-auth-visible')
    document.body.style.overflow = "hidden"
})

registerBtn.addEventListener('click', function(){
    register.classList.add('block')
    register.classList.remove('hide')
    login.classList.add('hide')
    blackback.classList.add('opacity-vision')
    profile.classList.toggle('profile-auth-visible')
    document.body.style.overflow = "hidden"
})

loginB.addEventListener('click', function(){
  login.classList.add('profile-auth-visible')
  login.classList.remove('hide')
  register.classList.add('hide')
  blackback.classList.add('opacity-vision')
  profile.classList.toggle('profile-auth-visible')
})

signupB.addEventListener('click', function(){
  register.classList.add('block')
  register.classList.remove('hide')
  login.classList.add('hide')
  blackback.classList.add('opacity-vision')
  profile.classList.toggle('profile-auth-visible')
})

blackback.addEventListener('click',function(){
  blackback.classList.remove('opacity-vision');
  document.body.style.overflow = "auto";
  login.classList.add('hide');
  register.classList.add('hide');
})


loginRegister.addEventListener('click', function(){
    register.classList.add('block')
    register.classList.remove('hide')
    login.classList.add('hide')
    blackback.classList.add('opacity-vision')
    profile.classList.remove('profile-auth-visible')
    document.body.style.overflow = "hidden"
})

registerLogin.addEventListener('click', function(){
    login.classList.add('profile-auth-visible')
    login.classList.remove('hide')
    register.classList.add('hide')
    blackback.classList.add('opacity-vision')
    profile.classList.remove('profile-auth-visible')
    document.body.style.overflow = "hidden"
})

