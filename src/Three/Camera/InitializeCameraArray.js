import * as THREE from 'three';
import { cameras } from '../Scene/CameraAngles';

/**
 * Creates camera array based on index of cameras  
 * @param {Number} fov 
 * @param {Number} aspect 
 * @param {Number} near 
 * @param {Number} far 
 * @returns 
 */

var cameraArray = [];

function InitializeCameraArray(fov, aspect, near, far) {
    for (let cameraProperties of cameras) {
        const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
        camera.position.set(cameraProperties.position.x, cameraProperties.position.y, cameraProperties.position.z);
        camera.rotation.set(cameraProperties.rotation.x, cameraProperties.rotation.y, cameraProperties.rotation.z);
        cameraArray.push(camera);
    }

    return cameraArray;
}

function AddCamera(camera){
    cameraArray.push(camera);
}

function UpdateCameraArray(){
    return cameraArray;
}

function GetCameraIndex(camera){
    for(let i = 0; i< cameraArray.length; i++){
        if(cameraArray[i] === camera){
            return i;
        }
    }
    
    return 99;
}
export { InitializeCameraArray, AddCamera, UpdateCameraArray, GetCameraIndex };