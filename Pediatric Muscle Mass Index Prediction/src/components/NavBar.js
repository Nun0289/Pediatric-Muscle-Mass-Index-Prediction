import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Link, useLocation } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import { useScrollSection } from "react-scroll-section";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { useState, createRef } from "react";
import { Hidden } from "@material-ui/core";
import logo from "../img/kmitl.png"
import MenuIcon from "@material-ui/icons/Menu";

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
  MenuItem:{
    fontFamily: "Kanit"
  }
}));
const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const location = useLocation();
  const classes = useStyles();
  const open = Boolean(anchorEl);
  const homeSection = useScrollSection("home");
  const aboutSection = useScrollSection("about");
  const calcSection = useScrollSection("calc");
  const clickHandler = () => {
    homeSection.onClick();
    console.log(homeSection);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
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

  const MenuButton = () => {
    return (
      <div>
        <Button
          id="menu-button-toggle"
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <MenuIcon />
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={open}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>
            <Button
              onClick={clickHandler}
              selected={homeSection.selected}
              style={
                homeSection.selected
                  ? { backgroundColor: "orange" }
                  : { backgroundColor: "white" }
              }
            >
              <div style={{fontFamily: "Kanit"}}>
              หน้าแรก
              </div>
            </Button>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Button
              onClick={aboutSection.onClick}
              style={
                aboutSection.selected
                  ? { backgroundColor: "orange" }
                  : { backgroundColor: "white" }
              }
            >
              <div style={{fontFamily: "Kanit"}}>
              เกี่ยวกับ
              </div>
            </Button>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Button
              onClick={calcSection.onClick}
              selected={calcSection.selected}
              style={
                calcSection.selected
                  ? { backgroundColor: "orange" }
                  : { backgroundColor: "white" }
              }
            >
              <div style={{fontFamily: "Kanit"}}>
              โปรแกรมคำนวณ
              </div>
            </Button>
          </MenuItem>
        </Menu>
      </div>
    );
  };

  const SectionSlide = () => {
    return (
      <>
        <Typography className={classes.title}>
          <Button component={Link} to="/">
          <img src={logo} style={{ width: "10vh" }} />
          </Button>
        </Typography>
        <div>
          <Hidden xsDown>
            <Button
              onClick={clickHandler}
              selected={homeSection.selected}
              style={
                homeSection.selected
                  ? { backgroundColor: "orange" }
                  : { backgroundColor: "white" }
              }
            >
              <div style={{fontFamily: "Kanit"}}>
              หน้าแรก
              </div>
            </Button>
            <Button
              onClick={aboutSection.onClick}
              style={
                aboutSection.selected
                  ? { backgroundColor: "orange" }
                  : { backgroundColor: "white" }
              }
            >
              <div style={{fontFamily: "Kanit"}}>
              เกี่ยวกับ
              </div>
            </Button>
            <Button
              onClick={calcSection.onClick}
              selected={calcSection.selected}
              style={
                calcSection.selected
                  ? { backgroundColor: "orange" }
                  : { backgroundColor: "white" }
              }
            >
              <div style={{fontFamily: "Kanit"}}>
              โปรแกรมคำนวณ
              </div>
            </Button>
          </Hidden>
          <Hidden smUp>
            <MenuButton />
          </Hidden>
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
