"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildComponent = void 0;
const core_1 = require("@angular-devkit/core");
const schematics_1 = require("@angular-devkit/schematics");
const schematics_2 = require("@angular/cdk/schematics");
const schema_1 = require("@schematics/angular/component/schema");
const ts = require("@schematics/angular/third_party/github.com/Microsoft/TypeScript/lib/typescript");
const ast_utils_1 = require("@schematics/angular/utility/ast-utils");
const change_1 = require("@schematics/angular/utility/change");
const find_module_1 = require("@schematics/angular/utility/find-module");
const parse_name_1 = require("@schematics/angular/utility/parse-name");
const validation_1 = require("@schematics/angular/utility/validation");
const workspace_1 = require("@schematics/angular/utility/workspace");
const workspace_models_1 = require("@schematics/angular/utility/workspace-models");
const fs_1 = require("fs");
const path_1 = require("path");
const options_1 = require("./options");
/**
 * 递归查找父级声明
 * @param node
 * @returns
 */
function findClassDeclarationParent(node) {
    if (ts.isClassDeclaration(node)) {
        return node;
    }
    return node.parent && findClassDeclarationParent(node.parent);
}
/**
 * 找到第一个模块
 * @param source
 * @returns
 */
function getFirstNgModuleName(source) {
    //找到@NgModule装饰器。
    const ngModulesMetadata = ast_utils_1.getDecoratorMetadata(source, 'NgModule', '@angular/core');
    if (ngModulesMetadata.length === 0) {
        return undefined;
    }
    //遍历AST中的父类指针，寻找NgModule的类声明父类 ，元数据
    const moduleClass = findClassDeclarationParent(ngModulesMetadata[0]);
    if (!moduleClass || !moduleClass.name) {
        return undefined;
    }
    //获取模块类名称
    return moduleClass.name.text;
}
/**
 * 构建用于生成的默认项目路径。
 * @param project 要构建路径的项目
 */
function buildDefaultPath(project) {
    // "app": {
    //   "root": "",
    //   "sourceRoot": "src",
    //   "projectType": "application",
    const root = project.sourceRoot ? `/${project.sourceRoot}/` : `/${project.root}/src/`;
    //项目还是类库
    const projectDirName = project.extensions.projectType === workspace_models_1.ProjectType.Application ? 'app' : 'lib';
    //项目路径
    return `${root}${projectDirName}`;
}
/**
 * 与CSS兼容的样式扩展列表
 */
const supportedCssExtensions = ['css', 'scss', 'sass', 'less'];
/**
 *
 * @param host
 * @param modulePath
 * @returns
 */
function readIntoSourceFile(host, modulePath) {
    const text = host.read(modulePath);
    if (text === null) {
        throw new schematics_1.SchematicsException(`File ${modulePath} does not exist.`);
    }
    return ts.createSourceFile(modulePath, text.toString('utf-8'), ts.ScriptTarget.Latest, true);
}
/**
 * 获取模块类名前缀
 * @param source
 * @returns
 */
function getModuleClassNamePrefix(source) {
    var _a;
    const className = getFirstNgModuleName(source);
    if (className) {
        const execArray = /(\w+)Module/gi.exec(className);
        return (_a = execArray === null || execArray === void 0 ? void 0 : execArray[1]) !== null && _a !== void 0 ? _a : "";
    }
    else {
        return "";
    }
}
/**
 * 将组件添加到模块定义
 * @param options
 * @returns
 */
function addDeclarationToNgModule(options) {
    return (host) => {
        if (options.skipImport || !options.module) {
            //不导入或者没有模块时
            return host;
        }
        const modulePath = options.module;
        let source = readIntoSourceFile(host, modulePath);
        const componentPath = `/${options.path}/${options.flat ? '' : core_1.strings.dasherize(options.name) + '/'}${core_1.strings.dasherize(options.name)}.component`;
        const relativePath = find_module_1.buildRelativePath(modulePath, componentPath);
        let classifiedName = core_1.strings.classify(`${options.name}`);
        //setting
        const settingComponentPath = `/${options.path}/${options.flat ? '' : core_1.strings.dasherize(options.name) + '/'}/setting/${core_1.strings.dasherize(options.name)}-setting.component`;
        const settingRelativePath = find_module_1.buildRelativePath(modulePath, settingComponentPath);
        if (options.classNameWithModule) {
            const modulePrefix = getModuleClassNamePrefix(source);
            if (modulePrefix) {
                classifiedName = `${modulePrefix}${classifiedName}`;
            }
        }
        //先设置setting组件的名称
        const settingClassifiedName = classifiedName + "SettingComponent";
        classifiedName = classifiedName + "Component";
        //添加定义
        const declarationChanges = ast_utils_1.addDeclarationToModule(source, modulePath, classifiedName, relativePath);
        const declarationRecorder = host.beginUpdate(modulePath);
        for (const change of declarationChanges) {
            if (change instanceof change_1.InsertChange) {
                declarationRecorder.insertLeft(change.pos, change.toAdd);
            }
        }
        //提交
        host.commitUpdate(declarationRecorder);
        //添加setting定义
        //需要刷新AST、重新开始编辑，不然会重复添加declarations、exports、entryComponents
        source = readIntoSourceFile(host, modulePath);
        const settingDeclarationRecorder = host.beginUpdate(modulePath);
        const settingDeclarationChanges = ast_utils_1.addDeclarationToModule(source, modulePath, settingClassifiedName, settingRelativePath);
        for (const change of settingDeclarationChanges) {
            if (change instanceof change_1.InsertChange) {
                settingDeclarationRecorder.insertLeft(change.pos, change.toAdd);
            }
        }
        //提交
        host.commitUpdate(settingDeclarationRecorder);
        //导出
        if (options.export) {
            //重写了文件，需要刷新AST
            source = readIntoSourceFile(host, modulePath);
            const exportRecorder = host.beginUpdate(modulePath);
            const exportChanges = ast_utils_1.addExportToModule(source, modulePath, classifiedName, relativePath);
            for (const change of exportChanges) {
                if (change instanceof change_1.InsertChange) {
                    exportRecorder.insertLeft(change.pos, change.toAdd);
                }
            }
            host.commitUpdate(exportRecorder);
            /*
            * setting改为不导出 20210418，也就是options.export为true也不导出
            //setting export
            //重写了文件，需要刷新AST
            source = readIntoSourceFile(host, modulePath);
            const settingEportRecorder = host.beginUpdate(modulePath);
            const settingExportChanges = addExportToModule(
              source,
              modulePath,
              settingClassifiedName,
              settingRelativePath
            );
      
            for (const change of settingExportChanges) {
              if (change instanceof InsertChange) {
                settingEportRecorder.insertLeft(change.pos, change.toAdd);
              }
            }
            host.commitUpdate(settingEportRecorder);
            */
        }
        //添加到目录，动态创建组件时需要
        if (options.entryComponent) {
            //重写了文件，需要刷新AST
            source = readIntoSourceFile(host, modulePath);
            const entryComponentRecorder = host.beginUpdate(modulePath);
            const entryComponentChanges = ast_utils_1.addEntryComponentToModule(source, modulePath, classifiedName, relativePath);
            for (const change of entryComponentChanges) {
                if (change instanceof change_1.InsertChange) {
                    entryComponentRecorder.insertLeft(change.pos, change.toAdd);
                }
            }
            host.commitUpdate(entryComponentRecorder);
            //setting entryComponents
            //重写了文件，需要刷新AST
            source = readIntoSourceFile(host, modulePath);
            const settingEntryComponentRecorder = host.beginUpdate(modulePath);
            const settingEntryComponentChanges = ast_utils_1.addEntryComponentToModule(source, modulePath, settingClassifiedName, settingRelativePath);
            for (const change of settingEntryComponentChanges) {
                if (change instanceof change_1.InsertChange) {
                    settingEntryComponentRecorder.insertLeft(change.pos, change.toAdd);
                }
            }
            host.commitUpdate(settingEntryComponentRecorder);
        }
        return host;
    };
}
/**
 * 构建组件选择器
 * @param options
 * @param projectPrefix
 * @param modulePrefixName
 * @returns
 */
function buildSelector(options, projectPrefix, modulePrefixName) {
    let selector = core_1.strings.dasherize(options.name);
    let modulePrefix = '';
    if (modulePrefixName) {
        modulePrefix = core_1.strings.dasherize(modulePrefixName);
    }
    let _selector = "";
    //项目前缀
    if (projectPrefix) {
        _selector = projectPrefix;
    }
    //模块前缀，如果是根模块，就留一个，不然会造成app-app-cxxx
    if (modulePrefix && modulePrefix !== "app") {
        _selector = _selector + "-" + modulePrefix;
    }
    //组件前缀
    if (options.prefix) {
        _selector = _selector + "-" + options.prefix;
    }
    //自身选择器
    _selector = _selector + "-" + selector;
    // console.log("projectPrefix:", projectPrefix);
    // console.log("modulePrefixName:", modulePrefix);
    // console.log("options.prefix:", options.prefix);
    // console.log("_selector:", _selector);
    return _selector;
}
/**
 * 每一行使用指定的空格缩进文本内容，可以在EJS模板内部使用此实用程序，包括其他文件
 * @param text
 * @param numSpaces
 * @returns
 */
function indentTextContent(text, numSpaces) {
    //替换LF，CRLF，CR
    return text.replace(/(\r\n|\r|\n)/g, `$1${' '.repeat(numSpaces)}`);
}
/**
 * 创建组件
 * @param options
 * @param additionalFiles
 * @returns
 */
function buildComponent(options, additionalFiles = {}) {
    return (host, context) => __awaiter(this, void 0, void 0, function* () {
        options = Object.assign({}, options_1.DefaultEpsGISComponentOptions, options);
        const workspace = yield workspace_1.getWorkspace(host);
        const project = schematics_2.getProjectFromWorkspace(workspace, options.project);
        let defaultComponentOptions = schematics_2.getDefaultComponentOptions(project);
        let modulePrefix = '';
        //不需要支持老版本时可以删除
        //这可以处理@ angular-devkit/schematics中未报告的重大更改
        //以前，描述路径解析为工厂文件，但是从6.2.0开始，它将解析为工厂目录。
        const schematicPath = fs_1.statSync(context.schematic.description.path).isDirectory() ?
            context.schematic.description.path :
            path_1.dirname(context.schematic.description.path);
        const schematicFilesUrl = './files';
        const schematicFilesPath = path_1.resolve(schematicPath, schematicFilesUrl);
        //如果未明确指定参数，则使用默认参数
        options.style = options.style || schema_1.Style.Scss;
        Object.keys(options)
            .filter(optionName => options[optionName] == null && defaultComponentOptions[optionName])
            .forEach(optionName => options[optionName] = defaultComponentOptions[optionName]);
        if (options.path === undefined) {
            //这里有个兼容问题，project as any
            options.path = buildDefaultPath(project);
        }
        options.module = find_module_1.findModuleFromOptions(host, options);
        const parsedPath = parse_name_1.parseName(options.path, options.name);
        if (options.classNameWithModule && !options.skipImport && options.module) {
            const source = readIntoSourceFile(host, options.module);
            modulePrefix = getModuleClassNamePrefix(source);
        }
        options.name = parsedPath.name;
        options.path = parsedPath.path;
        options.selector = options.selector || buildSelector(options, project.prefix, modulePrefix);
        //直接替换src/app吧。类库等其他情况暂时不处理
        // console.log(parsedPath.path);
        //name 要兼容layerManager形式，所以要strings.dasherize(options.name)
        //特别是目录名称和组件路径
        const dasherizeName = core_1.strings.dasherize(options.name);
        options.compPath = options.path.replace(/\/src\/app\//, "") + "/" + dasherizeName;
        validation_1.validateName(options.name);
        validation_1.validateHtmlSelector(options.selector);
        //如果不是Style枚举中的后缀，则为css
        if (!supportedCssExtensions.includes(options.style)) {
            options.style = schema_1.Style.Css;
        }
        const classifyCovered = (name) => {
            return `${modulePrefix}${core_1.strings.classify(name)}`;
        };
        //模板
        const baseTemplateContext = Object.assign(Object.assign(Object.assign({}, core_1.strings), { 'if-flat': (s) => options.flat ? '' : s, classify: classifyCovered }), options);
        //包含指定的文件以及加载的内容，加载的内容可以在EJS模板中使用
        const resolvedFiles = {};
        for (const key in additionalFiles) {
            if (additionalFiles[key]) {
                const fileContent = fs_1.readFileSync(path_1.join(schematicFilesPath, additionalFiles[key]), 'utf-8');
                resolvedFiles[key] = core_1.template(fileContent)(baseTemplateContext);
            }
        }
        //根据参数过滤掉不需要的模板
        // console.log("options.skipTests:", options.skipTests);
        const templateSource = schematics_1.apply(schematics_1.url(schematicFilesUrl), [
            options.skipTests ? schematics_1.filter(path => !path.endsWith('.spec.ts.template')) : schematics_1.noop(),
            options.inlineStyle ? schematics_1.filter(path => !path.endsWith('.__style__.template')) : schematics_1.noop(),
            options.inlineTemplate ? schematics_1.filter(path => !path.endsWith('.html.template')) : schematics_1.noop(),
            schematics_1.applyTemplates(Object.assign({ indentTextContent, resolvedFiles }, baseTemplateContext)),
            schematics_1.move(path_1.normalize(parsedPath.path + "/" + dasherizeName))
        ]);
        return () => schematics_1.chain([
            schematics_1.branchAndMerge(schematics_1.chain([
                addDeclarationToNgModule(options),
                schematics_1.mergeWith(templateSource)
            ]))
        ])(host, context);
    });
}
exports.buildComponent = buildComponent;
//# sourceMappingURL=create-component.js.map