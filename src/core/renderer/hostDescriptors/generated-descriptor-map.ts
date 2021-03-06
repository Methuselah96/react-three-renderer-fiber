// this file is automatically generated by ../../../../../utils/generate-descriptor-map.ts

import {IReactThreeRendererDescriptorClass} from "../../../extensions/resources/ResourceDescriptorWrapper";

/* tslint:disable:ordered-imports */

import ambientLight from "./descriptors/objects/lights/ambientLight";
import boxBufferGeometry from "./descriptors/geometries/boxBufferGeometry";
import boxGeometry from "./descriptors/geometries/boxGeometry";
import cameraHelper from "./descriptors/objects/cameraHelper";
import circleBufferGeometry from "./descriptors/geometries/circleBufferGeometry";
import circleGeometry from "./descriptors/geometries/circleGeometry";
import coneBufferGeometry from "./descriptors/geometries/coneBufferGeometry";
import coneGeometry from "./descriptors/geometries/coneGeometry";
import cylinderBufferGeometry from "./descriptors/geometries/cylinderBufferGeometry";
import cylinderGeometry from "./descriptors/geometries/cylinderGeometry";
import directionalLight from "./descriptors/objects/lights/directionalLight";
import directionalLightShadow from "./descriptors/objects/lights/shadows/directionalLightShadow";
import dodecahedronBufferGeometry from "./descriptors/geometries/dodecahedronBufferGeometry";
import dodecahedronGeometry from "./descriptors/geometries/dodecahedronGeometry";
import edgesGeometry from "./descriptors/geometries/edgesGeometry";
import extrudeBufferGeometry from "./descriptors/geometries/extrudeBufferGeometry";
import extrudeGeometry from "./descriptors/geometries/extrudeGeometry";
import geometry from "./descriptors/core/geometry";
import group from "./descriptors/objects/group";
import icosahedronBufferGeometry from "./descriptors/geometries/icosahedronBufferGeometry";
import icosahedronGeometry from "./descriptors/geometries/icosahedronGeometry";
import latheBufferGeometry from "./descriptors/geometries/latheBufferGeometry";
import latheGeometry from "./descriptors/geometries/latheGeometry";
import lineBasicMaterial from "./descriptors/materials/lineBasicMaterial";
import lineSegments from "./descriptors/objects/lineSegments";
import material from "./descriptors/materials/material";
import mesh from "./descriptors/objects/mesh";
import meshBasicMaterial from "./descriptors/materials/meshBasicMaterial";
import meshDepthMaterial from "./descriptors/materials/meshDepthMaterial";
import meshLambertMaterial from "./descriptors/materials/meshLambertMaterial";
import meshPhongMaterial from "./descriptors/materials/meshPhongMaterial";
import object3D from "./descriptors/objects/object3D";
import octahedronBufferGeometry from "./descriptors/geometries/octahedronBufferGeometry";
import octahedronGeometry from "./descriptors/geometries/octahedronGeometry";
import orthographicCamera from "./descriptors/objects/orthographicCamera";
import parametricBufferGeometry from "./descriptors/geometries/parametricBufferGeometry";
import parametricGeometry from "./descriptors/geometries/parametricGeometry";
import perspectiveCamera from "./descriptors/objects/perspectiveCamera";
import planeBufferGeometry from "./descriptors/geometries/planeBufferGeometry";
import planeGeometry from "./descriptors/geometries/planeGeometry";
import pointLight from "./descriptors/objects/lights/pointLight";
import pointLightShadow from "./descriptors/objects/lights/shadows/pointLightShadow";
import points from "./descriptors/objects/points";
import pointsMaterial from "./descriptors/materials/pointsMaterial";
import polyhedronBufferGeometry from "./descriptors/geometries/polyhedronBufferGeometry";
import polyhedronGeometry from "./descriptors/geometries/polyhedronGeometry";
import render from "./descriptors/render";
import ringBufferGeometry from "./descriptors/geometries/ringBufferGeometry";
import ringGeometry from "./descriptors/geometries/ringGeometry";
import scene from "./descriptors/objects/scene";
import shapeBufferGeometry from "./descriptors/geometries/shapeBufferGeometry";
import shapeGeometry from "./descriptors/geometries/shapeGeometry";
import sphereBufferGeometry from "./descriptors/geometries/sphereBufferGeometry";
import sphereGeometry from "./descriptors/geometries/sphereGeometry";
import sprite from "./descriptors/objects/sprite";
import spriteMaterial from "./descriptors/materials/spriteMaterial";
import tetrahedronBufferGeometry from "./descriptors/geometries/tetrahedronBufferGeometry";
import tetrahedronGeometry from "./descriptors/geometries/tetrahedronGeometry";
import textBufferGeometry from "./descriptors/geometries/textBufferGeometry";
import textGeometry from "./descriptors/geometries/textGeometry";
import texture from "./descriptors/textures/texture";
import threeLine from "./descriptors/objects/threeLine";
import torusBufferGeometry from "./descriptors/geometries/torusBufferGeometry";
import torusGeometry from "./descriptors/geometries/torusGeometry";
import torusKnotBufferGeometry from "./descriptors/geometries/torusKnotBufferGeometry";
import torusKnotGeometry from "./descriptors/geometries/torusKnotGeometry";
import tubeBufferGeometry from "./descriptors/geometries/tubeBufferGeometry";
import tubeGeometry from "./descriptors/geometries/tubeGeometry";
import viewport from "./descriptors/viewport";
import webGLRenderer from "./descriptors/webGLRenderer";
import webGLShadowMap from "./descriptors/webGLShadowMap";
import wireframeGeometry from "./descriptors/geometries/wireframeGeometry";

const descriptorMap = new Map<string, IReactThreeRendererDescriptorClass>();

descriptorMap.set("render", render);
descriptorMap.set("viewport", viewport);
descriptorMap.set("webGLRenderer", webGLRenderer);
descriptorMap.set("webGLShadowMap", webGLShadowMap);

// descriptors/core
descriptorMap.set("geometry", geometry);

// descriptors/geometries
descriptorMap.set("boxBufferGeometry", boxBufferGeometry);
descriptorMap.set("boxGeometry", boxGeometry);
descriptorMap.set("circleBufferGeometry", circleBufferGeometry);
descriptorMap.set("circleGeometry", circleGeometry);
descriptorMap.set("coneBufferGeometry", coneBufferGeometry);
descriptorMap.set("coneGeometry", coneGeometry);
descriptorMap.set("cylinderBufferGeometry", cylinderBufferGeometry);
descriptorMap.set("cylinderGeometry", cylinderGeometry);
descriptorMap.set("dodecahedronBufferGeometry", dodecahedronBufferGeometry);
descriptorMap.set("dodecahedronGeometry", dodecahedronGeometry);
descriptorMap.set("edgesGeometry", edgesGeometry);
descriptorMap.set("extrudeBufferGeometry", extrudeBufferGeometry);
descriptorMap.set("extrudeGeometry", extrudeGeometry);
descriptorMap.set("icosahedronBufferGeometry", icosahedronBufferGeometry);
descriptorMap.set("icosahedronGeometry", icosahedronGeometry);
descriptorMap.set("latheBufferGeometry", latheBufferGeometry);
descriptorMap.set("latheGeometry", latheGeometry);
descriptorMap.set("octahedronBufferGeometry", octahedronBufferGeometry);
descriptorMap.set("octahedronGeometry", octahedronGeometry);
descriptorMap.set("parametricBufferGeometry", parametricBufferGeometry);
descriptorMap.set("parametricGeometry", parametricGeometry);
descriptorMap.set("planeBufferGeometry", planeBufferGeometry);
descriptorMap.set("planeGeometry", planeGeometry);
descriptorMap.set("polyhedronBufferGeometry", polyhedronBufferGeometry);
descriptorMap.set("polyhedronGeometry", polyhedronGeometry);
descriptorMap.set("ringBufferGeometry", ringBufferGeometry);
descriptorMap.set("ringGeometry", ringGeometry);
descriptorMap.set("shapeBufferGeometry", shapeBufferGeometry);
descriptorMap.set("shapeGeometry", shapeGeometry);
descriptorMap.set("sphereBufferGeometry", sphereBufferGeometry);
descriptorMap.set("sphereGeometry", sphereGeometry);
descriptorMap.set("tetrahedronBufferGeometry", tetrahedronBufferGeometry);
descriptorMap.set("tetrahedronGeometry", tetrahedronGeometry);
descriptorMap.set("textBufferGeometry", textBufferGeometry);
descriptorMap.set("textGeometry", textGeometry);
descriptorMap.set("torusBufferGeometry", torusBufferGeometry);
descriptorMap.set("torusGeometry", torusGeometry);
descriptorMap.set("torusKnotBufferGeometry", torusKnotBufferGeometry);
descriptorMap.set("torusKnotGeometry", torusKnotGeometry);
descriptorMap.set("tubeBufferGeometry", tubeBufferGeometry);
descriptorMap.set("tubeGeometry", tubeGeometry);
descriptorMap.set("wireframeGeometry", wireframeGeometry);

// descriptors/materials
descriptorMap.set("lineBasicMaterial", lineBasicMaterial);
descriptorMap.set("material", material);
descriptorMap.set("meshBasicMaterial", meshBasicMaterial);
descriptorMap.set("meshDepthMaterial", meshDepthMaterial);
descriptorMap.set("meshLambertMaterial", meshLambertMaterial);
descriptorMap.set("meshPhongMaterial", meshPhongMaterial);
descriptorMap.set("pointsMaterial", pointsMaterial);
descriptorMap.set("spriteMaterial", spriteMaterial);

// descriptors/objects
descriptorMap.set("cameraHelper", cameraHelper);
descriptorMap.set("group", group);
descriptorMap.set("lineSegments", lineSegments);
descriptorMap.set("mesh", mesh);
descriptorMap.set("object3D", object3D);
descriptorMap.set("orthographicCamera", orthographicCamera);
descriptorMap.set("perspectiveCamera", perspectiveCamera);
descriptorMap.set("points", points);
descriptorMap.set("scene", scene);
descriptorMap.set("sprite", sprite);
descriptorMap.set("threeLine", threeLine);

// descriptors/objects/lights
descriptorMap.set("ambientLight", ambientLight);
descriptorMap.set("directionalLight", directionalLight);
descriptorMap.set("pointLight", pointLight);

// descriptors/objects/lights/shadows
descriptorMap.set("directionalLightShadow", directionalLightShadow);
descriptorMap.set("pointLightShadow", pointLightShadow);

// descriptors/textures
descriptorMap.set("texture", texture);

export default descriptorMap;
