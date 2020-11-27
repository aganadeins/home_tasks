/* 1. Заданы два массива 
A = [ 12, 4, 3, 10, 1, 20 ]  
B = [-3, -7, -100, -33] 
необходимо их объединить в один массив C добавив массив B в конец(в начало) A. */
let A = [ 12, 4, 3, 10, 1, 20 ];
let B = [-3, -7, -100, -33];
let AB = A.concat(B);
console.log(AB);
let BA = B.concat(A);
console.log(BA);
/* 2. Одномерным массивом задана доска 3 на 3 
var area = [ null, null, null, null, null, null, null, null, null ]
Необходимо сформировать и вывести (document.write) игровое поле состоящее из квадратов для крестиков-ноликов  в HTML. 
При появлении в массиве 0-ля рисовать нолик , 1-цы крестик 
Пример:  [ 1, null, 0, null, 1, null, null, null, null ] на поле 2-а крестика, и 1-н нолик. */

/* 3. Задан массив  - [12,4,3,10,1,20]. 
Удалить из него наименьшее и наибольшее значение. */
var arr = [12,4,3,10,1,20];
console.log (arr, "исходный массив");
var maxIndex = arr.indexOf( Math.max.apply(null, arr));
arr.splice(maxIndex, 1);
console.log (arr, "удалили максимум");
var minIndex = arr.indexOf( Math.min.apply(null, arr));
arr.splice(minIndex, 1);
console.log(arr, "удалили минимум");
/* 4. В городе N проезд в трамвае осуществляется по бумажным отрывным билетам. 
Каждую неделю трамвайное депо заказывает в местной типографии рулон билетов 
с номерами от 000001 до 999999. */
let k = 1001; //минимально возможное счастливое число 001001
var counter = 0;
while (k <= 999999) {
    if (k <=9999) {
        new_string = (k + "");
        massiv = (k+"").split('');
        massiv.unshift(0, 0);
        for (let s = 0; s <= 5 ; s++) {
            massiv[s] = parseInt(massiv[s]);
        };
        let sum1 = massiv[0] + massiv[1] + massiv[2];
        let sum2 = massiv[3] + massiv[4] + massiv[5];
        if (sum1 === sum2) {
            ++counter;
        };
        k++;
    };
    if ((k >= 10000) && ( k<= 99999)) {
        new_string = (k + "");
        massiv = (k+"").split('');
        massiv.unshift (0);
        for (let s = 0; s <= 5 ; s++) {
            massiv[s] = parseInt(massiv[s]);
        };
        let sum1 = massiv[0] + massiv[1] + massiv[2];
        let sum2 = massiv[3] + massiv[4] + massiv[5];
        if (sum1 === sum2) {
            ++counter;
        };
        k++;
    };
    if (k >= 100000) {
        new_string = (k + "");
        massiv = (k+"").split('');
        for (let s = 0; s <= 5 ; s++) {
            massiv[s] = parseInt(massiv[s]);
        };
        let sum1 = massiv[0] + massiv[1] + massiv[2];
        let sum2 = massiv[3] + massiv[4] + massiv[5];
        if (sum1 === sum2) {
            ++counter;
        };
        k++;
    };
};
console.log(counter);
/* Задача «Аннигилируй это».
Вы устроились работать в лабораторию по изучению антиматерии,
где проводят различные опыты. Ваш отдел изучает процессы,
которые происходят при объединении материи и антиматерии.
Вам необходимо провести серию опытов над некоторым
количеством молекул.
Соседний отдел разработал аппарат, который превращает
материю в антиматерию на небольшое время. Он пригодится
вам в проведении опытов, в которых используется следующий алгоритм:
1. Находим 2 самых тяжёлых молекулы.
2. Одну из них превращаем в антиматерию.
3. Объединяем их. При этом, если вес одинаковый, они аннигилируются.
Если же вес различается, то мы получаем новую молекулу, вес которой
равен разнице весов предыдущих двух. Сама получившаяся молекула
является материей.
Если осталась одна молекула — нужно выяснить её вес. Если же молекул
много — возвращаемся к пункту 1.
Вам необходимо узнать, молекула какого веса останется в конце
опыта, это знание нужно учёным другого отдела. Вам необходимо
разработать код, чтобы он работал за приемлемое время.
В качестве входных данных у вас будет массив с весами
молекул weights. В качестве выходных данных необходимо в
консоль вернуть число, которое обозначает вес последней
молекулы. Если молекул не останется, то необходимо вернуть 0.
Пример работы:
Вход: let weights = [2,7,4,1,8,1]
Выход: 1
Берём молекулы с весом 7 и 8, превращаем 7 в антимолекулу
и сталкиваем её с молекулой весом 8. Остаётся молекула
весом 1. Веса оставшихся молекул стали [2,4,1,1,1].
Берём молекулы с весом 2 и 4, превращаем 2 в антимолекулу
и сталкиваем её с молекулой весом 4. Остаётся молекула
весом 2. Веса оставшихся молекул стали [2,1,1,1]. Берем
молекулы с весом 2 и 1, превращаем 1 в антимолекулу и
сталкиваем её с молекулой весом 2. Остаётся молекула весом 1.
Веса оставшихся молекул стали [1,1,1]. Берем молекулы с
весом 1 и 1, превращаем одну из них в антимолекулу и
сталкиваем ее со второй. Они аннигилируются. Веса
оставшихся молекул [1]. Осталась одна молекула. Результат — 1. */