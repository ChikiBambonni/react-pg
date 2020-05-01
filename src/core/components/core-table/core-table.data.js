import axios from "axios";

export const fetchTableData = (endpoint, page, pagesize, keys, filter) => {
  return () => {  
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
