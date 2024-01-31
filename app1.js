let a = parseInt(prompt("Введите значение для числа а:"));
let b = parseInt(prompt("Введите значение для числа b:"));

if (a > b) {
    alert(`Число ${a} больше ${b}`);
}

else if (b > a) {
    alert(`Число ${b} больше ${a}`);
}

else {
    alert(`Числа ${b} и ${a} равны!`);
}
