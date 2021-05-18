(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/common/http'), require('@angular/core'), require('@angular/forms'), require('epsgis'), require('ng-zorro-antd/icon'), require('ng-zorro-antd/input'), require('ng-zorro-antd/input-number'), require('ng-zorro-antd/tree'), require('ng-zorro-antd/tree-view'), require('ng-zorro-antd/popover'), require('ng-zorro-antd/divider'), require('ng-zorro-antd/select'), require('ng-zorro-antd/button'), require('ng-zorro-antd/menu'), require('ng-zorro-antd/dropdown'), require('ng-zorro-antd/grid'), require('ng-zorro-antd/slider'), require('ng-zorro-antd/tabs'), require('ng-zorro-antd/modal'), require('ng-zorro-antd/table'), require('ng-zorro-antd/switch'), require('ng-zorro-antd/tooltip'), require('ng-zorro-antd/form'), require('lodash'), require('ng-zorro-antd/core/transition-patch'), require('ng-zorro-antd/core/wave'), require('turf')) :
    typeof define === 'function' && define.amd ? define('epsplanet', ['exports', '@angular/common', '@angular/common/http', '@angular/core', '@angular/forms', 'epsgis', 'ng-zorro-antd/icon', 'ng-zorro-antd/input', 'ng-zorro-antd/input-number', 'ng-zorro-antd/tree', 'ng-zorro-antd/tree-view', 'ng-zorro-antd/popover', 'ng-zorro-antd/divider', 'ng-zorro-antd/select', 'ng-zorro-antd/button', 'ng-zorro-antd/menu', 'ng-zorro-antd/dropdown', 'ng-zorro-antd/grid', 'ng-zorro-antd/slider', 'ng-zorro-antd/tabs', 'ng-zorro-antd/modal', 'ng-zorro-antd/table', 'ng-zorro-antd/switch', 'ng-zorro-antd/tooltip', 'ng-zorro-antd/form', 'lodash', 'ng-zorro-antd/core/transition-patch', 'ng-zorro-antd/core/wave', 'turf'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.epsplanet = {}, global.ng.common, global.ng.common.http, global.ng.core, global.ng.forms, global.epsgis, global.i1$1, global.input, global.i6, global.i2, global.treeView, global.i1$3, global.i4$2, global.select, global.i4$1, global.menu, global.i1$2, global.i3, global.i4, global.i2$3, global.modal, global.i5$2, global._switch, global.tooltip, global.form, global.lodash, global.i2$1, global.i5$1, global.turf));
}(this, (function (exports, i2$2, http, i0, i5, i1, i1$1, input, i6, i2, treeView, i1$3, i4$2, select, i4$1, menu, i1$2, i3, i4, i2$3, modal, i5$2, _switch, tooltip, form, lodash, i2$1, i5$1, turf) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var turf__default = /*#__PURE__*/_interopDefaultLegacy(turf);

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from) {
        for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
            to[j] = from[i];
        return to;
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    (function (LayerType) {
        LayerType["Imagery"] = "Imagery";
        LayerType["Tileset"] = "Tileset";
        LayerType["Terrain"] = "Terrain";
    })(exports.LayerType || (exports.LayerType = {}));
    (function (LayerServiceSource) {
        LayerServiceSource[LayerServiceSource["ArcGis"] = 0] = "ArcGis";
        LayerServiceSource[LayerServiceSource["SuperMap"] = 1] = "SuperMap";
        LayerServiceSource[LayerServiceSource["TianDiTu"] = 2] = "TianDiTu";
        LayerServiceSource[LayerServiceSource["BaiDu"] = 3] = "BaiDu";
        LayerServiceSource[LayerServiceSource["GaoDe"] = 4] = "GaoDe";
        LayerServiceSource[LayerServiceSource["EpsPlanet"] = 5] = "EpsPlanet";
    })(exports.LayerServiceSource || (exports.LayerServiceSource = {}));

    function newXbsjFolderNode(title) {
        return {
            title: title,
            children: []
        };
    }
    function newXbsjLayerNode(type, title, url) {
        var _type = type.toLocaleLowerCase();
        var result = { czmObject: null };
        switch (_type) {
            case exports.LayerType.Imagery.toLocaleLowerCase():
                result.czmObject = newXbsjImageryLayerNode(title, url);
                break;
            case exports.LayerType.Tileset.toLocaleLowerCase():
                result.czmObject = newXbsjTilesetLayerNode(title, url);
                break;
            case exports.LayerType.Terrain.toLocaleLowerCase():
                result.czmObject = newXbsjTerrainLayerNode(title, url);
                break;
            default:
                break;
        }
        return result;
    }
    function newXbsjImageryLayerNode(title, url) {
        var node = {
            xbsjType: exports.LayerType.Imagery,
            name: title,
            enable: true,
            show: true,
            xbsjImageryProvider: {
                XbsjImageryProvider: {
                    url: url
                }
            }
        };
        return node;
    }
    function newXbsjTilesetLayerNode(title, url) {
        var node = {
            xbsjType: exports.LayerType.Tileset,
            name: title,
            url: url,
            enable: true,
            show: true,
        };
        return node;
    }
    function newXbsjTerrainLayerNode(title, url) {
        return {
            xbsjType: exports.LayerType.Terrain,
            name: title,
            enable: true,
            show: true,
            xbsjTerrainProvider: {
                type: "XbsjCesiumTerrainProvider",
                XbsjEllipsoidTerrainProvider: {},
                XbsjCesiumTerrainProvider: {
                    url: url,
                    requestVertexNormals: true,
                    requestWaterMask: true
                }
            }
        };
    }

    var SceneTreeUtils = /** @class */ (function () {
        function SceneTreeUtils() {
        }
        SceneTreeUtils.SceneTree2NgZorroTree = function (root) {
            var _a;
            if (!root || !root.children || root.children.length <= 0) {
                return root;
            }
            var rootNode = null;
            if (root.title && root.title !== "未命名") {
                rootNode = new i2.NzTreeNode({
                    title: root.title,
                    expanded: root.expand === true,
                    key: root.guid || root.xbsjGuid || i1.IdGenerater.newGuid(),
                    origin: root,
                    isLeaf: false,
                    parentNode: null
                });
                rootNode.level = -1;
            }
            var _layerNodes = [];
            if (rootNode) {
                (_a = rootNode.children).push.apply(_a, __spread(SceneTreeUtils.convertChildren(root.children, rootNode)));
                _layerNodes.push(rootNode);
            }
            else {
                _layerNodes.push.apply(_layerNodes, __spread(SceneTreeUtils.convertChildren(root.children, rootNode)));
            }
            return _layerNodes;
        };
        SceneTreeUtils.convertChildren = function (children, parentNode) {
            if (!children || children.length <= 0) {
                return [];
            }
            var _layerNodes = [];
            children.forEach(function (item) {
                var _a;
                var node = null;
                if (item.children) {
                    node = new i2.NzTreeNode({
                        level: parentNode.level + 1,
                        title: item.title,
                        isExpanded: item.expand === true,
                        key: item.guid || item.xbsjGuid || i1.IdGenerater.newGuid(),
                        origin: item,
                        isLeaf: false,
                        parentNode: parentNode
                    });
                    node.parentNode = parentNode;
                    node.level = parentNode.level + 1;
                    if (item.children.length >= 1) {
                        (_a = node.children).push.apply(_a, __spread(SceneTreeUtils.convertChildren(item.children, node)));
                    }
                    var checkList_1 = [];
                    node.children.forEach(function (child) {
                        if (child.children && child.children.length > 0) {
                            checkList_1.push(child.isChecked);
                        }
                        else {
                            if (child.origin.origin.show) {
                                checkList_1.push(true);
                            }
                            else {
                                checkList_1.push(false);
                            }
                        }
                    });
                    if (SceneTreeUtils.isAllEqual(checkList_1) && checkList_1[0] == true) {
                        node.isChecked = true;
                    }
                    else if (SceneTreeUtils.isAllEqual(checkList_1) && checkList_1[0] == false) {
                        node.isChecked = false;
                    }
                    else if (!SceneTreeUtils.isAllEqual(checkList_1)) {
                        node.isHalfChecked = true;
                    }
                    _layerNodes.push(node);
                }
                else {
                    var childNode = SceneTreeUtils.convertCzmObject(item.czmObject, parentNode);
                    childNode.parentNode = childNode.origin.parentNode;
                    childNode.level = childNode.parentNode.level + 1;
                    _layerNodes.push(childNode);
                }
            });
            return _layerNodes;
        };
        SceneTreeUtils.isAllEqual = function (array) {
            if (array.length > 0) {
                return !array.some(function (value, index) {
                    return value !== array[0];
                });
            }
            else {
                return true;
            }
        };
        SceneTreeUtils.convertCzmObject = function (czmObject, parentNode) {
            if (!czmObject) {
                return null;
            }
            return new i2.NzTreeNode({
                title: czmObject.name,
                key: czmObject.guid || czmObject.xbsjGuid || i1.IdGenerater.newGuid(),
                origin: czmObject,
                isLeaf: true,
                checked: czmObject.show,
                parentNode: parentNode
            });
        };
        SceneTreeUtils.GetXbsjCzmObject = function (node) {
            return node && node.origin && node.origin.origin;
        };
        SceneTreeUtils.loadLayers = function (layerConfig) {
            if (!layerConfig) {
                return null;
            }
            if (!layerConfig.basemaps && !layerConfig.layers) {
                return null;
            }
            var _layerNodes = [];
            var _layerlist = [
                {
                    "title": "basemap",
                    "ref": "basemap",
                    "children": [],
                },
                {
                    "title": "layerlist",
                    "ref": "layerlist",
                    "children": [],
                },
                {
                    "tilte": "pin",
                    "ref": "pin",
                    "children": []
                }
            ];
            if (typeof layerConfig.basemaps === "object" && lodash.isArray(layerConfig.basemaps)) {
                layerConfig.basemaps.forEach(function (item) {
                    _layerlist[0].children.push(SceneTreeUtils.loadLayerNode(item));
                });
            }
            if (typeof layerConfig.layers === "object" && lodash.isArray(layerConfig.layers)) {
                layerConfig.layers.forEach(function (item) {
                    _layerlist[1].children.push(SceneTreeUtils.loadLayerNode(item));
                });
            }
            return { children: _layerlist };
        };
        SceneTreeUtils.loadLayerNode = function (item) {
            if (lodash.isArray(item.children)) {
                var node_1 = newXbsjFolderNode(item.title);
                if (item.children && item.children.length >= 1) {
                    item.children.forEach(function (child) {
                        node_1.children.push(SceneTreeUtils.loadLayerNode(child));
                    });
                }
                return node_1;
            }
            else if (item.url || item.layer) {
                var node = newXbsjLayerNode(item.type, item.title, item.url);
                node.czmObject.xbsjGuid = item.guid;
                node.czmObject.show = item.show ? true : false;
                node.ref = item.ref;
                if (node.czmObject.hasOwnProperty("xbsjImageryProvider")) {
                    if (item.srcCoordType) {
                        node.czmObject.xbsjImageryProvider.XbsjImageryProvider.srcCoordType = item.srcCoordType;
                    }
                    if (item.dstCoordType) {
                        node.czmObject.xbsjImageryProvider.XbsjImageryProvider.dstCoordType = item.dstCoordType;
                    }
                }
                else if (node.czmObject.hasOwnProperty("xbsjTerrainProvider")) {
                }
                else if (node.hasOwnProperty("url")) {
                }
                if (item.extendOptions) {
                    node.czmObject = Object.assign(node.czmObject, item.extendOptions);
                }
                return node;
            }
            return null;
        };
        return SceneTreeUtils;
    }());

    var _c0 = ["earthContainer"];
    function PlanetEarthComponent_ng_template_2_Template(rf, ctx) { }
    exports.PlanetEarthComponent = /** @class */ (function (_super) {
        __extends(PlanetEarthComponent, _super);
        function PlanetEarthComponent(componentLoader) {
            var _this = _super.call(this, componentLoader) || this;
            _this.componentLoader = componentLoader;
            _this.resources = [
                "XbsjEarth/XbsjEarth.js"
            ];
            return _this;
        }
        PlanetEarthComponent.getCompInfo = function () {
            return { name: "PlanetEarthComponent", path: "epsplanet/components/earth" };
        };
        PlanetEarthComponent.prototype.ngOnInit = function () {
            _super.prototype.ngOnInit.call(this);
            this.is3D = true;
        };
        PlanetEarthComponent.prototype.initMap = function () {
            var _this = this;
            this.is3D = true;
            return new Promise(function (resolve, reject) {
                var jsApi = _this.appConfig.map.jsApi;
                if (!jsApi) {
                    reject("没有配置jsApi");
                    return;
                }
                var resFullPaths = [];
                _this.resources.forEach(function (path) {
                    resFullPaths.push(jsApi + "/" + path);
                });
                i1.simpleLoader.loadResources(resFullPaths, null, null, function () {
                    var XE = window["XE"];
                    if (!XE) {
                        reject("XE undefined");
                        return;
                    }
                    XE.ready().then(function () {
                        var _a;
                        var earth = new XE.Earth("earthContainer", {
                            homeButton: true,
                            timeline: false,
                            sceneModePicker: true
                        });
                        earth.interaction.picking.enabled = true;
                        earth.interaction.picking.hoverEnable = true;
                        var layerNode = SceneTreeUtils.loadLayers(_this.config).children;
                        console.log(layerNode);
                        (_a = earth.sceneTree.root.children).push.apply(_a, __spread(layerNode));
                        earth.camera.navigator.showCompass = true;
                        earth.camera.navigator.showDistanceLegend = true;
                        window["earth"] = earth;
                        if (_this.config.mapOptions && _this.config.mapOptions.center) {
                            var x = 116.26984645340727, y = 40.10171604578351, h = 230;
                            if (_this.config.mapOptions.center.length >= 1) {
                                x = _this.config.mapOptions.center[0];
                            }
                            if (_this.config.mapOptions.center.length >= 2) {
                                y = _this.config.mapOptions.center[1];
                            }
                            if (_this.config.mapOptions.center.length >= 3) {
                                h = _this.config.mapOptions.center[2];
                            }
                            earth.czm.viewer.camera.flyTo({
                                destination: Cesium.Cartesian3.fromDegrees(x, y, h),
                                orientation: {
                                    heading: Cesium.Math.toRadians(5),
                                    pitch: Cesium.Math.toRadians(-36.0),
                                }
                            });
                        }
                        resolve(earth);
                    });
                });
            });
        };
        return PlanetEarthComponent;
    }(i1.BaseMapComponent));
    exports.PlanetEarthComponent.ɵfac = function PlanetEarthComponent_Factory(t) { return new (t || exports.PlanetEarthComponent)(i0.ɵɵdirectiveInject(i1.ComponentLoaderService)); };
    exports.PlanetEarthComponent.ɵcmp = i0.ɵɵdefineComponent({ type: exports.PlanetEarthComponent, selectors: [["epsgis-planet-earth"]], viewQuery: function PlanetEarthComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵviewQuery(_c0, 3);
            }
            if (rf & 2) {
                var _t = void 0;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.earthContainer = _t.first);
            }
        }, features: [i0.ɵɵInheritDefinitionFeature], decls: 3, vars: 0, consts: [["id", "earthContainer", 1, "earthContainer"], ["earthContainer", ""], ["component-host", ""]], template: function PlanetEarthComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelement(0, "div", 0, 1);
                i0.ɵɵtemplate(2, PlanetEarthComponent_ng_template_2_Template, 0, 0, "ng-template", 2);
            }
        }, directives: [i1.ComponentContainerDirective], styles: [".earthContainer[_ngcontent-%COMP%]{width:100%;height:100%;background:grey}"] });
    exports.PlanetEarthComponent = __decorate([
        i1.ComponentRegister({
            uri: "epsgis-planet-earth",
            path: "epsplanet/components/earth",
            name: "PlanetEarthComponent"
        })
    ], exports.PlanetEarthComponent);
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(exports.PlanetEarthComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'epsgis-planet-earth',
                        templateUrl: './earth.component.html',
                        styleUrls: ['./earth.component.scss'],
                    }]
            }], function () { return [{ type: i1.ComponentLoaderService }]; }, { earthContainer: [{
                    type: i0.ViewChild,
                    args: ["earthContainer", { static: true }]
                }] });
    })();

    var BasePlanetWidgetComponent = /** @class */ (function (_super) {
        __extends(BasePlanetWidgetComponent, _super);
        function BasePlanetWidgetComponent() {
            var _this = _super.call(this) || this;
            _this._isVue = true;
            _this.watchers = [];
            return _this;
        }
        BasePlanetWidgetComponent.prototype.getCesiumView = function () {
            if (this.view) {
                return this.view.czm.viewer;
            }
            return null;
        };
        BasePlanetWidgetComponent.prototype.$watch = function (propertyName, func, param) {
            this.watchers.push(i1.PropWatcher.watch(this, propertyName, function (prop, oldval, newval) {
                func.call(func);
            }));
        };
        BasePlanetWidgetComponent.prototype.ngOnDestroy = function () {
            _super.prototype.ngOnDestroy.call(this);
            if (this.watchers && this.watchers.length >= 1) {
                this.watchers.forEach(function (f) { return f.call(f); });
            }
            this.watchers.length = 0;
        };
        return BasePlanetWidgetComponent;
    }(i1.BaseWidgetComponent));
    BasePlanetWidgetComponent.ɵfac = function BasePlanetWidgetComponent_Factory(t) { return new (t || BasePlanetWidgetComponent)(); };
    BasePlanetWidgetComponent.ɵdir = i0.ɵɵdefineDirective({ type: BasePlanetWidgetComponent, features: [i0.ɵɵInheritDefinitionFeature] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BasePlanetWidgetComponent, [{
                type: i0.Directive
            }], function () { return []; }, null);
    })();

    exports.PlanetHomeComponent = /** @class */ (function (_super) {
        __extends(PlanetHomeComponent, _super);
        function PlanetHomeComponent() {
            return _super.call(this) || this;
        }
        PlanetHomeComponent.getCompInfo = function () {
            return { path: "epsplanet/components/home" };
        };
        PlanetHomeComponent.prototype.ngOnInit = function () {
            this.view.czm.viewer.homeButton._container.hidden = true;
        };
        PlanetHomeComponent.prototype.onMouseClick = function (evt) {
            this.view.czm.viewer.homeButton._element.click();
        };
        return PlanetHomeComponent;
    }(BasePlanetWidgetComponent));
    exports.PlanetHomeComponent.ɵfac = function PlanetHomeComponent_Factory(t) { return new (t || exports.PlanetHomeComponent)(); };
    exports.PlanetHomeComponent.ɵcmp = i0.ɵɵdefineComponent({ type: exports.PlanetHomeComponent, selectors: [["epsgis-planet-home"]], hostAttrs: ["title", "home"], hostVars: 2, hostBindings: function PlanetHomeComponent_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵlistener("click", function PlanetHomeComponent_click_HostBindingHandler($event) { return ctx.onMouseClick($event); });
            }
            if (rf & 2) {
                i0.ɵɵclassProp("jimu-widget-onscreen-icon", true);
            }
        }, features: [i0.ɵɵInheritDefinitionFeature], decls: 1, vars: 1, consts: [["nz-icon", "", 3, "nzIconfont"]], template: function PlanetHomeComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelement(0, "i", 0);
            }
            if (rf & 2) {
                i0.ɵɵproperty("nzIconfont", "icon-epsgis-home");
            }
        }, directives: [i1$1.NzIconDirective, i2$1.ɵNzTransitionPatchDirective], encapsulation: 2 });
    exports.PlanetHomeComponent = __decorate([
        i1.ComponentRegister({
            uri: "epsgis-planet-home",
            path: "epsplanet/components/home",
            name: "PlanetHomeComponent"
        })
    ], exports.PlanetHomeComponent);
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(exports.PlanetHomeComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'epsgis-planet-home',
                        template: "<i  nz-icon [nzIconfont]=\"'icon-epsgis-home'\"> </i>",
                        host: {
                            "[class.jimu-widget-onscreen-icon]": "true",
                            "title": "home"
                        }
                    }]
            }], function () { return []; }, { onMouseClick: [{
                    type: i0.HostListener,
                    args: ['click', ['$event']]
                }] });
    })();

    var _c0$1 = function () { return { marginLeft: "16px" }; };
    function PlanetLayerManagerComponent_div_0_nz_row_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r5_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "nz-row");
            i0.ɵɵelementStart(1, "nz-col", 3);
            i0.ɵɵelementStart(2, "span");
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "nz-col", 4);
            i0.ɵɵelementStart(5, "nz-slider", 5);
            i0.ɵɵlistener("ngModelChange", function PlanetLayerManagerComponent_div_0_nz_row_1_Template_nz_slider_ngModelChange_5_listener($event) { i0.ɵɵrestoreView(_r5_1); var item_r3 = ctx.$implicit; var ctx_r4 = i0.ɵɵnextContext(2); return (ctx_r4.selectedNode["origin"][item_r3.en] = $event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "nz-col", 6);
            i0.ɵɵelementStart(7, "nz-input-number", 7);
            i0.ɵɵlistener("ngModelChange", function PlanetLayerManagerComponent_div_0_nz_row_1_Template_nz_input_number_ngModelChange_7_listener($event) { i0.ɵɵrestoreView(_r5_1); var item_r3 = ctx.$implicit; var ctx_r6 = i0.ɵɵnextContext(2); return (ctx_r6.selectedNode["origin"][item_r3.en] = $event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var item_r3 = ctx.$implicit;
            var ctx_r2 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(item_r3.zh);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("nzMin", 0)("nzMax", 1)("nzStep", 0.01)("ngModel", ctx_r2.selectedNode["origin"][item_r3.en]);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("nzMin", 0)("nzMax", 1)("nzStep", 0.01)("ngStyle", i0.ɵɵpureFunction0(10, _c0$1))("ngModel", ctx_r2.selectedNode["origin"][item_r3.en]);
        }
    }
    function PlanetLayerManagerComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 1);
            i0.ɵɵtemplate(1, PlanetLayerManagerComponent_div_0_nz_row_1_Template, 8, 11, "nz-row", 2);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx_r0.config.basemapSchema);
        }
    }
    function PlanetLayerManagerComponent_div_1_nz_row_1_nz_col_4_Template(rf, ctx) {
        if (rf & 1) {
            var _r18_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "nz-col", 4);
            i0.ɵɵelementStart(1, "nz-slider", 5);
            i0.ɵɵlistener("ngModelChange", function PlanetLayerManagerComponent_div_1_nz_row_1_nz_col_4_Template_nz_slider_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r18_1); var item_r8 = i0.ɵɵnextContext().$implicit; var ctx_r17 = i0.ɵɵnextContext(2); return (ctx_r17.selectedNode["origin"][item_r8.en][1] = $event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var item_r8 = i0.ɵɵnextContext().$implicit;
            var ctx_r9 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("nzMin", 0)("nzMax", 1)("nzStep", 0.01)("ngModel", ctx_r9.selectedNode["origin"][item_r8.en][1]);
        }
    }
    function PlanetLayerManagerComponent_div_1_nz_row_1_nz_col_5_Template(rf, ctx) {
        if (rf & 1) {
            var _r22_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "nz-col", 4);
            i0.ɵɵelementStart(1, "nz-slider", 5);
            i0.ɵɵlistener("ngModelChange", function PlanetLayerManagerComponent_div_1_nz_row_1_nz_col_5_Template_nz_slider_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r22_1); var item_r8 = i0.ɵɵnextContext().$implicit; var ctx_r21 = i0.ɵɵnextContext(2); return (ctx_r21.selectedNode["origin"][item_r8.en][0] = $event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var item_r8 = i0.ɵɵnextContext().$implicit;
            var ctx_r10 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("nzMin", 0)("nzMax", 1)("nzStep", 0.01)("ngModel", ctx_r10.selectedNode["origin"][item_r8.en][0]);
        }
    }
    function PlanetLayerManagerComponent_div_1_nz_row_1_nz_col_6_Template(rf, ctx) {
        if (rf & 1) {
            var _r26_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "nz-col", 4);
            i0.ɵɵelementStart(1, "nz-slider", 5);
            i0.ɵɵlistener("ngModelChange", function PlanetLayerManagerComponent_div_1_nz_row_1_nz_col_6_Template_nz_slider_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r26_1); var item_r8 = i0.ɵɵnextContext().$implicit; var ctx_r25 = i0.ɵɵnextContext(2); return (ctx_r25.selectedNode["origin"][item_r8.en] = $event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var item_r8 = i0.ɵɵnextContext().$implicit;
            var ctx_r11 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("nzMin", 0)("nzMax", 256)("nzStep", 1)("ngModel", ctx_r11.selectedNode["origin"][item_r8.en]);
        }
    }
    function PlanetLayerManagerComponent_div_1_nz_row_1_nz_col_7_Template(rf, ctx) {
        if (rf & 1) {
            var _r30_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "nz-col", 4);
            i0.ɵɵelementStart(1, "nz-slider", 5);
            i0.ɵɵlistener("ngModelChange", function PlanetLayerManagerComponent_div_1_nz_row_1_nz_col_7_Template_nz_slider_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r30_1); var item_r8 = i0.ɵɵnextContext().$implicit; var ctx_r29 = i0.ɵɵnextContext(2); return (ctx_r29.selectedNode["origin"][item_r8.en] = $event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var item_r8 = i0.ɵɵnextContext().$implicit;
            var ctx_r12 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("nzMin", 0)("nzMax", 5)("nzStep", 0.01)("ngModel", ctx_r12.selectedNode["origin"][item_r8.en]);
        }
    }
    function PlanetLayerManagerComponent_div_1_nz_row_1_nz_col_8_Template(rf, ctx) {
        if (rf & 1) {
            var _r34_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "nz-col", 6);
            i0.ɵɵelementStart(1, "nz-input-number", 7);
            i0.ɵɵlistener("ngModelChange", function PlanetLayerManagerComponent_div_1_nz_row_1_nz_col_8_Template_nz_input_number_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r34_1); var item_r8 = i0.ɵɵnextContext().$implicit; var ctx_r33 = i0.ɵɵnextContext(2); return (ctx_r33.selectedNode["origin"][item_r8.en][1] = $event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var item_r8 = i0.ɵɵnextContext().$implicit;
            var ctx_r13 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("nzMin", 0)("nzMax", 1)("nzStep", 0.01)("ngStyle", i0.ɵɵpureFunction0(5, _c0$1))("ngModel", ctx_r13.selectedNode["origin"][item_r8.en][1]);
        }
    }
    function PlanetLayerManagerComponent_div_1_nz_row_1_nz_col_9_Template(rf, ctx) {
        if (rf & 1) {
            var _r38_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "nz-col", 6);
            i0.ɵɵelementStart(1, "nz-input-number", 7);
            i0.ɵɵlistener("ngModelChange", function PlanetLayerManagerComponent_div_1_nz_row_1_nz_col_9_Template_nz_input_number_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r38_1); var item_r8 = i0.ɵɵnextContext().$implicit; var ctx_r37 = i0.ɵɵnextContext(2); return (ctx_r37.selectedNode["origin"][item_r8.en][0] = $event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var item_r8 = i0.ɵɵnextContext().$implicit;
            var ctx_r14 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("nzMin", 0)("nzMax", 1)("nzStep", 0.01)("ngStyle", i0.ɵɵpureFunction0(5, _c0$1))("ngModel", ctx_r14.selectedNode["origin"][item_r8.en][0]);
        }
    }
    function PlanetLayerManagerComponent_div_1_nz_row_1_nz_col_10_Template(rf, ctx) {
        if (rf & 1) {
            var _r42_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "nz-col", 6);
            i0.ɵɵelementStart(1, "nz-input-number", 7);
            i0.ɵɵlistener("ngModelChange", function PlanetLayerManagerComponent_div_1_nz_row_1_nz_col_10_Template_nz_input_number_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r42_1); var item_r8 = i0.ɵɵnextContext().$implicit; var ctx_r41 = i0.ɵɵnextContext(2); return (ctx_r41.selectedNode["origin"][item_r8.en] = $event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var item_r8 = i0.ɵɵnextContext().$implicit;
            var ctx_r15 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("nzMin", 0)("nzMax", 256)("nzStep", 1)("ngStyle", i0.ɵɵpureFunction0(5, _c0$1))("ngModel", ctx_r15.selectedNode["origin"][item_r8.en]);
        }
    }
    function PlanetLayerManagerComponent_div_1_nz_row_1_nz_col_11_Template(rf, ctx) {
        if (rf & 1) {
            var _r46_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "nz-col", 6);
            i0.ɵɵelementStart(1, "nz-input-number", 7);
            i0.ɵɵlistener("ngModelChange", function PlanetLayerManagerComponent_div_1_nz_row_1_nz_col_11_Template_nz_input_number_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r46_1); var item_r8 = i0.ɵɵnextContext().$implicit; var ctx_r45 = i0.ɵɵnextContext(2); return (ctx_r45.selectedNode["origin"][item_r8.en] = $event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var item_r8 = i0.ɵɵnextContext().$implicit;
            var ctx_r16 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("nzMin", 0)("nzMax", 5)("nzStep", 0.01)("ngStyle", i0.ɵɵpureFunction0(5, _c0$1))("ngModel", ctx_r16.selectedNode["origin"][item_r8.en]);
        }
    }
    function PlanetLayerManagerComponent_div_1_nz_row_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "nz-row");
            i0.ɵɵelementStart(1, "nz-col", 3);
            i0.ɵɵelementStart(2, "span");
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(4, PlanetLayerManagerComponent_div_1_nz_row_1_nz_col_4_Template, 2, 4, "nz-col", 8);
            i0.ɵɵtemplate(5, PlanetLayerManagerComponent_div_1_nz_row_1_nz_col_5_Template, 2, 4, "nz-col", 8);
            i0.ɵɵtemplate(6, PlanetLayerManagerComponent_div_1_nz_row_1_nz_col_6_Template, 2, 4, "nz-col", 8);
            i0.ɵɵtemplate(7, PlanetLayerManagerComponent_div_1_nz_row_1_nz_col_7_Template, 2, 4, "nz-col", 8);
            i0.ɵɵtemplate(8, PlanetLayerManagerComponent_div_1_nz_row_1_nz_col_8_Template, 2, 6, "nz-col", 9);
            i0.ɵɵtemplate(9, PlanetLayerManagerComponent_div_1_nz_row_1_nz_col_9_Template, 2, 6, "nz-col", 9);
            i0.ɵɵtemplate(10, PlanetLayerManagerComponent_div_1_nz_row_1_nz_col_10_Template, 2, 6, "nz-col", 9);
            i0.ɵɵtemplate(11, PlanetLayerManagerComponent_div_1_nz_row_1_nz_col_11_Template, 2, 6, "nz-col", 9);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var item_r8 = ctx.$implicit;
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(item_r8.zh);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", item_r8.zh == "\u955C\u9762\u5F3A\u5EA6");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", item_r8.zh == "\u6563\u5C04\u5F3A\u5EA6");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", item_r8.zh == "\u663E\u793A\u7CBE\u5EA6");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", item_r8.zh == "\u6750\u8D28\u5E95\u8272");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", item_r8.zh == "\u955C\u9762\u5F3A\u5EA6");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", item_r8.zh == "\u6563\u5C04\u5F3A\u5EA6");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", item_r8.zh == "\u663E\u793A\u7CBE\u5EA6");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", item_r8.zh == "\u6750\u8D28\u5E95\u8272");
        }
    }
    function PlanetLayerManagerComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 1);
            i0.ɵɵtemplate(1, PlanetLayerManagerComponent_div_1_nz_row_1_Template, 12, 9, "nz-row", 2);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx_r1.config.tilesSchema);
        }
    }
    exports.PlanetLayerManagerComponent = /** @class */ (function (_super) {
        __extends(PlanetLayerManagerComponent, _super);
        function PlanetLayerManagerComponent(nzContextMenuService) {
            var _this = _super.call(this) || this;
            _this.nzContextMenuService = nzContextMenuService;
            _this.config = {
                "basemapSchema": [
                    { "en": "alpha", "zh": "透明度" },
                    { "en": "brightness", "zh": "亮度" },
                    { "en": "saturation", "zh": "饱和度" },
                    { "en": "contrast", "zh": "对比度" },
                    { "en": "hue", "zh": "色相" },
                    { "en": "gamma", "zh": "伽马" }
                ],
                "tilesSchema": [
                    {
                        "en": "maximumScreenSpaceError",
                        "zh": "显示精度"
                    },
                    {
                        "en": "imageBasedLightingFactor",
                        "zh": "散射强度"
                    },
                    {
                        "en": "luminanceAtZenith",
                        "zh": "材质底色"
                    },
                    {
                        "en": "imageBasedLightingFactor",
                        "zh": "镜面强度"
                    }
                ]
            };
            _this.layerNodes = [];
            return _this;
        }
        PlanetLayerManagerComponent.prototype.openFolder = function (data) {
            console.log(data);
            if (data instanceof i2.NzTreeNode) {
                data.isExpanded = !data.isExpanded;
            }
            else {
                var node = data.node;
                if (node) {
                    node.isExpanded = !node.isExpanded;
                }
            }
        };
        PlanetLayerManagerComponent.prototype.activeNode = function (data) {
            this.activatedNode = data.node;
        };
        PlanetLayerManagerComponent.prototype.contextMenu = function ($event, menu) {
            this.nzContextMenuService.create($event, menu);
        };
        PlanetLayerManagerComponent.prototype.selectDropdown = function () {
        };
        PlanetLayerManagerComponent.getCompInfo = function () {
            return { name: "PlanetLayerManagerComponent", path: "epsplanet/components/layer-manager" };
        };
        PlanetLayerManagerComponent.prototype.ngOnInit = function () {
            _super.prototype.ngOnInit.call(this);
        };
        PlanetLayerManagerComponent.prototype.loadlocate = function () {
            var _this = this;
            var isshow, _layers, layer, format, style, tileMatrixSet;
            var wmts = new XE.Tool.WMTSParser();
            var url = "http://jojo1986.f3322.net:8888/geoserver/gwc/service/wmts?REQUEST=GetCapabilities";
            wmts
                .parser(url)
                .then(function (layers) {
                var _a;
                console.log(layers);
                isshow = false;
                _layers = layers;
                if (layers.length == 0) {
                    console.log("server has no supproted layers", "warning");
                }
                else {
                    layer = layers[0];
                    console.log(layer.rectangle);
                    format = layer.urls[0].format;
                    style = layer.styles[0].id;
                    tileMatrixSet = layer.tileMatrixSets[0];
                    _this.view.sceneTree.root.children.push({
                        "czmObject": {
                            "xbsjType": "Imagery",
                            "name": layer.title,
                            "xbsjImageryProvider": {
                                "XbsjImageryProvider": {},
                                "UrlTemplateImageryProvider": {},
                                "WebMapTileServiceImageryProvider": {
                                    "url": layer.urls[0].template,
                                    "format": format,
                                    "layer": layer.title,
                                    "style": style,
                                    "tileMatrixSetID": tileMatrixSet.tileMatrixSetID,
                                    "tileMatrixLabels": tileMatrixSet.params.tileMatrixLabels,
                                    "tilingScheme": tileMatrixSet.params.tilingScheme,
                                    "maximumLevel": tileMatrixSet.maximumLevel
                                },
                                "createTileMapServiceImageryProvider": {},
                                "type": "WebMapTileServiceImageryProvider"
                            }
                        }
                    });
                    var viewer = window['earth'].czm.viewer;
                    viewer.camera.flyTo({
                        destination: (_a = Cesium.Rectangle).fromDegrees.apply(_a, __spread(layer.rectangle))
                    });
                }
            })
                .catch(function (err) {
                isshow = false;
                console.log("GetCapabilities failed:" + err.message, "error");
            });
        };
        PlanetLayerManagerComponent.prototype.test = function () {
            var _this = this;
            setTimeout(function () {
                console.log(_this.selectedNode);
            }, 100);
        };
        PlanetLayerManagerComponent.prototype.onDblClickNode = function ($event) {
            console.log($event.node.origin.origin);
        };
        PlanetLayerManagerComponent.prototype.onCheckedChange = function (evt) {
            if (evt.eventName !== "check" || !evt.node) {
                return;
            }
            if (evt.node.isChecked) {
                SceneTreeUtils.GetXbsjCzmObject(evt.node).show = true;
            }
            else {
                SceneTreeUtils.GetXbsjCzmObject(evt.node).show = false;
            }
        };
        PlanetLayerManagerComponent.prototype.onRightClick = function ($event) {
        };
        PlanetLayerManagerComponent.prototype.ngAfterViewInit = function () {
            _super.prototype.ngAfterViewInit.call(this);
        };
        PlanetLayerManagerComponent.prototype.ngOnDestroy = function () {
            _super.prototype.ngOnDestroy.call(this);
        };
        return PlanetLayerManagerComponent;
    }(BasePlanetWidgetComponent));
    exports.PlanetLayerManagerComponent.ɵfac = function PlanetLayerManagerComponent_Factory(t) { return new (t || exports.PlanetLayerManagerComponent)(i0.ɵɵdirectiveInject(i1$2.NzContextMenuService)); };
    exports.PlanetLayerManagerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: exports.PlanetLayerManagerComponent, selectors: [["epsgis-planet-layer-manager"]], inputs: { selectedNode: "selectedNode", type: "type" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 2, vars: 2, consts: [["class", "schema", 4, "ngIf"], [1, "schema"], [4, "ngFor", "ngForOf"], ["nzSpan", "4"], ["nzSpan", "14"], [3, "nzMin", "nzMax", "nzStep", "ngModel", "ngModelChange"], ["nzSpan", "2"], [3, "nzMin", "nzMax", "nzStep", "ngStyle", "ngModel", "ngModelChange"], ["nzSpan", "14", 4, "ngIf"], ["nzSpan", "2", 4, "ngIf"]], template: function PlanetLayerManagerComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵtemplate(0, PlanetLayerManagerComponent_div_0_Template, 2, 1, "div", 0);
                i0.ɵɵtemplate(1, PlanetLayerManagerComponent_div_1_Template, 2, 1, "div", 0);
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngIf", ctx.type == "\u5F71\u50CF");
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.type !== "\u5F71\u50CF");
            }
        }, directives: [i2$2.NgIf, i2$2.NgForOf, i3.NzRowDirective, i3.NzColDirective, i4.NzSliderComponent, i5.NgControlStatus, i5.NgModel, i6.NzInputNumberComponent, i2$2.NgStyle], styles: ["nz-row[_ngcontent-%COMP%]{font-size:10px}nz-input-number[_ngcontent-%COMP%]{width:70px;height:30px}"] });
    exports.PlanetLayerManagerComponent = __decorate([
        i1.ComponentRegister({
            uri: "epsgis-planet-layer-manager",
            path: "epsplanet/components/layer-manager",
            name: "PlanetLayerManagerComponent"
        })
    ], exports.PlanetLayerManagerComponent);
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(exports.PlanetLayerManagerComponent, [{
                type: i0.Component,
                args: [{
                        selector: "epsgis-planet-layer-manager",
                        templateUrl: "./layer-manager.component.html",
                        styleUrls: ["./layer-manager.component.scss"]
                    }]
            }], function () { return [{ type: i1$2.NzContextMenuService }]; }, { selectedNode: [{
                    type: i0.Input
                }], type: [{
                    type: i0.Input
                }] });
    })();

    function PlanetLayerListComponent_ng_template_2_span_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span");
            i0.ɵɵelementStart(1, "span", 6);
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var node_r3 = i0.ɵɵnextContext().$implicit;
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(node_r3.title);
        }
    }
    function PlanetLayerListComponent_ng_template_2_span_2_Template(rf, ctx) {
        if (rf & 1) {
            var _r10_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "span", 7);
            i0.ɵɵelementStart(1, "span", 6);
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "i", 8);
            i0.ɵɵlistener("click", function PlanetLayerListComponent_ng_template_2_span_2_Template_i_click_3_listener() { i0.ɵɵrestoreView(_r10_1); var node_r3 = i0.ɵɵnextContext().$implicit; var ctx_r8 = i0.ɵɵnextContext(); return ctx_r8.setting(node_r3); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "i", 9);
            i0.ɵɵlistener("click", function PlanetLayerListComponent_ng_template_2_span_2_Template_i_click_4_listener() { i0.ɵɵrestoreView(_r10_1); var node_r3 = i0.ɵɵnextContext().$implicit; var ctx_r11 = i0.ɵɵnextContext(); return ctx_r11.flyTo(node_r3); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var node_r3 = i0.ɵɵnextContext().$implicit;
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(node_r3.title);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("nzIconfont", "icon-epsgis-setting");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("nzIconfont", "icon-epsgis-wodeweizhi1");
        }
    }
    function PlanetLayerListComponent_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span", 3);
            i0.ɵɵtemplate(1, PlanetLayerListComponent_ng_template_2_span_1_Template, 3, 1, "span", 4);
            i0.ɵɵtemplate(2, PlanetLayerListComponent_ng_template_2_span_2_Template, 5, 3, "span", 5);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var node_r3 = ctx.$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !node_r3.isLeaf);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", node_r3.isLeaf);
        }
    }
    exports.PlanetLayerListComponent = /** @class */ (function (_super) {
        __extends(PlanetLayerListComponent, _super);
        function PlanetLayerListComponent(modalService) {
            var _this = _super.call(this) || this;
            _this.modalService = modalService;
            _this.testnode = [
                {
                    title: 'parent 0',
                    key: '100',
                    author: 'NG ZORRO',
                    children: [
                        { title: 'leaf 0-0', key: '1000', author: 'NG ZORRO' },
                        { title: 'leaf 0-1', key: '1001', author: 'NG ZORRO', isLeaf: true }
                    ]
                },
                {
                    title: 'parent 1',
                    key: '101',
                    author: 'NG ZORRO',
                    children: [
                        { title: 'leaf 1-0', key: '1010', author: 'NG ZORRO', isLeaf: true },
                        { title: 'leaf 1-1', key: '1011', author: 'NG ZORRO', isLeaf: true }
                    ]
                }
            ];
            _this.layerNodes = [];
            _this.listOfData = [];
            _this.isShow = false;
            return _this;
        }
        PlanetLayerListComponent.getCompInfo = function () {
            return { name: "PlanetLayerListComponent", path: "epsplanet/components/layer-list" };
        };
        PlanetLayerListComponent.prototype.ngOnInit = function () {
            var _this = this;
            var uw3 = XE.MVVM.watch(function () { return __spread(_this.view.sceneTree.root.children); }, function () {
                _this.loadSceneTree();
            });
        };
        PlanetLayerListComponent.prototype.openFolder = function (data) {
            console.log(data);
            if (data instanceof i2.NzTreeNode) {
                data.isExpanded = !data.isExpanded;
            }
            else {
                var node = data.node;
                if (node) {
                    node.isExpanded = !node.isExpanded;
                }
            }
        };
        PlanetLayerListComponent.prototype.loadSceneTree = function () {
            var _this = this;
            setTimeout(function () {
                var _layerNodes = SceneTreeUtils.SceneTree2NgZorroTree(_this.view.sceneTree.$refs.layerlist);
                console.log("sceneTree:", _layerNodes);
                _this.layerNodes = _layerNodes[0]["children"];
                console.log(_this.layerNodes);
            }, 100);
        };
        PlanetLayerListComponent.prototype.setting = function (node) {
            console.log(this.config);
            this.selectedNode = node.origin;
            this.type = this.selectedNode["origin"].hasOwnProperty('luminanceAtZenith') ? "瓦片" : "影像";
            this.isShow = true;
            this.modalService.create({
                title: "图层“" + node.title + "”参数",
                content: exports.PlanetLayerManagerComponent,
                componentParams: {
                    selectedNode: this.selectedNode,
                    type: this.type
                },
                footer: null,
                mask: false,
                width: 320
            });
        };
        PlanetLayerListComponent.prototype.flyTo = function (node) {
            node.origin.origin.flyTo();
            console.log(node);
        };
        PlanetLayerListComponent.prototype.onLeftClickNode = function (evt) {
            console.log(evt.node);
            this.selectedNode = evt.node.origin;
        };
        PlanetLayerListComponent.prototype.onCheckedChange = function (evt) {
            console.log(evt);
            if (evt.eventName !== "check" || !evt.node) {
                return;
            }
            if (evt.node.children.length == 0) {
                if (evt.node.isChecked) {
                    SceneTreeUtils.GetXbsjCzmObject(evt.node).show = true;
                }
                else {
                    SceneTreeUtils.GetXbsjCzmObject(evt.node).show = false;
                }
            }
            else {
                if (evt.node.isChecked) {
                    evt.node.children.forEach(function (item) {
                        SceneTreeUtils.GetXbsjCzmObject(item).show = true;
                    });
                }
                else {
                    evt.node.children.forEach(function (item) {
                        SceneTreeUtils.GetXbsjCzmObject(item).show = false;
                    });
                }
            }
        };
        PlanetLayerListComponent.prototype.onDblClickNode = function (evt) {
            if (evt.eventName !== "dblclick" || !evt.node) {
                return;
            }
            SceneTreeUtils.GetXbsjCzmObject(evt.node).flyTo();
        };
        PlanetLayerListComponent.prototype.onRightClick = function (evt) {
        };
        return PlanetLayerListComponent;
    }(BasePlanetWidgetComponent));
    exports.PlanetLayerListComponent.ɵfac = function PlanetLayerListComponent_Factory(t) { return new (t || exports.PlanetLayerListComponent)(i0.ɵɵdirectiveInject(i1.ModalManagerService)); };
    exports.PlanetLayerListComponent.ɵcmp = i0.ɵɵdefineComponent({ type: exports.PlanetLayerListComponent, selectors: [["epsgis-planet-layer-list"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 4, vars: 2, consts: [["nzBlockNode", "", "nzCheckable", "", 3, "nzData", "nzTreeTemplate", "nzClick", "nzDblClick", "nzCheckBoxChange", "nzContextMenu"], ["nzTreeComponent", ""], ["nzTreeTemplate", ""], [1, "custom-node"], [4, "ngIf"], ["class", "leaf", 4, "ngIf"], [1, "folder-name"], [1, "leaf"], ["title", "\u53C2\u6570\u8C03\u6574", "nz-icon", "", 2, "float", "right", 3, "nzIconfont", "click"], ["title", "\u7F29\u653E\u81F3", "nz-icon", "", 2, "float", "right", 3, "nzIconfont", "click"]], template: function PlanetLayerListComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "nz-tree", 0, 1);
                i0.ɵɵlistener("nzClick", function PlanetLayerListComponent_Template_nz_tree_nzClick_0_listener($event) { return ctx.onLeftClickNode($event); })("nzDblClick", function PlanetLayerListComponent_Template_nz_tree_nzDblClick_0_listener($event) { return ctx.onDblClickNode($event); })("nzCheckBoxChange", function PlanetLayerListComponent_Template_nz_tree_nzCheckBoxChange_0_listener($event) { return ctx.onCheckedChange($event); })("nzContextMenu", function PlanetLayerListComponent_Template_nz_tree_nzContextMenu_0_listener($event) { return ctx.onRightClick($event); });
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(2, PlanetLayerListComponent_ng_template_2_Template, 3, 2, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
            }
            if (rf & 2) {
                var _r1 = i0.ɵɵreference(3);
                i0.ɵɵproperty("nzData", ctx.layerNodes)("nzTreeTemplate", _r1);
            }
        }, directives: [i2.NzTreeComponent, i2$2.NgIf, i1$1.NzIconDirective, i2$1.ɵNzTransitionPatchDirective], styles: ["i[_ngcontent-%COMP%]{font-size:16px;margin-right:5px}i[_ngcontent-%COMP%]:hover{font-size:20px}  .sspanel_content{overflow:overlay!important}  .leaf .ant-tree-checkbox-inner{left:30px}"] });
    exports.PlanetLayerListComponent = __decorate([
        i1.ComponentRegister({
            uri: "epsgis-planet-layer-list",
            path: "epsplanet/components/layer-list",
            name: "PlanetLayerListComponent"
        })
    ], exports.PlanetLayerListComponent);
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(exports.PlanetLayerListComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'epsgis-planet-layer-list',
                        templateUrl: './layer-list.component.html',
                        styleUrls: ['./layer-list.component.scss'],
                    }]
            }], function () { return [{ type: i1.ModalManagerService }]; }, null);
    })();

    function PlanetLocationComponent_div_8_Template(rf, ctx) {
        if (rf & 1) {
            var _r2_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵelementStart(1, "span");
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "nz-input-number", 3);
            i0.ɵɵlistener("ngModelChange", function PlanetLocationComponent_div_8_Template_nz_input_number_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r2_1); var ctx_r1 = i0.ɵɵnextContext(); return ctx_r1.ZValue = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx_r0.item.Z.label);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngModel", ctx_r0.ZValue)("nzStep", 1)("nzPlaceHolder", ctx_r0.item.Z.placeHolder);
        }
    }
    exports.PlanetLocationComponent = /** @class */ (function (_super) {
        __extends(PlanetLocationComponent, _super);
        function PlanetLocationComponent() {
            var _this = _super.call(this) || this;
            _this.XValue = 0;
            _this.YValue = 0;
            _this.ZValue = 0;
            _this.item4326 = {
                X: {
                    label: "经度：",
                    min: "-180",
                    max: "180",
                    placeHolder: "请输入经度"
                },
                Y: {
                    label: "纬度：",
                    min: "-90",
                    max: "90",
                    placeHolder: "请输入纬度"
                },
                Z: {
                    label: "高度：",
                    placeHolder: "请输入高度"
                }
            };
            _this.itemOther = {
                X: {
                    label: "X：",
                    min: "-99999999",
                    max: "99999999",
                    placeHolder: "请输入横坐标"
                },
                Y: {
                    label: "Y：",
                    min: "-99999999",
                    max: "99999999",
                    placeHolder: "请输入纵坐标"
                }
            };
            _this.item = _this.item4326;
            return _this;
        }
        PlanetLocationComponent.prototype.ngOnInit = function () {
            _super.prototype.ngOnInit.call(this);
            this.initialize();
        };
        PlanetLocationComponent.getCompInfo = function () {
            return { path: "epsplanet/components/location" };
        };
        PlanetLocationComponent.prototype.initialize = function () {
            this.XValue = this.config.longitude;
            this.YValue = this.config.latitude;
            this.ZValue = this.config.height;
        };
        PlanetLocationComponent.prototype.location = function () {
            var position = null;
            if (this.markerXY) {
                this.view.czm.viewer.entities.remove(this.markerXY);
            }
            if (true) {
                position = Cesium.Cartesian3.fromDegrees(this.XValue, this.YValue, this.ZValue);
            }
            else {
            }
            this.markerXY = new Cesium.Entity({
                id: '视角定位坐标',
                position: position,
                point: {
                    pixelSize: 6,
                    color: Cesium.Color.WHITE.withAlpha(0.9),
                    outlineColor: Cesium.Color.WHITE.withAlpha(0.9),
                    outlineWidth: 1
                },
                billboard: {
                    image: this.folderUrl + "images/location4.png",
                    horizontalOrigin: Cesium.HorizontalOrigin.CENTER,
                    verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
                    scale: .6
                },
            });
            this.view.czm.viewer.entities.add(this.markerXY);
            this.view.czm.camera.setView({
                destination: position
            });
        };
        PlanetLocationComponent.prototype.ngOnDestroy = function () {
            _super.prototype.ngOnDestroy.call(this);
        };
        return PlanetLocationComponent;
    }(BasePlanetWidgetComponent));
    exports.PlanetLocationComponent.ɵfac = function PlanetLocationComponent_Factory(t) { return new (t || exports.PlanetLocationComponent)(); };
    exports.PlanetLocationComponent.ɵcmp = i0.ɵɵdefineComponent({ type: exports.PlanetLocationComponent, selectors: [["epsgis-planet-location"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 12, vars: 13, consts: [[3, "ngModel", "nzMin", "nzMax", "nzStep", "nzPlaceHolder", "ngModelChange"], [4, "ngIf"], ["nz-button", "", "nzType", "primary", 3, "click"], [3, "ngModel", "nzStep", "nzPlaceHolder", "ngModelChange"]], template: function PlanetLocationComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div");
                i0.ɵɵelementStart(1, "span");
                i0.ɵɵtext(2);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(3, "nz-input-number", 0);
                i0.ɵɵlistener("ngModelChange", function PlanetLocationComponent_Template_nz_input_number_ngModelChange_3_listener($event) { return ctx.XValue = $event; });
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(4, "div");
                i0.ɵɵelementStart(5, "span");
                i0.ɵɵtext(6);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(7, "nz-input-number", 0);
                i0.ɵɵlistener("ngModelChange", function PlanetLocationComponent_Template_nz_input_number_ngModelChange_7_listener($event) { return ctx.YValue = $event; });
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(8, PlanetLocationComponent_div_8_Template, 4, 4, "div", 1);
                i0.ɵɵelementStart(9, "div");
                i0.ɵɵelementStart(10, "button", 2);
                i0.ɵɵlistener("click", function PlanetLocationComponent_Template_button_click_10_listener() { return ctx.location(); });
                i0.ɵɵtext(11, "\u5B9A\u4F4D");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(2);
                i0.ɵɵtextInterpolate(ctx.item.X.label);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngModel", ctx.XValue)("nzMin", ctx.item.X.min)("nzMax", ctx.item.X.max)("nzStep", 0.0001)("nzPlaceHolder", ctx.item.X.placeHolder);
                i0.ɵɵadvance(3);
                i0.ɵɵtextInterpolate(ctx.item.Y.label);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngModel", ctx.YValue)("nzMin", ctx.item.Y.min)("nzMax", ctx.item.Y.max)("nzStep", 0.0001)("nzPlaceHolder", ctx.item.Y.placeHolder);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.item.Z);
            }
        }, directives: [i6.NzInputNumberComponent, i5.NgControlStatus, i5.NgModel, i2$2.NgIf, i4$1.NzButtonComponent, i5$1.NzWaveDirective, i2$1.ɵNzTransitionPatchDirective], styles: ["div[_ngcontent-%COMP%]{margin-bottom:5px;text-align:center}nz-input-number[_ngcontent-%COMP%]{width:80%}"] });
    exports.PlanetLocationComponent = __decorate([
        i1.ComponentRegister({
            uri: "epsgis-planet-location",
            path: "epsplanet/components/location",
            name: "PlanetLocationComponent"
        })
    ], exports.PlanetLocationComponent);
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(exports.PlanetLocationComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'epsgis-planet-location',
                        templateUrl: './location.component.html',
                        styleUrls: ['./location.component.scss'],
                    }]
            }], function () { return []; }, null);
    })();

    function PlanetModeSwitchComponent_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(1, "svg", 3);
            i0.ɵɵelement(2, "path", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementContainerEnd();
        }
    }
    function PlanetModeSwitchComponent_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(1, "svg", 3);
            i0.ɵɵelement(2, "path", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementContainerEnd();
        }
    }
    function PlanetModeSwitchComponent_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(1, "svg", 3);
            i0.ɵɵelement(2, "path", 6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementContainerEnd();
        }
    }
    function PlanetModeSwitchComponent_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
            var _r6_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 7);
            i0.ɵɵelementStart(1, "div", 8);
            i0.ɵɵlistener("click", function PlanetModeSwitchComponent_ng_template_4_Template_div_click_1_listener() { i0.ɵɵrestoreView(_r6_1); var ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.changeViewMode("3d"); });
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(2, "svg", 9);
            i0.ɵɵelement(3, "path", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(4, "div", 8);
            i0.ɵɵlistener("click", function PlanetModeSwitchComponent_ng_template_4_Template_div_click_4_listener() { i0.ɵɵrestoreView(_r6_1); var ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.changeViewMode("2d"); });
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(5, "svg", 9);
            i0.ɵɵelement(6, "path", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(7, "div", 8);
            i0.ɵɵlistener("click", function PlanetModeSwitchComponent_ng_template_4_Template_div_click_7_listener() { i0.ɵɵrestoreView(_r6_1); var ctx_r8 = i0.ɵɵnextContext(); return ctx_r8.changeViewMode("columbus"); });
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(8, "svg", 9);
            i0.ɵɵelement(9, "path", 6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
    }
    exports.PlanetModeSwitchComponent = /** @class */ (function (_super) {
        __extends(PlanetModeSwitchComponent, _super);
        function PlanetModeSwitchComponent() {
            var _this = _super.call(this) || this;
            _this.viewType = '3d';
            return _this;
        }
        PlanetModeSwitchComponent.getCompInfo = function () {
            return { name: "PlanetModeSwitchComponent", path: "epsplanet/components/mode-switch" };
        };
        PlanetModeSwitchComponent.prototype.clickMe = function () {
            this.visible = false;
        };
        PlanetModeSwitchComponent.prototype.change = function (value) {
            console.log(value);
        };
        PlanetModeSwitchComponent.prototype.changeViewMode = function (type) {
            var _this = this;
            if (type == "2d") {
                Promise.resolve().then(function () { _this.view.czm.viewer.scene.morphTo2D(1); });
            }
            else if (type == "columbus") {
                Promise.resolve().then(function () { _this.view.czm.viewer.scene.morphToColumbusView(1); });
            }
            else {
                Promise.resolve().then(function () { _this.view.czm.viewer.scene.morphTo3D(1); });
            }
            this.viewType = type;
        };
        return PlanetModeSwitchComponent;
    }(BasePlanetWidgetComponent));
    exports.PlanetModeSwitchComponent.ɵfac = function PlanetModeSwitchComponent_Factory(t) { return new (t || exports.PlanetModeSwitchComponent)(); };
    exports.PlanetModeSwitchComponent.ɵcmp = i0.ɵɵdefineComponent({ type: exports.PlanetModeSwitchComponent, selectors: [["epsgis-planet-mode-switch"]], hostAttrs: ["title", "\u6A21\u5F0F\u5207\u6362"], hostVars: 2, hostBindings: function PlanetModeSwitchComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
                i0.ɵɵclassProp("jimu-widget-onscreen-icon", true);
            }
        }, features: [i0.ɵɵInheritDefinitionFeature], decls: 6, vars: 6, consts: [["nz-popover", "", "nzPopoverTrigger", "click", 1, "icon", 3, "nzPopoverVisible", "nzPopoverContent", "nzPopoverPlacement", "nzPopoverVisibleChange"], [4, "ngIf"], ["contentTemplate", ""], ["width", "32", "height", "32", "viewBox", "0 0 64 64", 1, ""], ["d", "m 32.401392,4.9330437 c -7.087603,0 -14.096095,2.884602 -19.10793,7.8946843 -5.0118352,5.010083 -7.9296167,11.987468 -7.9296167,19.072999 0,7.085531 2.9177815,14.097848 7.9296167,19.107931 4.837653,4.835961 11.541408,7.631372 18.374354,7.82482 0.05712,0.01231 0.454119,0.139729 0.454119,0.139729 l 0.03493,-0.104797 c 0.08246,7.84e-4 0.162033,0.03493 0.244525,0.03493 0.08304,0 0.161515,-0.03414 0.244526,-0.03493 l 0.03493,0.104797 c 0,0 0.309474,-0.129487 0.349323,-0.139729 6.867765,-0.168094 13.582903,-2.965206 18.444218,-7.82482 2.558195,-2.5573 4.551081,-5.638134 5.903547,-8.977584 1.297191,-3.202966 2.02607,-6.661489 2.02607,-10.130347 0,-6.237309 -2.366261,-12.31219 -6.322734,-17.116794 -0.0034,-0.02316 0.0049,-0.04488 0,-0.06986 -0.01733,-0.08745 -0.104529,-0.278855 -0.104797,-0.279458 -5.31e-4,-0.0012 -0.522988,-0.628147 -0.523984,-0.62878         -3.47e-4,-2.2e-4 -0.133444,-0.03532 -0.244525,-0.06987 C 51.944299,13.447603 51.751076,13.104317 51.474391,12.827728 46.462556,7.8176457 39.488996,4.9330437 32.401392,4.9330437 z m -2.130866,3.5281554 0.104797,9.6762289 c -4.111695,-0.08361 -7.109829,-0.423664 -9.257041,-0.943171 1.198093,-2.269271 2.524531,-4.124404 3.91241,-5.414496 2.167498,-2.0147811 3.950145,-2.8540169 5.239834,-3.3185619 z m 2.794579,0 c 1.280302,0.4754953 3.022186,1.3285948 5.065173,3.2486979 1.424667,1.338973 2.788862,3.303645 3.982275,5.728886 -2.29082,0.403367 -5.381258,0.621049 -8.942651,0.698645 L 33.065105,8.4611991 z m 5.728886,0.2445256 c 4.004072,1.1230822 7.793098,3.1481363 10.724195,6.0782083 0.03468,0.03466 0.07033,0.06991 0.104797,0.104797 -0.45375,0.313891 -0.923054,0.663002 -1.956205,1.082899 -0.647388,0.263114 -1.906242,0.477396 -2.829511,0.733577 -1.382296,-2.988132         -3.027146,-5.368585 -4.785716,-7.0213781 -0.422866,-0.397432 -0.835818,-0.6453247 -1.25756,-0.9781032 z m -15.33525,0.7685092 c -0.106753,0.09503 -0.207753,0.145402 -0.31439,0.244526 -1.684973,1.5662541 -3.298068,3.8232211 -4.680919,6.5672591 -0.343797,-0.14942 -1.035052,-0.273198 -1.292493,-0.419186 -0.956528,-0.542427 -1.362964,-1.022024 -1.537018,-1.292493 -0.0241,-0.03745 -0.01868,-0.0401 -0.03493,-0.06986 2.250095,-2.163342 4.948824,-3.869984 7.859752,-5.0302421 z m -9.641296,7.0912431 c 0.464973,0.571618 0.937729,1.169056 1.956205,1.746612 0.349907,0.198425 1.107143,0.335404 1.537018,0.523983 -1.20166,3.172984 -1.998037,7.051901 -2.165798,11.772162 C 14.256557,30.361384 12.934823,30.161483 12.280427,29.90959 10.644437,29.279855 9.6888882,28.674891 9.1714586,28.267775 8.6540289,27.860658 8.6474751,27.778724 8.6474751,27.778724 l -0.069864,0.03493 C 9.3100294,23.691285         11.163248,19.798527 13.817445,16.565477 z m 37.552149,0.523984 c 2.548924,3.289983 4.265057,7.202594 4.890513,11.318043 -0.650428,0.410896 -1.756876,1.001936 -3.563088,1.606882 -1.171552,0.392383 -3.163859,0.759153 -4.960377,1.117832 -0.04367,-4.752703 -0.784809,-8.591423 -1.88634,-11.807094 0.917574,-0.263678 2.170552,-0.486495 2.864443,-0.76851 1.274693,-0.518066 2.003942,-1.001558 2.654849,-1.467153 z m -31.439008,2.619917 c 2.487341,0.672766 5.775813,1.137775 10.479669,1.222628 l 0.104797,10.689263 0,0.03493 0,0.733577 c -5.435005,-0.09059 -9.512219,-0.519044 -12.610536,-1.117831 0.106127,-4.776683 0.879334,-8.55791 2.02607,-11.562569 z m 23.264866,0.31439 c 1.073459,3.067541 1.833795,6.821314 1.816476,11.702298 -3.054474,0.423245 -7.062018,0.648559 -11.702298,0.698644 l 0,-0.838373 -0.104796,-10.654331 c 4.082416,-0.0864 7.404468,-0.403886 9.990618,-0.908238 z         M 8.2632205,30.922625 c 0.7558676,0.510548 1.5529563,1.013339 3.0041715,1.57195 0.937518,0.360875 2.612202,0.647642 3.91241,0.978102 0.112814,3.85566 0.703989,7.107756 1.606883,9.920754 -1.147172,-0.324262 -2.644553,-0.640648 -3.423359,-0.978102 -1.516688,-0.657177 -2.386627,-1.287332 -2.864443,-1.71168 -0.477816,-0.424347 -0.489051,-0.489051 -0.489051,-0.489051 L 9.8002387,40.319395 C 8.791691,37.621767 8.1584238,34.769583 8.1584238,31.900727 c 0,-0.330153 0.090589,-0.648169 0.1047967,-0.978102 z m 48.2763445,0.419186 c 0.0047,0.188973 0.06986,0.36991 0.06986,0.558916 0,2.938869 -0.620228,5.873558 -1.676747,8.628261 -0.07435,0.07583 -0.06552,0.07411 -0.454119,0.349323 -0.606965,0.429857 -1.631665,1.042044 -3.318562,1.676747 -1.208528,0.454713 -3.204964,0.850894 -5.135038,1.25756 0.84593,-2.765726 1.41808,-6.005357 1.606883,-9.815957 2.232369,-0.413371 4.483758,-0.840201         5.938479,-1.327425 1.410632,-0.472457 2.153108,-0.89469 2.96924,-1.327425 z m -38.530252,2.864443 c 3.208141,0.56697 7.372279,0.898588 12.575603,0.978103 l 0.174662,9.885821 c -4.392517,-0.06139 -8.106722,-0.320566 -10.863925,-0.803441 -1.051954,-2.664695 -1.692909,-6.043794 -1.88634,-10.060483 z m 26.793022,0.31439 c -0.246298,3.923551 -0.877762,7.263679 -1.816476,9.885822 -2.561957,0.361954 -5.766249,0.560708 -9.431703,0.62878 l -0.174661,-9.815957 c 4.491734,-0.04969 8.334769,-0.293032 11.42284,-0.698645 z M 12.035901,44.860585 c 0.09977,0.04523 0.105535,0.09465 0.209594,0.139729 1.337656,0.579602 3.441099,1.058072 5.589157,1.537018 1.545042,3.399208 3.548524,5.969402 5.589157,7.789888 -3.034411,-1.215537 -5.871615,-3.007978 -8.174142,-5.309699 -1.245911,-1.245475 -2.271794,-2.662961 -3.213766,-4.156936 z m 40.69605,0 c -0.941972,1.493975 -1.967855,2.911461         -3.213765,4.156936 -2.74253,2.741571 -6.244106,4.696717 -9.955686,5.868615 0.261347,-0.241079 0.507495,-0.394491 0.768509,-0.663713 1.674841,-1.727516 3.320792,-4.181056 4.645987,-7.265904 2.962447,-0.503021 5.408965,-1.122293 7.161107,-1.781544 0.284034,-0.106865 0.337297,-0.207323 0.593848,-0.31439 z m -31.404076,2.305527 c 2.645807,0.376448 5.701178,0.649995 9.466635,0.698645 l 0.139729,7.789888 c -1.38739,-0.480844 -3.316218,-1.29837 -5.659022,-3.388427 -1.388822,-1.238993 -2.743668,-3.0113 -3.947342,-5.100106 z m 20.365491,0.104797 c -1.04872,2.041937 -2.174337,3.779068 -3.353494,4.995309 -1.853177,1.911459 -3.425515,2.82679 -4.611055,3.353494 l -0.139729,-7.789887 c 3.13091,-0.05714 5.728238,-0.278725 8.104278,-0.558916 z"], ["d", "m 2.9825053,17.550598 0,1.368113 0,26.267766 0,1.368113 1.36811,0 54.9981397,0 1.36811,0 0,-1.368113 0,-26.267766 0,-1.368113 -1.36811,0 -54.9981397,0 -1.36811,0 z m 2.73623,2.736226 10.3292497,0 0,10.466063 -10.3292497,0 0,-10.466063 z m 13.0654697,0 11.69737,0 0,10.466063 -11.69737,0 0,-10.466063 z m 14.43359,0 11.69737,0 0,10.466063 -11.69737,0 0,-10.466063 z m 14.43359,0 10.32926,0 0,10.466063 -10.32926,0 0,-10.466063 z m -41.9326497,13.202288 10.3292497,0 0,10.329252 -10.3292497,0 0,-10.329252 z m 13.0654697,0 11.69737,0 0,10.329252 -11.69737,0 0,-10.329252 z m 14.43359,0 11.69737,0 0,10.329252 -11.69737,0 0,-10.329252 z m 14.43359,0 10.32926,0 0,10.329252 -10.32926,0 0,-10.329252 z"], ["d", "m 14.723969,17.675598 -0.340489,0.817175 -11.1680536,26.183638 -0.817175,1.872692 2.076986,0 54.7506996,0 2.07698,0 -0.81717,-1.872692 -11.16805,-26.183638 -0.34049,-0.817175 -0.91933,0 -32.414586,0 -0.919322,0 z m 1.838643,2.723916 6.196908,0 -2.928209,10.418977 -7.729111,0 4.460412,-10.418977 z m 9.02297,0 4.903049,0 0,10.418977 -7.831258,0 2.928209,-10.418977 z m 7.626964,0 5.584031,0 2.62176,10.418977 -8.205791,0 0,-10.418977 z m 8.410081,0 5.51593,0 4.46042,10.418977 -7.38863,0 -2.58772,-10.418977 z m -30.678091,13.142892 8.103649,0 -2.89416,10.282782 -9.6018026,0 4.3923136,-10.282782 z m 10.929711,0 8.614384,0 0,10.282782 -11.508544,0 2.89416,-10.282782 z m 11.338299,0 8.852721,0 2.58772,10.282782 -11.440441,0 0,-10.282782 z m 11.678781,0 7.86531,0 4.39231,10.282782 -9.6699,0 -2.58772,-10.282782 z"], [1, "container"], [1, "mode", 3, "click"], ["width", "40", "height", "40", "viewBox", "0 0 64 64", 1, ""]], template: function PlanetModeSwitchComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵlistener("nzPopoverVisibleChange", function PlanetModeSwitchComponent_Template_div_nzPopoverVisibleChange_0_listener($event) { return ctx.visible = $event; });
                i0.ɵɵtemplate(1, PlanetModeSwitchComponent_ng_container_1_Template, 3, 0, "ng-container", 1);
                i0.ɵɵtemplate(2, PlanetModeSwitchComponent_ng_container_2_Template, 3, 0, "ng-container", 1);
                i0.ɵɵtemplate(3, PlanetModeSwitchComponent_ng_container_3_Template, 3, 0, "ng-container", 1);
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(4, PlanetModeSwitchComponent_ng_template_4_Template, 10, 0, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
            }
            if (rf & 2) {
                var _r3 = i0.ɵɵreference(5);
                i0.ɵɵproperty("nzPopoverVisible", ctx.visible)("nzPopoverContent", _r3)("nzPopoverPlacement", "right");
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.viewType == "3d");
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.viewType == "2d");
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.viewType == "columbus");
            }
        }, directives: [i1$3.NzPopoverDirective, i2$2.NgIf], styles: [".icon[_ngcontent-%COMP%]{height:32px}.container[_ngcontent-%COMP%]{width:auto;height:50px;margin:-10px}.container[_ngcontent-%COMP%]   .mode[_ngcontent-%COMP%]{float:left;cursor:pointer;height:40px;line-height:40px;margin:5px;fill:#4e555d}.container[_ngcontent-%COMP%]   .mode[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{background-color:#4e555d;fill:#fff}"] });
    exports.PlanetModeSwitchComponent = __decorate([
        i1.ComponentRegister({
            uri: "epsgis-planet-mode-switch",
            path: "epsplanet/components/mode-switch",
            name: "PlanetModeSwitchComponent"
        })
    ], exports.PlanetModeSwitchComponent);
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(exports.PlanetModeSwitchComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'epsgis-planet-mode-switch',
                        templateUrl: './mode-switch.component.html',
                        styleUrls: ['./mode-switch.component.scss'],
                        host: {
                            "[class.jimu-widget-onscreen-icon]": "true",
                            "title": "模式切换"
                        }
                    }]
            }], function () { return []; }, null);
    })();

    exports.PlanetStatusBarComponent = /** @class */ (function (_super) {
        __extends(PlanetStatusBarComponent, _super);
        function PlanetStatusBarComponent(cdr) {
            var _this = _super.call(this) || this;
            _this.cdr = cdr;
            _this.fpsString = "";
            _this.cameraString = "";
            _this.baseVelocity = 0.0;
            _this.velocity = 0.0;
            _this.velocityRatio = 1.0;
            _this.lang = {
                longitude: "经度",
                latitude: "纬度",
                height: "高度",
                fps: "帧率",
                heading: "偏航角",
                pitch: "俯仰角",
                roll: "翻滚角",
                meter: "米",
                velocity: "键盘运动速度",
                createPolylineTip: "左键添加点，右键删除点，shift+右键创建完成",
                editPolylineTip: "鼠标移动到其中一个点会出现一个操作栏，点击移动按钮，可以移动折线位置；点击增加按钮，可以在该位置增加一个点；点击删除按钮，可以删除该点",
                createRectangleTip: "点击左键确定矩形中心点，移动鼠标确定矩形方向和对角线长度，再次点击左键创建完成",
                editRectangleTip: "左键点击其中一个点移动矩形位置",
                createCircleTip: "点击左键确定圆的圆心，移动鼠标确定圆的半径，再次点击左键创建完成",
                editCircleTip: "左键点击其中一个点移动圆位置",
                createDoubleArrowTip: "在四个不同位置点击左键创建双箭头",
                editDoubleArrowTip: "左键点击其中一个点移动双箭头位置",
                createFlattenedPolygonTip: "左键添加点，右键删除点，shift+右键停止绘制，上下移动鼠标确定高度，再次点击左键创建完成",
                editFlattenedPolygonTip: "鼠标移动到其中一个点会出现一个操作栏，点击移动按钮，可以移动折线位置；点击增加按钮，可以在该位置增加一个点；点击删除按钮，可以删除该点",
                movableObjectTip: "鼠标左键点击坐标轴x,y,z任意一个轴，轴变黄色，可沿着相应位置进行移动，再次点击，轴恢复原色，停止移动，点击右键坐标轴消失",
                rotatableObjectTip: "鼠标左键点击旋转坐标轴任意一个轴，轴变黄色，可沿着相应位置进行旋转，再次点击，轴恢复原色，停止旋转，点击右键旋转坐标轴消失",
                positionPickingTip: "点击鼠标左键拾取位置"
            };
            _this._disposers = [];
            return _this;
        }
        PlanetStatusBarComponent.getCompInfo = function () {
            return { name: "PlanetStatusBarComponent", path: "epsplanet/components/status-bar" };
        };
        PlanetStatusBarComponent.prototype.ngOnInit = function () {
            var _this = this;
            this._scene = this.view.czm.scene;
            this._camera = this.view.czm.camera;
            var td = Cesium.Math.toDegrees;
            var updateCameraString = function () {
                var camera = _this._camera;
                var l = td(camera.positionCartographic.longitude).toFixed(5);
                var b = td(camera.positionCartographic.latitude).toFixed(5);
                var h = camera.positionCartographic.height.toFixed(2);
                var y = td(camera.heading).toFixed(2);
                var p = td(camera.pitch).toFixed(2);
                var r = td(camera.roll).toFixed(2);
                _this.cameraString = _this.lang.longitude + ": " + l + "\u00B0 " + _this.lang.latitude + ": " + b + "\u00B0 " + _this.lang.height + ": " + h + _this.lang.meter + " " + _this.lang.heading + ": " + y + "\u00B0 " + _this.lang.pitch + ": " + p + "\u00B0 " + _this.lang.roll + ": " + r + "\u00B0";
                i1.UtilsService.detectChanges(_this.cdr);
            };
            this._disposers = [];
            this._disposers.push(this._camera.changed.addEventListener(updateCameraString));
            updateCameraString();
            this._scene.debugShowFramesPerSecond = true;
            var tempDisposer = this._scene._postRender.addEventListener(function () {
                tempDisposer();
                _this._scene._performanceContainer.style.visibility = "hidden";
            });
            this._disposers.push(this._scene._postRender.addEventListener(function () {
                if (_this._scene._performanceDisplay) {
                    _this.fpsString = _this.lang.fps + ": " + _this._scene._performanceDisplay._fpsText.nodeValue + " ";
                }
                else {
                    _this.fpsString = "";
                }
            }));
            this._disposers.push(XE.MVVM.track(this, "baseVelocity", this.view.camera.immersion, "baseVelocity"));
            this._disposers.push(XE.MVVM.track(this, "velocity", this.view.camera.immersion, "velocity"));
            this._disposers.push(XE.MVVM.bind(this, "velocityRatio", this.view.camera.immersion, "velocityRatio"));
            if (this._uw1) {
                this._uw1 = this._uw1();
            }
            else {
                this._uw1 = XE.MVVM.watch(function () { return _this.view.interaction.creatingPolylineBinding.target; }, function () {
                    if (_this.view.interaction.creatingPolylineBinding.target !==
                        undefined) {
                        if (_this.view.interaction.creatingPolylineBinding.target
                            .xbsjType === "GeoRectangle") {
                        }
                        else if (_this.view.interaction.creatingPolylineBinding.target
                            .xbsjType === "GeoCircle") {
                        }
                        else if (_this.view.interaction.creatingPolylineBinding.target
                            .xbsjType === "GeoDoubleArrow") {
                        }
                        else {
                        }
                    }
                });
            }
            if (this._uw2) {
                this._uw2 = this._uw2();
            }
            else {
                this._uw2 = XE.MVVM.watch(function () { return _this.view.interaction.editingPolylineBinding.target; }, function () {
                    if (_this.view.interaction.editingPolylineBinding.target !==
                        undefined) {
                        if (_this.view.interaction.editingPolylineBinding.target
                            .xbsjType === "GeoRectangle") {
                        }
                        else if (_this.view.interaction.editingPolylineBinding.target
                            .xbsjType === "GeoCircle") {
                        }
                        else if (_this.view.interaction.editingPolylineBinding.target
                            .xbsjType === "GeoDoubleArrow") {
                        }
                        else {
                        }
                    }
                });
            }
            if (this._uw3) {
                this._uw3 = this._uw3();
            }
            else {
                this._uw3 = XE.MVVM.watch(function () { return _this.view.interaction.creatingPolygonBinding.target; }, function () {
                    if (_this.view.interaction.creatingPolygonBinding.target !==
                        undefined) {
                    }
                });
            }
            if (this._uw4) {
                this._uw4 = this._uw4();
            }
            else {
                this._uw4 = XE.MVVM.watch(function () { return _this.view.interaction.flattenedPolygonCreatingBinding.target; }, function () {
                    if (_this.view.interaction.flattenedPolygonCreatingBinding
                        .target !== undefined) {
                    }
                });
            }
            if (this._uw5) {
                this._uw5 = this._uw5();
            }
            else {
                this._uw5 = XE.MVVM.watch(function () { return _this.view.interaction.editingPolygonBinding.target; }, function () {
                    if (_this.view.interaction.editingPolygonBinding.target !==
                        undefined) {
                    }
                });
            }
            if (this._uw6) {
                this._uw6 = this._uw4();
            }
            else {
                this._uw6 = XE.MVVM.watch(function () { return _this.view.interaction.movableObjectBinding.target; }, function () {
                    if (_this.view.interaction.movableObjectBinding.target !==
                        undefined) {
                    }
                });
            }
            if (this._uw7) {
                this._uw7 = this._uw4();
            }
            else {
                this._uw7 = XE.MVVM.watch(function () { return _this.view.interaction.rotatableObjectBinding.target; }, function () {
                    if (_this.view.interaction.rotatableObjectBinding.target !==
                        undefined) {
                    }
                });
            }
            if (this._uw8) {
                this._uw8 = this._uw4();
            }
            else {
                this._uw8 = XE.MVVM.watch(function () { return _this.view.interaction.positionPickingBinding.target; }, function () {
                    if (_this.view.interaction.positionPickingBinding.target !==
                        undefined) {
                    }
                });
            }
        };
        PlanetStatusBarComponent.prototype.ngOnDestroy = function () {
            _super.prototype.ngOnDestroy.call(this);
            this._disposers.forEach(function (d) { return d(); });
            this._disposers.length = 0;
            this._uw1 = this._uw1 && this._uw1();
            this._uw2 = this._uw2 && this._uw2();
            this._uw3 = this._uw3 && this._uw3();
            this._uw4 = this._uw4 && this._uw4();
            this._uw5 = this._uw5 && this._uw5();
            this._uw6 = this._uw6 && this._uw6();
            this._uw7 = this._uw7 && this._uw7();
            this._uw8 = this._uw8 && this._uw8();
        };
        PlanetStatusBarComponent.prototype.velocityString = function () {
            return " " + this.lang.velocity + ": " + this.velocity.toFixed(1) + " km/h (" + this.baseVelocity.toFixed(1) + " \u00D7 " + this.velocityRatio.toFixed(1) + ")";
        };
        return PlanetStatusBarComponent;
    }(BasePlanetWidgetComponent));
    exports.PlanetStatusBarComponent.ɵfac = function PlanetStatusBarComponent_Factory(t) { return new (t || exports.PlanetStatusBarComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    exports.PlanetStatusBarComponent.ɵcmp = i0.ɵɵdefineComponent({ type: exports.PlanetStatusBarComponent, selectors: [["epsgis-planet-status-bar"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 2, vars: 3, consts: [[1, "status-info"]], template: function PlanetStatusBarComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵtext(1);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(1);
                i0.ɵɵtextInterpolate3("", ctx.fpsString, " ", ctx.cameraString, " ", ctx.velocityString(), "");
            }
        }, styles: [".status-info[_ngcontent-%COMP%]{background-color: #4c555e; color:#fff; font-size: 14px;}"] });
    exports.PlanetStatusBarComponent = __decorate([
        i1.ComponentRegister({
            uri: "epsgis-planet-status-bar",
            path: "epsplanet/components/status-bar",
            name: "PlanetStatusBarComponent"
        })
    ], exports.PlanetStatusBarComponent);
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(exports.PlanetStatusBarComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'epsgis-planet-status-bar',
                        template: "<div class=\"status-info\">{{ fpsString }} {{cameraString}} {{ velocityString() }}</div>",
                        styles: [
                            ".status-info{background-color: #4c555e; color:#fff; font-size: 14px;}"
                        ]
                    }]
            }], function () { return [{ type: i0.ChangeDetectorRef }]; }, null);
    })();

    exports.PlanetZoomComponent = /** @class */ (function (_super) {
        __extends(PlanetZoomComponent, _super);
        function PlanetZoomComponent() {
            return _super.call(this) || this;
        }
        PlanetZoomComponent.getCompInfo = function () {
            return { name: "PlanetZoomComponent", path: "epsplanet/components/zoom" };
        };
        PlanetZoomComponent.prototype.ngOnInit = function () { };
        PlanetZoomComponent.prototype.zoomIn = function () {
            var viewer = this.view.czm.viewer;
            this.getCesiumView().camera.zoomIn(viewer.camera.positionCartographic.height / Math.abs(Math.sin(viewer.camera.pitch)) * 0.2);
        };
        PlanetZoomComponent.prototype.zoomOut = function () {
            var viewer = this.view.czm.viewer;
            viewer.camera.zoomOut(viewer.camera.positionCartographic.height / Math.abs(Math.sin(viewer.camera.pitch)) * 0.2);
        };
        return PlanetZoomComponent;
    }(BasePlanetWidgetComponent));
    exports.PlanetZoomComponent.ɵfac = function PlanetZoomComponent_Factory(t) { return new (t || exports.PlanetZoomComponent)(); };
    exports.PlanetZoomComponent.ɵcmp = i0.ɵɵdefineComponent({ type: exports.PlanetZoomComponent, selectors: [["epsgis-planet-zoom"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 4, vars: 0, consts: [["title", "\u653E\u5927", 1, "jimu-widget-onscreen-icon", 3, "click"], ["nz-icon", "", "nzType", "plus", "nzTheme", "outline"], ["title", "\u7F29\u5C0F", 1, "jimu-widget-onscreen-icon", 2, "top", "33px", 3, "click"], ["nz-icon", "", "nzType", "minus", "nzTheme", "outline"]], template: function PlanetZoomComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵlistener("click", function PlanetZoomComponent_Template_div_click_0_listener() { return ctx.zoomIn(); });
                i0.ɵɵelement(1, "i", 1);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(2, "div", 2);
                i0.ɵɵlistener("click", function PlanetZoomComponent_Template_div_click_2_listener() { return ctx.zoomOut(); });
                i0.ɵɵelement(3, "i", 3);
                i0.ɵɵelementEnd();
            }
        }, directives: [i1$1.NzIconDirective, i2$1.ɵNzTransitionPatchDirective], styles: [""] });
    exports.PlanetZoomComponent = __decorate([
        i1.ComponentRegister({
            uri: "epsgis-planet-zoom",
            path: "epsplanet/components/zoom",
            name: "PlanetZoomComponent"
        })
    ], exports.PlanetZoomComponent);
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(exports.PlanetZoomComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'epsgis-planet-zoom',
                        templateUrl: './zoom.component.html',
                        styleUrls: ['./zoom.component.scss'],
                    }]
            }], function () { return []; }, null);
    })();

    function PlanetBasemapGalleryComponent_li_3_Template(rf, ctx) {
        if (rf & 1) {
            var _r6_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "li", 5);
            i0.ɵɵlistener("click", function PlanetBasemapGalleryComponent_li_3_Template_li_click_0_listener() { i0.ɵɵrestoreView(_r6_1); var item_r4 = ctx.$implicit; var ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.selectImage(item_r4); });
            i0.ɵɵelementStart(1, "div", 6);
            i0.ɵɵelement(2, "img", 7);
            i0.ɵɵelement(3, "br");
            i0.ɵɵelementStart(4, "span", 8);
            i0.ɵɵtext(5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var item_r4 = ctx.$implicit;
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("src", item_r4.imgUrl, i0.ɵɵsanitizeUrl);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("title", item_r4.title);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(item_r4.title);
        }
    }
    function PlanetBasemapGalleryComponent_li_7_Template(rf, ctx) {
        if (rf & 1) {
            var _r9_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "li", 5);
            i0.ɵɵlistener("click", function PlanetBasemapGalleryComponent_li_7_Template_li_click_0_listener() { i0.ɵɵrestoreView(_r9_1); var item_r7 = ctx.$implicit; var ctx_r8 = i0.ɵɵnextContext(); return ctx_r8.selectTerrain(item_r7); });
            i0.ɵɵelementStart(1, "div", 6);
            i0.ɵɵelement(2, "img", 7);
            i0.ɵɵelement(3, "br");
            i0.ɵɵelementStart(4, "span", 8);
            i0.ɵɵtext(5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var item_r7 = ctx.$implicit;
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("src", item_r7.imgUrl, i0.ɵɵsanitizeUrl);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("title", item_r7.czmObject.name);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(item_r7.czmObject.name);
        }
    }
    function PlanetBasemapGalleryComponent_ng_template_10_span_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span");
            i0.ɵɵelementStart(1, "span", 11);
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var node_r10 = i0.ɵɵnextContext().$implicit;
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(node_r10.title);
        }
    }
    function PlanetBasemapGalleryComponent_ng_template_10_span_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span");
            i0.ɵɵelementStart(1, "span", 11);
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var node_r10 = i0.ɵɵnextContext().$implicit;
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(node_r10.title);
        }
    }
    function PlanetBasemapGalleryComponent_ng_template_10_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span", 9);
            i0.ɵɵtemplate(1, PlanetBasemapGalleryComponent_ng_template_10_span_1_Template, 3, 1, "span", 10);
            i0.ɵɵtemplate(2, PlanetBasemapGalleryComponent_ng_template_10_span_2_Template, 3, 1, "span", 10);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var node_r10 = ctx.$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !node_r10.isLeaf);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", node_r10.isLeaf);
        }
    }
    exports.PlanetBasemapGalleryComponent = /** @class */ (function (_super) {
        __extends(PlanetBasemapGalleryComponent, _super);
        function PlanetBasemapGalleryComponent(nzContextMenuService) {
            var _this = _super.call(this) || this;
            _this.nzContextMenuService = nzContextMenuService;
            _this.layerNodes = [];
            _this.terrainData = [{
                    "czmObject": {
                        "img": "https://lab2.cesiumlab.com/upload/3fd1ac60-2683-4ae8-a5da-c0250edc836b/2019_08_02_19_45_38.jpg",
                        "xbsjType": "Terrain",
                        "xbsjGuid": "0b34ebd4-5a5b-4f1d-b2e8-a41797193aa8",
                        "name": "中国14级（测试）",
                        "xbsjTerrainProvider": {
                            "type": "XbsjCesiumTerrainProvider",
                            "XbsjEllipsoidTerrainProvider": {},
                            "XbsjCesiumTerrainProvider": {
                                "url": "https://lab.earthsdk.com/terrain/577fd5b0ac1f11e99dbd8fd044883638",
                                "requestVertexNormals": true,
                                "requestWaterMask": true
                            },
                            "GoogleEarthEnterpriseTerrainProvider": {}
                        }
                    }
                }];
            _this.terrainIcon = "https://lab2.cesiumlab.com/upload/3fd1ac60-2683-4ae8-a5da-c0250edc836b/2019_08_02_19_45_38.jpg";
            return _this;
        }
        PlanetBasemapGalleryComponent.prototype.activeNode = function (data) {
            this.activatedNode = data.node;
        };
        PlanetBasemapGalleryComponent.prototype.contextMenu = function ($event, menu) {
            this.nzContextMenuService.create($event, menu);
        };
        PlanetBasemapGalleryComponent.prototype.onCheckedChange = function (evt) {
            if (evt.eventName !== "check" || !evt.node) {
                return;
            }
            if (evt.node.isChecked) {
                SceneTreeUtils.GetXbsjCzmObject(evt.node).show = true;
            }
            else {
                SceneTreeUtils.GetXbsjCzmObject(evt.node).show = false;
            }
        };
        PlanetBasemapGalleryComponent.prototype.onRightClick = function ($event) {
        };
        PlanetBasemapGalleryComponent.prototype.ngOnInit = function () {
            var _this = this;
            _super.prototype.ngOnInit.call(this);
            var uw3 = XE.MVVM.watch(function () { return __spread(_this.view.sceneTree.$refs.basemap.children); }, function () {
                _this.loadBaseTree();
            });
        };
        PlanetBasemapGalleryComponent.prototype.loadBaseTree = function () {
            var _this = this;
            setTimeout(function () {
                var _layerNodes = SceneTreeUtils.SceneTree2NgZorroTree(_this.view.sceneTree.$refs.basemap);
                _this.layerNodes = __spread(_layerNodes[0]["_children"]);
                _this.view.sceneTree.$refs.basemap.children[0].czmObject.xbsjZIndex = -1;
            }, 100);
        };
        PlanetBasemapGalleryComponent.prototype.selectImage = function (item) {
            console.log(SceneTreeUtils.loadLayerNode(item));
            var node = SceneTreeUtils.loadLayerNode(item);
            node.czmObject.show = true;
            var earth = this.view;
            earth.sceneTree.$refs.basemap.children[0] = node;
        };
        PlanetBasemapGalleryComponent.prototype.selectTerrain = function (item) {
            this.view.sceneTree.$refs.basemap.children.push(item);
        };
        PlanetBasemapGalleryComponent.prototype.ngAfterViewInit = function () {
            _super.prototype.ngAfterViewInit.call(this);
        };
        PlanetBasemapGalleryComponent.prototype.ngOnDestroy = function () {
            _super.prototype.ngOnDestroy.call(this);
        };
        return PlanetBasemapGalleryComponent;
    }(BasePlanetWidgetComponent));
    exports.PlanetBasemapGalleryComponent.ɵfac = function PlanetBasemapGalleryComponent_Factory(t) { return new (t || exports.PlanetBasemapGalleryComponent)(i0.ɵɵdirectiveInject(i1$2.NzContextMenuService)); };
    exports.PlanetBasemapGalleryComponent.ɵcmp = i0.ɵɵdefineComponent({ type: exports.PlanetBasemapGalleryComponent, selectors: [["epsgis-planet-basemap-gallery"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 12, vars: 4, consts: [["nzTitle", "\u5F71\u50CF"], [3, "click", 4, "ngFor", "ngForOf"], ["nzTitle", "\u5730\u5F62"], ["nzBlockNode", "", "nzCheckable", "", 3, "nzData", "nzTreeTemplate", "nzClick", "nzCheckBoxChange"], ["nzTreeTemplate", ""], [3, "click"], [1, "backimg"], [3, "src"], [2, "width", "100%", "white-space", "nowrap", "text-overflow", "ellipsis", "overflow", "hidden", "text-align", "left", 3, "title"], [1, "custom-node"], [4, "ngIf"], [1, "folder-name"]], template: function PlanetBasemapGalleryComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "nz-tabset");
                i0.ɵɵelementStart(1, "nz-tab", 0);
                i0.ɵɵelementStart(2, "ul");
                i0.ɵɵtemplate(3, PlanetBasemapGalleryComponent_li_3_Template, 6, 3, "li", 1);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(4, "nz-tabset");
                i0.ɵɵelementStart(5, "nz-tab", 2);
                i0.ɵɵelementStart(6, "ul");
                i0.ɵɵtemplate(7, PlanetBasemapGalleryComponent_li_7_Template, 6, 3, "li", 1);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelement(8, "nz-divider");
                i0.ɵɵelementStart(9, "nz-tree", 3);
                i0.ɵɵlistener("nzClick", function PlanetBasemapGalleryComponent_Template_nz_tree_nzClick_9_listener($event) { return ctx.activeNode($event); })("nzCheckBoxChange", function PlanetBasemapGalleryComponent_Template_nz_tree_nzCheckBoxChange_9_listener($event) { return ctx.onCheckedChange($event); });
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(10, PlanetBasemapGalleryComponent_ng_template_10_Template, 3, 2, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor);
            }
            if (rf & 2) {
                var _r2 = i0.ɵɵreference(11);
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("ngForOf", ctx.config.basemaps);
                i0.ɵɵadvance(4);
                i0.ɵɵproperty("ngForOf", ctx.config.terrain);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("nzData", ctx.layerNodes)("nzTreeTemplate", _r2);
            }
        }, directives: [i2$3.NzTabSetComponent, i2$3.NzTabComponent, i2$2.NgForOf, i4$2.NzDividerComponent, i2.NzTreeComponent, i2$2.NgIf], styles: ["*[_ngcontent-%COMP%]{margin:0;padding:0}img[_ngcontent-%COMP%]{width:70px;height:70px}li[_ngcontent-%COMP%]{float:left;list-style:none;height:100px;cursor:pointer}.backimg[_ngcontent-%COMP%]{width:70px;height:70px;border:1px solid;border-radius:3px;background:grey;margin:3px}.backimg[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-block;width:70px;text-align:center}.ipt[_ngcontent-%COMP%], .ipt1[_ngcontent-%COMP%], .ipt2[_ngcontent-%COMP%]{margin-bottom:5px}.ant-input[_ngcontent-%COMP%]{width:70%}nz-select[_ngcontent-%COMP%]{width:50%}.footer[_ngcontent-%COMP%]{margin-top:5px;float:right}.footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:50px}.schema[_ngcontent-%COMP%]{position:absolute;top:5px;left:5px}  .ant-tabs-tab{padding:0}"] });
    exports.PlanetBasemapGalleryComponent = __decorate([
        i1.ComponentRegister({
            uri: "epsgis-planet-basemap-gallery",
            path: "epsplanet/components/basemap-gallery",
            name: "PlanetBasemapGalleryComponent"
        })
    ], exports.PlanetBasemapGalleryComponent);
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(exports.PlanetBasemapGalleryComponent, [{
                type: i0.Component,
                args: [{
                        selector: "epsgis-planet-basemap-gallery",
                        templateUrl: "./basemap-gallery.component.html",
                        styleUrls: ["./basemap-gallery.component.scss"]
                    }]
            }], function () { return [{ type: i1$2.NzContextMenuService }]; }, null);
    })();

    var propertyLists = [];
    var czmObjectList = [];
    var resList = [];
    var highLight = null;
    window["allowClick"] = false;
    var Identify = /** @class */ (function () {
        function Identify(http) {
            this.http = http;
        }
        Identify.prototype.httpReq = function (method, url) {
            if (method == 'post') {
                return this.http.httpClient.post(url, "").toPromise();
            }
            if (method == 'get') {
                return this.http.httpClient.get(url).toPromise();
            }
        };
        Identify.prototype.GetFeatureInfo = function (czmObject, earth, type, callback) {
            var _this = this;
            if (highLight == null) {
                highLight = new Cesium.CustomDataSource('highLight');
                earth.czm.viewer.dataSources.add(highLight);
            }
            var scene = earth.czm.scene;
            var viewer = earth.czm.viewer;
            var WFSUrl = this.GetWFSUrl(czmObject.xbsjImageryProvider);
            var handler = new Cesium.ScreenSpaceEventHandler(scene.canvas);
            var filter = "";
            handler.setInputAction(function (click) {
                if (!window["allowClick"])
                    return;
                if (!czmObject.show)
                    return;
                earth.sceneTree.$refs.pin1.czmObject.customProp = false;
                highLight.entities.removeAll();
                resList = [];
                earth.sceneTree.$refs.pin1.czmObject.position = _this.Cartesian2ToCartographic(viewer, click.position);
                var position = _this.Cartesian2ToWGS84(viewer, click.position);
                var bufferCoordinates = _this.Buffer([position.lon, position.lat], 100);
                if (type == 'point') {
                    filter = "<Filter xmlns=\"http://www.opengis.net/ogc\" xmlns:gml=\"http://www.opengis.net/gml\"><Intersects><PropertyName>the_geom</PropertyName><gml:outerBoundaryIs><gml:LinearRing><gml:coordinates>" + bufferCoordinates + "</gml:coordinates></gml:LinearRing></gml:outerBoundaryIs></Intersects></Filter>";
                }
                else if (type = 'line') {
                }
                else if (type = 'polygon') {
                }
                _this.httpReq('post', WFSUrl + filter).then(function (res) {
                    if (res.features.length > 0) {
                        var properties_1 = res.features[0].properties;
                        var propertyList_1 = [];
                        Object.keys(properties_1).map(function (key) { return propertyList_1.push({
                            name: key,
                            value: properties_1[key]
                        }); });
                        propertyLists.push(propertyList_1);
                        czmObjectList.push(czmObject);
                        resList.push(res);
                        setTimeout(function () {
                            if (resList.length > 1) {
                                if (czmObjectList[0]._ci > czmObjectList[1]._ci) {
                                    if (czmObjectList[0]._ci !== czmObject._ci)
                                        return;
                                    if (typeof callback === 'function') {
                                        callback(propertyLists[0]);
                                        Cesium.GeoJsonDataSource.load(resList[0])
                                            .then(function (dataSource) {
                                            dataSource.entities.values.forEach(function (entity) {
                                                highLight.entities.add(entity);
                                            });
                                        });
                                    }
                                }
                                else {
                                    if (czmObjectList[1]._ci !== czmObject._ci)
                                        return;
                                    if (typeof callback === 'function') {
                                        callback(propertyLists[1]);
                                        Cesium.GeoJsonDataSource.load(resList[1])
                                            .then(function (dataSource) {
                                            dataSource.entities.values.forEach(function (entity) {
                                                highLight.entities.add(entity);
                                            });
                                        });
                                    }
                                }
                                return;
                            }
                            else {
                                if (typeof callback === 'function') {
                                    callback(propertyList_1);
                                    Cesium.GeoJsonDataSource.load(res)
                                        .then(function (dataSource) {
                                        dataSource.entities.values.forEach(function (entity) {
                                            highLight.entities.add(entity);
                                        });
                                    });
                                }
                            }
                        }, 100);
                        setTimeout(function () {
                            resList = [];
                            propertyLists = [];
                            czmObjectList = [];
                        }, 1000);
                    }
                }).catch(function (err) { });
            }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
        };
        Identify.prototype.InitHandler = function () {
        };
        Identify.prototype.getLayers = function (czmObject, earth, callback) {
            var _this = this;
            var handler = new Cesium.ScreenSpaceEventHandler(earth.czm.scene.canvas);
            var url = czmObject.xbsjImageryProvider.WebMapTileServiceImageryProvider.url || czmObject.xbsjImageryProvider.SSWebMapServiceImageryProvider.url;
            var requestUrl = "";
            if (czmObject.xbsjImageryProvider.type == "WebMapTileServiceImageryProvider") {
                requestUrl = url.split('MapServer')[0] + "MapServer/layers?f=pjson";
            }
            else if (czmObject.xbsjImageryProvider.type == "SSWebMapServiceImageryProvider") {
                requestUrl = url.split('arcgis')[0] + 'arcgis/rest' + url.split('arcgis')[1].split('MapServer')[0] + "MapServer/layers?f=pjson";
            }
            this.httpReq('get', requestUrl).then(function (res) {
                handler.setInputAction(function (click) {
                    if (res.layers == undefined)
                        return;
                    if (!window["allowClick"])
                        return;
                    if (!czmObject.show)
                        return;
                    highLight.entities.removeAll();
                    earth.sceneTree.$refs.pin1.czmObject.customProp = false;
                    earth.sceneTree.$refs.pin1.czmObject.position = _this.Cartesian2ToCartographic(earth.czm.viewer, click.position);
                    var position = _this.Cartesian2ToWGS84(earth.czm.viewer, click.position);
                    var bufferCoordinates = _this.Buffer([position.lon, position.lat], 1);
                    var addr = _this.GetWFSUrl(czmObject.xbsjImageryProvider);
                    var typeName = url.split('/MapServer')[0].split('services/')[1];
                    var resList = [];
                    var geometryList = [];
                    if (czmObject.xbsjImageryProvider.type == "WebMapTileServiceImageryProvider") {
                        var _loop_1 = function (i) {
                            var item = res.layers[i];
                            var query = "" + addr
                                + ("typename=" + typeName + ":" + item.name + "&Filter=")
                                + "<ogc:Filter><ogc:Intersects><ogc:PropertyName>Shape</ogc:PropertyName>"
                                + "<gml:Polygon srsName=\"urn:x-ogc:def:crs:EPSG:4326\"><gml:outerBoundaryIs><gml:LinearRing>"
                                + ("<gml:coordinates>" + bufferCoordinates + "</gml:coordinates>")
                                + "</gml:LinearRing></gml:outerBoundaryIs></gml:Polygon></ogc:Intersects></ogc:Filter>";
                            _this.httpReq('get', query).then().catch(function (err) {
                                var res = err.error.text;
                                if (_this.xml2Json(_this.stringToXml(res))['FeatureCollection']['featureMember']) {
                                    var properties_2 = _this.xml2Json(_this.stringToXml(res))['FeatureCollection']['featureMember'][item.name];
                                    var propertyList_2 = [];
                                    var geojson_1 = {};
                                    if (properties_2 == undefined || properties_2 == null)
                                        return;
                                    Object.keys(properties_2).map(function (key) {
                                        if (key !== "Shape") {
                                            propertyList_2.push({
                                                name: key,
                                                value: properties_2[key].value
                                            });
                                        }
                                        else {
                                            if (properties_2[key].MultiSurface) {
                                                var posList = properties_2[key].MultiSurface.surfaceMember.Polygon.exterior.LinearRing.posList.value.split(" ");
                                                posList.shift();
                                                var list = [];
                                                for (var i_1 = 0; i_1 < posList.length; i_1 += 2) {
                                                    list.push([posList[i_1], posList[i_1 + 1]]);
                                                }
                                                geojson_1 = {
                                                    type: "Feature",
                                                    geometry: {
                                                        type: "LineString",
                                                        coordinates: list
                                                    }
                                                };
                                            }
                                            else if (properties_2[key].Point) {
                                                var posList = properties_2[key].Point.pos.value.split(" ");
                                                geojson_1 =
                                                    {
                                                        type: "Feature",
                                                        geometry: {
                                                            type: "Point",
                                                            coordinates: posList
                                                        }
                                                    };
                                            }
                                            else if (properties_2[key].MultiCurve) {
                                                var posList = properties_2[key].MultiCurve.curveMember.LineString.posList.value.split(" ");
                                                var list = [];
                                                for (var i_2 = 0; i_2 < posList.length; i_2 += 2) {
                                                    list.push([posList[i_2], posList[i_2 + 1]]);
                                                }
                                                geojson_1 =
                                                    {
                                                        type: "Feature",
                                                        geometry: {
                                                            type: "LineString",
                                                            coordinates: list
                                                        }
                                                    };
                                            }
                                        }
                                    });
                                    resList.push(propertyList_2);
                                    geometryList.push(geojson_1);
                                }
                            });
                        };
                        for (var i = 0; i < res.layers.length; i++) {
                            _loop_1(i);
                        }
                    }
                    else if (czmObject.xbsjImageryProvider.type == "SSWebMapServiceImageryProvider") {
                        var llist = czmObject.xbsjImageryProvider.SSWebMapServiceImageryProvider.layer.split(",");
                        var _loop_2 = function (i) {
                            var item = res.layers[res.layers.length - 1 - llist[i]];
                            var query = "" + addr
                                + ("typename=" + typeName + ":" + item.name + "&Filter=")
                                + "<ogc:Filter><ogc:Intersects><ogc:PropertyName>Shape</ogc:PropertyName>"
                                + "<gml:Polygon srsName=\"urn:x-ogc:def:crs:EPSG:4326\"><gml:outerBoundaryIs><gml:LinearRing>"
                                + ("<gml:coordinates>" + bufferCoordinates + "</gml:coordinates>")
                                + "</gml:LinearRing></gml:outerBoundaryIs></gml:Polygon></ogc:Intersects></ogc:Filter>";
                            console.log(item.name);
                            _this.httpReq('get', query).then().catch(function (err) {
                                var res = err.error.text;
                                if (_this.xml2Json(_this.stringToXml(res))['FeatureCollection'] == undefined)
                                    return;
                                if (_this.xml2Json(_this.stringToXml(res))['FeatureCollection']['featureMember']) {
                                    var properties_3 = _this.xml2Json(_this.stringToXml(res))['FeatureCollection']['featureMember'][item.name];
                                    var propertyList_3 = [];
                                    var geojson_2 = {};
                                    if (properties_3 == undefined || properties_3 == null)
                                        return;
                                    Object.keys(properties_3).map(function (key) {
                                        if (key !== "Shape") {
                                            propertyList_3.push({
                                                name: key,
                                                value: properties_3[key].value
                                            });
                                        }
                                        else {
                                            if (properties_3[key].MultiSurface) {
                                                var posList = properties_3[key].MultiSurface.surfaceMember.Polygon.exterior.LinearRing.posList.value.split(" ");
                                                posList.shift();
                                                var list = [];
                                                for (var i_3 = 0; i_3 < posList.length; i_3 += 2) {
                                                    list.push([posList[i_3], posList[i_3 + 1]]);
                                                }
                                                geojson_2 = {
                                                    type: "Feature",
                                                    geometry: {
                                                        type: "LineString",
                                                        coordinates: list
                                                    }
                                                };
                                            }
                                            else if (properties_3[key].Point) {
                                                var posList = properties_3[key].Point.pos.value.split(" ");
                                                geojson_2 =
                                                    {
                                                        type: "Feature",
                                                        geometry: {
                                                            type: "Point",
                                                            coordinates: posList
                                                        }
                                                    };
                                            }
                                            else if (properties_3[key].MultiCurve) {
                                                var posList = properties_3[key].MultiCurve.curveMember.LineString.posList.value.split(" ");
                                                var list = [];
                                                for (var i_4 = 0; i_4 < posList.length; i_4 += 2) {
                                                    list.push([posList[i_4], posList[i_4 + 1]]);
                                                }
                                                geojson_2 =
                                                    {
                                                        type: "Feature",
                                                        geometry: {
                                                            type: "LineString",
                                                            coordinates: list
                                                        }
                                                    };
                                            }
                                        }
                                    });
                                    resList.push(propertyList_3);
                                    geometryList.push(geojson_2);
                                }
                            });
                        };
                        for (var i = 0; i < llist.length; i++) {
                            _loop_2(i);
                        }
                    }
                    setTimeout(function () {
                        if (resList.length > 0 && geometryList.length > 0) {
                            if (geometryList[0].geometry.type == "Point") {
                                Cesium.GeoJsonDataSource.load(geometryList[0]).then(function (dataSource) {
                                    dataSource.entities.values.forEach(function (entity) {
                                        entity.billboard = null;
                                        entity.point = new Cesium.PointGraphics({
                                            show: true,
                                            color: Cesium.Color.AQUA,
                                            pixelSize: 10
                                        });
                                        highLight.entities.add(entity);
                                    });
                                });
                            }
                            else if (geometryList[0].geometry.type == "LineString") {
                                Cesium.GeoJsonDataSource.load(geometryList[0]).then(function (dataSource) {
                                    dataSource.entities.values.forEach(function (entity) {
                                        entity.polyline.width = 10;
                                        entity.polyline.material = new Cesium.PolylineGlowMaterialProperty({
                                            glowPower: 0.2,
                                            color: Cesium.Color.BLUE
                                        });
                                        highLight.entities.add(entity);
                                    });
                                });
                            }
                            else {
                                Cesium.GeoJsonDataSource.load(geometryList[0]).then(function (dataSource) {
                                    dataSource.entities.values.forEach(function (entity) {
                                        highLight.entities.add(entity);
                                    });
                                });
                            }
                            callback(resList[0]);
                        }
                    }, 500);
                }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
            });
        };
        Identify.prototype.Cartesian2ToWGS84 = function (viewer, position) {
            var ray = viewer.camera.getPickRay(position);
            var cartesian = viewer.scene.globe.pick(ray, viewer.scene);
            var cartographic = Cesium.Cartographic.fromCartesian(cartesian);
            var lon = Cesium.Math.toDegrees(cartographic.longitude);
            var lat = Cesium.Math.toDegrees(cartographic.latitude);
            return { lon: lon, lat: lat };
        };
        Identify.prototype.Cartesian2ToCartographic = function (viewer, position) {
            var ray = viewer.camera.getPickRay(position);
            var cartesian = viewer.scene.globe.pick(ray, viewer.scene);
            var cartographic = Cesium.Cartographic.fromCartesian(cartesian);
            return [cartographic.longitude, cartographic.latitude, cartographic.height];
        };
        Identify.prototype.GetWFSUrl = function (ImageryProvider) {
            var WFSUrl = "";
            if (ImageryProvider.type == "WebMapTileServiceImageryProvider") {
                var WMTSImageryProvider = ImageryProvider.WebMapTileServiceImageryProvider;
                if (WMTSImageryProvider.url.indexOf('arcgis') !== -1) {
                    WFSUrl = WMTSImageryProvider.url.split("rest")[0] + WMTSImageryProvider.url.split("rest/")[1].split("MapServer")[0] + "MapServer/WFSServer?request=GetFeature&service=WFS&version=1.1.0&";
                }
                else if (WMTSImageryProvider.url.indexOf('geoserver') !== -1) {
                    WFSUrl = WMTSImageryProvider.url.split("gwc")[0] + WMTSImageryProvider.layer.split(":")[0] + "/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=" + WMTSImageryProvider.layer + "&maxFeatures=1&outputFormat=json&filter=";
                }
            }
            if (ImageryProvider.type == "SSWebMapServiceImageryProvider") {
                var SSWebMapServiceImageryProvider = ImageryProvider.SSWebMapServiceImageryProvider;
                if (SSWebMapServiceImageryProvider.url.indexOf('arcgis') !== -1) {
                    WFSUrl = SSWebMapServiceImageryProvider.url.split("MapServer")[0] + "MapServer/WFSServer?request=GetFeature&service=WFS&version=1.1.0&";
                }
                else if (SSWebMapServiceImageryProvider.url.indexOf('geoserver') !== -1) {
                    WFSUrl = SSWebMapServiceImageryProvider.url.split("wms")[0] + "/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=" + SSWebMapServiceImageryProvider.layer + "&maxFeatures=1&outputFormat=json&filter=";
                }
            }
            return WFSUrl;
        };
        Identify.prototype.Buffer = function (position, meters) {
            var pointF = turf__default['default'].point(position);
            var buffered = turf__default['default'].buffer(pointF, meters, 'meters');
            var coordinates = buffered.geometry.coordinates;
            var points = coordinates[0];
            var degreesListStr = this.pointsToDegreesArray(points);
            return degreesListStr;
        };
        Identify.prototype.pointsToDegreesArray = function (points) {
            var degreesArray = "";
            points.map(function (item) {
                degreesArray += item[0] + "," + item[1] + " ";
            });
            return degreesArray;
        };
        Identify.prototype.ClearHighLight = function () {
            highLight.entities.removeAll();
        };
        Identify.prototype.xml2Json = function (xml) {
            var obj = {};
            if (xml.nodeType == 1) {
                if (xml.attributes.length > 0) {
                    obj["@attributes"] = {};
                    for (var j = 0; j < xml.attributes.length; j++) {
                        var attribute = xml.attributes.item(j);
                        if (attribute.nodeName.indexOf(":") == -1) {
                            obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
                        }
                        else {
                            obj["@attributes"][attribute.nodeName.split(":")[1]] = attribute.nodeValue;
                        }
                    }
                }
            }
            else if (xml.nodeType == 3) {
                obj = xml.nodeValue;
            }
            if (xml.hasChildNodes()) {
                for (var i = 0; i < xml.childNodes.length; i++) {
                    var item = xml.childNodes.item(i);
                    var nodeName = item.nodeName;
                    if (typeof (obj[nodeName.split(":")[1]]) == "undefined") {
                        if (nodeName.split(":")[1] == undefined) {
                            obj['value'] = this.xml2Json(item);
                        }
                        else {
                            obj[nodeName.split(":")[1]] = this.xml2Json(item);
                        }
                    }
                    else {
                        if (typeof (obj[nodeName.split(":")[1]].length) == "undefined") {
                            var old = obj[nodeName.split(":")[1]];
                            obj[nodeName.split(":")[1]] = [];
                            obj[nodeName.split(":")[1]].push(old);
                        }
                        obj[nodeName.split(":")[1]].push(this.xml2Json(item));
                    }
                }
            }
            return obj;
        };
        Identify.prototype.stringToXml = function (xmlString) {
            var xmlDoc;
            if (typeof xmlString == "string") {
                if (document.implementation.createDocument) {
                    var parser = new DOMParser();
                    xmlDoc = parser.parseFromString(xmlString, "text/xml");
                }
            }
            else {
                xmlDoc = xmlString;
            }
            return xmlDoc;
        };
        return Identify;
    }());
    Identify.ɵfac = function Identify_Factory(t) { return new (t || Identify)(i0.ɵɵinject(i1.HttpReqService)); };
    Identify.ɵprov = i0.ɵɵdefineInjectable({ token: Identify, factory: Identify.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Identify, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return [{ type: i1.HttpReqService }]; }, null);
    })();

    function PlanetIdentifyComponent_tr_10_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "tr");
            i0.ɵɵelementStart(1, "td");
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "td");
            i0.ɵɵtext(4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var data_r2 = ctx.$implicit;
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(data_r2.name);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(data_r2.value);
        }
    }
    var _c0$2 = function (a0, a1) { return { "left": a0, "bottom": a1 }; };
    exports.PlanetIdentifyComponent = /** @class */ (function (_super) {
        __extends(PlanetIdentifyComponent, _super);
        function PlanetIdentifyComponent(identify) {
            var _this = _super.call(this) || this;
            _this.identify = identify;
            _this.winPos = [0, 0, 0, 0];
            _this.title = "";
            _this.pin1 = null;
            _this.propertyList = [
                {
                    name: "1",
                    value: 2
                }
            ];
            _this.showInfo = false;
            _this.switchValue = false;
            return _this;
        }
        PlanetIdentifyComponent.prototype.createInfoWin = function () {
            var win = document.createElement('div');
            win.className = "dialog";
            win.style.left = this.winPos[0] - 80 + "px";
            win.style.bottom = this.winPos[3] - 320 + "px";
            win.innerHTML = "<div class=\"panel\">\n    <span>" + this.title + "</span><i nz-icon nzType=\"close\" nzTheme=\"outline\" (click)=\"close()\" style=\"float: right;\"></i>\n    <nz-table #basicTable [nzData]=\"propertyList\" [nzFrontPagination]=\"false\" [nzShowPagination]=\"false\"\n        [nzTitle]=\"null\">\n        <tbody>\n            <tr *ngFor=\"let data of basicTable.data\">\n                <td>{{ data.name }}</td>\n                <td>{{ data.value }}</td>\n            </tr>\n        </tbody>\n    </nz-table>\n    <i nz-icon nzType=\"zoom-in\" nzTheme=\"outline\" (click)=\"zoomTo()\"></i><span>\u7F29\u653E\u81F3</span>\n</div>\n<div class=\"arrow\"></div>";
            document.getElementsByClassName("cesium-viewer")[0].append(win);
            return win;
        };
        PlanetIdentifyComponent.prototype.Init = function () {
            var _this = this;
            var win = document.getElementsByClassName("dialog")[0];
            win.parentNode.removeChild(win);
            document.getElementsByClassName("cesium-viewer")[0].append(win);
            window['showInfo'] = this.showInfo;
            this.view.sceneTree.$refs.pin.children.push({
                "ref": 'pin1',
                "czmObject": {
                    "name": 'Pin1',
                    "xbsjType": "Pin",
                    "position": [1, 1, 0],
                    "near": 30,
                    "show": false,
                    "customProp": this.showInfo
                }
            });
            this.pin1 = this.view.sceneTree.$refs.pin1.czmObject;
            XE.MVVM.watch(function () { return _this.pin1.winPos; }, function () {
                _this.winPos = _this.pin1.winPos;
                console.log("win", _this.winPos);
            });
            XE.MVVM.watch(function () { return _this.pin1.customProp; }, function () {
                if (!_this.pin1.customProp) {
                    _this.showInfo = false;
                }
            });
            if (this.view == null)
                return;
            this.view.sceneTree.$refs.layerlist.children.forEach(function (group) {
                if (group.children) {
                    group.children.forEach(function (item) {
                        if (item.czmObject.xbsjType !== "Imagery")
                            return;
                        if (item.czmObject.xbsjImageryProvider.type == "WebMapTileServiceImageryProvider" || item.czmObject.xbsjImageryProvider.type == "SSWebMapServiceImageryProvider") {
                            if (item.czmObject.xbsjImageryProvider[item.czmObject.xbsjImageryProvider.type].url.indexOf("arcgis") !== -1) {
                                _this.identify.getLayers(item.czmObject, _this.view, function (res) {
                                    console.log("res:", res);
                                    _this.pin1.customProp = true;
                                    _this.showInfo = true;
                                    _this.propertyList = res;
                                });
                            }
                            else {
                                _this.identify.GetFeatureInfo(item.czmObject, _this.view, 'point', function (res) {
                                    console.log(item.czmObject.xbsjImageryProvider[item.czmObject.xbsjImageryProvider.type]);
                                    _this.title = item.czmObject.xbsjImageryProvider[item.czmObject.xbsjImageryProvider.type].layer;
                                    _this.pin1.customProp = true;
                                    _this.showInfo = true;
                                    _this.propertyList = res;
                                });
                            }
                        }
                    });
                }
            });
        };
        PlanetIdentifyComponent.prototype.close = function () {
            this.showInfo = false;
        };
        PlanetIdentifyComponent.prototype.zoomTo = function () {
            var entityCollection = this.view.czm.viewer.dataSources.getByName("highLight")[0].entities;
            this.view.czm.viewer.flyTo(entityCollection);
        };
        PlanetIdentifyComponent.prototype.switch = function (e) {
            console.log(e);
            if (e.srcElement.style.color == 'aqua') {
                e.srcElement.style.color = "";
            }
            else {
                e.srcElement.style.color = 'aqua';
            }
            window["allowClick"] = !window["allowClick"];
            if (!window["allowClick"]) {
                this.identify.ClearHighLight();
            }
        };
        PlanetIdentifyComponent.prototype.test = function () {
            var _this = this;
            this.identify.getLayers(this.view.sceneTree.$refs.layerlist.children[1].children[0].czmObject, this.view, function (res) {
                console.log(res);
                _this.pin1.customProp = true;
                _this.showInfo = true;
                _this.propertyList = res;
            });
        };
        PlanetIdentifyComponent.prototype.ngOnInit = function () {
            _super.prototype.ngOnInit.call(this);
            this.Init();
        };
        PlanetIdentifyComponent.prototype.ngAfterViewInit = function () {
            _super.prototype.ngAfterViewInit.call(this);
        };
        PlanetIdentifyComponent.prototype.ngOnDestroy = function () {
            _super.prototype.ngOnDestroy.call(this);
        };
        return PlanetIdentifyComponent;
    }(BasePlanetWidgetComponent));
    exports.PlanetIdentifyComponent.ɵfac = function PlanetIdentifyComponent_Factory(t) { return new (t || exports.PlanetIdentifyComponent)(i0.ɵɵdirectiveInject(Identify)); };
    exports.PlanetIdentifyComponent.ɵcmp = i0.ɵɵdefineComponent({ type: exports.PlanetIdentifyComponent, selectors: [["epsgis-planet-identify"]], hostAttrs: ["title", "\u8BC6\u522B"], hostVars: 2, hostBindings: function PlanetIdentifyComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
                i0.ɵɵclassProp("jimu-widget-onscreen-icon", true);
            }
        }, features: [i0.ɵɵInheritDefinitionFeature], decls: 15, vars: 12, consts: [["title", "\u8BC6\u522B", 1, "jimu-widget-onscreen-icon"], ["nz-icon", "", 3, "nzIconfont", "click"], [1, "dialog", 3, "hidden", "ngStyle"], [1, "panel"], ["nz-icon", "", "nzType", "close", "nzTheme", "outline", 2, "float", "right", 3, "click"], [3, "nzData", "nzFrontPagination", "nzShowPagination", "nzTitle"], ["basicTable", ""], [4, "ngFor", "ngForOf"], ["nz-icon", "", "nzType", "zoom-in", "nzTheme", "outline", 3, "click"], [1, "arrow"]], template: function PlanetIdentifyComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵelementStart(1, "i", 1);
                i0.ɵɵlistener("click", function PlanetIdentifyComponent_Template_i_click_1_listener($event) { return ctx.switch($event); });
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(2, "div", 2);
                i0.ɵɵelementStart(3, "div", 3);
                i0.ɵɵelementStart(4, "span");
                i0.ɵɵtext(5);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(6, "i", 4);
                i0.ɵɵlistener("click", function PlanetIdentifyComponent_Template_i_click_6_listener() { return ctx.close(); });
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(7, "nz-table", 5, 6);
                i0.ɵɵelementStart(9, "tbody");
                i0.ɵɵtemplate(10, PlanetIdentifyComponent_tr_10_Template, 5, 2, "tr", 7);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(11, "i", 8);
                i0.ɵɵlistener("click", function PlanetIdentifyComponent_Template_i_click_11_listener() { return ctx.zoomTo(); });
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(12, "span");
                i0.ɵɵtext(13, "\u7F29\u653E\u81F3");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelement(14, "div", 9);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                var _r0 = i0.ɵɵreference(8);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("nzIconfont", "icon-epsgis-weibiaoti-");
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("hidden", !ctx.showInfo)("ngStyle", i0.ɵɵpureFunction2(9, _c0$2, ctx.winPos[0] - 65 + "px", ctx.winPos[3] + "px"));
                i0.ɵɵadvance(3);
                i0.ɵɵtextInterpolate(ctx.title);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("nzData", ctx.propertyList)("nzFrontPagination", false)("nzShowPagination", false)("nzTitle", null);
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("ngForOf", _r0.data);
            }
        }, directives: [i1$1.NzIconDirective, i2$1.ɵNzTransitionPatchDirective, i2$2.NgStyle, i5$2.NzTableComponent, i5$2.NzTbodyComponent, i2$2.NgForOf, i5$2.NzTrDirective, i5$2.NzTableCellDirective], styles: [".ant-table-tbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > td[_ngcontent-%COMP%], .ant-table-thead[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > th[_ngcontent-%COMP%], .ant-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > td[_ngcontent-%COMP%], .ant-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > th[_ngcontent-%COMP%]{padding:10px}  .ssmodal_content{overflow:overlay!important}.dialog[_ngcontent-%COMP%]{position:absolute;width:300px;min-height:60px;color:#000;border-radius:5px;cursor:pointer}.dialog[_ngcontent-%COMP%],   .ant-table-tbody>tr>td,   .ant-table-thead>tr>th{padding:5px}  tr.ant-table-row.ng-star-inserted:nth-child(odd){background-color:hsla(0,0%,66.3%,.6)}.arrow[_ngcontent-%COMP%]{margin-left:50px;width:0;height:0;border-top:10px solid #fff;border-left:10px solid transparent;border-right:10px solid transparent}.panel[_ngcontent-%COMP%]{background-color:#fff;padding:5px}.panel[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#000}.panel[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover{color:#0ff}.panel[_ngcontent-%COMP%]   .ant-table-wrapper[_ngcontent-%COMP%]{max-height:350px;overflow:overlay}"] });
    exports.PlanetIdentifyComponent = __decorate([
        i1.ComponentRegister({
            uri: "epsgis-planet-identify",
            path: "epsplanet/components/identify",
            name: "PlanetIdentifyComponent"
        })
    ], exports.PlanetIdentifyComponent);
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(exports.PlanetIdentifyComponent, [{
                type: i0.Component,
                args: [{
                        selector: "epsgis-planet-identify",
                        templateUrl: "./identify.component.html",
                        styleUrls: ["./identify.component.scss"],
                        host: {
                            "[class.jimu-widget-onscreen-icon]": "true",
                            "title": "识别"
                        }
                    }]
            }], function () { return [{ type: Identify }]; }, null);
    })();

    var components = [
        exports.PlanetEarthComponent,
        exports.PlanetLayerListComponent,
        exports.PlanetLayerManagerComponent,
        exports.PlanetStatusBarComponent,
        exports.PlanetHomeComponent,
        exports.PlanetLocationComponent,
        exports.PlanetModeSwitchComponent,
        exports.PlanetZoomComponent,
        exports.PlanetBasemapGalleryComponent,
        exports.PlanetIdentifyComponent
    ];
    var EpsGisForPlanetModule = /** @class */ (function () {
        function EpsGisForPlanetModule() {
        }
        return EpsGisForPlanetModule;
    }());
    EpsGisForPlanetModule.ɵmod = i0.ɵɵdefineNgModule({ type: EpsGisForPlanetModule });
    EpsGisForPlanetModule.ɵinj = i0.ɵɵdefineInjector({ factory: function EpsGisForPlanetModule_Factory(t) { return new (t || EpsGisForPlanetModule)(); }, imports: [[
                i2$2.CommonModule,
                http.HttpClientModule,
                i5.ReactiveFormsModule,
                i5.FormsModule,
                input.NzInputModule,
                i6.NzInputNumberModule,
                i1$1.NzIconModule,
                i2.NzTreeModule,
                treeView.NzTreeViewModule,
                i1$3.NzPopoverModule,
                i4$2.NzDividerModule,
                select.NzSelectModule,
                i4$1.NzButtonModule,
                menu.NzMenuModule,
                i1$2.NzDropDownModule,
                i4.NzSliderModule,
                i3.NzGridModule,
                i2$3.NzTabsModule,
                modal.NzModalModule,
                i5$2.NzTableModule,
                _switch.NzSwitchModule,
                tooltip.NzToolTipModule,
                form.NzFormModule,
                i1.EpsGisDirectivesModule
            ]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(EpsGisForPlanetModule, { declarations: [exports.PlanetEarthComponent,
                exports.PlanetLayerListComponent,
                exports.PlanetLayerManagerComponent,
                exports.PlanetStatusBarComponent,
                exports.PlanetHomeComponent,
                exports.PlanetLocationComponent,
                exports.PlanetModeSwitchComponent,
                exports.PlanetZoomComponent,
                exports.PlanetBasemapGalleryComponent,
                exports.PlanetIdentifyComponent], imports: [i2$2.CommonModule,
                http.HttpClientModule,
                i5.ReactiveFormsModule,
                i5.FormsModule,
                input.NzInputModule,
                i6.NzInputNumberModule,
                i1$1.NzIconModule,
                i2.NzTreeModule,
                treeView.NzTreeViewModule,
                i1$3.NzPopoverModule,
                i4$2.NzDividerModule,
                select.NzSelectModule,
                i4$1.NzButtonModule,
                menu.NzMenuModule,
                i1$2.NzDropDownModule,
                i4.NzSliderModule,
                i3.NzGridModule,
                i2$3.NzTabsModule,
                modal.NzModalModule,
                i5$2.NzTableModule,
                _switch.NzSwitchModule,
                tooltip.NzToolTipModule,
                form.NzFormModule,
                i1.EpsGisDirectivesModule], exports: [exports.PlanetEarthComponent,
                exports.PlanetLayerListComponent,
                exports.PlanetLayerManagerComponent,
                exports.PlanetStatusBarComponent,
                exports.PlanetHomeComponent,
                exports.PlanetLocationComponent,
                exports.PlanetModeSwitchComponent,
                exports.PlanetZoomComponent,
                exports.PlanetBasemapGalleryComponent,
                exports.PlanetIdentifyComponent] });
    })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EpsGisForPlanetModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: components,
                        imports: [
                            i2$2.CommonModule,
                            http.HttpClientModule,
                            i5.ReactiveFormsModule,
                            i5.FormsModule,
                            input.NzInputModule,
                            i6.NzInputNumberModule,
                            i1$1.NzIconModule,
                            i2.NzTreeModule,
                            treeView.NzTreeViewModule,
                            i1$3.NzPopoverModule,
                            i4$2.NzDividerModule,
                            select.NzSelectModule,
                            i4$1.NzButtonModule,
                            menu.NzMenuModule,
                            i1$2.NzDropDownModule,
                            i4.NzSliderModule,
                            i3.NzGridModule,
                            i2$3.NzTabsModule,
                            modal.NzModalModule,
                            i5$2.NzTableModule,
                            _switch.NzSwitchModule,
                            tooltip.NzToolTipModule,
                            form.NzFormModule,
                            i1.EpsGisDirectivesModule
                        ],
                        exports: components,
                        entryComponents: __spread(components)
                    }]
            }], null, null);
    })();

    exports.BasePlanetWidgetComponent = BasePlanetWidgetComponent;
    exports.EpsGisForPlanetModule = EpsGisForPlanetModule;
    exports.Identify = Identify;
    exports.SceneTreeUtils = SceneTreeUtils;
    exports.newXbsjFolderNode = newXbsjFolderNode;
    exports.newXbsjLayerNode = newXbsjLayerNode;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=epsplanet.umd.js.map
