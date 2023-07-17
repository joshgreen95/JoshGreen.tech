import * as THREE from 'three';
import { LoadGLTFScene } from "../ImportModel";
import { AnimateFloatable } from "./AnimateFloatables";
import { PlaceRandomly } from "./PlaceFloatable";
import { AddCamera, GetCameraIndex } from '../../Camera/InitializeCameraArray';
import { CameraIndex } from '../../Camera/CameraIndex';
import { AssignTagToScene } from '../../Logic/AssignTagsToScene';
import { PageManager } from '../../../React/Logic/PageManager';

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
        
        this.cameraOffset = {
            x: +3.41,
            y: 1.1,
            z: 1
        }
        
        this.focused = false;
    }

    Instantiate(self, model) {
        self.model = model;
        model.scale.setScalar(self.scale);

        AssignTagToScene(self.model, 'floatable', true);
        AssignTagToScene(self.model, 'floatableIndex', self.floatableIndex);
        //Random Placement;
        self.Place();

        
        //Camera Management
        //Is Camera on left or right side
         self.camera.position.y = self.model.position.y + self.cameraOffset.y;
         //Left
        console.log(self.model.position.x < self.waterMesh.position.x)
         if(self.model.position.x < self.waterMesh.position.x){
             self.camera.position.x = self.model.position.x + self.cameraOffset.x;
             self.camera.position.z = self.model.position.z + self.cameraOffset.z;
         } 
         //Right
         else {
            
             self.camera.position.x = self.model.position.x - self.cameraOffset.x;
             self.camera.position.z = self.model.position.z + self.cameraOffset.z;
         }
         
         self.camera.lookAt(self.model.position);
        AddCamera(self.camera);
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
        if (!this.focused){
            PageManager.Update(this.page, this.cameraIndex, this);
        }
    }
}

export { Floatable };