'use strict';

let money = prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");

let appdata = {
    finance: 'money',
    timeData: 'time',
    expenses: {"first" : "second"},
    optional: '',
    income: '',
    savings: false
};

let first = prompt("Введите обязательную статью расходов в этом месяце");
let second = prompt("Во сколько обойдется?");

alert(money / 30);