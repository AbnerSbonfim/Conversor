const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");
const currencyName = document.getElementById("currency-name-id");
const currentImage = document.querySelector(".currency-img");

function changeCurrency() {
    if (currencySelect.value === "USD") {
        currencyName.innerHTML = "Dólar:";
        currentImage.src = "assets/dolar.png";
    } else if (currencySelect.value === "EUR") {
        currencyName.innerHTML = "Euro:";
        currentImage.src = "assets/euro.png";
    }
}

function convertValues() {
    const inputCurrencyValue = Number(document.querySelector(".currency-input").value || 0);
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert");
    const currencyValueConverted = document.querySelector(".currency-value");

    const dollarToday = 5.2;
    const euroToday = 5.9;

    if (currencySelect.value === "USD") {
        const convertedValue = inputCurrencyValue / dollarToday;
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(convertedValue);
    } 
     if (currencySelect.value === "EUR") {
        const convertedValue = inputCurrencyValue / euroToday;
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "EUR"
        }).format(convertedValue);

        
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue);

    
}


currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValues);