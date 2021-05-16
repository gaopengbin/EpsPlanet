import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "ng-zorro-antd/tooltip";
import * as i3 from "ng-zorro-antd/core/transition-patch";
import * as i4 from "ng-zorro-antd/icon";
function BlockCheckboxComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "span", 1);
    i0.ɵɵelementStart(2, "div", 2);
    i0.ɵɵlistener("click", function BlockCheckboxComponent_ng_container_0_Template_div_click_2_listener() { i0.ɵɵrestoreView(_r3); const item_r1 = ctx.$implicit; const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.select(item_r1.key); });
    i0.ɵɵelement(3, "img", 3);
    i0.ɵɵelementStart(4, "div");
    i0.ɵɵelement(5, "i", 4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzTooltipTitle", item_r1.title);
    i0.ɵɵadvance(1);
    i0.ɵɵclassMapInterpolate1("", ctx_r0.baseClassName, "-item");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("src", item_r1.url, i0.ɵɵsanitizeUrl);
    i0.ɵɵattribute("alt", item_r1.key);
    i0.ɵɵadvance(1);
    i0.ɵɵclassMapInterpolate1("", ctx_r0.baseClassName, "-selectIcon");
    i0.ɵɵstyleProp("display", ctx_r0.value === item_r1.key ? "block" : "none");
} }
export class BlockCheckboxComponent {
    constructor() {
        this.list = [];
        this.onChange = new EventEmitter();
        this.baseClassName = 'ant-pro-setting-drawer-block-checbox';
    }
    ngOnInit() {
    }
    select(key) {
        this.value = key;
        this.onChange.emit(this.value);
    }
}
BlockCheckboxComponent.ɵfac = function BlockCheckboxComponent_Factory(t) { return new (t || BlockCheckboxComponent)(); };
BlockCheckboxComponent.ɵcmp = i0.ɵɵdefineComponent({ type: BlockCheckboxComponent, selectors: [["pro-block-checkbox"]], hostVars: 2, hostBindings: function BlockCheckboxComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassMap(ctx.baseClassName);
    } }, inputs: { value: "value", list: "list" }, outputs: { onChange: "onChange" }, exportAs: ["proBlockCheckbox"], decls: 1, vars: 1, consts: [[4, "ngFor", "ngForOf"], ["nz-tooltip", "", 3, "nzTooltipTitle"], [3, "click"], [3, "src"], ["nz-icon", "", "nzType", "check"]], template: function BlockCheckboxComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, BlockCheckboxComponent_ng_container_0_Template, 6, 11, "ng-container", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngForOf", ctx.list);
    } }, directives: [i1.NgForOf, i2.NzTooltipDirective, i3.ɵNzTransitionPatchDirective, i4.NzIconDirective], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BlockCheckboxComponent, [{
        type: Component,
        args: [{
                selector: 'pro-block-checkbox',
                templateUrl: 'block-checkbox.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                exportAs: 'proBlockCheckbox',
                preserveWhitespaces: false,
                host: {
                    '[class]': `baseClassName`,
                }
            }]
    }], function () { return []; }, { value: [{
            type: Input
        }], list: [{
            type: Input
        }], onChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvY2stY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcHJvLWxheW91dC9zcmMvbGliL3NldHRpbmctZHJhd2VyL2Jsb2NrLWNoZWNrYm94L2Jsb2NrLWNoZWNrYm94LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3Byby1sYXlvdXQvc3JjL2xpYi9zZXR0aW5nLWRyYXdlci9ibG9jay1jaGVja2JveC9ibG9jay1jaGVja2JveC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLGlCQUFpQixFQUFDLE1BQU0sZUFBZSxDQUFDOzs7Ozs7OztJQ0F6SCw2QkFBd0M7SUFDdEMsK0JBQStDO0lBQzdDLDhCQUErRDtJQUEzQixzT0FBMEI7SUFDNUQseUJBQTZDO0lBQzdDLDJCQUFrRztJQUNoRyx1QkFBOEI7SUFDaEMsaUJBQU07SUFDUixpQkFBTTtJQUNSLGlCQUFPO0lBQ1QsMEJBQWU7Ozs7SUFSSSxlQUE2QjtJQUE3Qiw4Q0FBNkI7SUFDdkMsZUFBOEI7SUFBOUIsNERBQThCO0lBQzVCLGVBQWdCO0lBQWhCLG1EQUFnQjtJQUFDLGtDQUFxQjtJQUN0QyxlQUFvQztJQUFwQyxrRUFBb0M7SUFBQywwRUFBdUQ7O0FEU3ZHLE1BQU0sT0FBTyxzQkFBc0I7SUFZakM7UUFUUyxTQUFJLEdBSVAsRUFBRSxDQUFDO1FBQ0MsYUFBUSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRTNELGtCQUFhLEdBQUcsc0NBQXNDLENBQUM7SUFHdkQsQ0FBQztJQUVELFFBQVE7SUFDUixDQUFDO0lBRUQsTUFBTSxDQUFDLEdBQVc7UUFDaEIsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7UUFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUM7OzRGQXJCVSxzQkFBc0I7MkRBQXRCLHNCQUFzQjs7O1FDYm5DLDBGQVNlOztRQVRnQixrQ0FBTzs7dUZEYXpCLHNCQUFzQjtjQVhsQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsV0FBVyxFQUFFLCtCQUErQjtnQkFDNUMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixJQUFJLEVBQUU7b0JBQ0osU0FBUyxFQUFFLGVBQWU7aUJBQzNCO2FBQ0Y7c0NBR1UsS0FBSztrQkFBYixLQUFLO1lBQ0csSUFBSTtrQkFBWixLQUFLO1lBS0ksUUFBUTtrQkFBakIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIFZpZXdFbmNhcHN1bGF0aW9ufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncHJvLWJsb2NrLWNoZWNrYm94JyxcbiAgdGVtcGxhdGVVcmw6ICdibG9jay1jaGVja2JveC5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBleHBvcnRBczogJ3Byb0Jsb2NrQ2hlY2tib3gnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgaG9zdDoge1xuICAgICdbY2xhc3NdJzogYGJhc2VDbGFzc05hbWVgLFxuICB9XG59KVxuZXhwb3J0IGNsYXNzIEJsb2NrQ2hlY2tib3hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIHZhbHVlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGxpc3Q6IHtcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIGtleTogc3RyaW5nO1xuICAgIHVybDogc3RyaW5nO1xuICB9W10gPSBbXTtcbiAgQE91dHB1dCgpIG9uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBiYXNlQ2xhc3NOYW1lID0gJ2FudC1wcm8tc2V0dGluZy1kcmF3ZXItYmxvY2stY2hlY2JveCc7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIHNlbGVjdChrZXk6IHN0cmluZykge1xuICAgIHRoaXMudmFsdWUgPSBrZXk7XG4gICAgdGhpcy5vbkNoYW5nZS5lbWl0KHRoaXMudmFsdWUpO1xuICB9XG59XG4iLCI8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBpdGVtIG9mIGxpc3RcIj5cbiAgPHNwYW4gbnotdG9vbHRpcCBbbnpUb29sdGlwVGl0bGVdPVwiaXRlbS50aXRsZVwiPlxuICAgIDxkaXYgY2xhc3M9XCJ7e2Jhc2VDbGFzc05hbWV9fS1pdGVtXCIgKGNsaWNrKT1cInNlbGVjdChpdGVtLmtleSlcIj5cbiAgICAgIDxpbWcgW3NyY109XCJpdGVtLnVybFwiIFthdHRyLmFsdF09XCJpdGVtLmtleVwiLz5cbiAgICAgIDxkaXYgY2xhc3M9XCJ7e2Jhc2VDbGFzc05hbWV9fS1zZWxlY3RJY29uXCIgW3N0eWxlLmRpc3BsYXldPVwidmFsdWUgPT09IGl0ZW0ua2V5ID8gJ2Jsb2NrJyA6ICdub25lJ1wiPlxuICAgICAgICA8aSBuei1pY29uIG56VHlwZT1cImNoZWNrXCI+PC9pPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvc3Bhbj5cbjwvbmctY29udGFpbmVyPlxuIl19