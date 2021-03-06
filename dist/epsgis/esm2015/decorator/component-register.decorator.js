export const ComponentRegistry = new Map();
export const ComponentRegister = (info) => {
    return (cls) => {
        if (cls.getCompInfo && typeof cls.getCompInfo === "function") {
            const c = cls.getCompInfo();
            if (!info.path) {
                info.path = c.path;
            }
            if (!info.name) {
                info.name = c.name;
            }
        }
        cls.prototype.getCompInfo = function () {
            return info;
        };
        const reg = Object.assign({}, info, { component: cls });
        ComponentRegistry.set(info.uri.toLocaleLowerCase(), reg);
    };
};
export function findComponentInfo(uri) {
    if (!uri) {
        return undefined;
    }
    return ComponentRegistry.get(uri.toLocaleLowerCase());
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LXJlZ2lzdGVyLmRlY29yYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2Vwc2dpcy9kZWNvcmF0b3IvY29tcG9uZW50LXJlZ2lzdGVyLmRlY29yYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLENBQUMsTUFBTSxpQkFBaUIsR0FBMEMsSUFBSSxHQUFHLEVBQUUsQ0FBQztBQW1CbEYsTUFBTSxDQUFDLE1BQU0saUJBQWlCLEdBQUcsQ0FBQyxJQUFvQixFQUFPLEVBQUU7SUFDN0QsT0FBTyxDQUFDLEdBQVEsRUFBRSxFQUFFO1FBSWxCLElBQUksR0FBRyxDQUFDLFdBQVcsSUFBSSxPQUFPLEdBQUcsQ0FBQyxXQUFXLEtBQUssVUFBVSxFQUFFO1lBRTVELE1BQU0sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtnQkFDZCxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7YUFDcEI7WUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtnQkFDZCxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7YUFDcEI7U0FDRjtRQUVELEdBQUcsQ0FBQyxTQUFTLENBQUMsV0FBVyxHQUFHO1lBQzFCLE9BQU8sSUFBSSxDQUFDO1FBQ2QsQ0FBQyxDQUFBO1FBQ0QsTUFBTSxHQUFHLEdBQTZCLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBRWxGLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGlCQUFpQixFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDM0QsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBS0YsTUFBTSxVQUFVLGlCQUFpQixDQUFDLEdBQVc7SUFDM0MsSUFBSSxDQUFDLEdBQUcsRUFBRTtRQUNSLE9BQU8sU0FBUyxDQUFDO0tBQ2xCO0lBRUQsT0FBTyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQztBQUN4RCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IENvbXBvbmVudFJlZ2lzdHJ5OiBNYXA8c3RyaW5nLCBJUmVnaXN0ZXJlZENvbXBvbmVudEluZm8+ID0gbmV3IE1hcCgpO1xuLy8gV2Vha01hcFxuZXhwb3J0IGludGVyZmFjZSBJQ29tcG9uZW50SW5mbyB7XG4gIC8qKlxuICAgKiDpgInmi6nlmajmiJbllK/kuIDlgaXlgLxcbiAgICovXG4gIHVyaTogc3RyaW5nXG4gIC8qKlxuICAgKiDnu4Tku7bot6/lvoRcbiAgICovXG4gIHBhdGg/OiBzdHJpbmc7XG4gIG5hbWU/OiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIElSZWdpc3RlcmVkQ29tcG9uZW50SW5mbyBleHRlbmRzIElDb21wb25lbnRJbmZvIHtcbiAgY29tcG9uZW50OiBhbnk7XG59XG4vKipcbiAqIOe7hOS7tuazqOWGjFxuICovXG5leHBvcnQgY29uc3QgQ29tcG9uZW50UmVnaXN0ZXIgPSAoaW5mbzogSUNvbXBvbmVudEluZm8pOiBhbnkgPT4ge1xuICByZXR1cm4gKGNsczogYW55KSA9PiB7XG4gICAgLy8gaWYoKDxCYXNlV2lkZ2V0Q29tcG9uZW50PmNscykuZ2V0Q29tcEluZm8oKSl7XG5cbiAgICAvLyB9XG4gICAgaWYgKGNscy5nZXRDb21wSW5mbyAmJiB0eXBlb2YgY2xzLmdldENvbXBJbmZvID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIC8vIOWmguaenOmHjeWGmeS6hmdldENvbXBJbmZvXG4gICAgICBjb25zdCBjID0gY2xzLmdldENvbXBJbmZvKCk7XG4gICAgICBpZiAoIWluZm8ucGF0aCkge1xuICAgICAgICBpbmZvLnBhdGggPSBjLnBhdGg7XG4gICAgICB9XG4gICAgICBpZiAoIWluZm8ubmFtZSkge1xuICAgICAgICBpbmZvLm5hbWUgPSBjLm5hbWU7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIGNscy5fY29tcEluZm8gPSBpbmZvOy8v6Z2Z5oCB5bGe5oCnXG4gICAgY2xzLnByb3RvdHlwZS5nZXRDb21wSW5mbyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cbiAgICBjb25zdCByZWc6IElSZWdpc3RlcmVkQ29tcG9uZW50SW5mbyA9IE9iamVjdC5hc3NpZ24oe30sIGluZm8sIHsgY29tcG9uZW50OiBjbHMgfSk7XG4gICAgLy/liIforrDnm7jlkIxrZXnooqvopobnm5bvvIznoa7kv51zZWxlY3RvcuWUr+S4gFxuICAgIENvbXBvbmVudFJlZ2lzdHJ5LnNldChpbmZvLnVyaS50b0xvY2FsZUxvd2VyQ2FzZSgpLCByZWcpO1xuICB9O1xufTtcbi8qKlxuICogXG4gKiBAcGFyYW0gdXJpIFxuICovXG5leHBvcnQgZnVuY3Rpb24gZmluZENvbXBvbmVudEluZm8odXJpOiBzdHJpbmcpIHtcbiAgaWYgKCF1cmkpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG4gIC8v5aSn5bCP5YaZ5LiN5LiA6Ie05pe25Y+W5LiN5Yiw5YC8Li4u5a2Y5pe257uf5LiA6L2s5Li65bCP5YaZ77yfXG4gIHJldHVybiBDb21wb25lbnRSZWdpc3RyeS5nZXQodXJpLnRvTG9jYWxlTG93ZXJDYXNlKCkpO1xufSJdfQ==