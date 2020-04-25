import {Maybe} from "ramda-fantasy";
import {
  path,
  isEmpty,
  pick,
  uniq,
  last,
  filter,
  map,
  keys as rkeys,
  dropLast,
  compose,
  curry
} from "ramda";

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

export const createTableData = ({elements, pagesize, page, keys, filter}) => {
  const data = compose(
    curry(applyFilter)(filter),
    curry(applyKeys)(keys),
    curry(applyPaging)(page, pagesize)
  )(elements);

  return {
    "totalPages": Math.ceil(data.length / pagesize),
    "totalElements": data.length,
    "elements": data,
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

export const getFilter = (params, defaultValue = {}) => {
  return Maybe(path(["filter"], params)).getOrElse(defaultValue);
};

export const applyPaging = (page, pagesize, elements) => {
  const offset = (page - 1) * pagesize;
  const offsetElements = elements.slice(
    offset,
    offset + Number(pagesize)
  );

  return offsetElements;
};

export const applyFilter = (f, elements) => {
  if (isEmpty(f)) return elements;
  
  const parseFilter = key => {
    switch (key) {
    case "$regex": { // TODO: add $or filter 
      const $regex = f[key];
      const regexKeys = rkeys($regex);

      const parseKeys = (keys, items) => {
        const k = last(keys);
        if (!k) return items;
        return parseKeys(
          dropLast(keys), 
          filter(item => item[k].match($regex[k]), items)
        );
      };
      
      return parseKeys(regexKeys, elements);
    }
    default: {
      return elements;
    }
    }
  };
  
  return parseFilter("$regex");
};

export const applyKeys = (keys, elements) => {
  if (isEmpty(keys)) return elements;
  const fields = filter(k => Boolean(keys[k]), rkeys(keys));
  const mappedElements = uniq(map(e => pick(fields, e), elements));
  
  return mappedElements;
};
