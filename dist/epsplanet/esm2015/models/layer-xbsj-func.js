import { LayerType } from './layer';
export function newXbsjFolderNode(title) {
    return {
        title: title,
        children: []
    };
}
export function newXbsjLayerNode(type, title, url) {
    const _type = type.toLocaleLowerCase();
    let result = { czmObject: null };
    switch (_type) {
        case LayerType.Imagery.toLocaleLowerCase():
            result.czmObject = newXbsjImageryLayerNode(title, url);
            break;
        case LayerType.Tileset.toLocaleLowerCase():
            result.czmObject = newXbsjTilesetLayerNode(title, url);
            break;
        case LayerType.Terrain.toLocaleLowerCase():
            result.czmObject = newXbsjTerrainLayerNode(title, url);
            break;
        default:
            break;
    }
    return result;
}
function newXbsjImageryLayerNode(title, url) {
    let node = {
        xbsjType: LayerType.Imagery,
        name: title,
        enable: true,
        show: true,
        xbsjImageryProvider: {
            XbsjImageryProvider: {
                url: url
            }
        }
    };
    return node;
}
function newXbsjTilesetLayerNode(title, url) {
    let node = {
        xbsjType: LayerType.Tileset,
        name: title,
        url: url,
        enable: true,
        show: true,
    };
    return node;
}
function newXbsjTerrainLayerNode(title, url) {
    return {
        xbsjType: LayerType.Terrain,
        name: title,
        enable: true,
        show: true,
        xbsjTerrainProvider: {
            type: "XbsjCesiumTerrainProvider",
            XbsjEllipsoidTerrainProvider: {},
            XbsjCesiumTerrainProvider: {
                url: url,
                requestVertexNormals: true,
                requestWaterMask: true
            }
        }
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5ZXIteGJzai1mdW5jLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvZXBzcGxhbmV0L21vZGVscy9sYXllci14YnNqLWZ1bmMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUVwQyxNQUFNLFVBQVUsaUJBQWlCLENBQUMsS0FBYTtJQUMzQyxPQUFPO1FBQ0gsS0FBSyxFQUFFLEtBQUs7UUFDWixRQUFRLEVBQUUsRUFBRTtLQUNmLENBQUM7QUFDTixDQUFDO0FBRUQsTUFBTSxVQUFVLGdCQUFnQixDQUFDLElBQVksRUFBRSxLQUFhLEVBQUUsR0FBVztJQUNyRSxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUN2QyxJQUFJLE1BQU0sR0FBbUIsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLENBQUM7SUFDakQsUUFBUSxLQUFLLEVBQUU7UUFDWCxLQUFLLFNBQVMsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLEVBQUU7WUFDdEMsTUFBTSxDQUFDLFNBQVMsR0FBRyx1QkFBdUIsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDdkQsTUFBTTtRQUNWLEtBQUssU0FBUyxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRTtZQUN0QyxNQUFNLENBQUMsU0FBUyxHQUFHLHVCQUF1QixDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztZQUN2RCxNQUFNO1FBQ1YsS0FBSyxTQUFTLENBQUMsT0FBTyxDQUFDLGlCQUFpQixFQUFFO1lBQ3RDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsdUJBQXVCLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ3ZELE1BQU07UUFDVjtZQUNJLE1BQU07S0FDYjtJQUNELE9BQU8sTUFBTSxDQUFDO0FBQ2xCLENBQUM7QUFDRCxTQUFTLHVCQUF1QixDQUFDLEtBQWEsRUFBRSxHQUFXO0lBQ3ZELElBQUksSUFBSSxHQUEwQjtRQUM5QixRQUFRLEVBQUUsU0FBUyxDQUFDLE9BQU87UUFDM0IsSUFBSSxFQUFFLEtBQUs7UUFDWCxNQUFNLEVBQUUsSUFBSTtRQUNaLElBQUksRUFBRSxJQUFJO1FBQ1YsbUJBQW1CLEVBQUU7WUFDakIsbUJBQW1CLEVBQUU7Z0JBQ2pCLEdBQUcsRUFBRSxHQUFHO2FBQ1g7U0FDSjtLQUVKLENBQUM7SUFDRixPQUFPLElBQUksQ0FBQztBQUNoQixDQUFDO0FBRUQsU0FBUyx1QkFBdUIsQ0FBQyxLQUFhLEVBQUUsR0FBVztJQUN2RCxJQUFJLElBQUksR0FBMEI7UUFDOUIsUUFBUSxFQUFFLFNBQVMsQ0FBQyxPQUFPO1FBQzNCLElBQUksRUFBRSxLQUFLO1FBQ1gsR0FBRyxFQUFFLEdBQUc7UUFDUixNQUFNLEVBQUUsSUFBSTtRQUNaLElBQUksRUFBRSxJQUFJO0tBQ2IsQ0FBQztJQUNGLE9BQU8sSUFBSSxDQUFDO0FBQ2hCLENBQUM7QUFFRCxTQUFTLHVCQUF1QixDQUFDLEtBQWEsRUFBRSxHQUFXO0lBQ3ZELE9BQU87UUFDSCxRQUFRLEVBQUUsU0FBUyxDQUFDLE9BQU87UUFDM0IsSUFBSSxFQUFFLEtBQUs7UUFDWCxNQUFNLEVBQUUsSUFBSTtRQUNaLElBQUksRUFBRSxJQUFJO1FBQ1YsbUJBQW1CLEVBQUU7WUFDakIsSUFBSSxFQUFFLDJCQUEyQjtZQUNqQyw0QkFBNEIsRUFBRSxFQUFFO1lBQ2hDLHlCQUF5QixFQUFFO2dCQUN2QixHQUFHLEVBQUUsR0FBRztnQkFDUixvQkFBb0IsRUFBRSxJQUFJO2dCQUMxQixnQkFBZ0IsRUFBRSxJQUFJO2FBQ3pCO1NBQ0o7S0FDSixDQUFBO0FBQ0wsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy/liJ3lp4vljJbkuIDkuKrnqbrnmoTlr7nosaFcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuaW1wb3J0IHsgSVhic2pDem1PYmplY3QsIElYYnNqSW1hZ2VyeUxheWVyTm9kZSwgSVhic2pUaWxlc2V0TGF5ZXJOb2RlLCBJWGJzalRlcnJhaW5MYXllck5vZGUgfSBmcm9tICcuL2xheWVyLXhic2onO1xuaW1wb3J0IHsgSUxheWVyRm9sZGVyIH0gZnJvbSAnLi9sYXllci1jb25maWcnO1xuaW1wb3J0IHsgTGF5ZXJUeXBlIH0gZnJvbSAnLi9sYXllcic7XG5cbmV4cG9ydCBmdW5jdGlvbiBuZXdYYnNqRm9sZGVyTm9kZSh0aXRsZTogc3RyaW5nKTogSUxheWVyRm9sZGVyIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgIGNoaWxkcmVuOiBbXVxuICAgIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuZXdYYnNqTGF5ZXJOb2RlKHR5cGU6IHN0cmluZywgdGl0bGU6IHN0cmluZywgdXJsOiBzdHJpbmcpOiBJWGJzakN6bU9iamVjdCB7XG4gICAgY29uc3QgX3R5cGUgPSB0eXBlLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG4gICAgbGV0IHJlc3VsdDogSVhic2pDem1PYmplY3QgPSB7IGN6bU9iamVjdDogbnVsbCB9O1xuICAgIHN3aXRjaCAoX3R5cGUpIHtcbiAgICAgICAgY2FzZSBMYXllclR5cGUuSW1hZ2VyeS50b0xvY2FsZUxvd2VyQ2FzZSgpOlxuICAgICAgICAgICAgcmVzdWx0LmN6bU9iamVjdCA9IG5ld1hic2pJbWFnZXJ5TGF5ZXJOb2RlKHRpdGxlLCB1cmwpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgTGF5ZXJUeXBlLlRpbGVzZXQudG9Mb2NhbGVMb3dlckNhc2UoKTpcbiAgICAgICAgICAgIHJlc3VsdC5jem1PYmplY3QgPSBuZXdYYnNqVGlsZXNldExheWVyTm9kZSh0aXRsZSwgdXJsKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIExheWVyVHlwZS5UZXJyYWluLnRvTG9jYWxlTG93ZXJDYXNlKCk6XG4gICAgICAgICAgICByZXN1bHQuY3ptT2JqZWN0ID0gbmV3WGJzalRlcnJhaW5MYXllck5vZGUodGl0bGUsIHVybCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbmV3WGJzakltYWdlcnlMYXllck5vZGUodGl0bGU6IHN0cmluZywgdXJsOiBzdHJpbmcpOiBJWGJzakltYWdlcnlMYXllck5vZGUge1xuICAgIGxldCBub2RlOiBJWGJzakltYWdlcnlMYXllck5vZGUgPSB7XG4gICAgICAgIHhic2pUeXBlOiBMYXllclR5cGUuSW1hZ2VyeSxcbiAgICAgICAgbmFtZTogdGl0bGUsXG4gICAgICAgIGVuYWJsZTogdHJ1ZSxcbiAgICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgICAgeGJzakltYWdlcnlQcm92aWRlcjoge1xuICAgICAgICAgICAgWGJzakltYWdlcnlQcm92aWRlcjoge1xuICAgICAgICAgICAgICAgIHVybDogdXJsXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH07XG4gICAgcmV0dXJuIG5vZGU7XG59XG5cbmZ1bmN0aW9uIG5ld1hic2pUaWxlc2V0TGF5ZXJOb2RlKHRpdGxlOiBzdHJpbmcsIHVybDogc3RyaW5nKTogSVhic2pUaWxlc2V0TGF5ZXJOb2RlIHtcbiAgICBsZXQgbm9kZTogSVhic2pUaWxlc2V0TGF5ZXJOb2RlID0ge1xuICAgICAgICB4YnNqVHlwZTogTGF5ZXJUeXBlLlRpbGVzZXQsXG4gICAgICAgIG5hbWU6IHRpdGxlLFxuICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgZW5hYmxlOiB0cnVlLFxuICAgICAgICBzaG93OiB0cnVlLFxuICAgIH07XG4gICAgcmV0dXJuIG5vZGU7XG59XG5cbmZ1bmN0aW9uIG5ld1hic2pUZXJyYWluTGF5ZXJOb2RlKHRpdGxlOiBzdHJpbmcsIHVybDogc3RyaW5nKTogSVhic2pUZXJyYWluTGF5ZXJOb2RlIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB4YnNqVHlwZTogTGF5ZXJUeXBlLlRlcnJhaW4sXG4gICAgICAgIG5hbWU6IHRpdGxlLFxuICAgICAgICBlbmFibGU6IHRydWUsXG4gICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgIHhic2pUZXJyYWluUHJvdmlkZXI6IHtcbiAgICAgICAgICAgIHR5cGU6IFwiWGJzakNlc2l1bVRlcnJhaW5Qcm92aWRlclwiLFxuICAgICAgICAgICAgWGJzakVsbGlwc29pZFRlcnJhaW5Qcm92aWRlcjoge30sXG4gICAgICAgICAgICBYYnNqQ2VzaXVtVGVycmFpblByb3ZpZGVyOiB7XG4gICAgICAgICAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgICAgICAgICAgcmVxdWVzdFZlcnRleE5vcm1hbHM6IHRydWUsXG4gICAgICAgICAgICAgICAgcmVxdWVzdFdhdGVyTWFzazogdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSJdfQ==