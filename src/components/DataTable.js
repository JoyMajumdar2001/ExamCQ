import {
  Button,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import ShareIcon from "@mui/icons-material/Share";

export default function DataTable({ rows }) {
  return (
    <div>
      {rows && (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Paper name</TableCell>
                <TableCell align="right">Created</TableCell>
                <TableCell align="right">Last edited</TableCell>
                <TableCell align="right">Total responses</TableCell>
                <TableCell align="right">Edit</TableCell>
                <TableCell align="right">Share</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.uid}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <Button color="secondary">{row.name}</Button>
                  </TableCell>
                  <TableCell align="right">{row.created}</TableCell>
                  <TableCell align="right">{row.modified}</TableCell>
                  <TableCell align="right">{row.responses}</TableCell>
                  <TableCell align="right">
                    <IconButton color="primary" aria-label="edit paper">
                      <EditIcon />
                    </IconButton>
                  </TableCell>
                  <TableCell align="right">
                    <IconButton color="success" aria-label="copy share link">
                      <ShareIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
}
