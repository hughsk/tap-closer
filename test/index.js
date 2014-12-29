var test = require('tape')

// note that the main test is actuall in package.json's
// `scripts.test` field: it should pass if smokestack
// is killed on completing its logging of this test's TAP
// output.
test('first test', function(t) {
  t.pass('has run')
  t.end()
})

test('second test', function(t) {
  t.pass('has run')
  t.pass('definitely run')
  t.end()
})
