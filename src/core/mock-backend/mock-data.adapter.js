import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import UrlPattern from "url-pattern";
import {always} from "ramda";

import {defaultMockDelay} from "./mock-backend-config.constants";

export const createBackendAdapter = () => {
  const key = always("mock_data_service_1");
  const availableModes = always(["MOCK", "REAL"]);
  const defaultMode = always("MOCK");
  let mode = localStorage.getItem(key()) || defaultMode();
  let keys = null;

  return () => ({
    setMode (newMode, reload) {
      mode = availableModes().includes(newMode) ? newMode : defaultMode();
      localStorage.setItem(key(), mode);
      if (reload) {
        window.location.reload();
      }
    },
    getMode () {
      return mode;
    },
    isMock () {
      return mode === "MOCK";
    },
    initGlobalMethods () {
      window.setMockMode = () => {
        this.setMode("MOCK", true);
      };
      window.setRealMode = () => {
        this.setMode("REAL", true);
      };

      return this;
    },
    initConfig (urls) {
      keys = Object.keys(urls).map(key => ({
        "path": key,
        "pattern": new UrlPattern(key),
        "mock": urls[key]
      }));

      return this;
    },
    initAdapter () {
      if (this.isMock()) {
        (adapter => {
          adapter.onAny().reply(req => {
            const entity = keys.find(option => option.pattern.match(req.url));
            if (entity) {
              return [200, entity.mock().getData(req.params)];
            }

            return [404, {}];
          });
        })(new MockAdapter(axios, {"delayResponse": defaultMockDelay}));
      }

      return this;
    }
  });
};
