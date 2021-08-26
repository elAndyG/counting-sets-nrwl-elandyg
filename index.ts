function sumOfNumbersIsLessThanOrEqualTo(
  numbers: number[],
  threshold: number
): boolean {
  const sum = numbers.reduce((a, b) => {
    return a + b;
  });

  return sum <= threshold;
}

function countSetsOfThree(numbers: number[], threshold: number): number {
  let thresholdMetCount = 0;

  for (let loopA = 0; loopA < numbers.length; loopA++) {
    for (let loopB = loopA + 1; loopB < numbers.length; loopB++) {
      for (let loopC = loopB + 1; loopC < numbers.length; loopC++) {
        if (
          sumOfNumbersIsLessThanOrEqualTo(
            [numbers[loopA], numbers[loopB], numbers[loopC]],
            threshold
          )
        ) {
          thresholdMetCount += 1;
        }
      }
    }
  }

  return thresholdMetCount;
}

// Tests
append(
  `sumOfNumbersIsLessThanOrEqualTo([1,2], 7)`,
  sumOfNumbersIsLessThanOrEqualTo([1, 2], 7),
  true
);

append(
  `sumOfNumbersIsLessThanOrEqualTo([9,0], 7)`,
  sumOfNumbersIsLessThanOrEqualTo([9, 0], 7),
  false
);
append(
  `sumOfNumbersIsLessThanOrEqualTo([1,2,3], 7)`,
  sumOfNumbersIsLessThanOrEqualTo([1, 2, 3], 7),
  true
);
append(
  `sumOfNumbersIsLessThanOrEqualTo([0,0,0], 7)`,
  sumOfNumbersIsLessThanOrEqualTo([0, 0, 8], 7),
  false
);

append(`countSetsOfThree([1,2,3,4], 7)`, countSetsOfThree([1, 2, 3, 4], 7), 2);
append(`countSetsOfThree([4,1,3,2], 7)`, countSetsOfThree([4, 1, 3, 2], 7), 2);
append(`countSetsOfThree([1,2,3,9], 7)`, countSetsOfThree([1, 2, 3, 9], 7), 1);
append(`countSetsOfThree([2,2,2,2], 7)`, countSetsOfThree([2, 2, 2, 2], 7), 4);
append(`countSetsOfThree([3,3,3,3], 7)`, countSetsOfThree([3, 3, 3, 3], 7), 0);
append(
  `countSetsOfThree([1,2,3,4,5], 7)`,
  countSetsOfThree([1, 2, 3, 4, 5], 7),
  2
);
append(
  `countSetsOfThree([0,0,7,9,9,9,9,9,9,9], 7)`,
  countSetsOfThree([0, 0, 7, 9, 9, 9, 9, 9, 9, 9], 7),
  1
);

function append<T>(description: string, actual: T, expected: T) {
  const result = actual === expected ? "&#9989;" : "&#10060;";
  const item = document.createElement("div");
  item.innerHTML = `${result}  ${description}. Expected: ${expected}. Actual: ${actual}.`;
  document.querySelector("#results").append(item);
}

// I originally started out with getting the sets then looping those sets to check for the threshold. I like little functions that do little things, but thats an extra round trip :). So I refactored it out and now we check for the threshold earlier. Just leaving in so i remember my thought process if we chat about it together.
// function getUniqueSetsOfThree(numbers: number[]): number[][] {
//   const uniqueSets = [];

//   for (let loopA = 0; loopA < numbers.length; loopA++) {
//     for (let loopB = loopA + 1; loopB < numbers.length; loopB++) {
//       for (let loopC = loopB + 1; loopC < numbers.length; loopC++) {
//         uniqueSets.push([numbers[loopA], numbers[loopB], numbers[loopC]]);
//       }
//     }
//   }

//   return uniqueSets;
// }
