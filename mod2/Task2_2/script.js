/* 1. Дан номер месяца (1 — январь, 2 — февраль, ...). Вывести название 
    соответствующего времени года ("зима", "весна" и т.д.). */
    console.log("Первая задачка")
let numberOfMonth = Number(prompt("1. Введите номер месяца (1 — январь, 2 — февраль, ...)"));
let season;
if (numberOfMonth === 1 || numberOfMonth === 2 || numberOfMonth === 12) {
    season = "Зима";
    console.log("Поздравляем, у вас", season);
} else if (numberOfMonth === 3 || numberOfMonth === 4 || numberOfMonth === 5) {
    season = "Весна";
    console.log("Поздравляем, у вас", season);
} else if (numberOfMonth === 6 || numberOfMonth === 7 || numberOfMonth === 8) {
    season = "Лето";
    console.log("Поздравляем, у вас", season);
} else if (numberOfMonth === 9 || numberOfMonth === 10 || numberOfMonth === 11) {
    season = "Осень";
    console.log("Поздравляем, у вас", season);
} else {
    console.log("Вы ввели неправильное число");
};
/*2. Единицы длины пронумерованы следующим образом: 
    1 — дециметр, 2 — километр, 3 — метр, 4 — миллиметр, 5 — сантиметр. 
    Дан номер единицы длины и длина отрезка L в этих единицах (вещественное 
    число). Вывести длину данного отрезка в метрах.*/
let numberOfMeasure = Number(prompt("Введите единицу измерения: 1 — дециметр, 2 — километр, 3 — метр, 4 — миллиметр, 5 — сантиметр."));
let L = Number(prompt("Введите длину отрезка в указанных единицах"));
let L_in_meters;
if (numberOfMeasure === 1) {
    L_in_meters = L*0.1;
} else if (numberOfMeasure === 2) {
    L_in_meters = L*1000;
} else if (numberOfMeasure === 3) {
    L_in_meters = L;
} else if (numberOfMeasure === 4) {
    L_in_meters = L*0.001;
} else if (numberOfMeasure === 5) {
    L_in_meters = L*0.01;
} else {
    L_in_meters = undefined;
}
if (L_in_meters != undefined) {
    console.log("2 задача. Длина вашего отрезка в метрах равна", L_in_meters)
} else {
    console.log("2 задача. Проверьте введенные данные");
};
/* 3. Дано целое число, лежащее в диапазоне от -999 до 999. 
    Вывести строку - словесное описание данного числа вида 
    "отрицательное двузначное число", 
    "нулевое число", 
    "положительное однозначное число" и т.д. */
let num3 = Number(prompt("Введите целое число от -999 до 999"));
let opisanieChisla;
if (Number.isInteger(num3)) {
    if ((num3 > -1000) && (num3 < -99)) {
        opisanieChisla = "Отрицательное трехзначное число";
    } else if ((num3 > -100) && (num3 < -9)) {
        opisanieChisla = "Отрицательное двузначное число";
    } else if ((num3 > -10) && (num3 < 0)) {
        opisanieChisla = "Отрицательное однозначное число";
    } else if (num3 === 0) {
        opisanieChisla = "Нулевое число";
    } else if ((num3 > 0) && (num3 < 10)) {
        opisanieChisla = "Положительное однозначное число";
    } else if ((num3 > 9) && (num3 < 100)) {
        opisanieChisla = "Положительное двузначное число";
    } else if ((num3 > 99) && (num3 < 1000)) {
        opisanieChisla = "Положительное трехзначное число";
    }
} else {
    opisanieChisla = "Проверьте введённые данные";
};
console.log("Задача 3. Ваше число - ", opisanieChisla);
/* 4. Вывести через console.log все числа от 1 до 100, с двумя исключениями. 
    Для чисел, нацело делящихся на 3, она должна выводить ‘Three’, 
    а для чисел, делящихся на 5 (но не на 3) – ‘Five’. 
    Измените код так, чтобы она выводила «ThreeFive» для всех чисел, которые делятся и на 3 и на 5. */
let i = 1;
while (i < 101) { 
    if ((i % 3 != 0) && (i % 5 != 0)) {
    console.log( i );
    } else if ((i % 3 === 0)) {
        console.log("Three");
    } else if ((i % 3 != 0) && (i % 5 === 0)) {
        console.log("Five");
    }
    i++;
}
/* Измененный код
let i = 1;
while (i < 101) { 
    if ((i % 3 != 0) && (i % 5 != 0)) {
    console.log( i );
    } else if ((i % 3 === 0) && (i % 5 != 0)) {
        console.log("Three");
    } else if ((i % 3 != 0) && (i % 5 === 0)) {
        console.log("Five");
    } else if ((i % 3 === 0) && (i % 5 === 0)) {
        console.log("ThreeFive")
    }
    i++;
} */
/*5*. Пользователь вводит год, необходимо определить 
    является ли он високосным. Примеры данных для тестирования:
    1) '2000' – високосный год
    2) '1800' – не високосный год*/
let year = Number(prompt("Введите год, чтобы узнать, високосный он или нет"));
let ifLeap;
if ((Number.isInteger(year)) && (year > 0)) {
    if (((year % 4 === 0) && (year % 100 != 0)) || (year % 400 === 0)) {
        ifLeap = "Год високосный";
    } else {
        ifLeap = "Год не високосный";
    }
} else {
    ifLeap = "Проверьте введённые данные";
};
console.log("5 задача.", year, ifLeap);
/*6*. Задать количество тарелок и количество моющего средства.
    Моющее средство расходуется из расчета 0,5 на одну тарелку.
    В цикле выводить сколько моющего средства осталось после мытья каждой тарелки
    В конце вывести, сколько тарелок осталось, когда моющее средство закончилось или наоборот.*/
let dishes = 52;
let detergent = 24;
let j = dishes;
let k = detergent;
while ((j > 0) && (k > 0)) {
    j--;
    k = k - 0.5;
    console.log(j, "тарелок и ", k, "средства для мытья");
}
if (j === 0) {
    console.log("Тарелки закончились и осталось ", k, " моющего средства");
}
if (k === 0) {
    console.log("Средство закончилось и осталось ", j, " тарелок");
};