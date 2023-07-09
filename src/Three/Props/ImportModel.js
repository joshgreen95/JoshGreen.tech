import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { InitializeTags } from "../Logic/AssignTagsToScene";

/**
 * Loads GLTF Scenes and initializes tags and params
 * @param {*} scene 
 * @param {String} fileString 
 */

function LoadGLTFScene(scene, fileString, initializationFunction, self) {
    const gltfLoader = new GLTFLoader();

    gltfLoader.load(fileString, (loadedModel) => {
        InitializeTags(loadedModel.scene);
        scene.add(loadedModel.scene);

        if (initializationFunction && self) {
            initializationFunction(self, loadedModel.scene);
        };

    },
        (progress) => { },
        (error) => {
            throw new Error(error);
        });
}

export { LoadGLTFScene };