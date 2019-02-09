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
