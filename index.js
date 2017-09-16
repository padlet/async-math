let add = function (num1, num2) {
  return new Promise((resolve, reject) => {
    try {
      const sum = num1 + num2;
      setTimeout(function () { resolve(sum); }, 0);
    }
    catch (e) {
      reject(e);
    }
  });
};
let subtract = function (num1, num2) {
  return new Promise((resolve, reject) => {
    try {
      const difference = num1 - num2;
      setTimeout(function () { resolve(difference); }, 0);
    }
    catch (e) {
      reject(e);
    }
  });
};
let multiply = function (num1, num2) {
  return new Promise((resolve, reject) => {
    try {
      const product = num1 * num2;
      setTimeout(function () { resolve(product); }, 0);
    }
    catch (e) {
      reject(e);
    }
  });
};
let divide = function (num1, num2) {
  return new Promise((resolve, reject) => {
    try {
      const quotient = num1 / num2;
      setTimeout(function () { resolve(quotient); }, 0);
    }
    catch (e) {
      reject(e);
    }
  });
};
let shootMe = function () {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => { resolve("bang"); }, 0);
    }
    catch (e) {
      reject(e);
    }
  });
};
module.exports = { add, subtract, multiply, divide, shootMe };
