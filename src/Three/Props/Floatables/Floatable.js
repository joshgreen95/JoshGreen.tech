import * as THREE from 'three';
import { LoadGLTFScene } from "../ImportModel";
import { AnimateFloatable } from "./AnimateFloatables";
import { PlaceRandomly, PlaceToiletFloatable } from "./PlaceFloatable";
import { AddCamera, GetCameraIndex } from '../../Camera/InitializeCameraArray';
import { AssignTagToScene, InitializeTags } from '../../Logic/AssignTagsToScene';
import { PageManager } from '../../../React/Logic/PageManager';

const floatablePositions = [];
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
            x: 5,
            y: 2,
            z: 0
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

        const cameraTarget = new THREE.Vector3(
            self.model.position.x + 0,
            self.model.position.y - 1.5,
            self.model.position.z
        );
            
        //Camera Management
        //Is Camera on left or right side
        //Left
         if(self.model.position.x < self.waterMesh.position.x){
            self.camera.position.x = self.model.position.x + self.cameraOffset.x;
            self.camera.position.z = self.model.position.z + self.cameraOffset.z;

            cameraTarget.z += 2.5
         } 
         //Right
         else {
            self.camera.position.x = self.model.position.x - self.cameraOffset.x;
            self.camera.position.z = self.model.position.z + self.cameraOffset.z;

            cameraTarget.z -= 2.5;
         }
        self.camera.lookAt(cameraTarget);
        
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
            PlaceRandomly(this.model, this.waterMesh, floatablePositions);
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