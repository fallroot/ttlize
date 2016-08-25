# TTLize

This is a JavaScript library for timeout based memoization. It uses my another library [SandStorage](https://github.com/fallroot/sandstorage) for supporting Web Storage. It also detects Promises.

## Usage

```
ttlize(fn, [ttl=0], [options={}]);
```

Creates a function that memoizes the result of fn. It memoizes result during the ttl value. After ttl is passed, fn is executed and memoizes result again. You can save the memoized result to Web Storage for using in multiple pages.

### Parameters

- `fn`(*Function*): The function to ttlize.
- `[ttl=0]`(*Integer*): The number of milliseconds to maintain memoization.
- `[options={}]`(*Object*): The options object.
- `[options.type]`(*String*): 'localStorage' or 'SessionStorage'.
- `[options.key]`(*String*): The name of key using for Web Storage.

### Returns

Returns the new ttlized function. If `fn` is Promises object then returns `then()` call.

```
ttlize($.ajax, 1000)().then(...);
```

## LICENSE

MIT
