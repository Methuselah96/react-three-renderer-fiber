import * as React from "react";
import {PureComponent} from "react";

import * as ReactDOM from "react-dom";
import ReactThreeRenderer from "../core/renderer/reactThreeRenderer";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "react-three-renderer-proxy": any;
    }
  }
}

class React3 extends PureComponent<any, any> {
  private renderCount: number;
  private div: any;
  private readonly fakeDOMContainerInfo: any;

  constructor(props: any, context: any) {
    super(props, context);

    this.div = null;

    this.renderCount = 0;

    const createFakeElement = (name: any) => {
      return ({
        name,
        setAttribute: () => {
          if (this.div) {
            ReactThreeRenderer.render(this.props.children as any, this.div);
          }
        },
      });
    };

    this.fakeDOMContainerInfo = {
      appendChild(/* */) {
        // Doing nothing here but still need to have a stub
      },
      nodeType: document.ELEMENT_NODE,
      ownerDocument: {
        createElement: createFakeElement, // fake element gets created here
      },
      tagName: "react-three-renderer-fake-container",
      removeChild(/* child: any */) {
        // Doing nothing here but still need to have a stub
      },
    };
  }

  public divRef = (div: any) => {
    this.div = div;
  };

  public componentDidMount() {
    ReactThreeRenderer.render(this.props.children as any, this.div, this);
  }

  public componentWillUnmount() {
    ReactThreeRenderer.unmountComponentAtNode(this.div);
  }

  public render() {
    this.renderCount++;

    // Create a fake element that will keep updating a property every render.
    // Whenever the property gets updated, we can use that as an opportunity to render into R3R context
    // I am guessing that should be solved by the `implementation` property?
    // I.e. I'd love to get a callback for a moment to be able to call `R3R.render`.

    const implementation: any = null;

    return (<div ref={this.divRef}>{
      (ReactDOM as any).createPortal(
        <react-three-renderer-proxy testProps={this.renderCount}/>,
        this.fakeDOMContainerInfo,
        implementation,
      )
    }</div>);
  }
}

export default React3;
