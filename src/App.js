import React from 'react';
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
  
  return (
    <div className="App">
      <CoreTable></CoreTable>
    </div>
  );
}

export default App;
