const num = prompt("Введите 2-х значное число:");

if (num.length === 2) {
    if (!isNaN(parseInt(num))) {
        const firstNum = num / 10 | 0;
        const secondNum = num % 10;

        if (firstNum > secondNum) {
            alert(`В числе ${num} первая цифра ${firstNum} больше ${secondNum}`);
        }
    
        else if (firstNum < secondNum) {
            alert(`В числе ${num} первая цифра ${firstNum} меньше ${secondNum}`);
        }
    
        else {
            alert(`В числе ${num} обе цифры одинаковые`);
        }

    }
}

else {
    alert(`Вы ввели не корректные данные: ${num}`)
}

