const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lower = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '1234567890';
const symbols = '!@#$%^&*()-+/_';

const passBox = document.getElementById('in');
const totalChar = document.getElementById('length');
const upperInput = document.getElementById('uppercase');
const lowerInput = document.getElementById('lowercase');
const numberInput = document.getElementById('numbers');
const symbolInput = document.getElementById('symbols');

const getRandomData = (dataset) => {
    return dataset[Math.floor(Math.random() * dataset.length)];
}

const generatePassword = (password = '') =>{
    const totalChars = parseInt(totalChar.value); 
    if(upperInput.checked && password.length < totalChars){
        password += getRandomData(upper);
    }
    if(lowerInput.checked && password.length < totalChars){
        password += getRandomData(lower);
    }
    if(numberInput.checked && password.length < totalChars){
        password += getRandomData(numbers);
    }
    if(symbolInput.checked && password.length < totalChars){
        password += getRandomData(symbols);
    }
    if(password.length < totalChars){
        return generatePassword(password);
    }
    if(password.length === totalChars){
        passBox.value = password;
    }
}

const copyToClipBoard = () => {
    const selectedText = passBox.value;
    navigator.clipboard.writeText(selectedText)
        .then(() => {
                alert('Password copied to clipboard!');
        });
}

document.getElementById('btn').addEventListener('click', function() {
    generatePassword();
});
document.getElementById('copy').addEventListener('click',copyToClipBoard);

generatePassword();
