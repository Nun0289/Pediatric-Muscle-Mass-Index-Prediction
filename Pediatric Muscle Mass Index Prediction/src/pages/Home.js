import FormControl from "@material-ui/core/FormControl";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import Container from "@material-ui/core/Container";
import InputAdornment from "@material-ui/core/InputAdornment";
import "../css/home.css";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";

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
      <div className="firstSection">
        <div className="titleMain">
          Body Composition and Muscle Mass Index<br></br>Analytic Program for
          Children and Adult
        </div>
        <div className="descMain">
          โปรแกรมวิเคราะห์องค์ประกอบร่างกายและดัชนีมวลกล้ามเนื้อสำหรับเด็กและผู้ใหญ่
        </div>
      </div>
      <div className="secondSection"></div>
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
                    <InputAdornment position="end">เซนติเมตร</InputAdornment>
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
      <div className="footer">something that i don't know</div>
    </>
  );
};

export default Home;
