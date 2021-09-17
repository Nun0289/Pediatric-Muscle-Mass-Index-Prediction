import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const TablePercentile = () => {
  return (
    <TableContainer>
      <Table
        size="small"
        aria-label="a dense table"
        style={{ overflowX: "auto" }}
      >
        <TableHead>
          <TableRow>
            <TableCell align="center">อายุ</TableCell>
            <TableCell align="center">1th</TableCell>
            <TableCell align="center">3th</TableCell>
            <TableCell align="center">5th</TableCell>
            <TableCell align="center">15th</TableCell>
            <TableCell align="center">25th</TableCell>
            <TableCell align="center">50th</TableCell>
            <TableCell align="center">75th</TableCell>
            <TableCell align="center">85th</TableCell>
            <TableCell align="center">95th</TableCell>
            <TableCell align="center">97th</TableCell>
            <TableCell align="center">99th</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell align="center">num</TableCell>
            <TableCell align="center">num</TableCell>
            <TableCell align="center">num</TableCell>
            <TableCell align="center">num</TableCell>
            <TableCell align="center">num</TableCell>
            <TableCell align="center">num</TableCell>
            <TableCell align="center">num</TableCell>
            <TableCell align="center">num</TableCell>
            <TableCell align="center">num</TableCell>
            <TableCell align="center">num</TableCell>
            <TableCell align="center">num</TableCell>
            <TableCell align="center">num</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TablePercentile;
