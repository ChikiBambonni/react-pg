import { USERS_MOCK_DATA } from './users.constants';

import { 
    getPageNumber,
    getPageSize,
    createTableData
} from '../mcok-backend.utils';

export const getUsersMock = () => {
    return () => ({
        getData(params) {
            return createTableData({
                elements: USERS_MOCK_DATA,
                page: getPageNumber(params),
                pagesize: getPageSize(params)
            });
        }    
    });
};
