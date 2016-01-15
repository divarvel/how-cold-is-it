"use strict";

const assert = require('assert');
const Temp = require('../temperature.js');

describe('Temp', () => {
  describe('.c2f', () => {
    it('should work on 0°C and 100°C', () => {
      assert.equal(32, Temp.c2f(0));
      assert.equal(212, Temp.c2f(100));
    });
  });

  describe('.f2c', () => {
    it('should work on 32°F and 212°F', () => {
      assert.equal(0, Temp.f2c(32));
      assert.equal(100, Temp.f2c(212));
    });
  });

  describe('.f2c and .c2f', () => {
    it('compose to identity_f', () => {
      assert.equal(-40, Temp.c2f(Temp.f2c(-40)));
      assert.equal(-30, Temp.c2f(Temp.f2c(-30)));
      assert.equal(-20, Temp.c2f(Temp.f2c(-20)));
      assert.equal(-10, Temp.c2f(Temp.f2c(-10)));
      assert.equal(  0, Temp.c2f(Temp.f2c(  0)));
      assert.equal( 10, Temp.c2f(Temp.f2c( 10)));
      assert.equal( 20, Temp.c2f(Temp.f2c( 20)));
      assert.equal( 30, Temp.c2f(Temp.f2c( 30)));
      assert.equal( 40, Temp.c2f(Temp.f2c( 40)));
    });
    it('compose to identity_c', () => {
      assert.equal(-40, Temp.f2c(Temp.c2f(-40)));
      assert.equal(-30, Temp.f2c(Temp.c2f(-30)));
      assert.equal(-20, Temp.f2c(Temp.c2f(-20)));
      assert.equal(-10, Temp.f2c(Temp.c2f(-10)));
      assert.equal(  0, Temp.f2c(Temp.c2f(  0)));
      assert.equal( 10, Temp.f2c(Temp.c2f( 10)));
      assert.equal( 20, Temp.f2c(Temp.c2f( 20)));
      assert.equal( 30, Temp.f2c(Temp.c2f( 30)));
      assert.equal( 40, Temp.f2c(Temp.c2f( 40)));
    });
  });
});
