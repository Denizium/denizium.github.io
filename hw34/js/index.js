// 1) Дан масив [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47] Знайти суму та кількість позитивних елементів.
// 2) Знайти мінімальний елемент масиву та його порядковий номер.
// 3) Знайти максимальний елемент масиву та його порядковий номер.
// 4) Визначити кількість негативних елементів.
// 5) Знайти кількість непарних позитивних елементів.
// 6) Знайти кількість парних позитивних елементів.
// 7) Знайти суму парних позитивних елементів.
// 8) Знайти суму непарних позитивних елементів.
// 9) Знайти добуток позитивних елементів.
// 10) Знайти найбільший серед елементів масиву, остальні обнулити.

//=======================================================================================================================================

// Дан масив
document.write("<p>");
document.write('Дан масив: ' + '[16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47]')
document.write("</p>");
//=======================================================================================================================================

// 1) Знайти суму та кількість позитивних елементів. 
// 4)Визначити кількість негативних елементів.
const arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47],
    positiveN = [],
    negativeN = [];
for (let i = 0; i < arr.length; i++) {
    arr[i] >= 0 ? positiveN.push(arr[i]) : negativeN.push(arr[i])
}

let sumElement = arr.reduce((sum, elem) => {
    if (elem >= 0) {
        return sum + elem;
    } else {
        return sum;
    }
});
let sumOElement = arr.reduce((sum, elem) => {
    if (elem <= 0) {
        return sum + elem;
    } else {
        return sum;
    }
});

let result = 'Сума позитивних елементів: ' + sumElement +
    ' (кількість:' + positiveN.length + ')<br>' +
    'Сума негативних елементів: ' + sumOElement +
    ' (кількість: ' + negativeN.length + ')';

document.write(result)
//=================================================================================================================

// 2) Знайти мінімальний елемент масиву та його порядковий номер.
document.write("<p>");
document.write('Мінімальний елемент масиву: ' + Math.min(...arr));
document.write(', його порядковий номер: ' + arr.indexOf(Math.min(...arr)));
document.write("</p>");
//==================================================================================================================

// 3) Знайти максимальний елемент масиву та його порядковий номер.
document.write('Максимальний елемент масиву: ' + Math.max(...arr));
document.write(', його порядковий номер: ' + arr.indexOf(Math.max(...arr)));
//===================================================================================================================

// 5) Знайти кількість непарних позитивних елементів.
document.write("<p>");
document.write('Кількість непарних позитивних елементів: ' + positiveN.filter(elem => elem % 3 == 0).length );
document.write("</p>");
//===================================================================================================================

// 6) Знайти кількість парних позитивних елементів.
document.write('Кількість парних позитивних елементів: ' + positiveN.filter(elem => elem % 2 == 0).length );
//================================================================================================================================

// 7) Знайти суму парних позитивних елементів.
document.write("<p>");
document.write('Сума парних позитивних елементів: ' + positiveN.filter(elem => elem % 2 == 0).reduce((acc, elem) => acc + elem));
document.write("</p>");
//=================================================================================================================================

// 8) Знайти суму непарних позитивних елементів.
document.write('Сума непарних позитивних елементів: ' + positiveN.filter(elem => elem % 3 == 0).reduce((acc, elem) => acc + elem));
//=================================================================================================================================

// 9) Знайти добуток позитивних елементів.
document.write("<p>");
document.write('Добуток позитивних елементів: ' + positiveN.reduce((acc, elem) => acc * elem));
document.write("</p>");
//=================================================================================================================================

// 10) Знайти найбільший серед елементів масиву, остальні обнулити.
const max = Math.max(...arr);
result = arr.map(v => v == max ? v : 0);
document.write('Найбільший серед елементів масиву, остальні обнулити: ' + result);
