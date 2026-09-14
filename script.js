const convertButton = document.querySelector(".convert-button");

function convertValues() {
    const inputCurrencyValue = document.querySelector(".currency-input").value; 
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert");//Valor em Real
    const currencyValueConverted = document.querySelector(".currency-value");//Valor em outras moedas

    const dollarToday = 5.2;

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