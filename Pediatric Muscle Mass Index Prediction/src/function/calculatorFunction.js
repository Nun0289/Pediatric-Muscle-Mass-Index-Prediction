import men_LSM from "../data/men_LSM.json";
import women_LSM from "../data/women_LSM.json";
const finalresult = {};

function results(gender, age, weight, height, gripstrength) {
  var bmi = calbmi(weight, height);
  var bmizscore = calBMIZscore(gender, age, bmi);
  if (gripstrength != null) {
    var wholemusclemass = calWholeMuscleMass(
      gender,
      weight,
      height,
      gripstrength
    );
  } else {
    var wholemusclemass = calWholeMuscleMassWithOutGripstrenght(
      gender,
      weight,
      height,
    );
  }
  var musclemassindex = calMuscleMassIndex(wholemusclemass, height);
  finalresult.bmi = bmi;
  finalresult.bmizscore = bmizscore;
  finalresult.wholemusclemass = wholemusclemass;
  finalresult.musclemassindex = musclemassindex;
  finalresult.gender = gender;
  finalresult.age = age;
  finalresult.weight = weight;
  finalresult.height = height;
  finalresult.gripstrength = gripstrength;
  resultMMI(musclemassindex, age, gender);
  reusltZscore(bmizscore);
  advice();
  console.log(finalresult);
  return finalresult;
}
// หา BMI
function calbmi(weight, height) {
  var bmi = weight / (height / 100) ** 2;
  return bmi;
}
// หา BMIZSCORE
function calBMIZscore(gender, age, weight) {
  if (gender == "male") {
    var lsmtable = men_LSM;
  } else {
    var lsmtable = women_LSM;
  }

  var bmizscore =
    ((weight / lsmtable[age][2]) ** lsmtable[age][0] - 1) /
    (lsmtable[age][1] * lsmtable[age][0]);
  return bmizscore;
}
function calWholeMuscleMass(gender, weight, height, gripstrength) {
  if (gender == "male") {
    gender = 1;
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
function calWholeMuscleMassWithOutGripstrenght(gender, weight, height) {
  if (gender == "male") {
    gender = 1;
  } else {
    gender = 0;
  }
  var wholemusclemass =
    -30.472 + 1.440 * gender + 0.117 * weight + 0.374 * height;
  return wholemusclemass;
}
function calMuscleMassIndex(wholemusclemass, height) {
  return wholemusclemass / (height / 100) ** 2;
}

//แปลผลดัชนีมวลกล้ามเนื้อ
function resultMMI(musclemassindex, age, gender) {
  if (gender == "male") {
    if (age <= 7 && age >= 5) {
      if (musclemassindex >= 11.51) {
        finalresult.mmiresult = "ปกติ";
      } else {
        finalresult.mmiresult = "ต่ำกว่าปกติ";
      }
    }
    if (age <= 10 && age >= 8) {
      if (musclemassindex >= 11.72) {
        finalresult.mmiresult = "ปกติ";
      } else {
        finalresult.mmiresult = "ต่ำกว่าปกติ";
      }
    }
    if (age <= 13 && age >= 11) {
      if (musclemassindex >= 12.26) {
        finalresult.mmiresult = "ปกติ";
      } else {
        finalresult.mmiresult = "ต่ำกว่าปกติ";
      }
    }
    if (age <= 16 && age >= 14) {
      if (musclemassindex >= 13.46) {
        finalresult.mmiresult = "ปกติ";
      } else {
        finalresult.mmiresult = "ต่ำกว่าปกติ";
      }
    }
  } else {
    if (age <= 7 && age >= 5) {
      if (musclemassindex >= 10.45) {
        finalresult.mmiresult = "ปกติ";
      } else {
        finalresult.mmiresult = "ต่ำกว่าปกติ";
      }
    }
    if (age <= 10 && age >= 8) {
      if (musclemassindex >= 10.54) {
        finalresult.mmiresult = "ปกติ";
      } else {
        finalresult.mmiresult = "ต่ำกว่าปกติ";
      }
    }
    if (age <= 13 && age >= 11) {
      if (musclemassindex >= 11.07) {
        finalresult.mmiresult = "ปกติ";
      } else {
        finalresult.mmiresult = "ต่ำกว่าปกติ";
      }
    }
    if (age <= 16 && age >= 14) {
      if (musclemassindex >= 11.66) {
        finalresult.mmiresult = "ปกติ";
      } else {
        finalresult.mmiresult = "ต่ำกว่าปกติ";
      }
    }
  }
}
// เเปลผลดัชนีมวลกาย
function reusltZscore(bmizscore) {
  if (finalresult.mmiresult == "ปกติ") {
    if (bmizscore < -2) {
      finalresult.resultWeight = "น้ำหนักน้อย,ผอม";
      finalresult.resultMuscle = "มวลกล้ามเนื้อปกติ";
    }
    if (bmizscore >= -2 && bmizscore <= 1) {
      finalresult.resultWeight = "น้ำหนักปกติ";
      finalresult.resultMuscle = "มวลกล้ามเนื้อปกติ";
    }
    if (bmizscore > 1) {
      finalresult.resultWeight = "น้ำหนักเกิน,อ้วน";
      finalresult.resultMuscle = "มวลกล้ามเนื้อปกติ";
    }
  }
  if (finalresult.mmiresult == "ต่ำกว่าปกติ") {
    if (bmizscore < -2) {
      finalresult.resultWeight = "น้ำหนักน้อย,ผอม";
      finalresult.resultMuscle = "มวลกล้ามน้อย";
    }
    if (bmizscore >= -2 && bmizscore <= 1) {
      finalresult.resultWeight = "น้ำหนักปกติ";
      finalresult.resultMuscle = "มวลกล้ามเนื้อน้อย";
    }
    if (bmizscore > 1) {
      finalresult.resultWeight = "น้ำหนักเกิน,อ้วน";
      finalresult.resultMuscle = "มวลกล้ามเนื้อน้อย";
    }
  }
}
//คำเเนะนำ
function advice() {
  if (finalresult.mmiresult == "ปกติ") {
    if (finalresult.resultWeight == "น้ำหนักน้อย,ผอม") {
      finalresult.food = "ควบคุมให้อยู่ในระดับปกติ";
      finalresult.physicalActivity =
        "ลดพฤติกรรมเนือยนิ่ง, กิจกรรมทางกายระดับปานกลางถึงหนัก ปกติตามคำแนะนำ";
      finalresult.exercise = "-";
    }
    if (finalresult.resultWeight == "น้ำหนักปกติ") {
      finalresult.food = "ปกติ สัดส่วนอาหารปกติ";
      finalresult.physicalActivity =
        "ลดพฤติกรรมเนือยนิ่ง,กิจกรรมทางกายระดับปานกลางถึงหนัก ปกติ ตามคำแนะนำ";
      finalresult.exercise = "ชนิดแอโรบิค";
    }
    if (finalresult.resultWeight == "น้ำหนักเกิน,อ้วน") {
      finalresult.food = "ปกติ ลดสัดส่วนอาหารแป้งและไขมัน";
      finalresult.physicalActivity =
        "ลดพฤติกรรมเนือยนิ่ง,เพิ่มมากกว่าปกติของ กิจกรรมทางกายระดับปานกลางถึงหนัก";
      finalresult.exercise = "ชนิดแอโรบิค";
    }
  }
  if (finalresult.mmiresult == "ต่ำกว่าปกติ") {
    if (finalresult.resultWeight == "น้ำหนักน้อย,ผอม") {
      finalresult.food = "ควบคุมให้อยู่ในระดับปกติ เพิ่มสัดส่วนโปรตีนในอาหาร";
      finalresult.physicalActivity =
        " ลดพฤติกรรมเนือยนิ่ง,กิจกรรมทางกายระดับปานกลางถึงหนักปกติ ตามคำแนะนำ";
      finalresult.exercise = "-";
    }
    if (finalresult.resultWeight == "น้ำหนักปกติ") {
      finalresult.food = "ปกติ เพิ่มสัดส่วนโปรตีนในอาหาร ";
      finalresult.physicalActivity =
        "ลดพฤติกรรมเนือยนิ่ง, เพิ่มกิจกรรมทางกายระดับปานกลางถึงหนัก ";
      finalresult.exercise = "ชนิดออกแรงต้านของกล้ามเนื้อ กลางลำตัวและแขนขา";
    }
    if (finalresult.resultWeight == "น้ำหนักเกิน,อ้วน") {
      finalresult.food =
        "ปกติ ลดสัดส่วนอาหารแป้งและไขมัน ปกติ เพิ่มสัดส่วนโปรตีนในอาหาร";
      finalresult.physicalActivity =
        "ลดพฤติกรรมเนือยนิ่ง,เพิ่มมากกว่าปกติของ กิจกรรมทางกายระดับปานกลางถึงหนัก ";
      finalresult.exercise =
        "ชนิดแอโรบิค และ ชนิดออกแรงต้านของกล้ามเนื้อ กลางลำตัวและแขนขา ร่วมกัน";
    }
  }
}
export default results;
