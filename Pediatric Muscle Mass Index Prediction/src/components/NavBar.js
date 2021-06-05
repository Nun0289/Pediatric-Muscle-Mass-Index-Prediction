import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Link, useLocation } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import { useScrollSection } from "react-scroll-section";
import { AiOutlineArrowLeft } from "react-icons/ai";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  toolbar: {
    backgroundColor: "white",
    color: "black",
  },
}));
const NavBar = () => {
  const location = useLocation();
  console.log(location);
  const classes = useStyles();
  const homeSection = useScrollSection("home");
  const aboutSection = useScrollSection("about");
  const calcSection = useScrollSection("calc");
  const clickHandler = () => {
    homeSection.onClick();
    console.log(homeSection);
  };

  const BackNavBar = () => {
    return (
      <>
        <Button variant="outlined" color="primary" component={Link} to="/">
          <AiOutlineArrowLeft style={{ fontSize: "1.5em" }} />
          {"  "} Back
        </Button>
      </>
    );
  };

  const SectionSlide = () => {
    return (
      <>
        <Typography className={classes.title}>
          <Button component={Link} to="/">
            KMITL
          </Button>
        </Typography>
        <div>
          <Button
            onClick={clickHandler}
            selected={homeSection.selected}
            style={
              homeSection.selected
                ? { backgroundColor: "orange" }
                : { backgroundColor: "white" }
            }
          >
            หน้าแรก
          </Button>
          <Button
            onClick={aboutSection.onClick}
            style={
              aboutSection.selected
                ? { backgroundColor: "orange" }
                : { backgroundColor: "white" }
            }
          >
            เกี่ยวกับ
          </Button>
          <Button
            // component={NavLink}
            // activeStyle={{ backgroundColor: "orange", color: "white" }}
            // exact
            // to="/calc"
            onClick={calcSection.onClick}
            selected={calcSection.selected}
            style={
              calcSection.selected
                ? { backgroundColor: "orange" }
                : { backgroundColor: "white" }
            }
          >
            โปรแกรมคำนวณ
          </Button>
        </div>
      </>
    );
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          {location.pathname === "/" ? <SectionSlide /> : <BackNavBar />}
        </Toolbar>
      </AppBar>
      {/* <Toolbar /> */}
      {location.pathname !== "/" ? <Toolbar /> : null}
    </div>
  );
};
export default NavBar;
