let price = 0;
let price_1 = 0;
let price_2 = 0;
let price_3 = 0;
let price_4 = 0;
let price_5 = 0;
let price_6 = 0;
let price_7 = 0;
let price_8 = 0;
let price_9 = 0;
let price_10 = 0;
// Раздел по добавлению и удалению строк
let cont = document.querySelector(`.cont`);
let r = 0;

let cart_1 = document.querySelector(`#cart_1`);
let cart_2 = document.querySelector(`#cart_2`);
let cart_3 = document.querySelector(`#cart_3`);
let cart_4 = document.querySelector(`#cart_4`);
let cart_5 = document.querySelector(`#cart_5`);
let cart_6 = document.querySelector(`#cart_6`);
let cart_7 = document.querySelector(`#cart_7`);
let cart_8 = document.querySelector(`#cart_8`);
let cart_9 = document.querySelector(`#cart_9`);
let cart_10 = document.querySelector(`#cart_10`);



document.querySelector(`#add_плюс`).addEventListener(`click`, function (evt) {
    
    if (r == 0) {
        cart_1.classList.remove("d-none");
    } else if (r == 1) {
        cart_2.classList.remove("d-none");
    } else if (r == 2) {
        cart_3.classList.remove("d-none");
    } else if (r == 3) {
        cart_4.classList.remove("d-none");
    } else if (r == 4) {
        cart_5.classList.remove("d-none");
    } else if (r == 6) {
        cart_6.classList.remove("d-none");
    } else if (r == 7) {
        cart_7.classList.remove("d-none");
    } else if (r == 8) {
        cart_8.classList.remove("d-none");
    } else if (r == 9) {
        cart_9.classList.remove("d-none");
    } else if (r == 10) {
        cart_10.classList.remove("d-none");
    }

    if (r >= 0 && r <= 9){
        r++;
    }
    console.log(r)
});
document.querySelector(`#add_минус`).addEventListener(`click`, function (evt) {
    
    if (r == 1) {
        cart_1.classList.add("d-none");
    } else if (r == 2) {
        cart_2.classList.add("d-none");
    } else if (r == 3) {
        cart_3.classList.add("d-none");
    } else if (r == 4) {
        cart_4.classList.add("d-none");
    } else if (r == 5) {
        cart_5.classList.add("d-none");
    } else if (r == 6) {
        cart_6.classList.add("d-none");
    } else if (r == 7) {
        cart_7.classList.add("d-none");
    } else if (r == 8) {
        cart_8.classList.add("d-none");
    } else if (r == 9) {
        cart_9.classList.add("d-none");
    } else if (r == 10) {
        cart_10.classList.add("d-none");
    }
    if (r >= 1 && r <= 11){
        r--;
    }
    console.log(r)
});






// // Раздел по подщёт общей сумы
let th_2 = document.querySelector(`.th-2`);


document.querySelector(`#price`).addEventListener(`input`, function (evt) {
    price = Number(evt.target.value);
    th_2.innerHTML = `${price}₽`
});

document.querySelector(`#price_1`).addEventListener(`input`, function (evt) {
     price_1 = Number(evt.target.value);
    th_2.innerHTML = `${price + price_1}₽`
});
document.querySelector(`#price_2`).addEventListener(`input`, function (evt) {
     price_2 = Number(evt.target.value);
    th_2.innerHTML = `${price + price_1 + price_2}₽`
});
document.querySelector(`#price_3`).addEventListener(`input`, function (evt) {
     price_3 = Number(evt.target.value);
    th_2.innerHTML = `${price + price_1 + price_2 + price_3}₽`
});
document.querySelector(`#price_4`).addEventListener(`input`, function (evt) {
     price_4 = Number(evt.target.value);
    th_2.innerHTML = `${price + price_1 + price_2 + price_3 + price_4}₽`
});
document.querySelector(`#price_5`).addEventListener(`input`, function (evt) {
     price_5 = Number(evt.target.value);
    th_2.innerHTML = `${price + price_1 + price_2 + price_3 + price_4 + price_5}₽`
});
document.querySelector(`#price_6`).addEventListener(`input`, function (evt) {
     price_6 = Number(evt.target.value);
    th_2.innerHTML = `${price + price_1 + price_2 + price_3 + price_4 + price_5 + price_6}₽`
});
document.querySelector(`#price_7`).addEventListener(`input`, function (evt) {
     price_7 = Number(evt.target.value);
    th_2.innerHTML = `${price + price_1 + price_2 + price_3 + price_4 + price_5 + price_6 + price_7}₽`
});
document.querySelector(`#price_8`).addEventListener(`input`, function (evt) {
     price_8 = Number(evt.target.value);
    th_2.innerHTML = `${price + price_1 + price_2 + price_3 + price_4 + price_5 + price_6 + price_7 + price_8}₽`
});
document.querySelector(`#price_9`).addEventListener(`input`, function (evt) {
     price_9 = Number(evt.target.value);
    th_2.innerHTML = `${price + price_1 + price_2 + price_3 + price_4 + price_5 + price_6 + price_7 + price_8 + price_9}₽`
});
document.querySelector(`#price_10`).addEventListener(`input`, function (evt) {
     price_10 = Number(evt.target.value);
    th_2.innerHTML = `${price + price_1 + price_2 + price_3 + price_4 + price_5 + price_6 + price_7 + price_8 + price_9 + price_10}₽`
});








