import React, { useState } from 'react';
import './App.scss';

import { CoreTable } from '@core/components/core-table';
import { 
  UrlsConfig,
  getConfigUrls,
  createBackendAdapter
} from '@core/mock-backend';

const App = () => {
  const adapter = createBackendAdapter();
  adapter()
    .initConfig(getConfigUrls(UrlsConfig))
    .initAdapter()
    .initGlobalMethods();
  
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  
  const rowsPerPageOptions = [5, 10, 15, 20];
  const handleChangePage = ($event, page) => {
    setPage(page);
  };
  const handleChangeRowsPerPage = ($event) => {
    setRowsPerPage(parseInt($event.target.value, 10));
    setPage(0);
  }

  return (
    <div className="App">
      <CoreTable
        rowsPerPageOptions={rowsPerPageOptions}
        rowsPerPage={rowsPerPage}
        page={page}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}>
      </CoreTable>
    </div>
  );
}

export default App;
