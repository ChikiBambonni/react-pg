import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';

import { CommonTable } from '@shared/common-table';
import { CommonPaginator } from '@shared/common-paginator';
import { ErrorMessage } from '@shared/error-message';
import { CommonSpinner } from '@shared/common-spinner';
import { useFetch } from '@core/hooks';
import { fetchTableData, fetchTableColumn } from './core-table.data';
import { useStyles } from './core-table.style';

export const CoreTable = props => {
  const classes = useStyles();

  const [headers, setHeaders]       = useState([]);
  const [rows, setRows]             = useState([]);
  const [columnData, setColumnData] = useState([]);
  const [count, setCount]           = useState(0);
  const [loading, setLoading]       = useState(true);
  const [error, setError]           = useState(null);

  useEffect(() => {
    const fetchEffect = fetchTableData(
      props.page + 1, 
      props.pagesize
    );

    useFetch(
      fetchEffect,
      setLoading,
      setError
    ).then(res => {
      if (res) {
        setHeaders(Object.keys(res.elements[0] || []));
        setRows(res.elements);
        setCount(res.totalElements);
      }
    });
  }, [props.page, props.pagesize]);

  const onFilterExpand = name => {
    fetchTableColumn({[name]: 1})()
      .then(res => res.elements)
      .then(res => res.map(e => e[name]))
      .then(res => setColumnData(res));
  };

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
            rows={rows}
            columnData={columnData}
            onFilterExpand={onFilterExpand}
          >
          </CommonTable>
        </div>
        <div className="paginatorWrapper">
          <CommonPaginator
            pagesizeOptions={props.pagesizeOptions}
            count={count}
            pagesize={props.pagesize}
            page={props.page}
            handleChangePage={props.handleChangePage}
            handleChangePagesize={props.handleChangePagesize}>
          </CommonPaginator>
        </div>
      </div>
    </Paper>
  );
};

CoreTable.propTypes = {
  pagesizeOptions: PropTypes.arrayOf(PropTypes.number),
  pagesize: PropTypes.number,
  page: PropTypes.number,
  handleChangePage: PropTypes.func,
  handleChangePagesize: PropTypes.func
}