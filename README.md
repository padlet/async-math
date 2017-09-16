# async-math
Npm package for async math operations.

## Introduction
Stop writing archaic, boring code.
Why use native operators when you can use an npm package?  
Why use synchronous arithmetic when you can do so asynchronously?  
Why get guaranteed results when you can get the promise of one? 

## Usage

### Adding two numbers
```javascript
import { add } from "async-math"
add(8, 4).then(function(sum) { console.log(sum) })
```
Console output should be 12

### Subtracting a number from another
```javascript
import { subtract } from "async-math"
subtract(8, 4).then(function(difference) { console.log(difference) })
```
Console output should be 4

### Multiplying two numbers
```javascript
import { multiply } from "async-math"
multiply(8, 4).then(function(product) { console.log(product) })
```
Console output should be 32

### Divide a number from another
```javascript
import { divide } from "async-math"
divide(8, 4).then(function(quotient) { console.log(quotient) })
```
Console output should be 2