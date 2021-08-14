import { makeStyles } from "@material-ui/core/styles";
import { Paper, Container, Button } from "@material-ui/core";
import TablePercentile from "../components/TablePercentile";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import { saveAs } from "file-saver";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import results from "../function/calculatorFunction";
import FacebookIcon from "@material-ui/icons/Facebook";

import pdfMake from "pdfmake/build/pdfmake";
// import pdfFonts from "pdfmake/build/vfs_fonts";

import { Icon } from "semantic-ui-react";
import { FaTwitter } from "react-icons/fa";
import {
  IoAccessibility,
  IoManSharp,
  IoMaleFemale,
  IoFastFood,
  IoWalk,
  IoBicycle,
} from "react-icons/io5";
import { GiBiceps } from "react-icons/gi";
import { HiOutlinePlus, HiOutlineSwitchVertical } from "react-icons/hi";

import { doc } from "../documents/Template";

// pdfMake.vfs = pdfFonts.pdfMake.vfs;
// pdfMake.fonts = {
//   THSarabunNew: {
//     normal: 'THSarabunNew.ttf',
//     bold: 'THSarabunNew-Bold.ttf',
//     italics: 'THSarabunNew-Italic.ttf',
//     bolditalics: 'THSarabunNew-BoldItalic.ttf'
//   },
//   Roboto: {
//     normal: 'Roboto-Regular.ttf',
//     bold: 'Roboto-Medium.ttf',
//     italics: 'Roboto-Italic.ttf',
//     bolditalics: 'Roboto-MediumItalic.ttf'
//   }
// }

const useStyles = makeStyles((theme) => ({
  calcPage: {
    height: "100%",
    minHeight: "calc(100vh - 64px)",
    backgroundColor: "orange",
    padding: "1em",
    fontFamily: "Kanit",
  },
  paperOutside: {
    padding: "2em",
    borderRadius: "1em",
  },
  paperInside: {
    backgroundColor: "lightgrey",
    margin: "1em",
    textAlign: "center",
    padding: "1em",
  },
  boxCard: {
    backgroundColor: "#F4F1F1",
    margin: "3em 5em 5em 5em",
    textAlign: "center",
    padding: "2em",
    borderRadius: "1em",
  },
  percentile: {
    textAlign: "left",
  },
  cardOutro: {
    height: "95%",
    padding: "1em",
    marginBottom: "1em",
  },
  saveButton: {
    width: "100%",
    marginBottom: "1em",
  },
  headText: {
    color: "#FF892F",
    fontSize: "2em",
    display: "inline-block",
  },
  normalText: {
    color: "#49D646",
  },
  dangerText: {
    color: "#F31515",
  },
}));

const createAndDownloadPDF = (
  NAME,
  AGE,
  HEIGHT,
  BMI,
  BMIZSCORE,
  MUSCLE_INDEX
) => {
  axios
    .post("/create-pdf", { NAME, AGE, HEIGHT, BMI, BMIZSCORE, MUSCLE_INDEX })

    .then(() => axios.get("fetch-pdf", { responseType: "blob" }))
    .then((res) => {
      const pdfBlob = new Blob([res.data], { type: "application/pdf" });
      saveAs(pdfBlob, "REPORT.pdf");
    });
};

function printPDF() {
  pdfMake.createPdf(doc).download("report.pdf");
}

const Calculator = () => {
  const [name, setName] = useState("mem");
  const [age, setAge] = useState(10);
  const classes = useStyles();
  const location = useLocation();
  var state = location.result;
  var userResult = state.result;
  return (
    <div className={classes.calcPage}>
      <Container maxWidth="lg" disableGutters>
        <Paper className={classes.paperOutside}>
          <center>
            <h1>ผลประเมิน</h1>
          </center>
          <Grid container>
            <Grid xs={12} sm={6}>
              <Paper className={classes.boxCard}>
                <div>
                  <div className={classes.headText}>BMI-Zscore</div>
                  <div>(ค่าดัชนีมวลกาย)</div>
                </div>
                <br></br>
                <h3 className={classes.headText}>
                  {userResult.bmizscore.toFixed(2)}
                </h3>
                <br></br>
                <br></br>
                <h4 className={classes.headText}>{userResult.resultWeight}</h4>
              </Paper>
            </Grid>
            <Grid xs={12} sm={6}>
              <Paper className={classes.boxCard}>
                <div>
                  <div className={classes.headText}>MMI</div> :
                  ค่าดัชนีมวลกล้ามเนื้อ
                </div>
                <br></br>

                <h3 className={classes.headText}>
                  {userResult.musclemassindex.toFixed(2)}
                </h3>
                <br></br>
                <br></br>
                <h4 className={classes.headText}>{userResult.resultMuscle}</h4>
              </Paper>
            </Grid>
          </Grid>
          <Grid container>
            <Grid xs={12} sm={6}>
              <Paper className={classes.cardOutro}>
                <h5>คำแนะนำ</h5>
                <br></br>
                <p>
                  <GiBiceps />
                  การแปรผลดัชนีมวลกล้ามเนื้อ : {userResult.resultMuscle}
                </p>
                <p>
                  <GiBiceps />
                  การแปรผลดัชนีมวลกาย : {userResult.resultWeight}
                </p>
                <p>
                  <GiBiceps />
                  การแปรผลดัชนีกล้ามเนื้อและดัชนีมวลกาย : {userResult.mmiresult}
                </p>
                <p>
                  <IoFastFood />
                  อาหาร : {userResult.food}
                </p>
                <p>
                  <IoWalk />
                  กิจกรรมทางกาย : {userResult.physicalActivity}
                </p>
                <p>
                  <IoBicycle />
                  การออกกำลังกาย : {userResult.exercise}
                </p>
              </Paper>
            </Grid>
            <Grid xs={12} sm={6}>
              <Paper className={classes.cardOutro}>
                <h5>สรุปผล</h5>
                <br></br>
                <p>
                  <IoMaleFemale />
                  เพศ : {userResult.gender}
                </p>
                <p>
                  <HiOutlineSwitchVertical />
                  อายุ : {userResult.age}
                </p>
                <p>
                  <IoManSharp />
                  น้ำหนัก : {userResult.weight}
                </p>
                <p>
                  <IoAccessibility />
                  ส่วนสูง : {userResult.height}
                </p>
                <p>
                  <GiBiceps />
                  เเรงบีบมือ : {userResult.gripstrength}
                </p>
                <p>
                  <GiBiceps />
                  ดัชนีมวลกล้ามเนื้อ : {userResult.musclemassindex.toFixed(2)}
                </p>
                <p>
                  <GiBiceps />
                  การแปรผลดัชนีมวลกล้ามเนื้อ : {userResult.resultMuscle}
                </p>
                <p>
                  <GiBiceps />
                  ดัชนีมวลกาย(BMI) : {userResult.bmi.toFixed(2)}
                </p>
                <p>
                  <GiBiceps />
                  ดัชนีมวลกาย(Z-score) : {userResult.bmizscore.toFixed(2)}
                </p>
                <p>
                  <GiBiceps />
                  การแปรผลดัชนีมวลกาย : {userResult.resultWeight}
                </p>
                <p>
                  <GiBiceps />
                  การแปรผลดัชนีกล้ามเนื้อและดัชนีมวลกาย : {userResult.mmiresult}
                </p>
                <p>
                  <IoFastFood />
                  อาหาร : {userResult.food}
                </p>
                <p>
                  <IoWalk />
                  กิจกรรมทางกาย : {userResult.physicalActivity}
                </p>
                <p>
                  <IoBicycle />
                  การออกกำลังกาย : {userResult.exercise}
                </p>
              </Paper>
            </Grid>
          </Grid>
          <Button
            className={classes.saveButton}
            color="primary"
            variant="contained"
            // onClick={() => createAndDownloadPDF(name)}
            onClick={() => createAndDownloadPDF()}
          >
            บันทึกผล
          </Button>
          * อ่านเพิ่มเติมเกี่ยวกับ
          โปรแกรมวิเคราะห์องค์ประกอบร่างกายและดัชนีมวลกล้ามเนื้อสำหรับเด็กและผู้ใหญ่
        </Paper>
      </Container>
    </div>
  );
};

export default Calculator;
