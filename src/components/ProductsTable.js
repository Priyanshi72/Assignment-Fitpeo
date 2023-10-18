import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Stack, Button, Card, CardHeader, SvgIcon } from "@mui/material";
import ChevronDownIcon from "@heroicons/react/24/solid/ChevronDownIcon";
import SearchBar from "./SearchBar";

function createData(name, Stock, Price, Sales) {
  return { name, Stock, Price, Sales };
}

const rows = [
  createData("Frozen yoghurt", "45 in stock", "$ 25.09", 24),
  createData("Ice cream sandwich", "09 in stock", "$ 85.09", 37),
  createData("Eclair", "234 in stock", "$ 25.00", 24),
  createData("Cupcake", "55 in stock", "$ 34.45", 67),
  createData("Gingerbread", "23 in stock", "$ 56.19", 49),
  createData("Gingerbread Deluxe", "14 in stock", "$47.99", 11),
  createData("Premium Gingerbread", "32 in stock", "$61.50", 25),
  createData("Holiday Gingerbread", "8 in stock", "$53.75", 36),
  createData("Gingerbread Treats", "19 in stock", "$49.99", 48),
  createData("Fancy Gingerbread", "5 in stock", "$56.19", 59),
  createData("Gingerbread Joy", "27 in stock", "$44.25", 72),
  createData("Gingerbread Delight", "11 in stock", "$52.00", 83),
  createData("Gingerbread Bliss", "3 in stock", "$58.75", 94),
  createData("Classic Gingerbread", "20 in stock", "$45.99", 105),
  createData("Gingerbread Extravaganza", "13 in stock", "$51.35", 117),
];

export default function BasicTable() {
  return (
    <Card sx={{ height: "100%", borderRadius: 3 }}>
      <CardHeader
        action={
          <Stack direction="row" justifyContent="flex-start" spacing={5}>
            <SearchBar />
            <Button
              color="inherit"
              size="small"
              endIcon={
                <SvgIcon fontSize="small">
                  <ChevronDownIcon />
                </SvgIcon>
              }
            >
              Last 30 days
            </Button>
          </Stack>
        }
        style={{ fontWeight: "bold" }}
        title="Product Sell"
      />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: "GrayText" }}>Product Name</TableCell>
              <TableCell align="right" sx={{ color: "GrayText" }}>
                Stock
              </TableCell>
              <TableCell align="right" sx={{ color: "GrayText" }}>
                Price
              </TableCell>
              <TableCell align="right" sx={{ color: "GrayText" }}>
                Total Sales
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.Stock}</TableCell>
                <TableCell align="right" sx={{ fontWeight: "bold" }}>
                  {row.Price}
                </TableCell>
                <TableCell align="right">{row.Sales}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
}
