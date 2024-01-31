const num = parseInt(prompt("Введите число:")) % 10;

if (isNaN(num)) {
    alert(`Вы ввели не число`);
}

else {
    if (num % 2 === 0) {
        alert(`Последняя цифра числа ${num} является четной`);
    }
    
    else {
        alert(`Последняя цифра числа ${num} является не четной`);
    }

}