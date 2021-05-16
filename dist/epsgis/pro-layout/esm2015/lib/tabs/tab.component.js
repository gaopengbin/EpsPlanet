import { __decorate } from "tslib";
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, ContentChild, EventEmitter, Inject, InjectionToken, Input, Output, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { ProTabLinkDirective, ProTabLinkTemplateDirective } from './tab-link.directive';
import { ProTabDirective } from './tab.directive';
import * as i0 from "@angular/core";
const _c0 = ["tabLinkTemplate"];
const _c1 = ["contentTemplate"];
function ProTabComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0);
} }
function ProTabComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0, 1);
} }
const _c2 = [[["", "pro-tab-link", ""]], "*"];
const _c3 = ["[pro-tab-link]", "*"];
/**
 * Used to provide a tab set to a tab without causing a circular dependency.
 */
export const PRO_TAB_SET = new InjectionToken('PRO_TAB_SET');
export class ProTabComponent {
    constructor(closestTabSet) {
        this.closestTabSet = closestTabSet;
        this.nzTitle = '';
        this.nzClosable = false;
        this.nzCloseIcon = 'close';
        this.nzDisabled = false;
        this.nzForceRender = false;
        this.nzSelect = new EventEmitter();
        this.nzDeselect = new EventEmitter();
        this.nzClick = new EventEmitter();
        this.nzContextmenu = new EventEmitter();
        this.template = null;
        this.isActive = false;
        this.position = null;
        this.origin = null;
        this.stateChanges = new Subject();
    }
    get content() {
        return this.template || this.contentTemplate;
    }
    get label() {
        return this.nzTitle || this.ProTabLinkTemplateDirective.templateRef || this.tabLinkTemplate;
    }
    ngOnChanges(changes) {
        const { nzTitle, nzDisabled, nzForceRender } = changes;
        if (nzTitle || nzDisabled || nzForceRender) {
            this.stateChanges.next();
        }
    }
    ngOnDestroy() {
        this.stateChanges.complete();
    }
    ngOnInit() { }
}
ProTabComponent.ɵfac = function ProTabComponent_Factory(t) { return new (t || ProTabComponent)(i0.ɵɵdirectiveInject(PRO_TAB_SET)); };
ProTabComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ProTabComponent, selectors: [["pro-tab"]], contentQueries: function ProTabComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        i0.ɵɵcontentQuery(dirIndex, ProTabLinkTemplateDirective, 1);
        i0.ɵɵcontentQuery(dirIndex, ProTabDirective, 1, TemplateRef);
        i0.ɵɵcontentQuery(dirIndex, ProTabLinkDirective, 1);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.ProTabLinkTemplateDirective = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.template = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.linkDirective = _t.first);
    } }, viewQuery: function ProTabComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 3);
        i0.ɵɵviewQuery(_c1, 3);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.tabLinkTemplate = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.contentTemplate = _t.first);
    } }, inputs: { nzTitle: "nzTitle", nzClosable: "nzClosable", nzCloseIcon: "nzCloseIcon", nzDisabled: "nzDisabled", nzForceRender: "nzForceRender" }, outputs: { nzSelect: "nzSelect", nzDeselect: "nzDeselect", nzClick: "nzClick", nzContextmenu: "nzContextmenu" }, exportAs: ["proTab"], features: [i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c3, decls: 4, vars: 0, consts: [["tabLinkTemplate", ""], ["contentTemplate", ""]], template: function ProTabComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef(_c2);
        i0.ɵɵtemplate(0, ProTabComponent_ng_template_0_Template, 1, 0, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(2, ProTabComponent_ng_template_2_Template, 1, 0, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
    } }, encapsulation: 2, changeDetection: 0 });
__decorate([
    InputBoolean()
], ProTabComponent.prototype, "nzClosable", void 0);
__decorate([
    InputBoolean()
], ProTabComponent.prototype, "nzDisabled", void 0);
__decorate([
    InputBoolean()
], ProTabComponent.prototype, "nzForceRender", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProTabComponent, [{
        type: Component,
        args: [{
                selector: 'pro-tab',
                exportAs: 'proTab',
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <ng-template #tabLinkTemplate>
      <ng-content select="[pro-tab-link]"></ng-content>
    </ng-template>
    <ng-template #contentTemplate><ng-content></ng-content></ng-template>
  `
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PRO_TAB_SET]
            }] }]; }, { nzTitle: [{
            type: Input
        }], nzClosable: [{
            type: Input
        }], nzCloseIcon: [{
            type: Input
        }], nzDisabled: [{
            type: Input
        }], nzForceRender: [{
            type: Input
        }], nzSelect: [{
            type: Output
        }], nzDeselect: [{
            type: Output
        }], nzClick: [{
            type: Output
        }], nzContextmenu: [{
            type: Output
        }], tabLinkTemplate: [{
            type: ViewChild,
            args: ['tabLinkTemplate', { static: true }]
        }], ProTabLinkTemplateDirective: [{
            type: ContentChild,
            args: [ProTabLinkTemplateDirective]
        }], template: [{
            type: ContentChild,
            args: [ProTabDirective, { read: TemplateRef }]
        }], linkDirective: [{
            type: ContentChild,
            args: [ProTabLinkDirective]
        }], contentTemplate: [{
            type: ViewChild,
            args: ['contentTemplate', { static: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3Byby1sYXlvdXQvc3JjL2xpYi90YWJzL3RhYi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7R0FHRztBQUVILE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixZQUFZLEVBQ1osTUFBTSxFQUNOLGNBQWMsRUFDZCxLQUFLLEVBSUwsTUFBTSxFQUVOLFdBQVcsRUFDWCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBR3ZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFL0IsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRXZELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7Ozs7SUFlNUMsa0JBQWlEOzs7SUFFckIscUJBQXlCOzs7O0FBZjNEOztHQUVHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sV0FBVyxHQUFHLElBQUksY0FBYyxDQUFNLGFBQWEsQ0FBQyxDQUFDO0FBZWxFLE1BQU0sT0FBTyxlQUFlO0lBbUMxQixZQUF3QyxhQUFrQjtRQUFsQixrQkFBYSxHQUFiLGFBQWEsQ0FBSztRQWpDakQsWUFBTyxHQUE2QyxFQUFFLENBQUM7UUFDdkMsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQyxnQkFBVyxHQUE4QixPQUFPLENBQUM7UUFDakMsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUM1QixhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUNwQyxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUN0QyxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUNuQyxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7UUFRWixhQUFRLEdBQTZCLElBQUksQ0FBQztRQUloRyxhQUFRLEdBQVksS0FBSyxDQUFDO1FBQzFCLGFBQVEsR0FBa0IsSUFBSSxDQUFDO1FBQy9CLFdBQU0sR0FBa0IsSUFBSSxDQUFDO1FBQ3BCLGlCQUFZLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztJQVVpQixDQUFDO0lBUjlELElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQy9DLENBQUM7SUFFRCxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLDJCQUEyQixDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQzlGLENBQUM7SUFJRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsTUFBTSxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsYUFBYSxFQUFFLEdBQUcsT0FBTyxDQUFDO1FBQ3ZELElBQUksT0FBTyxJQUFJLFVBQVUsSUFBSSxhQUFhLEVBQUU7WUFDMUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUMxQjtJQUNILENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBRUQsUUFBUSxLQUFVLENBQUM7OzhFQWhEUixlQUFlLHVCQW1DTixXQUFXO29EQW5DcEIsZUFBZTtvQ0FpQlosMkJBQTJCO29DQUMzQixlQUFlLEtBQVUsV0FBVztvQ0FDcEMsbUJBQW1COzs7Ozs7Ozs7Ozs7Ozs7UUF6Qi9CLGlIQUVjO1FBQ2QsaUhBQXFFOztBQU05QztJQUFmLFlBQVksRUFBRTttREFBb0I7QUFFbkI7SUFBZixZQUFZLEVBQUU7bURBQW9CO0FBQ25CO0lBQWYsWUFBWSxFQUFFO3NEQUF1Qjt1RkFOcEMsZUFBZTtjQWIzQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLFNBQVM7Z0JBQ25CLFFBQVEsRUFBRSxRQUFRO2dCQUNsQixtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLFFBQVEsRUFBRTs7Ozs7R0FLVDthQUNGOztzQkFvQ2MsTUFBTTt1QkFBQyxXQUFXO3dCQWpDdEIsT0FBTztrQkFBZixLQUFLO1lBQ21CLFVBQVU7a0JBQWxDLEtBQUs7WUFDRyxXQUFXO2tCQUFuQixLQUFLO1lBQ21CLFVBQVU7a0JBQWxDLEtBQUs7WUFDbUIsYUFBYTtrQkFBckMsS0FBSztZQUNhLFFBQVE7a0JBQTFCLE1BQU07WUFDWSxVQUFVO2tCQUE1QixNQUFNO1lBQ1ksT0FBTztrQkFBekIsTUFBTTtZQUNZLGFBQWE7a0JBQS9CLE1BQU07WUFNeUMsZUFBZTtrQkFBOUQsU0FBUzttQkFBQyxpQkFBaUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7WUFDSCwyQkFBMkI7a0JBQXJFLFlBQVk7bUJBQUMsMkJBQTJCO1lBQ2EsUUFBUTtrQkFBN0QsWUFBWTttQkFBQyxlQUFlLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO1lBQ2pCLGFBQWE7a0JBQS9DLFlBQVk7bUJBQUMsbUJBQW1CO1lBQ2UsZUFBZTtrQkFBOUQsU0FBUzttQkFBQyxpQkFBaUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5qZWN0LFxuICBJbmplY3Rpb25Ub2tlbixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUYWJUZW1wbGF0ZUNvbnRleHQgfSBmcm9tICcuL2ludGVyZmFjZXMnO1xuXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcblxuaW1wb3J0IHsgUHJvVGFiTGlua0RpcmVjdGl2ZSwgUHJvVGFiTGlua1RlbXBsYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi90YWItbGluay5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgUHJvVGFiRGlyZWN0aXZlIH0gZnJvbSAnLi90YWIuZGlyZWN0aXZlJztcblxuLyoqXG4gKiBVc2VkIHRvIHByb3ZpZGUgYSB0YWIgc2V0IHRvIGEgdGFiIHdpdGhvdXQgY2F1c2luZyBhIGNpcmN1bGFyIGRlcGVuZGVuY3kuXG4gKi9cbmV4cG9ydCBjb25zdCBQUk9fVEFCX1NFVCA9IG5ldyBJbmplY3Rpb25Ub2tlbjxhbnk+KCdQUk9fVEFCX1NFVCcpO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwcm8tdGFiJyxcbiAgZXhwb3J0QXM6ICdwcm9UYWInLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLXRlbXBsYXRlICN0YWJMaW5rVGVtcGxhdGU+XG4gICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbcHJvLXRhYi1saW5rXVwiPjwvbmctY29udGVudD5cbiAgICA8L25nLXRlbXBsYXRlPlxuICAgIDxuZy10ZW1wbGF0ZSAjY29udGVudFRlbXBsYXRlPjxuZy1jb250ZW50PjwvbmctY29udGVudD48L25nLXRlbXBsYXRlPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIFByb1RhYkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPbkluaXQge1xuXG4gIEBJbnB1dCgpIG56VGl0bGU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPFRhYlRlbXBsYXRlQ29udGV4dD4gPSAnJztcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56Q2xvc2FibGUgPSBmYWxzZTtcbiAgQElucHV0KCkgbnpDbG9zZUljb246IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT4gPSAnY2xvc2UnO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpEaXNhYmxlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpGb3JjZVJlbmRlciA9IGZhbHNlO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpTZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuekRlc2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56Q29udGV4dG1lbnUgPSBuZXcgRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+KCk7XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIFdpbGwgYmUgcmVtb3ZlZCBpbiAxMS4wLjBcbiAgICogQGJyZWFraW5nLWNoYW5nZSAxMS4wLjBcbiAgICovXG4gIEBWaWV3Q2hpbGQoJ3RhYkxpbmtUZW1wbGF0ZScsIHsgc3RhdGljOiB0cnVlIH0pIHRhYkxpbmtUZW1wbGF0ZSE6IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBAQ29udGVudENoaWxkKFByb1RhYkxpbmtUZW1wbGF0ZURpcmVjdGl2ZSkgUHJvVGFiTGlua1RlbXBsYXRlRGlyZWN0aXZlITogUHJvVGFiTGlua1RlbXBsYXRlRGlyZWN0aXZlO1xuICBAQ29udGVudENoaWxkKFByb1RhYkRpcmVjdGl2ZSwgeyByZWFkOiBUZW1wbGF0ZVJlZiB9KSB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8dm9pZD4gfCBudWxsID0gbnVsbDtcbiAgQENvbnRlbnRDaGlsZChQcm9UYWJMaW5rRGlyZWN0aXZlKSBsaW5rRGlyZWN0aXZlITogUHJvVGFiTGlua0RpcmVjdGl2ZTtcbiAgQFZpZXdDaGlsZCgnY29udGVudFRlbXBsYXRlJywgeyBzdGF0aWM6IHRydWUgfSkgY29udGVudFRlbXBsYXRlITogVGVtcGxhdGVSZWY8YW55PjtcblxuICBpc0FjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xuICBwb3NpdGlvbjogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG4gIG9yaWdpbjogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG4gIHJlYWRvbmx5IHN0YXRlQ2hhbmdlcyA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgZ2V0IGNvbnRlbnQoKTogVGVtcGxhdGVSZWY8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMudGVtcGxhdGUgfHwgdGhpcy5jb250ZW50VGVtcGxhdGU7XG4gIH1cblxuICBnZXQgbGFiZWwoKTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMubnpUaXRsZSB8fCB0aGlzLlByb1RhYkxpbmtUZW1wbGF0ZURpcmVjdGl2ZS50ZW1wbGF0ZVJlZiB8fCB0aGlzLnRhYkxpbmtUZW1wbGF0ZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoUFJPX1RBQl9TRVQpIHB1YmxpYyBjbG9zZXN0VGFiU2V0OiBhbnkpIHt9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGNvbnN0IHsgbnpUaXRsZSwgbnpEaXNhYmxlZCwgbnpGb3JjZVJlbmRlciB9ID0gY2hhbmdlcztcbiAgICBpZiAobnpUaXRsZSB8fCBuekRpc2FibGVkIHx8IG56Rm9yY2VSZW5kZXIpIHtcbiAgICAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnN0YXRlQ2hhbmdlcy5jb21wbGV0ZSgpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7fVxufVxuIl19