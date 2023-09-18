function countNumberOfNinesInNumber(number) {
  let count = 0;
  const numberStr = number.toString();
  for (let i = 0; i < numberStr.length; i++) {
    const digit = numberStr[i];
    if ("9" === digit) {
      count++;
    }
  }

  return count;
}

const numberEntered = 9898;
const result = countNumberOfNinesInNumber(numberEntered);
console.log(result);