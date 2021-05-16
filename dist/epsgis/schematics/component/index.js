"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createComponent = void 0;
const schematics_1 = require("@angular-devkit/schematics");
const create_component_1 = require("../utils/create-component");
/**
 *
 * @param options
 * @returns
 */
function createComponent(options) {
    return schematics_1.chain([
        create_component_1.buildComponent(Object.assign({}, options))
    ]);
}
exports.createComponent = createComponent;
//# sourceMappingURL=index.js.map