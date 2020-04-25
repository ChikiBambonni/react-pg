import axios from 'axios';

export const fetchTableData = (page, pagesize, keys, filter) => {
  return () => {
    const endpoint = 'api/users';
  
    return axios.get(endpoint, {
      params: {
        pagesize,
        page,
        keys,
        filter
      }
    }).then(res => res.data);
  }
};
