var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_stream = require("stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_runtime = require("react/jsx-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.RemixServer, { context: remixContext, url: request.url }),
      {
        onAllReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          didError = !0, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.RemixServer, { context: remixContext, url: request.url }),
      {
        onShellReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(err) {
          reject(err);
        },
        onError(error) {
          didError = !0, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.jsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react2 = require("@remix-run/react");

// app/styles/shared.css
var shared_default = "/build/_assets/shared-MGSUMOZ7.css";

// app/components/util/Error.jsx
var import_fa = require("react-icons/fa"), import_jsx_runtime2 = require("react/jsx-runtime");
function Error2({ title, children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "error", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_fa.FaExclamationCircle, {}) }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h2", { children: title }),
    children
  ] });
}
var Error_default = Error2;

// app/root.jsx
var import_jsx_runtime3 = require("react/jsx-runtime"), meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1"
});
function Document({ title, children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("title", { children: title }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react2.Meta, {}),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react2.Links, {})
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("body", { children: [
      children,
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react2.ScrollRestoration, {}),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react2.Scripts, {}),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react2.LiveReload, {})
    ] })
  ] });
}
function App() {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Document, { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react2.Outlet, {}) });
}
function CatchBoundary() {
  var _a;
  let caughtResponse = (0, import_react2.useCatch)();
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Document, { title: caughtResponse.statusText, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("main", { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(Error_default, { title: caughtResponse.statusText, children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { children: ((_a = caughtResponse.data) == null ? void 0 : _a.message) || "Something went wrong. Please try again later." }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("p", { children: [
      "Back to ",
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react2.Link, { to: "/", children: "safety" }),
      "."
    ] })
  ] }) }) });
}
function ErrorBoundary({ error }) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Document, { title: "An error occurred", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("main", { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(Error_default, { title: "An error occurred", children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { children: error.message || "Something went wrong. Please try again later." }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("p", { children: [
      "Back to ",
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react2.Link, { to: "/", children: "safety" }),
      "."
    ] })
  ] }) }) });
}
function links() {
  return [{ rel: "stylesheet", href: shared_default }];
}

// app/routes/expenses.raw.jsx
var expenses_raw_exports = {};
__export(expenses_raw_exports, {
  loader: () => loader
});

// app/data/auth.server.js
var import_bcryptjs = require("bcryptjs"), import_node2 = require("@remix-run/node");

// app/data/database.server.js
var import_client = require("@prisma/client"), prisma;
prisma = new import_client.PrismaClient(), prisma.$connect();

// app/data/auth.server.js
var SESSION_SECRET = process.env.SESSION_SECRET, sessionStorage = (0, import_node2.createCookieSessionStorage)({
  cookie: {
    secure: !0,
    secrets: [SESSION_SECRET],
    sameSite: "lax",
    maxAge: 30 * 24 * 60 * 60,
    // 30 days
    httpOnly: !0
  }
});
async function getUserFromSession(request) {
  let userId = (await sessionStorage.getSession(
    request.headers.get("Cookie")
  )).get("userId");
  return userId || null;
}
async function destroyUserSession(request) {
  let session = await sessionStorage.getSession(
    request.headers.get("Cookie")
  );
  return (0, import_node2.redirect)("/", {
    headers: {
      "Set-Cookie": await sessionStorage.destroySession(session)
    }
  });
}
async function requireUserSession(request) {
  let userId = await getUserFromSession(request);
  if (!userId)
    throw (0, import_node2.redirect)("/auth?mode=login");
  return userId;
}

// app/data/expenses.server.js
async function getExpenses(userId) {
  if (!userId)
    throw new Error("Failed to get expenses.");
  try {
    return await prisma.expense.findMany({
      where: { userId },
      orderBy: { date: "desc" }
    });
  } catch {
    throw new Error("Failed to get expenses.");
  }
}

// app/routes/expenses.raw.jsx
async function loader({ request }) {
  let userId = await requireUserSession(request);
  return getExpenses(userId);
}

// app/routes/__marketing/index.jsx
var marketing_exports = {};
__export(marketing_exports, {
  default: () => Index,
  meta: () => meta2
});
var import_react3 = require("@remix-run/react"), import_fa2 = require("react-icons/fa"), import_jsx_runtime4 = require("react/jsx-runtime");
function Index() {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("main", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("section", { className: "marketing-section", children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("header", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_fa2.FaDollarSign, {}),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h2", { children: "A Central Space" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "marketing-content", children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "marketing-image", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("img", { src: "images/expenses-management.jpg", alt: "A list of expenses." }) }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "marketing-explanation", children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { children: "Manage your expenses in one central place." }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_react3.Link, { className: "cta", to: "/expenses", children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { children: "Get Started" }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_fa2.FaArrowRight, {})
          ] }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("section", { className: "marketing-section", children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("header", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_fa2.FaChartBar, {}),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h2", { children: "Detailed Analytics" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "marketing-content", children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "marketing-explanation", children: "Benefit from best-in-class analytics to understand your spending patterns." }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "marketing-image", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("img", { src: "images/expenses-chart.jpg", alt: "A demo bar chart." }) })
      ] })
    ] })
  ] });
}
function meta2() {
}

// app/routes/logout.js
var logout_exports = {};
__export(logout_exports, {
  action: () => action
});
var import_node3 = require("@remix-run/node");
function action({ request }) {
  if (request.method !== "POST")
    throw (0, import_node3.json)({ message: "Invalid request method" }, { status: 400 });
  return destroyUserSession(request);
}

// app/routes/__app.jsx
var app_exports = {};
__export(app_exports, {
  default: () => ExpensesAppLayout,
  links: () => links2
});
var import_react6 = require("@remix-run/react");

// app/styles/expenses.css
var expenses_default = "/build/_assets/expenses-3JM5IXYW.css";

// app/components/navigation/ExpensesHeader.jsx
var import_react5 = require("@remix-run/react");

// app/components/util/Logo.jsx
var import_react4 = require("@remix-run/react"), import_jsx_runtime5 = require("react/jsx-runtime");
function Logo() {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h1", { id: "logo", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react4.Link, { to: "/", children: "RemixExpenses" }) });
}
var Logo_default = Logo;

// app/components/navigation/ExpensesHeader.jsx
var import_jsx_runtime6 = require("react/jsx-runtime");
function ExpensesHeader() {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("header", { id: "main-header", children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Logo_default, {}),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("nav", { id: "main-nav", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react5.NavLink, { to: "/expenses", end: !0, children: "Manage Expenses" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react5.NavLink, { to: "/expenses/analysis", children: "Analyze Expenses" }) })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("nav", { id: "cta-nav", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react5.Form, { method: "post", action: "logout", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("button", { className: "cta", children: "Logout" }) }) })
  ] });
}
var ExpensesHeader_default = ExpensesHeader;

// app/routes/__app.jsx
var import_jsx_runtime7 = require("react/jsx-runtime");
function ExpensesAppLayout() {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(import_jsx_runtime7.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(ExpensesHeader_default, {}),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react6.Outlet, {})
  ] });
}
function links2() {
  return [{ rel: "stylesheet", href: expenses_default }];
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-3Z4PAZHF.js", imports: ["/build/_shared/chunk-OFAY64ZU.js", "/build/_shared/chunk-Q3IECNXJ.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-DN6PSINC.js", imports: ["/build/_shared/chunk-RG6QDQWY.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !0, hasErrorBoundary: !0 }, "routes/__app": { id: "routes/__app", parentId: "root", path: void 0, index: void 0, caseSensitive: void 0, module: "/build/routes/__app-LJ2Y55DQ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__marketing": { id: "routes/__marketing", parentId: "root", path: void 0, index: void 0, caseSensitive: void 0, module: "/build/routes/__marketing-DHLUX3IX.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/expenses.raw": { id: "routes/expenses.raw", parentId: "root", path: "expenses/raw", index: void 0, caseSensitive: void 0, module: "/build/routes/expenses.raw-QIB7CNT2.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/logout": { id: "routes/logout", parentId: "root", path: "logout", index: void 0, caseSensitive: void 0, module: "/build/routes/logout-76G6JN5D.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "ed6f6256", hmr: void 0, url: "/build/manifest-ED6F6256.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public\\build", future = { v2_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !0, v2_headers: !0, v2_meta: !0, v2_normalizeFormMethod: !0, v2_routeConvention: !0 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/expenses.raw": {
    id: "routes/expenses.raw",
    parentId: "root",
    path: "expenses/raw",
    index: void 0,
    caseSensitive: void 0,
    module: expenses_raw_exports
  },
  "routes/__marketing": {
    id: "routes/__marketing",
    parentId: "root",
    path: void 0,
    index: void 0,
    caseSensitive: void 0,
    module: marketing_exports
  },
  "routes/logout": {
    id: "routes/logout",
    parentId: "root",
    path: "logout",
    index: void 0,
    caseSensitive: void 0,
    module: logout_exports
  },
  "routes/__app": {
    id: "routes/__app",
    parentId: "root",
    path: void 0,
    index: void 0,
    caseSensitive: void 0,
    module: app_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
