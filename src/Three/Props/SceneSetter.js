import * as THREE from 'three';
import { AssignTagToScene } from '../Logic/AssignTagsToScene.js';

class SceneSetter{
    constructor(hitBoxSize, hitboxPosition, scene, cameraIndex){
        this.hitboxGeometry = new THREE.BoxGeometry(hitBoxSize.x, hitBoxSize.y, hitBoxSize.z);
        this.hitboxMaterial = new THREE.MeshBasicMaterial({color: 0xff0000, transparent: false});
        this.hitboxMesh = new THREE.Mesh(this.hitboxGeometry, this.hitboxMaterial);
        this.cameraIndex = cameraIndex;

        this.hitboxMesh.position = hitboxPosition;
        AssignTagToScene(this.hitboxGeometry, 'sceneSetter', true);
        scene.add(this.hitboxMesh);
    }
}

