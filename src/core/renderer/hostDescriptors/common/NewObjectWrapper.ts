import PropertyGroupDescriptor from "./properties/R3RPropertyGroupDescriptor";
import ReactThreeRendererPropertyDescriptor from "./properties/ReactThreeRendererPropertyDescriptor";
import ReactThreeRendererDescriptor from "./ReactThreeRendererDescriptor";

const remountGroupName = "#r3r-remount#";

export abstract class ObjectWrapper<TProps, TWrapped> {
  public wrappedObject: TWrapped;

  protected constructor(public props: TProps) {
  }

  public remount(newProps: TProps) {
    this.wrappedObject = this.recreateInstance(newProps);
  }

  public abstract willBeAddedToParent(instance: TWrapped, parentInstance: any): boolean;

  public willBeAddedToParentBefore(instance: TWrapped, parentInstance: any, before: any): boolean {
    return this.willBeAddedToParent(instance, parentInstance);
  }

  public abstract willBeRemovedFromParent(instance: TWrapped, container: any): void;

  protected abstract recreateInstance(newProps: TProps): TWrapped;
}

export class WrappedObjectDescriptor<TProps,
  TWrapperInstance extends ObjectWrapper<TProps, TWrappedInstance>,
  TWrappedInstance = any,
  TParent = any,
  TChild = never> extends ReactThreeRendererDescriptor<TProps,
  TWrapperInstance,
  TParent,
  TChild> {
  protected remountTrigger: (instance: TWrapperInstance,
                             newValue: any,
                             oldProps: TProps,
                             newProps: TProps) => void;

  constructor(private wrapperType: new (props: TProps) => TWrapperInstance,
              private typeToWrap: any,
              private delayPropUpdatesUntilMount = false) {
    super();

    this.remountTrigger = (instance: TWrapperInstance,
                           newValue: any,
                           oldProps: TProps,
                           newProps: TProps) => {
      instance.remount(newProps);

      super.applyInitialPropUpdates(instance, newProps);
    };
  }

  public createInstance(props: TProps, rootContainerInstance: any): any {
    return new this.wrapperType(props);
  }

  public applyInitialPropUpdates(instance: TWrapperInstance, props: TProps): void {
    if (!this.delayPropUpdatesUntilMount) {
      super.applyInitialPropUpdates(instance, props);
    }
  }

  public willBeAddedToParent(instance: TWrapperInstance, parentInstance: any): void {
    if (instance.willBeAddedToParent(instance.wrappedObject, parentInstance) && this.delayPropUpdatesUntilMount) {
      super.applyInitialPropUpdates(instance, instance.props);
    }
  }

  public willBeAddedToParentBefore(instance: TWrapperInstance, parentInstance: TParent, before: any): void {
    instance.willBeAddedToParentBefore(instance.wrappedObject, parentInstance, before);

    if (this.delayPropUpdatesUntilMount) {
      super.applyInitialPropUpdates(instance, instance.props);
    }
  }

  public willBeRemovedFromParent(instance: TWrapperInstance, parent: TParent): void {
    instance.willBeRemovedFromParent(instance.wrappedObject, parent);
  }

  protected hasRemountProps(...propNames: string[]): void {
    if (this.propertyGroups[remountGroupName] === undefined) {
      this.propertyGroups[remountGroupName] = new PropertyGroupDescriptor(
        [],
        this.remountTrigger,
        false,
        null).withWantsRepaint(true);
    }

    for (const propName of propNames) {
      this.propertyGroups[remountGroupName].properties.push(propName);

      if (typeof this.propertyDescriptors[propName] !== "undefined") {
        throw new Error(`Property type for ${propName} is already defined.`);
      }

      this.propertyDescriptors[propName] = new ReactThreeRendererPropertyDescriptor(
        remountGroupName,
        null,
        false,
        null,
      ).withWantsRepaint(false);
    }
  }
}
