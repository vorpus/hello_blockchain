import { hash, calcD, dumbD, inverse } from './crypto'

recalculate();

document
  .addEventListener('keyup', () => recalculate());

document.getElementById('hash-button-1')
  .addEventListener('click', (e) => {
    e.preventDefault();
    calculateNonce(1);
  });

function calculateNonce(blockNumber) {
  const hashedElement = document.getElementById('hashed-' + blockNumber);
  const nonce = document.getElementById('nonce-' + blockNumber);
  let hashedValue;
  for (let i = 0; i < 500000; i++) {
    hashedValue = hash(getText(blockNumber, i));
    if (hashedValue.startsWith('0000')) {
      nonce.value = i;
      hashedElement.value = hashedValue;
      break;
    };
  }
}

function recalculate() {
  for (let i = 1; i <= 1; i++) {
    computeHash(i);
  }
}

function computeHash(blockNumber) {
  const hashedElement = document.getElementById('hashed-' + blockNumber);
  hashedElement.value = hash(getText(blockNumber));
}

function getText(blockNumber, nonce) {
  nonce = nonce || document.getElementById('nonce-' + blockNumber).value;
  const data = document.getElementById('data-' + blockNumber).value;
  return hash(`${blockNumber}${nonce}${data}`);
}

window.dumbD = dumbD
// console.warn(calcD(40, 7))
// console.warn(dumbD(40, 7))
//
// console.warn(calcD(78*112, 2621))
// console.warn(dumbD(78*112, 2621))
console.warn(inverse(3120, 17))
