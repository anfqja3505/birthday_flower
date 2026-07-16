# birthday_flower

# **2026-07-13**

## 업데이트
### html
* `#user_birthday`에 `type="number"`, `autofocus` 속성 추가
* `.result_popup` 결과창 추가
* `.birthday_flower_bg`(배경) 추가
### css
* 결과창(`.result_popup`) 크기, 위치, 배경색, 테두리, 모서리 반경, 자식 요소 중앙 정렬 및 간격 수정
* 결과창 `.result_popup` 부모~자식 선택자 추가 및 속성 추가
* `.birthday_flower_bg` 추가 및 배경색, 위치 추가

## 오류 및 수정
### html
* `div.contents` => `form:get#frm1`로 수정
### css
* 스타일이 적용되지않음 -> `.contents` -> `#frm1`로 선택자 수정

# **2026-07-14**

## 업데이트
### html
* 스크립트파일(`index.js`) 연결
* 버튼과 배경 태그 안에 `onclick` 속성 추가 후 함수 연결
* onclick 속성 추가
### css
* 결과창, 배경에 배치 순서 변경 (`z-index`)
* 결과창 글꼴, 글자크기, 글자굵기 변경
### js
* `scripts/index.js` 파일 추가
* `popup`, `popup_bg` 변수명 생성 및 대입(결과창, 배경)
* console.log을 사용해 변수값 확인 -> 오류 없음
* 배경과 팝업창의 `display` 속성을 `none`으로 변경 (숨김처리)
* 함수 생성(`popupOpen()`, `popupClose()`)

## 오류 및 수정
### js
* 회색 배경창이 사라지지 않음 -> js에서 `popup.style.display = 'none';`이 중복(2개)되던걸 수정 (`popup` -> `popup_bg`)

# **2026-07-15**

## 업데이트
### html
* `#user_birthday`에 `onclick` 속성 추가 및 함수 연결.
### js
* `user_month` 변수명 생성 및 대입(입력창)
* console.log을 사용해 변수값 확인 -> 오류 없음.
* 함수 생성(`#user_birthday`)

# **2026-07-16**

## 업데이트
### html
* `#user_birthday`에 `maxlenth` 속성 추가