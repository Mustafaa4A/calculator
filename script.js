let operation = function (num1, oper, num2) {
    let number1 = num1,
        number2 = num2,
        symbol = oper;
    if (symbol == '+') {
        return number1 + number2;
    }
    else if (symbol == '-') {
        return number1 - number2;
    }
    else if (symbol == 'x') {
        return number1 * number2;
    }
    else if (symbol == '/') {
        return number1 / number2;
    }
    else if (symbol == '%') {
        return number1 % number2;
    }
    else {
        return 'Sceintific error'
    }

}


let input = document.getElementById('input')
let btnNumber = document.querySelectorAll('button:not(:last-child)')
let equal = document.querySelector('.equal');
let clear = document.querySelector('.clear')
let num1, num2, oper;
for (let i of btnNumber) {
    i.addEventListener('click', function (e) {
        let text = e.target.textContent
        if (isNaN(input.value) || text == '+'|| text == '-' || text == 'x' || text == '/' || text == '%') {
            num1 = parseInt(input.value)
            input.value = text;
        }
        else {
            input.value += text;
            
        }
        while (input.value == '+' || input.value == '-' || input.value == 'x' || input.value == '/' || input.value == '%') {
            oper = input.value;
            input.value=''
        }
    })
}

equal.addEventListener('click', function (e) {
    num2 = parseInt(input.value);
    if (isNaN(num1) || isNaN(num2)) {
        input.value = ''
    }
    else {
        input.value = operation(num1, oper, num2)
    }
    
})

clear.addEventListener('click', function () {
    input.value=''
})


