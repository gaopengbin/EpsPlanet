import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { isPromise } from './modal-ref';
import * as i0 from "@angular/core";
import * as i1 from "./modal-types";
import * as i2 from "@angular/common";
const _c0 = ["ss-modal-footer", ""];
function SsModalFooterComponent_ng_container_0_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 4);
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("innerHTML", ctx_r3.config.title, i0.ɵɵsanitizeHtml);
} }
function SsModalFooterComponent_ng_container_0_ng_container_3_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 6);
    i0.ɵɵlistener("click", function SsModalFooterComponent_ng_container_0_ng_container_3_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r8); const button_r6 = ctx.$implicit; const ctx_r7 = i0.ɵɵnextContext(3); return ctx_r7.onButtonClick(button_r6); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const button_r6 = ctx.$implicit;
    const ctx_r5 = i0.ɵɵnextContext(3);
    i0.ɵɵclassMap(ctx_r5.getButtonClass(button_r6));
    i0.ɵɵproperty("hidden", !ctx_r5.getButtonCallableProp(button_r6, "show"));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", button_r6.label, " ");
} }
function SsModalFooterComponent_ng_container_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, SsModalFooterComponent_ng_container_0_ng_container_3_button_1_Template, 2, 4, "button", 5);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r4.buttons);
} }
function SsModalFooterComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementContainerStart(1);
    i0.ɵɵtemplate(2, SsModalFooterComponent_ng_container_0_div_2_Template, 1, 1, "div", 2);
    i0.ɵɵtemplate(3, SsModalFooterComponent_ng_container_0_ng_container_3_Template, 2, 1, "ng-container", 3);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r0.buttonsFooter);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.buttonsFooter);
} }
function SsModalFooterComponent_ng_template_1_button_0_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 9);
    i0.ɵɵlistener("click", function SsModalFooterComponent_ng_template_1_button_0_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r12); const ctx_r11 = i0.ɵɵnextContext(2); return ctx_r11.onCancel(); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("disabled", ctx_r9.config.cancelDisabled);
    i0.ɵɵattribute("cdkFocusInitial", ctx_r9.config.autofocus === "cancel");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r9.config.cancelText || ctx_r9.locale.cancelText, " ");
} }
function SsModalFooterComponent_ng_template_1_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 10);
    i0.ɵɵlistener("click", function SsModalFooterComponent_ng_template_1_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r14); const ctx_r13 = i0.ɵɵnextContext(2); return ctx_r13.onOk(); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r10 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("disabled", ctx_r10.config.okDisabled);
    i0.ɵɵattribute("cdkFocusInitial", ctx_r10.config.autofocus === "ok");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r10.config.okText || ctx_r10.locale.okText, " ");
} }
function SsModalFooterComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, SsModalFooterComponent_ng_template_1_button_0_Template, 2, 3, "button", 7);
    i0.ɵɵtemplate(1, SsModalFooterComponent_ng_template_1_button_1_Template, 2, 3, "button", 8);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", ctx_r2.config.cancelText !== null);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.config.okText !== null);
} }
export class SsModalFooterComponent {
    constructor(config) {
        this.config = config;
        this.buttonsFooter = false;
        this.buttons = [];
        this.locale = { okText: "确定", cancelText: "取消" };
        this.cancelTriggered = new EventEmitter();
        this.okTriggered = new EventEmitter();
        this.destroy$ = new Subject();
        if (Array.isArray(config.footer)) {
            this.buttonsFooter = true;
            this.buttons = config.footer.map(mergeDefaultOption);
        }
    }
    getButtonClass(button) {
        switch (button.type) {
            case "primary":
                return "ss-btn ss-btn-primary";
            case "dashed":
                return "ss-btn ss-btn-dashed";
            case "danger":
                return "ss-btn ss-btn-danger";
            case "link":
                return "ss-btn ss-btn-link";
        }
        return "ss-btn ss-btn-default";
    }
    onCancel() {
        this.cancelTriggered.emit();
    }
    onOk() {
        this.okTriggered.emit();
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
        const loading = this.getButtonCallableProp(options, 'loading');
        if (!loading) {
            const result = this.getButtonCallableProp(options, 'onClick');
            if (options.autoLoading && isPromise(result)) {
                options.loading = true;
                result.then(() => (options.loading = false)).catch(() => (options.loading = false));
            }
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
SsModalFooterComponent.ɵfac = function SsModalFooterComponent_Factory(t) { return new (t || SsModalFooterComponent)(i0.ɵɵdirectiveInject(i1.SsModalOptions)); };
SsModalFooterComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SsModalFooterComponent, selectors: [["div", "ss-modal-footer", ""]], hostAttrs: [1, ""], inputs: { modalRef: "modalRef" }, outputs: { cancelTriggered: "cancelTriggered", okTriggered: "okTriggered" }, attrs: _c0, decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["defaultFooterButtons", ""], [3, "innerHTML", 4, "ngIf"], [4, "ngIf"], [3, "innerHTML"], ["nz-button", "", 3, "hidden", "class", "click", 4, "ngFor", "ngForOf"], ["nz-button", "", 3, "hidden", "click"], ["nz-button", "", "class", "ss-btn ss-btn-default", 3, "disabled", "click", 4, "ngIf"], ["nz-button", "", "class", "ss-btn ss-btn-primary ", 3, "disabled", "click", 4, "ngIf"], ["nz-button", "", 1, "ss-btn", "ss-btn-default", 3, "disabled", "click"], ["nz-button", "", 1, "ss-btn", "ss-btn-primary", 3, "disabled", "click"]], template: function SsModalFooterComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, SsModalFooterComponent_ng_container_0_Template, 4, 2, "ng-container", 0);
        i0.ɵɵtemplate(1, SsModalFooterComponent_ng_template_1_Template, 2, 2, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(2);
        i0.ɵɵproperty("ngIf", ctx.config.footer)("ngIfElse", _r1);
    } }, directives: [i2.NgIf, i2.NgForOf], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SsModalFooterComponent, [{
        type: Component,
        args: [{
                selector: 'div[ss-modal-footer]',
                template: `
    <ng-container *ngIf="config.footer; else defaultFooterButtons">
      <ng-container>
        <div *ngIf="!buttonsFooter" [innerHTML]="config.title"></div>
        <ng-container *ngIf="buttonsFooter">
          <button
            *ngFor="let button of buttons"
            nz-button
            (click)="onButtonClick(button)"
            [hidden]="!getButtonCallableProp(button, 'show')"
            [class]="getButtonClass(button)"
          >
            {{ button.label }}
          </button>
        </ng-container>
      </ng-container>
    </ng-container>
    <ng-template #defaultFooterButtons>
      <button
        *ngIf="config.cancelText !== null"
        [attr.cdkFocusInitial]="config.autofocus === 'cancel'"
        nz-button
        (click)="onCancel()"
        [disabled]="config.cancelDisabled"
        class="ss-btn ss-btn-default"
      >
        {{ config.cancelText || locale.cancelText }}
      </button>
      <button
        *ngIf="config.okText !== null"
        [attr.cdkFocusInitial]="config.autofocus === 'ok'"
        nz-button
        class="ss-btn ss-btn-primary "
        (click)="onOk()"
        [disabled]="config.okDisabled"
      >
        {{ config.okText || locale.okText }}
      </button>
    </ng-template>
  `,
                host: {
                    class: ''
                },
                changeDetection: ChangeDetectionStrategy.Default
            }]
    }], function () { return [{ type: i1.SsModalOptions }]; }, { cancelTriggered: [{
            type: Output
        }], okTriggered: [{
            type: Output
        }], modalRef: [{
            type: Input
        }] }); })();
function mergeDefaultOption(options) {
    return Object.assign({ type: null, size: 'default', autoLoading: true, show: true, loading: false, disabled: false }, options);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtZm9vdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Vwc2dpcy9jb21wb25lbnRzL21vZGFsL21vZGFsLWZvb3Rlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFhLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzRyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBYyxTQUFTLEVBQUUsTUFBTSxhQUFhLENBQUM7Ozs7OztJQVE1Qyx5QkFBNkQ7OztJQUFqQyxrRUFBMEI7Ozs7SUFFcEQsaUNBTUM7SUFIQyx5UUFBK0I7SUFJL0IsWUFDRjtJQUFBLGlCQUFTOzs7O0lBSFAsK0NBQWdDO0lBRGhDLHlFQUFpRDtJQUdqRCxlQUNGO0lBREUsZ0RBQ0Y7OztJQVRGLDZCQUFvQztJQUNsQywyR0FRUztJQUNYLDBCQUFlOzs7SUFSUSxlQUFVO0lBQVYsd0NBQVU7OztJQUxyQyw2QkFBK0Q7SUFDN0QsNkJBQWM7SUFDWixzRkFBNkQ7SUFDN0Qsd0dBVWU7SUFDakIsMEJBQWU7SUFDakIsMEJBQWU7OztJQWJMLGVBQW9CO0lBQXBCLDRDQUFvQjtJQUNYLGVBQW1CO0lBQW5CLDJDQUFtQjs7OztJQWNwQyxpQ0FPQztJQUhDLDZNQUFvQjtJQUlwQixZQUNGO0lBQUEsaUJBQVM7OztJQUpQLHVEQUFrQztJQUhsQyx1RUFBc0Q7SUFNdEQsZUFDRjtJQURFLHFGQUNGOzs7O0lBQ0Esa0NBT0M7SUFGQyx5TUFBZ0I7SUFHaEIsWUFDRjtJQUFBLGlCQUFTOzs7SUFIUCxvREFBOEI7SUFKOUIsb0VBQWtEO0lBTWxELGVBQ0Y7SUFERSwrRUFDRjs7O0lBbkJBLDJGQVNTO0lBQ1QsMkZBU1M7OztJQWxCTix3REFBZ0M7SUFVaEMsZUFB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LHlGQWVlO1FBQ2Ysd0hBcUJjOzs7UUFyQ0Msd0NBQXFCLGlCQUFBOzt1RkE0QzNCLHNCQUFzQjtjQS9DbEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBdUNUO2dCQUNELElBQUksRUFBRTtvQkFDSixLQUFLLEVBQUUsRUFBRTtpQkFDVjtnQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsT0FBTzthQUNqRDtpRUFLb0IsZUFBZTtrQkFBakMsTUFBTTtZQUNZLFdBQVc7a0JBQTdCLE1BQU07WUFDRSxRQUFRO2tCQUFoQixLQUFLOztBQTBEUixTQUFTLGtCQUFrQixDQUFDLE9BQTZCO0lBQ3ZELHVCQUNFLElBQUksRUFBRSxJQUFJLEVBQ1YsSUFBSSxFQUFFLFNBQVMsRUFDZixXQUFXLEVBQUUsSUFBSSxFQUNqQixJQUFJLEVBQUUsSUFBSSxFQUNWLE9BQU8sRUFBRSxLQUFLLEVBQ2QsUUFBUSxFQUFFLEtBQUssSUFDWixPQUFPLEVBQ1Y7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25EZXN0cm95LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFNzTW9kYWxSZWYsIGlzUHJvbWlzZSB9IGZyb20gJy4vbW9kYWwtcmVmJztcbmltcG9ydCB7IFNzTW9kYWxCdXR0b25PcHRpb25zLCBTc01vZGFsT3B0aW9ucyB9IGZyb20gJy4vbW9kYWwtdHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkaXZbc3MtbW9kYWwtZm9vdGVyXScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbmZpZy5mb290ZXI7IGVsc2UgZGVmYXVsdEZvb3RlckJ1dHRvbnNcIj5cbiAgICAgIDxuZy1jb250YWluZXI+XG4gICAgICAgIDxkaXYgKm5nSWY9XCIhYnV0dG9uc0Zvb3RlclwiIFtpbm5lckhUTUxdPVwiY29uZmlnLnRpdGxlXCI+PC9kaXY+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJidXR0b25zRm9vdGVyXCI+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgKm5nRm9yPVwibGV0IGJ1dHRvbiBvZiBidXR0b25zXCJcbiAgICAgICAgICAgIG56LWJ1dHRvblxuICAgICAgICAgICAgKGNsaWNrKT1cIm9uQnV0dG9uQ2xpY2soYnV0dG9uKVwiXG4gICAgICAgICAgICBbaGlkZGVuXT1cIiFnZXRCdXR0b25DYWxsYWJsZVByb3AoYnV0dG9uLCAnc2hvdycpXCJcbiAgICAgICAgICAgIFtjbGFzc109XCJnZXRCdXR0b25DbGFzcyhidXR0b24pXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7eyBidXR0b24ubGFiZWwgfX1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8bmctdGVtcGxhdGUgI2RlZmF1bHRGb290ZXJCdXR0b25zPlxuICAgICAgPGJ1dHRvblxuICAgICAgICAqbmdJZj1cImNvbmZpZy5jYW5jZWxUZXh0ICE9PSBudWxsXCJcbiAgICAgICAgW2F0dHIuY2RrRm9jdXNJbml0aWFsXT1cImNvbmZpZy5hdXRvZm9jdXMgPT09ICdjYW5jZWwnXCJcbiAgICAgICAgbnotYnV0dG9uXG4gICAgICAgIChjbGljayk9XCJvbkNhbmNlbCgpXCJcbiAgICAgICAgW2Rpc2FibGVkXT1cImNvbmZpZy5jYW5jZWxEaXNhYmxlZFwiXG4gICAgICAgIGNsYXNzPVwic3MtYnRuIHNzLWJ0bi1kZWZhdWx0XCJcbiAgICAgID5cbiAgICAgICAge3sgY29uZmlnLmNhbmNlbFRleHQgfHwgbG9jYWxlLmNhbmNlbFRleHQgfX1cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvblxuICAgICAgICAqbmdJZj1cImNvbmZpZy5va1RleHQgIT09IG51bGxcIlxuICAgICAgICBbYXR0ci5jZGtGb2N1c0luaXRpYWxdPVwiY29uZmlnLmF1dG9mb2N1cyA9PT0gJ29rJ1wiXG4gICAgICAgIG56LWJ1dHRvblxuICAgICAgICBjbGFzcz1cInNzLWJ0biBzcy1idG4tcHJpbWFyeSBcIlxuICAgICAgICAoY2xpY2spPVwib25PaygpXCJcbiAgICAgICAgW2Rpc2FibGVkXT1cImNvbmZpZy5va0Rpc2FibGVkXCJcbiAgICAgID5cbiAgICAgICAge3sgY29uZmlnLm9rVGV4dCB8fCBsb2NhbGUub2tUZXh0IH19XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICBgLFxuICBob3N0OiB7XG4gICAgY2xhc3M6ICcnXG4gIH0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuRGVmYXVsdFxufSlcbmV4cG9ydCBjbGFzcyBTc01vZGFsRm9vdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgYnV0dG9uc0Zvb3RlciA9IGZhbHNlO1xuICBidXR0b25zOiBTc01vZGFsQnV0dG9uT3B0aW9uc1tdID0gW107XG4gIGxvY2FsZTogeyBva1RleHQ/OiBzdHJpbmc7IGNhbmNlbFRleHQ/OiBzdHJpbmcgfSA9IHsgb2tUZXh0OiBcIuehruWumlwiLCBjYW5jZWxUZXh0OiBcIuWPlua2iFwiIH07XG4gIEBPdXRwdXQoKSByZWFkb25seSBjYW5jZWxUcmlnZ2VyZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBva1RyaWdnZXJlZCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcbiAgQElucHV0KCkgbW9kYWxSZWYhOiBTc01vZGFsUmVmO1xuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgY29uZmlnOiBTc01vZGFsT3B0aW9ucykge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGNvbmZpZy5mb290ZXIpKSB7XG4gICAgICB0aGlzLmJ1dHRvbnNGb290ZXIgPSB0cnVlO1xuICAgICAgdGhpcy5idXR0b25zID0gKGNvbmZpZy5mb290ZXIgYXMgU3NNb2RhbEJ1dHRvbk9wdGlvbnNbXSkubWFwKG1lcmdlRGVmYXVsdE9wdGlvbik7XG4gICAgfVxuICB9XG4gIGdldEJ1dHRvbkNsYXNzKGJ1dHRvbjogU3NNb2RhbEJ1dHRvbk9wdGlvbnMpIHtcbiAgICBzd2l0Y2ggKGJ1dHRvbi50eXBlKSB7XG4gICAgICBjYXNlIFwicHJpbWFyeVwiOlxuICAgICAgICByZXR1cm4gXCJzcy1idG4gc3MtYnRuLXByaW1hcnlcIjtcbiAgICAgIGNhc2UgXCJkYXNoZWRcIjpcbiAgICAgICAgcmV0dXJuIFwic3MtYnRuIHNzLWJ0bi1kYXNoZWRcIjtcbiAgICAgIGNhc2UgXCJkYW5nZXJcIjpcbiAgICAgICAgcmV0dXJuIFwic3MtYnRuIHNzLWJ0bi1kYW5nZXJcIjtcbiAgICAgIGNhc2UgXCJsaW5rXCI6XG4gICAgICAgIHJldHVybiBcInNzLWJ0biBzcy1idG4tbGlua1wiO1xuICAgIH1cbiAgICByZXR1cm4gXCJzcy1idG4gc3MtYnRuLWRlZmF1bHRcIjtcbiAgfVxuXG4gIG9uQ2FuY2VsKCk6IHZvaWQge1xuICAgIHRoaXMuY2FuY2VsVHJpZ2dlcmVkLmVtaXQoKTtcbiAgfVxuXG4gIG9uT2soKTogdm9pZCB7XG4gICAgdGhpcy5va1RyaWdnZXJlZC5lbWl0KCk7XG4gIH1cblxuICBnZXRCdXR0b25DYWxsYWJsZVByb3Aob3B0aW9uczogU3NNb2RhbEJ1dHRvbk9wdGlvbnMsIHByb3A6IGtleW9mIFNzTW9kYWxCdXR0b25PcHRpb25zKTogYm9vbGVhbiB7XG4gICAgY29uc3QgdmFsdWUgPSBvcHRpb25zW3Byb3BdO1xuICAgIGlmICh0aGlzLm1vZGFsUmVmKSB7XG4gICAgICBjb25zdCBjb21wb25lbnRJbnN0YW5jZSA9IHRoaXMubW9kYWxSZWYuZ2V0Q29udGVudENvbXBvbmVudCgpO1xuICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJyA/IHZhbHVlLmFwcGx5KG9wdGlvbnMsIGNvbXBvbmVudEluc3RhbmNlICYmIFtjb21wb25lbnRJbnN0YW5jZV0pIDogdmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG5cbiAgb25CdXR0b25DbGljayhvcHRpb25zOiBTc01vZGFsQnV0dG9uT3B0aW9ucyk6IHZvaWQge1xuICAgIGNvbnN0IGxvYWRpbmcgPSB0aGlzLmdldEJ1dHRvbkNhbGxhYmxlUHJvcChvcHRpb25zLCAnbG9hZGluZycpO1xuICAgIGlmICghbG9hZGluZykge1xuICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5nZXRCdXR0b25DYWxsYWJsZVByb3Aob3B0aW9ucywgJ29uQ2xpY2snKTtcbiAgICAgIGlmIChvcHRpb25zLmF1dG9Mb2FkaW5nICYmIGlzUHJvbWlzZShyZXN1bHQpKSB7XG4gICAgICAgIG9wdGlvbnMubG9hZGluZyA9IHRydWU7XG4gICAgICAgIHJlc3VsdC50aGVuKCgpID0+IChvcHRpb25zLmxvYWRpbmcgPSBmYWxzZSkpLmNhdGNoKCgpID0+IChvcHRpb25zLmxvYWRpbmcgPSBmYWxzZSkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBtZXJnZURlZmF1bHRPcHRpb24ob3B0aW9uczogU3NNb2RhbEJ1dHRvbk9wdGlvbnMpOiBTc01vZGFsQnV0dG9uT3B0aW9ucyB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogbnVsbCxcbiAgICBzaXplOiAnZGVmYXVsdCcsXG4gICAgYXV0b0xvYWRpbmc6IHRydWUsXG4gICAgc2hvdzogdHJ1ZSxcbiAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgLi4ub3B0aW9uc1xuICB9O1xufVxuIl19