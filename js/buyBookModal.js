function buyBook() {

    const cardNumber = document.getElementById('number-card').value
    const expirMonth = document.getElementById('expiration').value
    const expirYear = document.getElementById('expiration2').value
    const cvc = document.getElementById('CVC').value
    const cardholder = document.getElementById('cardholer-name').value
    const post = document.getElementById('postal-code').value
    const city = document.getElementById('city-town').value

    //Проверка заполнености полей
    if (cardNumber === '' || expirMonth === '' || expirYear === '' || cvc === '' || cardholder === '' || post === '' || city === ''){
        alert('Не все поля заполнены');
        return false;
    }

    //Проверка длины ввода
    if (cardNumber.length != 16){
        alert('Введите номер карты (16 цифр)');
        return false;
    }

    if (expirMonth.length != 2 ){
        alert ('Введит месяц (2 цифры)')
    }

    if (expirYear.length != 2){
        alert ('Введит год (2 цифры)')
    }

    expirMonth.addEventListener('input', function() {
        let value = parseInt(monthInput.value, 10);
        if (value >= 1 && value <= 12) {
            monthInput.value = value.toString().padStart(2, '0');
        }
    });

    if (cvc.length !== 3){
        alert('CVC - 3 цифры на обратной стороне карты');
        return false;
    }

    return true;
}

const buyBookButton = document.getElementById('buyBookButton') // кнопка в карточке
const buyLibraryCard = document.querySelector('.buy-library-card') // карточка книги
const buyButtons = document.querySelectorAll('.book-buy-button')

let bookCount = 0 // счетчик книг

buyButtons.forEach(button => {
    button.addEventListener('click', function() {
        buyLibraryCard.style.display = 'block';
        blackback.classList.add('opacity-vision')
        this.classList.add('book-own');
    });
});


//Покупка книги

buyBookButton.addEventListener('click', function(){
    const isValid = buyBook();

    if (isValid == true) {
        buyButtons.forEach(button => {
            button.classList.add('book-own')
        });

        buyLibraryCard.style.display = 'none'
        blackback.style.display = 'none'

        bookCount++
        console.log('Книг куплено: ' + bookCount)
    }
})

const closeCard = document.getElementById('closeCard')
closeCard.addEventListener('click', function(){
    buyLibraryCard.style.display = 'none'
    blackback.classList.remove('opacity-vision')
})


const blackbackS = document.querySelector('.black-background')
blackbackS.addEventListener('click', function(){
    buyLibraryCard.style.display = 'none'
})



