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
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { TextField, Button, Grid, Toolbar } from "@material-ui/core";
import { Section } from "react-scroll-section";
import { FaWeight, FaRunning, FaCommentMedical, FaPollH } from "react-icons/fa";
import doctorObserve from "../img/doctorObserve.jpg";


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
  const [value, setValue] = useState(null);

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <>
      <ScrollingProvider scrollBehavior="smooth">
        <NavBar />
        <Section id="home">
          <div className="firstSection">
            <h1 className="titleMain">
              Body Composition and Muscle Mass Index<br></br>Analytic Program
              for Children and Adult
            </h1>
            <h3 className="descMain">
              โปรแกรมวิเคราะห์องค์ประกอบร่างกายและดัชนีมวลกล้ามเนื้อสำหรับเด็กและผู้ใหญ่
            </h3>
          </div>
        </Section>
        <Section id="about">
          <div className="secondSection">
            <div style={{ height: "fit-content" }}>
              <div className="secondContent">
                <h2>เกี่ยวกับ</h2>
                <div className="iconSection">
                  <Grid container>
                    <Grid item xs={6} md={3}>
                      <div className="iconChild">
                        <FaWeight className="iconOutsource" />
                        <div className="iconHeader">BMI</div>
                        <div>คำนวณดัชนีมวลกาย</div>
                      </div>
                    </Grid>
                    <Grid item xs={6} md={3}>
                      <div className="iconChild">
                        <FaRunning className="iconOutsource" />
                        <div className="iconHeader">MMI</div>
                        <div>คำนวณดัชนีมวลกล้ามเนื้อ</div>
                      </div>
                    </Grid>
                    <Grid item xs={6} md={3}>
                      <div className="iconChild">
                        <FaPollH className="iconOutsource" />
                        <div className="iconHeader">RESULT</div>
                        <div>แปรผลดัชนี</div>
                      </div>
                    </Grid>
                    <Grid item xs={6} md={3}>
                      <div className="iconChild">
                        <FaCommentMedical className="iconOutsource" />
                        <div className="iconHeader">ADVICE</div>
                        <div>ให้คำแนะนำการปฏิบัติตน</div>
                      </div>
                    </Grid>
                  </Grid>
                </div>
                <div className="aboutSection">
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
                          <Button
                            component={Link}
                            to="/about"
                            variant="outlined"
                            color="primary"
                          >
                            อ่านเพิ่มเติม
                          </Button>
                        </div>
                      </Grid>
                    </Grid>
                  </Container>
                </div>
              </div>
            </div>
          </div>
        </Section>
        <Section id="calc">
          <div className="thirdSection">
            <div className="boxWhite">
              <Container>
                <h1 style={{ textAlign: "center" }}>โปรแกรมคำนวณ</h1>
                <FormControl margin="normal" className={classes.root}>
                  <FormLabel>เพศ</FormLabel>
                  <RadioGroup
                    aria-label="gender"
                    name="gender1"
                    value={value}
                    onChange={handleChange}
                  >
                    <FormControlLabel
                      className={classes.labelRadio}
                      value="male"
                      control={<Radio color="primary" />}
                      label="ชาย"
                    />
                    <FormControlLabel
                      className={classes.labelRadio}
                      value="female"
                      control={<Radio color="primary" />}
                      label="หญิง"
                    />
                  </RadioGroup>
                  <FormLabel>อายุ</FormLabel>
                  <TextField
                    className={classes.textField}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">ปี</InputAdornment>
                      ),
                    }}
                    variant="outlined"
                    fullWidth
                  />
                  <FormLabel>ส่วนสูง</FormLabel>
                  <TextField
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
                  <FormLabel>น้ำหนัก</FormLabel>
                  <TextField
                    className={classes.textField}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">กิโลกรัม</InputAdornment>
                      ),
                    }}
                    variant="outlined"
                    fullWidth
                  />
                  <FormLabel>มวลกล้ามเนื้อ</FormLabel>
                  <TextField
                    className={classes.textField}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">กิโลกรัม</InputAdornment>
                      ),
                    }}
                    variant="outlined"
                    fullWidth
                  />
                  <Button color="primary" variant="contained">
                    ยืนยัน
                  </Button>
                </FormControl>
              </Container>
            </div>
          </div>
        </Section>
      </ScrollingProvider>
    </>
  );
};

export default Home;
