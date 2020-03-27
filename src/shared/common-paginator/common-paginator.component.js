import React from "react";
import PropTypes from 'prop-types';
import TablePagination from "@material-ui/core/TablePagination";

export const CommonPaginator = ({
  rowsPerPageOptions,
  count,
  rowsPerPage,
  page,
  handleChangePage,
  handleChangeRowsPerPage
}) => {
  return (
    <TablePagination
      component="div"
      count={count}
      onChangePage={handleChangePage}
      onChangeRowsPerPage={handleChangeRowsPerPage}
      page={page}
      rowsPerPage={rowsPerPage}
      rowsPerPageOptions={rowsPerPageOptions}>
    </TablePagination>
  );
}

CommonPaginator.propTypes = {
  rowsPerPageOptions: PropTypes.arrayOf(PropTypes.number),
  count: PropTypes.number,
  rowsPerPage: PropTypes.number,
  page: PropTypes.number,
  handleChangePage: PropTypes.func,
  handleChangeRowsPerPage: PropTypes.func
}
