"use strict";

let Temp = module.exports;

Temp.c2f = function(c) {
  return (c * 1.8) + 32;
}

Temp.f2c = function(f) {
  return (f - 32) / 1.8;
}
