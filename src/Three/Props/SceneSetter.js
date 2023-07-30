import * as THREE from 'three';
import { AssignTagToScene } from '../Logic/AssignTagsToScene.js';
import { CameraIndex } from '../Camera/CameraIndex.js';
import { PageManager } from '../../React/Logic/PageManager.js';

class SceneSetter{
    constructor(hitBoxSize, hitboxPosition, scene, cameraIndex, sceneSetterIndex){
        this.hitboxGeometry = new THREE.BoxGeometry(hitBoxSize.x, hitBoxSize.y, hitBoxSize.z);
        this.hitboxMaterial = new THREE.MeshBasicMaterial({color: 0xff0000, transparent: false});
        this.hitboxMesh = new THREE.Mesh(this.hitboxGeometry, this.hitboxMaterial);
        this.cameraIndex = cameraIndex;
        this.sceneSetterIndex = sceneSetterIndex;

        //this.hitboxMesh.position.set(hitboxPosition);
        AssignTagToScene(this.hitboxMesh, 'sceneSetter', true);
        AssignTagToScene(this.hitboxMesh, 'sceneSetterIndex', this.sceneSetterIndex);
        scene.add(this.hitboxMesh);
        console.log(this.hitboxMesh);
    }

    Focus(){
        CameraIndex.index = this.cameraIndex;
        PageManager.isHomeScreenActive = false;
    }
}

export { SceneSetter };