import {Maybe} from "ramda-fantasy";
import {path} from "ramda";

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

export const createTableData = ({elements, pagesize, page}) => {
  const offset = (page - 1) * pagesize;
  const offsetElements = elements.slice(
    offset,
    offset + Number(pagesize)
  );

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
  return Maybe(NaNtoNull(Number(path(["pagesize"],params)))).getOrElse(defaultValue);
}
