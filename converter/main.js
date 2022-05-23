document.addEventListener("DOMContentLoaded", () => {
  const rates = {};
  const elementUSD = document.querySelector('[data-value="USD"]');
  const elementEUR = document.querySelector('[data-value="EUR"]');
  const elementGBP = document.querySelector('[data-value="GBP"]');

  const input = document.querySelector('#input');
  const result = document.querySelector('#result');
  const select = document.querySelector('#select');


  getCurrencies();
  setInterval(getCurrencies, 10000);
  
  
  
  async function getCurrencies() {
    const result = await fetch("https://v6.exchangerate-api.com/v6/b5a848ec108417993a092ce0/latest/UAH");
    const data = await result.json();
    const res = await data;
  
    rates.USD = res.conversion_rates.USD.toFixed(3);
    rates.EUR = res.conversion_rates.EUR.toFixed(3);
    rates.GBP = res.conversion_rates.GBP.toFixed(3);
  
    elementUSD.textContent = rates.USD;
    elementEUR.textContent = rates.EUR;
    elementGBP.textContent = rates.GBP;
  }

  

  input.oninput = convertValue;

  select.oninput = convertValue;

  function convertValue() {
    result.value = (+input.value * +rates[select.value]).toFixed(2);
  }

});


