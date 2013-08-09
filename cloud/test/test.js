ENV_TEST = true;
var assert = require('assert');
var ooops = require('break');
var heartbeat = require('./../main').heartbeat;
var nextPrime = require('./index').nextPrime;
var asyncPrime = require('./index').asyncPrime;

suite('nextPrime', function() {
  test('nextPrime should return the next prime number', function() {
    assert.equal(11, nextPrime(7));
  });

  test('zero and one are not prime numbers', function() {
    assert.equal(2, nextPrime(0));
    assert.equal(2, nextPrime(1));
  });
});

suite('asyncPrime', function() {
  test('asyncPrime should return the next prime number', function(done) {
    asyncPrime(128, function(n) {
      assert.equal(131, n, 'Wrong number');
      done();
    });
  });
});

suite('testHeartbeat', function() {
  test('heartbeat should return success', function(done) {
    heartbeat({}, function(n,r) {
      assert.equal("success", r.heartbeat, 'Success not guaranteed');
      done();
    });
  });
});