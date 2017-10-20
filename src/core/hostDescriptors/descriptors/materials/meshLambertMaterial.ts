import * as THREE from "three";
import {MeshLambertMaterial} from "three";
import {MaterialDescriptorBase} from "./material";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      meshLambertMaterial: IThreeElementPropsBase<THREE.MeshLambertMaterial> & THREE.MeshLambertMaterialParameters;
    }
  }
}

class MeshLambertMaterialDescriptor extends MaterialDescriptorBase<THREE.MeshLambertMaterialParameters,
  MeshLambertMaterial> {

  public createInstance(props: THREE.MeshLambertMaterialParameters) {
    return new THREE.MeshLambertMaterial(props);
  }
}

export default new MeshLambertMaterialDescriptor();