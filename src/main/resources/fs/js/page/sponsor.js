import pageHook from '../utils/pageHook';

const initPriceButtonEvents = () => {
  const priceInput = document.getElementById('priceInput')
  const buttons = Array.from(document.getElementsByClassName('priceButton'))
  buttons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      let price = button.innerText;
      price = price.substring(0, price.length - 1)
      priceInput.value = price;
    });
  });
};

pageHook(['/sponsor'], async () => {
  initPriceButtonEvents();
});
