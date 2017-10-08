import {
  Camera,
  RenderTarget,
  Scene,
  WebGLRenderer,
  WebGLRendererParameters,
} from "three";
import {getWrappedAttributes, WrappedEntityDescriptor, WrapperDetails} from "../common/ObjectWrapper";

function createRendererWithoutLogging(parameters: WebGLRendererParameters): WebGLRenderer {
  const oldLog = window.console.log;

  window.console.log = () => {
    /* no-op on purpose */
  };

  const renderer = new WebGLRenderer(parameters);

  window.console.log = oldLog;

  return renderer;
}

class RendererWrapperDetails extends WrapperDetails<IWebGLRendererProps, WebGLRenderer> {
  private containerIsCanvas: boolean;

  public addedToParent(instance: WebGLRenderer, container: Node): void {
    const propsToUse: IWebGLRendererProps = Object.assign({}, this.props);

    if (container instanceof HTMLCanvasElement) {
      this.containerIsCanvas = true;
      // canvas = container;

      propsToUse.canvas = container;
    }

    const webglRenderer = createRendererWithoutLogging(propsToUse);

    if (!this.containerIsCanvas) {
      container.appendChild(webglRenderer.domElement);
    }

    this.wrapObject(webglRenderer);
  }

  public willBeRemovedFromParent(instance: WebGLRenderer, container: any): void {
    const actualRenderer = this.wrappedObject;

    if (actualRenderer !== null) {
      const contextLossExtension = actualRenderer.extensions.get("WEBGL_lose_context");

      if (contextLossExtension) {
        // noinspection JSUnresolvedFunction
        contextLossExtension.loseContext();
      }

      actualRenderer.dispose();

      if (!this.containerIsCanvas && actualRenderer.domElement.parentNode !== null) {
        actualRenderer.domElement.parentNode.removeChild(actualRenderer.domElement);
      }
    }
  }

  public wrapObject(rendererInstance: WebGLRenderer) {
    super.wrapObject(rendererInstance);

    const property = Object.getOwnPropertyDescriptor(rendererInstance, "render");

    // if (propertyName === "render" && typeof window !== "undefined" && typeof window.console !== "undefined") {
    Object.defineProperty(this.wrapper, "render", {
      configurable: property.configurable,
      enumerable: property.enumerable,
      get: () => {
        return (scene: Scene, camera: Camera, renderTarget?: RenderTarget, forceClear?: boolean) => {
          const oldWarn = window.console.warn;

          // get rid of useless message but warn about everything else
          window.console.warn = (...args: string[]) => {
            if (args.length === 2
              && args[0] === "THREE.WebGLProgram: gl.getProgramInfoLog()"
              && args[1].match(/^\s*$/) !== null) {
              return;
            }

            oldWarn.call(window.console, ...args);
          };

          rendererInstance.render(scene, camera, renderTarget, forceClear);

          window.console.warn = oldWarn;

          // redefine to wrap
          Object.defineProperty(this.wrapper, "render", getWrappedAttributes(property, rendererInstance, "render"));
        };
      },
    });
  }

  protected recreateInstance(newProps: WebGLRendererParameters): WebGLRenderer {
    const lastRenderer = this.wrappedObject;

    if (lastRenderer !== null) {
      const contextLossExtension = lastRenderer.extensions.get("WEBGL_lose_context");

      if (contextLossExtension) {
        // noinspection JSUnresolvedFunction
        contextLossExtension.loseContext();
      }

      lastRenderer.dispose();

      const propsToUse = Object.assign({}, newProps);

      if (this.containerIsCanvas) {
        propsToUse.canvas = lastRenderer.domElement;
      }

      const newRenderer = createRendererWithoutLogging(propsToUse);

      if (!this.containerIsCanvas) {
        const parentNode: Node | null = lastRenderer.domElement.parentNode;
        if (parentNode !== null) {
          parentNode.removeChild(lastRenderer.domElement);
          parentNode.appendChild(newRenderer.domElement);
        }
      }

      // otherwise we don't need to do anything, a new context should have been created

      return newRenderer;
    }

    // it's not even mounted yet...
    throw new Error("props were modified before webGLRenderer could be mounted...\n" +
      "How did this happen?\n" +
      "Please create an issue with details!");
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      webGLRenderer: IReactThreeRendererElement<WebGLRenderer> & IWebGLRendererProps;
    }
  }
}

interface IWebGLRendererProps extends WebGLRendererParameters {
  width: number;
  height: number;
}

class WebGLRendererDescriptor extends WrappedEntityDescriptor<IWebGLRendererProps,
  any,
  HTMLCanvasElement,
  Scene,
  RendererWrapperDetails> {
  constructor() {
    super(RendererWrapperDetails, WebGLRenderer, true);

    this.hasPropGroup(["width", "height"], (instance: WebGLRenderer,
                                            newSize: {
                                              width?: number,
                                              height?: number,
                                            }) => {
      const updatedSize: { width: number, height: number } = Object.assign({}, instance.getSize(), newSize);

      instance.setSize(updatedSize.width, updatedSize.height);
    });

    this.hasRemountProps("antialias", "alpha");

    this.hasProp("devicePixelRatio", (instance: WebGLRenderer,
                                      newValue: number): void => {
      instance.setPixelRatio(newValue);
    });

    this.hasPropGroup(["clearColor", "clearAlpha"], (instance: WebGLRenderer,
                                                     newColors: {
                                                       clearColor?: number,
                                                       clearAlpha?: number,
                                                     }) => {
      if (newColors.clearColor !== undefined) {
        if (newColors.clearAlpha !== undefined) {
          instance.setClearColor(newColors.clearColor, newColors.clearAlpha);
        } else {
          instance.setClearColor(newColors.clearColor, instance.getClearAlpha());
        }
      } else if (newColors.clearAlpha !== undefined) {
        instance.setClearAlpha(newColors.clearAlpha);
      }
    });
  }
}

export default new WebGLRendererDescriptor();