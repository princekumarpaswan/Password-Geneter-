const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')

// const randomFunc = {
//     lower: getRandomLower(),
//     upper: getRandomUpper(),
//     number: getRandomNumber(),
//     symbol: getRandomSymbol()
// }
function lengthElF() {
    let val
    val = lengthEl.value;
    return val / 4;
}


function getRandomLower() {
    let lower = "abcdefghijklmnopqrstuvwxyz"
    let out = "";
    for (let i = 0; i < lengthElF(); i++) {
        out = out + lower[Math.floor(Math.random() * 26)]
    } return out
}
function getRandomUpper() {
    let lower = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let out = "";
    for (let i = 0; i < lengthElF(); i++) {
        out = out + lower[Math.floor(Math.random() * 26)]
    } return out
}

function getRandomNumber() {
    let lower = ""
    let sn = ""
    for (let i = 0; i < (lengthElF()); i++) {
        lower = Math.floor(Math.random() * 16)
        sn = lower.toString()
        sn = sn + sn * 2;
    } return sn
}

function getRandomSymbol() {
    let lower = "!@#$%^*&)(_+/*.<>?][}{=`~"
    let out = '';
    for (let i = 0; i < lengthElF(); i++) {
        out = out + lower[Math.floor(Math.random() * 25)]
    } return out
}

function generatePassword(lower, upper, number, symbol) {
    let gen = lower + upper + number + symbol;
    let final = ""
    for (let i = 0; i < gen.length; i++) {
        final = final + gen[Math.floor(Math.random() * gen.length)]
    } return final

}

function selectText() {
    const a = resultEl.innerText
    return navigator.clipboard.writeText(a).then(() => {
        alert("Copied to clipboard");

    })
}



clipboardEl.addEventListener('click', () => {
    selectText()

})

generateEl.addEventListener('click', () => {
    resultEl.innerText = generatePassword(getRandomLower(), getRandomUpper(), getRandomNumber(), getRandomSymbol())

})



