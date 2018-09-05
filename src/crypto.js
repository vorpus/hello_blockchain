import { sha256 } from 'js-sha256';

export function hash(input) {
  return sha256(input);
}

export function calcD(totient, e) {
  let a = e;
  let b = 1;
  let c = totient;
  let d = totient;
  let timesDivide;
  let x;
  let y;

  while (a !== 1) {
    timesDivide = Math.floor(c / a);
    x = c - timesDivide * a;
    y = d - timesDivide * b;

    c = a;
    d = b;
    a = x;
    b = y;
    if ( b < 0 ) b += totient;
  }
  return b;
}

export function inverse(x, m) {
  let a = 0;
  let b = m;
  let u = 1;
  let q;
  while (x>0) {
    let xtemp = x;
    let atemp = a;
    q = Math.floor(b/x);
    x = b % x;
    a = u;
    b = xtemp;
    u = atemp - q * u;
  }
  if (b === 1) return a % m;
  console.log('wtf');
}

export function dumbD(totient, e) {
  let d = 0;
  let answer;
  while ( answer !== 1) {
    d++;
    answer = (e * d) % totient;
  }
  return d;
}
