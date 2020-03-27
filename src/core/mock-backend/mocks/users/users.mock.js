import {USERS_MOCK_DATA} from "./users.constants";

import {
  createTableData,
  getPageNumber,
  getPageSize
} from "../../mock-backend.utils";

export const getUsersMock = () => () => ({
  getData (params) {
    return createTableData({
      "elements": USERS_MOCK_DATA,
      "page": getPageNumber(params),
      "pagesize": getPageSize(params)
    });
  }
});
