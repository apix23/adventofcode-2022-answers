import { input } from "./input";

const caloriesArray: string[] = input.split("\n");

const calculateCalories = (calories: string[]) => {
  let caloriesAmount: number[] = [];

  calories.reduce((acc, curr) => {
    if (curr) {
      acc += parseInt(curr);
    } else {
      caloriesAmount.push(acc);
      acc = 0;
    }
    return acc;
  }, 0);
  caloriesAmount.sort((a, b) => b - a);
  return caloriesAmount[0] + caloriesAmount[1] + caloriesAmount[2];
};

console.log(calculateCalories(caloriesArray));
/*
the max calories should be update, only when the max number of calories is bigger than the one in the variable. I could use the acc, so
if current is a number

I have now 3 possible elves, how to sort it?
I already have the value of the max elves
I need to elves more 
*/
