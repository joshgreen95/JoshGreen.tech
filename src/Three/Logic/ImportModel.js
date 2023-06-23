import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { InitializeTags } from "./AssignTagsToScene";

export function LoadGLTFScene(scene, fileString) {
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