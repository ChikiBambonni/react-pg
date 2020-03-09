import { USERS_MOCK_DATA } from './users.constants';

import { 
    getPageNumber,
    getPageSize,
    createTableData
} from '../mcok-backend.utils';

export const getUsersMock = () => {
    return () => ({
        getData(params) {
            const page = getPageNumber(params.page);
            const pagesize = getPageSize(params.pagesize);

            return createTableData({
                elements: USERS_MOCK_DATA,
                page,
                pagesize
            });
        }    
    });
};

