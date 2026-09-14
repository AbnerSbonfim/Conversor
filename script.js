const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");

function convertValues() {
    const inputCurrencyValue = document.querySelector(".currency-input").value; 
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert");//Valor em Real
    const currencyValueConverted = document.querySelector(".currency-value");//Valor em outras moedas

    console.log(currencySelect.value);
    const dollarToday = 5.2;
    const euroToday = 5.9;

    const convertedValue = inputCurrencyValue / dollarToday;

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue);

    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(convertedValue);

    console.log(convertedValue);
}


convertButton.addEventListener("click", convertValues);