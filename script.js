function appendToDisplay(value) {
    document.getElementById('displayarea').value += value;
    
}

function clearDisplay() {
    document.getElementById('displayarea').value = '';
}

function calculateResult() {
    try {
        const result = eval(document.getElementById('displayarea').value);
        document.getElementById('displayarea').value = result;
    } catch (e) {
        document.getElementById('displayarea').value = 'Error';
    }
}      