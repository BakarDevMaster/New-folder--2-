
//Develop a program that calculates and prints the sum of the first n even numbers using a for loop.
function sumOfFirstNEvenNumbers(n: number): number {
    let A = 0;
  for (let i = 1; i <= n; i++) {
       const evenNumber = 2 * i;
        A += evenNumber;}
   return A;
  }const n = 5; 
  const result = sumOfFirstNEvenNumbers(n);
  console.log(`The sum of the first ${n} even numbers is: ${result}`);

  //Implement a program that uses a for loop to iterate through an array of numbers and print only the even numbers.

  function printEvenNumbers(numbers: number[]): void {
    for (let i = 0; i < numbers.length; i++) {
      const number = numbers[i];
      if (number % 2 === 0) {
        console.log(number);
      }
    }
  }
  const A= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log("Even numbers in the array:");
  printEvenNumbers(A);
  
  //Implement a program that uses a loop to iterate through an array of numbers and remove all the even numbers from them and just leave the odd ones.

  function removeEvenNumbers(A: number[]): number[] {
    const oddNumbers: number[] = [];
  
    for (let i = 0; i < A.length; i++) {
      const number = A[i];
      if (number % 2 !== 0) {
        oddNumbers.push(number);
      }
    }
    return oddNumbers;
  }
  const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log("Original array:", numberArray);
  const oddNumbersArray = removeEvenNumbers(numberArray);
  console.log("Array with even numbers removed:", oddNumbersArray);
  
  //Write a program that defines a function to calculate the area of a circle. The function should take the radius as input and return the calculated area.

  function calculateCircleArea(radius: number): number {
    const pi = Math.PI;
    const area = pi * Math.pow(radius, 2); 
    return area;
  }
  const radius = 5; 
  const circleArea = calculateCircleArea(radius);
  console.log(`The area of the circle with radius ${radius} is: ${circleArea}`);

  //Develop a program that reads a list of grades and uses the splice method to remove failing grades (below 50) from the array.
  
  function removeFailingGrades(A: number[]): void {
    const failingGradeThreshold = 50;
  
    for (let i = A.length - 1; i >= 0; i--) {
      if (A[i] < failingGradeThreshold) {
        A.splice(i, 1);
      }
    }
  }
  const gradesList: number[] = [85, 42, 68, 91, 35, 72, 56, 48];
  console.log("Original grades:", gradesList);
  removeFailingGrades(gradesList);
  console.log("Grades with failing grades removed:", gradesList);

  
  //Write a program that uses a function to find the largest element in an array of numbers.

  //Answer: I Did not solve it bcz i can not understand the question