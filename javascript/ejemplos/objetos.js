'use strict';

const o = {};

o.x = 10;
o.sumar = function (y) {return this.x+y;    }
console.log(o.x);
console.log(o.sumar(5));