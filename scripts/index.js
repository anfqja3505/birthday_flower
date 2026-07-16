/* 탄생화 birthday_flower */
/* index.js */
const popup = document.querySelector('.result_popup');
const popup_bg = document.querySelector('.birthday_flower_bg');

console.log(popup, popup_bg)

//자바스크립트에서 css 쓰려면 작성하는 순서? 객체.style.속성= 값
popup.style.display = 'none';
popup_bg.style.display = 'none';
//자바스크립트에서 display=none으로 숨겼다가 특정이벤트에 따라 다시 보이고 싶을 때
//무조건 block을 쓰는게 아닌 그 선택자가 원래 가지고 있는 display 속성으로 되돌리기
// display:flex가 선택자에 원래 있었다면 자바스크립트도 display=flex;
// display가 선택자에 없었다면? 원래 태그 고유속성에 따라 display=block 또는 display=inline

function popupOpen() {
    popup.style.display = 'flex';
    popup_bg.style.display = 'block';
}

function popupClose() {
    popup.style.display = 'none';
    popup_bg.style.display = 'none';
}

const user_month = document.querySelector('#user_birthday')

console.log(user_month)

function insertMonth() {
    user_month.value = '12';
}

