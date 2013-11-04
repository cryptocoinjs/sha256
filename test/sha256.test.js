var sha256 = require('../lib/sha256')

require('terst')

describe('+ sha256(input)', function() {
  describe('> when input is a string', function() {
    it('should compute the sha256 hash', function() {
      var input = "1184CD2CDD640CA42CFC3A091C51D549B2F016D454B2774019C2B2D2E08529FD"
      EQ (sha256(input), "1c94d91f93ec9ed6bf647c384445b329c84a042c6b3832f8ee904dc55f117342")

      var input = "hello"
      //printf "hello" | shasum -a 256
      EQ (sha256(input), "2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824")
    })
  })
})


