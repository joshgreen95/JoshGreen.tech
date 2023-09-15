import * as THREE from 'three';
import { AssignTagToScene } from '../Logic/AssignTagsToScene.js';
import { PageManager } from '../../React/Logic/PageManager.js';

class SceneSetter{
    constructor(hitBoxSize, hitboxPosition, scene, cameraIndex, sceneSetterIndex){
        this.hitboxGeometry = new THREE.BoxGeometry(hitBoxSize.x, hitBoxSize.y, hitBoxSize.z);
        this.hitboxMaterial = new THREE.MeshBasicMaterial({color: 0xff0000, transparent: true, opacity: 0});
        this.hitboxMesh = new THREE.Mesh(this.hitboxGeometry, this.hitboxMaterial);
        this.cameraIndex = cameraIndex;
        this.sceneSetterIndex = sceneSetterIndex;

        this.hitboxMesh.position.set(hitboxPosition.x, hitboxPosition.y, hitboxPosition.z);

        AssignTagToScene(this.hitboxMesh, 'sceneSetter', true);
        AssignTagToScene(this.hitboxMesh, 'sceneSetterIndex', this.sceneSetterIndex);

        scene.add(this.hitboxMesh);
    }

    Focus(){
        PageManager.UpdateSubScene(this.cameraIndex);
    }
}

export { SceneSetter };