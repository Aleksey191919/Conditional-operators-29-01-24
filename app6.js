/** @format */

const num = prompt('Введите число из 3-х цифр:');

if (num.length !== 3 || isNaN(num)) {
  alert('Вы ввели некорректное значение');
} else {
  const firstNum = parseInt(num[0]);
  const secondNum = parseInt(num[1]);
  const thirdNum = parseInt(num[2]);
  const sumNumbers = firstNum + secondNum + thirdNum;
  const multNumbers = firstNum * secondNum * thirdNum;

  if (sumNumbers % 2 === 0) {
    alert(`Сумма всех чисел числа ${num} является четной`);
  } else {
    alert(`Сумма всех чисел числа ${num} является не четной`);
  }

  if (sumNumbers % 5 === 0) {
    alert(`Сумма всех чисел числа ${num} кратна числу 5`);
  } else {
    alert(`Сумма всех чисел числа ${num} не кратна числу 5`);
  }

  if (multNumbers > 100) {
    alert(`Сумма всех чисел числа ${num} больше числа 100`);
  } else {
    alert(`Сумма всех чисел числа ${num} меньше числа 100`);
  }
}
