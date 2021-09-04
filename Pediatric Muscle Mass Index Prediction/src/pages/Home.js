import FormControl from "@material-ui/core/FormControl";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import Toolbar from "@material-ui/core/Toolbar";
import { ScrollingProvider } from "react-scroll-section";
import NavBar from "../components/NavBar";
import Container from "@material-ui/core/Container";
import InputAdornment from "@material-ui/core/InputAdornment";
import "../css/home.css";
import { Modal } from "react-bootstrap";
import { useState } from "react";
import results from "../function/calculatorFunction";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { TextField, Button, Grid, Hidden } from "@material-ui/core";
import { Section } from "react-scroll-section";
import { useScrollSection } from "react-scroll-section";
import { FaWeight, FaRunning, FaCommentMedical, FaPollH } from "react-icons/fa";
import fatWeigth from "../img/fat-weigth.png";
import kid from "../img/Kid.png";
import { useHistory } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  labelRadio: {
    marginBottom: 0,
  },
  root: {
    width: "100%",
    padding: 3,
  },
  textField: {
    marginBottom: 10,
  },Body:{
    fontFamily:"Kanit"
  },Button:{
    fontFamily:"Kanit"
  }
}));

const Home = () => {
  const classes = useStyles();
  const [gender, setGender] = useState("male");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [gripstrength, setGripstrength] = useState("");

  const [showModle, setShowModle] = useState(false);
  const [errorModle, setErrorModle] = useState("");
  const slideToCalc = useScrollSection("calc");
  const history = useHistory();
  const clickHandler = () => {
    document.getElementById("calc").scrollIntoView();
  };
  const onSubmit = () => {
    if (
      gender != "" &&
      age != "" &&
      height != "" &&
      weight != ""
    ) {
      if (age >= 5 && age <= 16) {
        var result = results(gender, age, weight, height, gripstrength);
        history.push({ pathname: "/calc", result: { result } });
      } else {
        setErrorModle("ช่วงอายุผิดพลาด(5-16 ปี)กรุณากรอกใหม่");
        setShowModle(true);
      }
    } else {
      setErrorModle("กรุณากรอกเเบบฟอรมให้ครบ");
      setShowModle(true);
    }
  };
  return (
    <div>
      <Modal
        show={showModle}
        onHide={() => setShowModle(!showModle)}
        style={{ paddingTop: 200 }}
      >
        <Modal.Body>{errorModle}</Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setShowModle(!showModle)}>Close</Button>
        </Modal.Footer>
      </Modal>
      <div className="homePage">
        <ScrollingProvider scrollBehavior="smooth">
          <NavBar />
          <Section id="home">
            <Hidden lgUp>
              <Toolbar />
            </Hidden>
            <div className="firstSection">
              <div className="titleWeb">
                <div style={{ marginLeft: "2%" }}>
                  <h2>
                    Pediatric Muscle Mass Index Prediction by Grip Strength
                  </h2>
                  <h3>
                    โปรแกรมประเมินดัชนีมวลกล้ามเนื้อสำหรับเด็กด้วยแรงบีบมือ
                    (อายุ 5 - 16 ปี)
                  </h3>
                </div>
              </div>
              <Grid
                container
                className="titleWeb"
                alignItems="center"
                spacing={2}
              >
                <Grid xs={12} md={5} item>
                  <Button
                    onClick={clickHandler}
                    variant="contained"
                    className="startButton"
                    style={{
                      backgroundColor: "orange",
                      color: "white",
                      width: "40%",
                      display: "block",
                      margin: "auto",
                      fontFamily: "Kanit",
                    }}
                  >
                    เริ่มต้นประเมิน
                  </Button>
                </Grid>
                <Grid xs={12} md={7} item>
                  <img
                    src={kid}
                    style={{ width: "70%", margin: "auto", display: "block" }}
                  />
                </Grid>
              </Grid>
            </div>
          </Section>
          <Section id="about">
            <Hidden lgUp>
              <Toolbar />
            </Hidden>
            <div className="secondSection">
              <div style={{ height: "fit-content" }}>
                <Grid
                  container
                  alignItems="center"
                  style={{ minHeight: "100vh" }}
                >
                  <Grid xs={12} md={7} item style={{ padding: "2em" }}>
                    <h3> สถานการณ์ปัจจุบัน </h3>
                    <p>
                      โรงเรียนทุกแห่งจะมีการเฝ้าระวังและติดตามสุขภาพทางกายของเด็กนักเรียนเป็นประจำทุกปี
                      โดยอาศัยการชั่งน้ำหนักตัว วัดส่วนสูง
                      และคำนวณเป็นค่าดัชนีมวลกาย
                      หรือน้ำหนักตัวที่ปรับด้วยค่าความสูง
                      เพื่อใช้บ่งบอกถึงระดับการเจริญเติบโตและสภาวะโภชนาการของเด็กแต่ละคน
                      น้ำหนักตัว
                      ส่วนสูงและองค์ประกอบของร่างกายจะมีการเปลี่ยนแปลง
                      เมื่อเด็กเจริญโตเข้าสู่วัยผู้ใหญ่
                      น้ำหนักตัวเกิดจากองค์ประกอบของร่างกาย
                      ซึ่งประกอบด้วยมวลไขมันและมวลปราศจากไขมัน
                      มวลกล้ามเนื้อคือองค์ประกอบหลักของมวลปราศจากไขมัน
                      เด็กผอมหรือเด็กที่มีดัชนีมวลกายต่ำจะมีการลดลงของทั้งมวลไขมันและมวลกล้ามเนื้อ
                      ในเด็กอ้วนหรือเด็กที่มีดัชนีมวลกายสูง
                      จะมีความหลากหลายขององค์ประกอบร่างกาย
                      จะมีการเพิ่มขึ้นมวลไขมัน
                      แต่มวลกล้ามเนื้อกลับมีความหลากหลาย โดยอาจมีค่าลดลง
                      เป็นปกติ หรือมากกว่าปกติ
                      นอกเหนือจากทำให้เกิดการเคลื่อนไหวของร่างกาย
                      มวลกล้ามเนื้อยังมีหน้าที่เกี่ยวข้องกับการควบคุมพลังงานของร่างกายการเพิ่มขึ้นของมวลไขมัน
                      การลดลงของมวลกล้ามเนื้อ อย่างใดอย่างหนึ่งหรือทั้งสองประการ
                      ต่างมีผลเสียต่อสุขภาพและมีผลเสียต่อเนื่องในระยะยาวจนเข้าสู่วัยผู้ใหญ่
                      อาหารและกิจกรรมทางกายคือปัจจัยหลักมีผลต่อการเปลี่ยนแปลงขององค์ประกอบของร่างกายในเด็กที่กำลังเจริญเติบโต
                    </p>
                    <div className="toAboutButton">
                      <Button
                        component={Link}
                        to="/about"
                        variant="outlined"
                        color="primary"
                        style={{fontFamily:"Kanit"}}
                      >
                        อ่านเพิ่มเติม
                      </Button>
                    </div>
                  </Grid>
                  <Hidden only="xs">
                    <Grid xs={12} md={5} container justify="center">
                      <img src={fatWeigth} style={{ width: "40vw" }} />
                    </Grid>
                  </Hidden>
                </Grid>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div className="iconSection">
                  <Grid container justify="space-around" alignItems="center">
                    <Grid container xs={12} md={6} spacing={5}>
                      <Grid item xs={6}>
                        <div className="iconChild">
                          <FaWeight className="iconOutsource" />
                          <div className="iconHeader">BMI</div>
                          <div>คำนวณดัชนีมวลกาย</div>
                        </div>
                      </Grid>
                      <Grid item xs={6}>
                        <div className="iconChild">
                          <FaRunning className="iconOutsource" />
                          <div className="iconHeader">MMI</div>
                          <div>คำนวณดัชนีมวลกล้ามเนื้อ</div>
                        </div>
                      </Grid>
                      <Grid item xs={6}>
                        <div className="iconChild">
                          <FaPollH className="iconOutsource" />
                          <div className="iconHeader">RESULT</div>
                          <div>แปรผลดัชนี</div>
                        </div>
                      </Grid>
                      <Grid item xs={6}>
                        <div className="iconChild">
                          <FaCommentMedical className="iconOutsource" />
                          <div className="iconHeader">ADVICE</div>
                          <div>ให้คำแนะนำการปฏิบัติตน</div>
                        </div>
                      </Grid>
                    </Grid>
                    <Grid item xs={12} md={6} style={{ margin: "1em" }}>
                      <h4>
                        โปรแกรมประเมินดัชนีมวลกล้ามเนื้อสำหรับเด็กด้วยแรงบีบมือ
                      </h4>
                      โปรแกรมประเมินดัชนีมวลกล้ามเนื้อสำหรับเด็กด้วยแรงบีบมือ
                      เป็นโปรแกรมที่ถูกสร้างขึ้นสำหรับใช้ในบริบทของโรงเรียนระดับประถมศึกษาและมัธยมศึกษาตอนต้น
                      ที่มีเด็กนักเรียนชายหญิงอายุระหว่าง 5-16 ปี
                      เพื่อใช้ในการประเมินปริมาณกล้ามเนื้อในร่างกายของเด็ก
                      โดยอาศัยเพียงการวัดค่าแรงบีบมือ
                      นอกเหนือจากค่าน้ำหนักและส่วนสูง
                      โปรแกรมจะคำนวณค่าดัชนีมวลกายและดัชนีมวลกล้ามเนื้อ
                      ทำให้ทราบลักษณะองค์ประกอบทางกายภาพของเด็กแต่ละคน
                      การทราบค่าดัชชีมวลกายจะสามารถบ่งบอกถึงปริมาณมวลไขมันในร่างกาย
                      การทราบค่าดัชนีมวลกล้ามเนื้อจะสามารถบ่งบอกถึงปริมาณมวลกล้ามเนื้อในร่างกาย
                      การทราบค่าดัชนีทั้งสอง
                      ทำให้สามารถให้คำแนะนำเพื่อการส่งเสริมสุขภาพเบื้องต้น
                      เพื่อให้มีสุขภาพทางกายที่ดี ที่เหมาะสมกับเด็กรายบุคคล
                      การให้คำแนะนำด้านอาหาร
                      ด้านกิจกรรมทางกายและชนิดการออกกำลังกายที่เหมาะสมจะแตกต่างกันไปในเด็กแต่ละราย
                      ทำให้สามารถการติดตามการเปลี่ยนแปลงระดับมวลกล้ามเนื้อในระยะยาว
                      เพื่อใช้ในการส่งเสริมการสร้างมวลกล้ามเนื้อ
                      และรักษาระดับมวลกล้ามเนื้อให้มีค่าคงที่ในเด็ก
                    </Grid>
                  </Grid>
                </div>
              </div>
            </div>
          </Section>
          <Section id="calc">
            <Hidden lgUp>
              <Toolbar />
            </Hidden>
            <div className="thirdSection">
              <div className="boxWhite">
                <Container>
                  <h1 style={{ textAlign: "center", paddingTop: 20 }}>
                    โปรแกรมคำนวณ
                  </h1>
                  <FormControl margin="normal" className={classes.root}>
                    <FormLabel>เพศ</FormLabel>
                    <RadioGroup aria-label="gender" name="gender1">
                      <FormControlLabel
                        value="male"
                        onClick={() => setGender("male")}
                        checked={gender === "male"}
                        className={classes.labelRadio}
                        control={<Radio color="primary" />}
                        label="ชาย"
                      />
                      <FormControlLabel
                        value="female"
                        onClick={() => setGender("female")}
                        checked={gender === "female"}
                        className={classes.labelRadio}
                        control={<Radio color="primary" />}
                        label="หญิง"
                      />
                    </RadioGroup>
                    <FormLabel style={{ paddingBottom: 10 }}>อายุ</FormLabel>
                    <TextField
                      name="age"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      className={classes.textField}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">ปี</InputAdornment>
                        ),
                      }}
                      variant="outlined"
                      fullWidth
                    />
                    <FormLabel style={{ paddingBottom: 10 }}>ส่วนสูง</FormLabel>
                    <TextField
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      className={classes.textField}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            เซนติเมตร
                          </InputAdornment>
                        ),
                      }}
                      variant="outlined"
                      fullWidth
                    />
                    <FormLabel style={{ paddingBottom: 10 }}>น้ำหนัก</FormLabel>
                    <TextField
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      className={classes.textField}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end" >
                            กิโลกรัม
                          </InputAdornment>
                        ),
                      }}
                      variant="outlined"
                      fullWidth
                    />
                    <FormLabel style={{ paddingBottom: 10 }}>
                      เเรงบีบมือ
                    </FormLabel>
                    <TextField
                      value={gripstrength}
                      onChange={(e) => setGripstrength(e.target.value)}
                      className={classes.textField}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            กิโลกรัม
                          </InputAdornment>
                        ),
                      }}
                      variant="outlined"
                      fullWidth
                    />
                    <div style={{ paddingBottom: 10, width: "100%" }}>
                      <Button
                        style={{ width: "100%" }}
                        color="primary"
                        variant="contained"
                        onClick={() => onSubmit()}
                      >
                        ยืนยัน
                      </Button>
                    </div>
                  </FormControl>
                </Container>
              </div>
            </div>
          </Section>
        </ScrollingProvider>
      </div>
    </div>
  );
};

export default Home;
