import React, { useState, useEffect } from "react";
import axios from "axios";

import { CoreTable } from "@core/components/core-table";
import { Header } from "@core/components/header";
import { 
  UrlsConfig,
  getConfigUrls,
  createBackendAdapter
} from "@core/mock-backend";
import { NestedList } from "@shared/nested-list";
import { useStyles } from "./App.styles";

const App = () => {
  const adapter = createBackendAdapter();
  adapter()
    .initConfig(getConfigUrls(UrlsConfig))
    .initAdapter()
    .initGlobalMethods();
  
  const [page, setPage]               = useState(0);
  const [pagesize, setPagesize]       = useState(10);
  const [items, setItems]             = useState([]);
  const [error, setError]             = useState(null);
  
  useEffect(() => {
    axios.get("api/collections", {})
      .then(response => {
        return response.data.elements;
      })
      .then(response => {
        setItems(response);
        setError(null);
      }).catch(err => {
        setError({
          errorCode: err.response.status,
          errorMessage: err.message
        });
      });
  }, []);

  const pagesizeOptions = [5, 10, 15, 20];
  const handleChangePage = ($event, page) => {
    setPage(page);
  };
  const handleChangePagesize = $event => {
    setPagesize(parseInt($event.target.value, 10));
    setPage(0);
  }

  const classes = useStyles();

  return (
    <div className={classes.app}>
      <div className={classes.uiHeader}>
        <Header items={items} />
      </div>
      <div className={classes.uiContainer}>
        <NestedList 
          items={items}
          error={error}
        />
        <CoreTable
          pagesizeOptions={pagesizeOptions}
          pagesize={pagesize}
          page={page}
          handleChangePage={handleChangePage}
          handleChangePagesize={handleChangePagesize}>
        </CoreTable>
      </div>
    </div>
  );
}

export default App;
