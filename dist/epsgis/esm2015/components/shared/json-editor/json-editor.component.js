var JsonEditorComponent_1;
import { __decorate } from "tslib";
import { Component, EventEmitter, forwardRef, Input, Output, ViewChild } from '@angular/core';
import { ComponentRegister } from '../../../decorator/component-register.decorator';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i0 from "@angular/core";
const _c0 = ["jsoneditor"];
let JsonEditorComponent = JsonEditorComponent_1 = class JsonEditorComponent {
    constructor(zone) {
        this.jsonRess = [
            "assets/json-editor/930/jsoneditor.min.css",
            "assets/json-editor/930/jsoneditor.min.js"
        ];
        this.dataChange = new EventEmitter();
        this.onChange = new EventEmitter();
        this.onError = new EventEmitter();
        this.disabled = false;
        this.zone = zone;
    }
    get data() {
        return this._data;
    }
    set data(val) {
        this._data = val;
        this.writeValue(val);
        this.dataChange.emit(val);
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.initEditor(this.editorOptions || {});
    }
    ngOnDestroy() {
        this.destroy();
    }
    initEditor(options) {
        let defaultOptions = {
            enableSort: true,
            colorPicker: true,
            escapeUnicode: false,
            sortObjectKeys: true,
            history: true,
            modes: ['tree', 'view', 'form', 'code', 'text', 'preview'],
            language: "zh-CN",
            search: true,
            onChangeJSON: (json) => {
            },
            onChangeText: (jsonString) => {
            },
            onError: (error) => {
            }
        };
        if (this.onError.observers.length >= 1) {
            defaultOptions.onError = (v) => {
                this.onError.emit(v);
            };
        }
        const newOptions = Object.assign(options, defaultOptions);
        newOptions.onChange = () => {
            if (this.editor) {
                const value = this.editor.get();
                this.updateValue(value);
            }
        },
            this.editor = new JSONEditor(this.jsonEditorContianer.nativeElement, newOptions, this.data);
    }
    get value() {
        return this._value;
    }
    set value(v) {
        if (v !== this._value) {
            this._value = v;
            this._onChange(v);
        }
    }
    _onChange(_) {
    }
    _onTouched() {
    }
    registerOnChange(fn) {
        this._onChange = fn;
    }
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    updateValue(value) {
        this.zone.run(() => {
            this.value = value;
            this._onTouched();
            if (this.editor) {
                this.onChange.emit(value);
            }
        });
    }
    writeValue(value) {
        this._value = value;
        if (this.editor) {
            this.editor.set(value);
        }
    }
    getEditor() {
        return this.editor;
    }
    expandAll() {
        if (this.editor) {
            this.editor.expandAll();
        }
    }
    collapseAll() {
        if (this.editor) {
            this.editor.collapseAll();
        }
    }
    destroy() {
        if (this.editor) {
            this.editor.destroy();
        }
    }
    focus() {
        if (this.editor) {
            this.editor.focus();
        }
    }
    setMode(mode) {
        if (this.editor) {
            this.editor.setMode(mode);
        }
    }
    setModes(modes) {
        if (this.editor) {
            this.editor.setModes(modes);
        }
    }
    setName(name) {
        if (this.editor) {
            this.editor.setName(name);
        }
    }
    setSchema(schema) {
        if (this.editor) {
            this.editor.setSchema(schema);
        }
    }
    setText(jsonString) {
        if (this.editor) {
            this.editor.setText(jsonString);
        }
    }
    getMode() {
        if (this.editor) {
            return this.editor.getMode();
        }
    }
    getName() {
        if (this.editor) {
            return this.editor.getName();
        }
    }
    getText() {
        if (this.editor) {
            return this.editor.getText();
        }
    }
};
JsonEditorComponent.ɵfac = function JsonEditorComponent_Factory(t) { return new (t || JsonEditorComponent)(i0.ɵɵdirectiveInject(i0.NgZone)); };
JsonEditorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: JsonEditorComponent, selectors: [["epsgis-json-editor"]], viewQuery: function JsonEditorComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 3);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.jsonEditorContianer = _t.first);
    } }, inputs: { data: "data", editorOptions: ["options", "editorOptions"], treeMaxHeight: "treeMaxHeight" }, outputs: { dataChange: "dataChange", onChange: "onChange", onError: "onError" }, features: [i0.ɵɵProvidersFeature([
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => JsonEditorComponent_1),
                multi: true
            }
        ])], decls: 2, vars: 0, consts: [["jsoneditor", ""]], template: function JsonEditorComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "div", null, 0);
    } }, styles: ["[_nghost-%COMP%]     .jsoneditor-poweredBy{\n      display: none;\n    }\n    [_nghost-%COMP%] > div[_ngcontent-%COMP%]{\n        height: 100%;\n    }"] });
JsonEditorComponent = JsonEditorComponent_1 = __decorate([
    ComponentRegister({
        uri: 'epsgis-json-editor',
        path: "components/shared/json-editor"
    })
], JsonEditorComponent);
export { JsonEditorComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(JsonEditorComponent, [{
        type: Component,
        args: [{
                selector: 'epsgis-json-editor',
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => JsonEditorComponent),
                        multi: true
                    }
                ],
                template: `<div #jsoneditor></div>`,
                styles: [`
    :host ::ng-deep .jsoneditor-poweredBy{
      display: none;
    }
    :host>div{
        height: 100%;
    }
  `]
            }]
    }], function () { return [{ type: i0.NgZone }]; }, { jsonEditorContianer: [{
            type: ViewChild,
            args: ["jsoneditor", { static: true }]
        }], data: [{
            type: Input
        }], dataChange: [{
            type: Output
        }], editorOptions: [{
            type: Input,
            args: ["options"]
        }], treeMaxHeight: [{
            type: Input
        }], onChange: [{
            type: Output
        }], onError: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbi1lZGl0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZXBzZ2lzL2NvbXBvbmVudHMvc2hhcmVkL2pzb24tZWRpdG9yL2pzb24tZWRpdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWMsWUFBWSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQWtCLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUgsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saURBQWlELENBQUM7QUFJcEYsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7SUE0QjVELG1CQUFtQixpQ0FBbkIsbUJBQW1CO0lBbUM5QixZQUFZLElBQVk7UUFqQ2YsYUFBUSxHQUFHO1lBQ2xCLDJDQUEyQztZQUMzQywwQ0FBMEM7U0FDM0MsQ0FBQztRQWdCRixlQUFVLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFTekMsYUFBUSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRWpELFlBQU8sR0FBd0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQWlGNUQsYUFBUSxHQUFHLEtBQUssQ0FBQztRQTdFZixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNuQixDQUFDO0lBMUJELElBQ0ksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBQ0QsSUFBSSxJQUFJLENBQUMsR0FBRztRQUNWLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQXFCRCxRQUFRO0lBS1IsQ0FBQztJ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QW5CLG1CQUFtQjtjQW5CL0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLFNBQVMsRUFBRTtvQkFDVDt3QkFDRSxPQUFPLEVBQUUsaUJBQWlCO3dCQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxvQkFBb0IsQ0FBQzt3QkFDbEQsS0FBSyxFQUFFLElBQUk7cUJBQ1o7aUJBQ0Y7Z0JBQ0QsUUFBUSxFQUFFLHlCQUF5QjtnQkFDbkMsTUFBTSxFQUFFLENBQUM7Ozs7Ozs7R0FPUixDQUFDO2FBQ0g7eURBUzRDLG1CQUFtQjtrQkFBN0QsU0FBUzttQkFBQyxZQUFZLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO1lBSXJDLElBQUk7a0JBRFAsS0FBSztZQVVOLFVBQVU7a0JBRFQsTUFBTTtZQUtXLGFBQWE7a0JBQTlCLEtBQUs7bUJBQUMsU0FBUztZQUlQLGFBQWE7a0JBQXJCLEtBQUs7WUFDSSxRQUFRO2tCQUFqQixNQUFNO1lBRUcsT0FBTztrQkFBaEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBmb3J3YXJkUmVmLCBJbnB1dCwgTmdab25lLCBPbkluaXQsIE91dHB1dCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBpbXBvcnQgeyBzaW1wbGVMb2FkZXIgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9zaW1wbGUtbG9hZGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29tcG9uZW50UmVnaXN0ZXIgfSBmcm9tICcuLi8uLi8uLi9kZWNvcmF0b3IvY29tcG9uZW50LXJlZ2lzdGVyLmRlY29yYXRvcic7XG4vLyBpbXBvcnQgKiBhcyBKU09ORWRpdG9yIGZyb20gXCIuLi8uLi8uLi91dGlscy9qc29uZWRpdG9yXCI7XG4vLyBpbXBvcnQgKiBhcyBKU09ORWRpdG9yIGZyb20gXCJqc29uZWRpdG9yXCI7XG5pbXBvcnQgeyBKU09ORWRpdG9yTW9kZSwgSlNPTkVkaXRvck9wdGlvbnMgfSBmcm9tIFwianNvbmVkaXRvclwiO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuZGVjbGFyZSB2YXIgSlNPTkVkaXRvcjogYW55O1xuLyoqXG4gKiBKc29u57yW6L6R5ZmoIHJ1aXJcbiAqL1xuQENvbXBvbmVudFJlZ2lzdGVyKHtcbiAgdXJpOiAnZXBzZ2lzLWpzb24tZWRpdG9yJyxcbiAgcGF0aDogXCJjb21wb25lbnRzL3NoYXJlZC9qc29uLWVkaXRvclwiXG59KVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZXBzZ2lzLWpzb24tZWRpdG9yJyxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBKc29uRWRpdG9yQ29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfVxuICBdLFxuICB0ZW1wbGF0ZTogYDxkaXYgI2pzb25lZGl0b3I+PC9kaXY+YCxcbiAgc3R5bGVzOiBbYFxuICAgIDpob3N0IDo6bmctZGVlcCAuanNvbmVkaXRvci1wb3dlcmVkQnl7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICA6aG9zdD5kaXZ7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG4gIGBdXG59KVxuZXhwb3J0IGNsYXNzIEpzb25FZGl0b3JDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcblxuICByZWFkb25seSBqc29uUmVzcyA9IFtcbiAgICBcImFzc2V0cy9qc29uLWVkaXRvci85MzAvanNvbmVkaXRvci5taW4uY3NzXCIsXG4gICAgXCJhc3NldHMvanNvbi1lZGl0b3IvOTMwL2pzb25lZGl0b3IubWluLmpzXCJcbiAgXTtcbiAgcHJpdmF0ZSBfdmFsdWU6IGFueTtcbiAgcHJpdmF0ZSBlZGl0b3I6IGFueTtcbiAgQFZpZXdDaGlsZChcImpzb25lZGl0b3JcIiwgeyBzdGF0aWM6IHRydWUgfSkganNvbkVkaXRvckNvbnRpYW5lcjogRWxlbWVudFJlZjtcbiAgcHJpdmF0ZSBfZGF0YTtcbiAgLy/lr7nlpJblsZ7mgKcg5byA5aeLXG4gIEBJbnB1dCgpXG4gIGdldCBkYXRhKCkge1xuICAgIHJldHVybiB0aGlzLl9kYXRhO1xuICB9XG4gIHNldCBkYXRhKHZhbCkge1xuICAgIHRoaXMuX2RhdGEgPSB2YWw7XG4gICAgdGhpcy53cml0ZVZhbHVlKHZhbCk7XG4gICAgdGhpcy5kYXRhQ2hhbmdlLmVtaXQodmFsKTtcbiAgfVxuICBAT3V0cHV0KClcbiAgZGF0YUNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIC8qKlxuICAgKiDpgInpoblcbiAgICovXG4gIEBJbnB1dChcIm9wdGlvbnNcIikgZWRpdG9yT3B0aW9uczogSlNPTkVkaXRvck9wdGlvbnM7XG4gIC8qKlxuICAgKiDmoJHmnIDlpKfpq5jluqZcbiAgICovXG4gIEBJbnB1dCgpIHRyZWVNYXhIZWlnaHQ6IG51bWJlcjtcbiAgQE91dHB1dCgpIG9uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgLy8gQE91dHB1dCgpIG9uRWRpdGFibGU6IEV2ZW50RW1pdHRlcjxFZGl0YWJsZU5vZGUgfCBvYmplY3Q+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgb25FcnJvcjogRXZlbnRFbWl0dGVyPEVycm9yPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgLy/lr7nlpJblsZ7mgKcg57uT5p2fXG4gIHByaXZhdGUgem9uZTogTmdab25lO1xuICBjb25zdHJ1Y3Rvcih6b25lOiBOZ1pvbmUpIHtcbiAgICB0aGlzLnpvbmUgPSB6b25lO1xuICB9XG5cblxuICBuZ09uSW5pdCgpIHtcbiAgICAvLyBzaW1wbGVMb2FkZXIubG9hZFJlc291cmNlcyh0aGlzLmpzb25SZXNzLG51bGwsbnVsbCwoKT0+e1xuICAgIC8vICAgY29uc3QgeHggPXdpbmRvd1tcIkpTT05FZGl0b3JcIl07Ly/kuLrllaXkvJrkuLp1bmRlZmluZWTvvJ/liqDovb1qc+S4jeWvue+8n1xuXG4gICAgLy8gfSlcbiAgfVxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5pbml0RWRpdG9yKHRoaXMuZWRpdG9yT3B0aW9ucyB8fCB7fSk7XG4gIH1cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5kZXN0cm95KCk7XG4gIH1cbiAgLyoqXG4gICAqIOWIneWni+WMlue8lui+keWZqFxuICAgKiBAcGFyYW0gb3B0aW9ucyBcbiAgICovXG4gIHByaXZhdGUgaW5pdEVkaXRvcihvcHRpb25zOiBKU09ORWRpdG9yT3B0aW9ucykge1xuICAgIGxldCBkZWZhdWx0T3B0aW9uczogSlNPTkVkaXRvck9wdGlvbnMgPSB7XG4gICAgICAvLyBuYW1lOlwiXCIsLy/moLnoioLngrnlkI3np7BcbiAgICAgIGVuYWJsZVNvcnQ6IHRydWUsXG4gICAgICBjb2xvclBpY2tlcjogdHJ1ZSxcbiAgICAgIGVzY2FwZVVuaWNvZGU6IGZhbHNlLFxuICAgICAgc29ydE9iamVjdEtleXM6IHRydWUsXG4gICAgICBoaXN0b3J5OiB0cnVlLFxuICAgICAgbW9kZXM6IFsndHJlZScsICd2aWV3JywgJ2Zvcm0nLCAnY29kZScsICd0ZXh0JywgJ3ByZXZpZXcnXSxcbiAgICAgIGxhbmd1YWdlOiBcInpoLUNOXCIsXG4gICAgICBzZWFyY2g6IHRydWUsXG4gICAgICBvbkNoYW5nZUpTT046IChqc29uOiBhbnkpID0+IHtcbiAgICAgICAgLy8ndHJlZScsICdmb3JtJywgJ3ZpZXcn6Kem5Y+R77yM5Luj56CB5qih5byP5LiN6Kem5Y+RXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwib25DaGFuZ2VKU09OOlwiLCBqc29uKTtcbiAgICAgIH0sXG4gICAgICBvbkNoYW5nZVRleHQ6IChqc29uU3RyaW5nOiBzdHJpbmcpID0+IHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIm9uQ2hhbmdlVGV4dDpcIiwganNvblN0cmluZyk7XG4gICAgICB9LFxuICAgICAgb25FcnJvcjogKGVycm9yOiBFcnJvcikgPT4ge1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBpZiAodGhpcy5vbkNoYW5nZS5vYnNlcnZlcnMubGVuZ3RoID49IDEpIHtcbiAgICAvLyAgIGRlZmF1bHRPcHRpb25zLm9uQ2hhbmdlID0gKCkgPT4ge1xuICAgIC8vICAgICB0aGlzLm9uQ2hhbmdlLmVtaXQodGhpcy5lZGl0b3IuZ2V0KCkpXG4gICAgLy8gICB9O1xuICAgIC8vIH1cbiAgICBpZiAodGhpcy5vbkVycm9yLm9ic2VydmVycy5sZW5ndGggPj0gMSkge1xuICAgICAgZGVmYXVsdE9wdGlvbnMub25FcnJvciA9ICh2KSA9PiB7XG4gICAgICAgIHRoaXMub25FcnJvci5lbWl0KHYpO1xuICAgICAgfTtcbiAgICB9XG4gICAgY29uc3QgbmV3T3B0aW9ucyA9IE9iamVjdC5hc3NpZ24ob3B0aW9ucywgZGVmYXVsdE9wdGlvbnMpO1xuICAgIC8v6YG/5YWN6KKr5aSW6YOo6KaG55uWXG4gICAgbmV3T3B0aW9ucy5vbkNoYW5nZSA9ICgpID0+IHtcbiAgICAgIGlmICh0aGlzLmVkaXRvcikge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZWRpdG9yLmdldCgpO1xuICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlKHZhbHVlKTtcbiAgICAgIH1cbiAgICB9LFxuICAgICAgdGhpcy5lZGl0b3IgPSBuZXcgSlNPTkVkaXRvcih0aGlzLmpzb25FZGl0b3JDb250aWFuZXIubmF0aXZlRWxlbWVudCwgbmV3T3B0aW9ucywgdGhpcy5kYXRhKTtcblxuICB9XG4gIGdldCB2YWx1ZSgpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxuXG4gIHNldCB2YWx1ZSh2OiBhbnkpIHtcbiAgICBpZiAodiAhPT0gdGhpcy5fdmFsdWUpIHtcbiAgICAgIHRoaXMuX3ZhbHVlID0gdjtcbiAgICAgIHRoaXMuX29uQ2hhbmdlKHYpO1xuICAgIH1cbiAgfVxuICBfb25DaGFuZ2UoXzogYW55KSB7XG4gIH1cblxuICBfb25Ub3VjaGVkKCkge1xuICB9XG4gIGRpc2FibGVkID0gZmFsc2U7XG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSkge1xuICAgIHRoaXMuX29uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KSB7XG4gICAgdGhpcy5fb25Ub3VjaGVkID0gZm47XG4gIH1cbiAgc2V0RGlzYWJsZWRTdGF0ZT8oaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuICB9XG4gIC8qKlxuICAgKiBcbiAgICogQHBhcmFtIHZhbHVlIFxuICAgKi9cbiAgdXBkYXRlVmFsdWUodmFsdWU6IGFueSkge1xuICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgdGhpcy5fb25Ub3VjaGVkKCk7XG4gICAgICBpZiAodGhpcy5lZGl0b3IpIHtcbiAgICAgICAgdGhpcy5vbkNoYW5nZS5lbWl0KHZhbHVlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBcbiAgICogQHBhcmFtIHZhbHVlIFxuICAgKi9cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgICBpZiAodGhpcy5lZGl0b3IpIHtcbiAgICAgIHRoaXMuZWRpdG9yLnNldCh2YWx1ZSk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiDojrflj5bnvJbovpHlmahcbiAgICogQHJldHVybnMgXG4gICAqL1xuICBnZXRFZGl0b3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWRpdG9yO1xuICB9XG4gIC8qKlxuICAgKiDlsZXlvIDoioLngrlcbiAgICovXG4gIHB1YmxpYyBleHBhbmRBbGwoKSB7XG4gICAgaWYgKHRoaXMuZWRpdG9yKSB7XG4gICAgICB0aGlzLmVkaXRvci5leHBhbmRBbGwoKTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIOaUtue8qeiKgueCuVxuICAgKi9cbiAgcHVibGljIGNvbGxhcHNlQWxsKCkge1xuICAgIGlmICh0aGlzLmVkaXRvcikge1xuICAgICAgdGhpcy5lZGl0b3IuY29sbGFwc2VBbGwoKTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIOmUgOavgee8lui+keWZqFxuICAgKi9cbiAgcHVibGljIGRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuZWRpdG9yKSB7XG4gICAgICB0aGlzLmVkaXRvci5kZXN0cm95KCk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiDorr7nva7nhKbngrlcbiAgICovXG4gIHB1YmxpYyBmb2N1cygpIHtcbiAgICBpZiAodGhpcy5lZGl0b3IpIHtcbiAgICAgIHRoaXMuZWRpdG9yLmZvY3VzKCk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiAg6K6+572u5qih5byPXG4gICAqIEBwYXJhbSBtb2RlXG4gICAqL1xuICBwdWJsaWMgc2V0TW9kZShtb2RlOiBKU09ORWRpdG9yTW9kZSkge1xuICAgIGlmICh0aGlzLmVkaXRvcikge1xuICAgICAgdGhpcy5lZGl0b3Iuc2V0TW9kZShtb2RlKTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIOiuvue9ruaooeW8j1xuICAgKiBAcGFyYW0gbW9kZXMgXG4gICAqL1xuICBwdWJsaWMgc2V0TW9kZXMobW9kZXM6IEpTT05FZGl0b3JNb2RlW10pIHtcbiAgICBpZiAodGhpcy5lZGl0b3IpIHtcbiAgICAgIHRoaXMuZWRpdG9yLnNldE1vZGVzKG1vZGVzKTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIOiuvue9ruagueiKgueCuVxuICAgKiBAcGFyYW0gbmFtZSBcbiAgICovXG4gIHB1YmxpYyBzZXROYW1lKG5hbWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIGlmICh0aGlzLmVkaXRvcikge1xuICAgICAgdGhpcy5lZGl0b3Iuc2V0TmFtZShuYW1lKTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIOiuvue9ruaetuaehFxuICAgKiBAcGFyYW0gc2NoZW1hIFxuICAgKi9cbiAgcHVibGljIHNldFNjaGVtYShzY2hlbWE6IE9iamVjdCkge1xuICAgIGlmICh0aGlzLmVkaXRvcikge1xuICAgICAgdGhpcy5lZGl0b3Iuc2V0U2NoZW1hKHNjaGVtYSk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiDorr7nva5qc29u5YaF5a65XG4gICAqIEBwYXJhbSBqc29uU3RyaW5nIFxuICAgKi9cbiAgcHVibGljIHNldFRleHQoanNvblN0cmluZzogc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMuZWRpdG9yKSB7XG4gICAgICB0aGlzLmVkaXRvci5zZXRUZXh0KGpzb25TdHJpbmcpO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICog6I635Y+W5qih5byPXG4gICAqIEByZXR1cm5zIFxuICAgKi9cbiAgcHVibGljIGdldE1vZGUoKTogSlNPTkVkaXRvck1vZGUge1xuICAgIGlmICh0aGlzLmVkaXRvcikge1xuICAgICAgcmV0dXJuIHRoaXMuZWRpdG9yLmdldE1vZGUoKTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIOiOt+WPluWQjeensO+8iOagueiKgueCue+8iSBcbiAgICogQHJldHVybnMgXG4gICAqL1xuICBwdWJsaWMgZ2V0TmFtZSgpOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLmVkaXRvcikge1xuICAgICAgcmV0dXJuIHRoaXMuZWRpdG9yLmdldE5hbWUoKTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIOiOt+WPlmpzb27lhoXlrrlcbiAgICogQHJldHVybnMgXG4gICAqL1xuICBwdWJsaWMgZ2V0VGV4dCgpOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLmVkaXRvcikge1xuICAgICAgcmV0dXJuIHRoaXMuZWRpdG9yLmdldFRleHQoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==