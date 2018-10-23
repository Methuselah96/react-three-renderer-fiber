import {BufferGeometry, Geometry} from "three";
import {GeometryContainerType, GeometryWrapperBase} from "./newGeometryBase";
import {WrappedObjectDescriptor} from "./NewObjectWrapper";

export function createGeometryDescriptor<TProps>() {
  function create<
    TInstance extends Geometry | BufferGeometry,
    TKey1 extends Extract<keyof TProps, string>,
  >(
    geometryClass: new (param1: TProps[TKey1]) => TInstance,
    constructorArgs: [TKey1],
  ): any;
  function create<
    TInstance extends Geometry | BufferGeometry,
    TKey1 extends Extract<keyof TProps, string>,
    TKey2 extends Extract<keyof TProps, string>,
  >(
    geometryClass: new (param1: TProps[TKey1], param2: TProps[TKey2]) => TInstance,
    constructorArgs: [TKey1, TKey2],
  ): any;
  function create<
    TInstance extends Geometry | BufferGeometry,
    TKey1 extends Extract<keyof TProps, string>,
    TKey2 extends Extract<keyof TProps, string>,
    TKey3 extends Extract<keyof TProps, string>,
  >(
    geometryClass: new (param1: TProps[TKey1], param2: TProps[TKey2], param3: TProps[TKey3]) => TInstance,
    constructorArgs: [TKey1, TKey2, TKey3],
  ): any;
  function create<
    TInstance extends Geometry | BufferGeometry,
    TKey1 extends Extract<keyof TProps, string>,
    TKey2 extends Extract<keyof TProps, string>,
    TKey3 extends Extract<keyof TProps, string>,
    TKey4 extends Extract<keyof TProps, string>,
  >(
    geometryClass: new (param1: TProps[TKey1], param2: TProps[TKey2], param3: TProps[TKey3],
                        param4: TProps[TKey4]) => TInstance,
    constructorArgs: [TKey1, TKey2, TKey3, TKey4],
  ): any;
  function create<
    TInstance extends Geometry | BufferGeometry,
    TKey1 extends Extract<keyof TProps, string>,
    TKey2 extends Extract<keyof TProps, string>,
    TKey3 extends Extract<keyof TProps, string>,
    TKey4 extends Extract<keyof TProps, string>,
    TKey5 extends Extract<keyof TProps, string>,
  >(
    geometryClass: new (param1: TProps[TKey1], param2: TProps[TKey2], param3: TProps[TKey3],
                        param4: TProps[TKey4], param5: TProps[TKey5]) => TInstance,
    constructorArgs: [TKey1, TKey2, TKey3, TKey4, TKey5],
  ): any;
  function create<
    TInstance extends Geometry | BufferGeometry,
    TKey1 extends Extract<keyof TProps, string>,
    TKey2 extends Extract<keyof TProps, string>,
    TKey3 extends Extract<keyof TProps, string>,
    TKey4 extends Extract<keyof TProps, string>,
    TKey5 extends Extract<keyof TProps, string>,
    TKey6 extends Extract<keyof TProps, string>,
  >(
    geometryClass: new (param1: TProps[TKey1], param2: TProps[TKey2], param3: TProps[TKey3],
                        param4: TProps[TKey4], param5: TProps[TKey5], param6: TProps[TKey6]) => TInstance,
    constructorArgs: [TKey1, TKey2, TKey3, TKey4, TKey5, TKey6],
  ): any;
  function create<
    TInstance extends Geometry | BufferGeometry,
    TKey1 extends Extract<keyof TProps, string>,
    TKey2 extends Extract<keyof TProps, string>,
    TKey3 extends Extract<keyof TProps, string>,
    TKey4 extends Extract<keyof TProps, string>,
    TKey5 extends Extract<keyof TProps, string>,
    TKey6 extends Extract<keyof TProps, string>,
    TKey7 extends Extract<keyof TProps, string>,
  >(
    geometryClass: new (param1: TProps[TKey1], param2: TProps[TKey2], param3: TProps[TKey3],
                        param4: TProps[TKey4], param5: TProps[TKey5], param6: TProps[TKey6],
                        param7: TProps[TKey7]) => TInstance,
    constructorArgs: [TKey1, TKey2, TKey3, TKey4, TKey5, TKey6, TKey7],
  ): any;
  function create<
    TInstance extends Geometry | BufferGeometry,
    TKey1 extends Extract<keyof TProps, string>,
    TKey2 extends Extract<keyof TProps, string>,
    TKey3 extends Extract<keyof TProps, string>,
    TKey4 extends Extract<keyof TProps, string>,
    TKey5 extends Extract<keyof TProps, string>,
    TKey6 extends Extract<keyof TProps, string>,
    TKey7 extends Extract<keyof TProps, string>,
    TKey8 extends Extract<keyof TProps, string>,
  >(
    geometryClass: new (param1: TProps[TKey1], param2: TProps[TKey2], param3: TProps[TKey3],
                        param4: TProps[TKey4], param5: TProps[TKey5], param6: TProps[TKey6],
                        param7: TProps[TKey7], param8: TProps[TKey8]) => TInstance,
    constructorArgs: [TKey1, TKey2, TKey3, TKey4, TKey5, TKey6, TKey7, TKey8],
  ): any;
  function create<TInstance extends Geometry | BufferGeometry>(
    geometryClass: new (...args: Array<TProps[Extract<keyof TProps, string>]>) => TInstance,
    constructorArgs: Array<Extract<keyof TProps, string>>) {
    class GeneratedGeometryWrapper extends GeometryWrapperBase<TProps, TInstance> {
      protected constructGeometry(props: TProps): TInstance {
        return new geometryClass(...constructorArgs.map((arg) => props[arg]));
      }
    }

    return class GeneratedGeometryDescriptor extends WrappedObjectDescriptor<TProps,
      GeneratedGeometryWrapper,
      TInstance,
      GeometryContainerType> {
      constructor() {
        super(GeneratedGeometryWrapper, geometryClass);

        this.hasRemountProps(...constructorArgs);
      }
    };
  }
  return create;
}

export function createGeometryAndBufferGeometryDescriptors<TProps>() {

  function create<
    TInstance extends Geometry,
    TBufferInstance extends BufferGeometry,
    TKey1 extends Extract<keyof TProps, string>,
  >(
    geometryClass: new (param1: TProps[TKey1]) => TInstance,
    bufferGeometryClass: new (param1: TProps[TKey1]) => TBufferInstance,
    constructorArgs: [TKey1],
  ): any;
  function create<
    TInstance extends Geometry,
    TBufferInstance extends BufferGeometry,
    TKey1 extends Extract<keyof TProps, string>,
    TKey2 extends Extract<keyof TProps, string>,
  >(
    geometryClass: new (param1: TProps[TKey1], param2: TProps[TKey2]) => TInstance,
    bufferGeometryClass: new (param1: TProps[TKey1], param2: TProps[TKey2]) => TBufferInstance,
    constructorArgs: [TKey1, TKey2],
  ): any;
  function create<
    TInstance extends Geometry,
    TBufferInstance extends BufferGeometry,
    TKey1 extends Extract<keyof TProps, string>,
    TKey2 extends Extract<keyof TProps, string>,
    TKey3 extends Extract<keyof TProps, string>,
  >(
    geometryClass: new (param1: TProps[TKey1], param2: TProps[TKey2], param3: TProps[TKey3]) => TInstance,
    bufferGeometryClass: new (param1: TProps[TKey1], param2: TProps[TKey2], param3: TProps[TKey3]) => TBufferInstance,
    constructorArgs: [TKey1, TKey2, TKey3],
  ): any;
  function create<
    TInstance extends Geometry,
    TBufferInstance extends BufferGeometry,
    TKey1 extends Extract<keyof TProps, string>,
    TKey2 extends Extract<keyof TProps, string>,
    TKey3 extends Extract<keyof TProps, string>,
    TKey4 extends Extract<keyof TProps, string>,
  >(
    geometryClass: new (param1: TProps[TKey1], param2: TProps[TKey2], param3: TProps[TKey3],
                        param4: TProps[TKey4]) => TInstance,
    bufferGeometryClass: new (param1: TProps[TKey1], param2: TProps[TKey2], param3: TProps[TKey3],
                              param4: TProps[TKey4]) => TBufferInstance,
    constructorArgs: [TKey1, TKey2, TKey3, TKey4],
  ): any;
  function create<
    TInstance extends Geometry,
    TBufferInstance extends BufferGeometry,
    TKey1 extends Extract<keyof TProps, string>,
    TKey2 extends Extract<keyof TProps, string>,
    TKey3 extends Extract<keyof TProps, string>,
    TKey4 extends Extract<keyof TProps, string>,
    TKey5 extends Extract<keyof TProps, string>,
    >(
    geometryClass: new (param1: TProps[TKey1], param2: TProps[TKey2], param3: TProps[TKey3],
                        param4: TProps[TKey4], param5: TProps[TKey5]) => TInstance,
    bufferGeometryClass: new (param1: TProps[TKey1], param2: TProps[TKey2], param3: TProps[TKey3],
                              param4: TProps[TKey4], param5: TProps[TKey5]) => TBufferInstance,
    constructorArgs: [TKey1, TKey2, TKey3, TKey4, TKey5],
  ): any;
  function create<
    TInstance extends Geometry,
    TBufferInstance extends BufferGeometry,
    TKey1 extends Extract<keyof TProps, string>,
    TKey2 extends Extract<keyof TProps, string>,
    TKey3 extends Extract<keyof TProps, string>,
    TKey4 extends Extract<keyof TProps, string>,
    TKey5 extends Extract<keyof TProps, string>,
    TKey6 extends Extract<keyof TProps, string>,
  >(
    geometryClass: new (param1: TProps[TKey1], param2: TProps[TKey2], param3: TProps[TKey3],
                        param4: TProps[TKey4], param5: TProps[TKey5], param6: TProps[TKey6]) => TInstance,
    bufferGeometryClass: new (param1: TProps[TKey1], param2: TProps[TKey2], param3: TProps[TKey3],
                              param4: TProps[TKey4], param5: TProps[TKey5], param6: TProps[TKey6]) => TBufferInstance,
    constructorArgs: [TKey1, TKey2, TKey3, TKey4, TKey5, TKey6],
  ): any;
  function create<
    TInstance extends Geometry,
    TBufferInstance extends BufferGeometry,
    TKey1 extends Extract<keyof TProps, string>,
    TKey2 extends Extract<keyof TProps, string>,
    TKey3 extends Extract<keyof TProps, string>,
    TKey4 extends Extract<keyof TProps, string>,
    TKey5 extends Extract<keyof TProps, string>,
    TKey6 extends Extract<keyof TProps, string>,
    TKey7 extends Extract<keyof TProps, string>,
  >(
    geometryClass: new (param1: TProps[TKey1], param2: TProps[TKey2], param3: TProps[TKey3],
                        param4: TProps[TKey4], param5: TProps[TKey5], param6: TProps[TKey6],
                        param7: TProps[TKey7]) => TInstance,
    bufferGeometryClass: new (param1: TProps[TKey1], param2: TProps[TKey2], param3: TProps[TKey3],
                              param4: TProps[TKey4], param5: TProps[TKey5], param6: TProps[TKey6],
                              param7: TProps[TKey7]) => TBufferInstance,
    constructorArgs: [TKey1, TKey2, TKey3, TKey4, TKey5, TKey6, TKey7],
  ): any;
  function create<
    TInstance extends Geometry,
    TBufferInstance extends BufferGeometry,
    TKey1 extends Extract<keyof TProps, string>,
    TKey2 extends Extract<keyof TProps, string>,
    TKey3 extends Extract<keyof TProps, string>,
    TKey4 extends Extract<keyof TProps, string>,
    TKey5 extends Extract<keyof TProps, string>,
    TKey6 extends Extract<keyof TProps, string>,
    TKey7 extends Extract<keyof TProps, string>,
    TKey8 extends Extract<keyof TProps, string>,
  >(
    geometryClass: new (param1: TProps[TKey1], param2: TProps[TKey2], param3: TProps[TKey3],
                        param4: TProps[TKey4], param5: TProps[TKey5], param6: TProps[TKey6],
                        param7: TProps[TKey7], param8: TProps[TKey8]) => TInstance,
    bufferGeometryClass: new (param1: TProps[TKey1], param2: TProps[TKey2], param3: TProps[TKey3],
                              param4: TProps[TKey4], param5: TProps[TKey5], param6: TProps[TKey6],
                              param7: TProps[TKey7], param8: TProps[TKey8]) => TBufferInstance,
    constructorArgs: [TKey1, TKey2, TKey3, TKey4, TKey5, TKey6, TKey7, TKey8],
  ): any;
  function create<TInstance extends Geometry, TBufferInstance extends BufferGeometry>(
    geometryClass: new (...args: Array<TProps[Extract<keyof TProps, string>]>) => TInstance,
    bufferGeometryClass: new (...args: Array<TProps[Extract<keyof TProps, string>]>) => TBufferInstance,
    constructorArgs: Array<Extract<keyof TProps, string>>) {
    return {
      bufferGeometryDescriptor: createGeometryDescriptor<TProps>()(
        bufferGeometryClass,
        constructorArgs as [Extract<keyof TProps, string>],
      ),
      geometryDescriptor: createGeometryDescriptor<TProps>()(
        geometryClass,
        constructorArgs as [Extract<keyof TProps, string>],
      ),
    };
  }
  return create;
}
