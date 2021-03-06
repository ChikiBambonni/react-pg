import React from "react";
import PropTypes from "prop-types";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import { ColumnFilters } from "./column-filters";
import { useStyles } from "./common-table.styles";

export const CommonTable = ({
  fetchEffect,
  headers,
  rows,
  onFilterSelect,
}) => {
  const classes = useStyles();

  return (
    <TableContainer className={classes.table} component={Paper}>
      <Table
        // stickyHeader
        style={{
          borderCollapse: "separate"
        }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            {headers.map((header, index) => (
              <TableCell 
                key={header}
                classes={{
                  root: classes.root,
                }}
                className={classes.sticky}
              >
                <div className={classes.cellContainer}>
                  <div>{header}</div>
                  <div>
                    <ColumnFilters
                      fetchEffect={fetchEffect}
                      columnName={header}
                      columnIndex={index}
                      onFilterSelect={onFilterSelect}
                    />
                  </div>
                </div>
              </TableCell>))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow 
              key={index} 
              className={classes.tableRow}
            >
              {Object.keys(row).map(cell => (
                <TableCell 
                  key={cell}
                  component="th"
                  scope="row"
                  classes={{
                    root: classes.root,
                  }}
                >
                  <div>{row[cell]}</div>
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

CommonTable.propTypes = {
  fetchEffect: PropTypes.func, 
  headers: PropTypes.arrayOf(PropTypes.string),
  rows: PropTypes.arrayOf(PropTypes.object),
  onFilterSelect: PropTypes.func
}
