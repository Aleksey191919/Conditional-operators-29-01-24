/** @format */

const num = prompt(
  'Введите 6 значное число для проверки является ли оно зеркальным:'
);

if (num.length !== 6 || isNaN(num)) {
  alert('Вы ввели некорректное значение');
} else {
  let leftNum = '';
  let rightNum = '';

  for (let i = 0; i < 3; i++) {
    leftNum += num[i];
    rightNum += num[5 - i];
  }
  console.log(leftNum);
  console.log(rightNum);

  if (leftNum === rightNum) {
    alert(`Число ${num} является зеркальным`);
  } else {
    alert(`Число ${num} не является зеркальным`);
  }
}
