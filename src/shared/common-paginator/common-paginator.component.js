import React from "react";
import PropTypes from "prop-types";
import TablePagination from "@material-ui/core/TablePagination";

import { useStyles } from "./common-paginator.styles";

export const CommonPaginator = ({
  pagesizeOptions,
  count,
  pagesize,
  page,
  handleChangePage,
  handleChangePagesize
}) => {
  const classes = useStyles();

  return (
    <TablePagination
      component="div"
      count={count}
      onChangePage={handleChangePage}
      onChangeRowsPerPage={handleChangePagesize}
      page={page}
      rowsPerPage={pagesize}
      rowsPerPageOptions={pagesizeOptions}
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
  pagesizeOptions: PropTypes.arrayOf(PropTypes.number).isRequired,
  count: PropTypes.number.isRequired,
  pagesize: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  handleChangePage: PropTypes.func.isRequired,
  handleChangePagesize: PropTypes.func.isRequired
}
