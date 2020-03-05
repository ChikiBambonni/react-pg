 
export class MockBackendUrl {
  
    constructor(config) {
        this.config = config;
    }

    getConfig() {
        const map = Object.keys(this.config);
        const urls = {};

        map.forEach(type => {
            const urlList = Object.keys(this.config[type]);
            urlList.forEach(url => urls[`${type}/${url}`] = this.config[type][url]);
        });

        return urls;
    }

    createMap(options) {
        const map = new Map();

        Object.keys(options).forEach(key => map.set(key, options[key]));

        return map;
    }
}