import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { NavLink, Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import { useScrollSection } from "react-scroll-section";

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
  const classes = useStyles();
  const homeSection = useScrollSection("home");
  const aboutSection = useScrollSection("about");
  const calcSection = useScrollSection("calc");
  const clickHandler = () => {
    homeSection.onClick();
    console.log(homeSection);
  };
  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <Typography className={classes.title}>
            <Button component={Link} to="/">
              KMITL
            </Button>
          </Typography>
          <div>
            <Button
              // component={NavLink}
              // activeStyle={{ backgroundColor: "orange", color: "white" }}
              // exact
              // to="/"
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
              // component={NavLink}
              // activeStyle={{ backgroundColor: "orange", color: "white" }}
              // exact
              // to="/about"
              onClick={aboutSection.onClick}
              // selected={aboutSection.selected}
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
        </Toolbar>
      </AppBar>
      {/* <Toolbar /> */}
    </div>
  );
};
export default NavBar;
