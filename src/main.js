import './index.html';
import _fp from 'lodash/fp';

const value = 
    _fp.map(el => el * 3)
([1, 2])

console.log(value);