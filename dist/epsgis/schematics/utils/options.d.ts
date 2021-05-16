import { Schema as ComponentOptions } from '@schematics/angular/component/schema';
/**
 * 创建组件的参数
 */
export interface EpsGISComponentOptions extends ComponentOptions {
    /**
     * 组件路径
     */
    compPath?: string;
    /**
     * 如果为true，则使用模块类名称作为组件类名称的附加前缀。
     */
    classNameWithModule?: boolean;
}
/**
 * 创建EpsGIS组件时的默认参数
 */
export declare const DefaultEpsGISComponentOptions: EpsGISComponentOptions;
