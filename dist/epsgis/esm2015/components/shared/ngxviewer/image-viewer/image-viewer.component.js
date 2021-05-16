import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { ComponentRegister } from '../../../../decorator/component-register.decorator';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
import * as i2 from "../../../../services/event-emitter.service";
import * as i3 from "@angular/common";
const _c0 = ["imageViewerContainer"];
const _c1 = ["showImg"];
function ImageViewerComponent_div_16_img_11_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "img", 55);
    i0.ɵɵlistener("click", function ImageViewerComponent_div_16_img_11_Template_img_click_0_listener() { i0.ɵɵrestoreView(_r9); const imgUrl_r6 = ctx.$implicit; const i_r7 = ctx.index; const ctx_r8 = i0.ɵɵnextContext(2); return ctx_r8.changeCurrentImageUrl(imgUrl_r6, i_r7); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const imgUrl_r6 = ctx.$implicit;
    i0.ɵɵproperty("src", imgUrl_r6, i0.ɵɵsanitizeUrl);
} }
function ImageViewerComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵnamespaceSVG();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(0, "div", 43);
    i0.ɵɵelementStart(1, "div", 44);
    i0.ɵɵlistener("click", function ImageViewerComponent_div_16_Template_div_click_1_listener() { i0.ɵɵrestoreView(_r11); const _r4 = i0.ɵɵreference(10); const ctx_r10 = i0.ɵɵnextContext(); const _r1 = i0.ɵɵreference(3); return ctx_r10.previousImg(_r4, _r1); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(2, "svg", 45);
    i0.ɵɵelement(3, "path", 46);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(4, "div", 47);
    i0.ɵɵlistener("click", function ImageViewerComponent_div_16_Template_div_click_4_listener() { i0.ɵɵrestoreView(_r11); const _r4 = i0.ɵɵreference(10); const ctx_r12 = i0.ɵɵnextContext(); const _r1 = i0.ɵɵreference(3); return ctx_r12.nextImg(_r4, _r1); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(5, "svg", 48);
    i0.ɵɵelement(6, "path", 49);
    i0.ɵɵelement(7, "path", 50);
    i0.ɵɵelement(8, "path", 51);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(9, "div", 52, 53);
    i0.ɵɵtemplate(11, ImageViewerComponent_div_16_img_11_Template, 1, 1, "img", 54);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(9);
    i0.ɵɵstyleProp("left", ctx_r3.moreImgInitLeft + "px");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r3.imageSources);
} }
let ImageViewerComponent = class ImageViewerComponent {
    constructor(domSanitizer, eventService) {
        this.domSanitizer = domSanitizer;
        this.eventService = eventService;
        this.width = 0;
        this.height = 0;
        this.first = 0;
        this.ready = new EventEmitter(false);
        this.imageSources = [];
        this.radian = 0;
        this.x = 1;
        this.y = 1;
        this.zoom = 0.1;
        this.moreImgInitLeft = 0;
        this.currentImageTempTop = 0;
        this.currentImageTempLeft = 0;
        this.dragStartClientX = 0;
        this.dragStartClientY = 0;
        this.isStartMove = false;
        this.imageViewHeight = "400px";
        this.mainWindowHeight = 0;
    }
    ngOnInit() {
        this.convertUrl(this.source);
    }
    convertUrl(sources) {
        this.imageSources.splice(0);
        if (sources && sources.length > 0) {
            sources.forEach((imgUrl) => {
                this.imageSources.push(this.domSanitizer.bypassSecurityTrustResourceUrl(imgUrl));
            });
            if (this.first == null) {
                this.currentImageUrl = this.imageSources[0];
            }
            else {
                this.currentImageUrl = this.imageSources[this.first];
            }
            this.ready.emit("image viewer initialize!");
        }
        else {
            throw "没有图片源，请传入！";
        }
    }
    changeImageSources(sources) {
        this.source = sources;
        this.convertUrl(this.source);
    }
    currentImageLoaded(img, viewer) {
        this.currentImage = img;
        this.initTop = (viewer.clientHeight - img.offsetHeight) / 2;
        this.initLeft = (viewer.clientWidth - img.offsetWidth) / 2;
        if (this.currentImage) {
            this.currentImage.style.top = this.initTop + "px";
            this.currentImage.style.left = this.initLeft + "px";
        }
        this.mainWindowHeight = this.getMainWindowHeight();
        if (this.imageSources.length > 1) {
            this.imageViewHeight = this.mainWindowHeight - 96 + "px";
        }
        else {
            this.imageViewHeight = this.mainWindowHeight - 46 + "px";
        }
        if (this.checkBrowser().firefox) {
            viewer.addEventListener("DOMMouseScroll", (e) => {
                this.currentImageZoomByWheel(e);
            });
        }
        else {
            viewer.addEventListener("mousewheel", (e) => {
                this.currentImageZoomByWheel(e);
            });
        }
    }
    preOrNextImg(type) {
        let index = this.imageSources.indexOf(this.currentImageUrl);
        if (type == "pre") {
            if (index != 0) {
                index--;
                this.currentImageUrl = this.imageSources[index];
                this.eventService.rss.emit(this.eventService._imageViewerIndexChanged, {
                    index: index,
                });
            }
        }
        else if (type == "next") {
            if (index != this.imageSources.length - 1) {
                index++;
                this.currentImageUrl = this.imageSources[index];
                this.eventService.rss.emit(this.eventService._imageViewerIndexChanged, {
                    index: index,
                });
            }
        }
        this.currentImgReset();
    }
    changeCurrentImg() {
        let matrix = this.getMatrix(this.radian, this.x, this.y);
        if (this.currentImage) {
            this.currentImage.style.transform =
                "matrix(" +
                    matrix.M11.toFixed(16) +
                    "," +
                    matrix.M21.toFixed(16) +
                    "," +
                    matrix.M12.toFixed(16) +
                    "," +
                    matrix.M22.toFixed(16) +
                    ", 0, 0)";
        }
    }
    getMatrix(radian, x, y) {
        let Cos = Math.cos(radian), Sin = Math.sin(radian);
        return {
            M11: Cos * x,
            M12: -Sin * y,
            M21: Sin * x,
            M22: Cos * y,
        };
    }
    vertical() {
        this.radian = Math.PI - this.radian;
        this.y *= -1;
    }
    horizontal() {
        this.radian = Math.PI - this.radian;
        this.x *= -1;
    }
    rotate(radian) {
        this.radian = radian;
    }
    rotateLeftBy90() {
        this.radian -= Math.PI / 2;
    }
    rotateRightBy90() {
        this.radian += Math.PI / 2;
    }
    rotateByDegress(degress) {
        this.radian = (degress * Math.PI) / 180;
    }
    getZoom(scale, zoom) {
        return scale > 0 && scale > -zoom
            ? zoom
            : scale < 0 && scale < zoom
                ? -zoom
                : 0;
    }
    scale(zoom) {
        if (zoom) {
            let hZoom = this.getZoom(this.x, zoom), vZoom = this.getZoom(this.y, zoom);
            if (hZoom && vZoom) {
                this.x += hZoom;
                this.y += vZoom;
            }
        }
    }
    zoomin() {
        this.scale(Math.abs(this.zoom));
    }
    zoomout() {
        this.scale(-Math.abs(this.zoom));
    }
    reset() {
        this.radian = 0;
        this.x = 1;
        this.y = 1;
        this.zoom = 0.1;
        if (this.currentImage) {
            this.currentImage.style.top = this.initTop + "px";
            this.currentImage.style.left = this.initLeft + "px";
        }
    }
    imageZoomin() {
        this.zoomin();
        this.changeCurrentImg();
    }
    imageZoomout() {
        this.zoomout();
        this.changeCurrentImg();
    }
    rotateLeft() {
        this.rotateLeftBy90();
        this.changeCurrentImg();
    }
    rotateRight() {
        this.rotateRightBy90();
        this.changeCurrentImg();
    }
    flipVertical() {
        this.horizontal();
        this.changeCurrentImg();
    }
    flipHorizontal() {
        this.vertical();
        this.changeCurrentImg();
    }
    currentImgReset() {
        this.reset();
        this.changeCurrentImg();
    }
    previousImg(moreImg, viewer) {
        let moveVal = Number(moreImg.style.left.split("px")[0]) + viewer.clientWidth;
        this.moreImgInitLeft = moveVal < 0 ? moveVal : 0;
        if (this.moreImgInitLeft <= 0) {
            this.moreImgInitLeft = 30;
        }
    }
    nextImg(moreImg, viewer) {
        let moveVal = Number(moreImg.style.left.split("px")[0]) - viewer.clientWidth;
        this.moreImgInitLeft =
            -moreImg.clientWidth < moveVal ? moveVal : this.moreImgInitLeft;
        if (this.moreImgInitLeft <= 0) {
            this.moreImgInitLeft = 30;
        }
    }
    changeCurrentImageUrl(imgUrl, index) {
        this.currentImageUrl = imgUrl;
        this.currentImgReset();
        this.eventService.rss.emit(this.eventService._imageViewerIndexChanged, {
            index: index,
        });
    }
    changeCurrentIndex(index) {
        if (index >= 0 && index < this.imageSources.length) {
            this.currentImageUrl = this.imageSources[index];
            this.currentImgReset();
        }
    }
    currentImageZoomByWheel(e) {
        e.preventDefault();
        let scale = (e.wheelDelta ? e.wheelDelta / -180 : (e.detail || 0) / 3) *
            Math.abs(this.zoom);
        this.scale(scale);
        if (this.x >= 0.1 && this.y >= 0.1) {
            this.changeCurrentImg();
        }
    }
    currentImageDragStart(e) {
        if (this.currentImage) {
            this.currentImageTempTop = parseInt(this.currentImage.style.top);
            this.currentImageTempLeft = parseInt(this.currentImage.style.left);
        }
        this.dragStartClientX = e.clientX;
        this.dragStartClientY = e.clientY;
        if (this.currentImage) {
            this.currentImage.style.transition = "all 0s ease-out";
        }
        this.isStartMove = true;
    }
    setImageHeight() {
        const height = this.getMainWindowHeight();
        if (height !== this.mainWindowHeight) {
            this.mainWindowHeight = height;
            if (this.imageSources.length > 1) {
                this.imageViewHeight = height - 96 + "px";
            }
            else {
                this.imageViewHeight = height - 46 + "px";
            }
        }
    }
    currentImageDrag(e) {
        this.setImageHeight();
        if (this.isStartMove) {
            let offsetX = e.clientX - this.dragStartClientX;
            let offsetY = e.clientY - this.dragStartClientY;
            if (this.currentImage) {
                this.currentImage.style.top = this.currentImageTempTop + offsetY + "px";
                this.currentImage.style.left =
                    this.currentImageTempLeft + offsetX + "px";
            }
        }
    }
    currentImageDragEnd(e) {
        if (this.currentImage) {
            this.currentImage.style.transition = "all 0.5s ease-out";
        }
        this.isStartMove = false;
    }
    cancleCurrentImageDrag(e) {
        e.preventDefault();
    }
    getMainWindowHeight() {
        let parentNode = this.imageViewerContainer.nativeElement.parentNode;
        while (parentNode) {
            if (parentNode.className &&
                (parentNode.className === "ssmodal_content" ||
                    parentNode.className === "sspanel_content")) {
                break;
            }
            parentNode = parentNode.parentNode;
        }
        if (parentNode) {
            return parentNode.clientHeight - 30;
        }
        else {
            parentNode = this.imageViewerContainer.nativeElement.parentNode;
            let contentNode = null;
            while (parentNode) {
                if (parentNode.childNodes && parentNode.childNodes.length > 0) {
                    for (const child of parentNode.childNodes) {
                        if (child.nodeName.toLocaleUpperCase() === "NZ-CONTENT") {
                            contentNode = child;
                            break;
                        }
                    }
                }
                if (contentNode) {
                    break;
                }
                parentNode = parentNode.parentNode;
            }
            if (contentNode) {
                return contentNode.clientHeight;
            }
        }
        return this.height;
    }
    checkBrowser() {
        let browser = {}, ua = navigator.userAgent;
        if (window["opera"]) {
            browser.ver = window["opera"].version();
            browser.opera = parseFloat(browser.ver);
        }
        else {
            if (/Edge\/(\S+)/.test(ua)) {
                browser.ver = RegExp["$1"];
                browser.misEdge = parseFloat(browser.ver);
            }
            else if (/OPR\/(\S+)/.test(ua)) {
                browser.ver = RegExp["$1"];
                browser.opera = parseFloat(browser.ver);
            }
            else if (/Chrome\/(\S+)/.test(ua)) {
                browser.ver = RegExp["$1"];
                browser.chrome = parseFloat(browser.ver);
            }
            else if (/Version\/(\S+)/.test(ua)) {
                browser.ver = RegExp["$1"];
                browser.safari = parseFloat(browser.ver);
            }
            else if (/Firefox\/(\S+)/.test(ua)) {
                browser.ver = RegExp["$1"];
                browser.firefox = parseFloat(browser.ver);
            }
            else if (/MSIE ([^;]+)/.test(ua) || /rv:([^\)]+)\) like Gecko/.test(ua)) {
                browser.ver = RegExp["$1"];
                browser.ie = parseFloat(browser.ver);
            }
            else if (/KHTML\/(\S+)/.test(ua) || /Konqueror\/(\S+)/.test(ua)) {
                browser.ver = RegExp["$1"];
                browser.konq = parseFloat(browser.ver);
            }
        }
        return browser;
    }
};
ImageViewerComponent.ɵfac = function ImageViewerComponent_Factory(t) { return new (t || ImageViewerComponent)(i0.ɵɵdirectiveInject(i1.DomSanitizer), i0.ɵɵdirectiveInject(i2.EventEmitterService)); };
ImageViewerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ImageViewerComponent, selectors: [["image-viewer"]], viewQuery: function ImageViewerComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 1);
        i0.ɵɵviewQuery(_c1, 1);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.imageViewerContainer = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.showImg = _t.first);
    } }, inputs: { width: "width", height: "height", source: "source", first: "first" }, outputs: { ready: "ready" }, decls: 43, vars: 6, consts: [[1, "imageViewerContainer"], ["imageViewerContainer", ""], [1, "imageViewer", 3, "dragstart", "mousedown", "mousemove", "mouseup"], ["imageViewer", ""], [3, "src", "load"], ["showImg", ""], [1, "previousImg", 3, "click"], ["aria-hidden", "true", "title", "\u4E0A\u4E00\u5F20", 1, "fa", "fa-chevron-circle-left"], ["t", "1588945968636", "viewBox", "0 0 1024 1024", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", "p-id", "18261", "width", "60", "height", "60", 1, "icon"], ["d", "M564.3264 737.0752l41.5744-41.5744-184.4224-184.1152 184.4224-184.1152-41.5744-41.5744L338.944 511.3856z", "p-id", "18262"], ["d", "M511.7952 101.5808c-226.304 0-409.8048 183.5008-409.8048 409.8048s183.5008 409.8048 409.8048 409.8048S921.6 737.792 921.6 511.3856 738.0992 101.5808 511.7952 101.5808z m0 58.5728c194.048 0 351.3344 157.2864 351.3344 351.3344s-157.3888 351.232-351.3344 351.232c-194.048 0-351.3344-157.2864-351.3344-351.3344 0-93.184 36.9664-182.4768 102.912-248.4224s155.2384-102.8096 248.4224-102.8096z", "p-id", "18263"], [1, "nextImg", 3, "click"], ["aria-hidden", "true", "title", "\u4E0B\u4E00\u5F20", 1, "fa", "fa-chevron-circle-right"], ["t", "1588946002551", "viewBox", "0 0 1024 1024", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", "p-id", "18478", "width", "60", "height", "60", 1, "icon"], ["d", "M459.3664 737.0752L417.792 695.5008l184.4224-184.1152L417.792 327.2704l41.5744-41.5744 225.3824 225.6896z", "p-id", "18479"], ["d", "M511.7952 101.5808c-226.304 0-409.8048 183.5008-409.8048 409.8048s183.5008 409.8048 409.8048 409.8048S921.6 737.792 921.6 511.3856 738.0992 101.5808 511.7952 101.5808z m0 58.5728c194.048 0 351.3344 157.2864 351.3344 351.3344s-157.3888 351.232-351.3344 351.232c-194.048 0-351.3344-157.2864-351.3344-351.3344 0-93.184 36.9664-182.4768 102.912-248.4224s155.2384-102.8096 248.4224-102.8096z", "p-id", "18480"], ["class", "smallImageViewer", 4, "ngIf"], [1, "imageTools"], ["title", "\u653E\u5927", 1, "toolsBtn", "imageZoomin", 3, "click"], ["t", "1588941022678", "viewBox", "0 0 1027 1024", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", "p-id", "8990", "width", "20", "height", "20", 1, "icon"], ["d", "M722.489 642.844c45.511-62.577 73.955-136.533 73.955-216.177 0-204.8-164.977-369.778-369.777-369.778S56.889 221.867 56.889 426.667s164.978 369.777 369.778 369.777c79.644 0 153.6-28.444 216.177-68.266l221.867 221.866c22.756 22.756 56.889 22.756 79.645 0 22.755-22.755 22.755-56.888 0-79.644L722.489 642.844z m-295.822 96.712c-170.667 0-312.89-142.223-312.89-312.89S256 113.779 426.668 113.779 739.556 256 739.556 426.667s-142.223 312.889-312.89 312.889", "p-id", "8991"], ["d", "M227.556 398.222h398.222v56.89H227.556z", "p-id", "8992"], ["d", "M398.222 227.556h56.89v398.222h-56.89z", "p-id", "8993"], ["title", "\u7F29\u5C0F", 1, "toolsBtn", "imageZoomout", 3, "click"], ["t", "1588941306698", "viewBox", "0 0 1024 1024", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", "p-id", "9115", "width", "20", "height", "20", 1, "icon"], ["d", "M446.258717 823.960011c-51.124378 0-100.745519-10.005888-147.456377-29.814026-45.097104-19.050891-85.673242-46.388517-120.438023-81.153298-34.762735-34.764781-62.102407-75.340919-81.153298-120.438023-19.803022-46.709835-29.814026-96.324836-29.814026-147.449213s10.011005-100.745519 29.814026-147.456377c19.050891-45.097104 46.38954-85.673242 81.153298-120.438023 34.764781-34.762735 75.340919-62.102407 120.438023-81.153298 46.709835-19.803022 96.331999-29.814026 147.456377-29.814026 51.124378 0 100.739379 10.011005 147.449213 29.814026 45.097104 19.050891 85.673242 46.38954 120.438023 81.153298 34.764781 34.764781 62.102407 75.340919 81.153298 120.438023 19.808138 46.709835 29.813003 96.331999 29.813003 147.456377s-10.005888 100.739379-29.813003 147.449213c-19.050891 45.097104-46.388517 85.673242-81.153298 120.438023-34.764781 34.764781-75.340919 62.102407-120.438023 81.153298-46.604434 19.808138-96.220459 29.814026-147.449213 29.814026z m0-688.833451c-170.920788 0-309.97889 139.058103-309.978891 309.978891 0 170.915671 139.058103 309.971727 309.978891 309.971727 170.915671 0 309.971727-139.057079 309.971727-309.971727 0-170.920788-138.951679-309.97889-309.971727-309.978891z m0 0", "p-id", "9116"], ["d", "M924.025031 957.314205c-8.823969 0-17.646915-3.337002-24.321942-10.115382L680.137395 727.635175c-13.453407-13.453407-13.453407-35.307134 0-48.76054 13.453407-13.453407 35.300994-13.453407 48.755424 0l219.563648 219.565694c13.453407 13.453407 13.453407 35.305087 0 48.759518-6.779404 6.77838-15.603373 10.114358-24.431436 10.114358z m0 0", "p-id", "9117"], ["d", "M602.106204 488.047472H290.730501c-16.679891 0-30.133298-13.453407-30.133298-30.135344 0-16.685008 13.453407-30.139437 30.133298-30.139438h311.265186c16.687054 0 30.140461 13.453407 30.140461 30.139438 0 16.681938-13.45443 30.135344-30.029944 30.135344z m0 0", "p-id", "9118"], ["title", "\u5411\u5DE6\u65CB\u8F6C", 1, "toolsBtn", "rotateLeft", 3, "click"], ["t", "1588941359139", "viewBox", "0 0 1024 1024", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", "p-id", "9333", "width", "20", "height", "20", 1, "icon"], ["d", "M296.78775165 822.42764344a29.24918237 29.24918237 0 0 0 11.88822868 9.74972721 366.76451243 366.76451243 0 0 0 423.03239697-29.18019793c162.18119742-127.48228586 196.37422746-360.55595902 75.100495-518.98903088S456.301571 100.94781045 292.07385008 230.29266234a90.07000608 90.07000608 0 0 0-13.17592873 10.96844358c-12.57806845-15.8433068-23.52351697-30.99677536-33.82511584-43.8047899-12.8769982-16.97004443-22.07485451-30.2149576-25.70800781-33.96308395a18.16576575 18.16576575 0 0 0-14.57860182-10.00266835 19.33849276 19.33849276 0 0 0-21.70694032 16.39517847l0.3679142 1.14973193-1.33368944 20.67218142-19.49945517 135.66837756-3.1502653 18.78662109-2.71336744 16.09624873a19.82137999 19.82137999 0 0 0 3.05828656 14.14170319 16.09624795 16.09624795 0 0 0 12.44010034 7.08234912l15.86630188 2.02352844 18.62565868 2.32245896 134.08174776 13.79678406 19.75239556 1.9085554 1.14973193-0.3679142a21.08608498 21.08608498 0 0 0 21.3850155-17.63688915 18.39571183 18.39571183 0 0 0-6.43849871-16.71710329c-2.52941073-4.1620299-12.83100961-16.97004443-25.68501352-33.94008965-8.82994211-12.09518046-19.49945518-26.00693834-30.19196253-39.96468481 3.90908875-3.90908875 9.26683997-6.99037039 13.19892302-10.92245345 132.33415478-104.39566674 320.33833383-85.49407262 418.52544794 43.22992316a306.51855469 306.51855469 0 0 1-61.25772156 422.98640759 298.07952184 298.07952184 0 0 1-349.05863961 20.94811763 33.94008889 33.94008889 0 0 0-38.49302728 3.35721709 33.71014281 33.71014281 0 0 0-6.94438178 47.92083044z", "fill", "#333333", "p-id", "9334"], ["title", "\u5411\u53F3\u65CB\u8F6C", 1, "toolsBtn", "rotateRight", 3, "click"], ["t", "1588941386678", "viewBox", "0 0 1024 1024", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", "p-id", "9485", "width", "20", "height", "20", 1, "icon"], ["d", "M727.29746405 822.42764344a29.24918237 29.24918237 0 0 1-11.91122374 9.74972721 366.76451243 366.76451243 0 0 1-422.98640759-29.20319301C130.2416296 675.49189255 96.00261019 442.44121292 217.27634341 284.03113615s350.57628573-183.12931506 514.84999526-53.80745826a90.07000608 90.07000608 0 0 1 13.15293443 10.96844359c12.57806845-15.8203125 23.52351697-30.97378029 33.84811014-43.78179482 12.83100961-16.97004443 22.02886514-30.2149576 25.70800782-33.96308396a18.16576575 18.16576575 0 0 1 14.55560752-10.04865772 19.33849276 19.33849276 0 0 1 21.70694031 16.39517846l-0.34491988 1.14973194 1.33368941 20.69517649 19.36148706 135.76035631 3.17326038 18.7866211 2.71336744 16.09624793a19.82137999 19.82137999 0 0 1-3.05828733 14.14170397 16.09624795 16.09624795 0 0 1-12.44010035 7.05935405l-15.88929616 2.0465235-18.57966932 2.29946389-134.10474207 13.79678407-19.75239632 1.9315497-1.14973194-0.3909085a21.08608498 21.08608498 0 0 1-21.38501549-17.61389485 18.39571183 18.39571183 0 0 1 6.43849949-16.7171033c2.50641566-4.1850242 12.83100961-16.97004443 25.68501351-33.94008887 8.82994211-12.11817552 19.49945518-26.02993264 30.19196255-39.96468481-3.90908875-3.90908875-9.26683997-7.01336545-13.19892381-10.94544852-132.33415478-104.39566674-320.33833383-85.49407262-418.52544717 43.22992316A306.51855469 306.51855469 0 0 0 332.87039983 750.45441943a298.07952184 298.07952184 0 0 0 348.98965516 20.74116586 33.94008889 33.94008889 0 0 1 38.51602234 3.38021216 33.71014281 33.71014281 0 0 1 6.9443818 47.92082966z", "fill", "#333333", "p-id", "9486"], ["title", "\u5782\u76F4\u7FFB\u8F6C", 1, "toolsBtn", "flipVertical", 3, "click"], ["t", "1588941411559", "viewBox", "0 0 1024 1024", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", "p-id", "9669", "width", "20", "height", "20", 1, "icon"], ["d", "M494.03 74.72l-109.59 144.09c-12.48 16.41-5.82 29.97 14.79000001 30.09L482 249.47 482 774.53l-82.77 0.54c-20.64 0.15-27.27 13.68-14.79 30.09l109.59 144.09c12.48 16.41 32.43 16.05 44.31000001-0.81l101.81999999-144.51c11.88-16.86 4.74-30.54-15.9-30.39L542.00000001 774.14l-1e-8-524.25 82.23 0.54c20.64 0.15 27.78-13.53 15.9-30.39l-101.82-144.51c-11.88-16.86-31.8-17.25-44.28-0.81z", "p-id", "9670"], ["title", "\u6C34\u5E73\u7FFB\u8F6C", 1, "toolsBtn", "flipHorizontal", 3, "click"], ["t", "1588941431636", "viewBox", "0 0 1024 1024", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", "p-id", "9885", "width", "20", "height", "20", 1, "icon"], ["d", "M978.432 492.832l-153.696-116.896c-17.504-13.312-31.968-6.208-32.096 15.776L792.032 480H231.968l-0.608-88.288c-0.16-22.016-14.592-29.088-32.096-15.776l-153.696 116.896c-17.504 13.312-17.12 34.592 0.864 47.264l154.144 108.608c17.984 12.672 32.576 5.056 32.416-16.96L232.384 544h559.2l-0.576 87.712c-0.16 22.016 14.432 29.632 32.416 16.96l154.144-108.608c17.984-12.672 18.4-33.92 0.864-47.232z", "p-id", "9886"], ["title", "\u91CD\u7F6E", 1, "toolsBtn", "imageReset", 3, "click"], ["t", "1588941445066", "viewBox", "0 0 1024 1024", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", "p-id", "10072", "width", "20", "height", "20", 1, "icon"], ["d", "M666.1 731.4c-48.6 35-105.6 52.5-163.8 51.8-7.7-0.1-15.3-0.7-22.9-1.3-3.1-0.3-6.1-0.8-9.2-1.3-6-0.8-11.9-1.5-17.7-2.8-3.6-0.6-7.2-1.7-10.6-2.5-5.7-1.3-11.4-2.6-16.9-4.3-2.6-1-5.1-1.9-7.8-3-6.5-2.1-12.9-4.4-19-7-1.4-0.6-2.8-1.2-4.1-1.7-7.2-3.4-14.4-6.9-21.3-10.6-0.3-0.2-0.6-0.3-0.9-0.5-23.5-13.3-44.9-29.6-63.7-49-0.3-0.3-0.6-0.7-0.9-1-5.8-6-11.4-12.2-16.7-18.9-1.1-1.4-2.1-2.7-3.3-4.3-38.2-49.1-61.2-111.3-61.2-178.8h73.6L182 314.7 64.2 496.1h73.5c0 79.4 24.2 153.1 65.2 214.2 0.5 0.9 0.8 1.9 1.4 2.6 4.2 6.3 9 12 13.5 17.8 1.8 2.1 3.3 4.3 5.1 6.7 6.6 8.2 13.9 16.1 21.1 23.8 0.8 0.8 1.4 1.4 2 2.1 24.7 25.4 52.4 46.6 82.7 63.8 0.8 0.5 1.5 0.8 2.4 1.4 8.7 4.8 17.7 9.3 26.7 13.3 2.3 1 4.5 2.1 6.7 3 7.8 3.4 15.8 6.2 23.8 9.1 3.8 1.4 7.5 2.6 11.4 3.9 7 2.1 14.2 3.9 21.5 5.6 4.8 1.2 9.5 2.4 14.4 3.4 2 0.5 3.9 1.2 5.9 1.4 6.9 1.3 13.7 1.9 20.5 2.8 2.5 0.5 5 0.9 7.4 1.2 12.3 1.2 24.5 2 36.8 2 74.7 0 147.7-23.5 210.3-68.5 19.9-14.4 24.8-42.7 10.9-63.1-13.9-20.8-41.3-25.7-61.3-11.2z m219.5-206.6c0-79.3-23.9-152.9-64.7-213.6-0.6-1-1-2.1-1.5-3-5.3-7.5-10.7-14.4-16.2-21.5-0.6-0.8-1.3-1.7-1.8-2.6-37.5-46.4-84.4-82.4-137.4-106-1.6-0.6-2.9-1.4-4.5-2-8.5-3.6-17.2-6.7-26-9.8-3-1-6.2-2.2-9.3-3.2-7.7-2.4-15.3-4.3-23.1-6.2-4.3-1-8.7-2.1-13-3-2.1-0.4-4.1-1-6.3-1.5-5.8-1-11.5-1.5-17.4-2.3-4.1-0.5-8-1.1-12-1.5-9.8-1-19.5-1.4-29.2-1.5-1.8 0-3.5-0.3-5.3-0.3-0.3 0-0.6 0.1-0.9 0.1-74.6 0.1-147.5 23.2-210 68.3-19.9 14.3-24.8 42.6-10.8 63.2 13.9 20.4 41.5 25.5 61.5 11 48.2-34.7 104.6-52.3 162.3-51.8 8.3 0.1 16.6 0.5 24.6 1.3 2.5 0.2 4.9 0.6 7.4 1 6.6 0.8 13.2 1.7 19.8 3.2 2.8 0.5 5.7 1.3 8.4 1.9 6.5 1.5 12.7 3 18.9 5 2.1 0.6 4 1.3 5.8 2.1 7.2 2.4 14.2 4.9 21 7.9 0.8 0.2 1.4 0.8 2.1 1 41.2 18.2 77.3 46.1 105.5 81.2 0.1 0.1 0.2 0.4 0.4 0.6 39.6 49.6 63.5 113 63.5 182h-73.7l117.9 181.5 117.6-181.5h-73.6z", "p-id", "10073"], [1, "smallImageViewer"], ["title", "\u5411\u5DE6\u67E5\u770B", 1, "toImg", "previousImgs", 3, "click"], ["t", "1588946161601", "viewBox", "0 0 1024 1024", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", "p-id", "4499", "width", "16", "height", "16", 1, "icon"], ["d", "M854.656 182.656a32 32 0 1 0-45.312-45.312l-352 352a32 32 0 0 0 0 45.312l352 352a32 32 0 0 0 45.312-45.312L525.248 512l329.408-329.344z m-320 0a32 32 0 1 0-45.312-45.312l-352 352a32 32 0 0 0 0 45.312l352 352a32 32 0 0 0 45.312-45.312L205.248 512l329.408-329.344z", "fill", "#ffffff", "p-id", "4500"], ["title", "\u5411\u53F3\u67E5\u770B", 1, "toImg", "nextImgs", 3, "click"], ["t", "1588946137834", "viewBox", "0 0 1024 1024", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", "p-id", "4373", "width", "16", "height", "16", 1, "icon"], ["d", "M556.8 535.893L170.667 149.76c-13.227-13.227-13.227-34.987 0-48.213 13.226-13.227 34.986-13.227 48.213 0L605.013 487.68c13.227 13.227 13.227 34.987 0 48.213-13.226 13.227-34.986 13.227-48.213 0z", "fill", "#ffffff", "p-id", "4374"], ["d", "M170.667 873.813L556.8 487.68c13.227-13.227 34.987-13.227 48.213 0 13.227 13.227 13.227 34.987 0 48.213L218.88 922.027c-13.227 13.226-34.987 13.226-48.213 0a33.493 33.493 0 0 1 0-48.214zM825.173 536.32L439.04 150.187c-13.227-13.227-13.227-34.987 0-48.214 13.227-13.226 34.987-13.226 48.213 0l386.134 386.134c13.226 13.226 13.226 34.986 0 48.213a33.493 33.493 0 0 1-48.214 0z", "fill", "#ffffff", "p-id", "4375"], ["d", "M439.04 874.24l386.133-386.133c13.227-13.227 34.987-13.227 48.214 0 13.226 13.226 13.226 34.986 0 48.213L487.253 922.453c-13.226 13.227-34.986 13.227-48.213 0-13.227-13.226-13.227-34.56 0-48.213z", "fill", "#ffffff", "p-id", "4376"], [1, "moreImg"], ["moreImg", ""], [3, "src", "click", 4, "ngFor", "ngForOf"], [3, "src", "click"]], template: function ImageViewerComponent_Template(rf, ctx) { if (rf & 1) {
        const _r13 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "div", 0, 1);
        i0.ɵɵelementStart(2, "div", 2, 3);
        i0.ɵɵlistener("dragstart", function ImageViewerComponent_Template_div_dragstart_2_listener($event) { return ctx.cancleCurrentImageDrag($event); })("mousedown", function ImageViewerComponent_Template_div_mousedown_2_listener($event) { return ctx.currentImageDragStart($event); })("mousemove", function ImageViewerComponent_Template_div_mousemove_2_listener($event) { return ctx.currentImageDrag($event); })("mouseup", function ImageViewerComponent_Template_div_mouseup_2_listener($event) { return ctx.currentImageDragEnd($event); });
        i0.ɵɵelementStart(4, "img", 4, 5);
        i0.ɵɵlistener("load", function ImageViewerComponent_Template_img_load_4_listener() { i0.ɵɵrestoreView(_r13); const _r2 = i0.ɵɵreference(5); const _r1 = i0.ɵɵreference(3); return ctx.currentImageLoaded(_r2, _r1); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "div", 6);
        i0.ɵɵlistener("click", function ImageViewerComponent_Template_div_click_6_listener() { return ctx.preOrNextImg("pre"); });
        i0.ɵɵelementStart(7, "span", 7);
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(8, "svg", 8);
        i0.ɵɵelement(9, "path", 9);
        i0.ɵɵelement(10, "path", 10);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(11, "div", 11);
        i0.ɵɵlistener("click", function ImageViewerComponent_Template_div_click_11_listener() { return ctx.preOrNextImg("next"); });
        i0.ɵɵelementStart(12, "span", 12);
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(13, "svg", 13);
        i0.ɵɵelement(14, "path", 14);
        i0.ɵɵelement(15, "path", 15);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(16, ImageViewerComponent_div_16_Template, 12, 3, "div", 16);
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(17, "div", 17);
        i0.ɵɵelementStart(18, "button", 18);
        i0.ɵɵlistener("click", function ImageViewerComponent_Template_button_click_18_listener() { return ctx.imageZoomin(); });
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(19, "svg", 19);
        i0.ɵɵelement(20, "path", 20);
        i0.ɵɵelement(21, "path", 21);
        i0.ɵɵelement(22, "path", 22);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(23, "button", 23);
        i0.ɵɵlistener("click", function ImageViewerComponent_Template_button_click_23_listener() { return ctx.imageZoomout(); });
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(24, "svg", 24);
        i0.ɵɵelement(25, "path", 25);
        i0.ɵɵelement(26, "path", 26);
        i0.ɵɵelement(27, "path", 27);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(28, "button", 28);
        i0.ɵɵlistener("click", function ImageViewerComponent_Template_button_click_28_listener() { return ctx.rotateLeft(); });
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(29, "svg", 29);
        i0.ɵɵelement(30, "path", 30);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(31, "button", 31);
        i0.ɵɵlistener("click", function ImageViewerComponent_Template_button_click_31_listener() { return ctx.rotateRight(); });
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(32, "svg", 32);
        i0.ɵɵelement(33, "path", 33);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(34, "button", 34);
        i0.ɵɵlistener("click", function ImageViewerComponent_Template_button_click_34_listener() { return ctx.flipVertical(); });
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(35, "svg", 35);
        i0.ɵɵelement(36, "path", 36);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(37, "button", 37);
        i0.ɵɵlistener("click", function ImageViewerComponent_Template_button_click_37_listener() { return ctx.flipHorizontal(); });
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(38, "svg", 38);
        i0.ɵɵelement(39, "path", 39);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵnamespaceHTML();
        i0.ɵɵelementStart(40, "button", 40);
        i0.ɵɵlistener("click", function ImageViewerComponent_Template_button_click_40_listener() { return ctx.currentImgReset(); });
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(41, "svg", 41);
        i0.ɵɵelement(42, "path", 42);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(1);
        i0.ɵɵadvance(2);
        i0.ɵɵstyleProp("width", _r0.style.width)("height", ctx.imageViewHeight);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("src", ctx.currentImageUrl, i0.ɵɵsanitizeUrl);
        i0.ɵɵadvance(12);
        i0.ɵɵproperty("ngIf", ctx.imageSources.length > 1);
    } }, directives: [i3.NgIf, i3.NgForOf], styles: [".imageViewerContainer[_ngcontent-%COMP%]{margin:0;padding:0;height:100%;min-width:400px;min-height:400px;background-color:#3e3e3e}.imageViewerContainer[_ngcontent-%COMP%]   .imageViewer[_ngcontent-%COMP%]{position:relative;overflow:hidden}.imageViewerContainer[_ngcontent-%COMP%]   .imageViewer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:absolute;border:0;padding:0;margin:0;width:auto;height:98%;visibility:visible;transition:all .5s ease-out}.imageViewerContainer[_ngcontent-%COMP%]   .imageViewer[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{position:absolute;width:80px;height:100%;background:rgba(112,109,109,0);transition:all .5s}.imageViewerContainer[_ngcontent-%COMP%]   .imageViewer[_ngcontent-%COMP%]   div.previousImg[_ngcontent-%COMP%]{top:0;left:0}.imageViewerContainer[_ngcontent-%COMP%]   .imageViewer[_ngcontent-%COMP%]   div.nextImg[_ngcontent-%COMP%]{top:0;right:0}.imageViewerContainer[_ngcontent-%COMP%]   .imageViewer[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:hover{background:rgba(112,109,109,.5)}.imageViewerContainer[_ngcontent-%COMP%]   .imageViewer[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]{opacity:1;color:#f5f5f5}.imageViewerContainer[_ngcontent-%COMP%]   .imageViewer[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:absolute;font-size:60px;width:1em;height:1em;text-align:center;top:50%;margin-top:-30px;left:50%;margin-left:-30px;opacity:.2;color:#797979;transition:all .5s;cursor:pointer}.imageViewerContainer[_ngcontent-%COMP%]   .smallImageViewer[_ngcontent-%COMP%]{border-top:2px solid #888484;border-bottom:2px solid #888484;margin-top:2px;height:50px;position:relative;overflow:hidden;white-space:nowrap}.imageViewerContainer[_ngcontent-%COMP%]   .smallImageViewer[_ngcontent-%COMP%]   .moreImg[_ngcontent-%COMP%]{height:100%;position:absolute;z-index:1;top:0;transition:left .6s ease-out}.imageViewerContainer[_ngcontent-%COMP%]   .smallImageViewer[_ngcontent-%COMP%]   .moreImg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:relative;cursor:pointer;margin:0 2px 0 0;height:100%;transform:scale(1);transition:transform .5s;z-index:1}.imageViewerContainer[_ngcontent-%COMP%]   .smallImageViewer[_ngcontent-%COMP%]   .moreImg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover{transform:scale(1.5);z-index:2}.imageViewerContainer[_ngcontent-%COMP%]   .smallImageViewer[_ngcontent-%COMP%]   .toImg[_ngcontent-%COMP%]{height:100%;width:25px;color:#fff;text-align:center;line-height:50px;font-weight:700;opacity:.8;cursor:pointer;overflow:hidden;background-color:#3e3e3e;position:absolute;z-index:9;top:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:opacity .5s}.imageViewerContainer[_ngcontent-%COMP%]   .smallImageViewer[_ngcontent-%COMP%]   .toImg[_ngcontent-%COMP%]:hover{opacity:1}.imageViewerContainer[_ngcontent-%COMP%]   .smallImageViewer[_ngcontent-%COMP%]   .previousImgs[_ngcontent-%COMP%]{left:0}.imageViewerContainer[_ngcontent-%COMP%]   .smallImageViewer[_ngcontent-%COMP%]   .nextImgs[_ngcontent-%COMP%]{right:0}.imageViewerContainer[_ngcontent-%COMP%]   .imageTools[_ngcontent-%COMP%]{text-align:center;height:46px;line-height:46px}.imageViewerContainer[_ngcontent-%COMP%]   .imageTools[_ngcontent-%COMP%]   .toolsBtn[_ngcontent-%COMP%]{margin:0 5px;padding:4px 8px;color:#3e3e3e;font-size:16px;font-weight:400;line-height:1.5;display:inline-block;text-align:center;white-space:nowrap;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-image:none;background-color:#fff;border:1px solid #ccc;border-radius:4px;cursor:pointer;transition:all .3s}.imageViewerContainer[_ngcontent-%COMP%]   .imageTools[_ngcontent-%COMP%]   .toolsBtn[_ngcontent-%COMP%]:hover{color:#fff;background-color:#3e3e3e;border-color:#888484}"] });
ImageViewerComponent = __decorate([
    ComponentRegister({
        uri: "image-viewer",
        path: "components/shared/ngxviewer/image-viewer"
    })
], ImageViewerComponent);
export { ImageViewerComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ImageViewerComponent, [{
        type: Component,
        args: [{
                selector: "image-viewer",
                templateUrl: "./image-viewer.component.html",
                styleUrls: ["./image-viewer.component.scss"],
            }]
    }], function () { return [{ type: i1.DomSanitizer }, { type: i2.EventEmitterService }]; }, { imageViewerContainer: [{
            type: ViewChild,
            args: ["imageViewerContainer"]
        }], showImg: [{
            type: ViewChild,
            args: ["showImg"]
        }], width: [{
            type: Input
        }], height: [{
            type: Input
        }], source: [{
            type: Input
        }], first: [{
            type: Input
        }], ready: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2Utdmlld2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Vwc2dpcy9jb21wb25lbnRzL3NoYXJlZC9uZ3h2aWV3ZXIvaW1hZ2Utdmlld2VyL2ltYWdlLXZpZXdlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9lcHNnaXMvY29tcG9uZW50cy9zaGFyZWQvbmd4dmlld2VyL2ltYWdlLXZpZXdlci9pbWFnZS12aWV3ZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSTFGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9EQUFvRCxDQUFDOzs7Ozs7Ozs7SUN5QnBGLCtCQUFrSDtJQUExQyxpUkFBeUM7SUFBakgsaUJBQWtIOzs7SUFBekQsaURBQWM7Ozs7O0lBTnpFLG9CQUE2RDtJQUE3RCwrQkFBNkQ7SUFDNUQsK0JBQXlGO0lBQTVDLGlRQUEyQztJQUN2RixtQkFBZ0o7SUFBaEosK0JBQWdKO0lBQUEsMkJBQW1UO0lBQUEsaUJBQU07SUFBQyxpQkFBTTtJQUNqZCxvQkFBaUY7SUFBakYsK0JBQWlGO0lBQXhDLDZQQUF1QztJQUMvRSxtQkFBZ0o7SUFBaEosK0JBQWdKO0lBQUEsMkJBQStPO0lBQUEsMkJBQW1hO0lBQUEsMkJBQWdQO0lBQUEsaUJBQU07SUFBQyxpQkFBTTtJQUNoaUMsb0JBQW9FO0lBQXBFLG1DQUFvRTtJQUNuRSwrRUFBa0g7SUFDbkgsaUJBQU07SUFDUCxpQkFBTTs7O0lBSHlCLGVBQXFDO0lBQXJDLHFEQUFxQztJQUMxQyxlQUFpQjtJQUFqQiw2Q0FBaUI7O0lEZi9CLG9CQUFvQixTQUFwQixvQkFBb0I7SUE2Qi9CLFlBQ1MsWUFBMEIs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Z0o7UUFBaEosZ0NBQWdKO1FBQUEsNEJBQXFhO1FBQUEsaUJBQU07UUFDNWpCLGlCQUFTO1FBQ1Qsb0JBQTJFO1FBQTNFLG1DQUEyRTtRQUE1QixrR0FBUyxxQkFBaUIsSUFBQztRQUN6RSxtQkFBaUo7UUFBakosZ0NBQWlKO1FBQUEsNEJBQW95RDtRQUFBLGlCQUFNO1FBQzU3RCxpQkFBUztRQUNWLGlCQUFNO1FBQ1AsaUJBQU07OztRQWpESCxlQUFnRDtRQUFoRCx3Q0FBZ0QsK0JBQUE7UUFHNUMsZUFBdUI7UUFBdkIsMkRBQXVCO1FBY3ZCLGdCQUE0QjtRQUE1QixrREFBNEI7O0FEVHRCLG9CQUFvQjtJQVRoQyxpQkFBaUIsQ0FBQztRQUNqQixHQUFHLEVBQUUsY0FBYztRQUNuQixJQUFJLEVBQUUsMENBQTBDO0tBQ2pELENBQUM7R0FNVyxvQkFBb0IsQ0FraUJoQztTQWxpQlksb0JBQW9CO3VGQUFwQixvQkFBb0I7Y0FMaEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2dCQUN4QixXQUFXLEVBQUUsK0JBQStCO2dCQUM1QyxTQUFTLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQzthQUM3QztpR0FHQyxvQkFBb0I7a0JBRG5CLFNBQVM7bUJBQUMsc0JBQXNCO1lBRVgsT0FBTztrQkFBNUIsU0FBUzttQkFBQyxTQUFTO1lBRVgsS0FBSztrQkFBYixLQUFLO1lBQ0csTUFBTTtrQkFBZCxLQUFLO1lBQ0csTUFBTTtrQkFBZCxLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLO1lBQ0ksS0FBSztrQkFBZCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIsIFNhZmVSZXNvdXJjZVVybCB9IGZyb20gXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCI7XG5pbXBvcnQgeyBFdmVudEVtaXR0ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvZXZlbnQtZW1pdHRlci5zZXJ2aWNlJztcblxuaW1wb3J0IHsgQ29tcG9uZW50UmVnaXN0ZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9kZWNvcmF0b3IvY29tcG9uZW50LXJlZ2lzdGVyLmRlY29yYXRvcic7XG5AQ29tcG9uZW50UmVnaXN0ZXIoe1xuICB1cmk6IFwiaW1hZ2Utdmlld2VyXCIsXG4gIHBhdGg6IFwiY29tcG9uZW50cy9zaGFyZWQvbmd4dmlld2VyL2ltYWdlLXZpZXdlclwiXG59KVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImltYWdlLXZpZXdlclwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL2ltYWdlLXZpZXdlci5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vaW1hZ2Utdmlld2VyLmNvbXBvbmVudC5zY3NzXCJdLFxufSlcbmV4cG9ydCBjbGFzcyBJbWFnZVZpZXdlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBWaWV3Q2hpbGQoXCJpbWFnZVZpZXdlckNvbnRhaW5lclwiKVxuICBpbWFnZVZpZXdlckNvbnRhaW5lcjogYW55O1xuICBAVmlld0NoaWxkKFwic2hvd0ltZ1wiKSBzaG93SW1nOiBhbnk7XG5cbiAgQElucHV0KCkgd2lkdGg6IG51bWJlciA9IDA7XG4gIEBJbnB1dCgpIGhlaWdodDogbnVtYmVyID0gMDtcbiAgQElucHV0KCkgc291cmNlOiBzdHJpbmdbXTtcbiAgQElucHV0KCkgZmlyc3Q6IG51bWJlciA9IDA7XG4gIEBPdXRwdXQoKSByZWFkeTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oZmFsc2UpO1xuXG4gIHByaXZhdGUgY3VycmVudEltYWdlOiBIVE1MSW1hZ2VFbGVtZW50O1xuICBpbWFnZVNvdXJjZXM6IFNhZmVSZXNvdXJjZVVybFtdID0gW107XG4gIGN1cnJlbnRJbWFnZVVybDogU2FmZVJlc291cmNlVXJsOyAvLyDlvZPliY3kuLvlm77ot6/lvoRcbiAgcHJpdmF0ZSByYWRpYW46IG51bWJlciA9IDA7IC8vIOaXi+i9rOWPmOaNouWPguaVsFxuICBwcml2YXRlIHg6IG51bWJlciA9IDE7IC8vIOawtOW5s+WPmOaNouWPguaVsFxuICBwcml2YXRlIHk6IG51bWJlciA9IDE7IC8vIOWeguebtOWPmOaNouWPguaVsFxuICBwcml2YXRlIHpvb206IG51bWJlciA9IDAuMTsgLy8g57yp5pS+5q+U546HXG4gIHByaXZhdGUgaW5pdFRvcDogbnVtYmVyOyAvLyDlm77niYfliJ3lp4tjc3PnmoR0b3DlgLxcbiAgcHJpdmF0ZSBpbml0TGVmdDogbnVtYmVyOyAvLyDlm77niYfliJ3lp4tjc3PnmoRsZWZ05YC8XG4gIG1vcmVJbWdJbml0TGVmdDogbnVtYmVyID0gMDsgLy8g5Zu+54mH5YiX6KGo5a655Zmo5Yid5aeLY3Nz55qEbGVmdOWAvFxuICBwcml2YXRlIGN1cnJlbnRJbWFnZVRlbXBUb3A6IG51bWJlciA9IDA7XG4gIHByaXZhdGUgY3VycmVudEltYWdlVGVtcExlZnQ6IG51bWJlciA9IDA7XG4gIHByaXZhdGUgZHJhZ1N0YXJ0Q2xpZW50WDogbnVtYmVyID0gMDtcbiAgcHJpdmF0ZSBkcmFnU3RhcnRDbGllbnRZOiBudW1iZXIgPSAwO1xuICBwcml2YXRlIGlzU3RhcnRNb3ZlOiBib29sZWFuID0gZmFsc2U7XG4gIGltYWdlVmlld0hlaWdodDogc3RyaW5nID0gXCI0MDBweFwiO1xuICBtYWluV2luZG93SGVpZ2h0OiBudW1iZXIgPSAwO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBkb21TYW5pdGl6ZXI6IERvbVNhbml0aXplcixcbiAgICBwcml2YXRlIGV2ZW50U2VydmljZTogRXZlbnRFbWl0dGVyU2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5jb252ZXJ0VXJsKHRoaXMuc291cmNlKTtcbiAgfVxuICBwcml2YXRlIGNvbnZlcnRVcmwoc291cmNlczogc3RyaW5nW10pIHtcbiAgICB0aGlzLmltYWdlU291cmNlcy5zcGxpY2UoMCk7XG4gICAgaWYgKHNvdXJjZXMgJiYgc291cmNlcy5sZW5ndGggPiAwKSB7XG4gICAgICBzb3VyY2VzLmZvckVhY2goKGltZ1VybDogc3RyaW5nKSA9PiB7XG4gICAgICAgIHRoaXMuaW1hZ2VTb3VyY2VzLnB1c2goXG4gICAgICAgICAgdGhpcy5kb21TYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFJlc291cmNlVXJsKGltZ1VybClcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgICAgaWYgKHRoaXMuZmlyc3QgPT0gbnVsbCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRJbWFnZVVybCA9IHRoaXMuaW1hZ2VTb3VyY2VzWzBdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jdXJyZW50SW1hZ2VVcmwgPSB0aGlzLmltYWdlU291cmNlc1t0aGlzLmZpcnN0XTtcbiAgICAgIH1cbiAgICAgIHRoaXMucmVhZHkuZW1pdChcImltYWdlIHZpZXdlciBpbml0aWFsaXplIVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgXCLmsqHmnInlm77niYfmupDvvIzor7fkvKDlhaXvvIFcIjtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSBzb3VyY2VzXG4gICAqL1xuICBjaGFuZ2VJbWFnZVNvdXJjZXMoc291cmNlczogc3RyaW5nW10pIHtcbiAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZXM7XG4gICAgdGhpcy5jb252ZXJ0VXJsKHRoaXMuc291cmNlKTtcbiAgfVxuICAvKipcbiAgICog5Li75Zu+5Yqg6L295a6M5oiQXG4gICAqIEBwYXJhbSBpbWdcbiAgICogQHBhcmFtIHZpZXdlclxuICAgKi9cbiAgY3VycmVudEltYWdlTG9hZGVkKGltZzogSFRNTEltYWdlRWxlbWVudCwgdmlld2VyOiBIVE1MRGl2RWxlbWVudCkge1xuICAgIHRoaXMuY3VycmVudEltYWdlID0gaW1nO1xuICAgIHRoaXMuaW5pdFRvcCA9ICh2aWV3ZXIuY2xpZW50SGVpZ2h0IC0gaW1nLm9mZnNldEhlaWdodCkgLyAyO1xuICAgIHRoaXMuaW5pdExlZnQgPSAodmlld2VyLmNsaWVudFdpZHRoIC0gaW1nLm9mZnNldFdpZHRoKSAvIDI7XG4gICAgaWYgKHRoaXMuY3VycmVudEltYWdlKSB7XG4gICAgICB0aGlzLmN1cnJlbnRJbWFnZS5zdHlsZS50b3AgPSB0aGlzLmluaXRUb3AgKyBcInB4XCI7XG4gICAgICB0aGlzLmN1cnJlbnRJbWFnZS5zdHlsZS5sZWZ0ID0gdGhpcy5pbml0TGVmdCArIFwicHhcIjtcbiAgICB9XG4gICAgdGhpcy5tYWluV2luZG93SGVpZ2h0ID0gdGhpcy5nZXRNYWluV2luZG93SGVpZ2h0KCk7XG4gICAgaWYgKHRoaXMuaW1hZ2VTb3VyY2VzLmxlbmd0aCA+IDEpIHtcbiAgICAgIHRoaXMuaW1hZ2VWaWV3SGVpZ2h0ID0gdGhpcy5tYWluV2luZG93SGVpZ2h0IC0gOTYgKyBcInB4XCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW1hZ2VWaWV3SGVpZ2h0ID0gdGhpcy5tYWluV2luZG93SGVpZ2h0IC0gNDYgKyBcInB4XCI7XG4gICAgfVxuICAgIC8vIHZpZXdlcuazqOWGjOa7mui9ruS6i+S7tiwg54Gr54uQ5rWP6KeI5Zmo5rua6L2u5LqL5Lu25Li6RE9NTW91c2VTY3JvbGzvvIzlhbblroPmtY/op4jlmajkuLptb3VzZXdoZWVsXG4gICAgaWYgKHRoaXMuY2hlY2tCcm93c2VyKCkuZmlyZWZveCkge1xuICAgICAgdmlld2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJET01Nb3VzZVNjcm9sbFwiLCAoZTogYW55KSA9PiB7XG4gICAgICAgIHRoaXMuY3VycmVudEltYWdlWm9vbUJ5V2hlZWwoZSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmlld2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXdoZWVsXCIsIChlOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5jdXJyZW50SW1hZ2Vab29tQnlXaGVlbChlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByZU9yTmV4dEltZyh0eXBlOiBzdHJpbmcpIHtcbiAgICBsZXQgaW5kZXg6IG51bWJlciA9IHRoaXMuaW1hZ2VTb3VyY2VzLmluZGV4T2YodGhpcy5jdXJyZW50SW1hZ2VVcmwpO1xuICAgIGlmICh0eXBlID09IFwicHJlXCIpIHtcbiAgICAgIGlmIChpbmRleCAhPSAwKSB7XG4gICAgICAgIGluZGV4LS07XG4gICAgICAgIHRoaXMuY3VycmVudEltYWdlVXJsID0gdGhpcy5pbWFnZVNvdXJjZXNbaW5kZXhdO1xuICAgICAgICB0aGlzLmV2ZW50U2VydmljZS5yc3MuZW1pdCh0aGlzLmV2ZW50U2VydmljZS5faW1hZ2VWaWV3ZXJJbmRleENoYW5nZWQsIHtcbiAgICAgICAgICBpbmRleDogaW5kZXgsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodHlwZSA9PSBcIm5leHRcIikge1xuICAgICAgaWYgKGluZGV4ICE9IHRoaXMuaW1hZ2VTb3VyY2VzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgaW5kZXgrKztcbiAgICAgICAgdGhpcy5jdXJyZW50SW1hZ2VVcmwgPSB0aGlzLmltYWdlU291cmNlc1tpbmRleF07XG4gICAgICAgIHRoaXMuZXZlbnRTZXJ2aWNlLnJzcy5lbWl0KHRoaXMuZXZlbnRTZXJ2aWNlLl9pbWFnZVZpZXdlckluZGV4Q2hhbmdlZCwge1xuICAgICAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuY3VycmVudEltZ1Jlc2V0KCk7XG4gIH1cblxuICAvKipcbiAgICog5qC55o2u5Y+Y5o2i5Y+C5pWw5pS55Y+Y5Li75Zu+XG4gICAqL1xuICBjaGFuZ2VDdXJyZW50SW1nKCkge1xuICAgIGxldCBtYXRyaXg6IGFueSA9IHRoaXMuZ2V0TWF0cml4KHRoaXMucmFkaWFuLCB0aGlzLngsIHRoaXMueSk7XG4gICAgaWYgKHRoaXMuY3VycmVudEltYWdlKSB7XG4gICAgICB0aGlzLmN1cnJlbnRJbWFnZS5zdHlsZS50cmFuc2Zvcm0gPVxuICAgICAgICBcIm1hdHJpeChcIiArXG4gICAgICAgIG1hdHJpeC5NMTEudG9GaXhlZCgxNikgK1xuICAgICAgICBcIixcIiArXG4gICAgICAgIG1hdHJpeC5NMjEudG9GaXhlZCgxNikgK1xuICAgICAgICBcIixcIiArXG4gICAgICAgIG1hdHJpeC5NMTIudG9GaXhlZCgxNikgK1xuICAgICAgICBcIixcIiArXG4gICAgICAgIG1hdHJpeC5NMjIudG9GaXhlZCgxNikgK1xuICAgICAgICBcIiwgMCwgMClcIjtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICog6I635Y+W5Y+Y5o2i5Y+C5pWw5Ye95pWwXG4gICAqICByYWRpYW5cbiAgICogIHhcbiAgICogIHlcbiAgICogIHt7TTExOiBudW1iZXIsIE0xMjogbnVtYmVyLCBNMjE6IG51bWJlciwgTTIyOiBudW1iZXJ9fVxuICAgKi9cbiAgZ2V0TWF0cml4KHJhZGlhbjogbnVtYmVyLCB4OiBudW1iZXIsIHk6IG51bWJlcik6IGFueSB7XG4gICAgbGV0IENvcyA9IE1hdGguY29zKHJhZGlhbiksXG4gICAgICBTaW4gPSBNYXRoLnNpbihyYWRpYW4pO1xuICAgIHJldHVybiB7XG4gICAgICBNMTE6IENvcyAqIHgsXG4gICAgICBNMTI6IC1TaW4gKiB5LFxuICAgICAgTTIxOiBTaW4gKiB4LFxuICAgICAgTTIyOiBDb3MgKiB5LFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICog6K6+572u5Z6C55u057+76L2s5pyJ5YWz5Y+Y6YePXG4gICAqL1xuICB2ZXJ0aWNhbCgpIHtcbiAgICB0aGlzLnJhZGlhbiA9IE1hdGguUEkgLSB0aGlzLnJhZGlhbjtcbiAgICB0aGlzLnkgKj0gLTE7XG4gIH1cblxuICAvKipcbiAgICog6K6+572u5rC05bmz57+76L2s5pyJ5YWz5Y+Y6YePXG4gICAqL1xuICBob3Jpem9udGFsKCkge1xuICAgIHRoaXMucmFkaWFuID0gTWF0aC5QSSAtIHRoaXMucmFkaWFuO1xuICAgIHRoaXMueCAqPSAtMTtcbiAgfVxuXG4gIC8qKlxuICAgKiDorr7nva7ml4vovaznmoTlvKfluqZcbiAgICogQHBhcmFtIHJhZGlhblxuICAgKi9cbiAgcm90YXRlKHJhZGlhbjogbnVtYmVyKSB7XG4gICAgdGhpcy5yYWRpYW4gPSByYWRpYW47XG4gIH1cblxuICAvKipcbiAgICog6K6+572u5byn5bqm5Li65ZCR5bem6L2sOTDluqZcbiAgICovXG4gIHJvdGF0ZUxlZnRCeTkwKCkge1xuICAgIHRoaXMucmFkaWFuIC09IE1hdGguUEkgLyAyO1xuICB9XG5cbiAgLyoqXG4gICAqIOiuvue9ruW8p+W6puS4uuWQkeW3pui9rDkw5bqmXG4gICAqL1xuICByb3RhdGVSaWdodEJ5OTAoKSB7XG4gICAgdGhpcy5yYWRpYW4gKz0gTWF0aC5QSSAvIDI7XG4gIH1cblxuICAvKipcbiAgICog5qC55o2u6KeS5bqm6K6+572u5peL6L2s55qE5byn5bqmXG4gICAqICBkZWdyZXNzXG4gICAqL1xuICByb3RhdGVCeURlZ3Jlc3MoZGVncmVzczogbnVtYmVyKSB7XG4gICAgdGhpcy5yYWRpYW4gPSAoZGVncmVzcyAqIE1hdGguUEkpIC8gMTgwO1xuICB9XG5cbiAgLyoqXG4gICAqIOWIpOaWreaYr+WQpuWPr+S7peaUvuWkpy/nvKnlsI9cbiAgICogIHNjYWxlXG4gICAqICB6b29tXG4gICAqICB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0Wm9vbShzY2FsZTogbnVtYmVyLCB6b29tOiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiBzY2FsZSA+IDAgJiYgc2NhbGUgPiAtem9vbVxuICAgICAgPyB6b29tXG4gICAgICA6IHNjYWxlIDwgMCAmJiBzY2FsZSA8IHpvb21cbiAgICAgID8gLXpvb21cbiAgICAgIDogMDtcbiAgfVxuXG4gIC8qKlxuICAgKiDorr7nva7nvKnmlL7nmoTmnInlhbPlj5jph49cbiAgICogQHBhcmFtIHpvb21cbiAgICovXG4gIHNjYWxlKHpvb206IG51bWJlcikge1xuICAgIGlmICh6b29tKSB7XG4gICAgICBsZXQgaFpvb206IG51bWJlciA9IHRoaXMuZ2V0Wm9vbSh0aGlzLngsIHpvb20pLFxuICAgICAgICB2Wm9vbTogbnVtYmVyID0gdGhpcy5nZXRab29tKHRoaXMueSwgem9vbSk7XG4gICAgICBpZiAoaFpvb20gJiYgdlpvb20pIHtcbiAgICAgICAgdGhpcy54ICs9IGhab29tO1xuICAgICAgICB0aGlzLnkgKz0gdlpvb207XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOiuvue9ruaUvuWkp+eahOacieWFs+WPmOmHj1xuICAgKi9cbiAgem9vbWluKCkge1xuICAgIHRoaXMuc2NhbGUoTWF0aC5hYnModGhpcy56b29tKSk7XG4gIH1cblxuICAvKipcbiAgICog6K6+572u57yp5bCP55qE5pyJ5YWz5Y+Y6YePXG4gICAqL1xuICB6b29tb3V0KCkge1xuICAgIHRoaXMuc2NhbGUoLU1hdGguYWJzKHRoaXMuem9vbSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIOmHjee9ruWPguaVsFxuICAgKi9cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5yYWRpYW4gPSAwO1xuICAgIHRoaXMueCA9IDE7XG4gICAgdGhpcy55ID0gMTtcbiAgICB0aGlzLnpvb20gPSAwLjE7XG4gICAgaWYgKHRoaXMuY3VycmVudEltYWdlKSB7XG4gICAgICB0aGlzLmN1cnJlbnRJbWFnZS5zdHlsZS50b3AgPSB0aGlzLmluaXRUb3AgKyBcInB4XCI7XG4gICAgICB0aGlzLmN1cnJlbnRJbWFnZS5zdHlsZS5sZWZ0ID0gdGhpcy5pbml0TGVmdCArIFwicHhcIjtcbiAgICB9XG4gIH1cblxuICAvLyDku6XkuIvkuLrlt6XlhbfmoI/nmoTmjInpkq7ngrnlh7vkuovku7ZcblxuICAvKipcbiAgICog5pS+5aSn5oyJ6ZKu5LqL5Lu2XG4gICAqL1xuICBpbWFnZVpvb21pbigpIHtcbiAgICB0aGlzLnpvb21pbigpO1xuICAgIHRoaXMuY2hhbmdlQ3VycmVudEltZygpO1xuICB9XG5cbiAgLyoqXG4gICAqIOe8qeWwj+aMiemSruS6i+S7tlxuICAgKi9cbiAgaW1hZ2Vab29tb3V0KCkge1xuICAgIHRoaXMuem9vbW91dCgpO1xuICAgIHRoaXMuY2hhbmdlQ3VycmVudEltZygpO1xuICB9XG5cbiAgLyoqXG4gICAqIOWQkeW3puaXi+i9rOaMiemSruS6i+S7tlxuICAgKi9cbiAgcm90YXRlTGVmdCgpIHtcbiAgICB0aGlzLnJvdGF0ZUxlZnRCeTkwKCk7XG4gICAgdGhpcy5jaGFuZ2VDdXJyZW50SW1nKCk7XG4gIH1cblxuICAvKipcbiAgICog5ZCR5Y+z5peL6L2s5oyJ6ZKu5LqL5Lu2XG4gICAqL1xuICByb3RhdGVSaWdodCgpIHtcbiAgICB0aGlzLnJvdGF0ZVJpZ2h0Qnk5MCgpO1xuICAgIHRoaXMuY2hhbmdlQ3VycmVudEltZygpO1xuICB9XG5cbiAgLyoqXG4gICAqIOWeguebtOe/u+i9rOaMiemSruS6i+S7tlxuICAgKi9cbiAgZmxpcFZlcnRpY2FsKCkge1xuICAgIHRoaXMuaG9yaXpvbnRhbCgpO1xuICAgIHRoaXMuY2hhbmdlQ3VycmVudEltZygpO1xuICB9XG5cbiAgLyoqXG4gICAqIOawtOW5s+e/u+i9rOaMiemSruS6i+S7tlxuICAgKi9cbiAgZmxpcEhvcml6b250YWwoKSB7XG4gICAgdGhpcy52ZXJ0aWNhbCgpO1xuICAgIHRoaXMuY2hhbmdlQ3VycmVudEltZygpO1xuICB9XG5cbiAgLyoqXG4gICAqIOS4u+WbvuaBouWkjeWIneWni+eKtuaAgVxuICAgKi9cbiAgY3VycmVudEltZ1Jlc2V0KCkge1xuICAgIHRoaXMucmVzZXQoKTtcbiAgICB0aGlzLmNoYW5nZUN1cnJlbnRJbWcoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDkuIvkuIDpobXlm77niYdcbiAgICogQHBhcmFtIG1vcmVJbWdcbiAgICogQHBhcmFtIHZpZXdlclxuICAgKi9cbiAgcHJldmlvdXNJbWcobW9yZUltZzogSFRNTERpdkVsZW1lbnQsIHZpZXdlcjogSFRNTERpdkVsZW1lbnQpIHtcbiAgICBsZXQgbW92ZVZhbDogbnVtYmVyID1cbiAgICAgIE51bWJlcihtb3JlSW1nLnN0eWxlLmxlZnQuc3BsaXQoXCJweFwiKVswXSkgKyB2aWV3ZXIuY2xpZW50V2lkdGg7XG4gICAgdGhpcy5tb3JlSW1nSW5pdExlZnQgPSBtb3ZlVmFsIDwgMCA/IG1vdmVWYWwgOiAwO1xuICAgIGlmICh0aGlzLm1vcmVJbWdJbml0TGVmdCA8PSAwKSB7XG4gICAgICB0aGlzLm1vcmVJbWdJbml0TGVmdCA9IDMwO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDkuIvkuIDpobXlm77niYdcbiAgICogQHBhcmFtIG1vcmVJbWdcbiAgICogQHBhcmFtIHZpZXdlclxuICAgKi9cbiAgbmV4dEltZyhtb3JlSW1nOiBIVE1MRGl2RWxlbWVudCwgdmlld2VyOiBIVE1MRGl2RWxlbWVudCkge1xuICAgIGxldCBtb3ZlVmFsOiBudW1iZXIgPVxuICAgICAgTnVtYmVyKG1vcmVJbWcuc3R5bGUubGVmdC5zcGxpdChcInB4XCIpWzBdKSAtIHZpZXdlci5jbGllbnRXaWR0aDtcbiAgICB0aGlzLm1vcmVJbWdJbml0TGVmdCA9XG4gICAgICAtbW9yZUltZy5jbGllbnRXaWR0aCA8IG1vdmVWYWwgPyBtb3ZlVmFsIDogdGhpcy5tb3JlSW1nSW5pdExlZnQ7XG4gICAgaWYgKHRoaXMubW9yZUltZ0luaXRMZWZ0IDw9IDApIHtcbiAgICAgIHRoaXMubW9yZUltZ0luaXRMZWZ0ID0gMzA7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOeCueWHu+Wwj+WbvuWKoOi9veS4u+WbvuS6i+S7tlxuICAgKiBAcGFyYW0gaW1nVXJsXG4gICAqL1xuICBjaGFuZ2VDdXJyZW50SW1hZ2VVcmwoaW1nVXJsOiBzdHJpbmcsIGluZGV4OiBudW1iZXIpIHtcbiAgICB0aGlzLmN1cnJlbnRJbWFnZVVybCA9IGltZ1VybDtcbiAgICB0aGlzLmN1cnJlbnRJbWdSZXNldCgpO1xuICAgIHRoaXMuZXZlbnRTZXJ2aWNlLnJzcy5lbWl0KHRoaXMuZXZlbnRTZXJ2aWNlLl9pbWFnZVZpZXdlckluZGV4Q2hhbmdlZCwge1xuICAgICAgaW5kZXg6IGluZGV4LFxuICAgIH0pO1xuICB9XG4gIC8qKlxuICAgKiDmoLnmja7ntKLlvJXliIfmjaLlm77niYdcbiAgICovXG4gIGNoYW5nZUN1cnJlbnRJbmRleChpbmRleDogbnVtYmVyKSB7XG4gICAgaWYgKGluZGV4ID49IDAgJiYgaW5kZXggPCB0aGlzLmltYWdlU291cmNlcy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuY3VycmVudEltYWdlVXJsID0gdGhpcy5pbWFnZVNvdXJjZXNbaW5kZXhdO1xuICAgICAgdGhpcy5jdXJyZW50SW1nUmVzZXQoKTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIOa7mui9rue8qeaUvlxuICAgKiBAcGFyYW0gZVxuICAgKi9cbiAgY3VycmVudEltYWdlWm9vbUJ5V2hlZWwoZTogYW55KSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAvLyDnpoHnlKjmu5rova7kuovku7bnmoTpu5jorqTmk43kvZxcbiAgICBsZXQgc2NhbGU6IG51bWJlciA9XG4gICAgICAoZS53aGVlbERlbHRhID8gZS53aGVlbERlbHRhIC8gLTE4MCA6IChlLmRldGFpbCB8fCAwKSAvIDMpICpcbiAgICAgIE1hdGguYWJzKHRoaXMuem9vbSk7XG4gICAgdGhpcy5zY2FsZShzY2FsZSk7XG4gICAgaWYgKHRoaXMueCA+PSAwLjEgJiYgdGhpcy55ID49IDAuMSkge1xuICAgICAgLy8g5L+u5aSNY2hyb21l5LiL5Zu+54mH57yp5bCP5Yiw5LiA5a6a56iL5bqm5Lya56qB54S25Y+Y5aSn55qEYnVnXG4gICAgICB0aGlzLmNoYW5nZUN1cnJlbnRJbWcoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICog5Li75Zu+5ouW5Yqo5byA5aeL5LqL5Lu2XG4gICAqIEBwYXJhbSBlXG4gICAqL1xuICBjdXJyZW50SW1hZ2VEcmFnU3RhcnQoZTogTW91c2VFdmVudCkge1xuICAgIGlmICh0aGlzLmN1cnJlbnRJbWFnZSkge1xuICAgICAgdGhpcy5jdXJyZW50SW1hZ2VUZW1wVG9wID0gcGFyc2VJbnQodGhpcy5jdXJyZW50SW1hZ2Uuc3R5bGUudG9wKTtcbiAgICAgIHRoaXMuY3VycmVudEltYWdlVGVtcExlZnQgPSBwYXJzZUludCh0aGlzLmN1cnJlbnRJbWFnZS5zdHlsZS5sZWZ0KTtcbiAgICB9XG4gICAgdGhpcy5kcmFnU3RhcnRDbGllbnRYID0gZS5jbGllbnRYO1xuICAgIHRoaXMuZHJhZ1N0YXJ0Q2xpZW50WSA9IGUuY2xpZW50WTtcbiAgICBpZiAodGhpcy5jdXJyZW50SW1hZ2UpIHtcbiAgICAgIHRoaXMuY3VycmVudEltYWdlLnN0eWxlLnRyYW5zaXRpb24gPSBcImFsbCAwcyBlYXNlLW91dFwiO1xuICAgIH1cbiAgICB0aGlzLmlzU3RhcnRNb3ZlID0gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiDorr7nva7nhafniYfpq5jluqZcbiAgICovXG4gIHNldEltYWdlSGVpZ2h0KCkge1xuICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuZ2V0TWFpbldpbmRvd0hlaWdodCgpO1xuICAgIGlmIChoZWlnaHQgIT09IHRoaXMubWFpbldpbmRvd0hlaWdodCkge1xuICAgICAgdGhpcy5tYWluV2luZG93SGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgaWYgKHRoaXMuaW1hZ2VTb3VyY2VzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgdGhpcy5pbWFnZVZpZXdIZWlnaHQgPSBoZWlnaHQgLSA5NiArIFwicHhcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaW1hZ2VWaWV3SGVpZ2h0ID0gaGVpZ2h0IC0gNDYgKyBcInB4XCI7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOS4u+WbvuaLluWKqOS4reS6i+S7tlxuICAgKiBAcGFyYW0gZVxuICAgKi9cbiAgY3VycmVudEltYWdlRHJhZyhlOiBNb3VzZUV2ZW50KSB7XG4gICAgdGhpcy5zZXRJbWFnZUhlaWdodCgpO1xuICAgIGlmICh0aGlzLmlzU3RhcnRNb3ZlKSB7XG4gICAgICBsZXQgb2Zmc2V0WDogbnVtYmVyID0gZS5jbGllbnRYIC0gdGhpcy5kcmFnU3RhcnRDbGllbnRYO1xuICAgICAgbGV0IG9mZnNldFk6IG51bWJlciA9IGUuY2xpZW50WSAtIHRoaXMuZHJhZ1N0YXJ0Q2xpZW50WTtcbiAgICAgIGlmICh0aGlzLmN1cnJlbnRJbWFnZSkge1xuICAgICAgICB0aGlzLmN1cnJlbnRJbWFnZS5zdHlsZS50b3AgPSB0aGlzLmN1cnJlbnRJbWFnZVRlbXBUb3AgKyBvZmZzZXRZICsgXCJweFwiO1xuICAgICAgICB0aGlzLmN1cnJlbnRJbWFnZS5zdHlsZS5sZWZ0ID1cbiAgICAgICAgICB0aGlzLmN1cnJlbnRJbWFnZVRlbXBMZWZ0ICsgb2Zmc2V0WCArIFwicHhcIjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICog5Li75Zu+5ouW5Yqo57uT5p2f5LqL5Lu2XG4gICAqIEBwYXJhbSBlXG4gICAqL1xuICBjdXJyZW50SW1hZ2VEcmFnRW5kKGU6IE1vdXNlRXZlbnQpIHtcbiAgICBpZiAodGhpcy5jdXJyZW50SW1hZ2UpIHtcbiAgICAgIHRoaXMuY3VycmVudEltYWdlLnN0eWxlLnRyYW5zaXRpb24gPSBcImFsbCAwLjVzIGVhc2Utb3V0XCI7XG4gICAgfVxuICAgIHRoaXMuaXNTdGFydE1vdmUgPSBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiDlj5bmtojpu5jorqTnmoTmi5bmi73kuovku7ZcbiAgICogIGVcbiAgICovXG4gIGNhbmNsZUN1cnJlbnRJbWFnZURyYWcoZTogRHJhZ0V2ZW50KSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIOiuoeeul+eql+S9k+mrmOW6pu+8jFxuICAgKiBzc21vZGFsX2NvbnRlbnQg5Li65qih5oCB5a+56K+d5qGG77ybXG4gICAqIHNzcGFuZWxfY29udGVudCDkuLptYXDkuK3nmoRwYW5lbOOAglxuICAgKi9cbiAgZ2V0TWFpbldpbmRvd0hlaWdodCgpOiBudW1iZXIge1xuICAgIGxldCBwYXJlbnROb2RlID0gdGhpcy5pbWFnZVZpZXdlckNvbnRhaW5lci5uYXRpdmVFbGVtZW50LnBhcmVudE5vZGU7XG4gICAgd2hpbGUgKHBhcmVudE5vZGUpIHtcbiAgICAgIGlmIChwYXJlbnROb2RlLmNsYXNzTmFtZSAmJlxuICAgICAgICAocGFyZW50Tm9kZS5jbGFzc05hbWUgPT09IFwic3Ntb2RhbF9jb250ZW50XCIgfHxcbiAgICAgICAgICBwYXJlbnROb2RlLmNsYXNzTmFtZSA9PT0gXCJzc3BhbmVsX2NvbnRlbnRcIilcbiAgICAgICkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHBhcmVudE5vZGUgPSBwYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgfVxuICAgIGlmIChwYXJlbnROb2RlKSB7XG4gICAgICByZXR1cm4gcGFyZW50Tm9kZS5jbGllbnRIZWlnaHQgLSAzMDtcbiAgICB9IGVsc2Uge1xuICAgICAgcGFyZW50Tm9kZSA9IHRoaXMuaW1hZ2VWaWV3ZXJDb250YWluZXIubmF0aXZlRWxlbWVudC5wYXJlbnROb2RlO1xuICAgICAgbGV0IGNvbnRlbnROb2RlID0gbnVsbDtcbiAgICAgIHdoaWxlIChwYXJlbnROb2RlKSB7XG4gICAgICAgIGlmIChwYXJlbnROb2RlLmNoaWxkTm9kZXMgJiYgcGFyZW50Tm9kZS5jaGlsZE5vZGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIHBhcmVudE5vZGUuY2hpbGROb2Rlcykge1xuICAgICAgICAgICAgaWYgKGNoaWxkLm5vZGVOYW1lLnRvTG9jYWxlVXBwZXJDYXNlKCkgPT09IFwiTlotQ09OVEVOVFwiKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnROb2RlID0gY2hpbGQ7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoY29udGVudE5vZGUpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBwYXJlbnROb2RlID0gcGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgICAgfVxuICAgICAgaWYgKGNvbnRlbnROb2RlKSB7XG4gICAgICAgIHJldHVybiBjb250ZW50Tm9kZS5jbGllbnRIZWlnaHQ7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmhlaWdodDtcbiAgfVxuXG4gIC8qKlxuICAgKiDmo4DmtYvmtY/op4jlmahcbiAgICogIHthbnl9XG4gICAqL1xuICBjaGVja0Jyb3dzZXIoKTogYW55IHtcbiAgICBsZXQgYnJvd3NlcjogYW55ID0ge30sXG4gICAgICB1YTogc3RyaW5nID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcblxuICAgIC8vIOajgOa1i1ByZXN0b+WGheaguOeahE9wZXJh5rWP6KeI5ZmoXG4gICAgaWYgKHdpbmRvd1tcIm9wZXJhXCJdKSB7XG4gICAgICBicm93c2VyLnZlciA9IHdpbmRvd1tcIm9wZXJhXCJdLnZlcnNpb24oKTtcbiAgICAgIGJyb3dzZXIub3BlcmEgPSBwYXJzZUZsb2F0KGJyb3dzZXIudmVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy/noa7lrpogTWljcm9zb2Z0IEVkZ2VcbiAgICAgIGlmICgvRWRnZVxcLyhcXFMrKS8udGVzdCh1YSkpIHtcbiAgICAgICAgYnJvd3Nlci52ZXIgPSBSZWdFeHBbXCIkMVwiXTtcbiAgICAgICAgYnJvd3Nlci5taXNFZGdlID0gcGFyc2VGbG9hdChicm93c2VyLnZlcik7XG4gICAgICB9XG5cbiAgICAgIC8vIOehruWumiBXZWJLaXTlhoXmoLhPcGVyYVxuICAgICAgZWxzZSBpZiAoL09QUlxcLyhcXFMrKS8udGVzdCh1YSkpIHtcbiAgICAgICAgYnJvd3Nlci52ZXIgPSBSZWdFeHBbXCIkMVwiXTtcbiAgICAgICAgYnJvd3Nlci5vcGVyYSA9IHBhcnNlRmxvYXQoYnJvd3Nlci52ZXIpO1xuICAgICAgfVxuXG4gICAgICAvLyDnoa7lrpogQ2hyb21lXG4gICAgICBlbHNlIGlmICgvQ2hyb21lXFwvKFxcUyspLy50ZXN0KHVhKSkge1xuICAgICAgICBicm93c2VyLnZlciA9IFJlZ0V4cFtcIiQxXCJdO1xuICAgICAgICBicm93c2VyLmNocm9tZSA9IHBhcnNlRmxvYXQoYnJvd3Nlci52ZXIpO1xuICAgICAgfVxuXG4gICAgICAvLyDnoa7lrpogU2FmYXJpXG4gICAgICBlbHNlIGlmICgvVmVyc2lvblxcLyhcXFMrKS8udGVzdCh1YSkpIHtcbiAgICAgICAgYnJvd3Nlci52ZXIgPSBSZWdFeHBbXCIkMVwiXTtcbiAgICAgICAgYnJvd3Nlci5zYWZhcmkgPSBwYXJzZUZsb2F0KGJyb3dzZXIudmVyKTtcbiAgICAgIH1cblxuICAgICAgLy8g56Gu5a6aIEZpcmVmb3hcbiAgICAgIGVsc2UgaWYgKC9GaXJlZm94XFwvKFxcUyspLy50ZXN0KHVhKSkge1xuICAgICAgICBicm93c2VyLnZlciA9IFJlZ0V4cFtcIiQxXCJdO1xuICAgICAgICBicm93c2VyLmZpcmVmb3ggPSBwYXJzZUZsb2F0KGJyb3dzZXIudmVyKTtcbiAgICAgIH1cblxuICAgICAgLy8g5qOA5rWLIElFXG4gICAgICBlbHNlIGlmICgvTVNJRSAoW147XSspLy50ZXN0KHVhKSB8fCAvcnY6KFteXFwpXSspXFwpIGxpa2UgR2Vja28vLnRlc3QodWEpKSB7XG4gICAgICAgIGJyb3dzZXIudmVyID0gUmVnRXhwW1wiJDFcIl07XG4gICAgICAgIGJyb3dzZXIuaWUgPSBwYXJzZUZsb2F0KGJyb3dzZXIudmVyKTtcbiAgICAgIH1cblxuICAgICAgLy8g5qOA5rWLIEtIVE1MIOeUqOS6jktvbnF1ZXJvcjMuMeWPiuabtOaXqeeJiOacrOS4reS4jeWMheWQq0tIVE1M55qE54mI5pys77yM5pWF6ICM5bCx6KaB5L2/55SoS29ucXVlcm9y55qE54mI5pys5p2l5Luj5pu/XG4gICAgICBlbHNlIGlmICgvS0hUTUxcXC8oXFxTKykvLnRlc3QodWEpIHx8IC9Lb25xdWVyb3JcXC8oXFxTKykvLnRlc3QodWEpKSB7XG4gICAgICAgIGJyb3dzZXIudmVyID0gUmVnRXhwW1wiJDFcIl07XG4gICAgICAgIGJyb3dzZXIua29ucSA9IHBhcnNlRmxvYXQoYnJvd3Nlci52ZXIpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYnJvd3NlcjtcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cImltYWdlVmlld2VyQ29udGFpbmVyXCIgI2ltYWdlVmlld2VyQ29udGFpbmVyPlxuXHQ8ZGl2IGNsYXNzPVwiaW1hZ2VWaWV3ZXJcIlxuXHRcdCAoZHJhZ3N0YXJ0KT1cImNhbmNsZUN1cnJlbnRJbWFnZURyYWcoJGV2ZW50KVwiXG5cdFx0IChtb3VzZWRvd24pPVwiY3VycmVudEltYWdlRHJhZ1N0YXJ0KCRldmVudClcIlxuXHRcdCAobW91c2Vtb3ZlKT1cImN1cnJlbnRJbWFnZURyYWcoJGV2ZW50KVwiXG5cdFx0IChtb3VzZXVwKT1cImN1cnJlbnRJbWFnZURyYWdFbmQoJGV2ZW50KVwiXG5cdFx0IFtzdHlsZS53aWR0aF09XCJpbWFnZVZpZXdlckNvbnRhaW5lci5zdHlsZS53aWR0aFwiXG5cdFx0IFtzdHlsZS5oZWlnaHRdPVwiaW1hZ2VWaWV3SGVpZ2h0XCIgI2ltYWdlVmlld2VyPlxuXG5cdFx0PGltZyBbc3JjXT1cImN1cnJlbnRJbWFnZVVybFwiXG5cdFx0XHQgKGxvYWQpPVwiY3VycmVudEltYWdlTG9hZGVkKHNob3dJbWcsIGltYWdlVmlld2VyKVwiICNzaG93SW1nPlxuXG5cdFx0PGRpdiBjbGFzcz1cInByZXZpb3VzSW1nXCIgKGNsaWNrKT1cInByZU9yTmV4dEltZygncHJlJylcIj5cblx0XHRcdDxzcGFuIGNsYXNzPVwiZmEgZmEtY2hldnJvbi1jaXJjbGUtbGVmdFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHRpdGxlPVwi5LiK5LiA5bygXCI+XG5cdFx0XHRcdDxzdmcgdD1cIjE1ODg5NDU5Njg2MzZcIiBjbGFzcz1cImljb25cIiB2aWV3Qm94PVwiMCAwIDEwMjQgMTAyNFwiIHZlcnNpb249XCIxLjFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgcC1pZD1cIjE4MjYxXCIgd2lkdGg9XCI2MFwiIGhlaWdodD1cIjYwXCI+PHBhdGggZD1cIk01NjQuMzI2NCA3MzcuMDc1Mmw0MS41NzQ0LTQxLjU3NDQtMTg0LjQyMjQtMTg0LjExNTIgMTg0LjQyMjQtMTg0LjExNTItNDEuNTc0NC00MS41NzQ0TDMzOC45NDQgNTExLjM4NTZ6XCIgcC1pZD1cIjE4MjYyXCI+PC9wYXRoPjxwYXRoIGQ9XCJNNTExLjc5NTIgMTAxLjU4MDhjLTIyNi4zMDQgMC00MDkuODA0OCAxODMuNTAwOC00MDkuODA0OCA0MDkuODA0OHMxODMuNTAwOCA0MDkuODA0OCA0MDkuODA0OCA0MDkuODA0OFM5MjEuNiA3MzcuNzkyIDkyMS42IDUxMS4zODU2IDczOC4wOTkyIDEwMS41ODA4IDUxMS43OTUyIDEwMS41ODA4eiBtMCA1OC41NzI4YzE5NC4wNDggMCAzNTEuMzM0NCAxNTcuMjg2NCAzNTEuMzM0NCAzNTEuMzM0NHMtMTU3LjM4ODggMzUxLjIzMi0zNTEuMzM0NCAzNTEuMjMyYy0xOTQuMDQ4IDAtMzUxLjMzNDQtMTU3LjI4NjQtMzUxLjMzNDQtMzUxLjMzNDQgMC05My4xODQgMzYuOTY2NC0xODIuNDc2OCAxMDIuOTEyLTI0OC40MjI0czE1NS4yMzg0LTEwMi44MDk2IDI0OC40MjI0LTEwMi44MDk2elwiIHAtaWQ9XCIxODI2M1wiPjwvcGF0aD48L3N2Zz5cblx0XHRcdDwvc3Bhbj5cblx0XHQ8L2Rpdj5cblx0XHQ8ZGl2IGNsYXNzPVwibmV4dEltZ1wiIChjbGljayk9XCJwcmVPck5leHRJbWcoJ25leHQnKVwiPlxuXHRcdFx0PHNwYW4gY2xhc3M9XCJmYSBmYS1jaGV2cm9uLWNpcmNsZS1yaWdodFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHRpdGxlPVwi5LiL5LiA5bygXCI+XG5cdFx0XHRcdDxzdmcgdD1cIjE1ODg5NDYwMDI1NTFcIiBjbGFzcz1cImljb25cIiB2aWV3Qm94PVwiMCAwIDEwMjQgMTAyNFwiIHZlcnNpb249XCIxLjFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgcC1pZD1cIjE4NDc4XCIgd2lkdGg9XCI2MFwiIGhlaWdodD1cIjYwXCI+PHBhdGggZD1cIk00NTkuMzY2NCA3MzcuMDc1Mkw0MTcuNzkyIDY5NS41MDA4bDE4NC40MjI0LTE4NC4xMTUyTDQxNy43OTIgMzI3LjI3MDRsNDEuNTc0NC00MS41NzQ0IDIyNS4zODI0IDIyNS42ODk2elwiIHAtaWQ9XCIxODQ3OVwiPjwvcGF0aD48cGF0aCBkPVwiTTUxMS43OTUyIDEwMS41ODA4Yy0yMjYuMzA0IDAtNDA5LjgwNDggMTgzLjUwMDgtNDA5LjgwNDggNDA5LjgwNDhzMTgzLjUwMDggNDA5LjgwNDggNDA5LjgwNDggNDA5LjgwNDhTOTIxLjYgNzM3Ljc5MiA5MjEuNiA1MTEuMzg1NiA3MzguMDk5MiAxMDEuNTgwOCA1MTEuNzk1MiAxMDEuNTgwOHogbTAgNTguNTcyOGMxOTQuMDQ4IDAgMzUxLjMzNDQgMTU3LjI4NjQgMzUxLjMzNDQgMzUxLjMzNDRzLTE1Ny4zODg4IDM1MS4yMzItMzUxLjMzNDQgMzUxLjIzMmMtMTk0LjA0OCAwLTM1MS4zMzQ0LTE1Ny4yODY0LTM1MS4zMzQ0LTM1MS4zMzQ0IDAtOTMuMTg0IDM2Ljk2NjQtMTgyLjQ3NjggMTAyLjkxMi0yNDguNDIyNHMxNTUuMjM4NC0xMDIuODA5NiAyNDguNDIyNC0xMDIuODA5NnpcIiBwLWlkPVwiMTg0ODBcIj48L3BhdGg+PC9zdmc+XG5cdFx0XHQ8L3NwYW4+XG5cdFx0PC9kaXY+XG5cdDwvZGl2PlxuXHQ8ZGl2ICpuZ0lmPVwiaW1hZ2VTb3VyY2VzLmxlbmd0aD4xO1wiIGNsYXNzPVwic21hbGxJbWFnZVZpZXdlclwiPlxuXHRcdDxkaXYgY2xhc3M9XCJ0b0ltZyBwcmV2aW91c0ltZ3NcIiB0aXRsZT1cIuWQkeW3puafpeeci1wiIChjbGljayk9XCJwcmV2aW91c0ltZyhtb3JlSW1nLCBpbWFnZVZpZXdlcilcIj5cblx0XHRcdDxzdmcgdD1cIjE1ODg5NDYxNjE2MDFcIiBjbGFzcz1cImljb25cIiB2aWV3Qm94PVwiMCAwIDEwMjQgMTAyNFwiIHZlcnNpb249XCIxLjFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgcC1pZD1cIjQ0OTlcIiB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTZcIj48cGF0aCBkPVwiTTg1NC42NTYgMTgyLjY1NmEzMiAzMiAwIDEgMC00NS4zMTItNDUuMzEybC0zNTIgMzUyYTMyIDMyIDAgMCAwIDAgNDUuMzEybDM1MiAzNTJhMzIgMzIgMCAwIDAgNDUuMzEyLTQ1LjMxMkw1MjUuMjQ4IDUxMmwzMjkuNDA4LTMyOS4zNDR6IG0tMzIwIDBhMzIgMzIgMCAxIDAtNDUuMzEyLTQ1LjMxMmwtMzUyIDM1MmEzMiAzMiAwIDAgMCAwIDQ1LjMxMmwzNTIgMzUyYTMyIDMyIDAgMCAwIDQ1LjMxMi00NS4zMTJMMjA1LjI0OCA1MTJsMzI5LjQwOC0zMjkuMzQ0elwiIGZpbGw9XCIjZmZmZmZmXCIgcC1pZD1cIjQ1MDBcIj48L3BhdGg+PC9zdmc+XHQ8L2Rpdj5cblx0XHQ8ZGl2IGNsYXNzPVwidG9JbWcgbmV4dEltZ3NcIiB0aXRsZT1cIuWQkeWPs+afpeeci1wiIChjbGljayk9XCJuZXh0SW1nKG1vcmVJbWcsIGltYWdlVmlld2VyKVwiPlxuXHRcdFx0PHN2ZyB0PVwiMTU4ODk0NjEzNzgzNFwiIGNsYXNzPVwiaWNvblwiIHZpZXdCb3g9XCIwIDAgMTAyNCAxMDI0XCIgdmVyc2lvbj1cIjEuMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBwLWlkPVwiNDM3M1wiIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiPjxwYXRoIGQ9XCJNNTU2LjggNTM1Ljg5M0wxNzAuNjY3IDE0OS43NmMtMTMuMjI3LTEzLjIyNy0xMy4yMjctMzQuOTg3IDAtNDguMjEzIDEzLjIyNi0xMy4yMjcgMzQuOTg2LTEzLjIyNyA0OC4yMTMgMEw2MDUuMDEzIDQ4Ny42OGMxMy4yMjcgMTMuMjI3IDEzLjIyNyAzNC45ODcgMCA0OC4yMTMtMTMuMjI2IDEzLjIyNy0zNC45ODYgMTMuMjI3LTQ4LjIxMyAwelwiIGZpbGw9XCIjZmZmZmZmXCIgcC1pZD1cIjQzNzRcIj48L3BhdGg+PHBhdGggZD1cIk0xNzAuNjY3IDg3My44MTNMNTU2LjggNDg3LjY4YzEzLjIyNy0xMy4yMjcgMzQuOTg3LTEzLjIyNyA0OC4yMTMgMCAxMy4yMjcgMTMuMjI3IDEzLjIyNyAzNC45ODcgMCA0OC4yMTNMMjE4Ljg4IDkyMi4wMjdjLTEzLjIyNyAxMy4yMjYtMzQuOTg3IDEzLjIyNi00OC4yMTMgMGEzMy40OTMgMzMuNDkzIDAgMCAxIDAtNDguMjE0ek04MjUuMTczIDUzNi4zMkw0MzkuMDQgMTUwLjE4N2MtMTMuMjI3LTEzLjIyNy0xMy4yMjctMzQuOTg3IDAtNDguMjE0IDEzLjIyNy0xMy4yMjYgMzQuOTg3LTEzLjIyNiA0OC4yMTMgMGwzODYuMTM0IDM4Ni4xMzRjMTMuMjI2IDEzLjIyNiAxMy4yMjYgMzQuOTg2IDAgNDguMjEzYTMzLjQ5MyAzMy40OTMgMCAwIDEtNDguMjE0IDB6XCIgZmlsbD1cIiNmZmZmZmZcIiBwLWlkPVwiNDM3NVwiPjwvcGF0aD48cGF0aCBkPVwiTTQzOS4wNCA4NzQuMjRsMzg2LjEzMy0zODYuMTMzYzEzLjIyNy0xMy4yMjcgMzQuOTg3LTEzLjIyNyA0OC4yMTQgMCAxMy4yMjYgMTMuMjI2IDEzLjIyNiAzNC45ODYgMCA0OC4yMTNMNDg3LjI1MyA5MjIuNDUzYy0xMy4yMjYgMTMuMjI3LTM0Ljk4NiAxMy4yMjctNDguMjEzIDAtMTMuMjI3LTEzLjIyNi0xMy4yMjctMzQuNTYgMC00OC4yMTN6XCIgZmlsbD1cIiNmZmZmZmZcIiBwLWlkPVwiNDM3NlwiPjwvcGF0aD48L3N2Zz5cdDwvZGl2PlxuXHRcdDxkaXYgY2xhc3M9XCJtb3JlSW1nXCIgI21vcmVJbWcgW3N0eWxlLmxlZnRdPVwibW9yZUltZ0luaXRMZWZ0ICsgJ3B4J1wiPlxuXHRcdFx0PGltZyAqbmdGb3I9XCJsZXQgaW1nVXJsIG9mIGltYWdlU291cmNlczsgbGV0IGkgPSBpbmRleDtcIiBbc3JjXT1cImltZ1VybFwiIChjbGljayk9XCJjaGFuZ2VDdXJyZW50SW1hZ2VVcmwoaW1nVXJsLGkpXCI+XG5cdFx0PC9kaXY+XG5cdDwvZGl2PlxuXHQ8ZGl2IGNsYXNzPVwiaW1hZ2VUb29sc1wiPlxuXHRcdDxidXR0b24gY2xhc3M9XCJ0b29sc0J0biBpbWFnZVpvb21pblwiIHRpdGxlPVwi5pS+5aSnXCIgKGNsaWNrKT1cImltYWdlWm9vbWluKClcIj5cblx0XHRcdDxzdmcgdD1cIjE1ODg5NDEwMjI2NzhcIiBjbGFzcz1cImljb25cIiB2aWV3Qm94PVwiMCAwIDEwMjcgMTAyNFwiIHZlcnNpb249XCIxLjFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgcC1pZD1cIjg5OTBcIiB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIj48cGF0aCBkPVwiTTcyMi40ODkgNjQyLjg0NGM0NS41MTEtNjIuNTc3IDczLjk1NS0xMzYuNTMzIDczLjk1NS0yMTYuMTc3IDAtMjA0LjgtMTY0Ljk3Ny0zNjkuNzc4LTM2OS43NzctMzY5Ljc3OFM1Ni44ODkgMjIxLjg2NyA1Ni44ODkgNDI2LjY2N3MxNjQuOTc4IDM2OS43NzcgMzY5Ljc3OCAzNjkuNzc3Yzc5LjY0NCAwIDE1My42LTI4LjQ0NCAyMTYuMTc3LTY4LjI2NmwyMjEuODY3IDIyMS44NjZjMjIuNzU2IDIyLjc1NiA1Ni44ODkgMjIuNzU2IDc5LjY0NSAwIDIyLjc1NS0yMi43NTUgMjIuNzU1LTU2Ljg4OCAwLTc5LjY0NEw3MjIuNDg5IDY0Mi44NDR6IG0tMjk1LjgyMiA5Ni43MTJjLTE3MC42NjcgMC0zMTIuODktMTQyLjIyMy0zMTIuODktMzEyLjg5UzI1NiAxMTMuNzc5IDQyNi42NjggMTEzLjc3OSA3MzkuNTU2IDI1NiA3MzkuNTU2IDQyNi42NjdzLTE0Mi4yMjMgMzEyLjg4OS0zMTIuODkgMzEyLjg4OVwiIHAtaWQ9XCI4OTkxXCI+PC9wYXRoPjxwYXRoIGQ9XCJNMjI3LjU1NiAzOTguMjIyaDM5OC4yMjJ2NTYuODlIMjI3LjU1NnpcIiBwLWlkPVwiODk5MlwiPjwvcGF0aD48cGF0aCBkPVwiTTM5OC4yMjIgMjI3LjU1Nmg1Ni44OXYzOTguMjIyaC01Ni44OXpcIiBwLWlkPVwiODk5M1wiPjwvcGF0aD48L3N2Zz5cdFx0XG5cdFx0PC9idXR0b24+XG5cdFx0PGJ1dHRvbiBjbGFzcz1cInRvb2xzQnRuIGltYWdlWm9vbW91dFwiIHRpdGxlPVwi57yp5bCPXCIgKGNsaWNrKT1cImltYWdlWm9vbW91dCgpXCI+XG5cdFx0XHQ8c3ZnIHQ9XCIxNTg4OTQxMzA2Njk4XCIgY2xhc3M9XCJpY29uXCIgdmlld0JveD1cIjAgMCAxMDI0IDEwMjRcIiB2ZXJzaW9uPVwiMS4xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHAtaWQ9XCI5MTE1XCIgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCI+PHBhdGggZD1cIk00NDYuMjU4NzE3IDgyMy45NjAwMTFjLTUxLjEyNDM3OCAwLTEwMC43NDU1MTktMTAuMDA1ODg4LTE0Ny40NTYzNzctMjkuODE0MDI2LTQ1LjA5NzEwNC0xOS4wNTA4OTEtODUuNjczMjQyLTQ2LjM4ODUxNy0xMjAuNDM4MDIzLTgxLjE1MzI5OC0zNC43NjI3MzUtMzQuNzY0NzgxLTYyLjEwMjQwNy03NS4zNDA5MTktODEuMTUzMjk4LTEyMC40MzgwMjMtMTkuODAzMDIyLTQ2LjcwOTgzNS0yOS44MTQwMjYtOTYuMzI0ODM2LTI5LjgxNDAyNi0xNDcuNDQ5MjEzczEwLjAxMTAwNS0xMDAuNzQ1NTE5IDI5LjgxNDAyNi0xNDcuNDU2Mzc3YzE5LjA1MDg5MS00NS4wOTcxMDQgNDYuMzg5NTQtODUuNjczMjQyIDgxLjE1MzI5OC0xMjAuNDM4MDIzIDM0Ljc2NDc4MS0zNC43NjI3MzUgNzUuMzQwOTE5LTYyLjEwMjQwNyAxMjAuNDM4MDIzLTgxLjE1MzI5OCA0Ni43MDk4MzUtMTkuODAzMDIyIDk2LjMzMTk5OS0yOS44MTQwMjYgMTQ3LjQ1NjM3Ny0yOS44MTQwMjYgNTEuMTI0Mzc4IDAgMTAwLjczOTM3OSAxMC4wMTEwMDUgMTQ3LjQ0OTIxMyAyOS44MTQwMjYgNDUuMDk3MTA0IDE5LjA1MDg5MSA4NS42NzMyNDIgNDYuMzg5NTQgMTIwLjQzODAyMyA4MS4xNTMyOTggMzQuNzY0NzgxIDM0Ljc2NDc4MSA2Mi4xMDI0MDcgNzUuMzQwOTE5IDgxLjE1MzI5OCAxMjAuNDM4MDIzIDE5LjgwODEzOCA0Ni43MDk4MzUgMjkuODEzMDAzIDk2LjMzMTk5OSAyOS44MTMwMDMgMTQ3LjQ1NjM3N3MtMTAuMDA1ODg4IDEwMC43MzkzNzktMjkuODEzMDAzIDE0Ny40NDkyMTNjLTE5LjA1MDg5MSA0NS4wOTcxMDQtNDYuMzg4NTE3IDg1LjY3MzI0Mi04MS4xNTMyOTggMTIwLjQzODAyMy0zNC43NjQ3ODEgMzQuNzY0NzgxLTc1LjM0MDkxOSA2Mi4xMDI0MDctMTIwLjQzODAyMyA4MS4xNTMyOTgtNDYuNjA0NDM0IDE5LjgwODEzOC05Ni4yMjA0NTkgMjkuODE0MDI2LTE0Ny40NDkyMTMgMjkuODE0MDI2eiBtMC02ODguODMzNDUxYy0xNzAuOTIwNzg4IDAtMzA5Ljk3ODg5IDEzOS4wNTgxMDMtMzA5Ljk3ODg5MSAzMDkuOTc4ODkxIDAgMTcwLjkxNTY3MSAxMzkuMDU4MTAzIDMwOS45NzE3MjcgMzA5Ljk3ODg5MSAzMDkuOTcxNzI3IDE3MC45MTU2NzEgMCAzMDkuOTcxNzI3LTEzOS4wNTcwNzkgMzA5Ljk3MTcyNy0zMDkuOTcxNzI3IDAtMTcwLjkyMDc4OC0xMzguOTUxNjc5LTMwOS45Nzg4OS0zMDkuOTcxNzI3LTMwOS45Nzg4OTF6IG0wIDBcIiBwLWlkPVwiOTExNlwiPjwvcGF0aD48cGF0aCBkPVwiTTkyNC4wMjUwMzEgOTU3LjMxNDIwNWMtOC44MjM5NjkgMC0xNy42NDY5MTUtMy4zMzcwMDItMjQuMzIxOTQyLTEwLjExNTM4Mkw2ODAuMTM3Mzk1IDcyNy42MzUxNzVjLTEzLjQ1MzQwNy0xMy40NTM0MDctMTMuNDUzNDA3LTM1LjMwNzEzNCAwLTQ4Ljc2MDU0IDEzLjQ1MzQwNy0xMy40NTM0MDcgMzUuMzAwOTk0LTEzLjQ1MzQwNyA0OC43NTU0MjQgMGwyMTkuNTYzNjQ4IDIxOS41NjU2OTRjMTMuNDUzNDA3IDEzLjQ1MzQwNyAxMy40NTM0MDcgMzUuMzA1MDg3IDAgNDguNzU5NTE4LTYuNzc5NDA0IDYuNzc4MzgtMTUuNjAzMzczIDEwLjExNDM1OC0yNC40MzE0MzYgMTAuMTE0MzU4eiBtMCAwXCIgcC1pZD1cIjkxMTdcIj48L3BhdGg+PHBhdGggZD1cIk02MDIuMTA2MjA0IDQ4OC4wNDc0NzJIMjkwLjczMDUwMWMtMTYuNjc5ODkxIDAtMzAuMTMzMjk4LTEzLjQ1MzQwNy0zMC4xMzMyOTgtMzAuMTM1MzQ0IDAtMTYuNjg1MDA4IDEzLjQ1MzQwNy0zMC4xMzk0MzcgMzAuMTMzMjk4LTMwLjEzOTQzOGgzMTEuMjY1MTg2YzE2LjY4NzA1NCAwIDMwLjE0MDQ2MSAxMy40NTM0MDcgMzAuMTQwNDYxIDMwLjEzOTQzOCAwIDE2LjY4MTkzOC0xMy40NTQ0MyAzMC4xMzUzNDQtMzAuMDI5OTQ0IDMwLjEzNTM0NHogbTAgMFwiIHAtaWQ9XCI5MTE4XCI+PC9wYXRoPjwvc3ZnPlxuXHRcdDwvYnV0dG9uPlxuXHRcdDxidXR0b24gY2xhc3M9XCJ0b29sc0J0biByb3RhdGVMZWZ0XCIgdGl0bGU9XCLlkJHlt6bml4vovaxcIiAoY2xpY2spPVwicm90YXRlTGVmdCgpXCI+XG5cdFx0XHQ8c3ZnIHQ9XCIxNTg4OTQxMzU5MTM5XCIgY2xhc3M9XCJpY29uXCIgdmlld0JveD1cIjAgMCAxMDI0IDEwMjRcIiB2ZXJzaW9uPVwiMS4xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHAtaWQ9XCI5MzMzXCIgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCI+PHBhdGggZD1cIk0yOTYuNzg3NzUxNjUgODIyLjQyNzY0MzQ0YTI5LjI0OTE4MjM3IDI5LjI0OTE4MjM3IDAgMCAwIDExLjg4ODIyODY4IDkuNzQ5NzI3MjEgMzY2Ljc2NDUxMjQzIDM2Ni43NjQ1MTI0MyAwIDAgMCA0MjMuMDMyMzk2OTctMjkuMTgwMTk3OTNjMTYyLjE4MTE5NzQyLTEyNy40ODIyODU4NiAxOTYuMzc0MjI3NDYtMzYwLjU1NTk1OTAyIDc1LjEwMDQ5NS01MTguOTg5MDMwODhTNDU2LjMwMTU3MSAxMDAuOTQ3ODEwNDUgMjkyLjA3Mzg1MDA4IDIzMC4yOTI2NjIzNGE5MC4wNzAwMDYwOCA5MC4wNzAwMDYwOCAwIDAgMC0xMy4xNzU5Mjg3MyAxMC45Njg0NDM1OGMtMTIuNTc4MDY4NDUtMTUuODQzMzA2OC0yMy41MjM1MTY5Ny0zMC45OTY3NzUzNi0zMy44MjUxMTU4NC00My44MDQ3ODk5LTEyLjg3Njk5ODItMTYuOTcwMDQ0NDMtMjIuMDc0ODU0NTEtMzAuMjE0OTU3Ni0yNS43MDgwMDc4MS0zMy45NjMwODM5NWExOC4xNjU3NjU3NSAxOC4xNjU3NjU3NSAwIDAgMC0xNC41Nzg2MDE4Mi0xMC4wMDI2NjgzNSAxOS4zMzg0OTI3NiAxOS4zMzg0OTI3NiAwIDAgMC0yMS43MDY5NDAzMiAxNi4zOTUxNzg0N2wwLjM2NzkxNDIgMS4xNDk3MzE5My0xLjMzMzY4OTQ0IDIwLjY3MjE4MTQyLTE5LjQ5OTQ1NTE3IDEzNS42NjgzNzc1Ni0zLjE1MDI2NTMgMTguNzg2NjIxMDktMi43MTMzNjc0NCAxNi4wOTYyNDg3M2ExOS44MjEzNzk5OSAxOS44MjEzNzk5OSAwIDAgMCAzLjA1ODI4NjU2IDE0LjE0MTcwMzE5IDE2LjA5NjI0Nzk1IDE2LjA5NjI0Nzk1IDAgMCAwIDEyLjQ0MDEwMDM0IDcuMDgyMzQ5MTJsMTUuODY2MzAxODggMi4wMjM1Mjg0NCAxOC42MjU2NTg2OCAyLjMyMjQ1ODk2IDEzNC4wODE3NDc3NiAxMy43OTY3ODQwNiAxOS43NTIzOTU1NiAxLjkwODU1NTQgMS4xNDk3MzE5My0wLjM2NzkxNDJhMjEuMDg2MDg0OTggMjEuMDg2MDg0OTggMCAwIDAgMjEuMzg1MDE1NS0xNy42MzY4ODkxNSAxOC4zOTU3MTE4MyAxOC4zOTU3MTE4MyAwIDAgMC02LjQzODQ5ODcxLTE2LjcxNzEwMzI5Yy0yLjUyOTQxMDczLTQuMTYyMDI5OS0xMi44MzEwMDk2MS0xNi45NzAwNDQ0My0yNS42ODUwMTM1Mi0zMy45NDAwODk2NS04LjgyOTk0MjExLTEyLjA5NTE4MDQ2LTE5LjQ5OTQ1NTE4LTI2LjAwNjkzODM0LTMwLjE5MTk2MjUzLTM5Ljk2NDY4NDgxIDMuOTA5MDg4NzUtMy45MDkwODg3NSA5LjI2NjgzOTk3LTYuOTkwMzcwMzkgMTMuMTk4OTIzMDItMTAuOTIyNDUzNDUgMTMyLjMzNDE1NDc4LTEwNC4zOTU2NjY3NCAzMjAuMzM4MzMzODMtODUuNDk0MDcyNjIgNDE4LjUyNTQ0Nzk0IDQzLjIyOTkyMzE2YTMwNi41MTg1NTQ2OSAzMDYuNTE4NTU0NjkgMCAwIDEtNjEuMjU3NzIxNTYgNDIyLjk4NjQwNzU5IDI5OC4wNzk1MjE4NCAyOTguMDc5NTIxODQgMCAwIDEtMzQ5LjA1ODYzOTYxIDIwLjk0ODExNzYzIDMzLjk0MDA4ODg5IDMzLjk0MDA4ODg5IDAgMCAwLTM4LjQ5MzAyNzI4IDMuMzU3MjE3MDkgMzMuNzEwMTQyODEgMzMuNzEwMTQyODEgMCAwIDAtNi45NDQzODE3OCA0Ny45MjA4MzA0NHpcIiBmaWxsPVwiIzMzMzMzM1wiIHAtaWQ9XCI5MzM0XCI+PC9wYXRoPjwvc3ZnPlxuXHRcdDwvYnV0dG9uPlxuXHRcdDxidXR0b24gY2xhc3M9XCJ0b29sc0J0biByb3RhdGVSaWdodFwiIHRpdGxlPVwi5ZCR5Y+z5peL6L2sXCIgKGNsaWNrKT1cInJvdGF0ZVJpZ2h0KClcIj5cblx0XHRcdDxzdmcgdD1cIjE1ODg5NDEzODY2NzhcIiBjbGFzcz1cImljb25cIiB2aWV3Qm94PVwiMCAwIDEwMjQgMTAyNFwiIHZlcnNpb249XCIxLjFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgcC1pZD1cIjk0ODVcIiB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIj48cGF0aCBkPVwiTTcyNy4yOTc0NjQwNSA4MjIuNDI3NjQzNDRhMjkuMjQ5MTgyMzcgMjkuMjQ5MTgyMzcgMCAwIDEtMTEuOTExMjIzNzQgOS43NDk3MjcyMSAzNjYuNzY0NTEyNDMgMzY2Ljc2NDUxMjQzIDAgMCAxLTQyMi45ODY0MDc1OS0yOS4yMDMxOTMwMUMxMzAuMjQxNjI5NiA2NzUuNDkxODkyNTUgOTYuMDAyNjEwMTkgNDQyLjQ0MTIxMjkyIDIxNy4yNzYzNDM0MSAyODQuMDMxMTM2MTVzMzUwLjU3NjI4NTczLTE4My4xMjkzMTUwNiA1MTQuODQ5OTk1MjYtNTMuODA3NDU4MjZhOTAuMDcwMDA2MDggOTAuMDcwMDA2MDggMCAwIDEgMTMuMTUyOTM0NDMgMTAuOTY4NDQzNTljMTIuNTc4MDY4NDUtMTUuODIwMzEyNSAyMy41MjM1MTY5Ny0zMC45NzM3ODAyOSAzMy44NDgxMTAxNC00My43ODE3OTQ4MiAxMi44MzEwMDk2MS0xNi45NzAwNDQ0MyAyMi4wMjg4NjUxNC0zMC4yMTQ5NTc2IDI1LjcwODAwNzgyLTMzLjk2MzA4Mzk2YTE4LjE2NTc2NTc1IDE4LjE2NTc2NTc1IDAgMCAxIDE0LjU1NTYwNzUyLTEwLjA0ODY1NzcyIDE5LjMzODQ5Mjc2IDE5LjMzODQ5Mjc2IDAgMCAxIDIxLjcwNjk0MDMxIDE2LjM5NTE3ODQ2bC0wLjM0NDkxOTg4IDEuMTQ5NzMxOTQgMS4zMzM2ODk0MSAyMC42OTUxNzY0OSAxOS4zNjE0ODcwNiAxMzUuNzYwMzU2MzEgMy4xNzMyNjAzOCAxOC43ODY2MjExIDIuNzEzMzY3NDQgMTYuMDk2MjQ3OTNhMTkuODIxMzc5OTkgMTkuODIxMzc5OTkgMCAwIDEtMy4wNTgyODczMyAxNC4xNDE3MDM5NyAxNi4wOTYyNDc5NSAxNi4wOTYyNDc5NSAwIDAgMS0xMi40NDAxMDAzNSA3LjA1OTM1NDA1bC0xNS44ODkyOTYxNiAyLjA0NjUyMzUtMTguNTc5NjY5MzIgMi4yOTk0NjM4OS0xMzQuMTA0NzQyMDcgMTMuNzk2Nzg0MDctMTkuNzUyMzk2MzIgMS45MzE1NDk3LTEuMTQ5NzMxOTQtMC4zOTA5MDg1YTIxLjA4NjA4NDk4IDIxLjA4NjA4NDk4IDAgMCAxLTIxLjM4NTAxNTQ5LTE3LjYxMzg5NDg1IDE4LjM5NTcxMTgzIDE4LjM5NTcxMTgzIDAgMCAxIDYuNDM4NDk5NDktMTYuNzE3MTAzM2MyLjUwNjQxNTY2LTQuMTg1MDI0MiAxMi44MzEwMDk2MS0xNi45NzAwNDQ0MyAyNS42ODUwMTM1MS0zMy45NDAwODg4NyA4LjgyOTk0MjExLTEyLjExODE3NTUyIDE5LjQ5OTQ1NTE4LTI2LjAyOTkzMjY0IDMwLjE5MTk2MjU1LTM5Ljk2NDY4NDgxLTMuOTA5MDg4NzUtMy45MDkwODg3NS05LjI2NjgzOTk3LTcuMDEzMzY1NDUtMTMuMTk4OTIzODEtMTAuOTQ1NDQ4NTItMTMyLjMzNDE1NDc4LTEwNC4zOTU2NjY3NC0zMjAuMzM4MzMzODMtODUuNDk0MDcyNjItNDE4LjUyNTQ0NzE3IDQzLjIyOTkyMzE2QTMwNi41MTg1NTQ2OSAzMDYuNTE4NTU0NjkgMCAwIDAgMzMyLjg3MDM5OTgzIDc1MC40NTQ0MTk0M2EyOTguMDc5NTIxODQgMjk4LjA3OTUyMTg0IDAgMCAwIDM0OC45ODk2NTUxNiAyMC43NDExNjU4NiAzMy45NDAwODg4OSAzMy45NDAwODg4OSAwIDAgMSAzOC41MTYwMjIzNCAzLjM4MDIxMjE2IDMzLjcxMDE0MjgxIDMzLjcxMDE0MjgxIDAgMCAxIDYuOTQ0MzgxOCA0Ny45MjA4Mjk2NnpcIiBmaWxsPVwiIzMzMzMzM1wiIHAtaWQ9XCI5NDg2XCI+PC9wYXRoPjwvc3ZnPlxuXHRcdDwvYnV0dG9uPlxuXHRcdDxidXR0b24gY2xhc3M9XCJ0b29sc0J0biBmbGlwVmVydGljYWxcIiB0aXRsZT1cIuWeguebtOe/u+i9rFwiIChjbGljayk9XCJmbGlwVmVydGljYWwoKVwiPlxuXHRcdFx0PHN2ZyB0PVwiMTU4ODk0MTQxMTU1OVwiIGNsYXNzPVwiaWNvblwiIHZpZXdCb3g9XCIwIDAgMTAyNCAxMDI0XCIgdmVyc2lvbj1cIjEuMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBwLWlkPVwiOTY2OVwiIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiPjxwYXRoIGQ9XCJNNDk0LjAzIDc0LjcybC0xMDkuNTkgMTQ0LjA5Yy0xMi40OCAxNi40MS01LjgyIDI5Ljk3IDE0Ljc5MDAwMDAxIDMwLjA5TDQ4MiAyNDkuNDcgNDgyIDc3NC41M2wtODIuNzcgMC41NGMtMjAuNjQgMC4xNS0yNy4yNyAxMy42OC0xNC43OSAzMC4wOWwxMDkuNTkgMTQ0LjA5YzEyLjQ4IDE2LjQxIDMyLjQzIDE2LjA1IDQ0LjMxMDAwMDAxLTAuODFsMTAxLjgxOTk5OTk5LTE0NC41MWMxMS44OC0xNi44NiA0Ljc0LTMwLjU0LTE1LjktMzAuMzlMNTQyLjAwMDAwMDAxIDc3NC4xNGwtMWUtOC01MjQuMjUgODIuMjMgMC41NGMyMC42NCAwLjE1IDI3Ljc4LTEzLjUzIDE1LjktMzAuMzlsLTEwMS44Mi0xNDQuNTFjLTExLjg4LTE2Ljg2LTMxLjgtMTcuMjUtNDQuMjgtMC44MXpcIiBwLWlkPVwiOTY3MFwiPjwvcGF0aD48L3N2Zz5cblx0XHQ8L2J1dHRvbj5cblx0XHQ8YnV0dG9uIGNsYXNzPVwidG9vbHNCdG4gZmxpcEhvcml6b250YWxcIiB0aXRsZT1cIuawtOW5s+e/u+i9rFwiIChjbGljayk9XCJmbGlwSG9yaXpvbnRhbCgpXCI+XG5cdFx0XHQ8c3ZnIHQ9XCIxNTg4OTQxNDMxNjM2XCIgY2xhc3M9XCJpY29uXCIgdmlld0JveD1cIjAgMCAxMDI0IDEwMjRcIiB2ZXJzaW9uPVwiMS4xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHAtaWQ9XCI5ODg1XCIgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCI+PHBhdGggZD1cIk05NzguNDMyIDQ5Mi44MzJsLTE1My42OTYtMTE2Ljg5NmMtMTcuNTA0LTEzLjMxMi0zMS45NjgtNi4yMDgtMzIuMDk2IDE1Ljc3Nkw3OTIuMDMyIDQ4MEgyMzEuOTY4bC0wLjYwOC04OC4yODhjLTAuMTYtMjIuMDE2LTE0LjU5Mi0yOS4wODgtMzIuMDk2LTE1Ljc3NmwtMTUzLjY5NiAxMTYuODk2Yy0xNy41MDQgMTMuMzEyLTE3LjEyIDM0LjU5MiAwLjg2NCA0Ny4yNjRsMTU0LjE0NCAxMDguNjA4YzE3Ljk4NCAxMi42NzIgMzIuNTc2IDUuMDU2IDMyLjQxNi0xNi45NkwyMzIuMzg0IDU0NGg1NTkuMmwtMC41NzYgODcuNzEyYy0wLjE2IDIyLjAxNiAxNC40MzIgMjkuNjMyIDMyLjQxNiAxNi45NmwxNTQuMTQ0LTEwOC42MDhjMTcuOTg0LTEyLjY3MiAxOC40LTMzLjkyIDAuODY0LTQ3LjIzMnpcIiBwLWlkPVwiOTg4NlwiPjwvcGF0aD48L3N2Zz5cblx0XHQ8L2J1dHRvbj5cblx0XHQ8YnV0dG9uIGNsYXNzPVwidG9vbHNCdG4gaW1hZ2VSZXNldFwiIHRpdGxlPVwi6YeN572uXCIgKGNsaWNrKT1cImN1cnJlbnRJbWdSZXNldCgpXCI+XG5cdFx0XHQ8c3ZnIHQ9XCIxNTg4OTQxNDQ1MDY2XCIgY2xhc3M9XCJpY29uXCIgdmlld0JveD1cIjAgMCAxMDI0IDEwMjRcIiB2ZXJzaW9uPVwiMS4xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHAtaWQ9XCIxMDA3MlwiIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiPjxwYXRoIGQ9XCJNNjY2LjEgNzMxLjRjLTQ4LjYgMzUtMTA1LjYgNTIuNS0xNjMuOCA1MS44LTcuNy0wLjEtMTUuMy0wLjctMjIuOS0xLjMtMy4xLTAuMy02LjEtMC44LTkuMi0xLjMtNi0wLjgtMTEuOS0xLjUtMTcuNy0yLjgtMy42LTAuNi03LjItMS43LTEwLjYtMi41LTUuNy0xLjMtMTEuNC0yLjYtMTYuOS00LjMtMi42LTEtNS4xLTEuOS03LjgtMy02LjUtMi4xLTEyLjktNC40LTE5LTctMS40LTAuNi0yLjgtMS4yLTQuMS0xLjctNy4yLTMuNC0xNC40LTYuOS0yMS4zLTEwLjYtMC4zLTAuMi0wLjYtMC4zLTAuOS0wLjUtMjMuNS0xMy4zLTQ0LjktMjkuNi02My43LTQ5LTAuMy0wLjMtMC42LTAuNy0wLjktMS01LjgtNi0xMS40LTEyLjItMTYuNy0xOC45LTEuMS0xLjQtMi4xLTIuNy0zLjMtNC4zLTM4LjItNDkuMS02MS4yLTExMS4zLTYxLjItMTc4LjhoNzMuNkwxODIgMzE0LjcgNjQuMiA0OTYuMWg3My41YzAgNzkuNCAyNC4yIDE1My4xIDY1LjIgMjE0LjIgMC41IDAuOSAwLjggMS45IDEuNCAyLjYgNC4yIDYuMyA5IDEyIDEzLjUgMTcuOCAxLjggMi4xIDMuMyA0LjMgNS4xIDYuNyA2LjYgOC4yIDEzLjkgMTYuMSAyMS4xIDIzLjggMC44IDAuOCAxLjQgMS40IDIgMi4xIDI0LjcgMjUuNCA1Mi40IDQ2LjYgODIuNyA2My44IDAuOCAwLjUgMS41IDAuOCAyLjQgMS40IDguNyA0LjggMTcuNyA5LjMgMjYuNyAxMy4zIDIuMyAxIDQuNSAyLjEgNi43IDMgNy44IDMuNCAxNS44IDYuMiAyMy44IDkuMSAzLjggMS40IDcuNSAyLjYgMTEuNCAzLjkgNyAyLjEgMTQuMiAzLjkgMjEuNSA1LjYgNC44IDEuMiA5LjUgMi40IDE0LjQgMy40IDIgMC41IDMuOSAxLjIgNS45IDEuNCA2LjkgMS4zIDEzLjcgMS45IDIwLjUgMi44IDIuNSAwLjUgNSAwLjkgNy40IDEuMiAxMi4zIDEuMiAyNC41IDIgMzYuOCAyIDc0LjcgMCAxNDcuNy0yMy41IDIxMC4zLTY4LjUgMTkuOS0xNC40IDI0LjgtNDIuNyAxMC45LTYzLjEtMTMuOS0yMC44LTQxLjMtMjUuNy02MS4zLTExLjJ6IG0yMTkuNS0yMDYuNmMwLTc5LjMtMjMuOS0xNTIuOS02NC43LTIxMy42LTAuNi0xLTEtMi4xLTEuNS0zLTUuMy03LjUtMTAuNy0xNC40LTE2LjItMjEuNS0wLjYtMC44LTEuMy0xLjctMS44LTIuNi0zNy41LTQ2LjQtODQuNC04Mi40LTEzNy40LTEwNi0xLjYtMC42LTIuOS0xLjQtNC41LTItOC41LTMuNi0xNy4yLTYuNy0yNi05LjgtMy0xLTYuMi0yLjItOS4zLTMuMi03LjctMi40LTE1LjMtNC4zLTIzLjEtNi4yLTQuMy0xLTguNy0yLjEtMTMtMy0yLjEtMC40LTQuMS0xLTYuMy0xLjUtNS44LTEtMTEuNS0xLjUtMTcuNC0yLjMtNC4xLTAuNS04LTEuMS0xMi0xLjUtOS44LTEtMTkuNS0xLjQtMjkuMi0xLjUtMS44IDAtMy41LTAuMy01LjMtMC4zLTAuMyAwLTAuNiAwLjEtMC45IDAuMS03NC42IDAuMS0xNDcuNSAyMy4yLTIxMCA2OC4zLTE5LjkgMTQuMy0yNC44IDQyLjYtMTAuOCA2My4yIDEzLjkgMjAuNCA0MS41IDI1LjUgNjEuNSAxMSA0OC4yLTM0LjcgMTA0LjYtNTIuMyAxNjIuMy01MS44IDguMyAwLjEgMTYuNiAwLjUgMjQuNiAxLjMgMi41IDAuMiA0LjkgMC42IDcuNCAxIDYuNiAwLjggMTMuMiAxLjcgMTkuOCAzLjIgMi44IDAuNSA1LjcgMS4zIDguNCAxLjkgNi41IDEuNSAxMi43IDMgMTguOSA1IDIuMSAwLjYgNCAxLjMgNS44IDIuMSA3LjIgMi40IDE0LjIgNC45IDIxIDcuOSAwLjggMC4yIDEuNCAwLjggMi4xIDEgNDEuMiAxOC4yIDc3LjMgNDYuMSAxMDUuNSA4MS4yIDAuMSAwLjEgMC4yIDAuNCAwLjQgMC42IDM5LjYgNDkuNiA2My41IDExMyA2My41IDE4MmgtNzMuN2wxMTcuOSAxODEuNSAxMTcuNi0xODEuNWgtNzMuNnpcIiBwLWlkPVwiMTAwNzNcIj48L3BhdGg+PC9zdmc+XG5cdFx0PC9idXR0b24+XG5cdDwvZGl2PlxuPC9kaXY+XG4iXX0=