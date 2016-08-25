import SandStorage from '../sandstorage/src/main';

function ttlize(fn, ttl = 0, options = {}) {
    const key = options.key;
    const type = options.type;

    let cache;
    let timestamp = 0;

    function getFromVariable() {
        const now = Date.now();

        if (!timestamp || now - timestamp > ttl) {
            cache = fn.apply(arguments);
            timestamp = now;
        }

        if (isPromise(result)) {
            return result.then(cache);
        } else {
            return cache;
        }
    }

    function getFromStorage() {
        if (key === undefined) {
            throw '"key" parameter is required.';
        }

        const now = Date.now();

        if (cache && timestamp && now - timestamp <= ttl) {
            return cache;
        }

        const data = SandStorage.getItem(key, {
            type: type
        });

        if (data === null) {
            const result = fn.apply(arguments);

            if (isPromise(result)) {
                return result.then(setter);
            } else {
                setter(result);
            }
        } else {
            ({cache, timestamp} = JSON.parse(data));
        }

        return cache;
    }

    function setter(result) {
        cache = result;
        timestamp = Date.now();

        const value = JSON.stringify({cache, timestamp});

        SandStorage.setItem(key, value, {
            type,
            to: timestamp + ttl
        });
    }

    const getter = type === 'localStorage' || type === 'sessionStorage' ? getFromStorage : getFromVariable;

    return function() {
        return getter(arguments);
    };
}

function isPromise(object) {
    return typeof object.then === 'function';
}

export default ttlize;
