import FormControl from "@material-ui/core/FormControl";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
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
import doctorObserve from "../img/doctorObserve.jpg";
import fatWeigth from "../img/fat-weigth.png";
import kid from "../img/Kid.png";
import { useHistory } from "react-router-dom";
import { red } from "@material-ui/core/colors";
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
  },
  
}));

const Home = () => {
  const classes = useStyles();
  const [gender, setGender] = useState("male");
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [gripstrength, setGripstrength] = useState('');

  const [showModle, setShowModle] = useState(false);
  const [errorModle,setErrorModle] = useState('')
  const slideToCalc = useScrollSection("calc");
  const history = useHistory();
  const clickHandler = () => {
    document.getElementById("calc").scrollIntoView();
  };
  const onSubmit = () => {
    if (
      gender != '' &&
      age != ''&&
      height != '' &&
      weight != '' &&
      gripstrength != ''
    ) {
      if(age >= 5 && age <=16){
      var result = results(gender,age,weight,height,gripstrength)
      history.push({pathname:"/calc",result:{result}});
      }else{
        setErrorModle('ช่วงอายุผิดพลาด(5-16 ปี)กรุณากรอกใหม่')
        setShowModle(true)
      }
    }else{
      setErrorModle('กรุณากรอกเเบบฟอรมให้ครบ')
      setShowModle(true)
    }
  };
  return (
    <div>
    <Modal show={showModle} onHide={() => setShowModle(!showModle)} style={{paddingTop:200}}>
    <Modal.Body>{errorModle}</Modal.Body>
    <Modal.Footer>
      <Button onClick={() => setShowModle(!showModle)}>Close</Button>
    </Modal.Footer>
  </Modal>
    <div className="homePage">
      <ScrollingProvider scrollBehavior="smooth">
        <NavBar />
        <Section id="home">
          <div className="firstSection">
            <div className="titleWeb">
              <div style={{ marginLeft: "2%" }}>
                <h2>Pediatric Muscle Mass Index Prediction by Grip Strength</h2>
                <h3>โปรแกรมประเมินดัชนีมวลกล้ามเนื้อสำหรับเด็กด้วยแรงบีบมือ</h3>
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
                  style={{
                    backgroundColor: "orange",
                    color: "white",
                    width: "40%",
                    height: "6vh",
                    fontSize: "2vw",
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
                  style={{ width: "80%", margin: "auto", display: "block" }}
                />
              </Grid>
            </Grid>
          </div>
        </Section>
        <Section id="about">
          <div className="secondSection">
            <div style={{ height: "fit-content" }}>
              <div style={{ height: "100vh" }}>
                <Grid container alignItems="center">
                  <Grid xs={12} md={7} item style={{ padding: "2em" }}>
                    <h3> สถานการณ์ปัจจุบัน </h3>
                    <p>
                      การรณรงค์ส่งเสริมกิจกรรมทางกาย
                      กระทำเพื่อการควบคุมภาวะอ้วนหรือการเพิ่มขึ้นของมวลไขมันในร่างกายตลอดสองทศวรรษ
                      พบว่าไม่เป็นไปตามเป้าหมายตามความคาดหวัง
                      คนทั่วไปส่วนใหญ่ส่วนใหญ่มากกว่าครึ่งยังคงมีพฤติกรรมเนือยนิ่ง
                      มีกิจกรรมทางกายในระดับต่ำ และภาวะอ้วนก็พบได้มากขึ้นจากอดีต
                      ปัจจัยที่ส่งเสริมกิจกรรมทางกายของบุคคลมีความซับซ้อนจากหลายหลายปัจจัย
                      ถูกกำหนดและมีการพัฒนาต่อเนื่องตั้งแต่วัยเด็ก
                      หนึ่งในปัจจัยดังกล่าวคือปัจจัยสภาพทางกายจากปริมาณมวลกล้ามเนื้อที่มาก
                      พอเพื่อก่อเกิดความสามารถในการเคลื่อนไหว
                      การรณรงค์ส่งเสริมกิจกรรมทางกายเพื่อควบคุมน้ำหนักตัวหรือดัชนีมวลกายร่วมกับ
                      การส่งเสริมและการดำรงมวลกล้ามเนื้อจึงเป็นแนวทางเสริมที่มีความจำเป็น
                      ดัชนีมวลกล้ามเนื้อน่าจะเป็นหนึ่งตัวชี้วัดทางสุขภาพตัวใหม่เนื่องจากเทคโนโลยีในปัจจุบันสามารถทำได้ง่าย
                      การวัดมวลกล้ามเนื้อมีหลายวิธี
                    </p>
                    <Button
                      component={Link}
                      to="/about"
                      variant="outlined"
                      color="primary"
                    >
                      อ่านเพิ่มเติม
                    </Button>
                  </Grid>
                  <Hidden only="xs">
                    <Grid xs={12} md={5} item>
                      <img src={fatWeigth} style={{ width: "40vw" }} />
                    </Grid>
                  </Hidden>
                </Grid>
              </div>
              <div className="secondContent">
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
                    <Grid item xs={12} md={6}>
                      <h4>
                        โปรแกรมประเมินดัชนีมวลกล้ามเนื้อสำหรับเด็กด้วยแรงบีบมือ
                      </h4>
                      การรณรงค์ส่งเสริมกิจกรรมทางกาย
                      กระทำเพื่อการควบคุมภาวะอ้วนหรือการเพิ่มขึ้นของมวลไขมันในร่างกายตลอดสองทศวรรษ
                      พบว่าไม่เป็นไปตามเป้าหมายตามความคาดหวัง
                      คนทั่วไปส่วนใหญ่ส่วนใหญ่มากกว่าครึ่งยังคงมีพฤติกรรมเนือยนิ่ง
                      มีกิจกรรมทางกายในระดับต่ำ และภาวะอ้วนก็พบได้มากขึ้นจากอดีต
                      ปัจจัยที่ส่งเสริมกิจกรรมทางกายของบุคคลมีความซับซ้อนจากหลายหลายปัจจัย
                      ถูกกำหนดและมีการพัฒนาต่อเนื่องตั้งแต่วัยเด็ก
                      หนึ่งในปัจจัยดังกล่าวคือปัจจัยสภาพทางกายจากปริมาณมวลกล้ามเนื้อที่มาก
                      พอเพื่อก่อเกิดความสามารถในการเคลื่อนไหว
                      การรณรงค์ส่งเสริมกิจกรรมทางกายเพื่อควบคุมน้ำหนักตัวหรือดัชนีมวลกายร่วมกับ
                      การส่งเสริมและการดำรงมวลกล้ามเนื้อจึงเป็นแนวทางเสริมที่มีความจำเป็น
                      ดัชนีมวลกล้ามเนื้อน่าจะเป็นหนึ่งตัวชี้วัดทางสุขภาพตัวใหม่เนื่องจากเทคโนโลยีในปัจจุบันสามารถทำได้ง่าย
                      การวัดมวลกล้ามเนื้อมีหลายวิธี
                    </Grid>
                  </Grid>
                </div>
                {/* <div className="aboutSection">
                  <Container>
                    <Grid container alignItems="center">
                      <Grid item xs={12} sm={6}>
                        <div>
                          <img
                            src={doctorObserve}
                            alt="observeImg"
                            width="90%"
                            className="observeImg"
                          />
                        </div>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <div>
                          <h3 className="aboutDesc">โปรแกรมคำนวณ</h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                          </p>
                        </div>
                      </Grid>
                    </Grid>
                  </Container>
                </div> */}
              </div>
            </div>
          </div>
        </Section>
        <Section id="calc">
          <div className="thirdSection">
            <div className="boxWhite">
              <Container>
                <h1 style={{ textAlign: "center",paddingTop:20 }}>โปรแกรมคำนวณ</h1>
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
                  <FormLabel style={{paddingBottom:10}}>อายุ</FormLabel>
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
                  <FormLabel style={{paddingBottom:10}}>ส่วนสูง</FormLabel>
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
                  <FormLabel style={{paddingBottom:10}}>น้ำหนัก</FormLabel>
                  <TextField
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className={classes.textField}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">กิโลกรัม</InputAdornment>
                      ),
                    }}
                    variant="outlined"
                    fullWidth
                  />
                  <FormLabel style={{paddingBottom:10}}>เเรงบีบมือ</FormLabel>
                  <TextField
                    value={gripstrength}
                    onChange={(e) => setGripstrength(e.target.value)}
                    className={classes.textField}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">กิโลกรัม</InputAdornment>
                      ),
                    }}
                    variant="outlined"
                    fullWidth
                  />
                  <div style={{paddingBottom:10,width:"100%"}}>
                  <Button
                  style={{width:"100%"}}
                    color="primary"
                    variant="contained"
                    onClick={()=>onSubmit()}
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
