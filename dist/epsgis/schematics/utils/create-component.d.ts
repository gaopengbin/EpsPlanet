import { Rule } from '@angular-devkit/schematics';
import { EpsGISComponentOptions } from './options';
/**
 * 创建组件
 * @param options
 * @param additionalFiles
 * @returns
 */
export declare function buildComponent(options: EpsGISComponentOptions, additionalFiles?: {
    [key: string]: string;
}): Rule;
