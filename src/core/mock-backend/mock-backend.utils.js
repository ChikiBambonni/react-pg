import {Maybe} from "ramda-fantasy";
import {path, isEmpty, pick} from "ramda";

import {NaNtoNull} from "@core/utils";

export const getConfigUrls = config => {
  const map = Object.keys(config);
  const urls = {};

  map.forEach(type => {
    const urlList = Object.keys(config[type]);
    urlList.forEach(url => urls[`${type}/${url}`] = config[type][url]);
  });

  return urls;
};

export const createTableData = ({elements, pagesize, page, keys}) => {
  const offset = (page - 1) * pagesize;
  const offsetElements = elements.slice(
    offset,
    offset + Number(pagesize)
  );

  if (!isEmpty(keys)) {
    const fields = Object.keys(keys).filter(k => Boolean(keys[k]));
    const filteredElements = elements.map(e => pick(fields, e));
    
    return {
      "totalElements": filteredElements.length,
      "elements": filteredElements
    }
  }

  return {
    "totalPages": Math.ceil(elements.length / pagesize),
    "totalElements": elements.length,
    "elements": offsetElements,
    page,
    pagesize
  };
};

export const getPageNumber = (params, defaultValue = 1) => {
  return Maybe(NaNtoNull(Number(path(["page"], params)))).getOrElse(defaultValue);
};

export const getPageSize = (params, defaultValue = 10) => {
  return Maybe(NaNtoNull(Number(path(["pagesize"], params)))).getOrElse(defaultValue);
};

export const getKeys = (params, defaultValue = {}) => {
  return Maybe(path(["keys"], params)).getOrElse(defaultValue);
};
