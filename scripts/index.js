/* 탄생화 birthday_flower */
/* index.js */
const popup = document.querySelector('.result_popup');
const popup_bg = document.querySelector('.birthday_flower_bg');

console.log(popup)
console.log(popup_bg)

popup.style.display = 'none';
popup_bg.style.display = 'none';

function popupOpen() {
    popup.style.display = 'flex';
    popup_bg.style.display = 'block';
}

function popupClose() {
    popup.style.display = 'none';
    popup_bg.style.display = 'none';
}

let user_month = document.querySelector('#user_birthday')

console.log(user_month)

function insertMonth() {
    user_month.value = '12';
}

