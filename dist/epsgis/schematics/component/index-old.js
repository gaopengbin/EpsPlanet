"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createComponent = void 0;
const schematics_1 = require("@angular-devkit/schematics");
// import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';
const core_1 = require("@angular-devkit/core");
/**
 *
 * @param options
 * @returns
 */
function createComponent(options) {
    return (tree, context) => {
        // context.addTask(new NodePackageInstallTask());
        console.log(context.debug);
        // 如果不是 Angular 项目则抛出错误
        const workspaceConfig = tree.read('angular.json');
        if (!workspaceConfig) {
            throw new schematics_1.SchematicsException('Not an Angular CLI workspace');
        }
        const workspaceContent = workspaceConfig.toString();
        //const workspace: experimental.workspace.WorkspaceSchema
        const workspace = JSON.parse(workspaceContent);
        if (!options.project) {
            options.project = workspace.defaultProject;
        }
        const projectName = options.project;
        const project = workspace.projects[projectName];
        const projectType = project.projectType === 'application' ? 'app' : 'lib';
        if (options.path === undefined) {
            options.path = `${project.sourceRoot}/${projectType}`;
        }
        options.path = options.path + "/" + options.name;
        console.log(options.path);
        const templateSource = schematics_1.apply(schematics_1.url('./files'), [
            schematics_1.applyTemplates(Object.assign(Object.assign({}, options), core_1.strings)),
            schematics_1.move(core_1.normalize(options.path))
        ]);
        // return mergeWith(templateSource)(tree, context);
        return schematics_1.chain([schematics_1.mergeWith(templateSource)]);
    };
}
exports.createComponent = createComponent;
//# sourceMappingURL=index-old.js.map