import axios from 'axios';

export const fetchTableData = (page, pagesize) => {
  return () => {
    const endpoint = 'api/users';
  
    return axios.get(endpoint, {
      params: {
        pagesize,
        page,
      }
    }).then(res => res.data);
  }
};
