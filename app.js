const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const operatorSelect = document.getElementById('operator');
const calcBtn = document.getElementById('calc-btn');
const resultText = document.getElementById('result-text');

function calculate() {
    const a = parseFloat(num1Input.value);
    const b = parseFloat(num2Input.value);
    const op = operatorSelect.value;

    if (Number.isNaN(a) || Number.isNaN(b)) {
        resultText.textContent = 'Enter both numbers';
        return;
    }

    if (!op) {
        resultText.textContent = 'Choose an operator';
        return;
    }

    let result;

    switch (op) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case '*':
            result = a * b;
            break;
        case '/':
            if (b === 0) {
                resultText.textContent = "Can't divide by 0";
                return;
            }
            result = a / b;
            break;
        case '%':
            if (b === 0) {
                resultText.textContent = "Can't mod by 0";
                return;
            }
            result = a % b;
            break;
        default:
            resultText.textContent = 'Invalid operator';
            return;
    }

 
    resultText.textContent = parseFloat(result.toFixed(10));
}

calcBtn.addEventListener('click', calculate);

[num1Input, num2Input].forEach((input) => {
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') calculate();
    });
});
