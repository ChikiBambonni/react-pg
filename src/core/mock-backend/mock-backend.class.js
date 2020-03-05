export class MockBackend {

  getElements() {
    return this.items;
  }

  getTableData(params) {
    const pagesize = this.getPageSize(params.pagesize);
    const page = this.getPageNumber(params.page);

    const elements = this.getElements(params);
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

  getPageNumber(pageNumber, defaultValue = 1) {
    return Number.isInteger(Number(pageNumber)) ? pageNumber : defaultValue;
  }

  getPageSize(pageSize, defaultValue = 10) {
    return Number.isInteger(Number(pageSize)) ? pageSize : defaultValue;
  }
}
