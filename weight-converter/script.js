let pounds = document.querySelector('.pounds');
let kilograms = document.querySelector('.kilograms');
let grams = document.querySelector('.grams');
let ounces = document.querySelector('.ounces');
let form = document.querySelector('form');

form.addEventListener('input', convertWeight);

function convertWeight(e) {
  if (e.target.classList.contains('pounds')) {
    let x = e.target.value;
    kilograms.value = (x / 2.2046).toFixed(2);
    grams.value = (x / 0.0022046).toFixed(2);
    ounces.value = (x * 16).toFixed(2);
  }

  if (e.target.classList.contains('kilograms')) {
    let x = e.target.value;
    pounds.value = x * 2.2046;
    grams.value = x * 1000;
    ounces.value = x * 35.274;
  }

  if (e.target.classList.contains('grams')) {
    let x = e.target.value;
    kilograms.value = x / 1000;
    pounds.value = x * 0.0022046;
    ounces.value = x * 0.035274;
  }

  if (e.target.classList.contains('ounces')) {
    let x = e.target.value;
    kilograms.value = x / 35.274;
    grams.value = x / 0.035274;
    pounds.value = x * 0.0625;
  }
}
