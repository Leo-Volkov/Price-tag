let a = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

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
    };

    if (r >= 0 && r <= 9){
        r++;
    };
});

document.querySelector(`#add_минус`).addEventListener(`click`, function (evt) {    
    if (r == 1) {
        cart_1.classList.add("d-none");
        a[1] = 0;
    } else if (r == 2) {
        cart_2.classList.add("d-none");
        a[2] = 0;
    } else if (r == 3) {
        cart_3.classList.add("d-none");
        a[3] = 0;
    } else if (r == 4) {
        cart_4.classList.add("d-none");
        a[4] = 0;
    } else if (r == 5) {
        cart_5.classList.add("d-none");
        a[5] = 0;
    } else if (r == 6) {
        cart_6.classList.add("d-none");
        a[6] = 0;
    } else if (r == 7) {
        cart_7.classList.add("d-none");
        a[7] = 0;
    } else if (r == 8) {
        cart_8.classList.add("d-none");
        a[8] = 0;
    } else if (r == 9) {
        cart_9.classList.add("d-none");
        a[9] = 0;
    } else if (r == 10) {
        cart_10.classList.add("d-none");
        a[10] = 0;
    };

    if (r >= 1 && r <= 11){
        r--;
    };
    th_2.innerHTML = `${a[0] + a[1] + a[2] + a[3] + a[4] + a[5] + a[6] + a[7] + a[8] + a[9] + a[10]}₽`;
});



// Раздел по подщёт общей сумы
let th_2 = document.querySelector(`.th-2`);


document.querySelector(`#price`).addEventListener(`input`, function (evt) {
    a[0] = Number(evt.target.value);
    th_2.innerHTML = `${a[0] + a[1] + a[2] + a[3] + a[4] + a[5] + a[6] + a[7] + a[8] + a[9] + a[10]}₽`; 
});
document.querySelector(`#price_1`).addEventListener(`input`, function (evt) {
    a[1] = Number(evt.target.value);
    th_2.innerHTML = `${a[0] + a[1] + a[2] + a[3] + a[4] + a[5] + a[6] + a[7] + a[8] + a[9] + a[10]}₽`;
});
document.querySelector(`#price_2`).addEventListener(`input`, function (evt) {
    a[2] = Number(evt.target.value);
    th_2.innerHTML = `${a[0] + a[1] + a[2] + a[3] + a[4] + a[5] + a[6] + a[7] + a[8] + a[9] + a[10]}₽`;
});
document.querySelector(`#price_3`).addEventListener(`input`, function (evt) {
    a[3] = Number(evt.target.value);
    th_2.innerHTML = `${a[0] + a[1] + a[2] + a[3] + a[4] + a[5] + a[6] + a[7] + a[8] + a[9] + a[10]}₽`;
});
document.querySelector(`#price_4`).addEventListener(`input`, function (evt) {
    a[4] = Number(evt.target.value);
    th_2.innerHTML = `${a[0] + a[1] + a[2] + a[3] + a[4] + a[5] + a[6] + a[7] + a[8] + a[9] + a[10]}₽`;
});
document.querySelector(`#price_5`).addEventListener(`input`, function (evt) {
    a[5] = Number(evt.target.value);
    th_2.innerHTML = `${a[0] + a[1] + a[2] + a[3] + a[4] + a[5] + a[6] + a[7] + a[8] + a[9] + a[10]}₽`;
});
document.querySelector(`#price_6`).addEventListener(`input`, function (evt) {
    a[6] = Number(evt.target.value);
    th_2.innerHTML = `${a[0] + a[1] + a[2] + a[3] + a[4] + a[5] + a[6] + a[7] + a[8] + a[9] + a[10]}₽`;
});
document.querySelector(`#price_7`).addEventListener(`input`, function (evt) {
    a[7] = Number(evt.target.value);
    th_2.innerHTML = `${a[0] + a[1] + a[2] + a[3] + a[4] + a[5] + a[6] + a[7] + a[8] + a[9] + a[10]}₽`;
});
document.querySelector(`#price_8`).addEventListener(`input`, function (evt) {
    a[8] = Number(evt.target.value);
    th_2.innerHTML = `${a[0] + a[1] + a[2] + a[3] + a[4] + a[5] + a[6] + a[7] + a[8] + a[9] + a[10]}₽`;
});
document.querySelector(`#price_9`).addEventListener(`input`, function (evt) {
    a[9] = Number(evt.target.value);
    th_2.innerHTML = `${a[0] + a[1] + a[2] + a[3] + a[4] + a[5] + a[6] + a[7] + a[8] + a[9] + a[10]}₽`;
});
document.querySelector(`#price_10`).addEventListener(`input`, function (evt) {
    a[10] = Number(evt.target.value); 
    th_2.innerHTML = `${a[0] + a[1] + a[2] + a[3] + a[4] + a[5] + a[6] + a[7] + a[8] + a[9] + a[10]}₽`;
});
