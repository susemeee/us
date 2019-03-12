
const UPBIT_KEY = '__upbit_preloaded_store__';

function inject() {
  const __register_to_window__ = (k, v) => window[k] = v;
  const __defineProperty__ = window.Object.defineProperty;

  // defined hooks
  const __hooks__ = {
    createStore: (e, t, a) => {
      const l = a.get();

      const __enhanced_l = function (e, t, n) {
        // store
        __register_to_window__(UPBIT_KEY, t);
        return l(e, t, n);
      };

      a.get = function () {
        return __enhanced_l;
      };
    },
    compose: (e, t, a) => {
      const compose = a.get();
      const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
      a.get = function () {
        return composeEnhancers;
      };
    },
  };

  // defineProperty hook
  Object.defineProperty = (e, t, a) => {
    __hooks__[t] && __hooks__[t](e, t, a);
    return __defineProperty__(e, t, a);
  };
};

inject();
console.log('ijtd');
