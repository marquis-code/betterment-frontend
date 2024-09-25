globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import 'file:///Users/marquis.abah/bettermentFrontend/node_modules/node-fetch-native/dist/polyfill.mjs';
import { defineEventHandler, handleCacheHeaders, isEvent, createEvent, getRequestHeader, splitCookiesString, eventHandler, setHeaders, sendRedirect, proxyRequest, setResponseStatus, setResponseHeader, send, getRequestHeaders, removeResponseHeader, createError, getResponseHeader, createApp, createRouter as createRouter$1, toNodeListener, fetchWithEvent, lazyEventHandler } from 'file:///Users/marquis.abah/bettermentFrontend/node_modules/h3/dist/index.mjs';
import { createFetch as createFetch$1, Headers as Headers$1 } from 'file:///Users/marquis.abah/bettermentFrontend/node_modules/ofetch/dist/node.mjs';
import destr from 'file:///Users/marquis.abah/bettermentFrontend/node_modules/destr/dist/index.mjs';
import { createCall, createFetch } from 'file:///Users/marquis.abah/bettermentFrontend/node_modules/unenv/runtime/fetch/index.mjs';
import { createHooks } from 'file:///Users/marquis.abah/bettermentFrontend/node_modules/hookable/dist/index.mjs';
import { snakeCase } from 'file:///Users/marquis.abah/bettermentFrontend/node_modules/scule/dist/index.mjs';
import { klona } from 'file:///Users/marquis.abah/bettermentFrontend/node_modules/klona/dist/index.mjs';
import defu, { defuFn } from 'file:///Users/marquis.abah/bettermentFrontend/node_modules/defu/dist/defu.mjs';
import { hash } from 'file:///Users/marquis.abah/bettermentFrontend/node_modules/ohash/dist/index.mjs';
import { parseURL, withoutBase, joinURL, getQuery, withQuery, decodePath, withLeadingSlash, withoutTrailingSlash } from 'file:///Users/marquis.abah/bettermentFrontend/node_modules/ufo/dist/index.mjs';
import { createStorage, prefixStorage } from 'file:///Users/marquis.abah/bettermentFrontend/node_modules/unstorage/dist/index.mjs';
import unstorage_47drivers_47fs from 'file:///Users/marquis.abah/bettermentFrontend/node_modules/unstorage/drivers/fs.mjs';
import unstorage_47drivers_47memory from 'file:///Users/marquis.abah/bettermentFrontend/node_modules/unstorage/drivers/memory.mjs';
import unstorage_47drivers_47lru_45cache from 'file:///Users/marquis.abah/bettermentFrontend/node_modules/unstorage/drivers/lru-cache.mjs';
import unstorage_47drivers_47fs_45lite from 'file:///Users/marquis.abah/bettermentFrontend/node_modules/unstorage/drivers/fs-lite.mjs';
import { toRouteMatcher, createRouter } from 'file:///Users/marquis.abah/bettermentFrontend/node_modules/radix3/dist/index.mjs';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'file:///Users/marquis.abah/bettermentFrontend/node_modules/pathe/dist/index.mjs';

const inlineAppConfig = {};



const appConfig = defuFn(inlineAppConfig);

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/_nuxt/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      }
    }
  },
  "public": {}
};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
const _sharedRuntimeConfig = _deepFreeze(
  _applyEnv(klona(_inlineRuntimeConfig))
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  _applyEnv(runtimeConfig);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
_deepFreeze(klona(appConfig));
function _getEnv(key) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function _applyEnv(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = _getEnv(subKey);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      _applyEnv(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
  return obj;
}
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

const serverAssets = [{"baseName":"server","dir":"/Users/marquis.abah/bettermentFrontend/server/assets"}];

const assets$1 = createStorage();

for (const asset of serverAssets) {
  assets$1.mount(asset.baseName, unstorage_47drivers_47fs({ base: asset.dir }));
}

const storage = createStorage({});

storage.mount('/assets', assets$1);

storage.mount('internal:nuxt:prerender', unstorage_47drivers_47memory({"driver":"memory"}));
storage.mount('internal:nuxt:prerender:island', unstorage_47drivers_47lru_45cache({"driver":"lruCache","max":1000}));
storage.mount('internal:nuxt:prerender:payload', unstorage_47drivers_47lru_45cache({"driver":"lruCache","max":1000}));
storage.mount('data', unstorage_47drivers_47fs_45lite({"driver":"fsLite","base":"/Users/marquis.abah/bettermentFrontend/.data/kv"}));
storage.mount('root', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/Users/marquis.abah/bettermentFrontend","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('src', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/Users/marquis.abah/bettermentFrontend/server","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('build', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/Users/marquis.abah/bettermentFrontend/.nuxt","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('cache', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/Users/marquis.abah/bettermentFrontend/.nuxt/cache","ignore":["**/node_modules/**","**/.git/**"]}));

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = hash([opts.integrity, fn, opts]);
  const validate = opts.validate || (() => true);
  async function get(key, resolver, shouldInvalidateCache, event) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || !validate(entry);
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry)) {
          const promise = useStorage().setItem(cacheKey, entry).catch((error) => {
            useNitroApp().captureError(error, { event, tags: ["cache"] });
          });
          if (event && event.waitUntil) {
            event.waitUntil(promise);
          }
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (expired && event && event.waitUntil) {
      event.waitUntil(_resolvePromise);
    }
    if (opts.swr && entry.value) {
      _resolvePromise.catch((error) => {
        useNitroApp().captureError(error, { event, tags: ["cache"] });
      });
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = opts.shouldInvalidateCache?.(...args);
    const entry = await get(
      key,
      () => fn(...args),
      shouldInvalidateCache,
      args[0] && isEvent(args[0]) ? args[0] : void 0
    );
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return String(key).replace(/\W/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const variableHeaderNames = (opts.varies || []).filter(Boolean).map((h) => h.toLowerCase()).sort();
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const customKey = await opts.getKey?.(event);
      if (customKey) {
        return escapeKey(customKey);
      }
      const _path = event.node.req.originalUrl || event.node.req.url || event.path;
      const _pathname = escapeKey(decodeURI(parseURL(_path).pathname)).slice(0, 16) || "index";
      const _hashedPath = `${_pathname}.${hash(_path)}`;
      const _headers = variableHeaderNames.map((header) => [header, event.node.req.headers[header]]).map(([name, value]) => `${escapeKey(name)}.${hash(value)}`);
      return [_hashedPath, ..._headers].join(":");
    },
    validate: (entry) => {
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: [opts.integrity, handler]
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const variableHeaders = {};
      for (const header of variableHeaderNames) {
        variableHeaders[header] = incomingEvent.node.req.headers[header];
      }
      const reqProxy = cloneWithProxy(incomingEvent.node.req, {
        headers: variableHeaders
      });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.context = incomingEvent.context;
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = headers.Etag || headers.etag || `W/"${hash(body)}"`;
      headers["last-modified"] = headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString();
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      event.node.res.setHeader(name, response.headers[name]);
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}
function _captureError(error, type) {
  console.error(`[nitro] [${type}]`, error);
  useNitroApp().captureError(error, { tags: [type] });
}
function trapUnhandledNodeErrors() {
  process.on(
    "unhandledRejection",
    (error) => _captureError(error, "unhandledRejection")
  );
  process.on(
    "uncaughtException",
    (error) => _captureError(error, "uncaughtException")
  );
}
function joinHeaders(value) {
  return Array.isArray(value) ? value.join(", ") : String(value);
}
function normalizeFetchResponse(response) {
  if (!response.headers.has("set-cookie")) {
    return response;
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: normalizeCookieHeaders(response.headers)
  });
}
function normalizeCookieHeader(header = "") {
  return splitCookiesString(joinHeaders(header));
}
function normalizeCookieHeaders(headers) {
  const outgoingHeaders = new Headers();
  for (const [name, header] of headers) {
    if (name === "set-cookie") {
      for (const cookie of normalizeCookieHeader(header)) {
        outgoingHeaders.append("set-cookie", cookie);
      }
    } else {
      outgoingHeaders.set(name, joinHeaders(header));
    }
  }
  return outgoingHeaders;
}

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler(ctx) {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      return sendRedirect(
        event,
        routeRules.redirect.to,
        routeRules.redirect.statusCode
      );
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: ctx.localFetch,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(event.path.split("?")[0], useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const plugins = [
  
];

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.path,
    statusCode,
    statusMessage,
    message,
    stack: "",
    data: error.data
  };
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (event.handled) {
    return;
  }
  setResponseStatus(event, errorObject.statusCode !== 200 && errorObject.statusCode || 500, errorObject.statusMessage);
  if (isJsonRequest(event)) {
    setResponseHeader(event, "Content-Type", "application/json");
    return send(event, JSON.stringify(errorObject));
  }
  const isErrorPage = event.path.startsWith("/__nuxt_error");
  const res = !isErrorPage ? await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig().app.baseURL, "/__nuxt_error"), errorObject), {
    headers: getRequestHeaders(event),
    redirect: "manual"
  }).catch(() => null) : null;
  if (!res) {
    const { template } = await import('../error-500.mjs');
    if (event.handled) {
      return;
    }
    setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
    return send(event, template(errorObject));
  }
  const html = await res.text();
  if (event.handled) {
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  setResponseStatus(event, res.status && res.status !== 200 ? res.status : void 0, res.statusText);
  return send(event, html);
});

const assets = {
  "/_redirects": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"12-GYFUR20kqoZbjqZ/p+Wm4vWBkkQ\"",
    "mtime": "2024-09-22T21:49:45.155Z",
    "size": 18,
    "path": "../../.output/public/_redirects"
  },
  "/customerLocation.svg": {
    "type": "image/svg+xml",
    "etag": "\"37a-EedDvfdoUxra81HZUQjSGeDNBXw\"",
    "mtime": "2024-09-22T21:49:45.155Z",
    "size": 890,
    "path": "../../.output/public/customerLocation.svg"
  },
  "/customersBg.svg": {
    "type": "image/svg+xml",
    "etag": "\"16f4-odqtz7Ohd/PJvMNrrebYiQ3yLUM\"",
    "mtime": "2024-09-22T21:49:45.156Z",
    "size": 5876,
    "path": "../../.output/public/customersBg.svg"
  },
  "/errander.svg": {
    "type": "image/svg+xml",
    "etag": "\"2104-2qkAV1uk9ixCz9d7Jlg6rDGcssg\"",
    "mtime": "2024-09-22T21:49:45.156Z",
    "size": 8452,
    "path": "../../.output/public/errander.svg"
  },
  "/erranderLocation.svg": {
    "type": "image/svg+xml",
    "etag": "\"85c-udmmbnqH8skQ3zVlna0VrdbavyA\"",
    "mtime": "2024-09-22T21:49:45.156Z",
    "size": 2140,
    "path": "../../.output/public/erranderLocation.svg"
  },
  "/heroBg.svg": {
    "type": "image/svg+xml",
    "etag": "\"64a-xgI3xZjznAshj72nf2UdtWh3/AI\"",
    "mtime": "2024-09-22T21:49:45.156Z",
    "size": 1610,
    "path": "../../.output/public/heroBg.svg"
  },
  "/marketplaceBg.svg": {
    "type": "image/svg+xml",
    "etag": "\"181a-1WD+OaO/1G7Zkaixb2bXwRVU7Ss\"",
    "mtime": "2024-09-22T21:49:45.157Z",
    "size": 6170,
    "path": "../../.output/public/marketplaceBg.svg"
  },
  "/notifyBg.svg": {
    "type": "image/svg+xml",
    "etag": "\"16ea-wWcyUqc8e/Bm0xKecUO6BIcBFZM\"",
    "mtime": "2024-09-22T21:49:45.157Z",
    "size": 5866,
    "path": "../../.output/public/notifyBg.svg"
  },
  "/_nuxt/401Kroadmap.61139285.png": {
    "type": "image/png",
    "etag": "\"6e8a0-jl8V5Kwqv5ttf34UNCiqrDRFGo8\"",
    "mtime": "2024-09-22T21:49:45.107Z",
    "size": 452768,
    "path": "../../.output/public/_nuxt/401Kroadmap.61139285.png"
  },
  "/_nuxt/AwardBankrate.c77b0a01.png": {
    "type": "image/png",
    "etag": "\"2912-lvZ0lnR6+Z69S9BX6yBSrpIZXVI\"",
    "mtime": "2024-09-22T21:49:45.109Z",
    "size": 10514,
    "path": "../../.output/public/_nuxt/AwardBankrate.c77b0a01.png"
  },
  "/_nuxt/AwardFebruarybankrate.14378e63.png": {
    "type": "image/png",
    "etag": "\"374b-1+CI2bOagO5NSkHWVrG2lO2lJN0\"",
    "mtime": "2024-09-22T21:49:45.108Z",
    "size": 14155,
    "path": "../../.output/public/_nuxt/AwardFebruarybankrate.14378e63.png"
  },
  "/_nuxt/AwardStore.b5d98508.png": {
    "type": "image/png",
    "etag": "\"2841-zM3FXYPRgjTJZMol/gfdmDEi8vw\"",
    "mtime": "2024-09-22T21:49:45.109Z",
    "size": 10305,
    "path": "../../.output/public/_nuxt/AwardStore.b5d98508.png"
  },
  "/_nuxt/BettermentatWorkDashboard.b9787eee.png": {
    "type": "image/png",
    "etag": "\"13c1a-8ZZnEcYKItdhLwuxGfOEOgCMHZk\"",
    "mtime": "2024-09-22T21:49:45.109Z",
    "size": 80922,
    "path": "../../.output/public/_nuxt/BettermentatWorkDashboard.b9787eee.png"
  },
  "/_nuxt/Bettermentposibilities.ffe7675f.png": {
    "type": "image/png",
    "etag": "\"bd16-bMUHJK2oJ41suvkjg1moDGBMq3w\"",
    "mtime": "2024-09-22T21:49:45.109Z",
    "size": 48406,
    "path": "../../.output/public/_nuxt/Bettermentposibilities.ffe7675f.png"
  },
  "/_nuxt/Compliancehub.9084db87.png": {
    "type": "image/png",
    "etag": "\"29200-Uzkp9NjFfPmAk4rHAgGqygpiL38\"",
    "mtime": "2024-09-22T21:49:45.111Z",
    "size": 168448,
    "path": "../../.output/public/_nuxt/Compliancehub.9084db87.png"
  },
  "/_nuxt/EmailInput.vue.3dd72147.js": {
    "type": "application/javascript",
    "etag": "\"739-HKa7wHZZh2iQFxq3eVo04RSTVpM\"",
    "mtime": "2024-09-22T21:49:45.109Z",
    "size": 1849,
    "path": "../../.output/public/_nuxt/EmailInput.vue.3dd72147.js"
  },
  "/_nuxt/IRA-flowers.2e681fad.webp": {
    "type": "image/webp",
    "etag": "\"42d8-7NAWRcTpjueHYrdKjNX1gfieq4o\"",
    "mtime": "2024-09-22T21:49:45.110Z",
    "size": 17112,
    "path": "../../.output/public/_nuxt/IRA-flowers.2e681fad.webp"
  },
  "/_nuxt/IRAs.b81d2889.png": {
    "type": "image/png",
    "etag": "\"377b-frdq/Qyxti8tdfDvFO3q7SiymnI\"",
    "mtime": "2024-09-22T21:49:45.110Z",
    "size": 14203,
    "path": "../../.output/public/_nuxt/IRAs.b81d2889.png"
  },
  "/_nuxt/Modal.vue.dcbdccdf.js": {
    "type": "application/javascript",
    "etag": "\"1a1-me6EZh5aJPo7BxSe3A6F+wzbX8I\"",
    "mtime": "2024-09-22T21:49:45.110Z",
    "size": 417,
    "path": "../../.output/public/_nuxt/Modal.vue.dcbdccdf.js"
  },
  "/_nuxt/Portfolio-showcase.a618b3e2.png": {
    "type": "image/png",
    "etag": "\"47f6-umb/oK1HmX+hRnkAienUZrWsu60\"",
    "mtime": "2024-09-22T21:49:45.111Z",
    "size": 18422,
    "path": "../../.output/public/_nuxt/Portfolio-showcase.a618b3e2.png"
  },
  "/_nuxt/UpdateCryptoWalletModal.f09a6c48.js": {
    "type": "application/javascript",
    "etag": "\"d76-rI8Df70j3VJMQM20YqReZ9GR1lU\"",
    "mtime": "2024-09-22T21:49:45.112Z",
    "size": 3446,
    "path": "../../.output/public/_nuxt/UpdateCryptoWalletModal.f09a6c48.js"
  },
  "/_nuxt/_id_.0f230477.js": {
    "type": "application/javascript",
    "etag": "\"1a89-NP6qTwvvzPegjgyibbCUH+mVwTo\"",
    "mtime": "2024-09-22T21:49:45.111Z",
    "size": 6793,
    "path": "../../.output/public/_nuxt/_id_.0f230477.js"
  },
  "/_nuxt/_id_.4a3455bc.js": {
    "type": "application/javascript",
    "etag": "\"12fe-27rG4qBiaI20SLiQa016w+94S50\"",
    "mtime": "2024-09-22T21:49:45.111Z",
    "size": 4862,
    "path": "../../.output/public/_nuxt/_id_.4a3455bc.js"
  },
  "/_nuxt/_id_.4b6d3c05.js": {
    "type": "application/javascript",
    "etag": "\"1289-awlg/74U3xZz+KhNEfqeSJ35hzs\"",
    "mtime": "2024-09-22T21:49:45.112Z",
    "size": 4745,
    "path": "../../.output/public/_nuxt/_id_.4b6d3c05.js"
  },
  "/_nuxt/_id_.720312e0.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"6f-QziCPgZMc5MrUjeKCpI9KDklksE\"",
    "mtime": "2024-09-22T21:49:45.114Z",
    "size": 111,
    "path": "../../.output/public/_nuxt/_id_.720312e0.css"
  },
  "/_nuxt/admin-dashboard.48677e84.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"50-4hopPTI13KM45wLGCXj0FZHmbNY\"",
    "mtime": "2024-09-22T21:49:45.112Z",
    "size": 80,
    "path": "../../.output/public/_nuxt/admin-dashboard.48677e84.css"
  },
  "/_nuxt/admin-dashboard.7ac594be.js": {
    "type": "application/javascript",
    "etag": "\"2a85-yZbVPSWzvMltmNHZxGe096O72Lw\"",
    "mtime": "2024-09-22T21:49:45.113Z",
    "size": 10885,
    "path": "../../.output/public/_nuxt/admin-dashboard.7ac594be.js"
  },
  "/_nuxt/adminAuth.263131b2.js": {
    "type": "application/javascript",
    "etag": "\"da-yTO8zyedgKOhE3TZHCjwf/INgvM\"",
    "mtime": "2024-09-22T21:49:45.112Z",
    "size": 218,
    "path": "../../.output/public/_nuxt/adminAuth.263131b2.js"
  },
  "/_nuxt/advisor-hero.d4d56bac.png": {
    "type": "image/png",
    "etag": "\"e330-X7I+aXZmg+F7AbaHIEDqN9PQclw\"",
    "mtime": "2024-09-22T21:49:45.114Z",
    "size": 58160,
    "path": "../../.output/public/_nuxt/advisor-hero.d4d56bac.png"
  },
  "/_nuxt/advisor.c4f36500.js": {
    "type": "application/javascript",
    "etag": "\"43c0-IDDS1zWro5Td9ZGkPtD+xCwcmHs\"",
    "mtime": "2024-09-22T21:49:45.113Z",
    "size": 17344,
    "path": "../../.output/public/_nuxt/advisor.c4f36500.js"
  },
  "/_nuxt/airplane.047e33d5.svg": {
    "type": "image/svg+xml",
    "etag": "\"7fd-ooJ+h4n6ZYoru2GrVVt4aiWbM0Y\"",
    "mtime": "2024-09-22T21:49:45.113Z",
    "size": 2045,
    "path": "../../.output/public/_nuxt/airplane.047e33d5.svg"
  },
  "/_nuxt/animated-bg.c8272cef.svg": {
    "type": "image/svg+xml",
    "etag": "\"c31-kXzaaBXkgXbEjnu6BYigIbydt78\"",
    "mtime": "2024-09-22T21:49:45.114Z",
    "size": 3121,
    "path": "../../.output/public/_nuxt/animated-bg.c8272cef.svg"
  },
  "/_nuxt/assets.b5a832d5.js": {
    "type": "application/javascript",
    "etag": "\"898c-4XZw4gZ3W03gW43mL9zUi5dBACU\"",
    "mtime": "2024-09-22T21:49:45.115Z",
    "size": 35212,
    "path": "../../.output/public/_nuxt/assets.b5a832d5.js"
  },
  "/_nuxt/auth-with-logo-only.f98adb1c.js": {
    "type": "application/javascript",
    "etag": "\"255-8Mggcv1A12T67qjAXPiWF2NTABw\"",
    "mtime": "2024-09-22T21:49:45.114Z",
    "size": 597,
    "path": "../../.output/public/_nuxt/auth-with-logo-only.f98adb1c.js"
  },
  "/_nuxt/auth.a6afc460.js": {
    "type": "application/javascript",
    "etag": "\"cb-mGMOzCcn4qP3arE7DZFT+2VGHhE\"",
    "mtime": "2024-09-22T21:49:45.114Z",
    "size": 203,
    "path": "../../.output/public/_nuxt/auth.a6afc460.js"
  },
  "/_nuxt/auth.c2d87acb.js": {
    "type": "application/javascript",
    "etag": "\"b4-nE2XIxNgLJfBwexAqdNL7BOeE9k\"",
    "mtime": "2024-09-22T21:49:45.121Z",
    "size": 180,
    "path": "../../.output/public/_nuxt/auth.c2d87acb.js"
  },
  "/_nuxt/bank-withdrawal.6d04d1af.svg": {
    "type": "image/svg+xml",
    "etag": "\"4b7a-yQ3+89FFpy5STN46LovniYYfZRo\"",
    "mtime": "2024-09-22T21:49:45.115Z",
    "size": 19322,
    "path": "../../.output/public/_nuxt/bank-withdrawal.6d04d1af.svg"
  },
  "/_nuxt/betterment-advisor.08febe65.js": {
    "type": "application/javascript",
    "etag": "\"792-W2M/DetuFHgxs8xG5efNmpbMoZA\"",
    "mtime": "2024-09-22T21:49:45.115Z",
    "size": 1938,
    "path": "../../.output/public/_nuxt/betterment-advisor.08febe65.js"
  },
  "/_nuxt/betterment-advisor.a724aeb4.png": {
    "type": "image/png",
    "etag": "\"6d49-51UaJ2DME663N9ghEWi054a8UKU\"",
    "mtime": "2024-09-22T21:49:45.115Z",
    "size": 27977,
    "path": "../../.output/public/_nuxt/betterment-advisor.a724aeb4.png"
  },
  "/_nuxt/betterment-advisor.a938156d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"4a-uJfJT2ayMs5KPdb58hZtiaidxJI\"",
    "mtime": "2024-09-22T21:49:45.115Z",
    "size": 74,
    "path": "../../.output/public/_nuxt/betterment-advisor.a938156d.css"
  },
  "/_nuxt/betterment-work.4eb16491.js": {
    "type": "application/javascript",
    "etag": "\"117-elvP/Ksrp/Aacj6aM1NUQyuVCx4\"",
    "mtime": "2024-09-22T21:49:45.115Z",
    "size": 279,
    "path": "../../.output/public/_nuxt/betterment-work.4eb16491.js"
  },
  "/_nuxt/betterment-work.9f9e4d7d.png": {
    "type": "image/png",
    "etag": "\"6897-EV53DpGajhDbd6Tc7KA+2gx+i/U\"",
    "mtime": "2024-09-22T21:49:45.116Z",
    "size": 26775,
    "path": "../../.output/public/_nuxt/betterment-work.9f9e4d7d.png"
  },
  "/_nuxt/btc.fc600df9.png": {
    "type": "image/png",
    "etag": "\"156ea-8uPHJCHboUq8PT5fR1J6iHGEWoU\"",
    "mtime": "2024-09-22T21:49:45.117Z",
    "size": 87786,
    "path": "../../.output/public/_nuxt/btc.fc600df9.png"
  },
  "/_nuxt/buildademo.b7639c76.png": {
    "type": "image/png",
    "etag": "\"4520-JAK1WkujjH1fOqNxYKWb70I4dBg\"",
    "mtime": "2024-09-22T21:49:45.116Z",
    "size": 17696,
    "path": "../../.output/public/_nuxt/buildademo.b7639c76.png"
  },
  "/_nuxt/card.6deb3a6d.gif": {
    "type": "image/gif",
    "etag": "\"52121-R1YFe0Bf/xmwgK2B3Or6Ly00VT4\"",
    "mtime": "2024-09-22T21:49:45.120Z",
    "size": 336161,
    "path": "../../.output/public/_nuxt/card.6deb3a6d.gif"
  },
  "/_nuxt/client-only.6df68d00.js": {
    "type": "application/javascript",
    "etag": "\"1d4-K2zAGnm0WYv9hRLXN04JtyK3O2o\"",
    "mtime": "2024-09-22T21:49:45.117Z",
    "size": 468,
    "path": "../../.output/public/_nuxt/client-only.6df68d00.js"
  },
  "/_nuxt/coloured-avatar.54c4a67b.js": {
    "type": "application/javascript",
    "etag": "\"74-pn449bOkxlDoqDIvC8ti5kxotgU\"",
    "mtime": "2024-09-22T21:49:45.117Z",
    "size": 116,
    "path": "../../.output/public/_nuxt/coloured-avatar.54c4a67b.js"
  },
  "/_nuxt/coloured-avatar.b1fd2142.svg": {
    "type": "image/svg+xml",
    "etag": "\"126d-2FupGs6L5zovNhkj0vMRAebU+nA\"",
    "mtime": "2024-09-22T21:49:45.118Z",
    "size": 4717,
    "path": "../../.output/public/_nuxt/coloured-avatar.b1fd2142.svg"
  },
  "/_nuxt/core-climate-impact-portfolios.87733c47.png": {
    "type": "image/png",
    "etag": "\"521a-WIceLCTaf3qrYdIeQvW5um2UOXk\"",
    "mtime": "2024-09-22T21:49:45.118Z",
    "size": 21018,
    "path": "../../.output/public/_nuxt/core-climate-impact-portfolios.87733c47.png"
  },
  "/_nuxt/dash1.248c8699.png": {
    "type": "image/png",
    "etag": "\"3b38e-k4PpWPbpRITOmLY9gRErP0k5DDg\"",
    "mtime": "2024-09-22T21:49:45.120Z",
    "size": 242574,
    "path": "../../.output/public/_nuxt/dash1.248c8699.png"
  },
  "/_nuxt/dash2.2d555967.png": {
    "type": "image/png",
    "etag": "\"32bcf-s7bfDlBq2CPTpGXmyjUsO6y2F00\"",
    "mtime": "2024-09-22T21:49:45.120Z",
    "size": 207823,
    "path": "../../.output/public/_nuxt/dash2.2d555967.png"
  },
  "/_nuxt/dash3.2f9e3c5b.js": {
    "type": "application/javascript",
    "etag": "\"c5b-X8lyfgEztCuoYNx8LatHGrwIjZ8\"",
    "mtime": "2024-09-22T21:49:45.119Z",
    "size": 3163,
    "path": "../../.output/public/_nuxt/dash3.2f9e3c5b.js"
  },
  "/_nuxt/dash3.42bdf8db.png": {
    "type": "image/png",
    "etag": "\"35ea3-BbubdK5dgBkswPZTXP7XqkUjaPY\"",
    "mtime": "2024-09-22T21:49:45.121Z",
    "size": 220835,
    "path": "../../.output/public/_nuxt/dash3.42bdf8db.png"
  },
  "/_nuxt/dash4.5be71f80.png": {
    "type": "image/png",
    "etag": "\"2c80a-bsxPBzbXFvKC+HyU2wPXV4N7RuU\"",
    "mtime": "2024-09-22T21:49:45.122Z",
    "size": 182282,
    "path": "../../.output/public/_nuxt/dash4.5be71f80.png"
  },
  "/_nuxt/dash5.7e20bc2c.png": {
    "type": "image/png",
    "etag": "\"47aba-XrZtMOcQJsZOrNnF4/BCHm0WedE\"",
    "mtime": "2024-09-22T21:49:45.123Z",
    "size": 293562,
    "path": "../../.output/public/_nuxt/dash5.7e20bc2c.png"
  },
  "/_nuxt/dashboard.1b317eb6.svg": {
    "type": "image/svg+xml",
    "etag": "\"190-w3vpugLmNsT13b1nIhEC1FSDACI\"",
    "mtime": "2024-09-22T21:49:45.121Z",
    "size": 400,
    "path": "../../.output/public/_nuxt/dashboard.1b317eb6.svg"
  },
  "/_nuxt/dashboard.b72bb924.js": {
    "type": "application/javascript",
    "etag": "\"6e-M7J1q9RQmHtt4dG/WagkSaBDP44\"",
    "mtime": "2024-09-22T21:49:45.122Z",
    "size": 110,
    "path": "../../.output/public/_nuxt/dashboard.b72bb924.js"
  },
  "/_nuxt/dashboard.c005291e.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"50-OflzpJ2AYAnyDXLBhf2k658F39c\"",
    "mtime": "2024-09-22T21:49:45.122Z",
    "size": 80,
    "path": "../../.output/public/_nuxt/dashboard.c005291e.css"
  },
  "/_nuxt/dashboard.e1f70a1c.js": {
    "type": "application/javascript",
    "etag": "\"2aab-oJM3rzS+qflgERKMrxPHI8KRutw\"",
    "mtime": "2024-09-22T21:49:45.124Z",
    "size": 10923,
    "path": "../../.output/public/_nuxt/dashboard.e1f70a1c.js"
  },
  "/_nuxt/default.e284ab8c.js": {
    "type": "application/javascript",
    "etag": "\"607-uXzQja30/5fJtXVblNqhgfa0XWw\"",
    "mtime": "2024-09-22T21:49:45.122Z",
    "size": 1543,
    "path": "../../.output/public/_nuxt/default.e284ab8c.js"
  },
  "/_nuxt/ecommerce-logo.75a7d003.svg": {
    "type": "image/svg+xml",
    "etag": "\"ca1-0gGYgAE/kzicbtkchy3TRUQCunI\"",
    "mtime": "2024-09-22T21:49:45.123Z",
    "size": 3233,
    "path": "../../.output/public/_nuxt/ecommerce-logo.75a7d003.svg"
  },
  "/_nuxt/education.04d3c398.svg": {
    "type": "image/svg+xml",
    "etag": "\"16c1-ljIS3IaNkgmXMdOmR7cxWLko0Wo\"",
    "mtime": "2024-09-22T21:49:45.123Z",
    "size": 5825,
    "path": "../../.output/public/_nuxt/education.04d3c398.svg"
  },
  "/_nuxt/empty-cart.ad8b4952.svg": {
    "type": "image/svg+xml",
    "etag": "\"236-ssZ0O1BHyVUpKDOcavJ4a0aQWHM\"",
    "mtime": "2024-09-22T21:49:45.123Z",
    "size": 566,
    "path": "../../.output/public/_nuxt/empty-cart.ad8b4952.svg"
  },
  "/_nuxt/entry.50b5a30e.js": {
    "type": "application/javascript",
    "etag": "\"b236c-c3oysVd0c4crQxKsmtDqUHNybBI\"",
    "mtime": "2024-09-22T21:49:45.128Z",
    "size": 729964,
    "path": "../../.output/public/_nuxt/entry.50b5a30e.js"
  },
  "/_nuxt/entry.7acc5c9c.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"145e6-xkC8XkCl8VZtfoWsbgK976xtEn0\"",
    "mtime": "2024-09-22T21:49:45.124Z",
    "size": 83430,
    "path": "../../.output/public/_nuxt/entry.7acc5c9c.css"
  },
  "/_nuxt/error-404.3ec47aea.js": {
    "type": "application/javascript",
    "etag": "\"8f5-Yq/bZhvw3GTNvt27QeK2tQQ5Z+Y\"",
    "mtime": "2024-09-22T21:49:45.124Z",
    "size": 2293,
    "path": "../../.output/public/_nuxt/error-404.3ec47aea.js"
  },
  "/_nuxt/error-404.95c28eb4.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e70-L8dF9pJCW0qi7de8Az4GyBoTHvI\"",
    "mtime": "2024-09-22T21:49:45.124Z",
    "size": 3696,
    "path": "../../.output/public/_nuxt/error-404.95c28eb4.css"
  },
  "/_nuxt/error-500.187a618d.js": {
    "type": "application/javascript",
    "etag": "\"77e-c+VULh9KowoOzQjggQkTB9PhV3U\"",
    "mtime": "2024-09-22T21:49:45.125Z",
    "size": 1918,
    "path": "../../.output/public/_nuxt/error-500.187a618d.js"
  },
  "/_nuxt/error-500.e798523c.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"7e0-QP983DB9m1oiDr87r1V1AYEhrfo\"",
    "mtime": "2024-09-22T21:49:45.125Z",
    "size": 2016,
    "path": "../../.output/public/_nuxt/error-500.e798523c.css"
  },
  "/_nuxt/eth.7af0cf14.png": {
    "type": "image/png",
    "etag": "\"27343-P0Fc116KdVoDKuFqNAbEHcwtZno\"",
    "mtime": "2024-09-22T21:49:45.126Z",
    "size": 160579,
    "path": "../../.output/public/_nuxt/eth.7af0cf14.png"
  },
  "/_nuxt/eye-close.1f2eabd6.js": {
    "type": "application/javascript",
    "etag": "\"b0-m4wFVxNb0ML6/XyRRJGHiPNqGfY\"",
    "mtime": "2024-09-22T21:49:45.125Z",
    "size": 176,
    "path": "../../.output/public/_nuxt/eye-close.1f2eabd6.js"
  },
  "/_nuxt/eye-close.5b70a48a.svg": {
    "type": "image/svg+xml",
    "etag": "\"334-ZzF2dxZ6RH5Q0Xe2c1Egn1Q+rwE\"",
    "mtime": "2024-09-22T21:49:45.125Z",
    "size": 820,
    "path": "../../.output/public/_nuxt/eye-close.5b70a48a.svg"
  },
  "/_nuxt/eye-open.0980a840.svg": {
    "type": "image/svg+xml",
    "etag": "\"11d-ISD5VNQbzxOHfUnSwn3I6Sic8i4\"",
    "mtime": "2024-09-22T21:49:45.125Z",
    "size": 285,
    "path": "../../.output/public/_nuxt/eye-open.0980a840.svg"
  },
  "/_nuxt/fetchUsers.a25c6c30.js": {
    "type": "application/javascript",
    "etag": "\"3af-XM0f8JZU29Brk3LiTAXpw6obKQY\"",
    "mtime": "2024-09-22T21:49:45.126Z",
    "size": 943,
    "path": "../../.output/public/_nuxt/fetchUsers.a25c6c30.js"
  },
  "/_nuxt/forgot-password-success.1c928d17.js": {
    "type": "application/javascript",
    "etag": "\"2be-LGj/CysgACOkEM99SxjcEPKZbDo\"",
    "mtime": "2024-09-22T21:49:45.126Z",
    "size": 702,
    "path": "../../.output/public/_nuxt/forgot-password-success.1c928d17.js"
  },
  "/_nuxt/forgot.3f72bcf5.js": {
    "type": "application/javascript",
    "etag": "\"896-BU2nDInEU/wUbuVbZq5cywAiWYY\"",
    "mtime": "2024-09-22T21:49:45.126Z",
    "size": 2198,
    "path": "../../.output/public/_nuxt/forgot.3f72bcf5.js"
  },
  "/_nuxt/hero.14a63283.png": {
    "type": "image/png",
    "etag": "\"74918-Z3D/LyQxsKnwlvGj8VCY9R8LBBU\"",
    "mtime": "2024-09-22T21:49:45.129Z",
    "size": 477464,
    "path": "../../.output/public/_nuxt/hero.14a63283.png"
  },
  "/_nuxt/hero2.d535cbe0.png": {
    "type": "image/png",
    "etag": "\"33e98-8UAun4lXmgCVQiySmuGPkGjgw80\"",
    "mtime": "2024-09-22T21:49:45.128Z",
    "size": 212632,
    "path": "../../.output/public/_nuxt/hero2.d535cbe0.png"
  },
  "/_nuxt/hero3.3114ec35.png": {
    "type": "image/png",
    "etag": "\"33e3c-yOCHzOHydaWzIHRESvCWWIBAjxA\"",
    "mtime": "2024-09-22T21:49:45.128Z",
    "size": 212540,
    "path": "../../.output/public/_nuxt/hero3.3114ec35.png"
  },
  "/_nuxt/home.a62d191b.svg": {
    "type": "image/svg+xml",
    "etag": "\"8cb0-EdiDQX/rshYFzBFstO5GIIsMyW4\"",
    "mtime": "2024-09-22T21:49:45.128Z",
    "size": 36016,
    "path": "../../.output/public/_nuxt/home.a62d191b.svg"
  },
  "/_nuxt/img placeholder-1.ca4b6db1.png": {
    "type": "image/png",
    "etag": "\"42c6-CYecvkzozc3DEs2lKsEbKzLeKYE\"",
    "mtime": "2024-09-22T21:49:45.129Z",
    "size": 17094,
    "path": "../../.output/public/_nuxt/img placeholder-1.ca4b6db1.png"
  },
  "/_nuxt/index.0284c8c5.js": {
    "type": "application/javascript",
    "etag": "\"119d-9G8HR33wKnQx6SA46wZ/bmh0pEQ\"",
    "mtime": "2024-09-22T21:49:45.129Z",
    "size": 4509,
    "path": "../../.output/public/_nuxt/index.0284c8c5.js"
  },
  "/_nuxt/index.0c5afeb9.js": {
    "type": "application/javascript",
    "etag": "\"ca5-daMx1kfpLsuT0cOGQt5otHyx/6c\"",
    "mtime": "2024-09-22T21:49:45.129Z",
    "size": 3237,
    "path": "../../.output/public/_nuxt/index.0c5afeb9.js"
  },
  "/_nuxt/index.1ba99b9e.js": {
    "type": "application/javascript",
    "etag": "\"2b91-PGahy2MfSN8CnH/2WQGKtHQPyH4\"",
    "mtime": "2024-09-22T21:49:45.129Z",
    "size": 11153,
    "path": "../../.output/public/_nuxt/index.1ba99b9e.js"
  },
  "/_nuxt/index.2d42d87b.js": {
    "type": "application/javascript",
    "etag": "\"18ca-CUjKSDqYQpP7b7lVfFM6UqyJkKY\"",
    "mtime": "2024-09-22T21:49:45.130Z",
    "size": 6346,
    "path": "../../.output/public/_nuxt/index.2d42d87b.js"
  },
  "/_nuxt/index.38699f99.js": {
    "type": "application/javascript",
    "etag": "\"90c3-OY1l9i9QnTKGzL+Ww0UGV46VhvU\"",
    "mtime": "2024-09-22T21:49:45.130Z",
    "size": 37059,
    "path": "../../.output/public/_nuxt/index.38699f99.js"
  },
  "/_nuxt/index.6409441e.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"82-ZGdGDcB3E3Hs+5dQeIBuRMrc9rU\"",
    "mtime": "2024-09-22T21:49:45.130Z",
    "size": 130,
    "path": "../../.output/public/_nuxt/index.6409441e.css"
  },
  "/_nuxt/index.69cf40be.js": {
    "type": "application/javascript",
    "etag": "\"e0c-wZe7kc5ek6fUzcP0pb+BJh10DLE\"",
    "mtime": "2024-09-22T21:49:45.130Z",
    "size": 3596,
    "path": "../../.output/public/_nuxt/index.69cf40be.js"
  },
  "/_nuxt/index.6f957872.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"90-Y/rxttpjEc4//fPGdI6VXLLP5WA\"",
    "mtime": "2024-09-22T21:49:45.130Z",
    "size": 144,
    "path": "../../.output/public/_nuxt/index.6f957872.css"
  },
  "/_nuxt/index.7b2c3e74.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"244-Yv8TxAghbutThrwV9cyTrJNnfr8\"",
    "mtime": "2024-09-22T21:49:45.130Z",
    "size": 580,
    "path": "../../.output/public/_nuxt/index.7b2c3e74.css"
  },
  "/_nuxt/index.8471e208.js": {
    "type": "application/javascript",
    "etag": "\"3ad6-aehFn8njGmzh0xTm2TlbfCVHFtA\"",
    "mtime": "2024-09-22T21:49:45.131Z",
    "size": 15062,
    "path": "../../.output/public/_nuxt/index.8471e208.js"
  },
  "/_nuxt/index.93611a4a.js": {
    "type": "application/javascript",
    "etag": "\"130e-XkqnZBbd27byUxupiKhD6qKeAWA\"",
    "mtime": "2024-09-22T21:49:45.131Z",
    "size": 4878,
    "path": "../../.output/public/_nuxt/index.93611a4a.js"
  },
  "/_nuxt/index.989b1f10.js": {
    "type": "application/javascript",
    "etag": "\"dd2-nOTJI0m0/P84zqMOvm6W8gNB0Uw\"",
    "mtime": "2024-09-22T21:49:45.131Z",
    "size": 3538,
    "path": "../../.output/public/_nuxt/index.989b1f10.js"
  },
  "/_nuxt/index.99087bc1.js": {
    "type": "application/javascript",
    "etag": "\"248c-uM7jYSY6HEcVV/9QbYOpm8LQKVg\"",
    "mtime": "2024-09-22T21:49:45.131Z",
    "size": 9356,
    "path": "../../.output/public/_nuxt/index.99087bc1.js"
  },
  "/_nuxt/index.9e02ac04.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"278-zHr6e3wIaKEjTqPZdXGJZOzcQXI\"",
    "mtime": "2024-09-22T21:49:45.131Z",
    "size": 632,
    "path": "../../.output/public/_nuxt/index.9e02ac04.css"
  },
  "/_nuxt/index.b93d90a6.js": {
    "type": "application/javascript",
    "etag": "\"e06-WmWo5GS/V/q3dhF4Kt1d/X5J0mw\"",
    "mtime": "2024-09-22T21:49:45.131Z",
    "size": 3590,
    "path": "../../.output/public/_nuxt/index.b93d90a6.js"
  },
  "/_nuxt/index.d4120e40.js": {
    "type": "application/javascript",
    "etag": "\"c79-LcJ15uPS8tmR/dRG/aqodb6v/DM\"",
    "mtime": "2024-09-22T21:49:45.132Z",
    "size": 3193,
    "path": "../../.output/public/_nuxt/index.d4120e40.js"
  },
  "/_nuxt/index.d5177e96.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"244-bOqIeBnTCz7ujPnKMaKgMqF+KbU\"",
    "mtime": "2024-09-22T21:49:45.132Z",
    "size": 580,
    "path": "../../.output/public/_nuxt/index.d5177e96.css"
  },
  "/_nuxt/index.e7c6be09.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"244-7jJKYVn/vg8h7aNopfLlnt38T0c\"",
    "mtime": "2024-09-22T21:49:45.132Z",
    "size": 580,
    "path": "../../.output/public/_nuxt/index.e7c6be09.css"
  },
  "/_nuxt/index.ec3de89d.js": {
    "type": "application/javascript",
    "etag": "\"3f91-s0UyFT26hXIyHZ8vSnftYcp2ztE\"",
    "mtime": "2024-09-22T21:49:45.132Z",
    "size": 16273,
    "path": "../../.output/public/_nuxt/index.ec3de89d.js"
  },
  "/_nuxt/index.ffc80249.js": {
    "type": "application/javascript",
    "etag": "\"c97-RUQLoORXSbaHMX0ZJkpeOv2a0d8\"",
    "mtime": "2024-09-22T21:49:45.132Z",
    "size": 3223,
    "path": "../../.output/public/_nuxt/index.ffc80249.js"
  },
  "/_nuxt/investing.d95cf2f0.js": {
    "type": "application/javascript",
    "etag": "\"81-bUXlKmvmoG64KWMibU+tqZg19x8\"",
    "mtime": "2024-09-22T21:49:45.132Z",
    "size": 129,
    "path": "../../.output/public/_nuxt/investing.d95cf2f0.js"
  },
  "/_nuxt/investment-bg-animation.78faddee.svg": {
    "type": "image/svg+xml",
    "etag": "\"b06-2k/4nnhkP6sgnqJicID8yjxuzEg\"",
    "mtime": "2024-09-22T21:49:45.133Z",
    "size": 2822,
    "path": "../../.output/public/_nuxt/investment-bg-animation.78faddee.svg"
  },
  "/_nuxt/investment-flow.d7abc98e.svg": {
    "type": "image/svg+xml",
    "etag": "\"5d9ec-Qp1lgERzHE3QqGipLMx6G5KjdJw\"",
    "mtime": "2024-09-22T21:49:45.135Z",
    "size": 383468,
    "path": "../../.output/public/_nuxt/investment-flow.d7abc98e.svg"
  },
  "/_nuxt/investment-review.b1f48552.png": {
    "type": "image/png",
    "etag": "\"634f-U7Xmu1PxpDS8vu+gwF+ml4w6/SA\"",
    "mtime": "2024-09-22T21:49:45.133Z",
    "size": 25423,
    "path": "../../.output/public/_nuxt/investment-review.b1f48552.png"
  },
  "/_nuxt/investmentportfolios.0f76441b.png": {
    "type": "image/png",
    "etag": "\"69e4d-zUh6M4C4LN8da9sBR6xKKGsHQyw\"",
    "mtime": "2024-09-22T21:49:45.136Z",
    "size": 433741,
    "path": "../../.output/public/_nuxt/investmentportfolios.0f76441b.png"
  },
  "/_nuxt/landmark.825b3715.js": {
    "type": "application/javascript",
    "etag": "\"6d-ad60MAcXwvUW9bmUF5862NUQg94\"",
    "mtime": "2024-09-22T21:49:45.133Z",
    "size": 109,
    "path": "../../.output/public/_nuxt/landmark.825b3715.js"
  },
  "/_nuxt/landmark.f7ddfa6f.svg": {
    "type": "image/svg+xml",
    "etag": "\"1821-I0woyi38O8bjg8VsXs6DLJmwEz8\"",
    "mtime": "2024-09-22T21:49:45.133Z",
    "size": 6177,
    "path": "../../.output/public/_nuxt/landmark.f7ddfa6f.svg"
  },
  "/_nuxt/login.cf70a7b6.js": {
    "type": "application/javascript",
    "etag": "\"96d-eNkw99X4L5jajY5KwS87LOPQ4+A\"",
    "mtime": "2024-09-22T21:49:45.134Z",
    "size": 2413,
    "path": "../../.output/public/_nuxt/login.cf70a7b6.js"
  },
  "/_nuxt/logo-buyside-btmgrey90.e578404a.png": {
    "type": "image/png",
    "etag": "\"13d6-2JLQEYWwgng6wrxxr3BmxVnn1qE\"",
    "mtime": "2024-09-22T21:49:45.134Z",
    "size": 5078,
    "path": "../../.output/public/_nuxt/logo-buyside-btmgrey90.e578404a.png"
  },
  "/_nuxt/logo-investopedia-btmgrey50.0d7cb365.png": {
    "type": "image/png",
    "etag": "\"1366-SOrQHPHxjd+9CgZX8yJM0AzciNo\"",
    "mtime": "2024-09-22T21:49:45.134Z",
    "size": 4966,
    "path": "../../.output/public/_nuxt/logo-investopedia-btmgrey50.0d7cb365.png"
  },
  "/_nuxt/logo-updated.38049566.png": {
    "type": "image/png",
    "etag": "\"2fb5-AAH4oo3SJjuXzIWGOE98AY3Ky2U\"",
    "mtime": "2024-09-22T21:49:45.135Z",
    "size": 12213,
    "path": "../../.output/public/_nuxt/logo-updated.38049566.png"
  },
  "/_nuxt/logo.331fa35b.js": {
    "type": "application/javascript",
    "etag": "\"69-nJrbWwrR5ipP1eq4AzdBS0y6xgI\"",
    "mtime": "2024-09-22T21:49:45.134Z",
    "size": 105,
    "path": "../../.output/public/_nuxt/logo.331fa35b.js"
  },
  "/_nuxt/logo.efdae7ca.png": {
    "type": "image/png",
    "etag": "\"730e-hQ3IM841ztDTUv4gDT7u3hBwOKg\"",
    "mtime": "2024-09-22T21:49:45.135Z",
    "size": 29454,
    "path": "../../.output/public/_nuxt/logo.efdae7ca.png"
  },
  "/_nuxt/logos-white.3c4a356d.png": {
    "type": "image/png",
    "etag": "\"44dc-q+pQaxcJix4OUlj8ivrX9+q69ac\"",
    "mtime": "2024-09-22T21:49:45.136Z",
    "size": 17628,
    "path": "../../.output/public/_nuxt/logos-white.3c4a356d.png"
  },
  "/_nuxt/mobile-app.0574db20.svg": {
    "type": "image/svg+xml",
    "etag": "\"7ba2d-49P3BE3nxqGk5EZJhp15nMz2RUw\"",
    "mtime": "2024-09-22T21:49:45.139Z",
    "size": 506413,
    "path": "../../.output/public/_nuxt/mobile-app.0574db20.svg"
  },
  "/_nuxt/nerds.89bfc44c.png": {
    "type": "image/png",
    "etag": "\"177b-OnDobekAw1cTVtZ9HVxQM570KAE\"",
    "mtime": "2024-09-22T21:49:45.136Z",
    "size": 6011,
    "path": "../../.output/public/_nuxt/nerds.89bfc44c.png"
  },
  "/_nuxt/new-withdrawal.4cbe06c4.js": {
    "type": "application/javascript",
    "etag": "\"b6c-qeFEb00GQEFmDBydRKV9ypi5zqQ\"",
    "mtime": "2024-09-22T21:49:45.136Z",
    "size": 2924,
    "path": "../../.output/public/_nuxt/new-withdrawal.4cbe06c4.js"
  },
  "/_nuxt/notifications.b74dcf64.js": {
    "type": "application/javascript",
    "etag": "\"77d-AqTWOGixPLX5momlbN9EeZFliJg\"",
    "mtime": "2024-09-22T21:49:45.136Z",
    "size": 1917,
    "path": "../../.output/public/_nuxt/notifications.b74dcf64.js"
  },
  "/_nuxt/notifications.d445ebfe.js": {
    "type": "application/javascript",
    "etag": "\"77d-yepdO1LhckxVoPlPiQx66JT8Oj0\"",
    "mtime": "2024-09-22T21:49:45.137Z",
    "size": 1917,
    "path": "../../.output/public/_nuxt/notifications.d445ebfe.js"
  },
  "/_nuxt/nuxt-link.124555a3.js": {
    "type": "application/javascript",
    "etag": "\"10fc-U/4IW/9l+Pa8f2r5b/qbGAsvbxw\"",
    "mtime": "2024-09-22T21:49:45.137Z",
    "size": 4348,
    "path": "../../.output/public/_nuxt/nuxt-link.124555a3.js"
  },
  "/_nuxt/onboardingdashboard.83930930.png": {
    "type": "image/png",
    "etag": "\"30efd-kXR/Zd6xmKQX77X7R6jZhlNxdgk\"",
    "mtime": "2024-09-22T21:49:45.138Z",
    "size": 200445,
    "path": "../../.output/public/_nuxt/onboardingdashboard.83930930.png"
  },
  "/_nuxt/party-popper-icon (1).db943bdd.svg": {
    "type": "image/svg+xml",
    "etag": "\"cb2-RQb6syzKb+mdU/Q1AWPQ1TW796A\"",
    "mtime": "2024-09-22T21:49:45.137Z",
    "size": 3250,
    "path": "../../.output/public/_nuxt/party-popper-icon (1).db943bdd.svg"
  },
  "/_nuxt/phonedashboard.bccb24d0.webp": {
    "type": "image/webp",
    "etag": "\"5ea6-nbSiuUBH+NCG6AB6hKf3OZahfsA\"",
    "mtime": "2024-09-22T21:49:45.137Z",
    "size": 24230,
    "path": "../../.output/public/_nuxt/phonedashboard.bccb24d0.webp"
  },
  "/_nuxt/plan1.62301a98.png": {
    "type": "image/png",
    "etag": "\"14ef8-GTRQtZft2/Zz+y3P+v5TYTPi39o\"",
    "mtime": "2024-09-22T21:49:45.138Z",
    "size": 85752,
    "path": "../../.output/public/_nuxt/plan1.62301a98.png"
  },
  "/_nuxt/plan2.79cf312a.png": {
    "type": "image/png",
    "etag": "\"126b0-o725lqvdaJRDrnZWoYVf/8ETlMU\"",
    "mtime": "2024-09-22T21:49:45.138Z",
    "size": 75440,
    "path": "../../.output/public/_nuxt/plan2.79cf312a.png"
  },
  "/_nuxt/plan3.320f1d97.png": {
    "type": "image/png",
    "etag": "\"10d98-jL+SJNaLtcCkFMR9eHCATdIO5Xg\"",
    "mtime": "2024-09-22T21:49:45.139Z",
    "size": 69016,
    "path": "../../.output/public/_nuxt/plan3.320f1d97.png"
  },
  "/_nuxt/profile.82c68e10.js": {
    "type": "application/javascript",
    "etag": "\"488-q86r9Yg+j1YAiM8xLoLaqUBDWuU\"",
    "mtime": "2024-09-22T21:49:45.139Z",
    "size": 1160,
    "path": "../../.output/public/_nuxt/profile.82c68e10.js"
  },
  "/_nuxt/profile.8b4613bf.js": {
    "type": "application/javascript",
    "etag": "\"936-GFpfGmvwLo6UQD76fXPv3uWxgd4\"",
    "mtime": "2024-09-22T21:49:45.139Z",
    "size": 2358,
    "path": "../../.output/public/_nuxt/profile.8b4613bf.js"
  },
  "/_nuxt/profile.986432c8.js": {
    "type": "application/javascript",
    "etag": "\"15ff-CKcGI49RnPP7SqrQTtvM+Ux3elc\"",
    "mtime": "2024-09-22T21:49:45.139Z",
    "size": 5631,
    "path": "../../.output/public/_nuxt/profile.986432c8.js"
  },
  "/_nuxt/profile.aedf1af2.png": {
    "type": "image/png",
    "etag": "\"609d5-rWf7CI9Thg/Q1wGTUODExXU3CCE\"",
    "mtime": "2024-09-22T21:49:45.143Z",
    "size": 395733,
    "path": "../../.output/public/_nuxt/profile.aedf1af2.png"
  },
  "/_nuxt/profile.b15ed474.js": {
    "type": "application/javascript",
    "etag": "\"111-0lYwTjR/qfiA4ano/8Tvx3glgIM\"",
    "mtime": "2024-09-22T21:49:45.140Z",
    "size": 273,
    "path": "../../.output/public/_nuxt/profile.b15ed474.js"
  },
  "/_nuxt/promo.e4f15cf6.jpg": {
    "type": "image/jpeg",
    "etag": "\"111f9-o97WNSiLgS5eg79uWtF0hUjv1dc\"",
    "mtime": "2024-09-22T21:49:45.140Z",
    "size": 70137,
    "path": "../../.output/public/_nuxt/promo.e4f15cf6.jpg"
  },
  "/_nuxt/red-heart-icon (1).1a0522e2.svg": {
    "type": "image/svg+xml",
    "etag": "\"396-Up75Est8AGrngWnIT+xpAEh9xBs\"",
    "mtime": "2024-09-22T21:49:45.142Z",
    "size": 918,
    "path": "../../.output/public/_nuxt/red-heart-icon (1).1a0522e2.svg"
  },
  "/_nuxt/referral.748f81e3.js": {
    "type": "application/javascript",
    "etag": "\"c25-4CueBBa04FApqwOpYfEX0RLPITk\"",
    "mtime": "2024-09-22T21:49:45.140Z",
    "size": 3109,
    "path": "../../.output/public/_nuxt/referral.748f81e3.js"
  },
  "/_nuxt/reset.e13a7863.js": {
    "type": "application/javascript",
    "etag": "\"aec-Shc9rU6b3eIBAlZj9SaCjV3/Vls\"",
    "mtime": "2024-09-22T21:49:45.140Z",
    "size": 2796,
    "path": "../../.output/public/_nuxt/reset.e13a7863.js"
  },
  "/_nuxt/resourcesBMT.f5620e9f.webp": {
    "type": "image/webp",
    "etag": "\"2e74-vN4gjUyeix2Ejv46be0bgy4me6o\"",
    "mtime": "2024-09-22T21:49:45.140Z",
    "size": 11892,
    "path": "../../.output/public/_nuxt/resourcesBMT.f5620e9f.webp"
  },
  "/_nuxt/robotgraphs.fd9c48fc.png": {
    "type": "image/png",
    "etag": "\"561f-pG5GqCXy5U+ePbp2EpWdGNysTo8\"",
    "mtime": "2024-09-22T21:49:45.141Z",
    "size": 22047,
    "path": "../../.output/public/_nuxt/robotgraphs.fd9c48fc.png"
  },
  "/_nuxt/safe-storage-icon (1).6414d73f.svg": {
    "type": "image/svg+xml",
    "etag": "\"407-nG2CggZzIUnlhCHlJtmy6ZOfoNc\"",
    "mtime": "2024-09-22T21:49:45.141Z",
    "size": 1031,
    "path": "../../.output/public/_nuxt/safe-storage-icon (1).6414d73f.svg"
  },
  "/_nuxt/search.c3614958.svg": {
    "type": "image/svg+xml",
    "etag": "\"2ed-0340IdOavJYl9zGwOYsfJTKvBb8\"",
    "mtime": "2024-09-22T21:49:45.140Z",
    "size": 749,
    "path": "../../.output/public/_nuxt/search.c3614958.svg"
  },
  "/_nuxt/section1.7ede1874.png": {
    "type": "image/png",
    "etag": "\"450cf-d4zeLjHbDkIlmBgZQtmKQz2NdeI\"",
    "mtime": "2024-09-22T21:49:45.146Z",
    "size": 282831,
    "path": "../../.output/public/_nuxt/section1.7ede1874.png"
  },
  "/_nuxt/secure.88149d74.svg": {
    "type": "image/svg+xml",
    "etag": "\"58e-k+YHy84tuQmThYzSQh3WEdmQZm0\"",
    "mtime": "2024-09-22T21:49:45.141Z",
    "size": 1422,
    "path": "../../.output/public/_nuxt/secure.88149d74.svg"
  },
  "/_nuxt/sponsor1.993957d2.png": {
    "type": "image/png",
    "etag": "\"1dca-7j/gh7Xv4Pxd2KSkgX+gHeTSQOA\"",
    "mtime": "2024-09-22T21:49:45.142Z",
    "size": 7626,
    "path": "../../.output/public/_nuxt/sponsor1.993957d2.png"
  },
  "/_nuxt/support.aadaf72b.js": {
    "type": "application/javascript",
    "etag": "\"546-7OvATIU7oOzTmXayXXGCpMW2Duc\"",
    "mtime": "2024-09-22T21:49:45.143Z",
    "size": 1350,
    "path": "../../.output/public/_nuxt/support.aadaf72b.js"
  },
  "/_nuxt/supports.0d815322.png": {
    "type": "image/png",
    "etag": "\"17f80-zcnN0B9aTMr56WA8QohOnsdGlu8\"",
    "mtime": "2024-09-22T21:49:45.145Z",
    "size": 98176,
    "path": "../../.output/public/_nuxt/supports.0d815322.png"
  },
  "/_nuxt/sweetalert2.all.fdb4cd9f.js": {
    "type": "application/javascript",
    "etag": "\"12ad5-OctRuV+WKDHPBFsjduB7EAeCMYE\"",
    "mtime": "2024-09-22T21:49:45.146Z",
    "size": 76501,
    "path": "../../.output/public/_nuxt/sweetalert2.all.fdb4cd9f.js"
  },
  "/_nuxt/trading-plans.0d88c655.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"244-c2l1PwY7ECbwtvWBAyDOL9vQnp4\"",
    "mtime": "2024-09-22T21:49:45.143Z",
    "size": 580,
    "path": "../../.output/public/_nuxt/trading-plans.0d88c655.css"
  },
  "/_nuxt/trading-plans.64ba47f8.js": {
    "type": "application/javascript",
    "etag": "\"1416-0J6gj3Wn49T+tJtJrp5OVHEEu2Q\"",
    "mtime": "2024-09-22T21:49:45.144Z",
    "size": 5142,
    "path": "../../.output/public/_nuxt/trading-plans.64ba47f8.js"
  },
  "/_nuxt/trading-plans.9b82754b.js": {
    "type": "application/javascript",
    "etag": "\"1413-JKTMvlDN8o3QGNqVSl+BeGawZGA\"",
    "mtime": "2024-09-22T21:49:45.144Z",
    "size": 5139,
    "path": "../../.output/public/_nuxt/trading-plans.9b82754b.js"
  },
  "/_nuxt/trading-plans.edfe7da4.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"244-FxjnpQnfSkl0KIor27XLvavl6Ss\"",
    "mtime": "2024-09-22T21:49:45.145Z",
    "size": 580,
    "path": "../../.output/public/_nuxt/trading-plans.edfe7da4.css"
  },
  "/_nuxt/two-people-laptops-connected.ca1c0b89.png": {
    "type": "image/png",
    "etag": "\"2d0a-V4hgLYSeCT4ScdmFJjNjbC9hJ1g\"",
    "mtime": "2024-09-22T21:49:45.146Z",
    "size": 11530,
    "path": "../../.output/public/_nuxt/two-people-laptops-connected.ca1c0b89.png"
  },
  "/_nuxt/updated-logos-payroll-integrations.9915070c.png": {
    "type": "image/png",
    "etag": "\"1ec3d-8gVOaJ0CiLwfkuorCuNPVQItL2Y\"",
    "mtime": "2024-09-22T21:49:45.146Z",
    "size": 126013,
    "path": "../../.output/public/_nuxt/updated-logos-payroll-integrations.9915070c.png"
  },
  "/_nuxt/usdt.2de63cb5.png": {
    "type": "image/png",
    "etag": "\"1102f-kNrIwR//+OCzRdEaVQScCI7/IWU\"",
    "mtime": "2024-09-22T21:49:45.147Z",
    "size": 69679,
    "path": "../../.output/public/_nuxt/usdt.2de63cb5.png"
  },
  "/_nuxt/useAdminInfo.05f9d30b.js": {
    "type": "application/javascript",
    "etag": "\"391-8hggEJfj4I/sFnZze8CXM+wd1Ik\"",
    "mtime": "2024-09-22T21:49:45.146Z",
    "size": 913,
    "path": "../../.output/public/_nuxt/useAdminInfo.05f9d30b.js"
  },
  "/_nuxt/useCurrency.2c762570.js": {
    "type": "application/javascript",
    "etag": "\"93-t0f49OFrMuOB2CxM0pjQdIvgoGI\"",
    "mtime": "2024-09-22T21:49:45.146Z",
    "size": 147,
    "path": "../../.output/public/_nuxt/useCurrency.2c762570.js"
  },
  "/_nuxt/useDateFormatter.459847c5.js": {
    "type": "application/javascript",
    "etag": "\"e8-H3KXPwEKbZRCS6oMDE72OkTEA6A\"",
    "mtime": "2024-09-22T21:49:45.147Z",
    "size": 232,
    "path": "../../.output/public/_nuxt/useDateFormatter.459847c5.js"
  },
  "/_nuxt/useGetUserTransactions.e347bde7.js": {
    "type": "application/javascript",
    "etag": "\"5fd-JsSLfK1NuBiLODOV+tnn44bcDoM\"",
    "mtime": "2024-09-22T21:49:45.147Z",
    "size": 1533,
    "path": "../../.output/public/_nuxt/useGetUserTransactions.e347bde7.js"
  },
  "/_nuxt/useLogin.6c0cc59b.js": {
    "type": "application/javascript",
    "etag": "\"4cb-Z/gPPzJF6sxFU37QwhF2JmctOpI\"",
    "mtime": "2024-09-22T21:49:45.147Z",
    "size": 1227,
    "path": "../../.output/public/_nuxt/useLogin.6c0cc59b.js"
  },
  "/_nuxt/useTransaction.c91e8401.js": {
    "type": "application/javascript",
    "etag": "\"488-0MsU+xbuSqcppWA5EM8LrKnngSg\"",
    "mtime": "2024-09-22T21:49:45.147Z",
    "size": 1160,
    "path": "../../.output/public/_nuxt/useTransaction.c91e8401.js"
  },
  "/_nuxt/useTransactionHistory.a2084b58.js": {
    "type": "application/javascript",
    "etag": "\"60b-9osp/7K1JSx5H/X8SPL6AeQGb+4\"",
    "mtime": "2024-09-22T21:49:45.147Z",
    "size": 1547,
    "path": "../../.output/public/_nuxt/useTransactionHistory.a2084b58.js"
  },
  "/_nuxt/useUpdateUser.98f5e58d.js": {
    "type": "application/javascript",
    "etag": "\"4df-MnYu+dNOGlWFMoP2S8uepnmflZA\"",
    "mtime": "2024-09-22T21:49:45.147Z",
    "size": 1247,
    "path": "../../.output/public/_nuxt/useUpdateUser.98f5e58d.js"
  },
  "/_nuxt/useUserInfo.58f74336.js": {
    "type": "application/javascript",
    "etag": "\"339-67UtJKtxjAjH/qc5gQvwUtLfCPk\"",
    "mtime": "2024-09-22T21:49:45.148Z",
    "size": 825,
    "path": "../../.output/public/_nuxt/useUserInfo.58f74336.js"
  },
  "/_nuxt/user.3a31c8fb.js": {
    "type": "application/javascript",
    "etag": "\"38c3-wLwMRUuO2Z/cqNKAmWoU03Ocjs8\"",
    "mtime": "2024-09-22T21:49:45.148Z",
    "size": 14531,
    "path": "../../.output/public/_nuxt/user.3a31c8fb.js"
  },
  "/_nuxt/verification-img.972a7f13.png": {
    "type": "image/png",
    "etag": "\"20953-1b/oMESFm+oarACire3vJdi/AzE\"",
    "mtime": "2024-09-22T21:49:45.149Z",
    "size": 133459,
    "path": "../../.output/public/_nuxt/verification-img.972a7f13.png"
  },
  "/_nuxt/videohowitworks.23b8b53a.png": {
    "type": "image/png",
    "etag": "\"ff7e-eR4GFnN5xLpH4YJYV5cyjJiVBwk\"",
    "mtime": "2024-09-22T21:49:45.149Z",
    "size": 65406,
    "path": "../../.output/public/_nuxt/videohowitworks.23b8b53a.png"
  },
  "/_nuxt/vue.f36acd1f.ca4cbce1.js": {
    "type": "application/javascript",
    "etag": "\"181-d0wrYLbLLyUznHUazb7sEG15D9Q\"",
    "mtime": "2024-09-22T21:49:45.148Z",
    "size": 385,
    "path": "../../.output/public/_nuxt/vue.f36acd1f.ca4cbce1.js"
  },
  "/_nuxt/wealth.0f5bb1b3.svg": {
    "type": "image/svg+xml",
    "etag": "\"251b-ehsn1+0ayrDBE79hbqIm3zy2aJ0\"",
    "mtime": "2024-09-22T21:49:45.148Z",
    "size": 9499,
    "path": "../../.output/public/_nuxt/wealth.0f5bb1b3.svg"
  },
  "/_nuxt/weeding-payment.e471ee13.svg": {
    "type": "image/svg+xml",
    "etag": "\"50fd-V4NYaDwBrPlzrUu9BPor2Yq6ZCY\"",
    "mtime": "2024-09-22T21:49:45.149Z",
    "size": 20733,
    "path": "../../.output/public/_nuxt/weeding-payment.e471ee13.svg"
  },
  "/_nuxt/work-hero-section.fc2ae878.png": {
    "type": "image/png",
    "etag": "\"3ab3a-7BgFJSuVoQqCNxIr873rALTCEe4\"",
    "mtime": "2024-09-22T21:49:45.150Z",
    "size": 240442,
    "path": "../../.output/public/_nuxt/work-hero-section.fc2ae878.png"
  },
  "/_nuxt/work.818becc1.js": {
    "type": "application/javascript",
    "etag": "\"e43e-oT3uEOFhGbqEj9C9osTw1eOIvFo\"",
    "mtime": "2024-09-22T21:49:45.149Z",
    "size": 58430,
    "path": "../../.output/public/_nuxt/work.818becc1.js"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = {"/_nuxt":{"maxAge":31536000}};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _f4b49z = eventHandler((event) => {
  if (event.method && !METHODS.has(event.method)) {
    return;
  }
  let id = decodePath(
    withLeadingSlash(withoutTrailingSlash(parseURL(event.path).pathname))
  );
  let asset;
  const encodingHeader = String(
    getRequestHeader(event, "accept-encoding") || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    setResponseHeader(event, "Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      removeResponseHeader(event, "Cache-Control");
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = getRequestHeader(event, "if-none-match") === asset.etag;
  if (ifNotMatch) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  const ifModifiedSinceH = getRequestHeader(event, "if-modified-since");
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  if (asset.type && !getResponseHeader(event, "Content-Type")) {
    setResponseHeader(event, "Content-Type", asset.type);
  }
  if (asset.etag && !getResponseHeader(event, "ETag")) {
    setResponseHeader(event, "ETag", asset.etag);
  }
  if (asset.mtime && !getResponseHeader(event, "Last-Modified")) {
    setResponseHeader(event, "Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !getResponseHeader(event, "Content-Encoding")) {
    setResponseHeader(event, "Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !getResponseHeader(event, "Content-Length")) {
    setResponseHeader(event, "Content-Length", asset.size);
  }
  return readAsset(id);
});

const _lazy_Oey0aW = () => import('../renderer.mjs');

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/**', handler: _lazy_Oey0aW, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const captureError = (error, context = {}) => {
    const promise = hooks.callHookParallel("error", error, context).catch((_err) => {
      console.error("Error while capturing another error", _err);
    });
    if (context.event && isEvent(context.event)) {
      const errors = context.event.context.nitro?.errors;
      if (errors) {
        errors.push({ error, context });
      }
      if (context.event.waitUntil) {
        context.event.waitUntil(promise);
      }
    }
  };
  const h3App = createApp({
    debug: destr(false),
    onError: (error, event) => {
      captureError(error, { event, tags: ["request"] });
      return errorHandler(error, event);
    },
    onRequest: async (event) => {
      await nitroApp.hooks.callHook("request", event).catch((error) => {
        captureError(error, { event, tags: ["request"] });
      });
    },
    onBeforeResponse: async (event, response) => {
      await nitroApp.hooks.callHook("beforeResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    },
    onAfterResponse: async (event, response) => {
      await nitroApp.hooks.callHook("afterResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    }
  });
  const router = createRouter$1({
    preemptive: true
  });
  const localCall = createCall(toNodeListener(h3App));
  const _localFetch = createFetch(localCall, globalThis.fetch);
  const localFetch = (...args) => {
    return _localFetch(...args).then(
      (response) => normalizeFetchResponse(response)
    );
  };
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers: Headers$1,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(createRouteRulesHandler({ localFetch }));
  h3App.use(
    eventHandler((event) => {
      event.context.nitro = event.context.nitro || { errors: [] };
      const envContext = event.node.req?.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
      event.waitUntil = (promise) => {
        if (!event.context.nitro._waitUntilPromises) {
          event.context.nitro._waitUntilPromises = [];
        }
        event.context.nitro._waitUntilPromises.push(promise);
        if (envContext?.waitUntil) {
          envContext.waitUntil(promise);
        }
      };
      event.captureError = (error, context) => {
        captureError(error, { event, ...context });
      };
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch,
    captureError
  };
  for (const plugin of plugins) {
    try {
      plugin(app);
    } catch (err) {
      captureError(err, { tags: ["plugin"] });
      throw err;
    }
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const localFetch = nitroApp.localFetch;
trapUnhandledNodeErrors();

export { useRuntimeConfig as a, useStorage as b, getRouteRules as g, localFetch as l, useNitroApp as u };
//# sourceMappingURL=nitro-prerenderer.mjs.map
