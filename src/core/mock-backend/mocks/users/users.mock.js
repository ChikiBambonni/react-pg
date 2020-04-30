import { USERS_MOCK_DATA } from "./users.constants";

import {
  createTableData,
  getPageNumber,
  getPageSize,
  getKeys,
  getFilter
} from "@core/mock-backend";

export const getUsersMock = () => () => ({
  getData (params) {
    return createTableData({
      "elements": USERS_MOCK_DATA,
      "page":     getPageNumber(params),
      "pagesize": getPageSize(params),
      "keys":     getKeys(params),
      "filter":   getFilter(params)
    });
  }
});
