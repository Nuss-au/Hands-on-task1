
function clearDisplay () {
    document.getElementById('display').value = '0'
}

function deleteLast () {
    let currentValue = document.getElementById('display').value;
    if (currentValue.length > 1) {
        document.getElementById('display').value = currentValue.slice(0, -1);
    }else {
        document.getElementById('display').value = '0'; 
    }
}

function appendCharacter(character) {
    let display = document.getElementById('display');
    if (display.value === '0' && character!== '.') {
        display.value = character;
    } else {
        display.value += character;
    }
}

function calculateResult () {
    let expression = document.getElementById('display').value;
    try {
            // Replace '÷' with '/' for evaluation
            let result = eval(expression.replace('÷', '/'));

        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error'
    }
}