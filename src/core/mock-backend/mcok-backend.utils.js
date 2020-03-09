import { Maybe } from 'ramda-fantasy';
import { path } from 'ramda';

export const getConfigUrls = config => {
    const map = Object.keys(config);
    const urls = {};

    map.forEach(type => {
        const urlList = Object.keys(config[type]);
        urlList.forEach(url => urls[`${type}/${url}`] = config[type][url]);
    });

    return urls;
}

export const createMap = options => {
    const map = new Map();
    Object.keys(options).forEach(key => map.set(key, options[key]));

    return map;
};

export const createTableData = ({ elements, pagesize, page }) => {
    const offset = (page - 1) * pagesize;
    const offsetElements = elements.slice(offset, offset + Number(pagesize));

    return {
        totalPages: Math.ceil(elements.length / pagesize),
        totalElements: elements.length,
        elements: offsetElements,
        page,
        pagesize
    };
}

export const getPageNumber = (params, defaultValue = 1) => {
    return Maybe(params).chain(() => {
        return Maybe(Number(path(['page'], params)) || null)
    }).getOrElse(defaultValue);
}

export const getPageSize = (params, defaultValue = 10) => {
    return Maybe(params).chain(() => {
        return Maybe(Number(path(['pagesize'], params)) || null)
    }).getOrElse(defaultValue);
}
