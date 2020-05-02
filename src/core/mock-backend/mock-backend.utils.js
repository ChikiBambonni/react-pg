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
  const {
    offsetElements,
    totalElements
  } = compose(
    curry(applyPaging)(page, pagesize),
    curry(applyKeys)(keys),
    curry(applyFilter)(filter)
  )(elements);

  return {
    "totalPages": Math.ceil(offsetElements.length / pagesize),
    "totalElements": totalElements.length,
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

export const getFilter = (params, defaultValue = {}) => {
  return Maybe(path(["filter"], params)).getOrElse(defaultValue);
};

export const applyPaging = (page, pagesize, elements) => {
  const offset = (page - 1) * pagesize;
  const offsetElements = elements.slice(
    offset,
    offset + Number(pagesize)
  );

  return {
    offsetElements,
    totalElements: elements
  };
};

export const applyFilter = (f, elements) => {
  if (isEmpty(f)) return elements;
  
  const parseKeys = (keys, items, fn) => {
    const k = last(keys);
    if (!k) return items;
    return parseKeys(
      dropLast(1, keys), 
      filter(fn(k), items)
    );
  }

  const parseFilter = (filterKeys, data) => {
    const key = last(filterKeys);
    if (!key) return data;

    switch (key) {
    case "$regex": {      
      return parseFilter(
        dropLast(filterKeys), 
        parseKeys(
          rkeys(f[key]), 
          data, 
          k => item => item[k].match(f[key][k])
        )
      );
    }
    case "$not": {
      return parseFilter(
        dropLast(filterKeys),
        parseKeys(
          rkeys(f[key]),
          data,
          k => item => !includes(item[k], f[key][k])
        )
      );
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
