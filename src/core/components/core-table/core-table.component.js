import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';

import { CommonTable } from '@shared/common-table';
import { CommonPaginator } from '@shared/common-paginator';
import { ErrorMessage } from '@shared/error-message';
import { CommonSpinner } from '@shared/common-spinner';
import { useFetch } from '@core/hooks';
import { fetchTableData } from './core-table.data';
import { useStyles } from './core-table.style';

export const CoreTable = props => {
  const classes = useStyles();

  const [headers, setHeaders]       = useState([]);
  const [rows, setRows]             = useState([]);
  const [columnData, setColumnData] = useState([]);
  const [count, setCount]           = useState(0);
  const [tLoading, setTLoading]     = useState(true);
  const [fLoading, setFLoading]     = useState(false);
  const [tError, setTError]         = useState(null);
  const [fError, setFError]         = useState(null);

  useEffect(() => {
    const fetchEffect = fetchTableData(
      props.page + 1, 
      props.pagesize
    );

    useFetch(
      fetchEffect,
      setTLoading,
      setTError
    )
      .then(res => {
        setHeaders(Object.keys(res.elements[0] || []));
        setRows(res.elements);
        setCount(res.totalElements);
      })
      .catch(e => e);
  }, [props.page, props.pagesize]);

  const onFilterExpand = name => {
    useFetch(
      fetchTableData(1, 1000, {[name]: 1}),
      setFLoading,
      setFError
    )
      .then(res => res.elements)
      .then(res => res.map(e => e[name]))
      .then(res => setColumnData(res))
      .catch(e => e);
  };

  const onFilterSearch = (column, search) => {
    useFetch(
      fetchTableData(1, 1000, {[column]: 1}, {"$regex": {[column]: search}}),
      setFLoading,
      setFError
    )
      .then(res => res.elements)
      .then(res => res.map(e => e[column]))
      .then(res => setColumnData(res))
      .catch(e => e);
  };

  return (
    <Paper className={classes.root}>
      <ErrorMessage error={tError}></ErrorMessage>
      <div className={classes.tableContainer}>
        <CommonSpinner
          loading={tLoading}
          size={16}
        >
        </CommonSpinner>
        <div className="tableWrapper">
          <CommonTable
            headers={headers} 
            rows={rows}
            columnData={columnData}
            loading={fLoading}
            error={fError}
            onFilterExpand={onFilterExpand}
            onFilterSearch={onFilterSearch}
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