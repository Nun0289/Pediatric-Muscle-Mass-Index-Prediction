import { makeStyles } from "@material-ui/core/styles";
import { Paper, Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  calcPage: {
    height: "100%",
    minHeight: "calc(100vh - 64px)",
    backgroundColor: "orange",
  },
  paperOutside: {
    padding: "1em",
  },
  paperInside: {
    backgroundColor: "lightgrey",
    marginLeft: "1em",
    marginRight: "1em",
  },
}));

const Calculator = () => {
  const classes = useStyles();
  return (
    <div className={classes.calcPage}>
      <Container maxWidth="lg" disableGutters>
        <Paper className={classes.paperOutside}>
          <Paper className={classes.paperInside}>
            เปอร์เซ็นมวลกล้ามเนื้อต่อน้ำหนักตัว
          </Paper>
          <Paper className={classes.paperInside}>
            MMI : ดัชนีมวลกล้ามเนื้อ
          </Paper>
          <Paper className={classes.paperInside}>ดัชนีมวลกาย</Paper>
        </Paper>
      </Container>
    </div>
  );
};

export default Calculator;
