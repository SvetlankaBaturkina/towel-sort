
// You should implement your task here.

module.exports = function towelSort (matrix) {
  var array = matrix;
  var newMatrix = [];

  if (array == undefined) { // параметры не переданы функции;
    return newMatrix; // возвращаем пустой массив;
  };

  if (array != undefined && array.length === 0) { // матрица пуста;
    return newMatrix; // возвращаем пустой массив;
  };

  if (array != undefined && array.length != 0) { // матрица содержит элементы;
    for (var i = 0; i < array.length; i++) { // перебираем матрицу;

      if (i % 2 != 0) { // проверка четный элемент массива или нет;
        var oddItem = matrix[i]; // нечетный элемент массива;
        var oddItemNew = oddItem.reverse(); // переворачиваем нечетный элемент;
        newMatrix[i] = oddItemNew; // записываем новый элемент в матрицу;
      } else {
        newMatrix[i] = matrix[i]; // остается заданный элемент;
      };

    };
  resultArray = newMatrix.flat (); // преобразуем матрицу в одномерный массив;
  return resultArray; // возвращаем полученный одномернный массив;
  };
};