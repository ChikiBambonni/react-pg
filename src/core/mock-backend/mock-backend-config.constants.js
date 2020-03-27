import {getUsersMock} from "./mocks/users";
import {getCollectionMock} from "./mocks/collections";

export const UrlsConfig = {
  "api": {
    "users": getUsersMock(),
    "collections": getCollectionMock()
  }
};

export const defaultMockDelay = 400;
