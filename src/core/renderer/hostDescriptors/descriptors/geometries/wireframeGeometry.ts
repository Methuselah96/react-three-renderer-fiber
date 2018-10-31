import {BufferGeometry, Geometry, Material, Mesh, WireframeGeometry} from "three";
import {GeometryContainerType, GeometryWrapperBase} from "../../common/geometryBase";
import {IPropsWithChildren} from "../../common/IPropsWithChildren";
import {IThreeElementPropsBase} from "../../common/IReactThreeRendererElement";
import {WrappedEntityDescriptor} from "../../common/ObjectWrapper";
import {PropertyWrapper} from "../../common/RefWrapper";
import {IRenderableProp, RefWrapper} from "../../common/RefWrapper";
import {IGeometryElementProps, MeshChildType} from "../objects/mesh";

export interface IWireframeGeometryProps extends IPropsWithChildren {
  geometry?: IRenderableProp<BufferGeometry | Geometry, IGeometryElementProps>;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      wireframeGeometry: IThreeElementPropsBase<WireframeGeometry> & IWireframeGeometryProps;
    }
  }
}

class WireframeGeometryWrapper extends GeometryWrapperBase<IWireframeGeometryProps, WireframeGeometry> {
  protected constructGeometry(props: IWireframeGeometryProps): WireframeGeometry {
    if (props.geometry) { return new WireframeGeometry(props.geometry as any); }
    return new (WireframeGeometry as any)();
  }
}

export default class WireframeGeometryDescriptor extends WrappedEntityDescriptor<WireframeGeometryWrapper,
  IWireframeGeometryProps,
  WireframeGeometry,
  GeometryContainerType,
  any> {
  constructor() {
    super(WireframeGeometryWrapper, WireframeGeometry, true);
    new RefWrapper(["geometry"], this)
      .wrapProperty(new PropertyWrapper<WireframeGeometry, IWireframeGeometryProps>("geometry",
        [Geometry, BufferGeometry], (instance, geometry) => {
        this.remountTrigger(instance, undefined, undefined, { geometry });
      }).OnRender((instance, geometry) => {
        if (instance && geometry) {
          this.remountTrigger(instance, undefined, undefined, { geometry });
        }
      }), false);
  }

  public appendInitialChild(instance: WireframeGeometry, child: any): void {
    if (child instanceof Geometry || child instanceof BufferGeometry) {
      this.remountTrigger(instance, undefined, undefined, { geometry: child });
    } else {
      super.appendInitialChild(instance, child);
    }
  }

  public appendChild(instance: WireframeGeometry, child: any): void {
    if (child instanceof Geometry || child instanceof BufferGeometry) {
      this.remountTrigger(instance, undefined, undefined, { geometry: child });
    } else {
      super.appendChild(instance, child);
    }
  }

  public insertBefore(instance: WireframeGeometry, child: any, before: any): void {
    if (child instanceof Geometry || child instanceof BufferGeometry) {
      this.remountTrigger(instance, undefined, undefined, { geometry: child });
    } else {
      super.insertBefore(instance, child, before);
    }
  }

  public removeChild(instance: WireframeGeometry, child: any): void {
    if (child instanceof Geometry || child instanceof BufferGeometry) {
      this.remountTrigger(instance, undefined, undefined, { geometry: new BufferGeometry() });
    } else {
      super.removeChild(instance, child);
    }
  }
}
