import * as THREE from 'three';
import { LoadGLTFScene } from "../ImportModel";
import { AnimateFloatable } from "./AnimateFloatables";
import { PlaceRandomly, PlaceToiletFloatable } from "./PlaceFloatable";
import { AddCamera, GetCameraIndex } from '../../Camera/InitializeCameraArray';
import { AssignTagToScene, InitializeTags } from '../../Logic/AssignTagsToScene';
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
        this.camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
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

            //I dont know why this works but it works
            self.camera.rotation.y += centeringAngle;
            
            
            AddCamera(self.camera);
            
            self.cameraIndex = GetCameraIndex(self.camera);
        }
    }

    Place() {
        //If Index 0 then toilet duck FIX this as only allows one clickable object. Deffo need to extenuate this function to a clickable class
        //too lazy tonight, should add clock or something. 
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