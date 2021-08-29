module.exports = ( {bmizscore, resultWeight, musclemassindex, resultMuscle, mmiresult, food, physicalActivity, exercise, gender, age, weight, height, gripstrength, bmi}) => {
    return `
    <html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <title>Document</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <style>
        body{
            padding: 12px;
            font-size: 8px;
        }
        .head {
            text-align: center;
            width: auto;
            height: 100px;
            font-size: 20px;
            padding: 5px 5px 40px 5px;
        }
        .contain {
            text-align: center;
            background-color: #F4F1F1;
            width: 271px;
            height: 175px;
            margin: 5px;
            padding: 20px 2px 0px 2px;
            border-radius: 3px;
            display: inline-block;
        }
        .content {
            text-align: left;
            margin: 0 6px 0 6px;
        }
        th {
            border-bottom: 1px solid white;
        }
        p {
            word-break: break-all;
        }
        .headText {
            color: #FF892F;
            display: inline-block;
            font-size: 22px;
        }
        .space {
            margin: 5px 0px 0px 0px;
        }
    </style>
</head>
<body>
    <div class="head">
        <h2>ผลประเมิน</h2>
    </div>
    <div class="contain">
        <div class="headText space">BMI-Zscore</div>
        <div>(ค่าดัชนีมวลกาย)</div>
        <br>
        <div class="headText space">${bmizscore.toFixed(2)}</div>
        <br>
        <div class="headText space">${resultWeight}</div>
    </div>
    <div class="contain">
        <div class="space"><div class='headText'>MMI</div>:ค่าดัชนีมวลกล้ามเนื้อ</div>
        <div style="color: #F4F1F1;">tesr</div>
        <br>
        <div class="headText space">${musclemassindex.toFixed(2)}</div>
        <br>
        <div class="headText space">${resultMuscle}</div>
    </div>
    <div style="
    text-align: left;
            background-color: white;
            width: auto;
            height:435px;
            margin:80px 0px 0px 0px;
            border-radius: 3px;
    ">
        <div style="float:left;width:50%;border: 1px solid lightgray;height:100%;padding: 1%;
        border-radius: 3px">
        <p style="padding-bottom: 7px;">คำแนะนำ</p>
        <p><i class="fa fa-line-chart" aria-hidden="true"></i> การแปรผลดัชนีมวลกล้ามเนื้อ : ${resultMuscle}</p>
        <p><i class="fa fa-line-chart" aria-hidden="true"></i> การแปรผลดัชนีมวลกาย : ${resultWeight}</p>
        <p><i class="fa fa-line-chart" aria-hidden="true"></i> การแปรผลดังนีกล้ามเนื้อและดัชนีมวลกาย : ${mmiresult}</p>
        <p><i class="fa fa-coffee" aria-hidden="true"></i> อาหาร : ${food}</p>
        <p><i class="fa fa-male" aria-hidden="true"></i> กิจกรรมทางกาย : ${physicalActivity}</p>
        <p><i class="fa fa-futbol-o" aria-hidden="true"></i> การออกกำลังกาย : ${exercise}</p></div>
        <div style="display:inline-block;width:50%;
        border: 1px solid lightgray;
        height:100%;
        border-radius: 3px;
        padding: 1%;">
        <p style="padding-bottom: 7px;">สรุปผล</p>
        <p><i class="fa fa-transgender" aria-hidden="true"></i> เพศ : ${gender}</p>
        <p><i class="fa fa-plus-square" aria-hidden="true"></i> อายุ : ${age}</p>
        <p><i class="fa fa-male" aria-hidden="true"></i> น้ำหนัก : ${weight}</p>
        <p><i class="fa fa-male" aria-hidden="true"></i> ส่วนสูง : ${height}</p>
        <p><i class="fa fa-hand-rock-o" aria-hidden="true"></i> แรงบีบมือ : ${gripstrength}</p>
        <p><i class="fa fa-line-chart" aria-hidden="true"></i> ดัชนีมวลกล้ามเนื้อ : ${musclemassindex.toFixed(2)}</p>
        <p><i class="fa fa-line-chart" aria-hidden="true"></i> การแปรผลดัชนีมวลกล้ามเนื้อ : ${resultMuscle}</p>
        <p><i class="fa fa-line-chart" aria-hidden="true"></i> ดัชนีมวลกาย(BMI) : ${bmi.toFixed(2)}</p>
        <p><i class="fa fa-line-chart" aria-hidden="true"></i> ดัชนีมวลกาย(Z-score) : ${bmizscore.toFixed(2)}</p>
        <p><i class="fa fa-line-chart" aria-hidden="true"></i> การแปรผลดัชนีมวลกาย : ${resultWeight}</p>
        <p><i class="fa fa-line-chart" aria-hidden="true"></i> การแปรผลดัชนีกล้ามเนื้อและดัชนีมวลกาย : ${mmiresult}</p>
        <p><i class="fa fa-coffee" aria-hidden="true"></i> อาหาร : ${food}</p>
        <p><i class="fa fa-male" aria-hidden="true"></i> กิจกรรมทางกาย : ${physicalActivity}</p>
        <p><i class="fa fa-futbol-o" aria-hidden="true"></i> การออกกำลังกาย : ${exercise}</p>
        </div>
    </div>
</body>
</html>`
}