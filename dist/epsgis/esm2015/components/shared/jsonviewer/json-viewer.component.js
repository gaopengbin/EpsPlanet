import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { ComponentRegister } from '../../../decorator/component-register.decorator';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = function (a0, a1) { return { "collapse": a0, "expand": a1 }; };
function EpsGISJsonViewerComponent_section_1_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 9);
} if (rf & 2) {
    const segment_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(1, _c0, segment_r1.expanded, !segment_r1.expanded));
} }
function EpsGISJsonViewerComponent_section_1_span_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 10);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const segment_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(segment_r1.description);
} }
function EpsGISJsonViewerComponent_section_1_section_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 11);
    i0.ɵɵelement(1, "epsgis-json-viewer", 12);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const segment_r1 = i0.ɵɵnextContext().$implicit;
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("json", segment_r1.value)("expanded", ctx_r4.expanded);
} }
const _c1 = function (a1) { return ["segment", a1]; };
const _c2 = function (a1, a2) { return { "segment-main": true, "expandable": a1, "expanded": a2 }; };
function EpsGISJsonViewerComponent_section_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 2);
    i0.ɵɵelementStart(1, "section", 3);
    i0.ɵɵlistener("click", function EpsGISJsonViewerComponent_section_1_Template_section_click_1_listener() { i0.ɵɵrestoreView(_r9); const segment_r1 = ctx.$implicit; const ctx_r8 = i0.ɵɵnextContext(); return ctx_r8.toggle(segment_r1); });
    i0.ɵɵtemplate(2, EpsGISJsonViewerComponent_section_1_div_2_Template, 1, 4, "div", 4);
    i0.ɵɵelementStart(3, "span", 5);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span", 6);
    i0.ɵɵtext(6, ": ");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, EpsGISJsonViewerComponent_section_1_span_7_Template, 2, 1, "span", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(8, EpsGISJsonViewerComponent_section_1_section_8_Template, 2, 2, "section", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const segment_r1 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(6, _c1, "segment-type-" + segment_r1.type));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(8, _c2, ctx_r0.isExpandable(segment_r1), segment_r1.expanded));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.isExpandable(segment_r1));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(segment_r1.key);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", !segment_r1.expanded || !ctx_r0.isExpandable(segment_r1));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", segment_r1.expanded && ctx_r0.isExpandable(segment_r1));
} }
let EpsGISJsonViewerComponent = class EpsGISJsonViewerComponent {
    constructor() {
        this.expanded = true;
        this.cleanOnChange = true;
        this.segments = [];
    }
    ngOnInit() {
        this.initJson();
    }
    initJson() {
        if (typeof this.json === 'string') {
            this.json = JSON.parse(this.json);
        }
        this.ngOnChanges();
    }
    ngOnChanges() {
        if (this.cleanOnChange) {
            this.segments = [];
        }
        if (typeof this.json === 'object') {
            Object.keys(this.json).forEach(key => {
                this.segments.push(this.parseKeyValue(key, this.json[key]));
            });
        }
        else {
            this.segments.push(this.parseKeyValue(`(${typeof this.json})`, this.json));
        }
    }
    isExpandable(segment) {
        return segment.type === 'object' || segment.type === 'array';
    }
    toggle(segment) {
        if (this.isExpandable(segment)) {
            segment.expanded = !segment.expanded;
        }
    }
    parseKeyValue(key, value) {
        const segment = {
            key: key,
            value: value,
            type: undefined,
            description: '' + value,
            expanded: this.expanded
        };
        switch (typeof segment.value) {
            case 'number': {
                segment.type = 'number';
                break;
            }
            case 'boolean': {
                segment.type = 'boolean';
                break;
            }
            case 'function': {
                segment.type = 'function';
                break;
            }
            case 'string': {
                segment.type = 'string';
                segment.description = '"' + segment.value + '"';
                break;
            }
            case 'undefined': {
                segment.type = 'undefined';
                segment.description = 'undefined';
                break;
            }
            case 'object': {
                if (segment.value === null) {
                    segment.type = 'null';
                    segment.description = 'null';
                }
                else if (Array.isArray(segment.value)) {
                    segment.type = 'array';
                    segment.description = 'Array[' + segment.value.length + '] ' + JSON.stringify(segment.value);
                }
                else if (segment.value instanceof Date) {
                    segment.type = 'date';
                }
                else {
                    segment.type = 'object';
                    segment.description = 'Object ' + JSON.stringify(segment.value);
                }
                break;
            }
        }
        return segment;
    }
};
EpsGISJsonViewerComponent.ɵfac = function EpsGISJsonViewerComponent_Factory(t) { return new (t || EpsGISJsonViewerComponent)(); };
EpsGISJsonViewerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: EpsGISJsonViewerComponent, selectors: [["epsgis-json-viewer"]], inputs: { json: "json", expanded: "expanded", cleanOnChange: "cleanOnChange" }, features: [i0.ɵɵNgOnChangesFeature], decls: 2, vars: 1, consts: [[1, "json-viewer"], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"], [3, "ngClass", "click"], ["class", "toggler", 3, "ngClass", 4, "ngIf"], [1, "segment-key"], [1, "segment-separator"], ["class", "segment-value", 4, "ngIf"], ["class", "children", 4, "ngIf"], [1, "toggler", 3, "ngClass"], [1, "segment-value"], [1, "children"], [3, "json", "expanded"]], template: function EpsGISJsonViewerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "section", 0);
        i0.ɵɵtemplate(1, EpsGISJsonViewerComponent_section_1_Template, 9, 11, "section", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.segments);
    } }, directives: [i1.NgForOf, i1.NgClass, i1.NgIf, EpsGISJsonViewerComponent], styles: [".json-viewer[_ngcontent-%COMP%]{width:100%;height:100%;overflow:auto;position:relative}.json-viewer[_ngcontent-%COMP%]   .segment[_ngcontent-%COMP%]{padding:2px;margin:1px 1px 1px 12px}.json-viewer[_ngcontent-%COMP%]   .segment[_ngcontent-%COMP%]   .segment-main[_ngcontent-%COMP%]{word-wrap:break-word}.json-viewer[_ngcontent-%COMP%]   .segment[_ngcontent-%COMP%]   .segment-main[_ngcontent-%COMP%]   .toggler[_ngcontent-%COMP%]{position:absolute;margin-left:-14px;margin-top:3px;font-size:.8em;line-height:1.2em;vertical-align:middle;color:#787878}.json-viewer[_ngcontent-%COMP%]   .segment[_ngcontent-%COMP%]   .segment-main[_ngcontent-%COMP%]   .collapse[_ngcontent-%COMP%]:before{content:\"-\"}.json-viewer[_ngcontent-%COMP%]   .segment[_ngcontent-%COMP%]   .segment-main[_ngcontent-%COMP%]   .expand[_ngcontent-%COMP%]:before{content:\"+\"}.json-viewer[_ngcontent-%COMP%]   .segment[_ngcontent-%COMP%]   .segment-main[_ngcontent-%COMP%]   .segment-key[_ngcontent-%COMP%]{color:#4e187c}.json-viewer[_ngcontent-%COMP%]   .segment[_ngcontent-%COMP%]   .segment-main[_ngcontent-%COMP%]   .segment-separator[_ngcontent-%COMP%]{color:#999}.json-viewer[_ngcontent-%COMP%]   .segment[_ngcontent-%COMP%]   .segment-main[_ngcontent-%COMP%]   .segment-value[_ngcontent-%COMP%]{color:#000}.json-viewer[_ngcontent-%COMP%]   .segment[_ngcontent-%COMP%]   .children[_ngcontent-%COMP%]{margin-left:12px}.json-viewer[_ngcontent-%COMP%]   .segment-type-string[_ngcontent-%COMP%] > .segment-main[_ngcontent-%COMP%] > .segment-value[_ngcontent-%COMP%]{color:#ff6b6b}.json-viewer[_ngcontent-%COMP%]   .segment-type-number[_ngcontent-%COMP%] > .segment-main[_ngcontent-%COMP%] > .segment-value[_ngcontent-%COMP%]{color:#009688}.json-viewer[_ngcontent-%COMP%]   .segment-type-boolean[_ngcontent-%COMP%] > .segment-main[_ngcontent-%COMP%] > .segment-value[_ngcontent-%COMP%]{color:#b938a4}.json-viewer[_ngcontent-%COMP%]   .segment-type-date[_ngcontent-%COMP%] > .segment-main[_ngcontent-%COMP%] > .segment-value[_ngcontent-%COMP%]{color:#05668d}.json-viewer[_ngcontent-%COMP%]   .segment-type-array[_ngcontent-%COMP%] > .segment-main[_ngcontent-%COMP%] > .segment-value[_ngcontent-%COMP%], .json-viewer[_ngcontent-%COMP%]   .segment-type-function[_ngcontent-%COMP%] > .segment-main[_ngcontent-%COMP%] > .segment-value[_ngcontent-%COMP%], .json-viewer[_ngcontent-%COMP%]   .segment-type-object[_ngcontent-%COMP%] > .segment-main[_ngcontent-%COMP%] > .segment-value[_ngcontent-%COMP%]{color:#999}.json-viewer[_ngcontent-%COMP%]   .segment-type-null[_ngcontent-%COMP%] > .segment-main[_ngcontent-%COMP%] > .segment-value[_ngcontent-%COMP%], .json-viewer[_ngcontent-%COMP%]   .segment-type-undefined[_ngcontent-%COMP%] > .segment-main[_ngcontent-%COMP%] > .segment-value[_ngcontent-%COMP%]{color:#fff}.json-viewer[_ngcontent-%COMP%]   .segment-type-null[_ngcontent-%COMP%] > .segment-main[_ngcontent-%COMP%] > .segment-value[_ngcontent-%COMP%]{background-color:red}.json-viewer[_ngcontent-%COMP%]   .segment-type-undefined[_ngcontent-%COMP%] > .segment-main[_ngcontent-%COMP%] > .segment-key[_ngcontent-%COMP%]{color:#999}.json-viewer[_ngcontent-%COMP%]   .segment-type-undefined[_ngcontent-%COMP%] > .segment-main[_ngcontent-%COMP%] > .segment-value[_ngcontent-%COMP%]{background-color:#999}.json-viewer[_ngcontent-%COMP%]   .segment-type-array[_ngcontent-%COMP%] > .segment-main[_ngcontent-%COMP%], .json-viewer[_ngcontent-%COMP%]   .segment-type-object[_ngcontent-%COMP%] > .segment-main[_ngcontent-%COMP%]{white-space:nowrap}.json-viewer[_ngcontent-%COMP%]   .expanded[_ngcontent-%COMP%] > .toggler[_ngcontent-%COMP%]:after{transform:rotate(90deg)}.json-viewer[_ngcontent-%COMP%]   .expandable[_ngcontent-%COMP%], .json-viewer[_ngcontent-%COMP%]   .expandable[_ngcontent-%COMP%] > .toggler[_ngcontent-%COMP%]{cursor:pointer}"] });
EpsGISJsonViewerComponent = __decorate([
    ComponentRegister({
        uri: 'epsgis-json-viewer',
        path: "components/shared/jsonviewer"
    })
], EpsGISJsonViewerComponent);
export { EpsGISJsonViewerComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EpsGISJsonViewerComponent, [{
        type: Component,
        args: [{
                selector: 'epsgis-json-viewer',
                templateUrl: './json-viewer.component.html',
                styleUrls: ['./json-viewer.component.scss']
            }]
    }], null, { json: [{
            type: Input
        }], expanded: [{
            type: Input
        }], cleanOnChange: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbi12aWV3ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZXBzZ2lzL2NvbXBvbmVudHMvc2hhcmVkL2pzb252aWV3ZXIvanNvbi12aWV3ZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZXBzZ2lzL2NvbXBvbmVudHMvc2hhcmVkL2pzb252aWV3ZXIvanNvbi12aWV3ZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWEsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBU3BFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlEQUFpRCxDQUFDOzs7OztJQ0Y5RSx5QkFDZ0Y7OztJQUE5RSwrRkFBdUU7OztJQUd6RSxnQ0FBZ0Y7SUFBQSxZQUF5QjtJQUFBLGlCQUFPOzs7SUFBaEMsZUFBeUI7SUFBekIsNENBQXlCOzs7SUFFM0csbUNBQTRFO0lBQzFFLHlDQUFzRjtJQUN4RixpQkFBVTs7OztJQURZLGVBQXNCO0lBQXRCLHVDQUFzQiw2QkFBQTs7Ozs7O0lBYjlDLGtDQUFrRztJQUNoRyxrQ0FJSztJQUpJLDBPQUF5QjtJQUtoQyxvRkFDZ0Y7SUFDaEYsK0JBQTBCO0lBQUEsWUFBaUI7SUFBQSxpQkFBTztJQUNsRCwrQkFBZ0M7SUFBQSxrQkFBRTtJQUFBLGlCQUFPO0lBQ3pDLHNGQUFnSDtJQUNsSCxpQkFBVTtJQUNWLDRGQUVVO0lBQ1osaUJBQVU7Ozs7SUFmZ0MsdUZBQXVEO0lBQzVELGVBSS9CO0lBSitCLDBHQUkvQjtJQUNJLGVBQTJCO0lBQTNCLHNEQUEyQjtJQUVQLGVBQWlCO0lBQWpCLG9DQUFpQjtJQUVwQyxlQUFpRDtJQUFqRCwrRUFBaUQ7SUFFaEQsZUFBK0M7SUFBL0MsNkVBQStDOztJRE1oRCx5QkFBeUIsU0FBekIseUJBQXlCOztRQUUzQixhQUFRLEdBQUcs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QkFBOEIsQ0FBQzthQUM1QztnQkFFVSxJQUFJO2tCQUFaLEtBQUs7WUFDRyxRQUFRO2tCQUFoQixLQUFLO1lBSUcsYUFBYTtrQkFBckIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25DaGFuZ2VzLCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VnbWVudCB7XG4gIGtleTogc3RyaW5nO1xuICB2YWx1ZTogYW55O1xuICB0eXBlOiB1bmRlZmluZWQgfCBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIGV4cGFuZGVkOiBib29sZWFuO1xufVxuaW1wb3J0IHsgQ29tcG9uZW50UmVnaXN0ZXIgfSBmcm9tICcuLi8uLi8uLi9kZWNvcmF0b3IvY29tcG9uZW50LXJlZ2lzdGVyLmRlY29yYXRvcic7XG5AQ29tcG9uZW50UmVnaXN0ZXIoe1xuICB1cmk6ICdlcHNnaXMtanNvbi12aWV3ZXInLFxuICBwYXRoOiBcImNvbXBvbmVudHMvc2hhcmVkL2pzb252aWV3ZXJcIlxufSlcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Vwc2dpcy1qc29uLXZpZXdlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9qc29uLXZpZXdlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2pzb24tdmlld2VyLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRXBzR0lTSnNvblZpZXdlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkganNvbjogYW55O1xuICBASW5wdXQoKSBleHBhbmRlZCA9IHRydWU7XG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBJdCB3aWxsIGJlIGFsd2F5cyB0cnVlIGFuZCBkZWxldGVkIGluIHZlcnNpb24gMy4wLjBcbiAgICovXG4gIEBJbnB1dCgpIGNsZWFuT25DaGFuZ2UgPSB0cnVlO1xuXG4gIHNlZ21lbnRzOiBTZWdtZW50W10gPSBbXTtcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmluaXRKc29uKCk7XG4gIH1cblxuICBpbml0SnNvbigpOiB2b2lkIHtcbiAgICBpZih0eXBlb2YgdGhpcy5qc29uID09PSAnc3RyaW5nJykge1xuICAgICAgdGhpcy5qc29uID0gSlNPTi5wYXJzZSh0aGlzLmpzb24pO1xuICAgIH1cbiAgICB0aGlzLm5nT25DaGFuZ2VzKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICBpZiAodGhpcy5jbGVhbk9uQ2hhbmdlKSB7XG4gICAgICB0aGlzLnNlZ21lbnRzID0gW107XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB0aGlzLmpzb24gPT09ICdvYmplY3QnKSB7XG4gICAgICBPYmplY3Qua2V5cyh0aGlzLmpzb24pLmZvckVhY2goIGtleSA9PiB7XG4gICAgICAgIHRoaXMuc2VnbWVudHMucHVzaCh0aGlzLnBhcnNlS2V5VmFsdWUoa2V5LCB0aGlzLmpzb25ba2V5XSkpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2VnbWVudHMucHVzaCh0aGlzLnBhcnNlS2V5VmFsdWUoYCgke3R5cGVvZiB0aGlzLmpzb259KWAsIHRoaXMuanNvbikpO1xuICAgIH1cbiAgfVxuXG4gIGlzRXhwYW5kYWJsZShzZWdtZW50OiBTZWdtZW50KSB7XG4gICAgcmV0dXJuIHNlZ21lbnQudHlwZSA9PT0gJ29iamVjdCcgfHwgc2VnbWVudC50eXBlID09PSAnYXJyYXknO1xuICB9XG5cbiAgdG9nZ2xlKHNlZ21lbnQ6IFNlZ21lbnQpIHtcbiAgICBpZiAodGhpcy5pc0V4cGFuZGFibGUoc2VnbWVudCkpIHtcbiAgICAgIHNlZ21lbnQuZXhwYW5kZWQgPSAhc2VnbWVudC5leHBhbmRlZDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHBhcnNlS2V5VmFsdWUoa2V5OiBhbnksIHZhbHVlOiBhbnkpOiBTZWdtZW50IHtcbiAgICBjb25zdCBzZWdtZW50OiBTZWdtZW50ID0ge1xuICAgICAga2V5OiBrZXksXG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICB0eXBlOiB1bmRlZmluZWQsXG4gICAgICBkZXNjcmlwdGlvbjogJycgKyB2YWx1ZSxcbiAgICAgIGV4cGFuZGVkOiB0aGlzLmV4cGFuZGVkXG4gICAgfTtcblxuICAgIHN3aXRjaCAodHlwZW9mIHNlZ21lbnQudmFsdWUpIHtcbiAgICAgIGNhc2UgJ251bWJlcic6IHtcbiAgICAgICAgc2VnbWVudC50eXBlID0gJ251bWJlcic7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSAnYm9vbGVhbic6IHtcbiAgICAgICAgc2VnbWVudC50eXBlID0gJ2Jvb2xlYW4nO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgJ2Z1bmN0aW9uJzoge1xuICAgICAgICBzZWdtZW50LnR5cGUgPSAnZnVuY3Rpb24nO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgJ3N0cmluZyc6IHtcbiAgICAgICAgc2VnbWVudC50eXBlID0gJ3N0cmluZyc7XG4gICAgICAgIHNlZ21lbnQuZGVzY3JpcHRpb24gPSAnXCInICsgc2VnbWVudC52YWx1ZSArICdcIic7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSAndW5kZWZpbmVkJzoge1xuICAgICAgICBzZWdtZW50LnR5cGUgPSAndW5kZWZpbmVkJztcbiAgICAgICAgc2VnbWVudC5kZXNjcmlwdGlvbiA9ICd1bmRlZmluZWQnO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgJ29iamVjdCc6IHtcbiAgICAgICAgLy8geWVhLCBudWxsIGlzIG9iamVjdFxuICAgICAgICBpZiAoc2VnbWVudC52YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICAgIHNlZ21lbnQudHlwZSA9ICdudWxsJztcbiAgICAgICAgICBzZWdtZW50LmRlc2NyaXB0aW9uID0gJ251bGwnO1xuICAgICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoc2VnbWVudC52YWx1ZSkpIHtcbiAgICAgICAgICBzZWdtZW50LnR5cGUgPSAnYXJyYXknO1xuICAgICAgICAgIHNlZ21lbnQuZGVzY3JpcHRpb24gPSAnQXJyYXlbJyArIHNlZ21lbnQudmFsdWUubGVuZ3RoICsgJ10gJyArIEpTT04uc3RyaW5naWZ5KHNlZ21lbnQudmFsdWUpO1xuICAgICAgICB9IGVsc2UgaWYgKHNlZ21lbnQudmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgICAgc2VnbWVudC50eXBlID0gJ2RhdGUnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNlZ21lbnQudHlwZSA9ICdvYmplY3QnO1xuICAgICAgICAgIHNlZ21lbnQuZGVzY3JpcHRpb24gPSAnT2JqZWN0ICcgKyBKU09OLnN0cmluZ2lmeShzZWdtZW50LnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc2VnbWVudDtcbiAgfVxufVxuIiwiPHNlY3Rpb24gY2xhc3M9XCJqc29uLXZpZXdlclwiPlxuICA8c2VjdGlvbiAqbmdGb3I9XCJsZXQgc2VnbWVudCBvZiBzZWdtZW50c1wiIFtuZ0NsYXNzXT1cIlsnc2VnbWVudCcsICdzZWdtZW50LXR5cGUtJyArIHNlZ21lbnQudHlwZV1cIj5cbiAgICA8c2VjdGlvbiAoY2xpY2spPVwidG9nZ2xlKHNlZ21lbnQpXCIgW25nQ2xhc3NdPVwie1xuICAgICAgICAnc2VnbWVudC1tYWluJzogdHJ1ZSxcbiAgICAgICAgJ2V4cGFuZGFibGUnOiBpc0V4cGFuZGFibGUoc2VnbWVudCksXG4gICAgICAgICdleHBhbmRlZCc6IHNlZ21lbnQuZXhwYW5kZWRcbiAgICAgIH1cIj5cbiAgICAgIDxkaXYgKm5nSWY9XCJpc0V4cGFuZGFibGUoc2VnbWVudClcIiBjbGFzcz1cInRvZ2dsZXJcIlxuICAgICAgICBbbmdDbGFzc109XCJ7J2NvbGxhcHNlJzogc2VnbWVudC5leHBhbmRlZCwgJ2V4cGFuZCc6ICFzZWdtZW50LmV4cGFuZGVkfVwiPjwvZGl2PlxuICAgICAgPHNwYW4gY2xhc3M9XCJzZWdtZW50LWtleVwiPnt7IHNlZ21lbnQua2V5IH19PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJzZWdtZW50LXNlcGFyYXRvclwiPjogPC9zcGFuPlxuICAgICAgPHNwYW4gKm5nSWY9XCIhc2VnbWVudC5leHBhbmRlZCB8fCAhaXNFeHBhbmRhYmxlKHNlZ21lbnQpXCIgY2xhc3M9XCJzZWdtZW50LXZhbHVlXCI+e3sgc2VnbWVudC5kZXNjcmlwdGlvbiB9fTwvc3Bhbj5cbiAgICA8L3NlY3Rpb24+XG4gICAgPHNlY3Rpb24gKm5nSWY9XCJzZWdtZW50LmV4cGFuZGVkICYmIGlzRXhwYW5kYWJsZShzZWdtZW50KVwiIGNsYXNzPVwiY2hpbGRyZW5cIj5cbiAgICAgIDxlcHNnaXMtanNvbi12aWV3ZXIgW2pzb25dPVwic2VnbWVudC52YWx1ZVwiIFtleHBhbmRlZF09XCJleHBhbmRlZFwiPjwvZXBzZ2lzLWpzb24tdmlld2VyPlxuICAgIDwvc2VjdGlvbj5cbiAgPC9zZWN0aW9uPlxuPC9zZWN0aW9uPiJdfQ==