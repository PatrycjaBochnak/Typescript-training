function combine(input1: number | string | boolean, input2: string | number) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toLocaleString() + input2.toLocaleString();
  }
  return result;
}

const combinedAges = combine(30, 26);
console.log(combinedAges);

const combinedNames = combine("Max", "Ann");
