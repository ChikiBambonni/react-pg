import React from "react";
import PropTypes from 'prop-types';
import TablePagination from "@material-ui/core/TablePagination";

import {useStyles} from './common-paginator.styles';

export const CommonPaginator = ({
  rowsPerPageOptions,
  count,
  rowsPerPage,
  page,
  handleChangePage,
  handleChangeRowsPerPage
}) => {
  const classes = useStyles();

  return (
    <TablePagination
      component="div"
      count={count}
      onChangePage={handleChangePage}
      onChangeRowsPerPage={handleChangeRowsPerPage}
      page={page}
      rowsPerPage={rowsPerPage}
      rowsPerPageOptions={rowsPerPageOptions}
      classes={{
        root: classes.root,
        caption: classes.caption,
        selectIcon: classes.selectIcon,
        select: classes.select,
        actions: classes.actions
      }}>
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
