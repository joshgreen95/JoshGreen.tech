import * as THREE from 'three';
import { LoadGLTFScene } from "../ImportModel";
import { AnimateFloatable } from "./AnimateFloatables";
import { PlaceRandomly, PlaceToiletFloatable } from "./PlaceFloatable";
import { AddCamera, GetCameraIndex } from '../../Camera/InitializeCameraArray';
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
            x: 3.41,
            y: 2,
            z: 3.41
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
        //If Index 0 then toilet duck FIX this as only allows one clickable object. Deffo need to extenuate this function to a clickable class
        //too lazy tonight, should add clock or something. 
        if(this.floatableIndex === 0){
            PlaceToiletFloatable(this.model);
        }
        
        if(this.waterMesh){
            PlaceRandomly(this.model, this.waterMesh);
        }
    }

    Float() {
        if (this.model && this.waterMesh) {
            AnimateFloatable(this.model, this.waterMesh);
        }
    }

    Focus(){
        if (!this.focused){
            PageManager.ShowOverlay(this.page, this.cameraIndex, this);
        }
    }
}

export { Floatable };