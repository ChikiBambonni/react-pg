import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import * as UrlPattern from 'url-pattern';

export class MockBackendAdapter {

    adapter;
    option;
    keys;
    
    key = () => 'mock_data_service_1';
    mode = 'MOCK';
    defaultMode = 'MOCK';

    constructor () {
        this.setMode(localStorage.getItem(this.key()) || this.defaultMode);
    }

    initConfig(configUrl) {
        const options = configUrl.getConfig();
    
        this.keys = Object.keys(options).map(key => ({
            path: key,
            pattern: new UrlPattern(key),
            mock: options[key]
        }));
    
        this.options = configUrl.createMap(options);

        return this;
    }

    initGlobalMethods() {
        window.setMockMode = () => {
          this.setMode('MOCK', true);
        };
    
        window.setRealMode = () => {
          this.setMode('REAL', true);
        };

        return this;
    }

    initAdapter() {
        if (this.isMock()) {
            this.adapter = new MockAdapter(axios).onAny().reply(req => {
                const entity = this.keys.find(option => option.pattern.match(req.url));
                if (entity) {
                    return [200, entity.mock.getData(req.params)];
                }
                
                return [404, {}];
            });
        }

        return this;
    }

    setMode(mode, reload) {
        this.mode = mode;
        this.changeMode(mode, reload);
    }

    getMode() {
        return this.mode;
    }
    
    
    isMock() {
        return this.mode === 'MOCK';
    }
    
    changeMode(mode, reload) {
        localStorage.setItem(this.key(), mode);
    
        if (reload) {
            window.location.reload();
        }
    }
}
