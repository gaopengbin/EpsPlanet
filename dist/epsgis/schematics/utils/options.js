"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultEpsGISComponentOptions = void 0;
const schema_1 = require("@schematics/angular/component/schema");
/**
 * 创建EpsGIS组件时的默认参数
 */
exports.DefaultEpsGISComponentOptions = {
    name: "not-name",
    style: schema_1.Style.Scss,
    skipImport: false,
    skipSelector: false,
    skipTests: true,
    entryComponent: true,
    export: false,
    spec: false,
    flat: false,
    inlineStyle: false,
    inlineTemplate: false,
    classNameWithModule: true
};
//# sourceMappingURL=options.js.map