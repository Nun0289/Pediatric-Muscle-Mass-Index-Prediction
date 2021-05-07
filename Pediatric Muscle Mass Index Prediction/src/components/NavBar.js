import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { NavLink, Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";

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
              component={NavLink}
              activeStyle={{ backgroundColor: "orange", color: "white" }}
              exact
              to="/"
            >
              หน้าแรก
            </Button>
            <Button
              component={NavLink}
              activeStyle={{ backgroundColor: "orange", color: "white" }}
              exact
              to="/about"
            >
              เกี่ยวกับ
            </Button>
            <Button
              component={NavLink}
              activeStyle={{ backgroundColor: "orange", color: "white" }}
              exact
              to="/calc"
            >
              โปรแกรมคำนวณ
            </Button>
          </div>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
};
export default NavBar;
