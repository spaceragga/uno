'use strict';

let money = +prompt("Ваш бюджет на месяц?", ''),
    time = prompt("Введите дату в формате YYYY-MM-DD", '');

let appdata = {
    finance: money,
    timeData: time,
    expenses: {},
    optional: {},
    income: [],
    savings: false
};

// for (let i = 0; i < 2; i++) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//         b = prompt("Во сколько обойдется?", '');

//     if ( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null
//         && a != '' && b != '' && a.length < 50) {
//         console.log("done");
//         appdata.expenses[a] = b;
//         } else {

//         }
// };

// let i = 1;
// while (i < 3) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//         b = prompt("Во сколько обойдется?", '');

//         if ( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null
//         && a != '' && b != '' && a.length < 50) {
//         console.log("done");
//         appdata.expenses[a] = b;};
//         i++;
// };

var i = 1;
do {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = prompt("Во сколько обойдется?", '');

    if ( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null
        && a != '' && b != '' && a.length < 50) {
        console.log("done");
        appdata.expenses[a] = b;
        }
    i++;
} while (i < 3);

appdata.moneyPerDay = appdata.finance / 30;

alert("Ежедневный бюджет: " + appdata.moneyPerDay / 30);

if(appdata.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (appdata.moneyPerDay > 100 && appdata.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if (appdata.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка")
}
