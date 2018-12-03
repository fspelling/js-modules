import { union } from 'ramda';
import sum, { sub, mult, div } from './util';
import react from 'react'
import reactDOM from 'react-dom'

const lista1 = [1, 2, 3];
const lista2 = [4, 5, 6];

console.log(union(lista1, lista2));
console.log(sum(2, 2));
console.log(subz(2, 2));
console.log(mult(2, 2));
console.log(div(2, 2));