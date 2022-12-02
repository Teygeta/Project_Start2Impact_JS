const box1 = document.createElement('div');
box1.className = 'box-1';

const divInput = document.getElementsByClassName('input')

const result = document.createElement('span');
result.className = 'result';
result.textContent = '0';

const incDec = document.createElement('div');
incDec.className = 'inc_dec';

const buttonBox = document.createElement('div');
buttonBox.className = 'buttonBox';

const dec = document.createElement('button');
dec.className = 'dec';
dec.textContent = '-';

const inc = document.createElement('button');
inc.className = 'inc';
inc.textContent = '+';

const buttonReset = document.createElement('button');
buttonReset.className = 'buttonReset';
buttonReset.textContent = 'Reset';

const buttonSave = document.createElement('button');
buttonSave.className = 'buttonSave';
buttonSave.textContent = 'Save';

const buttonLoad = document.createElement('button');
buttonLoad.className = 'buttonLoad';
buttonLoad.textContent = 'Load';

const alertNum = document.createElement('div');
alertNum.className = 'alertNum';
box1.appendChild(alertNum);

//APPEND ELEMENT
document.body.appendChild(box1);
box1.appendChild(result);
box1.appendChild(incDec);
incDec.appendChild(dec);
incDec.appendChild(inc);
box1.appendChild(buttonReset);
box1.appendChild(buttonSave);
box1.appendChild(buttonLoad);

//COUNTER LOGIC
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

inc.addEventListener('mousedown', () => {
    countSet('inc');
    result.innerHTML = counter;
})

dec.addEventListener('mousedown', () => {
    countSet('dec');
    result.innerHTML = counter;
})

buttonReset.addEventListener('click', () => {
    counter = 0;
    saveNum = 0;
    result.innerHTML = counter;
})

buttonSave.addEventListener('click', () => {
    let saveNum = counter;
    
    alertNum.textContent = `Number ${saveNum} is saved!`;

    buttonLoad.addEventListener('click', () => {
        counter = saveNum;
        result.innerHTML = counter;
    })
})
