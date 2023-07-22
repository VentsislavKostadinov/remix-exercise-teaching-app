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
async function createUserSession(userId, redirectPath) {
  let session = await sessionStorage.getSession();
  return session.set("userId", userId), (0, import_node2.redirect)(redirectPath, {
    headers: {
      "Set-Cookie": await sessionStorage.commitSession(session)
    }
  });
}
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
async function signup({ email, password }) {
  if (await prisma.user.findFirst({ where: { email } })) {
    let error = new Error(
      "A user with the provided email address exists already."
    );
    throw error.status = 422, error;
  }
  let passwordHash = await (0, import_bcryptjs.hash)(password, 12), user = await prisma.user.create({
    data: { email, password: passwordHash }
  });
  return createUserSession(user.id, "/expenses");
}
async function login({ email, password }) {
  let existingUser = await prisma.user.findFirst({ where: { email } });
  if (!existingUser) {
    let error = new Error(
      "Could not log you in, please check the provided credentials."
    );
    throw error.status = 401, error;
  }
  if (!await (0, import_bcryptjs.compare)(password, existingUser.password)) {
    let error = new Error(
      "Could not log you in, please check the provided credentials."
    );
    throw error.status = 401, error;
  }
  return createUserSession(existingUser.id, "/expenses");
}

// app/data/expenses.server.js
async function addExpense(expenseData, userId) {
  try {
    return await prisma.expense.create({
      data: {
        title: expenseData.title,
        amount: +expenseData.amount,
        date: new Date(expenseData.date),
        User: { connect: { id: userId } }
      }
    });
  } catch {
    throw new Error("Failed to add expense.");
  }
}
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
async function updateExpense(id, expenseData) {
  try {
    await prisma.expense.update({
      where: { id },
      data: {
        title: expenseData.title,
        amount: +expenseData.amount,
        date: new Date(expenseData.date)
      }
    });
  } catch {
    throw new Error("Failed to update expense.");
  }
}
async function deleteExpense(id) {
  try {
    await prisma.expense.delete({
      where: { id }
    });
  } catch {
    throw new Error("Failed to delete expense.");
  }
}

// app/routes/expenses.raw.jsx
async function loader({ request }) {
  let userId = await requireUserSession(request);
  return getExpenses(userId);
}

// app/routes/__marketing.jsx
var marketing_exports = {};
__export(marketing_exports, {
  default: () => MarketingLayout,
  links: () => links2,
  loader: () => loader2
});
var import_react5 = require("@remix-run/react");

// app/components/navigation/MainHeader.jsx
var import_react4 = require("@remix-run/react");

// app/components/util/Logo.jsx
var import_react3 = require("@remix-run/react"), import_jsx_runtime4 = require("react/jsx-runtime");
function Logo() {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h1", { id: "logo", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react3.Link, { to: "/", children: "RemixExpenses" }) });
}
var Logo_default = Logo;

// app/components/navigation/MainHeader.jsx
var import_jsx_runtime5 = require("react/jsx-runtime");
function MainHeader() {
  let userId = (0, import_react4.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("header", { id: "main-header", children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Logo_default, {}),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("nav", { id: "main-nav", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react4.NavLink, { to: "/", children: "Home" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react4.NavLink, { to: "/pricing", children: "Pricing" }) })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("nav", { id: "cta-nav", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("ul", { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("li", { children: [
      userId && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react4.Form, { method: "post", action: "/logout", id: "logout-form", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("button", { className: "cta-alt", children: "Logout" }) }),
      !userId && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react4.Link, { to: "/auth", className: "cta", children: "Login" })
    ] }) }) })
  ] });
}
var MainHeader_default = MainHeader;

// app/styles/marketing.css
var marketing_default = "/build/_assets/marketing-ZWDH4JAG.css";

// app/routes/__marketing.jsx
var import_jsx_runtime6 = require("react/jsx-runtime");
function MarketingLayout() {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(import_jsx_runtime6.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(MainHeader_default, {}),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react5.Outlet, {}),
    ";"
  ] });
}
function loader2({ request }) {
  return getUserFromSession(request);
}
function links2() {
  return [{ rel: "stylesheet", href: marketing_default }];
}

// app/routes/__marketing/pricing.jsx
var pricing_exports = {};
__export(pricing_exports, {
  default: () => PricingPage,
  meta: () => meta2
});
var import_fa2 = require("react-icons/fa");

// app/components/marketing/PricingPlan.jsx
var import_jsx_runtime7 = require("react/jsx-runtime");
function PricingPlan({ title, price, perks, icon }) {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("article", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("header", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(icon, {}) }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h2", { children: title }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { children: price })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "plan-content", children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("ol", { children: perks.map((perk) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("li", { children: perk }, perk)) }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "actions", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("a", { href: "/not-implemented", children: "Learn More" }) })
    ] })
  ] });
}
var PricingPlan_default = PricingPlan;

// app/routes/__marketing/pricing.jsx
var import_jsx_runtime8 = require("react/jsx-runtime"), PRICING_PLANS = [
  {
    id: "p1",
    title: "Basic",
    price: "Free forever",
    perks: ["1 User", "Up to 100 expenses/year", "Basic analytics"],
    icon: import_fa2.FaHandshake
  },
  {
    id: "p2",
    title: "Pro",
    price: "$9.99/month",
    perks: ["Unlimited Users", "Unlimited expenses/year", "Detailed analytics"],
    icon: import_fa2.FaTrophy
  }
];
function PricingPage() {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("main", { id: "pricing", children: [
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h2", { children: "Great Product, Simple Pricing" }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("ol", { id: "pricing-plans", children: PRICING_PLANS.map((plan) => /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("li", { className: "plan", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
      PricingPlan_default,
      {
        title: plan.title,
        price: plan.price,
        perks: plan.perks,
        icon: plan.icon
      }
    ) }, plan.id)) })
  ] });
}
function meta2() {
}

// app/routes/__marketing/index.jsx
var marketing_exports2 = {};
__export(marketing_exports2, {
  default: () => Index,
  meta: () => meta3
});
var import_react6 = require("@remix-run/react"), import_fa3 = require("react-icons/fa"), import_jsx_runtime9 = require("react/jsx-runtime");
function Index() {
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("main", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("section", { className: "marketing-section", children: [
      /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("header", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_fa3.FaDollarSign, {}),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("h2", { children: "A Central Space" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "marketing-content", children: [
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "marketing-image", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("img", { src: "images/expenses-management.jpg", alt: "A list of expenses." }) }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "marketing-explanation", children: [
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("p", { children: "Manage your expenses in one central place." }),
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("p", { children: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(import_react6.Link, { className: "cta", to: "/expenses", children: [
            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { children: "Get Started" }),
            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_fa3.FaArrowRight, {})
          ] }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("section", { className: "marketing-section", children: [
      /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("header", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_fa3.FaChartBar, {}),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("h2", { children: "Detailed Analytics" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "marketing-content", children: [
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("p", { className: "marketing-explanation", children: "Benefit from best-in-class analytics to understand your spending patterns." }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "marketing-image", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("img", { src: "images/expenses-chart.jpg", alt: "A demo bar chart." }) })
      ] })
    ] })
  ] });
}
function meta3() {
}

// app/routes/__marketing/auth.jsx
var auth_exports = {};
__export(auth_exports, {
  action: () => action,
  default: () => AuthPage,
  links: () => links3
});
var import_node3 = require("@remix-run/node");

// app/components/auth/AuthForm.jsx
var import_react7 = require("@remix-run/react"), import_fa4 = require("react-icons/fa"), import_jsx_runtime10 = require("react/jsx-runtime");
function AuthForm() {
  let [searchParams] = (0, import_react7.useSearchParams)(), navigation = (0, import_react7.useTransition)(), validationErrors = (0, import_react7.useActionData)(), authMode = searchParams.get("mode") || "login", submitBtnCaption = authMode === "login" ? "Login" : "Create User", toggleBtnCaption = authMode === "login" ? "Create a new user" : "Log in with existing user", isSubmitting = navigation.state !== "idle";
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(import_react7.Form, { method: "post", className: "form", id: "auth-form", children: [
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "icon-img", children: authMode === "login" ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_fa4.FaLock, {}) : /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_fa4.FaUserPlus, {}) }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("p", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("label", { htmlFor: "email", children: "Email Address" }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("input", { type: "email", id: "email", name: "email", required: !0 })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("p", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("label", { htmlFor: "password", children: "Password" }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("input", { type: "password", id: "password", name: "password", minLength: 7 })
    ] }),
    validationErrors && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("ul", { children: Object.values(validationErrors).map((error) => /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("li", { children: error }, error)) }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "form-actions", children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("button", { disabled: isSubmitting, children: isSubmitting ? "Authenticating..." : submitBtnCaption }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_react7.Link, { to: authMode === "login" ? "?mode=signup" : "?mode=login", children: toggleBtnCaption })
    ] })
  ] });
}
var AuthForm_default = AuthForm;

// app/data/validation.server.js
function isValidTitle(value) {
  return value && value.trim().length > 0 && value.trim().length <= 30;
}
function isValidAmount(value) {
  let amount = parseFloat(value);
  return !isNaN(amount) && amount > 0;
}
function isValidDate(value) {
  return value && new Date(value).getTime() < (/* @__PURE__ */ new Date()).getTime();
}
function validateExpenseInput(input) {
  let validationErrors = {};
  if (isValidTitle(input.title) || (validationErrors.title = "Invalid expense title. Must be at most 30 characters long."), isValidAmount(input.amount) || (validationErrors.amount = "Invalid amount. Must be a number greater than zero."), isValidDate(input.date) || (validationErrors.date = "Invalid date. Must be a date before today."), Object.keys(validationErrors).length > 0)
    throw validationErrors;
}
function isValidEmail(value) {
  return value && value.includes("@");
}
function isValidPassword(value) {
  return value && value.trim().length >= 7;
}
function validateCredentials(input) {
  let validationErrors = {};
  if (isValidEmail(input.email) || (validationErrors.email = "Invalid email address."), isValidPassword(input.password) || (validationErrors.password = "Invalid password. Must be at least 7 characters long."), Object.keys(validationErrors).length > 0)
    throw validationErrors;
}

// app/styles/auth.css
var auth_default = "/build/_assets/auth-JLCQ6ZW3.css";

// app/routes/__marketing/auth.jsx
var import_jsx_runtime11 = require("react/jsx-runtime");
function AuthPage() {
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(AuthForm_default, {});
}
async function action({ request }) {
  let authMode = new URL(request.url).searchParams.get("mode") || "login", formData = await request.formData(), credentials = Object.fromEntries(formData);
  try {
    validateCredentials(credentials);
  } catch (error) {
    return error;
  }
  try {
    return authMode === "login" ? await login(credentials) : await signup(credentials);
  } catch (error) {
    if (error.status === 422)
      return { credentials: error.message };
  }
}
function links3() {
  return [{ rel: "stylesheet", href: auth_default }];
}

// app/routes/logout.js
var logout_exports = {};
__export(logout_exports, {
  action: () => action2
});
var import_node4 = require("@remix-run/node");
function action2({ request }) {
  if (request.method !== "POST")
    throw (0, import_node4.json)({ message: "Invalid request method" }, { status: 400 });
  return destroyUserSession(request);
}

// app/routes/__app.jsx
var app_exports = {};
__export(app_exports, {
  default: () => ExpensesAppLayout,
  links: () => links4
});
var import_react9 = require("@remix-run/react");

// app/styles/expenses.css
var expenses_default = "/build/_assets/expenses-3JM5IXYW.css";

// app/components/navigation/ExpensesHeader.jsx
var import_react8 = require("@remix-run/react");
var import_jsx_runtime12 = require("react/jsx-runtime");
function ExpensesHeader() {
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("header", { id: "main-header", children: [
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Logo_default, {}),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("nav", { id: "main-nav", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_react8.NavLink, { to: "/expenses", end: !0, children: "Manage Expenses" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_react8.NavLink, { to: "/expenses/analysis", children: "Analyze Expenses" }) })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("nav", { id: "cta-nav", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_react8.Form, { method: "post", action: "logout", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("button", { className: "cta", children: "Logout" }) }) })
  ] });
}
var ExpensesHeader_default = ExpensesHeader;

// app/routes/__app.jsx
var import_jsx_runtime13 = require("react/jsx-runtime");
function ExpensesAppLayout() {
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(import_jsx_runtime13.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(ExpensesHeader_default, {}),
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_react9.Outlet, {})
  ] });
}
function links4() {
  return [{ rel: "stylesheet", href: expenses_default }];
}

// app/routes/__app/expenses.analysis.jsx
var expenses_analysis_exports = {};
__export(expenses_analysis_exports, {
  CatchBoundary: () => CatchBoundary2,
  default: () => ExpensesAnalysisPage,
  loader: () => loader3
});
var import_node5 = require("@remix-run/node"), import_react11 = require("@remix-run/react");

// app/components/expenses/ExpenseStatistics.jsx
var import_react10 = require("react"), import_jsx_runtime14 = require("react/jsx-runtime");
function calculateSummaryStatistics(expenses) {
  let amounts = expenses.map((expense) => +expense.amount), maxAmount = Math.max(...amounts), minAmount = Math.min(...amounts), sum = expenses.reduce((prevVal, curVal) => curVal.amount + prevVal, 0), mean = sum / expenses.length;
  return { minAmount, maxAmount, sum, mean };
}
function ExpenseStatistics({ expenses }) {
  let { minAmount, maxAmount, sum, mean } = (0, import_react10.useMemo)(
    () => calculateSummaryStatistics(expenses),
    [expenses]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("section", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("h2", { children: "Summary Statistics" }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("dl", { id: "expense-statistics", children: [
      /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("dt", { children: "Total" }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("dd", { children: [
          "$",
          sum.toFixed(2)
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("dt", { children: "Average" }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("dd", { children: [
          "$",
          mean.toFixed(2)
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("dt", { children: " Min. Amount" }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("dd", { children: [
          "$",
          minAmount.toFixed(2)
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("dt", { children: "Max. Amount" }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("dd", { children: [
          "$",
          maxAmount.toFixed(2)
        ] })
      ] })
    ] })
  ] });
}
var ExpenseStatistics_default = ExpenseStatistics;

// app/components/expenses/ChartBar.jsx
var import_jsx_runtime15 = require("react/jsx-runtime"), ChartBar = ({ maxValue, value, label }) => {
  let barFillHeight = "0%";
  return maxValue > 0 && (barFillHeight = Math.round(value / maxValue * 100) + "%"), /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "chart-bar", children: [
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "chart-bar--inner", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
      "div",
      {
        className: "chart-bar--fill",
        style: { height: barFillHeight }
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "chart-bar--label", children: label })
  ] });
}, ChartBar_default = ChartBar;

// app/components/expenses/Chart.jsx
var import_jsx_runtime16 = require("react/jsx-runtime");
function Chart({ expenses }) {
  let chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 }
  ];
  for (let expense of expenses) {
    let expenseMonth = new Date(expense.date).getMonth();
    chartDataPoints[expenseMonth].value += expense.amount;
  }
  let dataPointValues = chartDataPoints.map((dataPoint) => dataPoint.value), totalMaximum = Math.max(...dataPointValues);
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("section", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("h2", { children: "Monthly Expenses" }),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("ol", { className: "chart", children: chartDataPoints.map((dataPoint) => /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
      ChartBar_default,
      {
        value: dataPoint.value,
        maxValue: totalMaximum,
        label: dataPoint.label
      },
      dataPoint.label
    )) })
  ] });
}
var Chart_default = Chart;

// app/routes/__app/expenses.analysis.jsx
var import_jsx_runtime17 = require("react/jsx-runtime");
function ExpensesAnalysisPage() {
  let expenses = (0, import_react11.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("main", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Chart_default, { expenses }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(ExpenseStatistics_default, { expenses })
  ] });
}
async function loader3({ request }) {
  let userId = await requireUserSession(request), expenses = await getExpenses(userId);
  if (!expenses || expenses.length === 0)
    throw (0, import_node5.json)(
      { message: "Could not load expenses for the requested analysis." },
      {
        status: 404,
        statusText: "Expenses not found"
      }
    );
  return expenses;
}
function CatchBoundary2() {
  var _a;
  let caughtResponse = (0, import_react11.useCatch)();
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("main", { children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Error_default, { title: caughtResponse.statusText, children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("p", { children: ((_a = caughtResponse.data) == null ? void 0 : _a.message) || "Something went wrong - could not load expenses." }) }) });
}

// app/routes/__app/expenses.jsx
var expenses_exports = {};
__export(expenses_exports, {
  default: () => ExpensesLayout,
  loader: () => loader4
});
var import_react13 = require("@remix-run/react"), import_fa5 = require("react-icons/fa");

// app/components/expenses/ExpenseListItem.jsx
var import_react12 = require("@remix-run/react"), import_jsx_runtime18 = require("react/jsx-runtime");
function ExpenseListItem({ id, title, amount }) {
  let fetcher = (0, import_react12.useFetcher)();
  function deleteExpenseItemHandler() {
    confirm("Are you sure? Do you want to delete this item?") && fetcher.submit(null, { method: "delete", action: `/expenses/${id}` });
  }
  return fetcher.state !== "idle" ? /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("article", { className: "expense-item locked", children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("p", { children: "Deleting..." }) }) : /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("article", { className: "expense-item", children: [
    /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("h2", { className: "expense-title", children: title }),
      /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("p", { className: "expense-amount", children: [
        "$",
        amount.toFixed(2)
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("menu", { className: "expense-actions", children: [
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("button", { onClick: deleteExpenseItemHandler, children: "Delete" }),
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_react12.Link, { to: id, children: "Edit" })
    ] })
  ] });
}
var ExpenseListItem_default = ExpenseListItem;

// app/components/expenses/ExpensesList.jsx
var import_jsx_runtime19 = require("react/jsx-runtime");
function ExpensesList({ expenses }) {
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("ol", { id: "expenses-list", children: expenses.map((expense) => /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
    ExpenseListItem_default,
    {
      id: expense.id,
      title: expense.title,
      amount: expense.amount
    }
  ) }, expense.id)) });
}
var ExpensesList_default = ExpensesList;

// app/routes/__app/expenses.jsx
var import_jsx_runtime20 = require("react/jsx-runtime");
function ExpensesLayout() {
  let expenses = (0, import_react13.useLoaderData)(), hasExpenses = expenses && expenses.length > 0;
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(import_jsx_runtime20.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_react13.Outlet, {}),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("main", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("section", { id: "expenses-actions", children: [
        /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(import_react13.Link, { to: "add", children: [
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_fa5.FaPlus, {}),
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { children: "Add Expense" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("a", { href: "/expenses/raw", children: [
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_fa5.FaDownload, {}),
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { children: "Load Raw Data" })
        ] })
      ] }),
      hasExpenses && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(ExpensesList_default, { expenses }),
      !hasExpenses && /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("section", { id: "no-expenses", children: [
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("h1", { children: "No expenses found" }),
        /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("p", { children: [
          "Start ",
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_react13.Link, { to: "add", children: "adding some" }),
          " today."
        ] })
      ] })
    ] })
  ] });
}
async function loader4({ request }) {
  let userId = await requireUserSession(request);
  return await getExpenses(userId);
}

// app/routes/__app/expenses/$id.jsx
var id_exports = {};
__export(id_exports, {
  action: () => action3,
  default: () => UpdateExpensesPage
});
var import_node6 = require("@remix-run/node"), import_react15 = require("@remix-run/react");

// app/components/expenses/ExpenseForm.jsx
var import_react14 = require("@remix-run/react"), import_jsx_runtime21 = require("react/jsx-runtime");
function ExpenseForm() {
  let today = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), validationErrors = (0, import_react14.useActionData)(), params = (0, import_react14.useParams)(), expenseData = (0, import_react14.useMatches)().find(
    (match) => match.id === "routes/__app/expenses"
  ).data.find((expense) => expense.id === params.id);
  if (params.id && !expenseData)
    return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("p", { children: "Invalid expense id." });
  let navigation = (0, import_react14.useTransition)(), defaultValues = expenseData ? {
    title: expenseData.title,
    amount: expenseData.amount,
    date: expenseData.date
  } : {
    title: "",
    amount: "",
    date: ""
  }, isSubmitting = navigation.state !== "idle";
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(
    import_react14.Form,
    {
      method: expenseData ? "patch" : "post",
      className: "form",
      id: "expense-form",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("p", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("label", { htmlFor: "title", children: "Expense Title" }),
          /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
            "input",
            {
              type: "text",
              id: "title",
              name: "title",
              required: !0,
              maxLength: 30,
              defaultValue: defaultValues.title
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: "form-row", children: [
          /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("p", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("label", { htmlFor: "amount", children: "Amount" }),
            /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
              "input",
              {
                type: "number",
                id: "amount",
                name: "amount",
                min: "0",
                step: "0.01",
                required: !0,
                defaultValue: defaultValues.amount
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("p", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("label", { htmlFor: "date", children: "Date" }),
            /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
              "input",
              {
                type: "date",
                id: "date",
                name: "date",
                max: today,
                required: !0,
                defaultValue: defaultValues.date ? defaultValues.date.slice(0, 10) : ""
              }
            )
          ] })
        ] }),
        validationErrors && /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("ul", { children: Object.values(validationErrors).map((error) => /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("li", { children: error }, error)) }),
        /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: "form-actions", children: [
          /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("button", { disabled: isSubmitting, children: isSubmitting ? "Saving..." : "Save Expense" }),
          /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(import_react14.Link, { to: "..", children: "Cancel" })
        ] })
      ]
    }
  );
}
var ExpenseForm_default = ExpenseForm;

// app/components/util/Modal.jsx
var import_jsx_runtime22 = require("react/jsx-runtime");
function Modal({ children, onClose }) {
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "modal-backdrop", onClick: onClose, children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
    "dialog",
    {
      className: "modal",
      open: !0,
      onClick: (event) => event.stopPropagation(),
      children
    }
  ) });
}
var Modal_default = Modal;

// app/routes/__app/expenses/$id.jsx
var import_jsx_runtime23 = require("react/jsx-runtime");
function UpdateExpensesPage() {
  let navigate = (0, import_react15.useNavigate)();
  function closeHandler() {
    navigate("..");
  }
  return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(Modal_default, { onClose: closeHandler, children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(ExpenseForm_default, {}) });
}
async function action3({ params, request }) {
  let expenseId = params.id;
  if (request.method === "PATCH") {
    let formData = await request.formData(), expenseData = Object.fromEntries(formData);
    try {
      validateExpenseInput(expenseData);
    } catch (error) {
      return error;
    }
    return await updateExpense(expenseId, expenseData), (0, import_node6.redirect)("/expenses");
  } else if (request.method === "DELETE")
    return await deleteExpense(expenseId), { deletedId: expenseId };
}

// app/routes/__app/expenses/add.jsx
var add_exports = {};
__export(add_exports, {
  action: () => action4,
  default: () => AddExpensesPage
});
var import_node7 = require("@remix-run/node"), import_react16 = require("@remix-run/react");
var import_jsx_runtime24 = require("react/jsx-runtime");
function AddExpensesPage() {
  let navigate = (0, import_react16.useNavigate)();
  function closeHandler() {
    navigate("..");
  }
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(Modal_default, { onClose: closeHandler, children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(ExpenseForm_default, {}) });
}
async function action4({ request }) {
  let userId = await requireUserSession(request), formData = await request.formData(), expenseData = Object.fromEntries(formData);
  try {
    validateExpenseInput(expenseData);
  } catch (error) {
    return error;
  }
  return await addExpense(expenseData, userId), (0, import_node7.redirect)("/expenses");
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-KAIL5LBY.js", imports: ["/build/_shared/chunk-XKSMB4GH.js", "/build/_shared/chunk-GDLBX7ER.js", "/build/_shared/chunk-Q3IECNXJ.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-A4RDNDIO.js", imports: ["/build/_shared/chunk-EK4RWZFE.js", "/build/_shared/chunk-VV4H7HN4.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !0, hasErrorBoundary: !0 }, "routes/__app": { id: "routes/__app", parentId: "root", path: void 0, index: void 0, caseSensitive: void 0, module: "/build/routes/__app-5FCMW7KN.js", imports: ["/build/_shared/chunk-6DMP5KT2.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__app/expenses": { id: "routes/__app/expenses", parentId: "routes/__app", path: "expenses", index: void 0, caseSensitive: void 0, module: "/build/routes/__app/expenses-UC7JOHQW.js", imports: ["/build/_shared/chunk-2V6YUO4N.js", "/build/_shared/chunk-KBSTBQNH.js", "/build/_shared/chunk-VV4H7HN4.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__app/expenses.analysis": { id: "routes/__app/expenses.analysis", parentId: "routes/__app", path: "expenses/analysis", index: void 0, caseSensitive: void 0, module: "/build/routes/__app/expenses.analysis-WN2NRR4F.js", imports: ["/build/_shared/chunk-2V6YUO4N.js", "/build/_shared/chunk-EK4RWZFE.js", "/build/_shared/chunk-PGOH7JLP.js", "/build/_shared/chunk-KBSTBQNH.js", "/build/_shared/chunk-VV4H7HN4.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !0, hasErrorBoundary: !1 }, "routes/__app/expenses/$id": { id: "routes/__app/expenses/$id", parentId: "routes/__app/expenses", path: ":id", index: void 0, caseSensitive: void 0, module: "/build/routes/__app/expenses/$id-6J353RQB.js", imports: ["/build/_shared/chunk-HYKFLZSQ.js", "/build/_shared/chunk-B3UQY3VD.js", "/build/_shared/chunk-PGOH7JLP.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__app/expenses/add": { id: "routes/__app/expenses/add", parentId: "routes/__app/expenses", path: "add", index: void 0, caseSensitive: void 0, module: "/build/routes/__app/expenses/add-QR53JHZS.js", imports: ["/build/_shared/chunk-HYKFLZSQ.js", "/build/_shared/chunk-B3UQY3VD.js", "/build/_shared/chunk-PGOH7JLP.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__marketing": { id: "routes/__marketing", parentId: "root", path: void 0, index: void 0, caseSensitive: void 0, module: "/build/routes/__marketing-OWUPCG7J.js", imports: ["/build/_shared/chunk-6DMP5KT2.js", "/build/_shared/chunk-KBSTBQNH.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__marketing/auth": { id: "routes/__marketing/auth", parentId: "routes/__marketing", path: "auth", index: void 0, caseSensitive: void 0, module: "/build/routes/__marketing/auth-DW6GU3X4.js", imports: ["/build/_shared/chunk-B3UQY3VD.js", "/build/_shared/chunk-PGOH7JLP.js", "/build/_shared/chunk-VV4H7HN4.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__marketing/index": { id: "routes/__marketing/index", parentId: "routes/__marketing", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/__marketing/index-4QCTKZPN.js", imports: ["/build/_shared/chunk-VV4H7HN4.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__marketing/pricing": { id: "routes/__marketing/pricing", parentId: "routes/__marketing", path: "pricing", index: void 0, caseSensitive: void 0, module: "/build/routes/__marketing/pricing-7ZIOKBF5.js", imports: ["/build/_shared/chunk-VV4H7HN4.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/expenses.raw": { id: "routes/expenses.raw", parentId: "root", path: "expenses/raw", index: void 0, caseSensitive: void 0, module: "/build/routes/expenses.raw-7CX3G2SH.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/logout": { id: "routes/logout", parentId: "root", path: "logout", index: void 0, caseSensitive: void 0, module: "/build/routes/logout-S5V5LGUF.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "3b21959b", hmr: void 0, url: "/build/manifest-3B21959B.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public\\build", future = { v2_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !1, v2_headers: !1, v2_meta: !1, v2_normalizeFormMethod: !1, v2_routeConvention: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
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
  "routes/__marketing/pricing": {
    id: "routes/__marketing/pricing",
    parentId: "routes/__marketing",
    path: "pricing",
    index: void 0,
    caseSensitive: void 0,
    module: pricing_exports
  },
  "routes/__marketing/index": {
    id: "routes/__marketing/index",
    parentId: "routes/__marketing",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: marketing_exports2
  },
  "routes/__marketing/auth": {
    id: "routes/__marketing/auth",
    parentId: "routes/__marketing",
    path: "auth",
    index: void 0,
    caseSensitive: void 0,
    module: auth_exports
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
  },
  "routes/__app/expenses.analysis": {
    id: "routes/__app/expenses.analysis",
    parentId: "routes/__app",
    path: "expenses/analysis",
    index: void 0,
    caseSensitive: void 0,
    module: expenses_analysis_exports
  },
  "routes/__app/expenses": {
    id: "routes/__app/expenses",
    parentId: "routes/__app",
    path: "expenses",
    index: void 0,
    caseSensitive: void 0,
    module: expenses_exports
  },
  "routes/__app/expenses/$id": {
    id: "routes/__app/expenses/$id",
    parentId: "routes/__app/expenses",
    path: ":id",
    index: void 0,
    caseSensitive: void 0,
    module: id_exports
  },
  "routes/__app/expenses/add": {
    id: "routes/__app/expenses/add",
    parentId: "routes/__app/expenses",
    path: "add",
    index: void 0,
    caseSensitive: void 0,
    module: add_exports
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
