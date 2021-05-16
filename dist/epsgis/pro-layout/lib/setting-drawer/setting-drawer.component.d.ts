import { ChangeDetectorRef, EventEmitter, NgZone, OnInit, TemplateRef } from '@angular/core';
import { Settings } from '../core/default-settings';
import { NzMessageService } from 'ng-zorro-antd/message';
import { SettingsService } from '../core/settings.service';
import * as i0 from "@angular/core";
interface SettingItemProps {
    title: string;
    action: TemplateRef<void>[];
    disabled?: boolean;
    disabledReason?: string;
}
declare type MergerSettingsType<T> = Partial<T> & {
    primaryColor?: string;
    colorWeak?: boolean;
};
export declare class SettingDrawerComponent implements OnInit {
    private zone;
    private cdr;
    private settingsService;
    private messageService;
    settings: MergerSettingsType<Settings>;
    onSettingChange: EventEmitter<MergerSettingsType<Settings>>;
    onCollapseChange: EventEmitter<boolean>;
    renderItemTemplate: TemplateRef<void>;
    contentWidthActionTemplate: TemplateRef<void>;
    fixedHeaderActionTemplate: TemplateRef<void>;
    hideHeaderActionTemplate: TemplateRef<void>;
    fixedSidebarActionTemplate: TemplateRef<void>;
    colorWeakActionTemplate: TemplateRef<void>;
    collapse: boolean;
    pageStyleList: any[];
    navigationModeList: any[];
    layoutSetting: SettingItemProps[];
    otherSettings: SettingItemProps[];
    constructor(zone: NgZone, cdr: ChangeDetectorRef, settingsService: SettingsService, messageService: NzMessageService);
    ngOnInit(): void;
    changeSetting(key: string, value: string | boolean): void;
    togglerContent(): void;
    static ɵfac: i0.ɵɵFactoryDef<SettingDrawerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<SettingDrawerComponent, "pro-setting-drawer", ["proSettingDrawer"], { "settings": "settings"; }, { "onSettingChange": "onSettingChange"; "onCollapseChange": "onCollapseChange"; }, never, never>;
}
export {};
