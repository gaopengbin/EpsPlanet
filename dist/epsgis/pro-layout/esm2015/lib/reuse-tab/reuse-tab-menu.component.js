import { ChangeDetectionStrategy, Component, EventEmitter, HostListener, Input, Output, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/menu";
import * as i2 from "@angular/common";
function ReuseTabMenuComponent_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 5);
    i0.ɵɵlistener("click", function ReuseTabMenuComponent_li_1_Template_li_click_0_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r1 = i0.ɵɵnextContext(); return ctx_r1.click($event, "refresh"); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("innerHTML", "\u5237\u65B0", i0.ɵɵsanitizeHtml);
} }
export class ReuseTabMenuComponent {
    constructor() {
        this.close = new EventEmitter();
    }
    documentClick(event) {
        this.closeMenu(event);
    }
    documentContextmenu(event) {
        this.closeMenu(event);
    }
    get includeNonCloseable() {
        return this.event.ctrlKey;
    }
    ngOnInit() {
        if (this.includeNonCloseable)
            this.item.closable = true;
    }
    notify(type) {
        this.close.next({
            type,
            item: this.item,
            includeNonCloseable: this.includeNonCloseable,
        });
    }
    click(e, type) {
        e.preventDefault();
        e.stopPropagation();
        if (type === 'refresh' && !this.item.refreshable)
            return;
        if (type === 'close' && !this.item.closable)
            return;
        if (type === 'closeRight' && this.item.last)
            return;
        this.notify(type);
    }
    closeMenu(event) {
        if (event.type === 'click' && event.button === 2)
            return;
        this.notify(null);
    }
}
ReuseTabMenuComponent.ɵfac = function ReuseTabMenuComponent_Factory(t) { return new (t || ReuseTabMenuComponent)(); };
ReuseTabMenuComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ReuseTabMenuComponent, selectors: [["pro-reuse-tab-context-menu"]], hostBindings: function ReuseTabMenuComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("click", function ReuseTabMenuComponent_click_HostBindingHandler($event) { return ctx.documentClick($event); }, false, i0.ɵɵresolveDocument)("contextmenu", function ReuseTabMenuComponent_contextmenu_HostBindingHandler($event) { return ctx.documentContextmenu($event); }, false, i0.ɵɵresolveDocument);
    } }, inputs: { item: "item", event: "event" }, outputs: { close: "close" }, exportAs: ["proReuseTabContextMenu"], decls: 5, vars: 6, consts: [["nz-menu", ""], ["nz-menu-item", "", "data-type", "refresh", 3, "innerHTML", "click", 4, "ngIf"], ["nz-menu-item", "", "data-type", "close", 3, "nzDisabled", "innerHTML", "click"], ["nz-menu-item", "", "data-type", "closeOther", 3, "innerHTML", "click"], ["nz-menu-item", "", "data-type", "closeRight", 3, "nzDisabled", "innerHTML", "click"], ["nz-menu-item", "", "data-type", "refresh", 3, "innerHTML", "click"]], template: function ReuseTabMenuComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "ul", 0);
        i0.ɵɵtemplate(1, ReuseTabMenuComponent_li_1_Template, 1, 1, "li", 1);
        i0.ɵɵelementStart(2, "li", 2);
        i0.ɵɵlistener("click", function ReuseTabMenuComponent_Template_li_click_2_listener($event) { return ctx.click($event, "close"); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "li", 3);
        i0.ɵɵlistener("click", function ReuseTabMenuComponent_Template_li_click_3_listener($event) { return ctx.click($event, "closeOther"); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "li", 4);
        i0.ɵɵlistener("click", function ReuseTabMenuComponent_Template_li_click_4_listener($event) { return ctx.click($event, "closeRight"); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.item.refreshable);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("nzDisabled", !ctx.item.closable)("innerHTML", "\u5173\u95ED", i0.ɵɵsanitizeHtml);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("innerHTML", "\u5173\u95ED\u5176\u4ED6", i0.ɵɵsanitizeHtml);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("nzDisabled", ctx.item.last)("innerHTML", "\u5173\u95ED\u53F3\u4FA7", i0.ɵɵsanitizeHtml);
    } }, directives: [i1.NzMenuDirective, i2.NgIf, i1.NzMenuItemDirective], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ReuseTabMenuComponent, [{
        type: Component,
        args: [{
                selector: 'pro-reuse-tab-context-menu',
                template: `
      <ul nz-menu>
          <li nz-menu-item (click)="click($event, 'refresh')" *ngIf="item.refreshable" data-type="refresh" [innerHTML]="'刷新'"></li>
          <li nz-menu-item (click)="click($event, 'close')" data-type="close" [nzDisabled]="!item.closable" [innerHTML]="'关闭'"></li>
          <li nz-menu-item (click)="click($event, 'closeOther')" data-type="closeOther" [innerHTML]="'关闭其他'"></li>
          <li nz-menu-item (click)="click($event, 'closeRight')" data-type="closeRight" [nzDisabled]="item.last" [innerHTML]="'关闭右侧'"></li>
      </ul>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                exportAs: 'proReuseTabContextMenu',
                preserveWhitespaces: false
            }]
    }], function () { return []; }, { item: [{
            type: Input
        }], event: [{
            type: Input
        }], close: [{
            type: Output
        }], documentClick: [{
            type: HostListener,
            args: ['document:click', ['$event']]
        }], documentContextmenu: [{
            type: HostListener,
            args: ['document:contextmenu', ['$event']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV1c2UtdGFiLW1lbnUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcHJvLWxheW91dC9zcmMvbGliL3JldXNlLXRhYi9yZXVzZS10YWItbWVudS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxFQUNOLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQzs7Ozs7O0lBT2IsNkJBQW9IO0lBQW5HLHdMQUF1QixTQUFTLEtBQUU7SUFBaUUsaUJBQUs7O0lBQXhCLDZEQUFrQjs7QUFXN0gsTUFBTSxPQUFPLHFCQUFxQjtJQW9CaEM7UUFoQm1CLFVBQUssR0FBRyxJQUFJLFlBQVksRUFBMEIsQ0FBQztJQWlCdEUsQ0FBQztJQWRELGFBQWEsQ0FBQyxLQUFLO1FBQ2pCLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQUdELG1CQUFtQixDQUFDLEtBQUs7UUFDdkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBRUQsSUFBSSxtQkFBbUI7UUFDckIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztJQUM1QixDQUFDO0lBS0QsUUFBUTtRQUNOLElBQUksSUFBSSxDQUFDLG1CQUFtQjtZQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztJQUMxRCxDQUFDO0lBRU8sTUFBTSxDQUFDLElBQWU7UUFDNUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7WUFDZCxJQUFJO1lBQ0osSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLG1CQUFtQjtTQUM5QyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsS0FBSyxDQUFDLENBQWEsRUFBRSxJQUFlO1FBQ2xDLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNuQixDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDcEIsSUFBSSxJQUFJLEtBQUssU0FBUyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXO1lBQUUsT0FBTztRQUN6RCxJQUFJLElBQUksS0FBSyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVE7WUFBRSxPQUFPO1FBQ3BELElBQUksSUFBSSxLQUFLLFlBQVksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBRXBELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEIsQ0FBQztJQUVELFNBQVMsQ0FBQyxLQUFpQjtRQUN6QixJQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssT0FBTyxJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQztZQUFFLE9BQU87UUFDekQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQixDQUFDOzswRkFoRFUscUJBQXFCOzBEQUFyQixxQkFBcUI7d0dBQXJCLHlCQUFxQixnSUFBckIsK0JBQTJCOztRQVpsQyw2QkFBWTtRQUNSLG9FQUF5SDtRQUN6SCw2QkFBcUg7UUFBcEcsb0dBQVMsa0JBQWMsT0FBTyxDQUFDLElBQUM7UUFBb0UsaUJBQUs7UUFDMUgsNkJBQW1HO1FBQWxGLG9HQUFTLGtCQUFjLFlBQVksQ0FBQyxJQUFDO1FBQTZDLGlCQUFLO1FBQ3hHLDZCQUE0SDtRQUEzRyxvR0FBUyxrQkFBYyxZQUFZLENBQUMsSUFBQztRQUFzRSxpQkFBSztRQUNySSxpQkFBSzs7UUFKb0QsZUFBc0I7UUFBdEIsMkNBQXNCO1FBQ1AsZUFBNkI7UUFBN0IsK0NBQTZCLGdEQUFBO1FBQ25CLGVBQW9CO1FBQXBCLHlFQUFvQjtRQUNwQixlQUF3QjtRQUF4QiwwQ0FBd0IsNERBQUE7O3VGQVFuRyxxQkFBcUI7Y0FmakMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSw0QkFBNEI7Z0JBQ3RDLFFBQVEsRUFBRTs7Ozs7OztHQU9UO2dCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsUUFBUSxFQUFFLHdCQUF3QjtnQkFDbEMsbUJBQW1CLEVBQUUsS0FBSzthQUMzQjtzQ0FHVSxJQUFJO2tCQUFaLEtBQUs7WUFDRyxLQUFLO2tCQUFiLEtBQUs7WUFDYSxLQUFLO2tCQUF2QixNQUFNO1lBR1AsYUFBYTtrQkFEWixZQUFZO21CQUFDLGdCQUFnQixFQUFFLENBQUMsUUFBUSxDQUFDO1lBTTFDLG1CQUFtQjtrQkFEbEIsWUFBWTttQkFBQyxzQkFBc0IsRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdExpc3RlbmVyLFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDbG9zZVR5cGUsIFJldXNlQ29udGV4dENsb3NlRXZlbnQsIFJldXNlSXRlbX0gZnJvbSBcIi4vcmV1c2UtdGFiLmludGVyZmFjZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwcm8tcmV1c2UtdGFiLWNvbnRleHQtbWVudScsXG4gIHRlbXBsYXRlOiBgXG4gICAgICA8dWwgbnotbWVudT5cbiAgICAgICAgICA8bGkgbnotbWVudS1pdGVtIChjbGljayk9XCJjbGljaygkZXZlbnQsICdyZWZyZXNoJylcIiAqbmdJZj1cIml0ZW0ucmVmcmVzaGFibGVcIiBkYXRhLXR5cGU9XCJyZWZyZXNoXCIgW2lubmVySFRNTF09XCIn5Yi35pawJ1wiPjwvbGk+XG4gICAgICAgICAgPGxpIG56LW1lbnUtaXRlbSAoY2xpY2spPVwiY2xpY2soJGV2ZW50LCAnY2xvc2UnKVwiIGRhdGEtdHlwZT1cImNsb3NlXCIgW256RGlzYWJsZWRdPVwiIWl0ZW0uY2xvc2FibGVcIiBbaW5uZXJIVE1MXT1cIiflhbPpl60nXCI+PC9saT5cbiAgICAgICAgICA8bGkgbnotbWVudS1pdGVtIChjbGljayk9XCJjbGljaygkZXZlbnQsICdjbG9zZU90aGVyJylcIiBkYXRhLXR5cGU9XCJjbG9zZU90aGVyXCIgW2lubmVySFRNTF09XCIn5YWz6Zet5YW25LuWJ1wiPjwvbGk+XG4gICAgICAgICAgPGxpIG56LW1lbnUtaXRlbSAoY2xpY2spPVwiY2xpY2soJGV2ZW50LCAnY2xvc2VSaWdodCcpXCIgZGF0YS10eXBlPVwiY2xvc2VSaWdodFwiIFtuekRpc2FibGVkXT1cIml0ZW0ubGFzdFwiIFtpbm5lckhUTUxdPVwiJ+WFs+mXreWPs+S+pydcIj48L2xpPlxuICAgICAgPC91bD5cbiAgYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGV4cG9ydEFzOiAncHJvUmV1c2VUYWJDb250ZXh0TWVudScsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlXG59KVxuZXhwb3J0IGNsYXNzIFJldXNlVGFiTWVudUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgaXRlbTogUmV1c2VJdGVtO1xuICBASW5wdXQoKSBldmVudDogTW91c2VFdmVudDtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNsb3NlID0gbmV3IEV2ZW50RW1pdHRlcjxSZXVzZUNvbnRleHRDbG9zZUV2ZW50PigpO1xuXG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OmNsaWNrJywgWyckZXZlbnQnXSlcbiAgZG9jdW1lbnRDbGljayhldmVudCkge1xuICAgIHRoaXMuY2xvc2VNZW51KGV2ZW50KTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OmNvbnRleHRtZW51JywgWyckZXZlbnQnXSlcbiAgZG9jdW1lbnRDb250ZXh0bWVudShldmVudCkge1xuICAgIHRoaXMuY2xvc2VNZW51KGV2ZW50KTtcbiAgfVxuXG4gIGdldCBpbmNsdWRlTm9uQ2xvc2VhYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmV2ZW50LmN0cmxLZXk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmluY2x1ZGVOb25DbG9zZWFibGUpIHRoaXMuaXRlbS5jbG9zYWJsZSA9IHRydWU7XG4gIH1cblxuICBwcml2YXRlIG5vdGlmeSh0eXBlOiBDbG9zZVR5cGUpOiB2b2lkIHtcbiAgICB0aGlzLmNsb3NlLm5leHQoe1xuICAgICAgdHlwZSxcbiAgICAgIGl0ZW06IHRoaXMuaXRlbSxcbiAgICAgIGluY2x1ZGVOb25DbG9zZWFibGU6IHRoaXMuaW5jbHVkZU5vbkNsb3NlYWJsZSxcbiAgICB9KTtcbiAgfVxuXG4gIGNsaWNrKGU6IE1vdXNlRXZlbnQsIHR5cGU6IENsb3NlVHlwZSk6IHZvaWQge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGlmICh0eXBlID09PSAncmVmcmVzaCcgJiYgIXRoaXMuaXRlbS5yZWZyZXNoYWJsZSkgcmV0dXJuO1xuICAgIGlmICh0eXBlID09PSAnY2xvc2UnICYmICF0aGlzLml0ZW0uY2xvc2FibGUpIHJldHVybjtcbiAgICBpZiAodHlwZSA9PT0gJ2Nsb3NlUmlnaHQnICYmIHRoaXMuaXRlbS5sYXN0KSByZXR1cm47XG5cbiAgICB0aGlzLm5vdGlmeSh0eXBlKTtcbiAgfVxuXG4gIGNsb3NlTWVudShldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGlmIChldmVudC50eXBlID09PSAnY2xpY2snICYmIGV2ZW50LmJ1dHRvbiA9PT0gMikgcmV0dXJuO1xuICAgIHRoaXMubm90aWZ5KG51bGwpO1xuICB9XG59XG4iXX0=