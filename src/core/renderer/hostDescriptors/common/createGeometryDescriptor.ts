import {BufferGeometry, Geometry} from "three";
import {GeometryContainerType, GeometryWrapperBase} from "./geometryBase";
import {WrappedEntityDescriptor} from "./ObjectWrapper";

interface IPropSettings<TKey> {
  propName: TKey;
  requiresRemount?: boolean;
}
type PropSettingsParameter<TKey> = TKey | IPropSettings<TKey>;

export function createGeometryDescriptor<TProps>() {
  function create<
    TInstance extends Geometry | BufferGeometry,
    TKey1 extends Extract<keyof TProps, string>,
  >(
    geometryClass: new (param1: TProps[TKey1]) => TInstance,
    props: [PropSettingsParameter<TKey1>],
  ): any;
  function create<
    TInstance extends Geometry | BufferGeometry,
    TKey1 extends Extract<keyof TProps, string>,
    TKey2 extends Extract<keyof TProps, string>,
  >(
    geometryClass: new (param1: TProps[TKey1], param2: TProps[TKey2]) => TInstance,
    props: [PropSettingsParameter<TKey1>, PropSettingsParameter<TKey2>],
  ): any;
  function create<
    TInstance extends Geometry | BufferGeometry,
    TKey1 extends Extract<keyof TProps, string>,
    TKey2 extends Extract<keyof TProps, string>,
    TKey3 extends Extract<keyof TProps, string>,
  >(
    geometryClass: new (param1: TProps[TKey1], param2: TProps[TKey2], param3: TProps[TKey3]) => TInstance,
    props: [PropSettingsParameter<TKey1>, PropSettingsParameter<TKey2>, PropSettingsParameter<TKey3>],
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
    props: [PropSettingsParameter<TKey1>, PropSettingsParameter<TKey2>, PropSettingsParameter<TKey3>,
      PropSettingsParameter<TKey4>],
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
    props: [PropSettingsParameter<TKey1>, PropSettingsParameter<TKey2>, PropSettingsParameter<TKey3>,
      PropSettingsParameter<TKey4>, PropSettingsParameter<TKey5>],
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
    props: [PropSettingsParameter<TKey1>, PropSettingsParameter<TKey2>, PropSettingsParameter<TKey3>,
      PropSettingsParameter<TKey4>, PropSettingsParameter<TKey5>, PropSettingsParameter<TKey6>],
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
    props: [PropSettingsParameter<TKey1>, PropSettingsParameter<TKey2>, PropSettingsParameter<TKey3>,
      PropSettingsParameter<TKey4>, PropSettingsParameter<TKey5>, PropSettingsParameter<TKey6>,
      PropSettingsParameter<TKey7>],
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
    props: [PropSettingsParameter<TKey1>, PropSettingsParameter<TKey2>, PropSettingsParameter<TKey3>,
      PropSettingsParameter<TKey4>, PropSettingsParameter<TKey5>, PropSettingsParameter<TKey6>,
      PropSettingsParameter<TKey7>, PropSettingsParameter<TKey8>],
  ): any;
  function create<TInstance extends Geometry | BufferGeometry>(
    geometryClass: new (...args: Array<TProps[Extract<keyof TProps, string>]>) => TInstance,
    testProps: Array<PropSettingsParameter<Extract<keyof TProps, string>>>) {
    class GeneratedGeometryWrapper extends GeometryWrapperBase<TProps, TInstance> {
      protected constructGeometry(props: TProps): TInstance {
        return new geometryClass(...testProps.map((arg) => props[arg]));
      }
    }

    return class GeneratedGeometryDescriptor extends WrappedEntityDescriptor<GeneratedGeometryWrapper,
      TProps,
      TInstance,
      GeometryContainerType> {
      constructor() {
        super(GeneratedGeometryWrapper, geometryClass);

        this.hasRemountProps(...remountProps);
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
    remountProps: [TKey1],
  ): any;
  function create<
    TInstance extends Geometry,
    TBufferInstance extends BufferGeometry,
    TKey1 extends Extract<keyof TProps, string>,
    TKey2 extends Extract<keyof TProps, string>,
  >(
    geometryClass: new (param1: TProps[TKey1], param2: TProps[TKey2]) => TInstance,
    bufferGeometryClass: new (param1: TProps[TKey1], param2: TProps[TKey2]) => TBufferInstance,
    remountProps: [TKey1, TKey2],
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
    remountProps: [TKey1, TKey2, TKey3],
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
    remountProps: [TKey1, TKey2, TKey3, TKey4],
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
    remountProps: [TKey1, TKey2, TKey3, TKey4, TKey5],
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
    remountProps: [TKey1, TKey2, TKey3, TKey4, TKey5, TKey6],
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
    remountProps: [TKey1, TKey2, TKey3, TKey4, TKey5, TKey6, TKey7],
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
    remountProps: [TKey1, TKey2, TKey3, TKey4, TKey5, TKey6, TKey7, TKey8],
  ): any;
  function create<TInstance extends Geometry, TBufferInstance extends BufferGeometry>(
    geometryClass: new (...args: Array<TProps[Extract<keyof TProps, string>]>) => TInstance,
    bufferGeometryClass: new (...args: Array<TProps[Extract<keyof TProps, string>]>) => TBufferInstance,
    remountProps: Array<Extract<keyof TProps, string>>) {
    return {
      bufferGeometryDescriptor: createGeometryDescriptor<TProps>()(
        bufferGeometryClass,
        remountProps as [Extract<keyof TProps, string>],
      ),
      geometryDescriptor: createGeometryDescriptor<TProps>()(
        geometryClass,
        remountProps as [Extract<keyof TProps, string>],
      ),
    };
  }
  return create;
}
