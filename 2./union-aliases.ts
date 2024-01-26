function combine(
    input1: number | string | boolean, 
    input2: string | number, 
    resultOfConversion: 'as-number' | 'as-text') 
    {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number" || resultOfConversion === 'as-number') {
    result = +input1 + +input2;
  } else {
    result = input1.toLocaleString() + input2.toLocaleString();
  }
  return result;
//   } if ( resultOfConversion === 'as-number') {
//     return +result;
//   } else {
//   return result.toString();
// }
    }

const combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);

const combinedStringAges = combine("30", '26', 'as-number');
console.log(combinedStringAges)

const combinedNames = combine("Max", "Ann", 'as-text');
console.log(combinedAges);