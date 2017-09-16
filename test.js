const { add, subtract, multiply, divide, shootMe } = require("async-math")

test("should add properly", function() {
  expect.assertions(1)
  const result = add(8, 4)
  return expect(result).resolves.toBe(12)
})

test("should subtract properly", function() {
  expect.assertions(1)
  const result = subtract(8, 4)
  return expect(result).resolves.toBe(4)
})

test("should multiply properly", function() {
  expect.assertions(1)
  const result = multiply(8, 4)
  return expect(result).resolves.toBe(32)
})

test("should divide properly", function() {
  expect.assertions(1)
  const result = divide(8, 4)
  return expect(result).resolves.toBe(2)
})

test("should shoot properly", function() {
  expect.assertions(1)
  const result = shootMe()
  return expect(result).resolves.toBe("bang")
})