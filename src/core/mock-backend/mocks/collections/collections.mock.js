import { COLLECTIONS_MOCK_DATA } from './collections.constants';

export const getCollectionMock = () => {
  return () => ({
    getData(params) {
        return ({
            elements: COLLECTIONS_MOCK_DATA,
        });
    }    
  });
};
