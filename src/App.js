import React from 'react';
import axios from 'axios';
import './App.scss';

import { 
  UrlsConfig,
  getConfigUrls,
  createBackendAdapter
} from '@core/mock-backend';

const App = () => {
  (async (adapter) => {
    adapter()
      .initConfig(getConfigUrls(UrlsConfig))
      .initAdapter()
      .initGlobalMethods();

    const response = await axios.get('api/users', {
      params: {
        page: 2,
        pagesize: 1
      }
    });
    console.log('Response: ', response);
  
  })(createBackendAdapter());
  
  return (
    <div className="App">
      App
    </div>
  );
}

export default App;
