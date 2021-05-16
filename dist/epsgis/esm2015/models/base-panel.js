export var PanelInMobileShowMode;
(function (PanelInMobileShowMode) {
    PanelInMobileShowMode["default"] = "default";
    PanelInMobileShowMode["drawer"] = "drawer";
    PanelInMobileShowMode["drawerRight"] = "drawerright";
    PanelInMobileShowMode["popup"] = "popup";
    PanelInMobileShowMode["action"] = "action";
    PanelInMobileShowMode["popover"] = "popover";
    PanelInMobileShowMode["modal"] = "modal";
})(PanelInMobileShowMode || (PanelInMobileShowMode = {}));
export var PanelDockMode;
(function (PanelDockMode) {
    PanelDockMode["none"] = "none";
    PanelDockMode["left"] = "left";
    PanelDockMode["right"] = "right";
    PanelDockMode["bottom"] = "bottom";
})(PanelDockMode || (PanelDockMode = {}));
export const DefaultPanelOptions = {
    id: "ss_panel",
    title: "SS Panel",
    showTitle: true,
    modal: false,
    autoOpen: false,
    animationTime: 300,
    customClass: "",
    buttonsPosition: "right",
    buttonClose: true,
    buttonCloseText: "关闭",
    buttonMaximize: true,
    buttonMaximizeText: "最大化",
    buttonUnmaximizeText: "还原",
    buttonMinimize: false,
    buttonMinimizeText: "最小化",
    buttonUnminimizeText: "打开",
    buttonCollapse: true,
    buttonCollapseText: "收缩",
    buttonUnCollapseText: "展开",
    draggable: true,
    dragOpacity: 0.6,
    resizable: true,
    resizeOpacity: 0.6,
    statusBar: false,
    height: 200,
    width: 400,
    maxHeight: undefined,
    maxWidth: undefined,
    minHeight: 100,
    minWidth: 200,
    collapsedWidth: undefined,
    keepInViewport: true,
    mouseMoveEvents: true,
    dockSide: PanelDockMode.none,
    relativeTo: "map",
    innerHtml: "",
    url: ""
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1wYW5lbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2Vwc2dpcy9tb2RlbHMvYmFzZS1wYW5lbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPQSxNQUFNLENBQU4sSUFBWSxxQkE4Qlg7QUE5QkQsV0FBWSxxQkFBcUI7SUFJN0IsNENBQW1CLENBQUE7SUFJbkIsMENBQWlCLENBQUE7SUFJakIsb0RBQTJCLENBQUE7SUFJM0Isd0NBQWUsQ0FBQTtJQUlmLDBDQUFpQixDQUFBO0lBSWpCLDRDQUFtQixDQUFBO0lBSW5CLHdDQUFlLENBQUE7QUFFbkIsQ0FBQyxFQTlCVyxxQkFBcUIsS0FBckIscUJBQXFCLFFBOEJoQztBQUlELE1BQU0sQ0FBTixJQUFZLGFBaUJYO0FBakJELFdBQVksYUFBYTtJQUlyQiw4QkFBYSxDQUFBO0lBSWIsOEJBQWEsQ0FBQTtJQUliLGdDQUFlLENBQUE7SUFJZixrQ0FBaUIsQ0FBQTtBQUNyQixDQUFDLEVBakJXLGFBQWEsS0FBYixhQUFhLFFBaUJ4QjtBQTBJRCxNQUFNLENBQUMsTUFBTSxtQkFBbUIsR0FBaUI7SUFJN0MsRUFBRSxFQUFFLFVBQVU7SUFJZCxLQUFLLEVBQUUsVUFBVTtJQUlqQixTQUFTLEVBQUUsSUFBSTtJQUlmLEtBQUssRUFBRSxLQUFLO0lBSVosUUFBUSxFQUFFLEtBQUs7SUFJZixhQUFhLEVBQUUsR0FBRztJQUlsQixXQUFXLEVBQUUsRUFBRTtJQUlmLGVBQWUsRUFBRSxPQUFPO0lBSXhCLFdBQVcsRUFBRSxJQUFJO0lBSWpCLGVBQWUsRUFBRSxJQUFJO0lBSXJCLGNBQWMsRUFBRSxJQUFJO0lBSXBCLGtCQUFrQixFQUFFLEtBQUs7SUFJekIsb0JBQW9CLEVBQUUsSUFBSTtJQUkxQixjQUFjLEVBQUUsS0FBSztJQUNyQixrQkFBa0IsRUFBRSxLQUFLO0lBQ3pCLG9CQUFvQixFQUFFLElBQUk7SUFJMUIsY0FBYyxFQUFFLElBQUk7SUFDcEIsa0JBQWtCLEVBQUUsSUFBSTtJQUN4QixvQkFBb0IsRUFBRSxJQUFJO0lBSTFCLFNBQVMsRUFBRSxJQUFJO0lBQ2YsV0FBVyxFQUFFLEdBQUc7SUFJaEIsU0FBUyxFQUFFLElBQUk7SUFDZixhQUFhLEVBQUUsR0FBRztJQUlsQixTQUFTLEVBQUUsS0FBSztJQU9oQixNQUFNLEVBQUUsR0FBRztJQUNYLEtBQUssRUFBRSxHQUFHO0lBQ1YsU0FBUyxFQUFFLFNBQVM7SUFDcEIsUUFBUSxFQUFFLFNBQVM7SUFDbkIsU0FBUyxFQUFFLEdBQUc7SUFDZCxRQUFRLEVBQUUsR0FBRztJQUNiLGNBQWMsRUFBRSxTQUFTO0lBRXpCLGNBQWMsRUFBRSxJQUFJO0lBQ3BCLGVBQWUsRUFBRSxJQUFJO0lBRXJCLFFBQVEsRUFBRSxhQUFhLENBQUMsSUFBSTtJQUM1QixVQUFVLEVBQUUsS0FBSztJQUlqQixTQUFTLEVBQUUsRUFBRTtJQUliLEdBQUcsRUFBRSxFQUFFO0NBQ1YsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogY3JlYXRlIGJ5IHJ1aXIgMTkxMDE0ICBiYXNlUGFuZWwuanNcbiAqL1xuXG4vKipcbiAqIFBhbmVsIOenu+WKqOerr+aYvuekuuaWueW8j1xuICovXG5leHBvcnQgZW51bSBQYW5lbEluTW9iaWxlU2hvd01vZGUge1xuICAgIC8qKlxuICAgICAqIOm7mOiupO+8iHBj56uv55qE5pa55byP77yJXG4gICAgICovXG4gICAgZGVmYXVsdCA9IFwiZGVmYXVsdFwiLFxuICAgIC8qKlxuICAgICAqIOaKveWxiSDkvqfmu5FcbiAgICAgKi9cbiAgICBkcmF3ZXIgPSBcImRyYXdlclwiLFxuICAgIC8qKlxuICAgICAqIOaKveWxiSDkvqfmu5Eg5Y+z5Ye6XG4gICAgICovXG4gICAgZHJhd2VyUmlnaHQgPSBcImRyYXdlcnJpZ2h0XCIsXG4gICAgLyoqXG4gICAgICog5by556qXXG4gICAgICovXG4gICAgcG9wdXAgPSBcInBvcHVwXCIsXG4gICAgLyoqXG4gICAgICog55Sx5bqV5ZCR5LiK5by55Ye65bGCXG4gICAgICovXG4gICAgYWN0aW9uID0gXCJhY3Rpb25cIixcbiAgICAvKipcbiAgICAgKiDmsJTms6HlvLnnqpdcbiAgICAgKi9cbiAgICBwb3BvdmVyID0gXCJwb3BvdmVyXCIsXG4gICAgLyoqXG4gICAgICog5qih5oCBIOaIliDot7PovazliLDmlrDpobVcbiAgICAgKi9cbiAgICBtb2RhbCA9IFwibW9kYWxcIlxuXG59XG4vKipcbiAqIHBhbmVs5YGc6Z2g5pa55byPXG4gKi9cbmV4cG9ydCBlbnVtIFBhbmVsRG9ja01vZGUge1xuICAgIC8qKlxuICAgICAqIOW8ueeql++8jOS4jeWBnOmdoFxuICAgICAqL1xuICAgIG5vbmUgPSBcIm5vbmVcIixcbiAgICAvKipcbiAgICAgKiDlgZzpnaDlnKjlt6bkvqdcbiAgICAgKi9cbiAgICBsZWZ0ID0gXCJsZWZ0XCIsXG4gICAgLyoqXG4gICAgICog5YGc6Z2g5Zyo5Y+z5L6nXG4gICAgICovXG4gICAgcmlnaHQgPSBcInJpZ2h0XCIsXG4gICAgLyoqXG4gICAgICog5YGc6Z2g5Zyo5LiL5pa5XG4gICAgICovXG4gICAgYm90dG9tID0gXCJib3R0b21cIlxufVxuLyoqXG4gKiBwYW5lbCDlnZDmoIfku6Xlj4rpq5jlrr1cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBQYW5lbFBvc2l0aW9uIHtcblxuICAgIHRvcD86IG51bWJlciB8IHN0cmluZztcbiAgICBsZWZ0PzogbnVtYmVyIHwgc3RyaW5nO1xuICAgIHdpZHRoPzogbnVtYmVyIHwgc3RyaW5nO1xuICAgIGhlaWdodD86IG51bWJlciB8IHN0cmluZztcblxufVxuLyoqXG4gKiBQYW5lbOWPguaVsFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFBhbmVsT3B0aW9ucyB7XG4gICAgLyoqXG4gICAgICAgICogaWRcbiAgICAgICAgKi9cbiAgICBpZD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiDmoIfpophcbiAgICAgKi9cbiAgICB0aXRsZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiDmmK/lkKbmmL7npLrmoIfpophcbiAgICAgKi9cbiAgICBzaG93VGl0bGU/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIOaYr+WQpuS4uuaooeaAgeeql+WPo1xuICAgICAqL1xuICAgIG1vZGFsPzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiDmmK/lkKboh6rliqjmiZPlvIBcbiAgICAgKi9cbiAgICBhdXRvT3Blbj86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICog5Yqo55S75pe26Ze0XG4gICAgICovXG4gICAgYW5pbWF0aW9uVGltZT86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiDoh6rlrprkuYnmoLflvI9cbiAgICAgKi9cbiAgICBjdXN0b21DbGFzcz86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiDmjInpkq7kvY3nva5cbiAgICAgKi9cbiAgICBidXR0b25zUG9zaXRpb24/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICog5piv5ZCm5pi+56S65YWz6Zet5oyJ6ZKuXG4gICAgICovXG4gICAgYnV0dG9uQ2xvc2U/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIOWFs+mXreaMiemSruaPkOekuuaWh+acrFxuICAgICAqL1xuICAgIGJ1dHRvbkNsb3NlVGV4dD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiDmmK/lkKbmmL7npLrmnIDlpKfljJbmjInpkq5cbiAgICAgKi9cbiAgICBidXR0b25NYXhpbWl6ZT86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICog5pyA5aSn5YyW5oyJ6ZKu5o+Q56S65paH5pysXG4gICAgICovXG4gICAgYnV0dG9uTWF4aW1pemVUZXh0Pzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqL1xuICAgIGJ1dHRvblVubWF4aW1pemVUZXh0Pzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIOaYr+WQpuaYvuekuuacgOWwj+WMluaMiemSrlxuICAgICAqL1xuICAgIGJ1dHRvbk1pbmltaXplPzogYm9vbGVhbjtcbiAgICBidXR0b25NaW5pbWl6ZVRleHQ/OiBzdHJpbmc7XG4gICAgYnV0dG9uVW5taW5pbWl6ZVRleHQ/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICog5piv5ZCm5pi+56S65pS257yp5oyJ6ZKuXG4gICAgICovXG4gICAgYnV0dG9uQ29sbGFwc2U/OiBib29sZWFuO1xuICAgIGJ1dHRvbkNvbGxhcHNlVGV4dD86IHN0cmluZztcbiAgICBidXR0b25VbkNvbGxhcHNlVGV4dD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiDmmK/lkKblj6/ku6Xmi5bmi71cbiAgICAgKi9cbiAgICBkcmFnZ2FibGU/OiBib29sZWFuO1xuICAgIGRyYWdPcGFjaXR5PzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIOaYr+WQpuWPr+aUueWPmOWkp+Wwj1xuICAgICAqL1xuICAgIHJlc2l6YWJsZT86IGJvb2xlYW47XG4gICAgcmVzaXplT3BhY2l0eT86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiDmmK/lkKbmmL7npLrlupXpg6jnirbmgIHmoI9cbiAgICAgKi9cbiAgICBzdGF0dXNCYXI/OiBib29sZWFuO1xuXG4gICAgLy8gdG9wPzogc3RyaW5nO1xuICAgIC8vIGxlZnQ/OiBzdHJpbmc7XG4gICAgLy8gcmlnaHQ/OiBzdHJpbmcgO1xuICAgIC8vIGJvdHRvbT86IHN0cmluZyA7XG5cbiAgICBoZWlnaHQ/OiBudW1iZXI7XG4gICAgd2lkdGg/OiBudW1iZXI7XG4gICAgbWF4SGVpZ2h0PzogYW55O1xuICAgIG1heFdpZHRoPzogYW55O1xuICAgIG1pbkhlaWdodD86IG51bWJlcjtcbiAgICBtaW5XaWR0aD86IG51bWJlcjtcbiAgICBjb2xsYXBzZWRXaWR0aD86IG51bWJlcjtcblxuICAgIGtlZXBJblZpZXdwb3J0PzogYm9vbGVhbjtcbiAgICBtb3VzZU1vdmVFdmVudHM/OiBib29sZWFuO1xuXG4gICAgZG9ja1NpZGU/OiBQYW5lbERvY2tNb2RlO1xuICAgIHJlbGF0aXZlVG8/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICog6Z2Z5oCBaHRtbOWGheWuuVxuICAgICAqL1xuICAgIGlubmVySHRtbD86IHN0cmluZzsgLy/pnZnmgIHlhoXlrrlcbiAgICAvKipcbiAgICAgKiDmmL7npLp1cmzlhoXlrrlcbiAgICAgKi9cbiAgICB1cmw/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICog5piv5ZCm5pi+56S65Lit6Ze055qE5oqY5Y+g5oyJ6ZKu77yM5pu/5o2iYnV0dG9uQ29sbGFwc2XlsZ7mgKdcbiAgICAgKi9cbiAgICBjZW50ZXJDb2xsYXBzZT86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICog5piv5ZCm5pi+56S66K6+572u5oyJ6ZKuXG4gICAgICovXG4gICAgYnV0dG9uU2V0dGluZz86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICog6K6+572u5oyJ6ZKu5o+Q56S65paH5pysXG4gICAgICovXG4gICAgYnV0dG9uU2V0dGluZ1RleHQ/OiBzdHJpbmc7XG5cbn1cbi8qKlxuICogUGFuZWzlj4LmlbDpu5jorqTlgLxcbiAqL1xuZXhwb3J0IGNvbnN0IERlZmF1bHRQYW5lbE9wdGlvbnM6IFBhbmVsT3B0aW9ucyA9IHtcbiAgICAvKipcbiAgICAgKiBpZFxuICAgICAqL1xuICAgIGlkOiBcInNzX3BhbmVsXCIsXG4gICAgLyoqXG4gICAgICog5qCH6aKYXG4gICAgICovXG4gICAgdGl0bGU6IFwiU1MgUGFuZWxcIixcbiAgICAvKipcbiAgICAgKiDmmK/lkKbmmL7npLrmoIfpophcbiAgICAgKi9cbiAgICBzaG93VGl0bGU6IHRydWUsXG4gICAgLyoqXG4gICAgICog5piv5ZCm5Li65qih5oCB56qX5Y+jXG4gICAgICovXG4gICAgbW9kYWw6IGZhbHNlLFxuICAgIC8qKlxuICAgICAqIOaYr+WQpuiHquWKqOaJk+W8gFxuICAgICAqL1xuICAgIGF1dG9PcGVuOiBmYWxzZSxcbiAgICAvKipcbiAgICAgKiDliqjnlLvml7bpl7RcbiAgICAgKi9cbiAgICBhbmltYXRpb25UaW1lOiAzMDAsXG4gICAgLyoqXG4gICAgICog6Ieq5a6a5LmJ5qC35byPXG4gICAgICovXG4gICAgY3VzdG9tQ2xhc3M6IFwiXCIsXG4gICAgLyoqXG4gICAgICog5oyJ6ZKu5L2N572uXG4gICAgICovXG4gICAgYnV0dG9uc1Bvc2l0aW9uOiBcInJpZ2h0XCIsXG4gICAgLyoqXG4gICAgICog5piv5ZCm5pi+56S65YWz6Zet5oyJ6ZKuXG4gICAgICovXG4gICAgYnV0dG9uQ2xvc2U6IHRydWUsXG4gICAgLyoqXG4gICAgICog5YWz6Zet5oyJ6ZKu5o+Q56S65paH5pysXG4gICAgICovXG4gICAgYnV0dG9uQ2xvc2VUZXh0OiBcIuWFs+mXrVwiLFxuICAgIC8qKlxuICAgICAqIOaYr+WQpuaYvuekuuacgOWkp+WMluaMiemSrlxuICAgICAqL1xuICAgIGJ1dHRvbk1heGltaXplOiB0cnVlLFxuICAgIC8qKlxuICAgICAqIOacgOWkp+WMluaMiemSruaPkOekuuaWh+acrFxuICAgICAqL1xuICAgIGJ1dHRvbk1heGltaXplVGV4dDogXCLmnIDlpKfljJZcIixcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKi9cbiAgICBidXR0b25Vbm1heGltaXplVGV4dDogXCLov5jljp9cIixcbiAgICAvKipcbiAgICAgKiDmmK/lkKbmmL7npLrmnIDlsI/ljJbmjInpkq5cbiAgICAgKi9cbiAgICBidXR0b25NaW5pbWl6ZTogZmFsc2UsXG4gICAgYnV0dG9uTWluaW1pemVUZXh0OiBcIuacgOWwj+WMllwiLFxuICAgIGJ1dHRvblVubWluaW1pemVUZXh0OiBcIuaJk+W8gFwiLFxuICAgIC8qKlxuICAgICAqIOaYr+WQpuaYvuekuuaUtue8qeaMiemSrlxuICAgICAqL1xuICAgIGJ1dHRvbkNvbGxhcHNlOiB0cnVlLFxuICAgIGJ1dHRvbkNvbGxhcHNlVGV4dDogXCLmlLbnvKlcIixcbiAgICBidXR0b25VbkNvbGxhcHNlVGV4dDogXCLlsZXlvIBcIixcbiAgICAvKipcbiAgICAgKiDmmK/lkKblj6/ku6Xmi5bmi71cbiAgICAgKi9cbiAgICBkcmFnZ2FibGU6IHRydWUsXG4gICAgZHJhZ09wYWNpdHk6IDAuNixcbiAgICAvKipcbiAgICAgKiDmmK/lkKblj6/mlLnlj5jlpKflsI9cbiAgICAgKi9cbiAgICByZXNpemFibGU6IHRydWUsXG4gICAgcmVzaXplT3BhY2l0eTogMC42LFxuICAgIC8qKlxuICAgICAqIOaYr+WQpuaYvuekuuW6lemDqOeKtuaAgeagj1xuICAgICAqL1xuICAgIHN0YXR1c0JhcjogZmFsc2UsXG5cbiAgICAvLyB0b3A6IFwiYXV0b1wiO1xuICAgIC8vIGxlZnQ6IFwiYXV0b1wiO1xuICAgIC8vIHJpZ2h0OiBcImF1dG9cIjtcbiAgICAvLyBib3R0b206IFwiYXV0b1wiO1xuXG4gICAgaGVpZ2h0OiAyMDAsXG4gICAgd2lkdGg6IDQwMCxcbiAgICBtYXhIZWlnaHQ6IHVuZGVmaW5lZCxcbiAgICBtYXhXaWR0aDogdW5kZWZpbmVkLFxuICAgIG1pbkhlaWdodDogMTAwLFxuICAgIG1pbldpZHRoOiAyMDAsXG4gICAgY29sbGFwc2VkV2lkdGg6IHVuZGVmaW5lZCxcblxuICAgIGtlZXBJblZpZXdwb3J0OiB0cnVlLFxuICAgIG1vdXNlTW92ZUV2ZW50czogdHJ1ZSxcblxuICAgIGRvY2tTaWRlOiBQYW5lbERvY2tNb2RlLm5vbmUsXG4gICAgcmVsYXRpdmVUbzogXCJtYXBcIixcbiAgICAvKipcbiAgICAgKiDpnZnmgIFodG1s5YaF5a65XG4gICAgICovXG4gICAgaW5uZXJIdG1sOiBcIlwiLFxuICAgIC8qKlxuICAgICAqIOaYvuekunVybOWGheWuuVxuICAgICAqL1xuICAgIHVybDogXCJcIlxufSJdfQ==