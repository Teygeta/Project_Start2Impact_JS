function createElement(tag, className, content = null) {
  const element = document.createElement(tag);
  element.className = className;
  element.innerHTML = content;
  return element
}

const box = createElement('div', 'box')
const result = createElement('span', 'result', '0')
const incDecBox = createElement('div', 'inc_dec')
const dec = createElement('button', 'dec', '-')
const inc = createElement('button', 'inc', '+')
const buttonReset = createElement('button', 'buttonReset', 'Reset')
const buttonSave = createElement('button', 'buttonSave', 'Save')
const buttonLoad = createElement('button', 'buttonLoad', 'Load')
const alertNum = createElement('div', 'alertNum')


//Append elements
document.body.appendChild(box);
box.appendChild(alertNum);
box.appendChild(result);
box.appendChild(incDecBox);
box.appendChild(buttonReset);
box.appendChild(buttonSave);
box.appendChild(buttonLoad);
incDecBox.appendChild(dec);
incDecBox.appendChild(inc);

//Counter logic
let counter = 0;
let numToInit = 0;

function countSet(sAction) {
  if (numToInit > 0) {
    if (sAction === 'inc') {
      counter += numToInit;
    } else if (sAction === 'dec') {
      counter -= numToInit;
    } else {
      alert('action not valid');
    }
  } else {
    if (sAction === 'inc') {
      counter++;
    } else if (sAction === 'dec') {
      counter--;
    } else {
      alert('action not valid');
    }
  }
}

//Event Delegation
document.body.onclick = function (event) {
  let target = event.target

  switch (target.className) {
    case ('inc') :
      countSet('inc');
      result.innerHTML = counter;
      break

    case ('dec') :
      countSet('dec');
      result.innerHTML = counter;
      break

    case ('buttonReset') :
      result.innerHTML = '0'
      counter = 0
      alertNum.textContent = ''
      break

    case ('buttonSave') :
      let numSaved = 0
      if (counter !== 0) {
        numSaved = counter
        alertNum.textContent = `Number ${numSaved} is saved`
      } else alert('You can\'t save the number 0')

      buttonLoad.addEventListener('click', () => {
        counter = numSaved
        result.innerHTML = counter
      })
      break

    default:
      return
  }
}
