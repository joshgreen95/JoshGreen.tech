import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { InitializeTags } from "../Logic/AssignTagsToScene";

/**
 * Loads GLTF Scenes and initializes tags and params
 * @param {*} scene 
 * @param {String} fileString 
 */

function LoadGLTFScene(scene, fileString) {
    var model = null;
    const gltfLoader = new GLTFLoader();
    
    gltfLoader.load(fileString, (loadedModel) => {
            InitializeTags(loadedModel.scene);
            scene.add(loadedModel.scene);
            return loadedModel;
        },
            (progress) => { },
            (error) => {
                throw new Error(error);
            });
}

export { LoadGLTFScene };