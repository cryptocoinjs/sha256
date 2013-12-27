var sha256 = require('../lib/sha256')

require('terst')

describe('+ sha256(input)', function() {
  describe('> when input is a string', function() {
    it('should compute the sha256 hash as if it were binary string', function() {
      var input = "1184CD2CDD640CA42CFC3A091C51D549B2F016D454B2774019C2B2D2E08529FD" // Interpret as binary, not hex
      EQ (sha256(input), "1c94d91f93ec9ed6bf647c384445b329c84a042c6b3832f8ee904dc55f117342")

      var input = "hello"
      //printf "hello" | shasum -a 256
      EQ (sha256(input), "2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824")
    }),
	it('should return an array when asked', function() {
		var test = sha256('hello', { asBytes:true });
		T (Array.isArray(test));
		EQ (test.join(','), '44,242,77,186,95,176,163,14,38,232,59,42,197,185,226,158,27,22,30,92,31,167,66,94,115,4,51,98,147,139,152,36');
	}),
	it('should return a binary string when asked', function() {
		var test = sha256('hello', { asString:true });
		var chars = [44,242,77,186,95,176,163,14,38,232,59,42,197,185,226,158,27,22,30,92,31,167,66,94,115,4,51,98,147,139,152,36];
		EQ (test, chars.reduce(function(prev, cur, index, arr) {
			return prev+String.fromCharCode(cur);
		}, ''));
	})
  })
})

describe('+ x2(input)', function() {
  describe('> when input is a string', function() {
    it('should compute the sha256 twice', function() {
      EQ (sha256.x2("hello"), "9595c9df90075148eb06860365df33584b75bff782a510c6cd4883a419833d50")
    }),
	it('should return an array when asked', function() {
		var test = sha256.x2('hello', { asBytes:true });
		T (Array.isArray(test));
		EQ (test.join(','), '149,149,201,223,144,7,81,72,235,6,134,3,101,223,51,88,75,117,191,247,130,165,16,198,205,72,131,164,25,131,61,80');
	}),
	it('should return a binary string when asked', function() {
		var test = sha256.x2('hello', { asString:true });
		var chars = [149,149,201,223,144,7,81,72,235,6,134,3,101,223,51,88,75,117,191,247,130,165,16,198,205,72,131,164,25,131,61,80];
		EQ (test, chars.reduce(function(prev, cur, index, arr) {
			return prev+String.fromCharCode(cur);
		}, ''));
	})
  })
})


