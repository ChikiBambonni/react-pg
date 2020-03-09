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

export const getPageNumber = (pageNumber, defaultValue = 1) => {
    return Number.isInteger(Number(pageNumber)) ? pageNumber : defaultValue;
}

export const getPageSize = (pageSize, defaultValue = 10) => {
    return Number.isInteger(Number(pageSize)) ? pageSize : defaultValue;
}
