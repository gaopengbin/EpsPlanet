import { OnInit, TemplateRef } from '@angular/core';
import * as i0 from "@angular/core";
export interface GlobalFooterProps {
    links?: {
        key?: string;
        title: TemplateRef<void> | string;
        href: string;
        blankTarget?: boolean;
    }[];
    copyright?: TemplateRef<void>;
    style?: string;
    className?: string;
}
export declare class GlobalFooterComponent implements OnInit {
    className: string;
    links: GlobalFooterProps['links'];
    copyright: TemplateRef<void> | string;
    constructor();
    ngOnInit(): void;
    isString(val: any): boolean;
    static ɵfac: i0.ɵɵFactoryDef<GlobalFooterComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<GlobalFooterComponent, "pro-global-footer,[pro-global-footer]", ["proGlobalFooter"], { "className": "className"; "links": "links"; "copyright": "copyright"; }, {}, never, never>;
}
