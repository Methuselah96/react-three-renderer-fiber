import * as React from "react";
import * as ReactDOM from "react-dom";
import {Object3D} from "three";
import React3 from "../../../src/bridge/React3";
import ReactThreeRenderer from "../../../src/core/renderer/reactThreeRenderer";
import {testContainers} from "../index";

const {div: testDiv} = testContainers;

describe("context", () => {
  it("should pass context within components", (done) => {
    const Context = React.createContext({ testValue: "unset" });

    class ContextParent extends React.Component<{ value: string }> {
      public render() {
        return (
          <Context.Provider value={{ testValue: this.props.value }}>
            { this.props.children }
          </Context.Provider>
        );
      }
    }

    let firstSet = false;
    let secondSet = false;
    let thirdSet = false;

    class ContextChild extends React.Component {
      public static contextType = Context;
      public context!: React.ContextType<typeof Context>;

      public componentDidMount(): void {
        if (this.context.testValue === "first-value") {
          firstSet = true;
        }
        if (this.context.testValue === "third-value") {
          thirdSet = true;
        }
      }

      public componentDidUpdate(): void {
        if (this.context.testValue === "second-value") {
          secondSet = true;
        }
      }

      public render() {
        return <object3D />;
      }
    }

    class ContextPassThrough extends React.Component {
      public render() {
        return <object3D>{this.props.children}</object3D>;
      }
    }

    const container = new Object3D();

    ReactThreeRenderer.render((
      <ContextParent value={"first-value"}>
        <ContextChild />
      </ContextParent>
    ), container, () => {
      chai.expect(firstSet).to.equal(true);
      chai.expect(secondSet).to.equal(false);
      chai.expect(thirdSet).to.equal(false);

      ReactThreeRenderer.render((
        <ContextParent value={"second-value"}>
          <ContextChild />
        </ContextParent>
      ), container, () => {
        chai.expect(firstSet).to.equal(true);
        chai.expect(secondSet).to.equal(true);
        chai.expect(thirdSet).to.equal(false);

        ReactThreeRenderer.render((
          <ContextParent value={"third-value"}>
            <ContextPassThrough>
              <ContextChild />
            </ContextPassThrough>
          </ContextParent>
        ), container, () => {
          chai.expect(firstSet).to.equal(true);
          chai.expect(secondSet).to.equal(true);
          chai.expect(thirdSet).to.equal(true);

          ReactThreeRenderer.unmountComponentAtNode(container, done);
        });
      });
    });
  });

  it("should pass context through React3", (done) => {
    const Context = React.createContext({ testValue: "unset" });

    class ContextParentDOM extends React.Component<{ value: string }> {
      public render() {
        return (
          <Context.Provider value={{ testValue: this.props.value }}>
            { this.props.children }
          </Context.Provider>
        );
      }
    }

    let firstSet = false;
    let secondSet = false;
    let thirdSet = false;

    class ContextChild extends React.Component {
      public static contextType = Context;
      public context!: React.ContextType<typeof Context>;

      public componentDidMount(): void {
        if (this.context.testValue === "first-value") {
          firstSet = true;
        }
        if (this.context.testValue === "third-value") {
          thirdSet = true;
        }
      }

      public componentDidUpdate(): void {
        if (this.context.testValue === "second-value") {
          secondSet = true;
        }
      }

      public render() {
        return <object3D />;
      }
    }

    ReactDOM.render((
      <div>
        Test!
        <ContextParentDOM value={"first-value"}>
          <React3>
            <webGLRenderer width={55} height={55}>
              <scene>
                <ContextChild />
              </scene>
            </webGLRenderer>
          </React3>
        </ContextParentDOM>
      </div>
    ), testDiv, () => {
      chai.expect(firstSet).to.equal(true);
      chai.expect(secondSet).to.equal(false);
      chai.expect(thirdSet).to.equal(false);

      ReactDOM.render(<span>test</span>, testDiv);

      ReactDOM.render(<div>
        Test!
        <ContextParentDOM value={"second-value"}>
          <React3>
            <webGLRenderer width={55} height={55}>
              <scene>
                <ContextChild />
              </scene>
            </webGLRenderer>
          </React3></ContextParentDOM></div>, testDiv, () => {
        chai.expect(firstSet).to.equal(true);
        chai.expect(secondSet).to.equal(true);
        chai.expect(thirdSet).to.equal(false);

        ReactDOM.render(<div>
          Test!
          <ContextParentDOM value={"third-value"}>
            <React3>
              <webGLRenderer width={55} height={55}>
                <scene>
                  <ContextChild />
                </scene>
              </webGLRenderer>
            </React3></ContextParentDOM></div>, testDiv, () => {
          chai.expect(firstSet).to.equal(true);
          chai.expect(secondSet).to.equal(true);
          chai.expect(thirdSet).to.equal(true);

          ReactDOM.unmountComponentAtNode(testDiv);

          done();
        });
      });
    });
  });
});
