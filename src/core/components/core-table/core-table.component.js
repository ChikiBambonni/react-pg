import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Paper from '@material-ui/core/Paper';

import { CommonTable } from '@shared/common-table';
import { CommonPaginator } from '@shared/common-paginator';
import { ErrorMessage } from '@shared/error-message';
import { CommonSpinner } from '@shared/common-spinner';
import { useStyles } from './core-table.style';

export const CoreTable = (props) => {
  const classes = useStyles();

  const [headers, setHeaders] = useState([]);
  const [rows, setRows]       = useState([]);
  const [count, setCount]     = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState(null);
  
  useEffect(() => {
    setLoading(true);
    axios.get('api/users', {
      params: {
        pagesize: props.rowsPerPage,
        page: props.page + 1
      }
    }).then(response => {
      const { data } = response;
      setHeaders(Object.keys(data.elements[0] || []));
      setRows(data.elements);
      setCount(data.totalElements);
      setError(null);
      setLoading(false);
    }).catch(err => {
      setError({
        errorCode: err.response.status,
        errorMessage: err.message
      });
    });
  }, [props.page, props.rowsPerPage]);

  return (
    <Paper className={classes.root}>
      <ErrorMessage error={error}></ErrorMessage>
      <div className={classes.tableContainer}>
        <CommonSpinner
          loading={loading}>
        </CommonSpinner>
        <div className="tableWrapper">
          <CommonTable
            headers={headers} 
            rows={rows}>
          </CommonTable>
        </div>
        <div className="paginatorWrapper">
          <CommonPaginator
            rowsPerPageOptions={props.rowsPerPageOptions}
            count={count}
            rowsPerPage={props.rowsPerPage}
            page={props.page}
            handleChangePage={props.handleChangePage}
            handleChangeRowsPerPage={props.handleChangeRowsPerPage}>
          </CommonPaginator>
        </div>
      </div>
    </Paper>
  );
};

CoreTable.propTypes = {
  rowsPerPageOptions: PropTypes.arrayOf(PropTypes.number),
  rowsPerPage: PropTypes.number,
  page: PropTypes.number,
  handleChangePage: PropTypes.func,
  handleChangeRowsPerPage: PropTypes.func
}