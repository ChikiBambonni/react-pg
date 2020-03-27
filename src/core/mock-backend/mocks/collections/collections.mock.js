import {COLLECTIONS_MOCK_DATA} from "./collections.constants";

export const getCollectionMock = () => () => ({
  getData() {
    return {
      "elements": COLLECTIONS_MOCK_DATA
    };
  }
});
