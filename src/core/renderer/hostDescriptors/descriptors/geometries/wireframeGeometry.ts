import {BufferGeometry, Geometry, WireframeGeometry} from "three";
import {GeometryContainerType, GeometryWrapperBase} from "../../common/geometryBase";
import {IThreeElementPropsBase} from "../../common/IReactThreeRendererElement";
import {WrappedEntityDescriptor} from "../../common/ObjectWrapper";
import {PropertyWrapper} from "../../common/RefWrapper";
import {IRenderableProp, RefWrapper} from "../../common/RefWrapper";
import {IGeometryElementProps} from "../objects/mesh";

export interface IWireframeGeometryProps {
  geometry: IRenderableProp<BufferGeometry | Geometry, IGeometryElementProps>;
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
  GeometryContainerType> {
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
}
