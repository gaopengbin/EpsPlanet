export class IdGenerater {
    static newGuid(format = "N") {
        let d = new Date().getTime();
        let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
            let r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
        if (format === "N" || format === "n") {
            uuid = uuid.replace(/-/g, "");
        }
        if (format === "B" || format === "b") {
            uuid = `{${uuid}}`;
        }
        if (format === "P" || format === "p") {
            uuid = `(${uuid})`;
        }
        if (format === "X" || format === "x") {
        }
        return uuid;
    }
    ;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWQtZ2VuZXJhdGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvZXBzZ2lzL3V0aWxzL2lkLWdlbmVyYXRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQSxNQUFNLE9BQU8sV0FBVztJQUlwQixNQUFNLENBQUMsT0FBTyxDQUFDLFNBQWlCLEdBQUc7UUFDL0IsSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUM3QixJQUFJLElBQUksR0FBRyxzQ0FBc0MsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUU7WUFFckUsSUFDSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFFMUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1lBRXZCLE9BQU8sQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUV6RCxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksTUFBTSxLQUFLLEdBQUcsSUFBSSxNQUFNLEtBQUssR0FBRyxFQUFFO1lBQ2xDLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztTQUNqQztRQUNELElBQUksTUFBTSxLQUFLLEdBQUcsSUFBSSxNQUFNLEtBQUssR0FBRyxFQUFFO1lBQ2xDLElBQUksR0FBRyxJQUFJLElBQUksR0FBRyxDQUFDO1NBQ3RCO1FBQ0QsSUFBSSxNQUFNLEtBQUssR0FBRyxJQUFJLE1BQU0sS0FBSyxHQUFHLEVBQUU7WUFDbEMsSUFBSSxHQUFHLElBQUksSUFBSSxHQUFHLENBQUM7U0FDdEI7UUFDRCxJQUFJLE1BQU0sS0FBSyxHQUFHLElBQUksTUFBTSxLQUFLLEdBQUcsRUFBRTtTQUVyQztRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFBQSxDQUFDO0NBQ0wiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIGlkIOeUn+aIkOWZqCBjcmVhdGUgYnkgcnVpclxuICovXG5leHBvcnQgY2xhc3MgSWRHZW5lcmF0ZXIge1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqL1xuICAgIHN0YXRpYyBuZXdHdWlkKGZvcm1hdDogc3RyaW5nID0gXCJOXCIpIHtcbiAgICAgICAgbGV0IGQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgbGV0IHV1aWQgPSAneHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4Jy5yZXBsYWNlKC9beHldL2csIChjKSA9PiB7XG5cbiAgICAgICAgICAgIGxldFxuICAgICAgICAgICAgICAgIHIgPSAoZCArIE1hdGgucmFuZG9tKCkgKiAxNikgJSAxNiB8IDA7XG5cbiAgICAgICAgICAgIGQgPSBNYXRoLmZsb29yKGQgLyAxNik7XG5cbiAgICAgICAgICAgIHJldHVybiAoYyA9PSAneCcgPyByIDogKHIgJiAweDMgfCAweDgpKS50b1N0cmluZygxNik7XG5cbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChmb3JtYXQgPT09IFwiTlwiIHx8IGZvcm1hdCA9PT0gXCJuXCIpIHtcbiAgICAgICAgICAgIHV1aWQgPSB1dWlkLnJlcGxhY2UoLy0vZywgXCJcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZvcm1hdCA9PT0gXCJCXCIgfHwgZm9ybWF0ID09PSBcImJcIikge1xuICAgICAgICAgICAgdXVpZCA9IGB7JHt1dWlkfX1gO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmb3JtYXQgPT09IFwiUFwiIHx8IGZvcm1hdCA9PT0gXCJwXCIpIHtcbiAgICAgICAgICAgIHV1aWQgPSBgKCR7dXVpZH0pYDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZm9ybWF0ID09PSBcIlhcIiB8fCBmb3JtYXQgPT09IFwieFwiKSB7XG4gICAgICAgICAgICAvL1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1dWlkO1xuICAgIH07XG59XG4iXX0=