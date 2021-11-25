const convertBtn = document.querySelector('.convert');
const currency = document.querySelector('.currency');
const inputField = document.querySelector('input[type="number"]');
const select = document.querySelector('#mySelect');
let url = `https://api.coindesk.com/v1/bpi/currentprice.json`;

convertBtn.addEventListener('click', getCurrencies);

function getCurrencies(){
    let ammountOfBTC = parseFloat(inputField.value).toFixed(4);
    let currencyCode = select.value;
    
    fetch(url)
    .then(response => {
        return response.json();
    })
    .then(data =>{
        let output = '';
        let rate = 0;

        console.log(data)
        switch(currencyCode){
            case 'EUR':
                rate = ammountOfBTC * data.bpi.EUR.rate_float;
                output = `<p>${ammountOfBTC}BTC = ${rate}${data.bpi.EUR.symbol}</p>`;
                break;
            case 'USD':
                rate = ammountOfBTC * data.bpi.USD.rate_float;
                output = `<p>${ammountOfBTC}BTC = ${rate}${data.bpi.USD.symbol}</p>`;
                break;
            case 'GBP':
                rate = ammountOfBTC * data.bpi.GBP.rate_float;
                output = `<p>${ammountOfBTC}BTC = ${rate}${data.bpi.GBP.symbol}</p>`;
                break;
        }

        currency.innerHTML = output;
    })
}