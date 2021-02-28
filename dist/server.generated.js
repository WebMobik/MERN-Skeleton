/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
module.exports =
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./client/MainRouter.tsx":
/*!*******************************!*\
  !*** ./client/MainRouter.tsx ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nexports.__esModule = true;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\r\nvar Home_1 = __importDefault(__webpack_require__(/*! ./core/Home */ \"./client/core/Home.tsx\"));\r\nvar Menu_1 = __importDefault(__webpack_require__(/*! ./core/Menu */ \"./client/core/Menu.tsx\"));\r\nvar Signin_1 = __importDefault(__webpack_require__(/*! ./auth/Signin */ \"./client/auth/Signin.tsx\"));\r\nvar Signup_1 = __importDefault(__webpack_require__(/*! ./user/Signup */ \"./client/user/Signup.tsx\"));\r\nvar Profile_1 = __importDefault(__webpack_require__(/*! ./user/Profile */ \"./client/user/Profile.tsx\"));\r\nvar Users_1 = __importDefault(__webpack_require__(/*! ./user/Users */ \"./client/user/Users.tsx\"));\r\nvar core_1 = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\r\nvar PrivateRoute_1 = __importDefault(__webpack_require__(/*! ./auth/PrivateRoute */ \"./client/auth/PrivateRoute.tsx\"));\r\nvar EditProfile_1 = __importDefault(__webpack_require__(/*! ./user/EditProfile */ \"./client/user/EditProfile.tsx\"));\r\nvar useStyles = core_1.makeStyles(function (theme) { return ({\r\n    main: {\r\n        margin: 0,\r\n        padding: 0,\r\n        boxSizing: 'border-box'\r\n    }\r\n}); });\r\nvar MainRouter = function () {\r\n    var mainStyles = useStyles();\r\n    return (react_1[\"default\"].createElement(\"div\", { className: mainStyles.main },\r\n        react_1[\"default\"].createElement(Menu_1[\"default\"], null),\r\n        react_1[\"default\"].createElement(react_router_dom_1.Switch, null,\r\n            react_1[\"default\"].createElement(react_router_dom_1.Route, { exact: true, path: \"/\", component: Home_1[\"default\"] }),\r\n            react_1[\"default\"].createElement(react_router_dom_1.Route, { path: '/signin', component: Signin_1[\"default\"] }),\r\n            react_1[\"default\"].createElement(react_router_dom_1.Route, { path: '/signup', component: Signup_1[\"default\"] }),\r\n            react_1[\"default\"].createElement(react_router_dom_1.Route, { path: '/users', component: Users_1[\"default\"] }),\r\n            react_1[\"default\"].createElement(PrivateRoute_1[\"default\"], { path: '/user/edit/:userId', component: EditProfile_1[\"default\"] }),\r\n            react_1[\"default\"].createElement(react_router_dom_1.Route, { path: '/user/:userId', component: Profile_1[\"default\"] }))));\r\n};\r\nexports.default = MainRouter;\r\n\n\n//# sourceURL=webpack://Social-Platform-ts/./client/MainRouter.tsx?");

/***/ }),

/***/ "./client/auth/PrivateRoute.tsx":
/*!**************************************!*\
  !*** ./client/auth/PrivateRoute.tsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nvar __rest = (this && this.__rest) || function (s, e) {\r\n    var t = {};\r\n    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)\r\n        t[p] = s[p];\r\n    if (s != null && typeof Object.getOwnPropertySymbols === \"function\")\r\n        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {\r\n            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))\r\n                t[p[i]] = s[p[i]];\r\n        }\r\n    return t;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nexports.__esModule = true;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\r\nvar auth_helper_1 = __importDefault(__webpack_require__(/*! ./auth-helper */ \"./client/auth/auth-helper.ts\"));\r\nvar PrivateRoute = function (_a) {\r\n    var Component = _a.component, rest = __rest(_a, [\"component\"]);\r\n    react_1[\"default\"].createElement(react_router_dom_1.Route, __assign({}, rest, { render: function (props) { return (auth_helper_1[\"default\"].isAuthenticated() ? (react_1[\"default\"].createElement(Component, __assign({}, props))) : (react_1[\"default\"].createElement(react_router_dom_1.Redirect, { to: {\r\n                pathname: '/signin',\r\n                state: { from: props.location }\r\n            } }))); } }));\r\n};\r\nexports.default = PrivateRoute;\r\n\n\n//# sourceURL=webpack://Social-Platform-ts/./client/auth/PrivateRoute.tsx?");

/***/ }),

/***/ "./client/auth/Signin.tsx":
/*!********************************!*\
  !*** ./client/auth/Signin.tsx ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nexports.__esModule = true;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\r\nvar auth_helper_1 = __importDefault(__webpack_require__(/*! ./auth-helper */ \"./client/auth/auth-helper.ts\"));\r\nvar api_auth_1 = __webpack_require__(/*! ./api-auth */ \"./client/auth/api-auth.ts\");\r\nvar core_1 = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\r\nvar useStyles = core_1.makeStyles(function (theme) { return ({\r\n    card: {\r\n        maxWidth: 600,\r\n        margin: 'auto',\r\n        marginTop: theme.spacing(5),\r\n        marginBottom: theme.spacing(5)\r\n    },\r\n    form: {\r\n        display: 'flex',\r\n        flexDirection: 'column',\r\n        alignItems: 'center'\r\n    },\r\n    titleText: {\r\n        textAlign: 'center',\r\n        textTransform: 'uppercase'\r\n    },\r\n    btnSuccess: {\r\n        color: '#ffffff',\r\n        backgroundColor: '#45b531'\r\n    },\r\n    textField: {\r\n        marginBottom: theme.spacing(2)\r\n    }\r\n}); });\r\nvar SignIn = function () {\r\n    var styles = useStyles();\r\n    var _a = react_1.useState({\r\n        email: '',\r\n        password: '',\r\n        error: null,\r\n        redirectToRefresh: false\r\n    }), values = _a[0], setValues = _a[1];\r\n    var handlerSubmit = function (e) {\r\n        e.preventDefault();\r\n        var user = {\r\n            email: values.email || undefined,\r\n            password: values.password || undefined,\r\n        };\r\n        api_auth_1.signin(user)\r\n            .then(function (data) {\r\n            if (data.error) {\r\n                setValues(__assign(__assign({}, values), { error: data.error }));\r\n            }\r\n            else {\r\n                auth_helper_1[\"default\"].authenticate(data, function () {\r\n                    setValues(__assign(__assign({}, values), { error: '', redirectToRefresh: true }));\r\n                });\r\n            }\r\n        });\r\n    };\r\n    var handlerChange = function (name) { return function (event) {\r\n        var _a;\r\n        setValues(__assign(__assign({}, values), (_a = {}, _a[name] = event.target.value, _a)));\r\n    }; };\r\n    return !values.redirectToRefresh ? (react_1[\"default\"].createElement(core_1.Card, { className: styles.card },\r\n        react_1[\"default\"].createElement(core_1.CardContent, null,\r\n            react_1[\"default\"].createElement(core_1.Typography, { className: styles.titleText }, \"Sign In\"),\r\n            react_1[\"default\"].createElement(\"form\", { onSubmit: handlerSubmit, className: styles.form },\r\n                react_1[\"default\"].createElement(core_1.TextField, { id: 'email', type: 'email', label: 'Email', value: values.email, onChange: handlerChange('email') }),\r\n                react_1[\"default\"].createElement(core_1.TextField, { id: 'password', type: 'password', label: 'Password', value: values.password, onChange: handlerChange('password') }),\r\n                react_1[\"default\"].createElement(core_1.CardActions, null,\r\n                    react_1[\"default\"].createElement(core_1.Button, { color: 'primary', type: 'submit', className: styles.btnSuccess }, \"Submit\")))))) : (react_1[\"default\"].createElement(react_router_dom_1.Redirect, { to: '/' }));\r\n};\r\nexports.default = SignIn;\r\n\n\n//# sourceURL=webpack://Social-Platform-ts/./client/auth/Signin.tsx?");

/***/ }),

/***/ "./client/auth/api-auth.ts":
/*!*********************************!*\
  !*** ./client/auth/api-auth.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nexports.__esModule = true;\r\nexports.signout = exports.signin = void 0;\r\nvar signin = function (user) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var response, err_1;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                _a.trys.push([0, 3, , 4]);\r\n                return [4 /*yield*/, fetch('/auth/signin/', {\r\n                        method: 'POST',\r\n                        headers: {\r\n                            'Access': 'application/json',\r\n                            'Content-Type': 'application/json',\r\n                        },\r\n                        credentials: 'include',\r\n                        body: JSON.stringify(user)\r\n                    })];\r\n            case 1:\r\n                response = _a.sent();\r\n                return [4 /*yield*/, response.json()];\r\n            case 2: return [2 /*return*/, _a.sent()];\r\n            case 3:\r\n                err_1 = _a.sent();\r\n                console.log(err_1);\r\n                return [3 /*break*/, 4];\r\n            case 4: return [2 /*return*/];\r\n        }\r\n    });\r\n}); };\r\nexports.signin = signin;\r\nvar signout = function () { return __awaiter(void 0, void 0, void 0, function () {\r\n    var response, err_2;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                _a.trys.push([0, 3, , 4]);\r\n                return [4 /*yield*/, fetch('/auth/signout/', { method: 'GET' })];\r\n            case 1:\r\n                response = _a.sent();\r\n                return [4 /*yield*/, response.json()];\r\n            case 2: return [2 /*return*/, _a.sent()];\r\n            case 3:\r\n                err_2 = _a.sent();\r\n                console.log(err_2);\r\n                return [3 /*break*/, 4];\r\n            case 4: return [2 /*return*/];\r\n        }\r\n    });\r\n}); };\r\nexports.signout = signout;\r\n\n\n//# sourceURL=webpack://Social-Platform-ts/./client/auth/api-auth.ts?");

/***/ }),

/***/ "./client/auth/auth-helper.ts":
/*!************************************!*\
  !*** ./client/auth/auth-helper.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nexports.__esModule = true;\r\nvar api_auth_1 = __webpack_require__(/*! ./api-auth */ \"./client/auth/api-auth.ts\");\r\nvar auth = {\r\n    isAuthenticated: function () {\r\n        if (typeof window == 'undefined')\r\n            return false;\r\n        if (sessionStorage.getItem('jwt'))\r\n            return JSON.parse(sessionStorage.getItem('jwt'));\r\n        else\r\n            return false;\r\n    },\r\n    authenticate: function (jwt, cb) {\r\n        if (typeof window !== 'undefined')\r\n            sessionStorage.setItem('jwt', JSON.stringify(jwt));\r\n        cb();\r\n    },\r\n    clearJWT: function (cb) {\r\n        if (typeof window !== 'undefined')\r\n            sessionStorage.removeItem('jwt');\r\n        cb();\r\n        api_auth_1.signout().then(function () {\r\n            document.cookie = 't=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';\r\n        });\r\n    }\r\n};\r\nexports.default = auth;\r\n\n\n//# sourceURL=webpack://Social-Platform-ts/./client/auth/auth-helper.ts?");

/***/ }),

/***/ "./client/core/Home.tsx":
/*!******************************!*\
  !*** ./client/core/Home.tsx ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nexports.__esModule = true;\r\nvar core_1 = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\r\nvar core_2 = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar useStyles = core_2.makeStyles(function (theme) { return ({\r\n    card: {\r\n        maxWidth: 600,\r\n        margin: 'auto',\r\n        marginTop: theme.spacing(5),\r\n        marginBottom: theme.spacing(5)\r\n    },\r\n    title: {\r\n        paddingTop: theme.spacing(2),\r\n        textAlign: 'center'\r\n    }\r\n}); });\r\nvar Home = function () {\r\n    var styles = useStyles();\r\n    return (react_1[\"default\"].createElement(core_1.Card, { className: styles.card },\r\n        react_1[\"default\"].createElement(core_1.Typography, { className: styles.title }, \"Home Page\"),\r\n        react_1[\"default\"].createElement(core_1.CardContent, null,\r\n            react_1[\"default\"].createElement(core_1.Typography, null, \"Welcome to MERN Social app on TypeScript\"))));\r\n};\r\nexports.default = Home;\r\n\n\n//# sourceURL=webpack://Social-Platform-ts/./client/core/Home.tsx?");

/***/ }),

/***/ "./client/core/Menu.tsx":
/*!******************************!*\
  !*** ./client/core/Menu.tsx ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nexports.__esModule = true;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\r\nvar core_1 = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\r\nvar auth_helper_1 = __importDefault(__webpack_require__(/*! ../auth/auth-helper */ \"./client/auth/auth-helper.ts\"));\r\nvar isActive = function (history, path) {\r\n    if (history.location.pathname == path)\r\n        return { color: '#ff4081' };\r\n    else\r\n        return { color: '#ffffff' };\r\n};\r\nvar Menu = react_router_dom_1.withRouter(function (_a) {\r\n    var history = _a.history;\r\n    return (react_1[\"default\"].createElement(core_1.AppBar, { position: 'static' },\r\n        react_1[\"default\"].createElement(core_1.Toolbar, null,\r\n            react_1[\"default\"].createElement(core_1.Typography, { variant: 'h6', color: 'inherit' }, \"MERN Skeleton\"),\r\n            react_1[\"default\"].createElement(react_router_dom_1.Link, { to: '/' },\r\n                react_1[\"default\"].createElement(core_1.Button, { style: isActive(history, '/') }, \"Home\")),\r\n            !auth_helper_1[\"default\"].isAuthenticated() && (react_1[\"default\"].createElement(react_1[\"default\"].Fragment, null,\r\n                react_1[\"default\"].createElement(react_router_dom_1.Link, { to: '/signup' },\r\n                    react_1[\"default\"].createElement(core_1.Button, { style: isActive(history, '/signup') }, \"Sign Up\")),\r\n                react_1[\"default\"].createElement(react_router_dom_1.Link, { to: '/signin' },\r\n                    react_1[\"default\"].createElement(core_1.Button, { style: isActive(history, '/signin') }, \"Sign In\")))),\r\n            auth_helper_1[\"default\"].isAuthenticated() && (react_1[\"default\"].createElement(react_1[\"default\"].Fragment, null,\r\n                react_1[\"default\"].createElement(react_router_dom_1.Link, { to: '/users' },\r\n                    react_1[\"default\"].createElement(core_1.Button, { style: isActive(history, '/users') }, \"Users\")),\r\n                react_1[\"default\"].createElement(react_router_dom_1.Link, { to: '/user/' + auth_helper_1[\"default\"].isAuthenticated().user._id },\r\n                    react_1[\"default\"].createElement(core_1.Button, { style: isActive(history, '/user/' + auth_helper_1[\"default\"].isAuthenticated().user._id) }, \"Profile\")),\r\n                react_1[\"default\"].createElement(core_1.Button, { color: 'inherit', onClick: function () {\r\n                        auth_helper_1[\"default\"].clearJWT(function () { return history.push('/'); });\r\n                    } }, \"Sign Out\"))))));\r\n});\r\nexports.default = Menu;\r\n\n\n//# sourceURL=webpack://Social-Platform-ts/./client/core/Menu.tsx?");

/***/ }),

/***/ "./client/theme.ts":
/*!*************************!*\
  !*** ./client/theme.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nexports.__esModule = true;\r\nexports.formTheme = exports.theme = void 0;\r\nvar styles_1 = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\r\nexports.theme = styles_1.createMuiTheme({\r\n    palette: {\r\n        primary: {\r\n            light: '#a2cf6e',\r\n            main: '#8bc34a',\r\n            dark: '#618833',\r\n            contrastText: '#000',\r\n        },\r\n        secondary: {\r\n            light: '#0065a3',\r\n            main: '#0091ea',\r\n            dark: '#33a7ee',\r\n            contrastText: '#fff',\r\n        },\r\n        type: 'light'\r\n    }\r\n});\r\nexports.formTheme = styles_1.makeStyles(function (theme) { return ({\r\n    card: {\r\n        maxWidth: 600,\r\n        margin: 'auto',\r\n        marginTop: theme.spacing(5),\r\n        marginBottom: theme.spacing(5)\r\n    },\r\n    form: {\r\n        display: 'flex',\r\n        flexDirection: 'column',\r\n        alignItems: 'center'\r\n    },\r\n    titleText: {\r\n        textAlign: 'center',\r\n        textTransform: 'uppercase'\r\n    },\r\n    btnSuccess: {\r\n        color: '#ffffff',\r\n        backgroundColor: '#45b531'\r\n    },\r\n    textField: {\r\n        marginBottom: theme.spacing(2)\r\n    }\r\n}); });\r\n\n\n//# sourceURL=webpack://Social-Platform-ts/./client/theme.ts?");

/***/ }),

/***/ "./client/user/EditProfile.tsx":
/*!*************************************!*\
  !*** ./client/user/EditProfile.tsx ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nexports.__esModule = true;\r\nvar core_1 = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\r\nvar api_user_1 = __webpack_require__(/*! ./api-user */ \"./client/user/api-user.ts\");\r\nvar auth_helper_1 = __importDefault(__webpack_require__(/*! ../auth/auth-helper */ \"./client/auth/auth-helper.ts\"));\r\nvar EditProfile = function (_a) {\r\n    var match = _a.match;\r\n    var jwt = auth_helper_1[\"default\"].isAuthenticated();\r\n    var _b = react_1.useState({\r\n        name: '',\r\n        email: '',\r\n        password: '',\r\n        error: null,\r\n        open: false\r\n    }), values = _b[0], setValues = _b[1];\r\n    react_1.useEffect(function () {\r\n        var abortController = new AbortController();\r\n        var signal = abortController.signal;\r\n        api_user_1.read({ userId: match.params.userId }, { t: jwt.token }, signal)\r\n            .then(function (data) {\r\n            if (data && data.error) {\r\n                setValues(__assign(__assign({}, values), { error: data.error }));\r\n            }\r\n            else {\r\n                setValues(__assign(__assign({}, values), { name: data.name, email: data.email }));\r\n            }\r\n        });\r\n        return function cleanup() {\r\n            abortController.abort();\r\n        };\r\n    }, [match.params.userId]);\r\n    var handlerSubmit = function (e) {\r\n        e.preventDefault();\r\n        var user = {\r\n            name: values.name || undefined,\r\n            email: values.email || undefined,\r\n            password: values.password || undefined,\r\n        };\r\n        api_user_1.update({ userId: match.params.userId }, { t: jwt.token }, user)\r\n            .then(function (data) {\r\n            if (data && data.error) {\r\n                setValues(__assign(__assign({}, values), { error: data.error }));\r\n            }\r\n            else {\r\n                setValues(__assign(__assign({}, values), { open: true }));\r\n            }\r\n        });\r\n    };\r\n    var handlerChange = function (name) { return function (event) {\r\n        var _a;\r\n        setValues(__assign(__assign({}, values), (_a = {}, _a[name] = event.target.value, _a)));\r\n    }; };\r\n    return (react_1[\"default\"].createElement(react_1[\"default\"].Fragment, null,\r\n        react_1[\"default\"].createElement(core_1.Card, null,\r\n            react_1[\"default\"].createElement(core_1.CardContent, null,\r\n                react_1[\"default\"].createElement(\"form\", { onSubmit: handlerSubmit },\r\n                    react_1[\"default\"].createElement(core_1.Typography, null, \"Edit Profile\"),\r\n                    react_1[\"default\"].createElement(core_1.TextField, { id: 'name', label: 'Name', value: values.name, onChange: handlerChange('name'), margin: 'normal' }),\r\n                    react_1[\"default\"].createElement(core_1.TextField, { id: 'email', type: 'email', label: 'Email', value: values.email, onChange: handlerChange('email'), margin: 'normal' }),\r\n                    react_1[\"default\"].createElement(core_1.TextField, { id: 'password', type: 'password', label: 'Password', value: values.password, onChange: handlerChange('password'), margin: 'normal' }),\r\n                    react_1[\"default\"].createElement(core_1.Divider, null),\r\n                    values.error && (react_1[\"default\"].createElement(core_1.Typography, { component: 'p', color: 'error' },\r\n                        react_1[\"default\"].createElement(core_1.Icon, { color: 'error' }, \"error\"),\r\n                        values.error)),\r\n                    react_1[\"default\"].createElement(core_1.CardActions, null,\r\n                        react_1[\"default\"].createElement(core_1.Button, { color: 'primary', variant: 'contained', type: 'submit' }, \"Submit\"))))),\r\n        react_1[\"default\"].createElement(core_1.Dialog, { open: values.open, disableBackdropClick: true },\r\n            react_1[\"default\"].createElement(core_1.DialogTitle, null, \"Edite Profile\"),\r\n            react_1[\"default\"].createElement(core_1.DialogContent, null,\r\n                react_1[\"default\"].createElement(core_1.DialogContentText, null, \"Profile successfully edited.\")),\r\n            react_1[\"default\"].createElement(core_1.DialogActions, null,\r\n                react_1[\"default\"].createElement(react_router_dom_1.Link, { to: '/' },\r\n                    react_1[\"default\"].createElement(core_1.Button, { color: 'primary', variant: 'contained' }, \"Main Page\"))))));\r\n};\r\nexports.default = EditProfile;\r\n\n\n//# sourceURL=webpack://Social-Platform-ts/./client/user/EditProfile.tsx?");

/***/ }),

/***/ "./client/user/Profile.tsx":
/*!*********************************!*\
  !*** ./client/user/Profile.tsx ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nexports.__esModule = true;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\r\nvar auth_helper_1 = __importDefault(__webpack_require__(/*! ../auth/auth-helper */ \"./client/auth/auth-helper.ts\"));\r\nvar api_user_1 = __webpack_require__(/*! ./api-user */ \"./client/user/api-user.ts\");\r\nvar core_1 = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\r\nvar icons_1 = __webpack_require__(/*! @material-ui/icons */ \"@material-ui/icons\");\r\nvar Profile = function (_a) {\r\n    var match = _a.match;\r\n    var _b = react_1.useState({\r\n        _id: '',\r\n        name: '',\r\n        email: '',\r\n        created: ''\r\n    }), user = _b[0], setUser = _b[1];\r\n    var _c = react_1.useState(false), redirectToSignin = _c[0], setRedirectToSignin = _c[1];\r\n    var jwt = auth_helper_1[\"default\"].isAuthenticated();\r\n    react_1.useEffect(function () {\r\n        var abortController = new AbortController();\r\n        var signal = abortController.signal;\r\n        api_user_1.read({ userId: match.params.userId }, { t: jwt.token }, signal)\r\n            .then(function (data) {\r\n            if (data && data.error) {\r\n                setRedirectToSignin(true);\r\n            }\r\n            else {\r\n                setUser(data);\r\n            }\r\n        });\r\n        return function cleanup() {\r\n            abortController.abort();\r\n        };\r\n    }, [match.params.userId]);\r\n    return !redirectToSignin ? (react_1[\"default\"].createElement(core_1.Paper, { elevation: 4 },\r\n        react_1[\"default\"].createElement(core_1.Typography, { variant: \"h6\" }, \"Profile\"),\r\n        react_1[\"default\"].createElement(core_1.List, { dense: true },\r\n            react_1[\"default\"].createElement(core_1.ListItem, null,\r\n                react_1[\"default\"].createElement(core_1.ListItemAvatar, null,\r\n                    react_1[\"default\"].createElement(core_1.Avatar, null,\r\n                        react_1[\"default\"].createElement(icons_1.Person, null))),\r\n                react_1[\"default\"].createElement(core_1.ListItemText, { primary: user.name, secondary: user.email }),\r\n                jwt.user && jwt.user._id == user._id && (react_1[\"default\"].createElement(core_1.ListItemSecondaryAction, null,\r\n                    react_1[\"default\"].createElement(react_router_dom_1.Link, { to: '/user/edit' + user._id },\r\n                        react_1[\"default\"].createElement(core_1.IconButton, { \"aria-label\": \"Edit\", color: \"primary\" },\r\n                            react_1[\"default\"].createElement(icons_1.Edit, null)))))),\r\n            react_1[\"default\"].createElement(core_1.Divider, null),\r\n            react_1[\"default\"].createElement(core_1.ListItem, null,\r\n                react_1[\"default\"].createElement(core_1.ListItemText, { primary: 'Joined: ' + (new Date(user.created)).toDateString() }))))) : (react_1[\"default\"].createElement(react_router_dom_1.Redirect, { to: \"/signin\" }));\r\n};\r\nexports.default = Profile;\r\n\n\n//# sourceURL=webpack://Social-Platform-ts/./client/user/Profile.tsx?");

/***/ }),

/***/ "./client/user/Signup.tsx":
/*!********************************!*\
  !*** ./client/user/Signup.tsx ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nexports.__esModule = true;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar api_user_1 = __webpack_require__(/*! ./api-user */ \"./client/user/api-user.ts\");\r\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\r\nvar core_1 = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\r\nvar SignUp = function () {\r\n    var _a = react_1.useState({\r\n        name: null,\r\n        email: null,\r\n        password: null,\r\n        error: null,\r\n        open: false\r\n    }), values = _a[0], setValues = _a[1];\r\n    var handlerChange = function (name) { return function (event) {\r\n        var _a;\r\n        setValues(__assign(__assign({}, values), (_a = {}, _a[name] = event.target.value, _a)));\r\n    }; };\r\n    var handlerSubmit = function (e) {\r\n        e.preventDefault();\r\n        var user = {\r\n            email: values.email || undefined,\r\n            name: values.name || undefined,\r\n            password: values.password || undefined,\r\n        };\r\n        api_user_1.create(user)\r\n            .then(function (data) {\r\n            if (data.error) {\r\n                setValues(__assign(__assign({}, values), { error: data.error }));\r\n            }\r\n            else {\r\n                setValues(__assign(__assign({}, values), { error: '', open: true }));\r\n            }\r\n        });\r\n    };\r\n    return (react_1[\"default\"].createElement(react_1[\"default\"].Fragment, null,\r\n        react_1[\"default\"].createElement(core_1.Card, null,\r\n            react_1[\"default\"].createElement(core_1.CardContent, null,\r\n                react_1[\"default\"].createElement(\"form\", { onSubmit: handlerSubmit },\r\n                    react_1[\"default\"].createElement(core_1.Typography, null, \"Sign Up\"),\r\n                    react_1[\"default\"].createElement(core_1.TextField, { id: 'name', label: 'Name', value: values.name, onChange: handlerChange('name'), margin: 'normal' }),\r\n                    react_1[\"default\"].createElement(core_1.TextField, { id: 'email', type: 'email', label: 'Email', value: values.email, onChange: handlerChange('email'), margin: 'normal' }),\r\n                    react_1[\"default\"].createElement(core_1.TextField, { id: 'password', type: 'password', label: 'Password', value: values.password, onChange: handlerChange('password'), margin: 'normal' }),\r\n                    react_1[\"default\"].createElement(core_1.Divider, null),\r\n                    values.error && (react_1[\"default\"].createElement(core_1.Typography, { component: 'p', color: 'error' },\r\n                        react_1[\"default\"].createElement(core_1.Icon, { color: 'error' }, \"error\"),\r\n                        values.error)),\r\n                    react_1[\"default\"].createElement(core_1.CardActions, null,\r\n                        react_1[\"default\"].createElement(core_1.Button, { color: 'primary', variant: 'contained', type: 'submit' }, \"Submit\"))))),\r\n        react_1[\"default\"].createElement(core_1.Dialog, { open: values.open, disableBackdropClick: true },\r\n            react_1[\"default\"].createElement(core_1.DialogTitle, null, \"New Account\"),\r\n            react_1[\"default\"].createElement(core_1.DialogContent, null,\r\n                react_1[\"default\"].createElement(core_1.DialogContentText, null, \"New account succesfully created.\")),\r\n            react_1[\"default\"].createElement(core_1.DialogActions, null,\r\n                react_1[\"default\"].createElement(react_router_dom_1.Link, { to: 'signin' },\r\n                    react_1[\"default\"].createElement(core_1.Button, { color: 'primary', variant: 'contained' }, \"Sign In\"))))));\r\n};\r\nexports.default = SignUp;\r\n\n\n//# sourceURL=webpack://Social-Platform-ts/./client/user/Signup.tsx?");

/***/ }),

/***/ "./client/user/Users.tsx":
/*!*******************************!*\
  !*** ./client/user/Users.tsx ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nexports.__esModule = true;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\r\nvar api_user_1 = __webpack_require__(/*! ./api-user */ \"./client/user/api-user.ts\");\r\nvar core_1 = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\r\nvar icons_1 = __webpack_require__(/*! @material-ui/icons */ \"@material-ui/icons\");\r\nvar useStyles = core_1.makeStyles(function (theme) { return ({\r\n    content: {\r\n        paddingTop: theme.spacing(3) + \"px\"\r\n    },\r\n    titleText: {\r\n        marginLeft: theme.spacing(2) + \"px\"\r\n    }\r\n}); });\r\nvar Users = function () {\r\n    var styles = useStyles();\r\n    var _a = react_1.useState([]), users = _a[0], setUsers = _a[1];\r\n    var _b = react_1.useState(false), loading = _b[0], setLoading = _b[1];\r\n    react_1.useEffect(function () {\r\n        var abortController = new AbortController();\r\n        var signal = abortController.signal;\r\n        setLoading(true);\r\n        api_user_1.list(signal).then(function (data) {\r\n            if (data.error) {\r\n                console.log(data.error);\r\n            }\r\n            else {\r\n                setUsers(data);\r\n            }\r\n        });\r\n        setLoading(false);\r\n        return function cleanup() {\r\n            abortController.abort();\r\n        };\r\n    }, []);\r\n    return !loading ? (react_1[\"default\"].createElement(core_1.Paper, { elevation: 4, className: styles.content },\r\n        react_1[\"default\"].createElement(core_1.Typography, { variant: 'h6', className: styles.titleText }, \"Users List\"),\r\n        react_1[\"default\"].createElement(core_1.List, { dense: true }, users.map(function (user, i) { return (react_1[\"default\"].createElement(react_router_dom_1.Link, { to: '/user/' + user._id, key: i },\r\n            react_1[\"default\"].createElement(core_1.ListItem, { button: true },\r\n                react_1[\"default\"].createElement(core_1.ListItemAvatar, null,\r\n                    react_1[\"default\"].createElement(core_1.Avatar, null,\r\n                        react_1[\"default\"].createElement(icons_1.Person, null))),\r\n                react_1[\"default\"].createElement(core_1.ListItemText, { primary: user.name }),\r\n                react_1[\"default\"].createElement(core_1.ListItemSecondaryAction, null,\r\n                    react_1[\"default\"].createElement(core_1.IconButton, null,\r\n                        react_1[\"default\"].createElement(icons_1.ArrowForward, null)))))); })))) : (react_1[\"default\"].createElement(core_1.CircularProgress, { color: \"inherit\" }));\r\n};\r\nexports.default = Users;\r\n\n\n//# sourceURL=webpack://Social-Platform-ts/./client/user/Users.tsx?");

/***/ }),

/***/ "./client/user/api-user.ts":
/*!*********************************!*\
  !*** ./client/user/api-user.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nexports.__esModule = true;\r\nexports.remove = exports.read = exports.update = exports.list = exports.create = void 0;\r\nvar headers = function (credentials) { return ({\r\n    'Accept': 'application/json',\r\n    'Content-Type': 'application/json',\r\n    'Authorization': 'Bearer ' + credentials.t\r\n}); };\r\nvar create = function (user) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var response, err_1;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                _a.trys.push([0, 3, , 4]);\r\n                return [4 /*yield*/, fetch('/api/users/', {\r\n                        method: 'POST',\r\n                        headers: {\r\n                            'Accept': 'application/json',\r\n                            'Content-Type': 'application/json'\r\n                        },\r\n                        body: JSON.stringify(user)\r\n                    })];\r\n            case 1:\r\n                response = _a.sent();\r\n                return [4 /*yield*/, response.json()];\r\n            case 2: return [2 /*return*/, _a.sent()];\r\n            case 3:\r\n                err_1 = _a.sent();\r\n                console.log(err_1);\r\n                return [3 /*break*/, 4];\r\n            case 4: return [2 /*return*/];\r\n        }\r\n    });\r\n}); };\r\nexports.create = create;\r\nvar list = function (signal) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var response, err_2;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                _a.trys.push([0, 3, , 4]);\r\n                return [4 /*yield*/, fetch('/api/users/', {\r\n                        method: 'GET',\r\n                        signal: signal\r\n                    })];\r\n            case 1:\r\n                response = _a.sent();\r\n                return [4 /*yield*/, response.json()];\r\n            case 2: return [2 /*return*/, _a.sent()];\r\n            case 3:\r\n                err_2 = _a.sent();\r\n                console.log(err_2);\r\n                return [3 /*break*/, 4];\r\n            case 4: return [2 /*return*/];\r\n        }\r\n    });\r\n}); };\r\nexports.list = list;\r\nvar update = function (params, credentials, user) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var response, err_3;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                _a.trys.push([0, 3, , 4]);\r\n                return [4 /*yield*/, fetch('/api/users/' + params.userId, {\r\n                        method: 'PUT',\r\n                        headers: {\r\n                            'Accept': 'application/json',\r\n                            'Content-Type': 'application/json',\r\n                            'Authorization': 'Bearer ' + credentials.t\r\n                        },\r\n                        body: JSON.stringify(user)\r\n                    })];\r\n            case 1:\r\n                response = _a.sent();\r\n                return [4 /*yield*/, response.json()];\r\n            case 2: return [2 /*return*/, _a.sent()];\r\n            case 3:\r\n                err_3 = _a.sent();\r\n                console.log(err_3);\r\n                return [3 /*break*/, 4];\r\n            case 4: return [2 /*return*/];\r\n        }\r\n    });\r\n}); };\r\nexports.update = update;\r\nvar read = function (params, credentials, signal) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var response, err_4;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                _a.trys.push([0, 3, , 4]);\r\n                return [4 /*yield*/, fetch('/api/users/' + params.userId, {\r\n                        method: 'GET',\r\n                        signal: signal,\r\n                        headers: {\r\n                            'Accept': 'application/json',\r\n                            'Content-Type': 'application/json',\r\n                            'Authorization': 'Bearer ' + credentials.t\r\n                        },\r\n                    })];\r\n            case 1:\r\n                response = _a.sent();\r\n                return [4 /*yield*/, response.json()];\r\n            case 2: return [2 /*return*/, _a.sent()];\r\n            case 3:\r\n                err_4 = _a.sent();\r\n                console.log(err_4);\r\n                return [3 /*break*/, 4];\r\n            case 4: return [2 /*return*/];\r\n        }\r\n    });\r\n}); };\r\nexports.read = read;\r\nvar remove = function (params, credentials) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var response, err_5;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                _a.trys.push([0, 3, , 4]);\r\n                return [4 /*yield*/, fetch('/api/users/' + params.userId, {\r\n                        method: 'DELETE',\r\n                        headers: {\r\n                            'Accept': 'application/json',\r\n                            'Content-Type': 'application/json',\r\n                            'Authorization': 'Bearer ' + credentials.t\r\n                        }\r\n                    })];\r\n            case 1:\r\n                response = _a.sent();\r\n                return [4 /*yield*/, response.json()];\r\n            case 2: return [2 /*return*/, _a.sent()];\r\n            case 3:\r\n                err_5 = _a.sent();\r\n                console.log(err_5);\r\n                return [3 /*break*/, 4];\r\n            case 4: return [2 /*return*/];\r\n        }\r\n    });\r\n}); };\r\nexports.remove = remove;\r\n\n\n//# sourceURL=webpack://Social-Platform-ts/./client/user/api-user.ts?");

/***/ }),

/***/ "./config/config.ts":
/*!**************************!*\
  !*** ./config/config.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nexports.__esModule = true;\r\nvar config = {\r\n    env: \"development\" || 0,\r\n    port: process.env.PORT || 3000,\r\n    jwtSecret: process.env.JWT_SECRET || \"secrets_garden\",\r\n    mongoUri: 'mongodb+srv://mobik:123qwe@social.nerk4.mongodb.net/social?retryWrites=true&w=majority'\r\n};\r\nexports.default = config;\r\n\n\n//# sourceURL=webpack://Social-Platform-ts/./config/config.ts?");

/***/ }),

/***/ "./server/controllers/auth.controller.ts":
/*!***********************************************!*\
  !*** ./server/controllers/auth.controller.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nexports.__esModule = true;\r\nvar User_1 = __importDefault(__webpack_require__(/*! ../models/User */ \"./server/models/User.ts\"));\r\nvar jsonwebtoken_1 = __importDefault(__webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\"));\r\nvar express_jwt_1 = __importDefault(__webpack_require__(/*! express-jwt */ \"express-jwt\"));\r\nvar config_1 = __importDefault(__webpack_require__(/*! ../../config/config */ \"./config/config.ts\"));\r\nvar signin = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var user, token, err_1;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                _a.trys.push([0, 2, , 3]);\r\n                return [4 /*yield*/, User_1[\"default\"].findOne({\r\n                        'email': req.body.email\r\n                    })];\r\n            case 1:\r\n                user = _a.sent();\r\n                if (!user)\r\n                    return [2 /*return*/, res.status(401).json({\r\n                            error: \"User not found\"\r\n                        })];\r\n                if (!user.authenticate(req.body.password)) {\r\n                    return [2 /*return*/, res.status(401).send({\r\n                            error: 'Email and password don\\'t match.'\r\n                        })];\r\n                }\r\n                token = jsonwebtoken_1[\"default\"].sign({\r\n                    _id: user._id\r\n                }, config_1[\"default\"].jwtSecret);\r\n                res.cookie('t', token, {\r\n                    expires: new Date()\r\n                });\r\n                return [2 /*return*/, res.json({\r\n                        token: token,\r\n                        user: {\r\n                            _id: user._id,\r\n                            name: user.name,\r\n                            email: user.email\r\n                        }\r\n                    })];\r\n            case 2:\r\n                err_1 = _a.sent();\r\n                return [2 /*return*/, res.status(401).json({\r\n                        error: 'Could not sign in'\r\n                    })];\r\n            case 3: return [2 /*return*/];\r\n        }\r\n    });\r\n}); };\r\nvar signout = function (req, res) {\r\n    res.clearCookie('t');\r\n    return res.status(200).json({\r\n        message: 'signed out'\r\n    });\r\n};\r\nvar requireSignin = express_jwt_1[\"default\"]({\r\n    secret: config_1[\"default\"].jwtSecret,\r\n    userProperty: 'auth',\r\n    algorithms: ['HS256'],\r\n});\r\nvar hasAuthorization = function (req, res, next) {\r\n    var authorization = req.profile && req.auth && req.profile._id == req.auth._id;\r\n    if (!authorization) {\r\n        return res.status(403).json({\r\n            error: 'User is not authorized'\r\n        });\r\n    }\r\n    next();\r\n};\r\nexports.default = {\r\n    signin: signin,\r\n    signout: signout,\r\n    requireSignin: requireSignin,\r\n    hasAuthorization: hasAuthorization\r\n};\r\n\n\n//# sourceURL=webpack://Social-Platform-ts/./server/controllers/auth.controller.ts?");

/***/ }),

/***/ "./server/controllers/user.controller.ts":
/*!***********************************************!*\
  !*** ./server/controllers/user.controller.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nexports.__esModule = true;\r\nvar User_1 = __importDefault(__webpack_require__(/*! ../models/User */ \"./server/models/User.ts\"));\r\nvar extend_1 = __importDefault(__webpack_require__(/*! lodash/extend */ \"lodash/extend\"));\r\nvar dbErrorHandler_1 = __importDefault(__webpack_require__(/*! ../helpers/dbErrorHandler */ \"./server/helpers/dbErrorHandler.ts\"));\r\nvar create = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var user, err_1;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                user = new User_1[\"default\"](req.body);\r\n                _a.label = 1;\r\n            case 1:\r\n                _a.trys.push([1, 3, , 4]);\r\n                return [4 /*yield*/, user.save()];\r\n            case 2:\r\n                _a.sent();\r\n                return [2 /*return*/, res.status(200).json({\r\n                        message: 'Successfully signed up !'\r\n                    })];\r\n            case 3:\r\n                err_1 = _a.sent();\r\n                return [2 /*return*/, res.status(400).json({\r\n                        error: dbErrorHandler_1[\"default\"].getErrorMessage(err_1)\r\n                    })];\r\n            case 4: return [2 /*return*/];\r\n        }\r\n    });\r\n}); };\r\nvar userById = function (req, res, next, id) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var user, err_2;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                _a.trys.push([0, 2, , 3]);\r\n                return [4 /*yield*/, User_1[\"default\"].findById(id)];\r\n            case 1:\r\n                user = _a.sent();\r\n                if (!user) {\r\n                    return [2 /*return*/, res.status(400).json({\r\n                            error: 'User not found'\r\n                        })];\r\n                }\r\n                req.profile = user;\r\n                next();\r\n                return [3 /*break*/, 3];\r\n            case 2:\r\n                err_2 = _a.sent();\r\n                return [2 /*return*/, res.status(400).json({\r\n                        error: 'Could not retrieve user'\r\n                    })];\r\n            case 3: return [2 /*return*/];\r\n        }\r\n    });\r\n}); };\r\nvar read = function (req, res) {\r\n    req.profile.hashed_password = undefined;\r\n    req.profile.salt = undefined;\r\n    return res.json(req.profile);\r\n};\r\nvar list = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var users, err_3;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                _a.trys.push([0, 2, , 3]);\r\n                return [4 /*yield*/, User_1[\"default\"].find().select('name email updated created')];\r\n            case 1:\r\n                users = _a.sent();\r\n                res.json(users);\r\n                return [3 /*break*/, 3];\r\n            case 2:\r\n                err_3 = _a.sent();\r\n                return [2 /*return*/, res.status(400).json({\r\n                        error: dbErrorHandler_1[\"default\"].getErrorMessage(err_3)\r\n                    })];\r\n            case 3: return [2 /*return*/];\r\n        }\r\n    });\r\n}); };\r\nvar update = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var user, err_4;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                _a.trys.push([0, 2, , 3]);\r\n                user = extend_1[\"default\"](req.profile, req.body);\r\n                user.updated = Date.now();\r\n                return [4 /*yield*/, user.save()];\r\n            case 1:\r\n                _a.sent();\r\n                user.hashed_password = undefined;\r\n                user.salt = undefined;\r\n                console.log(user, 'that\\'s all right');\r\n                res.json(user);\r\n                return [3 /*break*/, 3];\r\n            case 2:\r\n                err_4 = _a.sent();\r\n                return [2 /*return*/, res.status(400).json({\r\n                        error: dbErrorHandler_1[\"default\"].getErrorMessage(err_4)\r\n                    })];\r\n            case 3: return [2 /*return*/];\r\n        }\r\n    });\r\n}); };\r\nvar remove = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var user, deleteUser, err_5;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                _a.trys.push([0, 2, , 3]);\r\n                user = req.profile;\r\n                return [4 /*yield*/, user.remove()];\r\n            case 1:\r\n                deleteUser = _a.sent();\r\n                deleteUser.hashed_password = undefined;\r\n                deleteUser.salt = undefined;\r\n                res.json(deleteUser);\r\n                return [3 /*break*/, 3];\r\n            case 2:\r\n                err_5 = _a.sent();\r\n                return [2 /*return*/, err_5.status(400).json({\r\n                        error: dbErrorHandler_1[\"default\"].getErrorMessage(err_5)\r\n                    })];\r\n            case 3: return [2 /*return*/];\r\n        }\r\n    });\r\n}); };\r\nexports.default = {\r\n    create: create,\r\n    userById: userById,\r\n    read: read,\r\n    list: list,\r\n    update: update,\r\n    remove: remove\r\n};\r\n\n\n//# sourceURL=webpack://Social-Platform-ts/./server/controllers/user.controller.ts?");

/***/ }),

/***/ "./server/devBundle.ts":
/*!*****************************!*\
  !*** ./server/devBundle.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nexports.__esModule = true;\r\nvar webpack = __webpack_require__(/*! webpack */ \"webpack\");\r\nvar webpackMiddleware = __webpack_require__(/*! webpack-dev-middleware */ \"webpack-dev-middleware\");\r\nvar webpackConfig = __webpack_require__(/*! ../webpack.config.client */ \"./webpack.config.client.ts\");\r\nvar compile = function (app) {\r\n    if (true) {\r\n        var compiler = webpack(webpackConfig);\r\n        var middleware = webpackMiddleware(compiler, {\r\n            publicPath: webpackConfig.output.publicPath\r\n        });\r\n        app.use(middleware);\r\n    }\r\n};\r\nexports.default = {\r\n    compile: compile\r\n};\r\n\n\n//# sourceURL=webpack://Social-Platform-ts/./server/devBundle.ts?");

/***/ }),

/***/ "./server/express.tsx":
/*!****************************!*\
  !*** ./server/express.tsx ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nexports.__esModule = true;\r\nvar path_1 = __importDefault(__webpack_require__(/*! path */ \"path\"));\r\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\r\nvar body_parser_1 = __importDefault(__webpack_require__(/*! body-parser */ \"body-parser\"));\r\nvar cookie_parser_1 = __importDefault(__webpack_require__(/*! cookie-parser */ \"cookie-parser\"));\r\nvar compression_1 = __importDefault(__webpack_require__(/*! compression */ \"compression\"));\r\nvar cors_1 = __importDefault(__webpack_require__(/*! cors */ \"cors\"));\r\nvar helmet_1 = __importDefault(__webpack_require__(/*! helmet */ \"helmet\"));\r\nvar user_routes_1 = __importDefault(__webpack_require__(/*! ./routes/user.routes */ \"./server/routes/user.routes.ts\"));\r\nvar auth_routes_1 = __importDefault(__webpack_require__(/*! ./routes/auth.routes */ \"./server/routes/auth.routes.ts\"));\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar server_1 = __importDefault(__webpack_require__(/*! react-dom/server */ \"react-dom/server\"));\r\nvar MainRouter_1 = __importDefault(__webpack_require__(/*! ../client/MainRouter */ \"./client/MainRouter.tsx\"));\r\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\r\nvar styles_1 = __webpack_require__(/*! @material-ui/styles */ \"@material-ui/styles\");\r\nvar theme_1 = __webpack_require__(/*! ../client/theme */ \"./client/theme.ts\");\r\nvar template_1 = __importDefault(__webpack_require__(/*! ../template */ \"./template.ts\"));\r\nvar devBundle_1 = __importDefault(__webpack_require__(/*! ./devBundle */ \"./server/devBundle.ts\"));\r\nvar app = express_1[\"default\"]();\r\nvar CURRENT_WORKING_DIR = process.cwd();\r\ndevBundle_1[\"default\"].compile(app);\r\napp.use(body_parser_1[\"default\"].json());\r\napp.use(body_parser_1[\"default\"].urlencoded({ extended: true }));\r\napp.use(cookie_parser_1[\"default\"]());\r\napp.use(compression_1[\"default\"]());\r\napp.use(helmet_1[\"default\"]());\r\napp.use(cors_1[\"default\"]());\r\napp.use('/dist', express_1[\"default\"].static(path_1[\"default\"].join(CURRENT_WORKING_DIR, 'dist')));\r\napp.use('/', user_routes_1[\"default\"]);\r\napp.use('/', auth_routes_1[\"default\"]);\r\napp.get('*', function (req, res) {\r\n    var sheets = new styles_1.ServerStyleSheets();\r\n    var context = {};\r\n    var markup = server_1[\"default\"].renderToString(sheets.collect(react_1[\"default\"].createElement(react_router_dom_1.StaticRouter, { location: req.url, context: context },\r\n        react_1[\"default\"].createElement(styles_1.ThemeProvider, { theme: theme_1.theme },\r\n            react_1[\"default\"].createElement(MainRouter_1[\"default\"], null)))));\r\n    if (context.url) {\r\n        return res.redirect(303, context.url);\r\n    }\r\n    var css = sheets.toString();\r\n    res.status(200).send(template_1[\"default\"]({\r\n        markup: markup,\r\n        css: css\r\n    }));\r\n});\r\napp.use(function (err, req, res, next) {\r\n    if (err.name === 'UnauthorizedError') {\r\n        res.status(401).json({ \"error\": err.name + \": \" + err.message });\r\n    }\r\n    else if (err) {\r\n        res.status(400).json({ \"error\": err.name + \": \" + err.message });\r\n        console.log(err);\r\n    }\r\n});\r\nexports.default = app;\r\n\n\n//# sourceURL=webpack://Social-Platform-ts/./server/express.tsx?");

/***/ }),

/***/ "./server/helpers/dbErrorHandler.ts":
/*!******************************************!*\
  !*** ./server/helpers/dbErrorHandler.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nexports.__esModule = true;\r\nvar getUniqueErrorMessage = function (err) {\r\n    try {\r\n        var fieldName = err.message.substring(err.message.lastIndexOf('.$') + 2, err.message.lastIndexOf('_1'));\r\n        return fieldName.charAt(0).toUpperCase();\r\n    }\r\n    catch (err) {\r\n        return 'Unique field already exists';\r\n    }\r\n};\r\nvar getErrorMessage = function (err) {\r\n    var message = '';\r\n    if (err.code) {\r\n        switch (err.code) {\r\n            case 11000:\r\n            case 11001:\r\n                message = getUniqueErrorMessage(err);\r\n                break;\r\n            default:\r\n                message = 'Something went wrong';\r\n        }\r\n    }\r\n    else {\r\n        for (var errName in err.errors) {\r\n            if (err.errors[errName].message)\r\n                message = err.errors[errName].message;\r\n        }\r\n    }\r\n    return message;\r\n};\r\nexports.default = { getErrorMessage: getErrorMessage };\r\n\n\n//# sourceURL=webpack://Social-Platform-ts/./server/helpers/dbErrorHandler.ts?");

/***/ }),

/***/ "./server/models/User.ts":
/*!*******************************!*\
  !*** ./server/models/User.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nexports.__esModule = true;\r\nvar mongoose_1 = __importStar(__webpack_require__(/*! mongoose */ \"mongoose\"));\r\nvar crypto_1 = __importDefault(__webpack_require__(/*! crypto */ \"crypto\"));\r\nvar UserSchema = new mongoose_1.Schema({\r\n    name: {\r\n        type: String,\r\n        trim: true,\r\n        required: 'Name is required'\r\n    },\r\n    email: {\r\n        type: String,\r\n        trim: true,\r\n        unique: 'Email already exists',\r\n        match: [/.+\\@.+\\..+/, 'Please fill a valid email address'],\r\n        required: 'Email is required'\r\n    },\r\n    hashed_password: {\r\n        type: String,\r\n        required: \"Password is required\"\r\n    },\r\n    salt: String,\r\n    updated: Date,\r\n    created: {\r\n        type: Date,\r\n        \"default\": Date.now\r\n    }\r\n});\r\nUserSchema\r\n    .virtual('password')\r\n    .set(function (password) {\r\n    this._password = password;\r\n    this.salt = this.makeSalt();\r\n    this.hashed_password = this.encryptPassword(password);\r\n})\r\n    .get(function () {\r\n    return this._password;\r\n});\r\nUserSchema.path('hashed_password').validate(function (v) {\r\n    if (this._password && this._password.length < 6) {\r\n        this.invalidate('password', 'Password must be at least 6 characters.');\r\n    }\r\n    if (this.isNew && !this._password) {\r\n        this.invalidate('password', 'Password is required');\r\n    }\r\n}, null);\r\nUserSchema.methods = {\r\n    authenticate: function (plainText) {\r\n        return this.encryptPassword(plainText) === this.hashed_password;\r\n    },\r\n    encryptPassword: function (password) {\r\n        if (!password)\r\n            return '';\r\n        try {\r\n            return crypto_1[\"default\"]\r\n                .createHash('sha1', this.salt)\r\n                .update(password)\r\n                .digest('hex');\r\n        }\r\n        catch (err) {\r\n            return '';\r\n        }\r\n    },\r\n    makeSalt: function () {\r\n        return Math.round((new Date().valueOf() * Math.random())) + '';\r\n    }\r\n};\r\nexports.default = mongoose_1[\"default\"].model('User', UserSchema);\r\n\n\n//# sourceURL=webpack://Social-Platform-ts/./server/models/User.ts?");

/***/ }),

/***/ "./server/routes/auth.routes.ts":
/*!**************************************!*\
  !*** ./server/routes/auth.routes.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nexports.__esModule = true;\r\nvar express_1 = __webpack_require__(/*! express */ \"express\");\r\nvar auth_controller_1 = __importDefault(__webpack_require__(/*! ../controllers/auth.controller */ \"./server/controllers/auth.controller.ts\"));\r\nvar router = express_1.Router();\r\nrouter.route('/auth/signin')\r\n    .post(auth_controller_1[\"default\"].signin);\r\nrouter.route('/auth/signout')\r\n    .get(auth_controller_1[\"default\"].signout);\r\nexports.default = router;\r\n\n\n//# sourceURL=webpack://Social-Platform-ts/./server/routes/auth.routes.ts?");

/***/ }),

/***/ "./server/routes/user.routes.ts":
/*!**************************************!*\
  !*** ./server/routes/user.routes.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nexports.__esModule = true;\r\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\r\nvar user_controller_1 = __importDefault(__webpack_require__(/*! ../controllers/user.controller */ \"./server/controllers/user.controller.ts\"));\r\nvar auth_controller_1 = __importDefault(__webpack_require__(/*! ../controllers/auth.controller */ \"./server/controllers/auth.controller.ts\"));\r\nvar router = express_1[\"default\"].Router();\r\nrouter.route('/api/users')\r\n    .get(user_controller_1[\"default\"].list)\r\n    .post(user_controller_1[\"default\"].create);\r\nrouter.route('/api/users/:userId')\r\n    .get(auth_controller_1[\"default\"].requireSignin, user_controller_1[\"default\"].read)\r\n    .put(auth_controller_1[\"default\"].requireSignin, auth_controller_1[\"default\"].hasAuthorization, user_controller_1[\"default\"].update)[\"delete\"](auth_controller_1[\"default\"].requireSignin, auth_controller_1[\"default\"].hasAuthorization, user_controller_1[\"default\"].remove);\r\nrouter.param('userId', user_controller_1[\"default\"].userById);\r\nexports.default = router;\r\n\n\n//# sourceURL=webpack://Social-Platform-ts/./server/routes/user.routes.ts?");

/***/ }),

/***/ "./server/server.ts":
/*!**************************!*\
  !*** ./server/server.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nexports.__esModule = true;\r\nvar express_1 = __importDefault(__webpack_require__(/*! ./express */ \"./server/express.tsx\"));\r\nvar config_1 = __importDefault(__webpack_require__(/*! ../config/config */ \"./config/config.ts\"));\r\nvar mongoose_1 = __importDefault(__webpack_require__(/*! mongoose */ \"mongoose\"));\r\nmongoose_1[\"default\"].Promise = global.Promise;\r\nmongoose_1[\"default\"].connect(config_1[\"default\"].mongoUri, {\r\n    useNewUrlParser: true,\r\n    useUnifiedTopology: true,\r\n    useFindAndModify: false,\r\n    useCreateIndex: true\r\n});\r\nmongoose_1[\"default\"].connection.on('error', function () {\r\n    throw new Error(\"unable to connect to database: \" + config_1[\"default\"].mongoUri);\r\n});\r\nexpress_1[\"default\"].listen(config_1[\"default\"].port, function () { return __awaiter(void 0, void 0, void 0, function () {\r\n    return __generator(this, function (_a) {\r\n        console.log('Server has been started on port %s.', config_1[\"default\"].port);\r\n        return [2 /*return*/];\r\n    });\r\n}); });\r\n\n\n//# sourceURL=webpack://Social-Platform-ts/./server/server.ts?");

/***/ }),

/***/ "./template.ts":
/*!*********************!*\
  !*** ./template.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nexports.__esModule = true;\r\nexports.default = (function (_a) {\r\n    var markup = _a.markup, css = _a.css;\r\n    return \"\\n    <!DOCTYPE html>\\n    <html lang=\\\"en\\\">\\n    <head>\\n        <meta charset=\\\"UTF-8\\\">\\n        <meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"IE=edge\\\">\\n        <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\n        <title>Document</title>\\n        <style>\\n            a {\\n                text-decoration: none;\\n                color: #061d95\\n            }\\n        </style>\\n    </head>\\n    <body>\\n        <div id=\\\"root\\\">\" + markup + \"</div>\\n        <style id=\\\"jss-server-side\\\">\" + css + \"</style>\\n        <script type=\\\"text/javascript\\\" src=\\\"/dist/bundle.js\\\"></script>\\n    </body>\\n    </html>\";\r\n});\r\n\n\n//# sourceURL=webpack://Social-Platform-ts/./template.ts?");

/***/ }),

/***/ "./webpack.config.client.ts":
/*!**********************************!*\
  !*** ./webpack.config.client.ts ***!
  \**********************************/
/***/ (function(module, exports, __webpack_require__) {

eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nexports.__esModule = true;\r\nvar webpack = __importStar(__webpack_require__(/*! webpack */ \"webpack\"));\r\nvar path = __webpack_require__(/*! path */ \"path\");\r\nvar CURRENT_WORKING_DIR = process.cwd();\r\nvar config = {\r\n    name: 'browser',\r\n    mode: 'development',\r\n    devtool: 'inline-source-map',\r\n    entry: path.join(CURRENT_WORKING_DIR, 'client/main.tsx'),\r\n    output: {\r\n        path: path.join(CURRENT_WORKING_DIR, '/dist'),\r\n        filename: 'bundle.js',\r\n        publicPath: '/dist/'\r\n    },\r\n    resolve: {\r\n        extensions: ['.tsx', '.ts', '.js'],\r\n        fallback: {\r\n            path: /*require.resolve*/(/*! path-browserify */ \"path-browserify\")\r\n        }\r\n    },\r\n    module: {\r\n        rules: [\r\n            {\r\n                test: /\\.tsx?$/,\r\n                use: {\r\n                    loader: 'ts-loader',\r\n                },\r\n                exclude: '/node_modules/'\r\n            }\r\n        ]\r\n    },\r\n    plugins: [\r\n        new webpack.HotModuleReplacementPlugin(),\r\n        new webpack.NoEmitOnErrorsPlugin()\r\n    ],\r\n};\r\nmodule.exports = config;\r\n\n\n//# sourceURL=webpack://Social-Platform-ts/./webpack.config.client.ts?");

/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@material-ui/core");;

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("@material-ui/core/styles");;

/***/ }),

/***/ "@material-ui/icons":
/*!*************************************!*\
  !*** external "@material-ui/icons" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("@material-ui/icons");;

/***/ }),

/***/ "@material-ui/styles":
/*!**************************************!*\
  !*** external "@material-ui/styles" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("@material-ui/styles");;

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("body-parser");;

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("compression");;

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("cookie-parser");;

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("cors");;

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");;

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");;

/***/ }),

/***/ "express-jwt":
/*!******************************!*\
  !*** external "express-jwt" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("express-jwt");;

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("helmet");;

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");;

/***/ }),

/***/ "lodash/extend":
/*!********************************!*\
  !*** external "lodash/extend" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("lodash/extend");;

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");;

/***/ }),

/***/ "path-browserify":
/*!**********************************!*\
  !*** external "path-browserify" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("path-browserify");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");;

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-dom/server");;

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-router-dom");;

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("webpack");;

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = require("webpack-dev-middleware");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./server/server.ts");
/******/ })()
;