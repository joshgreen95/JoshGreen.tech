//Core
import * as THREE from 'three';
// Prop Logic
import { LoadGLTFScene } from "../ImportModel";
import { AnimateFloatable } from "./AnimateFloatables";
import { PlaceRandomly, PlaceToiletFloatable } from "./PlaceFloatable";
import { AssignTagToScene } from '../../Logic/AssignTagsToScene';
// Camera Logic
import { AddCamera, GetCameraIndex } from '../../Camera/InitializeCameraArray';
// Page Logic
import { PageManager } from '../../../React/Logic/PageManager';

const floatablePositions = [];
class Floatable {
    constructor(modelRef, floatableIndex, modelScale, pageRef, scene, waterMesh, isStatic) {
        this.modelRef = modelRef;
        this.floatableIndex = floatableIndex;
        this.page = pageRef;
        
        this.scale = modelScale;
        this.scene = scene;
        this.waterMesh = waterMesh;
        this.model = LoadGLTFScene(this.scene, this.modelRef, this.Instantiate, this);
        
        this.camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 2.5, 1000);
        this.cameraIndex = null;
        this.isStatic = isStatic;
        this.cameraDistance = 5;

        this.focused = false;
    }

    Instantiate(self, model) {
        self.model = model;
        model.scale.setScalar(self.scale);

        AssignTagToScene(self.model, 'floatable', true);
        AssignTagToScene(self.model, 'floatableIndex', self.floatableIndex);
        
        //Random Placement;
        self.Place();
        
        if(!self.isStatic){
            //Camera Management
            //Model is facing right if rotation is positive
            // Relationship between centering angle and model rotation is Y = 0.3750*X + 0.1438
            let centeringAngle = 0.375 * self.model.rotation.y + 0.14;
            
            centeringAngle *= Math.PI;
            self.camera.position.x = self.model.position.x + (self.cameraDistance * (Math.sin(self.model.rotation.y)));
            self.camera.position.z = self.model.position.z + (self.cameraDistance * (Math.cos(self.model.rotation.y)));

            self.camera.rotation.y += centeringAngle;
            
            AddCamera(self.camera);
            
            self.cameraIndex = GetCameraIndex(self.camera);
        }
    }

    Place() {
        //If isStatic then toilet duck. Need to extenuate this function to a clickable class.
        if(this.isStatic){
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