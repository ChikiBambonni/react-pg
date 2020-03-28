import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { CoreTable } from '@core/components/core-table';
import { Header } from '@core/components/header';
import { 
  UrlsConfig,
  getConfigUrls,
  createBackendAdapter
} from '@core/mock-backend';
import { NestedList } from '@shared/nested-list';
import { useStyles } from './App.styles';

const App = () => {
  const adapter = createBackendAdapter();
  adapter()
    .initConfig(getConfigUrls(UrlsConfig))
    .initAdapter()
    .initGlobalMethods();
  
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    axios.get('api/collections', {})
      .then(response => {
        return response.data.elements;
      })
      .then(response => {
        setItems(response);
      });
  }, []);

  const rowsPerPageOptions = [5, 10, 15, 20];
  const handleChangePage = ($event, page) => {
    setPage(page);
  };
  const handleChangeRowsPerPage = ($event) => {
    setRowsPerPage(parseInt($event.target.value, 10));
    setPage(0);
  }

  const classes = useStyles();

  return (
    <div className={classes.app}>
      <div className={classes.uiHeader}>
        <Header items={items}></Header>
      </div>
      <div className={classes.uiContainer}>
        <NestedList items={items}></NestedList>
        <CoreTable
          rowsPerPageOptions={rowsPerPageOptions}
          rowsPerPage={rowsPerPage}
          page={page}
          handleChangePage={handleChangePage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}>
        </CoreTable>
      </div>
    </div>
  );
}

export default App;
