import { MockBackend } from '../mock-backend.class';
import { USERS_MOCK_DATA } from './users.constants';

export class UsersMocks extends MockBackend {

    items = USERS_MOCK_DATA;

    getData(params) {
        return this.items;
    }
}
