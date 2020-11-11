/* 1 задача. На садовом участке площадью 10 соток, разбили грядки 
15 на 25 метров. Сколько м2 осталось незанято? */
let allArea = 10;
let allAreaInMetres = allArea * 100;
let width = 15;
let height = 25;
let bedArea = width * height;
let freeSpace = allAreaInMetres % bedArea;
console.log("Задача 1.", freeSpace, "- оставшееся место на участке");
/* 2 задача. Найдите площадь овального кольца, полученного из овала 
площадью 15 дм2 вырезанием овала площадью 600 см2. */
let ovalArea = 15;
let ovalAreaInSm = ovalArea * 100;
let ovalForCutArea = 600;
let ringArea = ovalAreaInSm - ovalForCutArea;
console.log("Задача 2.", ringArea, "(см2) - площадь овального кольца");
/* 3 задача. Из трех данных чисел выбрать наименьшее. */
let num1, num2, num3;
num1 = -90; num2 = 1; num3 = -2;
var firstCompare = 
    num1 < num2 ? num1 : num2;
var minNumber = 
    firstCompare < num3 ? firstCompare : num3;
console.log("Задача 3.", minNumber, "- минимальное число из трёх");
/* 4 задача. Вывести в консоль ближайшее к 10 из двух чисел, записанных в переменные m и n. Например, среди чисел 8.5 и 11.45 ближайшее к десяти 11.45. */
let m, n;
m = 8.5;
n = 11.45;
var closerToTen = 
    Math.abs(n - 10) < Math.abs(m - 10) ? n : m;
console.log("Задача 4.", closerToTen, "- Ближайшее к 10 число");
/*5 задача. Трёхмерное пространство: Есть три вершины a, b и с. У каждой вершина заданы координатами x, y, z как целые числа. Нужно определить - является ли треугольник с заданными координатами прямоугольным. */
let xa, ya, za, xb, yb, zb, xc, yc, zc;
xa = 1; ya = 2; za = 0;
xb = -2; yb = -2; zb = 0;
xc = 1; yc = -2; zc = 0; 
let side_ab_square = (xb - xa)**2 + (yb - ya)**2 +(zb - za)**2;
let side_bc_square = (xb - xc)**2 + (yb - yc)**2 +(zb - zc)**2;
let side_ac_square = (xc - xa)**2 + (yc - ya)**2 +(zc - za)**2;
console.log("Задача 5.", side_ab_square, side_ac_square, side_bc_square, "- это квадраты сторон!")
if (side_ab_square + side_ac_square === side_bc_square) {
    console.log("Треугольник прямоугольный!");
} else {
    if (side_ab_square + side_bc_square === side_ac_square) {
        console.log("Треугольник прямоугольный!");
    } else {
        if (side_ac_square + side_bc_square === side_ab_square) {
            console.log("Треугольник прямоугольный!");
        } else {
            console.log ("Треугольник не прямоугольный!");
        }
    }
};
