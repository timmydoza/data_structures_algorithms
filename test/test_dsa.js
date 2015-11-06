var expect = require('chai').expect;
var mocha = require('mocha');
var dsa = require(__dirname + '/../dsa');

describe('the push function', function() {
  it('should add an element to the end of array', function(){
    expect(dsa.push([1, 2, 3], 4).toString()).to.equal([1, 2, 3, 4].toString());
  });
});
describe('the pop function', function() {
  var a = [1, 2, 3, 4];
  it('should return the last element of an array', function(){
    expect(dsa.pop(a)).to.eql(4);
  });
  it('remove the last element from the array', function(){
    expect(a).to.eql([1, 2, 3]);
  });
});
describe('the shift function', function() {
  var a = [1, 2, 3, 4];
  it('should return the first element of an array', function(){
    expect(dsa.shift(a)).to.eql(1);
  });
  it('remove the first element from the array', function(){
    expect(a).to.eql([2, 3, 4]);
  });
});
describe('the unshift function', function() {
  it('should add an element to the front of array', function(){
    expect(dsa.unshift([1, 2, 3], 4)).to.eql([4, 1, 2, 3]);
  });
});
describe('the unique function', function() {
  it('should return a copy of an array without duplicates', function(){
    expect(dsa.unique([1, 2, 3, 3, 4, 5, 6, 5])).to.eql([1, 2, 3, 4, 5, 6]);
  });
});
describe('the frequency2 function', function() {
  it('should return the most common letter in an array of words', function(){
    expect(dsa.frequency2(['a', 'bb', 'ccc', 'dd', 'eeee', 'fff'])).to.eql('e');
  });
});
