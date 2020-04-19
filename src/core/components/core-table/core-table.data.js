import axios from 'axios';

export const fetchTableData = (page, pagesize, keys) => {
  return () => {
    const endpoint = 'api/users';
  
    return axios.get(endpoint, {
      params: {
        pagesize,
        page,
        keys
      }
    }).then(res => res.data);
  }
};

export const fetchTableColumn = keys => {
  return () => {
    const endpoint = 'api/users';
  
    return axios.get(endpoint, {
      params: {
        keys
      }
    }).then(res => res.data);
  };
}