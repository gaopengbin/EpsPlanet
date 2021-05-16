import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "./modal-types";
import * as i2 from "@angular/common";
import * as i3 from "ng-zorro-antd/icon";
const _c0 = ["ss-modal-titlebar-button", ""];
function SsModalTitleBarButtonComponent_ng_container_0_div_1_i_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 5);
} if (rf & 2) {
    const button_r2 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵstyleMap(button_r2.style);
    i0.ɵɵproperty("nzIconfont", button_r2.icon);
} }
function SsModalTitleBarButtonComponent_ng_container_0_div_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 6);
} if (rf & 2) {
    const button_r2 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵstyleMap(button_r2.style);
    i0.ɵɵproperty("nzType", button_r2.icon)("nzTheme", button_r2.theme)("nzSpin", button_r2.spin)("nzTwotoneColor", button_r2.twotoneColor)("nzRotate", button_r2.rotate);
} }
function SsModalTitleBarButtonComponent_ng_container_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵlistener("click", function SsModalTitleBarButtonComponent_ng_container_0_div_1_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r9); const button_r2 = ctx.$implicit; const ctx_r8 = i0.ɵɵnextContext(2); return ctx_r8.onButtonClick(button_r2); });
    i0.ɵɵtemplate(1, SsModalTitleBarButtonComponent_ng_container_0_div_1_i_1_Template, 1, 3, "i", 3);
    i0.ɵɵtemplate(2, SsModalTitleBarButtonComponent_ng_container_0_div_1_ng_template_2_Template, 1, 7, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const button_r2 = ctx.$implicit;
    const _r4 = i0.ɵɵreference(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", button_r2.isIconfont)("ngIfElse", _r4);
} }
function SsModalTitleBarButtonComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, SsModalTitleBarButtonComponent_ng_container_0_div_1_Template, 4, 2, "div", 1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r0.buttons);
} }
export class SsModalTitleBarButtonComponent {
    constructor(config) {
        this.config = config;
        this.buttons = [];
        this.destroy$ = new Subject();
        if (Array.isArray(config.titleBarButtons)) {
            this.buttons = config.titleBarButtons.map(mergeDefaultOption);
        }
    }
    getButtonCallableProp(options, prop) {
        const value = options[prop];
        if (this.modalRef) {
            const componentInstance = this.modalRef.getContentComponent();
            return typeof value === 'function' ? value.apply(options, componentInstance && [componentInstance]) : value;
        }
        return false;
    }
    onButtonClick(options) {
        this.getButtonCallableProp(options, 'onClick');
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
SsModalTitleBarButtonComponent.ɵfac = function SsModalTitleBarButtonComponent_Factory(t) { return new (t || SsModalTitleBarButtonComponent)(i0.ɵɵdirectiveInject(i1.SsModalOptions)); };
SsModalTitleBarButtonComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SsModalTitleBarButtonComponent, selectors: [["div", "ss-modal-titlebar-button", ""]], hostAttrs: [1, ""], inputs: { modalRef: "modalRef" }, attrs: _c0, decls: 1, vars: 1, consts: [[4, "ngIf"], ["class", "ssmodal_titlebar_button", 3, "click", 4, "ngFor", "ngForOf"], [1, "ssmodal_titlebar_button", 3, "click"], ["nz-icon", "", 3, "nzIconfont", "style", 4, "ngIf", "ngIfElse"], ["ngzorro", ""], ["nz-icon", "", 3, "nzIconfont"], ["nz-icon", "", 3, "nzType", "nzTheme", "nzSpin", "nzTwotoneColor", "nzRotate"]], template: function SsModalTitleBarButtonComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, SsModalTitleBarButtonComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.buttons && ctx.buttons.length >= 1);
    } }, directives: [i2.NgIf, i2.NgForOf, i3.NzIconDirective], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SsModalTitleBarButtonComponent, [{
        type: Component,
        args: [{
                selector: 'div[ss-modal-titlebar-button]',
                template: `
    <ng-container *ngIf="buttons && buttons.length>=1;">
          <div class="ssmodal_titlebar_button" *ngFor="let button of buttons"  (click)="onButtonClick(button)">
            <i
            nz-icon
            *ngIf="button.isIconfont;else ngzorro"
            [nzIconfont]="button.icon"
            
            [style]="button.style"
            >
            </i>

          <ng-template #ngzorro>
                <i nz-icon 
                [nzType]="button.icon" 
                [nzTheme]="button.theme"
                [nzSpin]="button.spin"
                [nzTwotoneColor]="button.twotoneColor"
                [nzRotate]="button.rotate"
                [style]="button.style"
                ></i>
          </ng-template>
          </div>
      </ng-container>
      
  `,
                host: {
                    class: ''
                },
                changeDetection: ChangeDetectionStrategy.Default
            }]
    }], function () { return [{ type: i1.SsModalOptions }]; }, { modalRef: [{
            type: Input
        }] }); })();
function mergeDefaultOption(options) {
    return Object.assign({ icon: null, theme: 'outline', spin: false, twotoneColor: null, isIconfont: false, rotate: null, title: "", style: "" }, options);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtdGl0bGViYXItYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Vwc2dpcy9jb21wb25lbnRzL21vZGFsL21vZGFsLXRpdGxlYmFyLWJ1dHRvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBZ0IsS0FBSyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUMzRyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7Ozs7O0lBU25CLHVCQU9JOzs7SUFGSiw4QkFBc0I7SUFGdEIsMkNBQTBCOzs7SUFPdEIsdUJBT0s7OztJQURMLDhCQUFzQjtJQUx0Qix1Q0FBc0IsNEJBQUEsMEJBQUEsMENBQUEsOEJBQUE7Ozs7SUFaNUIsOEJBQXFHO0lBQWhDLDRQQUErQjtJQUNsRyxnR0FPSTtJQUVOLHFKQVNjO0lBQ2QsaUJBQU07Ozs7SUFqQkgsZUFBd0I7SUFBeEIsMkNBQXdCLGlCQUFBOzs7SUFKakMsNkJBQW9EO0lBQzlDLDhGQW9CTTtJQUNWLDBCQUFlOzs7SUFyQjZDLGVBQVU7SUFBVix3Q0FBVTs7QUE2QjVFLE1BQU0sT0FBTyw4QkFBOEI7SUFLdkMsWUFBbUIsTUFBc0I7UUFBdEIsV0FBTSxHQUFOLE1BQU0sQ0FBZ0I7UUFKekMsWUFBTyxHQUFtQyxFQUFFLENBQUM7UUFFckMsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7UUFHbkMsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsRUFBRTtZQUN2QyxJQUFJLENBQUMsT0FBTyxHQUFJLE1BQU0sQ0FBQyxlQUFrRCxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1NBQ3JHO0lBQ0wsQ0FBQztJQU9ELHFCQUFxQixDQUFDLE9BQXFDLEVBQUUsSUFBd0M7UUFDakcsTUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVCLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNmLE1BQU0saUJBQWlCLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1lBQzlELE9BQU8sT0FBTyxLQUFLLEtBQUssVUFBVSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxpQkFBaUIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1NBQy9HO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUtELGFBQWEsQ0FBQyxPQUFxQztRQUMvQyxJQUFJLENBQUMscUJBQXFCLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFRCxXQUFXO1FBQ1AsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzdCLENBQUM7OzRHQW5DUSw4QkFBOEI7bUVBQTlCLDhCQUE4QjtRQTlCdkMsaUdBc0JpQjs7UUF0QkYsNkRBQW1DOzt1RkE4QnpDLDhCQUE4QjtjQWpDMUMsU0FBUztlQUFDO2dCQUNQLFFBQVEsRUFBRSwrQkFBK0I7Z0JBQ3pDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXlCWDtnQkFDQyxJQUFJLEVBQUU7b0JBQ0YsS0FBSyxFQUFFLEVBQUU7aUJBQ1o7Z0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE9BQU87YUFDbkQ7aUVBR1ksUUFBUTtrQkFBaEIsS0FBSzs7QUFvQ1YsU0FBUyxrQkFBa0IsQ0FBQyxPQUFxQztJQUM3RCx1QkFDSSxJQUFJLEVBQUUsSUFBSSxFQUNWLEtBQUssRUFBRSxTQUFTLEVBQ2hCLElBQUksRUFBRSxLQUFLLEVBQ1gsWUFBWSxFQUFFLElBQUksRUFDbEIsVUFBVSxFQUFFLEtBQUssRUFDakIsTUFBTSxFQUFFLElBQUksRUFDWixLQUFLLEVBQUUsRUFBRSxFQUNULEtBQUssRUFBRSxFQUFFLElBQ04sT0FBTyxFQUNaO0FBQ04sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uRGVzdHJveSwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBTc01vZGFsUmVmIH0gZnJvbSAnLi9tb2RhbC1yZWYnO1xuaW1wb3J0IHsgU3NNb2RhbE9wdGlvbnMsIFNzTW9kYWxUaXRsZUJhckJ1dHRvbk9wdGlvbnMgfSBmcm9tICcuL21vZGFsLXR5cGVzJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdkaXZbc3MtbW9kYWwtdGl0bGViYXItYnV0dG9uXScsXG4gICAgdGVtcGxhdGU6IGBcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiYnV0dG9ucyAmJiBidXR0b25zLmxlbmd0aD49MTtcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic3Ntb2RhbF90aXRsZWJhcl9idXR0b25cIiAqbmdGb3I9XCJsZXQgYnV0dG9uIG9mIGJ1dHRvbnNcIiAgKGNsaWNrKT1cIm9uQnV0dG9uQ2xpY2soYnV0dG9uKVwiPlxuICAgICAgICAgICAgPGlcbiAgICAgICAgICAgIG56LWljb25cbiAgICAgICAgICAgICpuZ0lmPVwiYnV0dG9uLmlzSWNvbmZvbnQ7ZWxzZSBuZ3pvcnJvXCJcbiAgICAgICAgICAgIFtuekljb25mb250XT1cImJ1dHRvbi5pY29uXCJcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgW3N0eWxlXT1cImJ1dHRvbi5zdHlsZVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICA8L2k+XG5cbiAgICAgICAgICA8bmctdGVtcGxhdGUgI25nem9ycm8+XG4gICAgICAgICAgICAgICAgPGkgbnotaWNvbiBcbiAgICAgICAgICAgICAgICBbbnpUeXBlXT1cImJ1dHRvbi5pY29uXCIgXG4gICAgICAgICAgICAgICAgW256VGhlbWVdPVwiYnV0dG9uLnRoZW1lXCJcbiAgICAgICAgICAgICAgICBbbnpTcGluXT1cImJ1dHRvbi5zcGluXCJcbiAgICAgICAgICAgICAgICBbbnpUd290b25lQ29sb3JdPVwiYnV0dG9uLnR3b3RvbmVDb2xvclwiXG4gICAgICAgICAgICAgICAgW256Um90YXRlXT1cImJ1dHRvbi5yb3RhdGVcIlxuICAgICAgICAgICAgICAgIFtzdHlsZV09XCJidXR0b24uc3R5bGVcIlxuICAgICAgICAgICAgICAgID48L2k+XG4gICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgXG4gIGAsXG4gICAgaG9zdDoge1xuICAgICAgICBjbGFzczogJydcbiAgICB9LFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuRGVmYXVsdFxufSlcbmV4cG9ydCBjbGFzcyBTc01vZGFsVGl0bGVCYXJCdXR0b25Db21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICAgIGJ1dHRvbnM6IFNzTW9kYWxUaXRsZUJhckJ1dHRvbk9wdGlvbnNbXSA9IFtdO1xuICAgIEBJbnB1dCgpIG1vZGFsUmVmITogU3NNb2RhbFJlZjtcbiAgICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBjb25maWc6IFNzTW9kYWxPcHRpb25zKSB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGNvbmZpZy50aXRsZUJhckJ1dHRvbnMpKSB7XG4gICAgICAgICAgICB0aGlzLmJ1dHRvbnMgPSAoY29uZmlnLnRpdGxlQmFyQnV0dG9ucyBhcyBTc01vZGFsVGl0bGVCYXJCdXR0b25PcHRpb25zW10pLm1hcChtZXJnZURlZmF1bHRPcHRpb24pO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBwYXJhbSBvcHRpb25zIFxuICAgICAqIEBwYXJhbSBwcm9wIFxuICAgICAqIEByZXR1cm5zIFxuICAgICAqL1xuICAgIGdldEJ1dHRvbkNhbGxhYmxlUHJvcChvcHRpb25zOiBTc01vZGFsVGl0bGVCYXJCdXR0b25PcHRpb25zLCBwcm9wOiBrZXlvZiBTc01vZGFsVGl0bGVCYXJCdXR0b25PcHRpb25zKTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gb3B0aW9uc1twcm9wXTtcbiAgICAgICAgaWYgKHRoaXMubW9kYWxSZWYpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudEluc3RhbmNlID0gdGhpcy5tb2RhbFJlZi5nZXRDb250ZW50Q29tcG9uZW50KCk7XG4gICAgICAgICAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nID8gdmFsdWUuYXBwbHkob3B0aW9ucywgY29tcG9uZW50SW5zdGFuY2UgJiYgW2NvbXBvbmVudEluc3RhbmNlXSkgOiB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBwYXJhbSBvcHRpb25zIFxuICAgICAqL1xuICAgIG9uQnV0dG9uQ2xpY2sob3B0aW9uczogU3NNb2RhbFRpdGxlQmFyQnV0dG9uT3B0aW9ucyk6IHZvaWQge1xuICAgICAgICB0aGlzLmdldEJ1dHRvbkNhbGxhYmxlUHJvcChvcHRpb25zLCAnb25DbGljaycpO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICAgICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gbWVyZ2VEZWZhdWx0T3B0aW9uKG9wdGlvbnM6IFNzTW9kYWxUaXRsZUJhckJ1dHRvbk9wdGlvbnMpOiBTc01vZGFsVGl0bGVCYXJCdXR0b25PcHRpb25zIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBpY29uOiBudWxsLFxuICAgICAgICB0aGVtZTogJ291dGxpbmUnLFxuICAgICAgICBzcGluOiBmYWxzZSxcbiAgICAgICAgdHdvdG9uZUNvbG9yOiBudWxsLFxuICAgICAgICBpc0ljb25mb250OiBmYWxzZSxcbiAgICAgICAgcm90YXRlOiBudWxsLFxuICAgICAgICB0aXRsZTogXCJcIixcbiAgICAgICAgc3R5bGU6IFwiXCIsXG4gICAgICAgIC4uLm9wdGlvbnNcbiAgICB9O1xufSJdfQ==