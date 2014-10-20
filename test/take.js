
var takeUntil = require('..');

describe('takeUntil', function(){

  describe('array', function(){
    it('works for empty lists', function(){
      var xs = takeUntil([], function(x) { return true; });
      xs.should.eql([]);
    });

    it('works for lists with 1 element', function(){
      var xs = takeUntil([1], function(x) { return x === 3; });
      xs.should.eql([1]);
    });

    it('returns nothing when first element matches', function(){
      var xs = takeUntil([1, 2, 3], function(x) { return x === 1; });
      xs.should.eql([]);
    });

    it('returns properly on second matched', function(){
      var xs = takeUntil([1, 2, 3], function(x) { return x === 2; });
      xs.should.eql([1]);
    });
  });

  describe('string', function(){
    it('works for empty strings', function(){
      var xs = takeUntil("", function(x) { return true; });
      xs.should.eql("");
    });

    it('works for strings with 1 element', function(){
      var xs = takeUntil("a", function(x) { return x === "b"; });
      xs.should.eql("a");
    });

    it('returns nothing when first element matches', function(){
      var xs = takeUntil("abc", function(x) { return x === "a"; });
      xs.should.eql("");
    });

    it('returns properly on second matched', function(){
      var xs = takeUntil("abc", function(x) { return x === "b"; });
      xs.should.eql("a");
    });
  });
});
