import * as THREE from 'three';
import { LoadGLTFScene } from "../ImportModel";
import { AnimateFloatable } from "./AnimateFloatables";
import { PlaceRandomly } from "./PlaceFloatable";
import { AddCamera, GetCameraIndex } from '../../Camera/InitializeCameraArray';
import { CameraIndex } from '../../Camera/CameraIndex';
import { AssignTagToScene } from '../../Logic/AssignTagsToScene';

class Floatable {
    constructor(modelRef, floatableIndex, modelScale, pageRef, scene, waterMesh) {
        this.modelRef = modelRef;
        this.floatableIndex = floatableIndex;
        this.page = pageRef;
        
        this.scale = modelScale;
        this.scene = scene;
        this.waterMesh = waterMesh;
        this.model = LoadGLTFScene(this.scene, this.modelRef, this.Instantiate, this);
        this.camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.cameraIndex = null;

    }

    Instantiate(self, model) {
        self.model = model;
        model.scale.setScalar(self.scale);

        AssignTagToScene(self.model, 'floatable', true);
        AssignTagToScene(self.model, 'floatableIndex', self.floatableIndex);
        //Random Placement;
        self.Place();

        //Camera Management
        AddCamera(self.camera);
        self.camera.position.set(self.model.position);
        self.cameraIndex = GetCameraIndex(self.camera);
    }

    Place() {
        PlaceRandomly(this.model, this.waterMesh);
    }

    Float() {
        if (this.model) {
            AnimateFloatable(this.model, this.waterMesh);
        }
    }

    Focus(){
        CameraIndex.index = this.cameraIndex;
    }
}

export { Floatable };