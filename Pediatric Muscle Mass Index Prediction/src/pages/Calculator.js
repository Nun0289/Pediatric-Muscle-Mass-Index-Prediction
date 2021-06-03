import { makeStyles } from "@material-ui/core/styles";
import { Paper, Container, Button } from "@material-ui/core";
import TablePercentile from "../components/TablePercentile";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import { saveAs } from "file-saver";
import { useState } from "react";
import results from "../function/calculatorFunction";
const useStyles = makeStyles((theme) => ({
  calcPage: {
    height: "100%",
    minHeight: "calc(100vh - 64px)",
    backgroundColor: "orange",
    padding: "1em",
  },
  paperOutside: {
    padding: "1em",
  },
  paperInside: {
    backgroundColor: "lightgrey",
    margin: "1em",
    textAlign: "center",
    padding: "1em",
  },
  percentile: {
    textAlign: "left",
  },
  cardOutro: {
    height: "20vh",
    padding: "1em",
    marginBottom: "1em",
  },
  saveButton: {
    width: "100%",
    marginBottom: "1em",
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

const Calculator = () => {
  const [name, setName] = useState("mem");
  const [age, setAge] = useState(10);
  const classes = useStyles();

  results("men", 7, 27.6, 120, 5);
  return (
    <div className={classes.calcPage}>
      <Container maxWidth="lg" disableGutters>
        <Paper className={classes.paperOutside}>
          <Paper className={classes.paperInside}>
            <div>เปอร์เซ็นมวลกล้ามเนื้อต่อน้ำหนักตัว</div>
            <div>99.00%</div>
            <div>ค่าระหว่าง 25th-50th</div>
            <div className={classes.percentile}>
              <div>ค่าปกติเปอร์เซ็นไทล์</div>
              <div>
                <TablePercentile />
              </div>
            </div>
          </Paper>
          <Paper className={classes.paperInside}>
            MMI : ดัชนีมวลกล้ามเนื้อ
            <div>99.00%</div>
            <div>ค่าระหว่าง 25th-50th</div>
            <div>( มวลกล้ามเนื้อปกติ )</div>
            <div className={classes.percentile}>
              <div>ค่าปกติเปอร์เซ็นไทล์</div>
              <div>
                <TablePercentile />
              </div>
            </div>
          </Paper>
          <Paper className={classes.paperInside}>
            BMI :ดัชนีมวลกาย
            <div>99.00%</div>
            <div>ค่าระหว่าง 25th-50th</div>
            <div>ปกติ</div>
            <div className={classes.percentile}>
              <div>ค่าปกติเปอร์เซ็นไทล์</div>
              <div>
                <TablePercentile />
              </div>
            </div>
          </Paper>
          <Grid container>
            <Grid xs={12} sm={6}>
              <Paper className={classes.cardOutro}>คำแนะนำ</Paper>
            </Grid>
            <Grid xs={12} sm={6}>
              <Paper className={classes.cardOutro}>สรุปผล</Paper>
            </Grid>
          </Grid>
          <Button
            className={classes.saveButton}
            color="primary"
            variant="contained"
            onClick={() => createAndDownloadPDF(name)}
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
