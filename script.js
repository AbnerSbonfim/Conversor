const convertButton = document.querySelector(".convert-button");


const currencySelectUp = document.querySelector(".currency-select-up");
const currencyNameUp = document.querySelector(".currency-name-up");
const currentImageUp = document.querySelector(".currency-img-up");

const currencySelectDown = document.querySelector(".currency-select-down");
const currencyNameDown = document.querySelector(".currency-name-down");
const currentImageDown = document.querySelector(".currency-img-down");



const currencyValueToConvert = document.querySelector(".currency-value-to-convert");

function changeCurrencyUp() {
    if (currencySelectUp.value === "USD") {
        currencyNameUp.innerHTML = "Dólar:";
        currentImageUp.src = "assets/dolar.png";
    } else if (currencySelectUp.value === "EUR") {
        currencyNameUp.innerHTML = "Euro:";
        currentImageUp.src = "assets/euro.png";
    } else if (currencySelectUp.value === "JPY") {
        currencyNameUp.innerHTML = "Iene:";
        currentImageUp.src = "assets/moeda-japonesa.png";
        currentImageUp.style = "width: 52px; height: 52px; border-radius: 30px;";

    } else if (currencySelectUp.value === "GBP") {
        currencyNameUp.innerHTML = "Libra:";
        currentImageUp.src = "assets/libra.png";
    } else if (currencySelectUp.value === "BRL") {
        currencyNameUp.innerHTML = "Real:";
        currentImageUp.src = "assets/real.png";
    }
}


function changeCurrencyDown() {
    if (currencySelectDown.value === "USD") {
        currencyNameDown.innerHTML = "Dólar:";
        currentImageDown.src = "assets/dolar.png";
    } else if (currencySelectDown.value === "EUR") {
        currencyNameDown.innerHTML = "Euro:";
        currentImageDown.src = "assets/euro.png";
    } else if (currencySelectDown.value === "JPY") {
        currencyNameDown.innerHTML = "Iene:";
        currentImageDown.src = "assets/moeda-japonesa.png";
        currentImageDown.style = "width: 52px; height: 52px; border-radius: 30px;";

    } else if (currencySelectDown.value === "GBP") {
        currencyNameDown.innerHTML = "Libra:";
        currentImageDown.src = "assets/libra.png";
    } else if (currencySelectDown.value === "BRL") {
        currencyNameDown.innerHTML = "Real:";
        currentImageDown.src = "assets/real.png";
    }
}


function convertValues() {
    const inputCurrencyValue = Number(document.querySelector(".currency-input").value || 0);
    const currencyValueConverted = document.querySelector(".currency-value");

    // Cotação de cada moeda em relação ao Real 
    const rates = {
        BRL: 1,
        USD: 5.2,
        EUR: 5.9,
        JPY: 0.038,
        GBP: 6.8
    };

    //  converte o valor digitado para Real, usando a moeda de cima
    const valueInReais = inputCurrencyValue * rates[currencySelectUp.value];

    // converte de Real para a moeda de baixo (destino)
    const convertedValue = valueInReais / rates[currencySelectDown.value];

    // Formata o resultado de acordo com a moeda de destino
    const localeMap = {
        BRL: "pt-BR",
        USD: "en-US",
        EUR: "en-US",
        JPY: "en-US",
        GBP: "en-US"
    };

    currencyValueConverted.innerHTML = new Intl.NumberFormat(localeMap[currencySelectDown.value], {
        style: "currency",
        currency: currencySelectDown.value
    }).format(convertedValue);

   currencyValueToConvert.innerHTML = new Intl.NumberFormat(localeMap[currencySelectUp.value], {
    style: "currency",
    currency: currencySelectUp.value
}).format(inputCurrencyValue);
}

currencySelectUp.addEventListener("change", changeCurrencyUp);
currencySelectUp.addEventListener("change", convertValues);

currencySelectDown.addEventListener("change", changeCurrencyDown);
currencySelectDown.addEventListener("change", convertValues);

convertButton.addEventListener("click", convertValues);

const currencyInput = document.querySelector(".currency-input");
currencyInput.addEventListener("keydown", function (event) {
    ;
    if (event.key === "Enter") {
        convertValues();
    }
});
