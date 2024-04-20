const array = [1, 5, 6, 8, 4, 3, 4, -1, 9, 10, 1];

function linearSearch(array, item) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      return i;
    }
  }
  return null;
}

console.log(linearSearch(array, 8));
