export const getPlatforms = (win) => setupPlatforms(win);
export const isPlatform = (winOrPlatform, platform) => {
    if (typeof winOrPlatform === 'string') {
        platform = winOrPlatform;
        winOrPlatform = undefined;
    }
    if (!winOrPlatform) {
        winOrPlatform = window;
    }
    if (!platform) {
        platform = "desktop";
    }
    return PLATFORMS_MAP[platform](winOrPlatform);
};
export const setupPlatforms = (win = window) => {
    win.Ionic = win.Ionic || {};
    let platforms = win.Ionic.platforms;
    if (platforms == null) {
        platforms = win.Ionic.platforms = detectPlatforms(win);
        platforms.forEach(p => win.document.documentElement.classList.add(`plt-${p}`));
    }
    return platforms;
};
const detectPlatforms = (win) => Object.keys(PLATFORMS_MAP).filter(p => PLATFORMS_MAP[p](win));
const isMobileWeb = (win) => isMobile(win) && !isHybrid(win);
const isIpad = (win) => {
    if (testUserAgent(win, /iPad/i)) {
        return true;
    }
    if (testUserAgent(win, /Macintosh/i) && isMobile(win)) {
        return true;
    }
    return false;
};
const isIphone = (win) => testUserAgent(win, /iPhone/i);
const isIOS = (win) => testUserAgent(win, /iPhone|iPod/i) || isIpad(win);
const isAndroid = (win) => testUserAgent(win, /android|sink/i);
const isAndroidTablet = (win) => {
    return isAndroid(win) && !testUserAgent(win, /mobile/i);
};
const isPhablet = (win) => {
    const width = win.innerWidth;
    const height = win.innerHeight;
    const smallest = Math.min(width, height);
    const largest = Math.max(width, height);
    return (smallest > 390 && smallest < 520) &&
        (largest > 620 && largest < 800);
};
const isTablet = (win) => {
    const width = win.innerWidth;
    const height = win.innerHeight;
    const smallest = Math.min(width, height);
    const largest = Math.max(width, height);
    return (isIpad(win) ||
        isAndroidTablet(win) ||
        ((smallest > 460 && smallest < 820) &&
            (largest > 780 && largest < 1400)));
};
const isMobile = (win) => {
    let isTouchScreen = !!navigator.userAgent.match(/AppleWebkit.*Mobile.*/) || "ontouchstart" in win ||
        (matchMedia(win, '(pointer:coarse)') || !!matchMedia(win, "-moz-touch-enabled"));
    return isTouchScreen;
};
const isDesktop = (win) => !isMobile(win);
const isHybrid = (win) => isCordova(win) || isCapacitorNative(win);
const isCordova = (win) => !!(win['cordova'] || win['phonegap'] || win['PhoneGap']);
const isCapacitorNative = (win) => {
    const capacitor = win['Capacitor'];
    return !!(capacitor && capacitor.isNative);
};
const isElectron = (win) => testUserAgent(win, /electron/i);
const isPWA = (win) => !!(win.matchMedia('(display-mode: standalone)').matches || win.navigator.standalone);
export const testUserAgent = (win, expr) => expr.test(win.navigator.userAgent);
const matchMedia = (win, query) => win.matchMedia(query).matches;
const PLATFORMS_MAP = {
    'ipad': isIpad,
    'iphone': isIphone,
    'ios': isIOS,
    'android': isAndroid,
    'phablet': isPhablet,
    'tablet': isTablet,
    'cordova': isCordova,
    'capacitor': isCapacitorNative,
    'electron': isElectron,
    'pwa': isPWA,
    'mobile': isMobile,
    'mobileweb': isMobileWeb,
    'desktop': isDesktop,
    'hybrid': isHybrid
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhdGZvcm0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9lcHNnaXMvdXRpbHMvcGxhdGZvcm0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0EsTUFBTSxDQUFDLE1BQU0sWUFBWSxHQUFHLENBQUMsR0FBUSxFQUFFLEVBQUUsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUM7QUFFOUQsTUFBTSxDQUFDLE1BQU0sVUFBVSxHQUF3QixDQUFDLGFBQTZDLEVBQUUsUUFBb0IsRUFBRSxFQUFFO0lBQ25ILElBQUksT0FBTyxhQUFhLEtBQUssUUFBUSxFQUFFO1FBQ25DLFFBQVEsR0FBRyxhQUFhLENBQUM7UUFDekIsYUFBYSxHQUFHLFNBQVMsQ0FBQztLQUM3QjtJQUVELElBQUksQ0FBQyxhQUFhLEVBQUU7UUFDaEIsYUFBYSxHQUFHLE1BQU0sQ0FBQztLQUMxQjtJQUNELElBQUcsQ0FBQyxRQUFRLEVBQUM7UUFDVCxRQUFRLEdBQUMsU0FBUyxDQUFDO0tBQ3RCO0lBQ0QsT0FBTyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsYUFBdUIsQ0FBQyxDQUFDO0FBQzVELENBQUMsQ0FBQztBQUVGLE1BQU0sQ0FBQyxNQUFNLGNBQWMsR0FBRyxDQUFDLE1BQVcsTUFBTSxFQUFFLEVBQUU7SUFDaEQsR0FBRyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQztJQUU1QixJQUFJLFNBQVMsR0FBbUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUM7SUFDcEUsSUFBSSxTQUFTLElBQUksSUFBSSxFQUFFO1FBQ25CLFNBQVMsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdkQsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FB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LENBQ25DLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsNEJBQTRCLENBQUMsQ0FBQyxPQUFPLElBQUssR0FBRyxDQUFDLFNBQWlCLENBQUMsVUFBVSxDQUFDLENBQUM7QUFFbEcsTUFBTSxDQUFDLE1BQU0sYUFBYSxHQUFHLENBQUMsR0FBVyxFQUFFLElBQVksRUFBRSxFQUFFLENBQ3ZELElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUV2QyxNQUFNLFVBQVUsR0FBRyxDQUFDLEdBQVcsRUFBRSxLQUFhLEVBQVcsRUFBRSxDQUN2RCxHQUFHLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQztBQUVsQyxNQUFNLGFBQWEsR0FBRztJQUNsQixNQUFNLEVBQUUsTUFBTTtJQUNkLFFBQVEsRUFBRSxRQUFRO0lBQ2xCLEtBQUssRUFBRSxLQUFLO0lBQ1osU0FBUyxFQUFFLFNBQVM7SUFDcEIsU0FBUyxFQUFFLFNBQVM7SUFDcEIsUUFBUSxFQUFFLFFBQVE7SUFDbEIsU0FBUyxFQUFFLFNBQVM7SUFDcEIsV0FBVyxFQUFFLGlCQUFpQjtJQUM5QixVQUFVLEVBQUUsVUFBVTtJQUN0QixLQUFLLEVBQUUsS0FBSztJQUNaLFFBQVEsRUFBRSxRQUFRO0lBQ2xCLFdBQVcsRUFBRSxXQUFXO0lBQ3hCLFNBQVMsRUFBRSxTQUFTO0lBQ3BCLFFBQVEsRUFBRSxRQUFRO0NBQ3JCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgdHlwZSBQbGF0Zm9ybXMgPSBrZXlvZiB0eXBlb2YgUExBVEZPUk1TX01BUDtcblxuaW50ZXJmYWNlIElzUGxhdGZvcm1TaWduYXR1cmUge1xuICAgIChwbHQ6IFBsYXRmb3Jtcyk6IGJvb2xlYW47XG4gICAgKHdpbjogV2luZG93LCBwbHQ6IFBsYXRmb3Jtcyk6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBnZXRQbGF0Zm9ybXMgPSAod2luOiBhbnkpID0+IHNldHVwUGxhdGZvcm1zKHdpbik7XG5cbmV4cG9ydCBjb25zdCBpc1BsYXRmb3JtOiBJc1BsYXRmb3JtU2lnbmF0dXJlID0gKHdpbk9yUGxhdGZvcm06IFdpbmRvdyB8IFBsYXRmb3JtcyB8IHVuZGVmaW5lZCwgcGxhdGZvcm0/OiBQbGF0Zm9ybXMpID0+IHtcbiAgICBpZiAodHlwZW9mIHdpbk9yUGxhdGZvcm0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHBsYXRmb3JtID0gd2luT3JQbGF0Zm9ybTtcbiAgICAgICAgd2luT3JQbGF0Zm9ybSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgLy8gcmV0dXJuIGdldFBsYXRmb3Jtcyh3aW5PclBsYXRmb3JtKS5pbmNsdWRlcyhwbGF0Zm9ybSEpO1xuICAgIGlmICghd2luT3JQbGF0Zm9ybSkge1xuICAgICAgICB3aW5PclBsYXRmb3JtID0gd2luZG93O1xuICAgIH1cbiAgICBpZighcGxhdGZvcm0pe1xuICAgICAgICBwbGF0Zm9ybT1cImRlc2t0b3BcIjtcbiAgICB9XG4gICAgcmV0dXJuIFBMQVRGT1JNU19NQVBbcGxhdGZvcm1dKHdpbk9yUGxhdGZvcm0gYXMgV2luZG93KTtcbn07XG5cbmV4cG9ydCBjb25zdCBzZXR1cFBsYXRmb3JtcyA9ICh3aW46IGFueSA9IHdpbmRvdykgPT4ge1xuICAgIHdpbi5Jb25pYyA9IHdpbi5Jb25pYyB8fCB7fTtcblxuICAgIGxldCBwbGF0Zm9ybXM6IFBsYXRmb3Jtc1tdIHwgdW5kZWZpbmVkIHwgbnVsbCA9IHdpbi5Jb25pYy5wbGF0Zm9ybXM7XG4gICAgaWYgKHBsYXRmb3JtcyA9PSBudWxsKSB7XG4gICAgICAgIHBsYXRmb3JtcyA9IHdpbi5Jb25pYy5wbGF0Zm9ybXMgPSBkZXRlY3RQbGF0Zm9ybXMod2luKTtcbiAgICAgICAgcGxhdGZvcm1zLmZvckVhY2gocCA9PiB3aW4uZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoYHBsdC0ke3B9YCkpO1xuICAgIH1cbiAgICByZXR1cm4gcGxhdGZvcm1zO1xufTtcblxuY29uc3QgZGV0ZWN0UGxhdGZvcm1zID0gKHdpbjogV2luZG93KSA9PlxuICAgIChPYmplY3Qua2V5cyhQTEFURk9STVNfTUFQKSBhcyBQbGF0Zm9ybXNbXSkuZmlsdGVyKHAgPT4gUExBVEZPUk1TX01BUFtwXSh3aW4pKTtcblxuY29uc3QgaXNNb2JpbGVXZWIgPSAod2luOiBXaW5kb3cpOiBib29sZWFuID0+XG4gICAgaXNNb2JpbGUod2luKSAmJiAhaXNIeWJyaWQod2luKTtcblxuY29uc3QgaXNJcGFkID0gKHdpbjogV2luZG93KSA9PiB7XG4gICAgLy8gaU9TIDEyIGFuZCBiZWxvd1xuICAgIGlmICh0ZXN0VXNlckFnZW50KHdpbiwgL2lQYWQvaSkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gaU9TIDEzK1xuICAgIGlmICh0ZXN0VXNlckFnZW50KHdpbiwgL01hY2ludG9zaC9pKSAmJiBpc01vYmlsZSh3aW4pKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn07XG5cbmNvbnN0IGlzSXBob25lID0gKHdpbjogV2luZG93KSA9PlxuICAgIHRlc3RVc2VyQWdlbnQod2luLCAvaVBob25lL2kpO1xuXG5jb25zdCBpc0lPUyA9ICh3aW46IFdpbmRvdykgPT5cbiAgICB0ZXN0VXNlckFnZW50KHdpbiwgL2lQaG9uZXxpUG9kL2kpIHx8IGlzSXBhZCh3aW4pO1xuXG5jb25zdCBpc0FuZHJvaWQgPSAod2luOiBXaW5kb3cpID0+XG4gICAgdGVzdFVzZXJBZ2VudCh3aW4sIC9hbmRyb2lkfHNpbmsvaSk7XG5cbmNvbnN0IGlzQW5kcm9pZFRhYmxldCA9ICh3aW46IFdpbmRvdykgPT4ge1xuICAgIHJldHVybiBpc0FuZHJvaWQod2luKSAmJiAhdGVzdFVzZXJBZ2VudCh3aW4sIC9tb2JpbGUvaSk7XG59O1xuXG5jb25zdCBpc1BoYWJsZXQgPSAod2luOiBXaW5kb3cpID0+IHtcbiAgICBjb25zdCB3aWR0aCA9IHdpbi5pbm5lcldpZHRoO1xuICAgIGNvbnN0IGhlaWdodCA9IHdpbi5pbm5lckhlaWdodDtcbiAgICBjb25zdCBzbWFsbGVzdCA9IE1hdGgubWluKHdpZHRoLCBoZWlnaHQpO1xuICAgIGNvbnN0IGxhcmdlc3QgPSBNYXRoLm1heCh3aWR0aCwgaGVpZ2h0KTtcblxuICAgIHJldHVybiAoc21hbGxlc3QgPiAzOTAgJiYgc21hbGxlc3QgPCA1MjApICYmXG4gICAgICAgIChsYXJnZXN0ID4gNjIwICYmIGxhcmdlc3QgPCA4MDApO1xufTtcblxuY29uc3QgaXNUYWJsZXQgPSAod2luOiBXaW5kb3cpID0+IHtcbiAgICBjb25zdCB3aWR0aCA9IHdpbi5pbm5lcldpZHRoO1xuICAgIGNvbnN0IGhlaWdodCA9IHdpbi5pbm5lckhlaWdodDtcbiAgICBjb25zdCBzbWFsbGVzdCA9IE1hdGgubWluKHdpZHRoLCBoZWlnaHQpO1xuICAgIGNvbnN0IGxhcmdlc3QgPSBNYXRoLm1heCh3aWR0aCwgaGVpZ2h0KTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIGlzSXBhZCh3aW4pIHx8XG4gICAgICAgIGlzQW5kcm9pZFRhYmxldCh3aW4pIHx8XG4gICAgICAgIChcbiAgICAgICAgICAgIChzbWFsbGVzdCA+IDQ2MCAmJiBzbWFsbGVzdCA8IDgyMCkgJiZcbiAgICAgICAgICAgIChsYXJnZXN0ID4gNzgwICYmIGxhcmdlc3QgPCAxNDAwKVxuICAgICAgICApXG4gICAgKTtcbn07XG5cbmNvbnN0IGlzTW9iaWxlID0gKHdpbjogV2luZG93KSA9PiB7XG4gICAgLy8gcmV0dXJuIG1hdGNoTWVkaWEod2luLCAnKGFueS1wb2ludGVyOmNvYXJzZSknKTtcbiAgICAvLyBtb2RpZnkgYnkgc3kgMjAyMC84LzVcbiAgICAvLyB2YXIgaXNUb3VjaFNjcmVlbiA9ICEhbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvQXBwbGVXZWJraXQuKk1vYmlsZS4qLykgfHwgXCJvbnRvdWNoc3RhcnRcIiBpbiB3aW4gfHxcbiAgICAvLyAod2luLm1hdGNoTWVkaWEgPyB3aW4ubWF0Y2hNZWRpYShcIihwb2ludGVyOmNvYXJzZSlcIikubWF0Y2hlcyB8fCAhIXdpbi5tYXRjaE1lZGlhKFwiLW1vei10b3VjaC1lbmFibGVkXCIpLm1hdGNoZXMgOiBmYWxzZSk7XG5cbiAgICBsZXQgaXNUb3VjaFNjcmVlbiA9ICEhbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvQXBwbGVXZWJraXQuKk1vYmlsZS4qLykgfHwgXCJvbnRvdWNoc3RhcnRcIiBpbiB3aW4gfHxcbiAgICAgICAgKG1hdGNoTWVkaWEod2luLCAnKHBvaW50ZXI6Y29hcnNlKScpIHx8ICEhbWF0Y2hNZWRpYSh3aW4sIFwiLW1vei10b3VjaC1lbmFibGVkXCIpKTtcbiAgICByZXR1cm4gaXNUb3VjaFNjcmVlbjtcbn07XG5cblxuY29uc3QgaXNEZXNrdG9wID0gKHdpbjogV2luZG93KSA9PlxuICAgICFpc01vYmlsZSh3aW4pO1xuXG5jb25zdCBpc0h5YnJpZCA9ICh3aW46IFdpbmRvdykgPT5cbiAgICBpc0NvcmRvdmEod2luKSB8fCBpc0NhcGFjaXRvck5hdGl2ZSh3aW4pO1xuXG5jb25zdCBpc0NvcmRvdmEgPSAod2luOiBhbnkpOiBib29sZWFuID0+XG4gICAgISEod2luWydjb3Jkb3ZhJ10gfHwgd2luWydwaG9uZWdhcCddIHx8IHdpblsnUGhvbmVHYXAnXSk7XG5cbmNvbnN0IGlzQ2FwYWNpdG9yTmF0aXZlID0gKHdpbjogYW55KTogYm9vbGVhbiA9PiB7XG4gICAgY29uc3QgY2FwYWNpdG9yID0gd2luWydDYXBhY2l0b3InXTtcbiAgICByZXR1cm4gISEoY2FwYWNpdG9yICYmIGNhcGFjaXRvci5pc05hdGl2ZSk7XG59O1xuXG5jb25zdCBpc0VsZWN0cm9uID0gKHdpbjogV2luZG93KTogYm9vbGVhbiA9PlxuICAgIHRlc3RVc2VyQWdlbnQod2luLCAvZWxlY3Ryb24vaSk7XG5cbmNvbnN0IGlzUFdBID0gKHdpbjogV2luZG93KTogYm9vbGVhbiA9PlxuICAgICEhKHdpbi5tYXRjaE1lZGlhKCcoZGlzcGxheS1tb2RlOiBzdGFuZGFsb25lKScpLm1hdGNoZXMgfHwgKHdpbi5uYXZpZ2F0b3IgYXMgYW55KS5zdGFuZGFsb25lKTtcblxuZXhwb3J0IGNvbnN0IHRlc3RVc2VyQWdlbnQgPSAod2luOiBXaW5kb3csIGV4cHI6IFJlZ0V4cCkgPT5cbiAgICBleHByLnRlc3Qod2luLm5hdmlnYXRvci51c2VyQWdlbnQpO1xuXG5jb25zdCBtYXRjaE1lZGlhID0gKHdpbjogV2luZG93LCBxdWVyeTogc3RyaW5nKTogYm9vbGVhbiA9PlxuICAgIHdpbi5tYXRjaE1lZGlhKHF1ZXJ5KS5tYXRjaGVzO1xuXG5jb25zdCBQTEFURk9STVNfTUFQID0ge1xuICAgICdpcGFkJzogaXNJcGFkLFxuICAgICdpcGhvbmUnOiBpc0lwaG9uZSxcbiAgICAnaW9zJzogaXNJT1MsXG4gICAgJ2FuZHJvaWQnOiBpc0FuZHJvaWQsXG4gICAgJ3BoYWJsZXQnOiBpc1BoYWJsZXQsXG4gICAgJ3RhYmxldCc6IGlzVGFibGV0LFxuICAgICdjb3Jkb3ZhJzogaXNDb3Jkb3ZhLFxuICAgICdjYXBhY2l0b3InOiBpc0NhcGFjaXRvck5hdGl2ZSxcbiAgICAnZWxlY3Ryb24nOiBpc0VsZWN0cm9uLFxuICAgICdwd2EnOiBpc1BXQSxcbiAgICAnbW9iaWxlJzogaXNNb2JpbGUsXG4gICAgJ21vYmlsZXdlYic6IGlzTW9iaWxlV2ViLFxuICAgICdkZXNrdG9wJzogaXNEZXNrdG9wLFxuICAgICdoeWJyaWQnOiBpc0h5YnJpZFxufTsiXX0=