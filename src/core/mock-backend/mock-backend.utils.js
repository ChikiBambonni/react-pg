import { Maybe } from "ramda-fantasy";
import {
  path,
  isEmpty,
  pick,
  uniq,
  last,
  filter,
  map,
  includes,
  keys as rkeys,
  dropLast,
  compose,
  curry
} from "ramda";

import { NaNtoNull } from "@core/utils";

export const getConfigUrls = config => {
  const map = Object.keys(config);
  const urls = {};

  map.forEach(type => {
    const urlList = Object.keys(config[type]);
    urlList.forEach(url => urls[`${type}/${url}`] = config[type][url]);
  });

  return urls;
};

export const createTableData = ({ elements, pagesize, page, keys, filter }) => {
  const data = compose(
    curry(applyPaging)(page, pagesize),
    curry(applyKeys)(keys),
    curry(applyFilter)(filter)
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
  
  const parseFilter = (filterKeys, data) => {
    const key = last(filterKeys);
    if (!key) return data;

    switch (key) {
    case "$regex": {
      const $regex = f[key];
      const regexKeys = rkeys($regex);

      const parseKeys = (keys, items) => {
        const k = last(keys);
        if (!k) return items;
        return parseKeys(
          dropLast(1, keys), 
          filter(item => item[k].match($regex[k]), items)
        );
      };
      
      return parseFilter(dropLast(filterKeys), parseKeys(regexKeys, data));
    }
    case "$not": {
      const $not = f[key];
      const notKeys = rkeys($not);

      const parseKeys = (keys, items) => {
        const k = last(keys);
        if (!k) return items;
        return parseKeys(
          dropLast(1, keys), 
          filter(item => !includes(item[k], $not[k]), items)
        );
      };

      return parseFilter(dropLast(filterKeys), parseKeys(notKeys, data));
    }
    default: {
      return data;
    }
    }
  };
  
  return parseFilter(rkeys(f), elements);
};

export const applyKeys = (keys, elements) => {
  if (isEmpty(keys)) return elements;
  const fields = filter(k => Boolean(keys[k]), rkeys(keys));
  const mappedElements = uniq(map(e => pick(fields, e), elements));
  
  return mappedElements;
};
