import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { isPlatform, getPlatforms } from "../utils/platform";
import * as i0 from "@angular/core";
export class PlatformService {
    constructor(doc, zone) {
        this.doc = doc;
        this.backButton = new Subject();
        this.pause = new Subject();
        this.resume = new Subject();
        this.resize = new Subject();
        zone.run(() => {
            this.win = doc.defaultView;
            this.backButton.subscribeWithPriority = function (priority, callback) {
                return this.subscribe(ev => (ev.register(priority, () => zone.run(callback))));
            };
            proxyEvent(this.pause, doc, 'pause');
            proxyEvent(this.resume, doc, 'resume');
            proxyEvent(this.backButton, doc, 'ionBackButton');
            proxyEvent(this.resize, this.win, 'resize');
            let readyResolve;
            this._readyPromise = new Promise(res => { readyResolve = res; });
            if (this.win && this.win['cordova']) {
                doc.addEventListener('deviceready', () => {
                    readyResolve('cordova');
                }, { once: true });
            }
            else {
                readyResolve('dom');
            }
        });
    }
    is(platformName) {
        return isPlatform(this.win, platformName);
    }
    platforms() {
        return getPlatforms(this.win);
    }
    ready() {
        return this._readyPromise;
    }
    get isRTL() {
        return this.doc.dir === 'rtl';
    }
    getQueryParam(key) {
        return readQueryParam(this.win.location.href, key);
    }
    isLandscape() {
        return !this.isPortrait();
    }
    isPortrait() {
        return this.win.matchMedia && this.win.matchMedia('(orientation: portrait)').matches;
    }
    testUserAgent(expression) {
        const nav = this.win.navigator;
        return !!(nav && nav.userAgent && nav.userAgent.indexOf(expression) >= 0);
    }
    url() {
        return this.win.location.href;
    }
    width() {
        return this.win.innerWidth;
    }
    height() {
        return this.win.innerHeight;
    }
}
PlatformService.ɵfac = function PlatformService_Factory(t) { return new (t || PlatformService)(i0.ɵɵinject(DOCUMENT), i0.ɵɵinject(i0.NgZone)); };
PlatformService.ɵprov = i0.ɵɵdefineInjectable({ token: PlatformService, factory: PlatformService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PlatformService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }, { type: i0.NgZone }]; }, null); })();
const readQueryParam = (url, key) => {
    key = key.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + key + '=([^&#]*)');
    const results = regex.exec(url);
    return results ? decodeURIComponent(results[1].replace(/\+/g, ' ')) : null;
};
const proxyEvent = (emitter, el, eventName) => {
    if (el) {
        el.addEventListener(eventName, (ev) => {
            emitter.next(ev != null ? ev.detail : undefined);
        });
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhdGZvcm0uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2Vwc2dpcy9zZXJ2aWNlcy9wbGF0Zm9ybS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUMzRCxPQUFPLEVBQUUsT0FBTyxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUM3QyxPQUFPLEVBQUUsVUFBVSxFQUFhLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDOztBQVd4RSxNQUFNLE9BQU8sZUFBZTtJQWdDMUIsWUFBc0MsR0FBUSxFQUFFLElBQVk7UUFBdEIsUUFBRyxHQUFILEdBQUcsQ0FBSztRQXhCOUMsZUFBVSxHQUFzQixJQUFJLE9BQU8sRUFBZ0MsQ0FBQztRQVE1RSxVQUFLLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQU81QixXQUFNLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQU83QixXQUFNLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUczQixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRTtZQUNaLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLFdBQVcsQ0FBQztZQUMzQixJQUFJLENBQUMsVUFBVSxDQUFDLHFCQUFxQixHQUFHLFVBQVUsUUFBUSxFQUFFLFFBQVE7Z0JBQ2xFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQzFCLEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FDaEQsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDO1lBRUYsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFL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LE9BQU8sQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN4RCxNQUFNLEtBQUssR0FBRyxJQUFJLE1BQU0sQ0FBQyxRQUFRLEdBQUcsR0FBRyxHQUFHLFdBQVcsQ0FBQyxDQUFDO0lBQ3ZELE1BQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDaEMsT0FBTyxPQUFPLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztBQUM3RSxDQUFDLENBQUM7QUFFRixNQUFNLFVBQVUsR0FBRyxDQUFJLE9BQW1CLEVBQUUsRUFBZSxFQUFFLFNBQWlCLEVBQUUsRUFBRTtJQUNoRixJQUFLLEVBQVUsRUFBRTtRQUNmLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUE0QixFQUFFLEVBQUU7WUFFOUQsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBRSxFQUFVLENBQUMsTUFBVyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNqRSxDQUFDLENBQUMsQ0FBQztLQUNKO0FBQ0gsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgaXNQbGF0Zm9ybSwgUGxhdGZvcm1zLCBnZXRQbGF0Zm9ybXMgfSBmcm9tIFwiLi4vdXRpbHMvcGxhdGZvcm1cIjtcblxuZXhwb3J0IGludGVyZmFjZSBCYWNrQnV0dG9uRXZlbnREZXRhaWwge1xuICByZWdpc3Rlcihwcmlvcml0eTogbnVtYmVyLCBoYW5kbGVyOiAoKSA9PiBQcm9taXNlPGFueT4gfCB2b2lkKTogdm9pZDtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgQmFja0J1dHRvbkVtaXR0ZXIgZXh0ZW5kcyBTdWJqZWN0PEJhY2tCdXR0b25FdmVudERldGFpbD4ge1xuICBzdWJzY3JpYmVXaXRoUHJpb3JpdHkocHJpb3JpdHk6IG51bWJlciwgY2FsbGJhY2s6ICgpID0+IFByb21pc2U8YW55PiB8IHZvaWQpOiBTdWJzY3JpcHRpb247XG59XG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBQbGF0Zm9ybVNlcnZpY2Uge1xuXG4gIHByaXZhdGUgX3JlYWR5UHJvbWlzZTogUHJvbWlzZTxzdHJpbmc+O1xuICBwcml2YXRlIHdpbjogYW55O1xuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBiYWNrQnV0dG9uOiBCYWNrQnV0dG9uRW1pdHRlciA9IG5ldyBTdWJqZWN0PEJhY2tCdXR0b25FdmVudERldGFpbD4oKSBhcyBhbnk7XG5cbiAgLyoqXG4gICAqIFRoZSBwYXVzZSBldmVudCBlbWl0cyB3aGVuIHRoZSBuYXRpdmUgcGxhdGZvcm0gcHV0cyB0aGUgYXBwbGljYXRpb25cbiAgICogaW50byB0aGUgYmFja2dyb3VuZCwgdHlwaWNhbGx5IHdoZW4gdGhlIHVzZXIgc3dpdGNoZXMgdG8gYSBkaWZmZXJlbnRcbiAgICogYXBwbGljYXRpb24uIFRoaXMgZXZlbnQgd291bGQgZW1pdCB3aGVuIGEgQ29yZG92YSBhcHAgaXMgcHV0IGludG9cbiAgICogdGhlIGJhY2tncm91bmQsIGhvd2V2ZXIsIGl0IHdvdWxkIG5vdCBmaXJlIG9uIGEgc3RhbmRhcmQgd2ViIGJyb3dzZXIuXG4gICAqL1xuICBwYXVzZSA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgLyoqXG4gICAqIFRoZSByZXN1bWUgZXZlbnQgZW1pdHMgd2hlbiB0aGUgbmF0aXZlIHBsYXRmb3JtIHB1bGxzIHRoZSBhcHBsaWNhdGlvblxuICAgKiBvdXQgZnJvbSB0aGUgYmFja2dyb3VuZC4gVGhpcyBldmVudCB3b3VsZCBlbWl0IHdoZW4gYSBDb3Jkb3ZhIGFwcCBjb21lc1xuICAgKiBvdXQgZnJvbSB0aGUgYmFja2dyb3VuZCwgaG93ZXZlciwgaXQgd291bGQgbm90IGZpcmUgb24gYSBzdGFuZGFyZCB3ZWIgYnJvd3Nlci5cbiAgICovXG4gIHJlc3VtZSA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgLyoqXG4gICAqIFRoZSByZXNpemUgZXZlbnQgZW1pdHMgd2hlbiB0aGUgYnJvd3NlciB3aW5kb3cgaGFzIGNoYW5nZWQgZGltZW5zaW9ucy4gVGhpc1xuICAgKiBjb3VsZCBiZSBmcm9tIGEgYnJvd3NlciB3aW5kb3cgYmVpbmcgcGh5c2ljYWxseSByZXNpemVkLCBvciBmcm9tIGEgZGV2aWNlXG4gICAqIGNoYW5naW5nIG9yaWVudGF0aW9uLlxuICAgKi9cbiAgcmVzaXplID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvYzogYW55LCB6b25lOiBOZ1pvbmUpIHtcbiAgICB6b25lLnJ1bigoKSA9PiB7XG4gICAgICB0aGlzLndpbiA9IGRvYy5kZWZhdWx0VmlldztcbiAgICAgIHRoaXMuYmFja0J1dHRvbi5zdWJzY3JpYmVXaXRoUHJpb3JpdHkgPSBmdW5jdGlvbiAocHJpb3JpdHksIGNhbGxiYWNrKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN1YnNjcmliZShldiA9PiAoXG4gICAgICAgICAgZXYucmVnaXN0ZXIocHJpb3JpdHksICgpID0+IHpvbmUucnVuKGNhbGxiYWNrKSlcbiAgICAgICAgKSk7XG4gICAgICB9O1xuXG4gICAgICBwcm94eUV2ZW50KHRoaXMucGF1c2UsIGRvYywgJ3BhdXNlJyk7XG4gICAgICBwcm94eUV2ZW50KHRoaXMucmVzdW1lLCBkb2MsICdyZXN1bWUnKTtcbiAgICAgIHByb3h5RXZlbnQodGhpcy5iYWNrQnV0dG9uLCBkb2MsICdpb25CYWNrQnV0dG9uJyk7XG4gICAgICBwcm94eUV2ZW50KHRoaXMucmVzaXplLCB0aGlzLndpbiwgJ3Jlc2l6ZScpO1xuXG4gICAgICBsZXQgcmVhZHlSZXNvbHZlOiAodmFsdWU6IHN0cmluZykgPT4gdm9pZDtcbiAgICAgIHRoaXMuX3JlYWR5UHJvbWlzZSA9IG5ldyBQcm9taXNlKHJlcyA9PiB7IHJlYWR5UmVzb2x2ZSA9IHJlczsgfSk7XG4gICAgICBpZiAodGhpcy53aW4gJiYgdGhpcy53aW5bJ2NvcmRvdmEnXSkge1xuICAgICAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcignZGV2aWNlcmVhZHknLCAoKSA9PiB7XG4gICAgICAgICAgcmVhZHlSZXNvbHZlKCdjb3Jkb3ZhJyk7XG4gICAgICAgIH0sIHsgb25jZTogdHJ1ZSB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlYWR5UmVzb2x2ZSEoJ2RvbScpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIC8qXG4gICAqXG4gICAqIHwgUGxhdGZvcm0gTmFtZSAgIHwgRGVzY3JpcHRpb24gICAgICAgICAgICAgICAgICAgICAgICB8XG4gICAqIHwtLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18XG4gICAqIHwgYW5kcm9pZCAgICAgICAgIHwgb24gYSBkZXZpY2UgcnVubmluZyBBbmRyb2lkLiAgICAgICB8XG4gICAqIHwgY29yZG92YSAgICAgICAgIHwgb24gYSBkZXZpY2UgcnVubmluZyBDb3Jkb3ZhLiAgICAgICB8XG4gICAqIHwgaW9zICAgICAgICAgICAgIHwgb24gYSBkZXZpY2UgcnVubmluZyBpT1MuICAgICAgICAgICB8XG4gICAqIHwgaXBhZCAgICAgICAgICAgIHwgb24gYW4gaVBhZCBkZXZpY2UuICAgICAgICAgICAgICAgICB8XG4gICAqIHwgaXBob25lICAgICAgICAgIHwgb24gYW4gaVBob25lIGRldmljZS4gICAgICAgICAgICAgICB8XG4gICAqIHwgcGhhYmxldCAgICAgICAgIHwgb24gYSBwaGFibGV0IGRldmljZS4gICAgICAgICAgICAgICB8XG4gICAqIHwgdGFibGV0ICAgICAgICAgIHwgb24gYSB0YWJsZXQgZGV2aWNlLiAgICAgICAgICAgICAgICB8XG4gICAqIHwgZWxlY3Ryb24gICAgICAgIHwgaW4gRWxlY3Ryb24gb24gYSBkZXNrdG9wIGRldmljZS4gICB8XG4gICAqIHwgcHdhICAgICAgICAgICAgIHwgYXMgYSBQV0EgYXBwLiAgICAgICAgICAgICAgICAgICAgICB8XG4gICAqIHwgbW9iaWxlICAgICAgICAgIHwgb24gYSBtb2JpbGUgZGV2aWNlLiAgICAgICAgICAgICAgICB8XG4gICAqIHwgbW9iaWxld2ViICAgICAgIHwgb24gYSBtb2JpbGUgZGV2aWNlIGluIGEgYnJvd3Nlci4gICB8XG4gICAqIHwgZGVza3RvcCAgICAgICAgIHwgb24gYSBkZXNrdG9wIGRldmljZS4gICAgICAgICAgICAgICB8XG4gICAqIHwgaHlicmlkICAgICAgICAgIHwgaXMgYSBjb3Jkb3ZhIG9yIGNhcGFjaXRvciBhcHAuICAgICB8XG4gICAqXG4gICAqL1xuICBpcyhwbGF0Zm9ybU5hbWU6IFBsYXRmb3Jtcyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBpc1BsYXRmb3JtKHRoaXMud2luLCBwbGF0Zm9ybU5hbWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIHRoZSBhcnJheSBvZiBwbGF0Zm9ybXNcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqIERlcGVuZGluZyBvbiB3aGF0IGRldmljZSB5b3UgYXJlIG9uLCBgcGxhdGZvcm1zYCBjYW4gcmV0dXJuIG11bHRpcGxlIHZhbHVlcy5cbiAgICogRWFjaCBwb3NzaWJsZSB2YWx1ZSBpcyBhIGhpZXJhcmNoeSBvZiBwbGF0Zm9ybXMuIEZvciBleGFtcGxlLCBvbiBhbiBpUGhvbmUsXG4gICAqIGl0IHdvdWxkIHJldHVybiBgbW9iaWxlYCwgYGlvc2AsIGFuZCBgaXBob25lYC5cbiAgICovXG4gIHBsYXRmb3JtcygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIGdldFBsYXRmb3Jtcyh0aGlzLndpbik7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIHByb21pc2Ugd2hlbiB0aGUgcGxhdGZvcm0gaXMgcmVhZHkgYW5kIG5hdGl2ZSBmdW5jdGlvbmFsaXR5XG4gICAqIGNhbiBiZSBjYWxsZWQuIElmIHRoZSBhcHAgaXMgcnVubmluZyBmcm9tIHdpdGhpbiBhIHdlYiBicm93c2VyLCB0aGVuXG4gICAqIHRoZSBwcm9taXNlIHdpbGwgcmVzb2x2ZSB3aGVuIHRoZSBET00gaXMgcmVhZHkuIFdoZW4gdGhlIGFwcCBpcyBydW5uaW5nXG4gICAqIGZyb20gYW4gYXBwbGljYXRpb24gZW5naW5lIHN1Y2ggYXMgQ29yZG92YSwgdGhlbiB0aGUgcHJvbWlzZSB3aWxsXG4gICAqIHJlc29sdmUgd2hlbiBDb3Jkb3ZhIHRyaWdnZXJzIHRoZSBgZGV2aWNlcmVhZHlgIGV2ZW50LlxuICAgKlxuICAgKiBUaGUgcmVzb2x2ZWQgdmFsdWUgaXMgdGhlIGByZWFkeVNvdXJjZWAsIHdoaWNoIHN0YXRlcyB3aGljaCBwbGF0Zm9ybVxuICAgKiByZWFkeSB3YXMgdXNlZC4gRm9yIGV4YW1wbGUsIHdoZW4gQ29yZG92YSBpcyByZWFkeSwgdGhlIHJlc29sdmVkIHJlYWR5XG4gICAqIHNvdXJjZSBpcyBgY29yZG92YWAuIFRoZSBkZWZhdWx0IHJlYWR5IHNvdXJjZSB2YWx1ZSB3aWxsIGJlIGBkb21gLiBUaGVcbiAgICogYHJlYWR5U291cmNlYCBpcyB1c2VmdWwgaWYgZGlmZmVyZW50IGxvZ2ljIHNob3VsZCBydW4gZGVwZW5kaW5nIG9uIHRoZVxuICAgKiBwbGF0Zm9ybSB0aGUgYXBwIGlzIHJ1bm5pbmcgZnJvbS4gRm9yIGV4YW1wbGUsIG9ubHkgQ29yZG92YSBjYW4gZXhlY3V0ZVxuICAgKiB0aGUgc3RhdHVzIGJhciBwbHVnaW4sIHNvIHRoZSB3ZWIgc2hvdWxkIG5vdCBydW4gc3RhdHVzIGJhciBwbHVnaW4gbG9naWMuXG4gICAqXG4gICAqIGBgYFxuICAgKi9cbiAgcmVhZHkoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5fcmVhZHlQcm9taXNlO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgaWYgdGhpcyBhcHAgaXMgdXNpbmcgcmlnaHQtdG8tbGVmdCBsYW5ndWFnZSBkaXJlY3Rpb24gb3Igbm90LlxuICAgKiBXZSByZWNvbW1lbmQgdGhlIGFwcCdzIGBpbmRleC5odG1sYCBmaWxlIGFscmVhZHkgaGFzIHRoZSBjb3JyZWN0IGBkaXJgXG4gICAqIGF0dHJpYnV0ZSB2YWx1ZSBzZXQsIHN1Y2ggYXMgYDxodG1sIGRpcj1cImx0clwiPmAgb3IgYDxodG1sIGRpcj1cInJ0bFwiPmAuXG4gICAqIFtXM0M6IFN0cnVjdHVyYWwgbWFya3VwIGFuZCByaWdodC10by1sZWZ0IHRleHQgaW4gSFRNTF0oaHR0cDovL3d3dy53My5vcmcvSW50ZXJuYXRpb25hbC9xdWVzdGlvbnMvcWEtaHRtbC1kaXIpXG4gICAqL1xuICBnZXQgaXNSVEwoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZG9jLmRpciA9PT0gJ3J0bCc7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBxdWVyeSBzdHJpbmcgcGFyYW1ldGVyXG4gICAqL1xuICBnZXRRdWVyeVBhcmFtKGtleTogc3RyaW5nKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgcmV0dXJuIHJlYWRRdWVyeVBhcmFtKHRoaXMud2luLmxvY2F0aW9uLmhyZWYsIGtleSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGFwcCBpcyBpbiBsYW5kc2NhcGUgbW9kZS5cbiAgICovXG4gIGlzTGFuZHNjYXBlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhdGhpcy5pc1BvcnRyYWl0KCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGFwcCBpcyBpbiBwb3J0YWl0IG1vZGUuXG4gICAqL1xuICBpc1BvcnRyYWl0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLndpbi5tYXRjaE1lZGlhICYmIHRoaXMud2luLm1hdGNoTWVkaWEoJyhvcmllbnRhdGlvbjogcG9ydHJhaXQpJykubWF0Y2hlcztcbiAgfVxuXG4gIHRlc3RVc2VyQWdlbnQoZXhwcmVzc2lvbjogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgY29uc3QgbmF2ID0gdGhpcy53aW4ubmF2aWdhdG9yO1xuICAgIHJldHVybiAhIShuYXYgJiYgbmF2LnVzZXJBZ2VudCAmJiBuYXYudXNlckFnZW50LmluZGV4T2YoZXhwcmVzc2lvbikgPj0gMCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBjdXJyZW50IHVybC5cbiAgICovXG4gIHVybCgpIHtcbiAgICByZXR1cm4gdGhpcy53aW4ubG9jYXRpb24uaHJlZjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSB3aWR0aCBvZiB0aGUgcGxhdGZvcm0ncyB2aWV3cG9ydCB1c2luZyBgd2luZG93LmlubmVyV2lkdGhgLlxuICAgKi9cbiAgd2lkdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMud2luLmlubmVyV2lkdGg7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgaGVpZ2h0IG9mIHRoZSBwbGF0Zm9ybSdzIHZpZXdwb3J0IHVzaW5nIGB3aW5kb3cuaW5uZXJIZWlnaHRgLlxuICAgKi9cbiAgaGVpZ2h0KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMud2luLmlubmVySGVpZ2h0O1xuICB9XG59XG5cbmNvbnN0IHJlYWRRdWVyeVBhcmFtID0gKHVybDogc3RyaW5nLCBrZXk6IHN0cmluZykgPT4ge1xuICBrZXkgPSBrZXkucmVwbGFjZSgvW1xcW10vLCAnXFxcXFsnKS5yZXBsYWNlKC9bXFxdXS8sICdcXFxcXScpO1xuICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoJ1tcXFxcPyZdJyArIGtleSArICc9KFteJiNdKiknKTtcbiAgY29uc3QgcmVzdWx0cyA9IHJlZ2V4LmV4ZWModXJsKTtcbiAgcmV0dXJuIHJlc3VsdHMgPyBkZWNvZGVVUklDb21wb25lbnQocmVzdWx0c1sxXS5yZXBsYWNlKC9cXCsvZywgJyAnKSkgOiBudWxsO1xufTtcblxuY29uc3QgcHJveHlFdmVudCA9IDxUPihlbWl0dGVyOiBTdWJqZWN0PFQ+LCBlbDogRXZlbnRUYXJnZXQsIGV2ZW50TmFtZTogc3RyaW5nKSA9PiB7XG4gIGlmICgoZWwgYXMgYW55KSkge1xuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCAoZXY6IEV2ZW50IHwgdW5kZWZpbmVkIHwgbnVsbCkgPT4ge1xuICAgICAgLy8gPz8gY29yZG92YSBtaWdodCBlbWl0IFwibnVsbFwiIGV2ZW50c1xuICAgICAgZW1pdHRlci5uZXh0KGV2ICE9IG51bGwgPyAoZXYgYXMgYW55KS5kZXRhaWwgYXMgVCA6IHVuZGVmaW5lZCk7XG4gICAgfSk7XG4gIH1cbn07Il19