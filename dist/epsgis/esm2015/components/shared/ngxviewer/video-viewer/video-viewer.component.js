import { __decorate } from "tslib";
import { Component, ViewChild } from '@angular/core';
import { Input, Output, EventEmitter } from "@angular/core";
import { ComponentRegister } from '../../../../decorator/component-register.decorator';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
import * as i2 from "@angular/common";
const _c0 = ["videoToolbar"];
const _c1 = function (a0, a1) { return { "label-default": a0, "label-primary": a1 }; };
function VideoViewerComponent_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 9);
    i0.ɵɵlistener("click", function VideoViewerComponent_span_1_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r7); const video_r4 = ctx.$implicit; const i_r5 = ctx.index; const ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.selectVideo(video_r4, i_r5); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r5 = ctx.index;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(2, _c1, i_r5 != ctx_r0.sub, i_r5 == ctx_r0.sub));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("\u89C6\u9891", i_r5 + 1, " ");
} }
const _c2 = function (a0, a1) { return { "fa-repeat": a0, "fa-play-circle-o": a1 }; };
function VideoViewerComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "span", 10);
    i0.ɵɵlistener("click", function VideoViewerComponent_div_7_Template_span_click_1_listener() { i0.ɵɵrestoreView(_r9); const ctx_r8 = i0.ɵɵnextContext(); return ctx_r8.playOrPause(); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(2, _c2, ctx_r2.videoElem.ended, !ctx_r2.videoElem.ended))("title", ctx_r2.videoElem.ended ? "\u91CD\u64AD" : "\u64AD\u653E");
} }
function VideoViewerComponent_div_8_span_11_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 29);
    i0.ɵɵlistener("click", function VideoViewerComponent_div_8_span_11_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r15); const ctx_r14 = i0.ɵɵnextContext(2); return ctx_r14.playOrPause(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r11 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("title", ctx_r11.videoElem.ended ? "\u91CD\u64AD" : "\u64AD\u653E");
} }
function VideoViewerComponent_div_8_span_12_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 30);
    i0.ɵɵlistener("click", function VideoViewerComponent_div_8_span_12_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r17); const ctx_r16 = i0.ɵɵnextContext(2); return ctx_r16.playOrPause(); });
    i0.ɵɵelementEnd();
} }
const _c3 = function (a0, a1, a2) { return { "fa-volume-down": a0, "fa-volume-up": a1, "fa-volume-off": a2 }; };
function VideoViewerComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 11, 12);
    i0.ɵɵelementStart(2, "div", 13);
    i0.ɵɵelementStart(3, "span", 14);
    i0.ɵɵlistener("mousedown", function VideoViewerComponent_div_8_Template_span_mousedown_3_listener($event) { i0.ɵɵrestoreView(_r19); const ctx_r18 = i0.ɵɵnextContext(); return ctx_r18.progressBallDragStart($event); })("mousemove", function VideoViewerComponent_div_8_Template_span_mousemove_3_listener($event) { i0.ɵɵrestoreView(_r19); const ctx_r20 = i0.ɵɵnextContext(); return ctx_r20.progressBallDrag($event); })("mouseup", function VideoViewerComponent_div_8_Template_span_mouseup_3_listener($event) { i0.ɵɵrestoreView(_r19); const ctx_r21 = i0.ɵɵnextContext(); return ctx_r21.progressBallDragEnd($event); })("mouseleave", function VideoViewerComponent_div_8_Template_span_mouseleave_3_listener($event) { i0.ɵɵrestoreView(_r19); const ctx_r22 = i0.ɵɵnextContext(); return ctx_r22.progressBallDragEnd($event); });
    i0.ɵɵelementStart(4, "span");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 15);
    i0.ɵɵlistener("mousemove", function VideoViewerComponent_div_8_Template_div_mousemove_6_listener($event) { i0.ɵɵrestoreView(_r19); const ctx_r23 = i0.ɵɵnextContext(); return ctx_r23.videoToolbarProgressMove($event); })("click", function VideoViewerComponent_div_8_Template_div_click_6_listener($event) { i0.ɵɵrestoreView(_r19); const ctx_r24 = i0.ɵɵnextContext(); return ctx_r24.videoToolbarProgressClick($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 16);
    i0.ɵɵlistener("mousemove", function VideoViewerComponent_div_8_Template_div_mousemove_7_listener($event) { i0.ɵɵrestoreView(_r19); const ctx_r25 = i0.ɵɵnextContext(); return ctx_r25.videoToolbarProgressMove($event); })("click", function VideoViewerComponent_div_8_Template_div_click_7_listener($event) { i0.ɵɵrestoreView(_r19); const ctx_r26 = i0.ɵɵnextContext(); return ctx_r26.videoToolbarProgressClick($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "span", 17);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "div", 18);
    i0.ɵɵtemplate(11, VideoViewerComponent_div_8_span_11_Template, 1, 1, "span", 19);
    i0.ɵɵtemplate(12, VideoViewerComponent_div_8_span_12_Template, 1, 0, "span", 20);
    i0.ɵɵelementStart(13, "span", 21);
    i0.ɵɵelementStart(14, "span");
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "div", 22);
    i0.ɵɵelementStart(18, "span", 23);
    i0.ɵɵlistener("click", function VideoViewerComponent_div_8_Template_span_click_18_listener() { i0.ɵɵrestoreView(_r19); const ctx_r27 = i0.ɵɵnextContext(); return ctx_r27.isMuted(); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "span", 24, 25);
    i0.ɵɵelementStart(21, "span", 26);
    i0.ɵɵlistener("mousedown", function VideoViewerComponent_div_8_Template_span_mousedown_21_listener($event) { i0.ɵɵrestoreView(_r19); const ctx_r28 = i0.ɵɵnextContext(); return ctx_r28.volumeBallDragStart($event); })("mousemove", function VideoViewerComponent_div_8_Template_span_mousemove_21_listener($event) { i0.ɵɵrestoreView(_r19); const _r13 = i0.ɵɵreference(20); const ctx_r29 = i0.ɵɵnextContext(); return ctx_r29.volumeBallDrag($event, _r13.clientWidth); })("mouseup", function VideoViewerComponent_div_8_Template_span_mouseup_21_listener($event) { i0.ɵɵrestoreView(_r19); const ctx_r30 = i0.ɵɵnextContext(); return ctx_r30.volumeBallDragEnd($event); })("mouseleave", function VideoViewerComponent_div_8_Template_span_mouseleave_21_listener($event) { i0.ɵɵrestoreView(_r19); const ctx_r31 = i0.ɵɵnextContext(); return ctx_r31.volumeBallDragEnd($event); });
    i0.ɵɵelementStart(22, "span");
    i0.ɵɵtext(23);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "span", 27);
    i0.ɵɵlistener("click", function VideoViewerComponent_div_8_Template_span_click_24_listener($event) { i0.ɵɵrestoreView(_r19); const _r13 = i0.ɵɵreference(20); const ctx_r32 = i0.ɵɵnextContext(); return ctx_r32.volumeValClick($event, _r13.clientWidth); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "span", 28);
    i0.ɵɵlistener("click", function VideoViewerComponent_div_8_Template_span_click_25_listener($event) { i0.ɵɵrestoreView(_r19); const _r13 = i0.ɵɵreference(20); const ctx_r33 = i0.ɵɵnextContext(); return ctx_r33.volumeValClick($event, _r13.clientWidth); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r10 = i0.ɵɵreference(1);
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵstyleProp("height", ctx_r3.videoToolbarProgressHeight + "px");
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("left", ctx_r3.play_progress + "px")("margin-left", ctx_r3.play_progress > 16 ? "-16px" : "0")("opacity", ctx_r3.showProgressBall ? 1 : 0);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r3.getFormatTime(ctx_r3.play_progress / _r10.clientWidth * ctx_r3.videoElem.duration), " ");
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("width", ctx_r3.play_progress + "px");
    i0.ɵɵadvance(2);
    i0.ɵɵstyleProp("left", ctx_r3.timeTipOffsetX - 16 + "px");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r3.timeTip, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r3.videoElem.paused);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r3.videoElem.paused);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r3.currentTime);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("\u00A0/\u00A0", ctx_r3.totalTime, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction3(24, _c3, ctx_r3.videoElem.volume > 0 && ctx_r3.videoElem.volume < 0.5, ctx_r3.videoElem.volume >= 0.5, ctx_r3.videoElem.volume == 0));
    i0.ɵɵadvance(3);
    i0.ɵɵstyleProp("left", ctx_r3.videoElem.volume * 100 - 8 + "px");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", (ctx_r3.videoElem.volume * 100).toFixed(0) + "%", " ");
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("width", ctx_r3.videoElem.volume * 100 + "px");
} }
let VideoViewerComponent = class VideoViewerComponent {
    constructor(domSanitizer) {
        this.domSanitizer = domSanitizer;
        this.width = 0;
        this.videoWidth = 0;
        this.height = 0;
        this.source = [];
        this.ready = new EventEmitter(false);
        this.sub = 0;
        this.play_progress = 0;
        this.videoToolbarProgressHeight = 3;
        this.preVolume = 1;
        this.showProgressBall = false;
        this.progressBallDragStartClientX = 0;
        this.isProgressBallStartMove = false;
        this.volumeBallDragStartClientX = 0;
        this.isVolumeBallStartMove = false;
        this.timeTipOffsetX = 0;
    }
    ngOnInit() {
        this.videoUrl = this.source[0];
        this.ready.emit('video viewer initialize!');
    }
    onLoadedmetadata(e) {
        this.videoElem = e.target;
        this.totalTime = this.getFormatTime(this.videoElem.duration);
        this.currentTime = this.getFormatTime(this.videoElem.currentTime);
    }
    OnPlayEnded(e) {
        console.log(`播放结束：${this.videoElem.ended}`);
    }
    onPlay(e) {
        console.log('play');
    }
    onTimeupdate(e) {
        this.currentTime = this.getFormatTime(this.videoElem.currentTime);
        this.play_progress = this.videoElem.currentTime / this.videoElem.duration * this.videoToolbar.nativeElement.clientWidth;
    }
    onProgress(e) {
        console.log('progress');
    }
    onCanplaythrough(e) {
        console.log('canplaythrough');
    }
    videoToolbarProgressClick(e) {
        this.play_progress = e.offsetX;
        let tempCurrentTime = this.play_progress / this.videoToolbar.nativeElement.clientWidth * this.videoElem.duration;
        this.videoElem.currentTime = tempCurrentTime;
        this.currentTime = this.getFormatTime(tempCurrentTime);
    }
    videoToolbarProgressMove(e) {
        let tempCurrentTime = e.offsetX / this.videoToolbar.nativeElement.clientWidth * this.videoElem.duration;
        this.timeTipOffsetX = e.offsetX;
        this.timeTip = this.getFormatTime(tempCurrentTime);
    }
    progressBallDragStart(e) {
        e.stopPropagation();
        this.progressBallDragStartClientX = e.clientX;
        this.isProgressBallStartMove = true;
    }
    progressBallDrag(e) {
        e.stopPropagation();
        if (this.isProgressBallStartMove) {
            let offsetX = e.clientX - this.progressBallDragStartClientX;
            this.progressBallDragStartClientX = e.clientX;
            this.play_progress = (this.play_progress + offsetX);
            if (this.play_progress >= this.videoToolbar.nativeElement.clientWidth) {
                this.play_progress = this.videoToolbar.nativeElement.clientWidth;
            }
            else if (this.play_progress <= 0) {
                this.play_progress = 0;
            }
            let tempCurrentTime = this.play_progress / this.videoToolbar.nativeElement.clientWidth * this.videoElem.duration;
            this.videoElem.currentTime = tempCurrentTime;
            this.currentTime = this.getFormatTime(tempCurrentTime);
        }
    }
    progressBallDragEnd(e) {
        e.stopPropagation();
        this.isProgressBallStartMove = false;
    }
    volumeValClick(e, width) {
        console.log(e.offsetX);
        this.videoElem.volume = e.offsetX / width;
    }
    volumeBallDragStart(e) {
        e.stopPropagation();
        this.volumeBallDragStartClientX = e.clientX;
        this.isVolumeBallStartMove = true;
    }
    volumeBallDrag(e, width) {
        e.stopPropagation();
        if (this.isVolumeBallStartMove) {
            let offsetX = e.clientX - this.volumeBallDragStartClientX;
            this.volumeBallDragStartClientX = e.clientX;
            let volume = this.videoElem.volume + offsetX / width;
            if (volume <= 0) {
                this.videoElem.volume = 0;
            }
            else if (volume >= 1) {
                this.videoElem.volume = 1;
            }
            else {
                this.videoElem.volume = volume;
            }
        }
    }
    volumeBallDragEnd(e) {
        e.stopPropagation();
        this.isVolumeBallStartMove = false;
    }
    videoMouseover(e) {
        this.videoToolbarProgressHeight = 16;
        this.showProgressBall = true;
    }
    videoMouseout(e) {
        this.videoToolbarProgressHeight = 3;
        this.showProgressBall = false;
    }
    play() {
        this.videoElem.ended && (this.videoElem.currentTime = 0);
        this.videoElem.play();
    }
    pause() {
        this.videoElem.pause();
    }
    playOrPause() {
        this.videoElem.paused ? this.play() : this.pause();
    }
    selectVideo(path, i) {
        this.sub = JSON.parse(JSON.stringify(i));
        this.videoUrl = path;
        this.videoElem.load();
    }
    isMuted() {
        if (this.videoElem.muted) {
            this.videoElem.muted = false;
            this.videoElem.volume = this.preVolume;
        }
        else {
            this.videoElem.muted = true;
            this.preVolume = this.videoElem.volume;
            this.videoElem.volume = 0;
        }
    }
    getFormatTime(value) {
        let h = parseInt(value / 3600 + '') < 10 ? '0' + parseInt(value / 3600 + '') : '' + parseInt(value / 3600 + ''), m = parseInt(value % 3600 / 60 + '') < 10 ? '0' + parseInt(value % 3600 / 60 + '') : '' + parseInt(value % 3600 / 60 + ''), s;
        if (value >= 60) {
            s = value % 3600 % 60 < 10 ? '0' + parseInt(value % 3600 % 60 + '') : '' + parseInt(value % 3600 % 60 + '');
        }
        else if (value < 60 && value >= 10) {
            s = '' + parseInt(value + '');
        }
        else if (value < 10) {
            s = '0' + parseInt(value + '');
        }
        return `${h}:${m}:${s}`;
    }
};
VideoViewerComponent.ɵfac = function VideoViewerComponent_Factory(t) { return new (t || VideoViewerComponent)(i0.ɵɵdirectiveInject(i1.DomSanitizer)); };
VideoViewerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: VideoViewerComponent, selectors: [["video-viewer"]], viewQuery: function VideoViewerComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 3);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.videoToolbar = _t.first);
    } }, inputs: { width: "width", videoWidth: "videoWidth", height: "height", source: "source", poster: "poster" }, outputs: { ready: "ready" }, decls: 9, vars: 8, consts: [[1, "video-list"], ["class", "label", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "videoViewerContainer", 3, "mouseover", "mouseout"], ["videoViewerContainer", ""], [1, "videoViewer"], [3, "width", "poster", "click", "loadedmetadata", "ended", "timeupdate", "progress", "canplaythrough", "play"], ["type", "video/mp4", 3, "src"], [4, "ngIf"], ["class", "videoToolbar", 4, "ngIf"], [1, "label", 3, "ngClass", "click"], [1, "fa", 3, "ngClass", "title", "click"], [1, "videoToolbar"], ["videoToolbar", ""], [1, "videoToolbar_progress"], [1, "progress_val_ball", 3, "mousedown", "mousemove", "mouseup", "mouseleave"], [1, "videoToolbar_play_progress", 3, "mousemove", "click"], [1, "videoToolbar_buffer_progress", 3, "mousemove", "click"], [1, "timeTip"], [1, "videoToolbar_play_btn"], ["class", "playBtn fa fa-play-circle-o", "aria-hidden", "true", 3, "title", "click", 4, "ngIf"], ["class", "playBtn fa fa-pause-circle-o", "aria-hidden", "true", "title", "\u6682\u505C", 3, "click", 4, "ngIf"], [1, "playTime"], [1, "videoToolbar_volume_btn"], ["aria-hidden", "true", "title", "\u9759\u97F3\u8BBE\u7F6E", 1, "mutedBtn", "fa", 3, "ngClass", "click"], [1, "volume_val"], ["volume_val", ""], [1, "volume_val_ball", 3, "mousedown", "mousemove", "mouseup", "mouseleave"], [1, "volume_val_active", 3, "click"], [1, "volume_val_notActive", 3, "click"], ["aria-hidden", "true", 1, "playBtn", "fa", "fa-play-circle-o", 3, "title", "click"], ["aria-hidden", "true", "title", "\u6682\u505C", 1, "playBtn", "fa", "fa-pause-circle-o", 3, "click"]], template: function VideoViewerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "p", 0);
        i0.ɵɵtemplate(1, VideoViewerComponent_span_1_Template, 2, 5, "span", 1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "div", 2, 3);
        i0.ɵɵlistener("mouseover", function VideoViewerComponent_Template_div_mouseover_2_listener($event) { return ctx.videoMouseover($event); })("mouseout", function VideoViewerComponent_Template_div_mouseout_2_listener($event) { return ctx.videoMouseout($event); });
        i0.ɵɵelementStart(4, "div", 4);
        i0.ɵɵelementStart(5, "video", 5);
        i0.ɵɵlistener("click", function VideoViewerComponent_Template_video_click_5_listener() { return ctx.playOrPause(); })("loadedmetadata", function VideoViewerComponent_Template_video_loadedmetadata_5_listener($event) { return ctx.onLoadedmetadata($event); })("ended", function VideoViewerComponent_Template_video_ended_5_listener($event) { return ctx.OnPlayEnded($event); })("timeupdate", function VideoViewerComponent_Template_video_timeupdate_5_listener($event) { return ctx.onTimeupdate($event); })("progress", function VideoViewerComponent_Template_video_progress_5_listener($event) { return ctx.onProgress($event); })("canplaythrough", function VideoViewerComponent_Template_video_canplaythrough_5_listener($event) { return ctx.onCanplaythrough($event); })("play", function VideoViewerComponent_Template_video_play_5_listener($event) { return ctx.onPlay($event); });
        i0.ɵɵelement(6, "source", 6);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(7, VideoViewerComponent_div_7_Template, 2, 5, "div", 7);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(8, VideoViewerComponent_div_8_Template, 26, 28, "div", 8);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.source);
        i0.ɵɵadvance(1);
        i0.ɵɵstyleProp("width", ctx.width + "px");
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("width", ctx.videoWidth)("poster", ctx.poster, i0.ɵɵsanitizeUrl);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("src", ctx.videoUrl, i0.ɵɵsanitizeUrl);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.videoElem && ctx.videoElem.paused);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.videoElem);
    } }, directives: [i2.NgForOf, i2.NgIf, i2.NgClass], styles: ["p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{cursor:pointer;margin-right:6px}.videoViewerContainer[_ngcontent-%COMP%]{position:relative;margin:0;padding:0;height:100%;min-width:200px;min-height:200px;background-color:#3e3e3e}.videoViewerContainer[_ngcontent-%COMP%]   .videoViewer[_ngcontent-%COMP%]{position:relative;margin-bottom:53px}.videoViewerContainer[_ngcontent-%COMP%]   .videoViewer[_ngcontent-%COMP%]   video[_ngcontent-%COMP%]{display:block;margin-left:50%;transform:translateX(-50%)}.videoViewerContainer[_ngcontent-%COMP%]   .videoViewer[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{position:absolute;top:0;left:0;bottom:0;right:0;background:rgba(62,62,62,.5)}.videoViewerContainer[_ngcontent-%COMP%]   .videoViewer[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:80px;position:absolute;left:50%;top:50%;margin-left:-40px;margin-top:-40px;color:#e2e2e2;transition:color .8s}.videoViewerContainer[_ngcontent-%COMP%]   .videoViewer[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover{color:#4bcef2;cursor:pointer}.videoViewerContainer[_ngcontent-%COMP%]   .videoToolbar[_ngcontent-%COMP%]{position:absolute;width:100%;left:0;bottom:0;font-size:40px;color:#bfb9b9}.videoViewerContainer[_ngcontent-%COMP%]   .videoToolbar[_ngcontent-%COMP%]   .videoToolbar_play_btn[_ngcontent-%COMP%]{float:left;padding:0 10px}.videoViewerContainer[_ngcontent-%COMP%]   .videoToolbar[_ngcontent-%COMP%]   .videoToolbar_play_btn[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{display:inline-block;margin-right:20px}.videoViewerContainer[_ngcontent-%COMP%]   .videoToolbar[_ngcontent-%COMP%]   .videoToolbar_play_btn[_ngcontent-%COMP%] > span.playBtn[_ngcontent-%COMP%]:hover{color:#45bdde;cursor:pointer}.videoViewerContainer[_ngcontent-%COMP%]   .videoToolbar[_ngcontent-%COMP%]   .videoToolbar_play_btn[_ngcontent-%COMP%] > span.playTime[_ngcontent-%COMP%]{font-size:.5em;vertical-align:middle}.videoViewerContainer[_ngcontent-%COMP%]   .videoToolbar[_ngcontent-%COMP%]   .videoToolbar_play_btn[_ngcontent-%COMP%] > span.playTime[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#e2e2e2}.videoViewerContainer[_ngcontent-%COMP%]   .videoToolbar[_ngcontent-%COMP%]   .videoToolbar_volume_btn[_ngcontent-%COMP%]{float:right;padding:0 15px}.videoViewerContainer[_ngcontent-%COMP%]   .videoToolbar[_ngcontent-%COMP%]   .videoToolbar_volume_btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-block;cursor:pointer;font-size:.8em}.videoViewerContainer[_ngcontent-%COMP%]   .videoToolbar[_ngcontent-%COMP%]   .videoToolbar_volume_btn[_ngcontent-%COMP%]   span.mutedBtn[_ngcontent-%COMP%]{height:32px;width:32px;text-align:left;line-height:32px}.videoViewerContainer[_ngcontent-%COMP%]   .videoToolbar[_ngcontent-%COMP%]   .videoToolbar_volume_btn[_ngcontent-%COMP%]   span.volume_val[_ngcontent-%COMP%]{position:relative;width:100px;margin-bottom:3px;height:6px;vertical-align:middle;cursor:pointer}.videoViewerContainer[_ngcontent-%COMP%]   .videoToolbar[_ngcontent-%COMP%]   .videoToolbar_volume_btn[_ngcontent-%COMP%]   span.volume_val[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{width:100%;height:100%;position:absolute;border-radius:2px}.videoViewerContainer[_ngcontent-%COMP%]   .videoToolbar[_ngcontent-%COMP%]   .videoToolbar_volume_btn[_ngcontent-%COMP%]   span.volume_val[_ngcontent-%COMP%] > span.volume_val_ball[_ngcontent-%COMP%]{bottom:0;height:16px;width:16px;border-radius:16px;background:#e2e2e2;z-index:3;margin-bottom:-5px}.videoViewerContainer[_ngcontent-%COMP%]   .videoToolbar[_ngcontent-%COMP%]   .videoToolbar_volume_btn[_ngcontent-%COMP%]   span.volume_val[_ngcontent-%COMP%] > span.volume_val_ball[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:absolute;display:none;font-size:12px;top:-25px;left:-8px;padding:2px;background:#000;color:#fff}.videoViewerContainer[_ngcontent-%COMP%]   .videoToolbar[_ngcontent-%COMP%]   .videoToolbar_volume_btn[_ngcontent-%COMP%]   span.volume_val[_ngcontent-%COMP%] > span.volume_val_ball[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]{display:inline-block}.videoViewerContainer[_ngcontent-%COMP%]   .videoToolbar[_ngcontent-%COMP%]   .videoToolbar_volume_btn[_ngcontent-%COMP%]   span.volume_val[_ngcontent-%COMP%] > span.volume_val_active[_ngcontent-%COMP%]{z-index:2;background:#45bdde}.videoViewerContainer[_ngcontent-%COMP%]   .videoToolbar[_ngcontent-%COMP%]   .videoToolbar_volume_btn[_ngcontent-%COMP%]   span.volume_val[_ngcontent-%COMP%] > span.volume_val_notActive[_ngcontent-%COMP%]{z-index:1;background:#989393}.videoViewerContainer[_ngcontent-%COMP%]   .videoToolbar[_ngcontent-%COMP%]   .videoToolbar_progress[_ngcontent-%COMP%]{position:relative;width:100%;background:rgba(112,109,109,.6);transition:height .5s;cursor:pointer}.videoViewerContainer[_ngcontent-%COMP%]   .videoToolbar[_ngcontent-%COMP%]   .videoToolbar_progress[_ngcontent-%COMP%]   .timeTip[_ngcontent-%COMP%]{position:absolute;display:none;top:-25px;left:-16px;padding:2px;background:#000;font-size:12px;color:#fff}.videoViewerContainer[_ngcontent-%COMP%]   .videoToolbar[_ngcontent-%COMP%]   .videoToolbar_progress[_ngcontent-%COMP%]   .progress_val_ball[_ngcontent-%COMP%]{position:absolute;left:0;bottom:0;height:16px;width:16px;border-radius:16px;background:#f7f7f7;z-index:3;opacity:0;transition:opacity .5s;font-size:12px}.videoViewerContainer[_ngcontent-%COMP%]   .videoToolbar[_ngcontent-%COMP%]   .videoToolbar_progress[_ngcontent-%COMP%]   .progress_val_ball[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:absolute;display:none;top:-25px;left:-16px;padding:2px;background:#000;color:#fff}.videoViewerContainer[_ngcontent-%COMP%]   .videoToolbar[_ngcontent-%COMP%]   .videoToolbar_progress[_ngcontent-%COMP%]   .progress_val_ball[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]{display:inline-block}.videoViewerContainer[_ngcontent-%COMP%]   .videoToolbar[_ngcontent-%COMP%]   .videoToolbar_progress[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{position:absolute;width:0;height:100%;border-radius:16px}.videoViewerContainer[_ngcontent-%COMP%]   .videoToolbar[_ngcontent-%COMP%]   .videoToolbar_progress[_ngcontent-%COMP%]   div.videoToolbar_play_progress[_ngcontent-%COMP%]{z-index:2;background:#45bdde}.videoViewerContainer[_ngcontent-%COMP%]   .videoToolbar[_ngcontent-%COMP%]   .videoToolbar_progress[_ngcontent-%COMP%]   div.videoToolbar_play_progress[_ngcontent-%COMP%]:hover ~ .timeTip[_ngcontent-%COMP%]{display:inline-block}.videoViewerContainer[_ngcontent-%COMP%]   .videoToolbar[_ngcontent-%COMP%]   .videoToolbar_progress[_ngcontent-%COMP%]   div.videoToolbar_buffer_progress[_ngcontent-%COMP%]{width:100%;z-index:1;background:rgba(191,185,185,.6)}.videoViewerContainer[_ngcontent-%COMP%]   .videoToolbar[_ngcontent-%COMP%]   .videoToolbar_progress[_ngcontent-%COMP%]   div.videoToolbar_buffer_progress[_ngcontent-%COMP%]:hover ~ .timeTip[_ngcontent-%COMP%]{display:inline-block}"] });
VideoViewerComponent = __decorate([
    ComponentRegister({
        uri: 'video-viewer',
        path: "components/shared/ngxviewer/video-viewer"
    })
], VideoViewerComponent);
export { VideoViewerComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(VideoViewerComponent, [{
        type: Component,
        args: [{
                selector: 'video-viewer',
                templateUrl: './video-viewer.component.html',
                styleUrls: ['./video-viewer.component.scss']
            }]
    }], function () { return [{ type: i1.DomSanitizer }]; }, { videoToolbar: [{
            type: ViewChild,
            args: ['videoToolbar', { static: true }]
        }], width: [{
            type: Input
        }], videoWidth: [{
            type: Input
        }], height: [{
            type: Input
        }], source: [{
            type: Input
        }], poster: [{
            type: Input
        }], ready: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlkZW8tdmlld2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Vwc2dpcy9jb21wb25lbnRzL3NoYXJlZC9uZ3h2aWV3ZXIvdmlkZW8tdmlld2VyL3ZpZGVvLXZpZXdlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9lcHNnaXMvY29tcG9uZW50cy9zaGFyZWQvbmd4dmlld2VyL3ZpZGVvLXZpZXdlci92aWRlby12aWV3ZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQVUsU0FBUyxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQ3ZFLE9BQU8sRUFBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUUxRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQzs7Ozs7Ozs7SUNGdEYsK0JBRWtDO0lBQS9CLDhQQUE4QjtJQUFDLFlBQ2xDO0lBQUEsaUJBQU87Ozs7SUFGTiw0RkFBaUU7SUFDaEMsZUFDbEM7SUFEa0Msb0RBQ2xDOzs7OztJQWtCQywyQkFBMkM7SUFDMUMsZ0NBRzJDO0lBRnhDLHVMQUF1QjtJQUcxQixpQkFBTztJQUNSLGlCQUFNOzs7SUFIRixlQUFnRjtJQUFoRixxR0FBZ0YsbUVBQUE7Ozs7SUFrQ25GLGdDQUM4RDtJQUR4RCxtTUFBdUI7SUFDaUMsaUJBQU87OztJQUEvQyxpRkFBdUM7Ozs7SUFDN0QsZ0NBQ2lDO0lBRDNCLG1NQUF1QjtJQUNJLGlCQUFPOzs7OztJQWhDMUMsbUNBQTBEO0lBQ3pELCtCQUNxRDtJQUNwRCxnQ0FRMkI7SUFQMUIsd05BQTJDLHNNQUFBLHFNQUFBLDJNQUFBO0lBUzNDLDRCQUFNO0lBQ0wsWUFDRDtJQUFBLGlCQUFPO0lBRVIsaUJBQU87SUFDUCwrQkFDMEU7SUFEckUsME5B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O1FBR3hCLGVBQW9CO1FBQXBCLHNDQUFvQix3Q0FBQTtRQVFmLGVBQWdCO1FBQWhCLG9EQUFnQjtRQUVuQixlQUFtQztRQUFuQyw0REFBbUM7UUFRZixlQUFlO1FBQWYsb0NBQWU7O0FEakI5QixvQkFBb0I7SUFUaEMsaUJBQWlCLENBQUM7UUFDbEIsR0FBRyxFQUFFLGNBQWM7UUFDbEIsSUFBSSxFQUFFLDBDQUEwQztLQUNqRCxDQUFDO0dBTVcsb0JBQW9CLENBc05oQztTQXROWSxvQkFBb0I7dUZBQXBCLG9CQUFvQjtjQUxoQyxTQUFTO2VBQUM7Z0JBQ1YsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLFdBQVcsRUFBRSwrQkFBK0I7Z0JBQzVDLFNBQVMsRUFBRSxDQUFDLCtCQUErQixDQUFDO2FBQzVDOytEQUd5QyxZQUFZO2tCQUFwRCxTQUFTO21CQUFDLGNBQWMsRUFBQyxFQUFDLE1BQU0sRUFBQyxJQUFJLEVBQUM7WUFDOUIsS0FBSztrQkFBYixLQUFLO1lBQ0csVUFBVTtrQkFBbEIsS0FBSztZQUNHLE1BQU07a0JBQWQsS0FBSztZQUNHLE1BQU07a0JBQWQsS0FBSztZQUNHLE1BQU07a0JBQWQsS0FBSztZQUNJLEtBQUs7a0JBQWQsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0lucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlcn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7RG9tU2FuaXRpemVyLCBTYWZlUmVzb3VyY2VVcmx9IGZyb20gXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCI7XG5pbXBvcnQgeyBDb21wb25lbnRSZWdpc3RlciB9IGZyb20gJy4uLy4uLy4uLy4uL2RlY29yYXRvci9jb21wb25lbnQtcmVnaXN0ZXIuZGVjb3JhdG9yJztcbkBDb21wb25lbnRSZWdpc3Rlcih7XG5cdHVyaTogJ3ZpZGVvLXZpZXdlcicsXG4gIHBhdGg6IFwiY29tcG9uZW50cy9zaGFyZWQvbmd4dmlld2VyL3ZpZGVvLXZpZXdlclwiXG59KVxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAndmlkZW8tdmlld2VyJyxcblx0dGVtcGxhdGVVcmw6ICcuL3ZpZGVvLXZpZXdlci5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogWycuL3ZpZGVvLXZpZXdlci5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFZpZGVvVmlld2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRAVmlld0NoaWxkKCd2aWRlb1Rvb2xiYXInLHtzdGF0aWM6dHJ1ZX0pIHZpZGVvVG9vbGJhcjogRWxlbWVudFJlZjtcblx0QElucHV0KCkgd2lkdGg6IG51bWJlciA9IDA7XG5cdEBJbnB1dCgpIHZpZGVvV2lkdGg6IG51bWJlciA9IDA7XG5cdEBJbnB1dCgpIGhlaWdodDogbnVtYmVyID0gMDtcblx0QElucHV0KCkgc291cmNlOiBzdHJpbmdbXSA9IFtdO1xuXHRASW5wdXQoKSBwb3N0ZXI6IHN0cmluZztcblx0QE91dHB1dCgpIHJlYWR5OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PihmYWxzZSk7XG5cblx0dmlkZW9FbGVtOiBIVE1MVmlkZW9FbGVtZW50OyAvLyB2aWRlbyBkb23lr7nosaFcblx0c3ViOiBudW1iZXIgPSAwO1xuXHR2aWRlb1VybDogU2FmZVJlc291cmNlVXJsOyAvLyDop4bpopHot6/lvoRcblx0Y3VycmVudFRpbWU6IHN0cmluZzsgLy8g6KeG6aKR5pKt5pS+55qE5b2T5YmN5pe26Ze0XG5cdHRvdGFsVGltZTogc3RyaW5nOyAvLyDop4bpopHmgLvml7bpl7Rcblx0cGxheV9wcm9ncmVzczogbnVtYmVyID0gMDsgLy8g5pKt5pS+55qE6L+b5bqm5p2h6ZW/5bqm5YC8XG5cdHZpZGVvVG9vbGJhclByb2dyZXNzSGVpZ2h0OiBudW1iZXIgPSAzOyAvLyDov5vluqbmnaHpq5jluqZcblx0cHJlVm9sdW1lOiBudW1iZXIgPSAxOyAvLyDpnZnpn7Porr7nva7liY3nmoTpn7Pph4/lgLxcblx0c2hvd1Byb2dyZXNzQmFsbDogYm9vbGVhbiA9IGZhbHNlOyAvLyDmmK/lkKbmmL7npLrov5vluqbmnaHkuIrmu5HliqjnmoTnkINcblx0cHJvZ3Jlc3NCYWxsRHJhZ1N0YXJ0Q2xpZW50WDogbnVtYmVyID0gMDsgLy8g6L+b5bqm5p2h5LiK5ruR5Yqo55qE55CD5Yid5aeLeOS9jee9rlxuXHRpc1Byb2dyZXNzQmFsbFN0YXJ0TW92ZSA9IGZhbHNlOyAvLyDov5vluqbmnaHkuIrnmoTnkIPmmK/lkKblvIDlp4vmu5Hliqhcblx0dm9sdW1lQmFsbERyYWdTdGFydENsaWVudFg6IG51bWJlciA9IDA7IC8vIOmfs+mHj+adoeS4iua7keWKqOeahOeQg+WIneWni3jkvY3nva5cblx0aXNWb2x1bWVCYWxsU3RhcnRNb3ZlID0gZmFsc2U7IC8vIOmfs+mHj+adoeS4iueahOeQg+aYr+WQpuW8gOWni+a7keWKqFxuXHR0aW1lVGlwOiBzdHJpbmc7IC8vIOaXtumXtOaPkOekulxuXHR0aW1lVGlwT2Zmc2V0WDogbnVtYmVyID0gMDtcblxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgZG9tU2FuaXRpemVyOiBEb21TYW5pdGl6ZXIpIHtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMudmlkZW9VcmwgPSB0aGlzLnNvdXJjZVswXTtcblx0XHR0aGlzLnJlYWR5LmVtaXQoJ3ZpZGVvIHZpZXdlciBpbml0aWFsaXplIScpO1xuXHR9XG5cblx0LyoqXG5cdCAqIOinhumikeeahOWFg+aVsOaNruW3suWKoOi9veS6i+S7tlxuXHQgKiBAcGFyYW0gZVxuXHQgKi9cblx0b25Mb2FkZWRtZXRhZGF0YShlOiBhbnkpIHtcblx0XHR0aGlzLnZpZGVvRWxlbSA9IGUudGFyZ2V0IGFzIEhUTUxWaWRlb0VsZW1lbnQ7XG5cdFx0dGhpcy50b3RhbFRpbWUgPSB0aGlzLmdldEZvcm1hdFRpbWUodGhpcy52aWRlb0VsZW0uZHVyYXRpb24pO1xuXHRcdHRoaXMuY3VycmVudFRpbWUgPSB0aGlzLmdldEZvcm1hdFRpbWUodGhpcy52aWRlb0VsZW0uY3VycmVudFRpbWUpO1xuXHR9XG5cblx0LyoqXG5cdCAqIOaSreaUvue7k+adn+S6i+S7tlxuXHQgKiBAcGFyYW0gZVxuXHQgKi9cblx0T25QbGF5RW5kZWQoZTogYW55KSB7XG5cdFx0Y29uc29sZS5sb2coYOaSreaUvue7k+adn++8miR7dGhpcy52aWRlb0VsZW0uZW5kZWR9YCk7XG5cdH1cblxuXHQvKipcblx0ICog5byA5aeL5pKt5pS+5LqL5Lu2XG5cdCAqIEBwYXJhbSBlXG5cdCAqL1xuXHRvblBsYXkoZTogYW55KSB7XG5cdFx0Y29uc29sZS5sb2coJ3BsYXknKTtcblx0fVxuXG5cdC8qKlxuXHQgKiDmkq3mlL7ml7bpl7TmlLnlj5jkuovku7Zcblx0ICogQHBhcmFtIGVcblx0ICovXG5cdG9uVGltZXVwZGF0ZShlOiBhbnkpIHtcblx0XHR0aGlzLmN1cnJlbnRUaW1lID0gdGhpcy5nZXRGb3JtYXRUaW1lKHRoaXMudmlkZW9FbGVtLmN1cnJlbnRUaW1lKTtcblx0XHR0aGlzLnBsYXlfcHJvZ3Jlc3MgPSB0aGlzLnZpZGVvRWxlbS5jdXJyZW50VGltZSAvIHRoaXMudmlkZW9FbGVtLmR1cmF0aW9uICogdGhpcy52aWRlb1Rvb2xiYXIubmF0aXZlRWxlbWVudC5jbGllbnRXaWR0aDtcblx0fVxuXG5cdG9uUHJvZ3Jlc3MoZTogYW55KSB7XG5cdFx0Y29uc29sZS5sb2coJ3Byb2dyZXNzJyk7XG5cdH1cblxuXHRvbkNhbnBsYXl0aHJvdWdoKGU6IGFueSkge1xuXHRcdGNvbnNvbGUubG9nKCdjYW5wbGF5dGhyb3VnaCcpO1xuXHR9XG5cblx0dmlkZW9Ub29sYmFyUHJvZ3Jlc3NDbGljayhlOiBNb3VzZUV2ZW50KSB7XG5cdFx0dGhpcy5wbGF5X3Byb2dyZXNzID0gZS5vZmZzZXRYO1xuXHRcdGxldCB0ZW1wQ3VycmVudFRpbWU6IG51bWJlciA9IHRoaXMucGxheV9wcm9ncmVzcyAvIHRoaXMudmlkZW9Ub29sYmFyLm5hdGl2ZUVsZW1lbnQuY2xpZW50V2lkdGggKiB0aGlzLnZpZGVvRWxlbS5kdXJhdGlvbjtcblx0XHR0aGlzLnZpZGVvRWxlbS5jdXJyZW50VGltZSA9IHRlbXBDdXJyZW50VGltZTtcblx0XHR0aGlzLmN1cnJlbnRUaW1lID0gdGhpcy5nZXRGb3JtYXRUaW1lKHRlbXBDdXJyZW50VGltZSk7XG5cdH1cblxuXHR2aWRlb1Rvb2xiYXJQcm9ncmVzc01vdmUoZTogTW91c2VFdmVudCkge1xuXHRcdGxldCB0ZW1wQ3VycmVudFRpbWU6IG51bWJlciA9IGUub2Zmc2V0WCAvIHRoaXMudmlkZW9Ub29sYmFyLm5hdGl2ZUVsZW1lbnQuY2xpZW50V2lkdGggKiB0aGlzLnZpZGVvRWxlbS5kdXJhdGlvbjtcblx0XHR0aGlzLnRpbWVUaXBPZmZzZXRYID0gZS5vZmZzZXRYO1xuXHRcdHRoaXMudGltZVRpcCA9IHRoaXMuZ2V0Rm9ybWF0VGltZSh0ZW1wQ3VycmVudFRpbWUpO1xuXHR9XG5cblx0cHJvZ3Jlc3NCYWxsRHJhZ1N0YXJ0KGU6IE1vdXNlRXZlbnQpIHtcblx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdHRoaXMucHJvZ3Jlc3NCYWxsRHJhZ1N0YXJ0Q2xpZW50WCA9IGUuY2xpZW50WDtcblx0XHR0aGlzLmlzUHJvZ3Jlc3NCYWxsU3RhcnRNb3ZlID0gdHJ1ZTtcblx0fVxuXG5cdHByb2dyZXNzQmFsbERyYWcoZTogTW91c2VFdmVudCkge1xuXHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0aWYgKHRoaXMuaXNQcm9ncmVzc0JhbGxTdGFydE1vdmUpIHtcblx0XHRcdGxldCBvZmZzZXRYOiBudW1iZXIgPSBlLmNsaWVudFggLSB0aGlzLnByb2dyZXNzQmFsbERyYWdTdGFydENsaWVudFg7XG5cdFx0XHR0aGlzLnByb2dyZXNzQmFsbERyYWdTdGFydENsaWVudFggPSBlLmNsaWVudFg7XG5cdFx0XHR0aGlzLnBsYXlfcHJvZ3Jlc3MgPSAodGhpcy5wbGF5X3Byb2dyZXNzICsgb2Zmc2V0WCk7XG5cdFx0XHRpZiAodGhpcy5wbGF5X3Byb2dyZXNzID49IHRoaXMudmlkZW9Ub29sYmFyLm5hdGl2ZUVsZW1lbnQuY2xpZW50V2lkdGgpIHtcblx0XHRcdFx0dGhpcy5wbGF5X3Byb2dyZXNzID0gdGhpcy52aWRlb1Rvb2xiYXIubmF0aXZlRWxlbWVudC5jbGllbnRXaWR0aDtcblx0XHRcdH0gZWxzZSBpZiAodGhpcy5wbGF5X3Byb2dyZXNzIDw9IDApIHtcblx0XHRcdFx0dGhpcy5wbGF5X3Byb2dyZXNzID0gMDtcblx0XHRcdH1cblx0XHRcdGxldCB0ZW1wQ3VycmVudFRpbWU6IG51bWJlciA9IHRoaXMucGxheV9wcm9ncmVzcyAvIHRoaXMudmlkZW9Ub29sYmFyLm5hdGl2ZUVsZW1lbnQuY2xpZW50V2lkdGggKiB0aGlzLnZpZGVvRWxlbS5kdXJhdGlvbjtcblx0XHRcdHRoaXMudmlkZW9FbGVtLmN1cnJlbnRUaW1lID0gdGVtcEN1cnJlbnRUaW1lO1xuXHRcdFx0dGhpcy5jdXJyZW50VGltZSA9IHRoaXMuZ2V0Rm9ybWF0VGltZSh0ZW1wQ3VycmVudFRpbWUpO1xuXHRcdH1cblx0fVxuXG5cdHByb2dyZXNzQmFsbERyYWdFbmQoZTogTW91c2VFdmVudCkge1xuXHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0dGhpcy5pc1Byb2dyZXNzQmFsbFN0YXJ0TW92ZSA9IGZhbHNlO1xuXHR9XG5cblx0dm9sdW1lVmFsQ2xpY2soZTogTW91c2VFdmVudCwgd2lkdGg6IG51bWJlcikge1xuXHRcdGNvbnNvbGUubG9nKGUub2Zmc2V0WCk7XG5cdFx0dGhpcy52aWRlb0VsZW0udm9sdW1lID0gZS5vZmZzZXRYIC8gd2lkdGg7XG5cdH1cblxuXHR2b2x1bWVCYWxsRHJhZ1N0YXJ0KGU6IE1vdXNlRXZlbnQpIHtcblx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdHRoaXMudm9sdW1lQmFsbERyYWdTdGFydENsaWVudFggPSBlLmNsaWVudFg7XG5cdFx0dGhpcy5pc1ZvbHVtZUJhbGxTdGFydE1vdmUgPSB0cnVlO1xuXHR9XG5cblx0dm9sdW1lQmFsbERyYWcoZTogTW91c2VFdmVudCwgd2lkdGg6IG51bWJlcikge1xuXHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0aWYgKHRoaXMuaXNWb2x1bWVCYWxsU3RhcnRNb3ZlKSB7XG5cdFx0XHRsZXQgb2Zmc2V0WDogbnVtYmVyID0gZS5jbGllbnRYIC0gdGhpcy52b2x1bWVCYWxsRHJhZ1N0YXJ0Q2xpZW50WDtcblx0XHRcdHRoaXMudm9sdW1lQmFsbERyYWdTdGFydENsaWVudFggPSBlLmNsaWVudFg7XG5cdFx0XHRsZXQgdm9sdW1lOiBudW1iZXIgPSB0aGlzLnZpZGVvRWxlbS52b2x1bWUgKyBvZmZzZXRYIC8gd2lkdGg7XG5cdFx0XHRpZiAodm9sdW1lIDw9IDApIHtcblx0XHRcdFx0dGhpcy52aWRlb0VsZW0udm9sdW1lID0gMDtcblx0XHRcdH0gZWxzZSBpZiAodm9sdW1lID49IDEpIHtcblx0XHRcdFx0dGhpcy52aWRlb0VsZW0udm9sdW1lID0gMTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMudmlkZW9FbGVtLnZvbHVtZSA9IHZvbHVtZTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHR2b2x1bWVCYWxsRHJhZ0VuZChlOiBNb3VzZUV2ZW50KSB7XG5cdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHR0aGlzLmlzVm9sdW1lQmFsbFN0YXJ0TW92ZSA9IGZhbHNlO1xuXHR9XG5cblx0dmlkZW9Nb3VzZW92ZXIoZTogYW55KSB7XG5cdFx0dGhpcy52aWRlb1Rvb2xiYXJQcm9ncmVzc0hlaWdodCA9IDE2O1xuXHRcdHRoaXMuc2hvd1Byb2dyZXNzQmFsbCA9IHRydWU7XG5cdH1cblxuXHR2aWRlb01vdXNlb3V0KGU6IGFueSkge1xuXHRcdHRoaXMudmlkZW9Ub29sYmFyUHJvZ3Jlc3NIZWlnaHQgPSAzO1xuXHRcdHRoaXMuc2hvd1Byb2dyZXNzQmFsbCA9IGZhbHNlO1xuXHR9XG5cblx0LyoqXG5cdCAqIOaSreaUvuinhumikVxuXHQgKi9cblx0cGxheSgpIHtcblx0XHR0aGlzLnZpZGVvRWxlbS5lbmRlZCAmJiAodGhpcy52aWRlb0VsZW0uY3VycmVudFRpbWUgPSAwKTtcblx0XHR0aGlzLnZpZGVvRWxlbS5wbGF5KCk7XG5cdH1cblxuXHQvKipcblx0ICog5pqC5YGc6KeG6aKRXG5cdCAqL1xuXHRwYXVzZSgpIHtcblx0XHR0aGlzLnZpZGVvRWxlbS5wYXVzZSgpO1xuXHR9XG5cblx0LyoqXG5cdCAqIOaSreaUvi/mmoLlgZxcblx0ICovXG5cdHBsYXlPclBhdXNlKCkge1xuXHRcdHRoaXMudmlkZW9FbGVtLnBhdXNlZCA/IHRoaXMucGxheSgpIDogdGhpcy5wYXVzZSgpO1xuXHR9XG5cdC8qKlxuXHQgKiDpgInkuK3op4bpopFcblx0ICogKi9cblx0c2VsZWN0VmlkZW8ocGF0aCwgaSkge1xuXHRcdHRoaXMuc3ViID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShpKSk7XG5cdFx0dGhpcy52aWRlb1VybCA9IHBhdGg7XG5cdFx0dGhpcy52aWRlb0VsZW0ubG9hZCgpO1xuXHR9XG5cblx0aXNNdXRlZCgpIHtcblx0XHRpZiAodGhpcy52aWRlb0VsZW0ubXV0ZWQpIHtcblx0XHRcdHRoaXMudmlkZW9FbGVtLm11dGVkID0gZmFsc2U7XG5cdFx0XHR0aGlzLnZpZGVvRWxlbS52b2x1bWUgPSB0aGlzLnByZVZvbHVtZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy52aWRlb0VsZW0ubXV0ZWQgPSB0cnVlO1xuXHRcdFx0dGhpcy5wcmVWb2x1bWUgPSB0aGlzLnZpZGVvRWxlbS52b2x1bWU7XG5cdFx0XHR0aGlzLnZpZGVvRWxlbS52b2x1bWUgPSAwO1xuXHRcdH1cblx0fVxuXG5cdGdldEZvcm1hdFRpbWUodmFsdWU6IG51bWJlcik6IHN0cmluZyB7XG5cdFx0bGV0IGg6IHN0cmluZyA9IHBhcnNlSW50KHZhbHVlIC8gMzYwMCArICcnKSA8IDEwID8gJzAnICsgcGFyc2VJbnQodmFsdWUgLyAzNjAwICsgJycpIDogJycgKyBwYXJzZUludCh2YWx1ZSAvIDM2MDAgKyAnJyksXG5cdFx0XHRtOiBzdHJpbmcgPSBwYXJzZUludCh2YWx1ZSAlIDM2MDAgLyA2MCArICcnKSA8IDEwID8gJzAnICsgcGFyc2VJbnQodmFsdWUgJSAzNjAwIC8gNjAgKyAnJykgOiAnJyArIHBhcnNlSW50KHZhbHVlICUgMzYwMCAvIDYwICsgJycpLFxuXHRcdFx0czogc3RyaW5nO1xuXHRcdGlmICh2YWx1ZSA+PSA2MCkge1xuXHRcdFx0cyA9IHZhbHVlICUgMzYwMCAlIDYwIDwgMTAgPyAnMCcgKyBwYXJzZUludCh2YWx1ZSAlIDM2MDAgJSA2MCArICcnKSA6ICcnICsgcGFyc2VJbnQodmFsdWUgJSAzNjAwICUgNjAgKyAnJyk7XG5cdFx0fSBlbHNlIGlmICh2YWx1ZSA8IDYwICYmIHZhbHVlID49IDEwKSB7XG5cdFx0XHRzID0gJycgKyBwYXJzZUludCh2YWx1ZSArICcnKTtcblx0XHR9IGVsc2UgaWYgKHZhbHVlIDwgMTApIHtcblx0XHRcdHMgPSAnMCcgKyBwYXJzZUludCh2YWx1ZSArICcnKTtcblx0XHR9XG5cdFx0cmV0dXJuIGAke2h9OiR7bX06JHtzfWA7XG5cdH1cbn1cbiIsIjxwIGNsYXNzPVwidmlkZW8tbGlzdFwiPlxuXHQ8c3BhbiAqbmdGb3I9XCJsZXQgdmlkZW8gb2Ygc291cmNlO2xldCBpPWluZGV4XCIgY2xhc3M9J2xhYmVsJ1xuXHRcdFtuZ0NsYXNzXT1cInsnbGFiZWwtZGVmYXVsdCc6IGkgIT0gc3ViLCdsYWJlbC1wcmltYXJ5JzogaSA9PSBzdWJ9XCJcblx0XHQgIChjbGljayk9XCJzZWxlY3RWaWRlbyh2aWRlbyxpKVwiPuinhumikXt7aSsxfX1cblx0PC9zcGFuPlxuPC9wPlxuPGRpdiBjbGFzcz1cInZpZGVvVmlld2VyQ29udGFpbmVyXCJcblx0IChtb3VzZW92ZXIpPVwidmlkZW9Nb3VzZW92ZXIoJGV2ZW50KVwiXG5cdCAobW91c2VvdXQpPVwidmlkZW9Nb3VzZW91dCgkZXZlbnQpXCJcblx0IFtzdHlsZS53aWR0aF09XCJ3aWR0aCArICdweCdcIiAjdmlkZW9WaWV3ZXJDb250YWluZXI+XG5cdDxkaXYgY2xhc3M9XCJ2aWRlb1ZpZXdlclwiPlxuXHRcdDx2aWRlbyAoY2xpY2spPVwicGxheU9yUGF1c2UoKVwiXG5cdFx0XHQgICBbd2lkdGhdPVwidmlkZW9XaWR0aFwiXG5cdFx0XHQgICBbcG9zdGVyXT1cInBvc3RlclwiXG5cdFx0XHQgICAobG9hZGVkbWV0YWRhdGEpPVwib25Mb2FkZWRtZXRhZGF0YSgkZXZlbnQpXCJcblx0XHRcdCAgIChlbmRlZCk9XCJPblBsYXlFbmRlZCgkZXZlbnQpXCJcblx0XHRcdCAgICh0aW1ldXBkYXRlKT1cIm9uVGltZXVwZGF0ZSgkZXZlbnQpXCJcblx0XHRcdCAgIChwcm9ncmVzcyk9XCJvblByb2dyZXNzKCRldmVudClcIlxuXHRcdFx0ICAgKGNhbnBsYXl0aHJvdWdoKT1cIm9uQ2FucGxheXRocm91Z2goJGV2ZW50KVwiXG5cdFx0XHQgICAocGxheSk9XCJvblBsYXkoJGV2ZW50KVwiPlxuXHRcdFx0PHNvdXJjZSBbc3JjXT1cInZpZGVvVXJsXCIgdHlwZT1cInZpZGVvL21wNFwiLz5cblx0XHQ8L3ZpZGVvPlxuXHRcdDxkaXYgKm5nSWY9XCJ2aWRlb0VsZW0gJiYgdmlkZW9FbGVtLnBhdXNlZFwiPlxuXHRcdFx0PHNwYW4gY2xhc3M9XCJmYVwiXG5cdFx0XHRcdCAgKGNsaWNrKT1cInBsYXlPclBhdXNlKClcIlxuXHRcdFx0XHQgIFtuZ0NsYXNzXT1cInsnZmEtcmVwZWF0JzogdmlkZW9FbGVtLmVuZGVkLCAnZmEtcGxheS1jaXJjbGUtbyc6ICF2aWRlb0VsZW0uZW5kZWR9XCJcblx0XHRcdFx0ICBbdGl0bGVdPVwidmlkZW9FbGVtLmVuZGVkID8gJ+mHjeaSrScgOiAn5pKt5pS+J1wiPlxuXHRcdFx0PC9zcGFuPlxuXHRcdDwvZGl2PlxuXHQ8L2Rpdj5cblx0PGRpdiBjbGFzcz1cInZpZGVvVG9vbGJhclwiICpuZ0lmPVwidmlkZW9FbGVtXCIgI3ZpZGVvVG9vbGJhcj5cblx0XHQ8ZGl2IGNsYXNzPVwidmlkZW9Ub29sYmFyX3Byb2dyZXNzXCJcblx0XHRcdCBbc3R5bGUuaGVpZ2h0XT1cInZpZGVvVG9vbGJhclByb2dyZXNzSGVpZ2h0ICsgJ3B4J1wiPlxuXHRcdFx0PHNwYW5cblx0XHRcdFx0KG1vdXNlZG93bik9XCJwcm9ncmVzc0JhbGxEcmFnU3RhcnQoJGV2ZW50KVwiXG5cdFx0XHRcdChtb3VzZW1vdmUpPVwicHJvZ3Jlc3NCYWxsRHJhZygkZXZlbnQpXCJcblx0XHRcdFx0KG1vdXNldXApPVwicHJvZ3Jlc3NCYWxsRHJhZ0VuZCgkZXZlbnQpXCJcblx0XHRcdFx0KG1vdXNlbGVhdmUpPVwicHJvZ3Jlc3NCYWxsRHJhZ0VuZCgkZXZlbnQpXCJcblx0XHRcdFx0W3N0eWxlLmxlZnRdPVwicGxheV9wcm9ncmVzcyArICdweCdcIlxuXHRcdFx0XHRbc3R5bGUubWFyZ2luLWxlZnRdPVwicGxheV9wcm9ncmVzcyA+IDE2ID8gJy0xNnB4JyA6ICcwJ1wiXG5cdFx0XHRcdFtzdHlsZS5vcGFjaXR5XT1cInNob3dQcm9ncmVzc0JhbGwgPyAxIDogMFwiXG5cdFx0XHRcdGNsYXNzPVwicHJvZ3Jlc3NfdmFsX2JhbGxcIj5cblxuXHRcdFx0XHQ8c3Bhbj5cblx0XHRcdFx0XHR7e2dldEZvcm1hdFRpbWUocGxheV9wcm9ncmVzcyAvIHZpZGVvVG9vbGJhci5jbGllbnRXaWR0aCAqIHZpZGVvRWxlbS5kdXJhdGlvbil9fVxuXHRcdFx0XHQ8L3NwYW4+XG5cblx0XHRcdDwvc3Bhbj5cblx0XHRcdDxkaXYgKG1vdXNlbW92ZSk9XCJ2aWRlb1Rvb2xiYXJQcm9ncmVzc01vdmUoJGV2ZW50KVwiIChjbGljayk9XCJ2aWRlb1Rvb2xiYXJQcm9ncmVzc0NsaWNrKCRldmVudClcIlxuXHRcdFx0XHQgY2xhc3M9XCJ2aWRlb1Rvb2xiYXJfcGxheV9wcm9ncmVzc1wiIFtzdHlsZS53aWR0aF09XCJwbGF5X3Byb2dyZXNzICsgJ3B4J1wiPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IChtb3VzZW1vdmUpPVwidmlkZW9Ub29sYmFyUHJvZ3Jlc3NNb3ZlKCRldmVudClcIiAoY2xpY2spPVwidmlkZW9Ub29sYmFyUHJvZ3Jlc3NDbGljaygkZXZlbnQpXCJcblx0XHRcdFx0IGNsYXNzPVwidmlkZW9Ub29sYmFyX2J1ZmZlcl9wcm9ncmVzc1wiPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8c3BhbiBjbGFzcz1cInRpbWVUaXBcIiBbc3R5bGUubGVmdF09XCIodGltZVRpcE9mZnNldFggLTE2KSArICdweCdcIj5cblx0XHRcdFx0e3t0aW1lVGlwfX1cblx0XHRcdDwvc3Bhbj5cblx0XHQ8L2Rpdj5cblx0XHQ8ZGl2IGNsYXNzPVwidmlkZW9Ub29sYmFyX3BsYXlfYnRuXCI+XG5cdFx0XHQ8c3BhbiAoY2xpY2spPVwicGxheU9yUGF1c2UoKVwiICpuZ0lmPVwidmlkZW9FbGVtLnBhdXNlZFwiIGNsYXNzPVwicGxheUJ0biBmYSBmYS1wbGF5LWNpcmNsZS1vXCJcblx0XHRcdFx0ICBhcmlhLWhpZGRlbj1cInRydWVcIiBbdGl0bGVdPVwidmlkZW9FbGVtLmVuZGVkID8gJ+mHjeaSrScgOiAn5pKt5pS+J1wiPjwvc3Bhbj5cblx0XHRcdDxzcGFuIChjbGljayk9XCJwbGF5T3JQYXVzZSgpXCIgKm5nSWY9XCIhdmlkZW9FbGVtLnBhdXNlZFwiIGNsYXNzPVwicGxheUJ0biBmYSBmYS1wYXVzZS1jaXJjbGUtb1wiXG5cdFx0XHRcdCAgYXJpYS1oaWRkZW49XCJ0cnVlXCIgdGl0bGU9XCLmmoLlgZxcIj48L3NwYW4+XG5cdFx0XHQ8c3BhbiBjbGFzcz1cInBsYXlUaW1lXCI+XG5cdFx0XHRcdDxzcGFuPnt7Y3VycmVudFRpbWV9fTwvc3Bhbj4mbmJzcDsvJm5ic3A7e3t0b3RhbFRpbWV9fVxuXHRcdFx0PC9zcGFuPlxuXHRcdDwvZGl2PlxuXHRcdDxkaXYgY2xhc3M9XCJ2aWRlb1Rvb2xiYXJfdm9sdW1lX2J0blwiPlxuXHRcdFx0PHNwYW4gKGNsaWNrKT1cImlzTXV0ZWQoKVwiIGNsYXNzPVwibXV0ZWRCdG4gZmFcIlxuXHRcdFx0XHQgIFtuZ0NsYXNzXT1cInsnZmEtdm9sdW1lLWRvd24nOiB2aWRlb0VsZW0udm9sdW1lID4gMCAmJiB2aWRlb0VsZW0udm9sdW1lIDwgMC41LCAnZmEtdm9sdW1lLXVwJzogdmlkZW9FbGVtLnZvbHVtZSA+PSAwLjUsICdmYS12b2x1bWUtb2ZmJzogdmlkZW9FbGVtLnZvbHVtZSA9PSAwfVwiXG5cdFx0XHRcdCAgYXJpYS1oaWRkZW49XCJ0cnVlXCIgdGl0bGU9XCLpnZnpn7Porr7nva5cIj48L3NwYW4+XG5cdFx0XHQ8c3BhbiBjbGFzcz1cInZvbHVtZV92YWxcIlxuXHRcdFx0XHQgICN2b2x1bWVfdmFsPlxuXHRcdFx0XHQ8c3BhbiBjbGFzcz1cInZvbHVtZV92YWxfYmFsbFwiXG5cdFx0XHRcdFx0ICAobW91c2Vkb3duKT1cInZvbHVtZUJhbGxEcmFnU3RhcnQoJGV2ZW50KVwiXG5cdFx0XHRcdFx0ICAobW91c2Vtb3ZlKT1cInZvbHVtZUJhbGxEcmFnKCRldmVudCwgdm9sdW1lX3ZhbC5jbGllbnRXaWR0aClcIlxuXHRcdFx0XHRcdCAgKG1vdXNldXApPVwidm9sdW1lQmFsbERyYWdFbmQoJGV2ZW50KVwiXG5cdFx0XHRcdFx0ICAobW91c2VsZWF2ZSk9XCJ2b2x1bWVCYWxsRHJhZ0VuZCgkZXZlbnQpXCJcblx0XHRcdFx0XHQgIFtzdHlsZS5sZWZ0XT1cIih2aWRlb0VsZW0udm9sdW1lICogMTAwIC0gOCkgKyAncHgnXCI+XG5cblx0XHRcdFx0XHQ8c3Bhbj5cblx0XHRcdFx0XHRcdHt7KHZpZGVvRWxlbS52b2x1bWUgKiAxMDApLnRvRml4ZWQoMCkgKyAnJSd9fVxuXHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHQ8c3BhbiAoY2xpY2spPVwidm9sdW1lVmFsQ2xpY2soJGV2ZW50LCB2b2x1bWVfdmFsLmNsaWVudFdpZHRoKVwiIGNsYXNzPVwidm9sdW1lX3ZhbF9hY3RpdmVcIlxuXHRcdFx0XHRcdCAgW3N0eWxlLndpZHRoXT1cIih2aWRlb0VsZW0udm9sdW1lICogMTAwKSArICdweCdcIj48L3NwYW4+XG5cdFx0XHRcdDxzcGFuIChjbGljayk9XCJ2b2x1bWVWYWxDbGljaygkZXZlbnQsIHZvbHVtZV92YWwuY2xpZW50V2lkdGgpXCIgY2xhc3M9XCJ2b2x1bWVfdmFsX25vdEFjdGl2ZVwiPjwvc3Bhbj5cblx0XHRcdDwvc3Bhbj5cblx0XHQ8L2Rpdj5cblx0PC9kaXY+XG48L2Rpdj5cbiJdfQ==