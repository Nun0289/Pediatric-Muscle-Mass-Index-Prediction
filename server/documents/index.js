module.exports = ({NAME, AGE, HEIGHT, BMI, BMIZSCORE, MUSCLE_INDEX}) => {
    return `
    <html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <title>Document</title>
    <style>
        body{
            padding: 2px;
            font-size: 8px;
        }
        .contain {
            text-align: center;
            background-color: lightgray;
            width: auto;
            height:155px;
            margin:5px;
            padding: 2px;
            border-radius: 3px;
        }
        .content {
            text-align: left;
            margin: 0 6px 0 6px;
        }
        th {
            border-bottom: 1px solid white;
        }
        .conclution { 
            display:inline-block;
            width:49.6%;
            padding:6px;
            height:100%;
        }
        p {
            word-break: break-all;
        }
    </style>
</head>
<body>
    <div class="contain">
        <p style="line-height: 1.6;">เปอร์เซ็นมวลกล้ามเนื้อต่อน้ำหนักตัว<br>
        99.00%<br>
        ค่าระหว่าง 25th-50th<br>${NAME}<br></p>
        <div class="content">
            <p style="text-indent: 4px;">ค่าปกติเปอร์เซ็นไทล์</p>
            <table style="font-size:8px;width:100%;text-align:center;" class="w3-table w3-bordered">
                <tr>
                    <th>อายุ</th>
                    <th>1th</th>
                    <th>3th</th>
                    <th>5th</th>
                    <th>15th</th>
                    <th>25th</th>
                    <th>50th</th>
                    <th>75th</th>
                    <th>85th</th>
                    <th>95th</th>
                    <th>97th</th>
                    <th>99th</th>
                </tr>
                <tr >
                    <td>num</td>
                    <td>num</td>
                    <td>num</td>
                    <td>num</td>
                    <td>num</td>
                    <td>num</td>
                    <td>num</td>
                    <td>num</td>
                    <td>num</td>
                    <td>num</td>
                    <td>num</td>
                    <td>num</td>
                </tr>
            </table>
        </div>
    </div>
    <div class="contain">
        <p style="line-height: 1.6;">MMI : ดัชนีมวลกล้ามเนื้อ<br>
        99.00%<br>
        ค่าระหว่าง 25th-50th<br>
        ( มวลกล้ามเนื้อปกติ )</p>
        <div class="content">
            <p style="text-indent: 4px;">ค่าปกติเปอร์เซ็นไทล์</p>
            <table style="font-size:8px;width:100%;text-align:center;" class="w3-table w3-bordered">
                <tr>
                    <th>อายุ</th>
                    <th>1th</th>
                    <th>3th</th>
                    <th>5th</th>
                    <th>15th</th>
                    <th>25th</th>
                    <th>50th</th>
                    <th>75th</th>
                    <th>85th</th>
                    <th>95th</th>
                    <th>97th</th>
                    <th>99th</th>
                </tr>
                <tr >
                    <td>num</td>
                    <td>num</td>
                    <td>num</td>
                    <td>num</td>
                    <td>num</td>
                    <td>num</td>
                    <td>num</td>
                    <td>num</td>
                    <td>num</td>
                    <td>num</td>
                    <td>num</td>
                    <td>num</td>
                </tr>
            </table>
        </div>
    </div>
    <div class="contain">
        <p style="line-height: 1.6;">BMI :ดัชนีมวลกาย<br>
        99.00%<br>
        ค่าระหว่าง 25th-50th<br>
        ปกติ</p>
        <div class="content">
            <p style="text-indent: 4px;">ค่าปกติเปอร์เซ็นไทล์</p>
            <table style="font-size:8px;width:100%;text-align:center;" class="w3-table w3-bordered">
                <tr>
                    <th>อายุ</th>
                    <th>1th</th>
                    <th>3th</th>
                    <th>5th</th>
                    <th>15th</th>
                    <th>25th</th>
                    <th>50th</th>
                    <th>75th</th>
                    <th>85th</th>
                    <th>95th</th>
                    <th>97th</th>
                    <th>99th</th>
                </tr>
                <tr >
                    <td>num</td>
                    <td>num</td>
                    <td>num</td>
                    <td>num</td>
                    <td>num</td>
                    <td>num</td>
                    <td>num</td>
                    <td>num</td>
                    <td>num</td>
                    <td>num</td>
                    <td>num</td>
                    <td>num</td>
                </tr>
            </table>
        </div>
    </div>
    <div style="
    text-align: left;
            background-color: white;
            width: auto;
            height:345px;
            margin:5px;
            border-radius: 3px;
    ">
        <div style="float:left;width:50%;border: 1px solid lightgray;height:100%;padding:4px;
        border-radius: 3px">
        <p style="padding-bottom: 7px;">คำแนะนำ</p>
        <p>การแปรผลดัชนีมวลกล้ามเนื้อ : </p>
        <p>การแปรผลดัชนีมวลกาย : </p>
        <p>การแปรผลดังนีกล้ามเนื้อและดัชนีมวลกาย : </p>
        <p>แพทย์ : </p>
        <pอาหาร : </p>
        <p>กิจกรรมทางกาย : </p>
        <p>การออกกำลังกาย : </p></div>
        <div style="display:inline-block;width:50%;
        border: 1px solid lightgray;
        height:100%;
        padding:4px;
        border-radius: 3px">
        <p style="padding-bottom: 7px;">สรุปผล</p>
        <p>เพศ : </p>
        <p>อายุ : </p>
        <p>น้ำหนัก : </p>
        <p>ส่วนสูง : </p>
        <p>น้ำหนักมวลกล้ามเนื้อ : </p>
        <p>เปอร์เซ็นมวลกล้ามเนื้อต่อน้ำหนักตัว : </p>
        <p>ดัชนีมวลกล้ามเนื้อ : </p>
        <p>การแปรผลดัชนีมวลกล้ามเนื้อ : </p>
        <p>ดัชนีมวลกาย : </p>
        <p>การแปรผลดัชนีมวลกาย : </p>
        <p>การแปรผลดัชนีกล้ามเนื้อและดัชนีมวลกาย : </p>
        <p>แพทย์ : </p>
        <pอาหาร : </p>
        <p>กิจกรรมทางกาย : </p>
        <p>การออกกำลังกาย : </p>
        </div>
    </div>
</body>
</html>`
}