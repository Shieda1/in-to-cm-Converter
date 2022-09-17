// https://www.omnicalculator.com/conversion/in-to-cm

const v =  document.getElementById('v');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const cmRadio = document.getElementById('cmRadio');
const inRadio = document.getElementById('inRadio');

let cm;
let inch = v; 

// labels of the inpust
const variable = document.getElementById('variable');

cmRadio.addEventListener('click', function() {
  variable.textContent = 'in';
  inch = v;
  result.textContent = '';
});

inRadio.addEventListener('click', function() {
  variable.textContent = 'cm';
  cm = v;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(cmRadio.checked)
    result.textContent = `cm = ${computecm().toFixed(5)}`;

  else if(inRadio.checked)
    result.textContent = `in = ${computein().toFixed(5)}`;
})

// calculation

function computecm() {
  return Number(inch.value) * 2.54;
}

function computein() {
  return Number(cm.value) / 2.54;
}