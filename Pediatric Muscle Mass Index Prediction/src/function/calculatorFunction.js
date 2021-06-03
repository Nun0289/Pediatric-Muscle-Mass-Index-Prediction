import men_LSM from "../data/men_LSM.json";
import women_LSM from "../data/women_LSM.json";

function results(gender, age, weight, height, gripstrength) {
  var bmi = calbmi(weight, height);
  var bmizscore = calBMIZscore(gender, age, bmi);
  var wholemusclemass = calWholeMuscleMass(
    gender,
    weight,
    height,
    gripstrength
  );
  var musclemassindex = calMuscleMassIndex(wholemusclemass, height);
  console.log(bmi);
  console.log(bmizscore);
  console.log(wholemusclemass);
  console.log(musclemassindex);
}
// หา BMI
function calbmi(weight, height) {
  var bmi = weight / (height / 100) ** 2;
  return bmi;
}
// หา BMIZSCORE
function calBMIZscore(gender, age, bmi) {
  if (gender == "men") {
    var lsmtable = men_LSM;
  } else {
    var lsmtable = women_LSM;
  }

  var bmizscore =
    ((bmi / lsmtable[age][2]) ** lsmtable[age][0] - 1) /
    (lsmtable[age][1] * lsmtable[age][0]);
  return bmizscore;
}
function calWholeMuscleMass(gender, weight, height, gripstrength) {
  if (gender == "men") {
    gender = 0;
  } else {
    gender = 0;
  }
  var wholemusclemass =
    0.199 * gripstrength +
    1.072 * gender +
    0.105 * weight +
    0.296 * height -
    22.438;
  return wholemusclemass;
}
function calMuscleMassIndex(wholemusclemass, height) {
  return wholemusclemass / (height / 100) ** 2;
}
export default results;
