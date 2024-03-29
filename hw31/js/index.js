// Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.
// const array = [1, 2, 3, 4, 5, 6, 7];
// removeElement(array, 5 );
// console.log(array);
// Результат: [1, 2, 3, 4, 6, 7]

const arr = [1, 2, 3, 4, 5, 6, 7];
removeElement = function (arr, item) {
  return arr.filter(function (el) {
    return el !== item
  })
}
console.log(removeElement(arr, 5));

// Трохи коротше
// const arr = [1, 2, 3, 4, 5, 6, 7];
// const removeElement = (arr, item) => {
//   return arr.filter(el => el !== item)
// }

// console.log(removeElement(arr, 2));