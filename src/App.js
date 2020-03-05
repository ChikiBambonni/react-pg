import React from 'react';
import axios from 'axios';
import './App.scss';

import { 
  MockBackendAdapter,
  MockBackendUrl,
  UrlsConfig
} from '@core/mock-backend';

const App = () => {
  (async (adapter) => {
    adapter
      .initAdapter()
      .initConfig(new MockBackendUrl(UrlsConfig))
      .initGlobalMethods();

    const response = await axios.get('api/users', {
      params: {
        page: 1,
        pagesize: 10
      }
    });
    console.log('Response: ', response);
  })(new MockBackendAdapter());
  
  return (
    <div className="App">
      App
    </div>
  );
}

export default App;
