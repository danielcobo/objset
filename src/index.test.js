const objSet = require('./index.js');

test('objSet() - 1st lvl set works', function () {
  expect(objSet({}, 'a', '/', 1)).toStrictEqual({ a: 1 });
});

test('objSet() - 2nd lvl set works', function () {
  expect(objSet({}, 'a/b', '/', 1)).toStrictEqual({ a: { b: 1 } });
});

test('objSet() - Existing value is preserved', function () {
  expect(objSet({ a: { b: 1 } }, 'a/c', '/', 2)).toStrictEqual({
    a: { b: 1, c: 2 },
  });
});
