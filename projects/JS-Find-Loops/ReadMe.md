#### Challenge Accepted:
- A shirt company want to find out how many loops they have to print from the loops contain in a set of number they are printing / shirt.
- 0, 4, 6, 9 have 1 loop/circle.
- 8 has 2 loops/circles.

- Test cases: 
```
Input: [1,9,0,0]
Output: 3

Input: [2,0,0]
Output: 2
``` 
- [Solution](http://playcode.io/250334?tabs=script.js&output):

```
const keyObject = {
    0: 1,
    4: 1,
    6: 1,
    8: 2,
    9: 1
}

const inputs = [6, 8, 9, 4, 6, 8, 8, 1, 1, 1, 1, 0, 2, 2, 2, 2];
let retVal = 0, index = 0;

console.log('Inputs', inputs);
console.log('================================');
console.log('||._.._.._.Calculating._.._.._.||');
console.log('================================');

for (var i = 0; i < inputs.length; i++) {
    index = Object.keys(keyObject).indexOf(inputs[i].toString());
    if (index !== -1) {
        retVal += Object.values(keyObject)[index];
    }
}

console.log('Output:', retVal);
```

