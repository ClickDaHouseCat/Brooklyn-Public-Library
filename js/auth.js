function validation(){
    let firstName = document.getElementById('register-name').value,
        lastName = document.getElementById('register-lname').value,
        email = document.getElementById('register-email').value,
        password = document.getElementById('register-password').value;

    //Проверка заполнености полей
    if (firstName === '' || lastName === '' || email === '' || password === ''){
        alert('Не все поля заполнены')
        return false;
    }

    //Проверка валидности почты
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
        alert('Введите корректную почту')
        return false;
    }

    //Проверка длины пароля
    if (password.length < 8){
        alert('Длина пароля не меньше 8 символов');
        return false;
    }

    // Генерация 16-ричного 8-значного кода
    let idCard = Math.floor(Math.random() * 0xFFFFFFFF).toString(16).toUpperCase();


    //Сохранение пользователя
    let newUser = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        idcard: idCard
    }

    console.log('пользователь сохранен')

     // Сохранение информации о текущем пользователе в localStorage
     localStorage.setItem('currentUser', JSON.stringify(newUser));

    //Проверка дублирования
    let existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    for (let i = 0; i < existingUsers.length; i++) {
        if (existingUsers[i].email === email) {
            alert('Пользователь с такой почтой уже зарегистрирован');
            return false;
        }
    }

    existingUsers.push(newUser)
    localStorage.setItem('users', JSON.stringify(existingUsers));

    console.log('Пользователь добавлен в массив')

    // Очистка полей ввода
    document.getElementById('register-name').value = '';
    document.getElementById('register-lname').value = '';
    document.getElementById('register-email').value = '';
    document.getElementById('register-password').value = '';

    console.log('поля очищены')

    // Обновление иконки на инициалы
    let iconProfile = document.getElementById('profile-icon'),
        profileID = document.getElementById('prof-title'),
        avatar = document.getElementById('avatar'),
        initials = firstName.charAt(0).toUpperCase() + lastName.charAt(0).toUpperCase(),
        profileName = document.getElementById('name'),
        profileIdCard = document.getElementById('card-number'),
        modalRegister = document.querySelector('.modal-register')
        booksCount = document.querySelector('.bookscount'),
        fullName = currentUser.firstName + ' ' + currentUser.lastName;

    modalRegister.style.display = 'none'
    iconProfile.style.display = 'none'
    avatar.style.display = 'block'
    localStorage.setItem('currentUser', JSON.stringify(newUser))
    profileID.textContent = idCard;
    avatar.textContent = initials;
    profileName.textContent = firstName + " " + lastName;
    profileIdCard.textContent = idCard;
    document.getElementById('prof-title').textContent = idCard;
    booksCount.textContent = bookCount
    avatar.title = fullName;


    console.log('Регистрация закончена')
    alert('Регистрация успешна')
}

//Открываем меню по нажатию на иконку
const lk = document.querySelector('.profile-lk');
const modalProfile = document.querySelector('.modal-profile');
const avatar = document.getElementById('avatar')
avatar.addEventListener('click', function(){
    lk.classList.add('flex');
})


//Открытие профиля
const myProfile = document.getElementById('myProfile')
myProfile.addEventListener('click', function() {
    modalProfile.style.display = 'flex'
    blackback.classList.add('opacity-vision')
})

//Закрытие профиля
const modalClose = document.getElementById('profile-close')
modalClose.addEventListener('click', function(){
    modalProfile.style.display = 'none'
    blackback.classList.remove('opacity-vision')
})

const blackbackX = document.querySelector('.black-background')
blackbackX.addEventListener('click', function(){
    modalProfile.style.display = 'none'
})


// Проверка наличия информации о текущем пользователе при загрузке страницы
window.addEventListener('load', function() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
        // Обновление данных профиля
        let avatar = document.getElementById('avatar'),
            initials = currentUser.firstName.charAt(0).toUpperCase() + currentUser.lastName.charAt(0).toUpperCase(),
            profileName = document.getElementById('name'),
            logo = document.getElementById('logo'),
            profileIdCard = document.getElementById('card-number');
            iconProfile = document.getElementById('profile-icon'),

        avatar.textContent = initials;
        profileName.textContent = currentUser.firstName + " " + currentUser.lastName;
        profileIdCard.textContent = currentUser.idcard;
        logo.textContent = initials;
        iconProfile.style.display = 'none'
        avatar.style.display = 'block'
    }
});


//Обработка нажатия кнопки
const signup = document.getElementById('signup')
signup.addEventListener('click', validation)


//Функция сохранения информации о пользователе
function saveUserInfo(userInfo){
   localStorage.setItem('userInfo')
}

// Обработчик события для кнопки "Выйти"
let logoutButton = document.getElementById('logout'),
    iconProfile = document.getElementById('profile-icon');

    logoutButton.addEventListener('click', function() {
    localStorage.removeItem('currentUser'); // Удаляем информацию о текущем пользователе
    alert('Вы успешно вышли из профиля');
    // Очищаем данные профиля
    document.getElementById('avatar').textContent = '';
    document.getElementById('name').textContent = '';
    document.getElementById('idcard').textContent = '';
});

const loginButton = document.getElementById('login')
loginButton.addEventListener('click', loginProfile)

// Функция для входа в систему
function loginProfile() {
    const emailOrIdCard = document.getElementById('login-email-or-idcard').value;
    const password = document.getElementById('login-password').value;

    //Проверка заполнености полей
    if (emailOrIdCard === '' || password === ''){
        alert('Не все поля заполнены')
        return false;
    }

    // Получение сохраненных данных пользователя из локального хранилища
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

    // Поиск пользователя с введенными данными
    const user = existingUsers.find(u => (u.email === emailOrIdCard || u.idcard === emailOrIdCard) && u.password === password);

    if (user) {
        alert('Вход успешен');
        document.getElementById('login-email-or-idcard').value = '';
        document.getElementById('login-password').value = '';
        login.style.display = 'none'
        profile.style.display = 'none'
        document.querySelector('.black-background').classList.remove('opacity-vision');
        document.getElementById('profile-icon').style.display = 'none'
        document.getElementById('avatar').style.display = 'block'
    } else {
        alert('Неверный Email/IDCard или пароль!');
    }

    // Обновляем данные профиля
        const avatar = document.getElementById('avatar');
        const profileName = document.getElementById('name');
        const profileIdCard = document.getElementById('card-number');
        const iconProfile = document.getElementById('profile-icon');

        const initials = user.firstName.charAt(0).toUpperCase() + user.lastName.charAt(0).toUpperCase();
        avatar.textContent = initials;
        profileName.textContent = user.firstName + " " + user.lastName;
        profileIdCard.textContent = user.idcard;


    localStorage.setItem('currentUser', JSON.stringify(newUser))

     // Сохраняем пользователя в локальное хранилище
     localStorage.setItem('currentUser', JSON.stringify(user));

    return true
}

//копирование idCard
const copyButton = document.getElementById("copy-button");
        const cardNumber = document.getElementById("card-number");

        copyButton.addEventListener("click", function () {
            const textToCopy = cardNumber.textContent; // Получаем текст из элемента card-number
            const textArea = document.createElement("textarea");
            textArea.value = textToCopy;

            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand("copy");
            document.body.removeChild(textArea);

            alert("Номер карты скопирован в буфер обмена: " + textToCopy);
        });
