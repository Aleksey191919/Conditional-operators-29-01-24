const num = prompt("Введите число из 3-х цифр:");

if (num.length !== 3 || isNaN(num)) {
    alert("Вы ввели некорректное значение");
} 

else {
    const firstNum = parseInt(num[0]);
    const secondNum = parseInt(num[1]);
    const thirdNum = parseInt(num[2]);

    if (firstNum == secondNum && secondNum == thirdNum) {
        alert(`В числе ${num} все цифры одинаковые`);
    }
    else {
        if (firstNum == secondNum && secondNum !== thirdNum) {
            alert(`В числе ${num} 1-я и 2-я цифры одинаковые`);
        }
        else if (firstNum !== secondNum && secondNum == thirdNum) {
            alert(`В числе ${num} 2-я и 3-я цифры одинаковые`);
        }
        else if (firstNum == thirdNum && secondNum !== thirdNum) {
            alert(`В числе ${num} 1-я и 3-я цифры одинаковые`);
        }
        else {
            alert(`В числе ${num} все цифры разные`);
        }
    }
}