import { makeStyles } from "@material-ui/core/styles";
import { Paper, Container, Button } from "@material-ui/core";
import TablePercentile from "../components/TablePercentile";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import { saveAs } from "file-saver";
import { useState } from "react";
import NavBar from "../components/NavBar";
import { useLocation } from "react-router-dom";
import results from "../function/calculatorFunction";
import FacebookIcon from "@material-ui/icons/Facebook";
import background from "../img/BackgroundIMG.png";
import pdfMake from "pdfmake/build/pdfmake";
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

const useStyles = makeStyles((theme) => ({
  calcPage: {
    height: "100%",
    minHeight: "calc(100vh - 64px)",
    backgroundColor: "orange",
    background: `url('${background}')`,
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
    margin: "3vw",
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
  GiBiceps: {
    color: "orange",
  },
}));

const createAndDownloadPDF = (
  bmizscore,
  resultWeight,
  musclemassindex,
  resultMuscle,
  mmiresult,
  food,
  physicalActivity,
  exercise,
  gender,
  age,
  weight,
  height,
  gripstrength,
  bmi
) => {
  axios
    .post("https://pmmip-server.herokuapp.com/create-pdf", {
      bmizscore,
      resultWeight,
      musclemassindex,
      resultMuscle,
      mmiresult,
      food,
      physicalActivity,
      exercise,
      gender,
      age,
      weight,
      height,
      gripstrength,
      bmi,
    })

    .then(() =>
      axios.get("https://pmmip-server.herokuapp.com/fetch-pdf", {
        responseType: "blob",
      })
    )
    .then((res) => {
      const pdfBlob = new Blob([res.data], { type: "application/pdf" });
      saveAs(pdfBlob, "REPORT.pdf");
    });
};

const setState = (state) => {
  localStorage.setItem("user", JSON.stringify(state));
  return state;
};

const getState = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const Calculator = () => {
  const classes = useStyles();
  const location = useLocation();
  var state = location.result;
  var userResult = state !== undefined ? setState(state.result) : getState();
  const checkWeight = (weight) => {
    if (weight == "?????????????????????????????????,????????????") {
      return "red";
    } else if (weight == "?????????????????????????????????") {
      return "green";
    } else {
      return "#CCCC00";
    }
  };
  const checkmuscle = (weight) => {
    if (weight == "???????????????????????????????????????????????????") {
      return "red";
    } else {
      return "green";
    }
  };
  return (
    <div className={classes.calcPage}>
      <NavBar />
      <Container maxWidth="lg" disableGutters>
        <Paper className={classes.paperOutside}>
          <center>
            <h1>???????????????????????????</h1>
          </center>
          <Grid container>
            <Grid xs={12} sm={6}>
              <Paper className={classes.boxCard}>
                <div>
                  <div className={classes.headText}>BMI</div>
                  <div>(??????????????????????????????????????????)</div>
                </div>
                <br></br>
                <h3 className={classes.headText}>
                  {userResult.bmi.toFixed(2)}
                </h3>
                <br></br>
                <br></br>
                <h4
                  className={classes.headText}
                  style={{ color: checkWeight(userResult.resultWeight) }}
                >
                  {userResult.resultWeight}
                </h4>
              </Paper>
            </Grid>
            <Grid xs={12} sm={6}>
              <Paper className={classes.boxCard}>
                <div>
                  <div className={classes.headText}>MMI</div>
                  <div>(???????????????????????????????????????????????????????????????)</div>
                </div>
                <br></br>

                <h3 className={classes.headText}>
                  {userResult.musclemassindex.toFixed(2)}
                </h3>
                <br></br>
                <br></br>
                <h4
                  className={classes.headText}
                  style={{
                    color: checkmuscle(userResult.resultMuscle),
                  }}
                >
                  {userResult.resultMuscle}
                </h4>
              </Paper>
            </Grid>
          </Grid>
          <Grid container>
            <Grid xs={12} sm={6}>
              <Paper className={classes.cardOutro}>
                <h5>?????????????????????</h5>
                <br></br>
                <p>
                  <GiBiceps />
                  ?????????????????????????????????????????????????????????????????????????????? :{" "}
                  <div
                    style={{
                      fontFamily: "Kanit",
                      color: checkmuscle(userResult.resultMuscle),
                      display: "inline",
                    }}
                  >
                    {userResult.resultMuscle}
                  </div>
                </p>
                <p>
                  <GiBiceps />
                  ????????????????????????????????????????????????????????? :{" "}
                  <div
                    style={{
                      fontFamily: "Kanit",
                      color: checkWeight(userResult.resultWeight),
                      display: "inline",
                    }}
                  >
                    {userResult.resultWeight}
                  </div>
                </p>
                <p>
                  <IoFastFood />
                  ??????????????? :{" "}
                  <div
                    style={{
                      fontFamily: "Kanit",
                      color: "blue",
                      display: "inline",
                    }}
                  >
                    {userResult.food}
                  </div>
                </p>
                <p>
                  <IoWalk />
                  ??????????????????????????????????????? :{" "}
                  <div
                    style={{
                      fontFamily: "Kanit",
                      color: "blue",
                      display: "inline",
                    }}
                  >
                    {userResult.physicalActivity}
                  </div>
                </p>
                <p>
                  <IoBicycle />
                  ?????????????????????????????????????????? :{" "}
                  <div
                    style={{
                      fontFamily: "Kanit",
                      color: "blue",
                      display: "inline",
                    }}
                  >
                    {userResult.exercise}
                  </div>
                </p>
              </Paper>
            </Grid>
            <Grid xs={12} sm={6}>
              <Paper className={classes.cardOutro}>
                <h5>??????????????????</h5>
                <br></br>
                <p>
                  <IoMaleFemale />
                  ????????? :{" "}
                  <div
                    style={{
                      fontFamily: "Kanit",
                      color: "blue",
                      display: "inline",
                    }}
                  >
                    {userResult.gender == "male" ? "?????????" : "????????????"}
                  </div>
                </p>
                <p>
                  <HiOutlineSwitchVertical />
                  ???????????? :{" "}
                  <div
                    style={{
                      fontFamily: "Kanit",
                      color: "blue",
                      display: "inline",
                    }}
                  >
                    {userResult.age}
                  </div>{" "}
                  ??????
                </p>
                <p>
                  <IoManSharp />
                  ????????????????????? :{" "}
                  <div
                    style={{
                      fontFamily: "Kanit",
                      color: "blue",
                      display: "inline",
                    }}
                  >
                    {userResult.weight}
                  </div>{" "}
                  ????????????????????????
                </p>
                <p>
                  <IoAccessibility />
                  ????????????????????? :{" "}
                  <div
                    style={{
                      fontFamily: "Kanit",
                      color: "blue",
                      display: "inline",
                    }}
                  >
                    {userResult.height}
                  </div>{" "}
                  ???????????????????????????
                </p>
                <p>
                  <GiBiceps />
                  ?????????????????????????????? :{" "}
                  <div
                    style={{
                      fontFamily: "Kanit",
                      color: "blue",
                      display: "inline",
                    }}
                  >
                    {userResult.gripstrength == ""
                      ? "?????????????????????????????????"
                      : userResult.gripstrength}
                  </div>{" "}
                  ????????????????????????
                </p>
                <p>
                  <GiBiceps />
                  ?????????????????????????????????????????????????????? :{" "}
                  <div
                    style={{
                      fontFamily: "Kanit",
                      color: "blue",
                      display: "inline",
                    }}
                  >
                    {userResult.musclemassindex.toFixed(2)}
                  </div>{" "}
                  ????????????????????????/????????????<sup>2</sup>
                </p>
                <p>
                  <GiBiceps />
                  ?????????????????????????????????????????????????????????????????????????????? :{" "}
                  <div
                    style={{
                      fontFamily: "Kanit",
                      color: checkmuscle(userResult.resultMuscle),
                      display: "inline",
                    }}
                  >
                    {userResult.resultMuscle}
                  </div>
                </p>
                <p>
                  <GiBiceps />
                  ?????????????????????????????????(BMI) :{" "}
                  <div
                    style={{
                      fontFamily: "Kanit",
                      color: "blue",
                      display: "inline",
                    }}
                  >
                    {userResult.bmi.toFixed(2)}
                  </div>
                </p>
                <p>
                  <GiBiceps />
                  ?????????????????????????????????(Z-score) :{" "}
                  <div
                    style={{
                      fontFamily: "Kanit",
                      color: "blue",
                      display: "inline",
                    }}
                  >
                    {userResult.bmizscore.toFixed(2)}
                  </div>
                </p>
                <p>
                  <GiBiceps />
                  ????????????????????????????????????????????????????????? :{" "}
                  <div
                    style={{
                      fontFamily: "Kanit",
                      color: checkWeight(userResult.resultWeight),
                      display: "inline",
                    }}
                  >
                    {userResult.resultWeight}
                  </div>
                </p>
                <p>
                  <IoFastFood />
                  ??????????????? :{" "}
                  <div
                    style={{
                      fontFamily: "Kanit",
                      color: "blue",
                      display: "inline",
                    }}
                  >
                    {userResult.food}
                  </div>
                </p>
                <p>
                  <IoWalk />
                  ??????????????????????????????????????? :{" "}
                  <div
                    style={{
                      fontFamily: "Kanit",
                      color: "blue",
                      display: "inline",
                    }}
                  >
                    {userResult.physicalActivity}
                  </div>
                </p>
                <p>
                  <IoBicycle />
                  ?????????????????????????????????????????? :{" "}
                  <div
                    style={{
                      fontFamily: "Kanit",
                      color: "blue",
                      display: "inline",
                    }}
                  >
                    {userResult.exercise}
                  </div>
                </p>
              </Paper>
            </Grid>
          </Grid>
          <Button
            className={classes.saveButton}
            color="primary"
            variant="contained"
            // onClick={() => createAndDownloadPDF(name)}
            onClick={() =>
              createAndDownloadPDF(
                userResult.bmizscore,
                userResult.resultWeight,
                userResult.musclemassindex,
                userResult.resultMuscle,
                userResult.mmiresult,
                userResult.food,
                userResult.physicalActivity,
                userResult.exercise,
                userResult.gender,
                userResult.age,
                userResult.weight,
                userResult.height,
                userResult.gripstrength,
                userResult.bmi
              )
            }
          >
            <div style={{ fontFamily: "Kanit" }}>????????????????????????</div>
          </Button>
          * ??????????????????????????????????????????????????????????????????
          ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
        </Paper>
      </Container>
    </div>
  );
};

export default Calculator;
