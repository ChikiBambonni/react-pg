import { getUsersMock } from "./mocks/users";
import { getCollectionMock } from "./mocks/collections";

export const UrlsConfig = {
  api: {
    "collections": getCollectionMock(),
    "database1/collection1": getUsersMock(), // TODO: define different mock data
    "database1/collection2": getUsersMock(),
    "database1/collection3": getUsersMock(),
    "database1/collection4": getUsersMock(),
    "database1/collection5": getUsersMock(),
    "database2/collection1": getUsersMock(),
    "database2/collection2": getUsersMock(),
    "database2/collection3": getUsersMock(),
    "database2/collection4": getUsersMock(),
    "database2/collection5": getUsersMock(),
    "database3/collection1": getUsersMock(),
    "database3/collection2": getUsersMock(),
    "database3/collection3": getUsersMock(),
    "database3/collection4": getUsersMock(),
    "database3/collection5": getUsersMock(),
  }
};

export const defaultMockDelay = 1000;
