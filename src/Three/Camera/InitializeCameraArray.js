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
function InitializeCameraArray(fov, aspect, near, far) {
    var cameraArray = [];
    for (let cameraProperties of cameras) {
        const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
        camera.position.set(cameraProperties.position.x, cameraProperties.position.y, cameraProperties.position.z);
        camera.rotation.set(cameraProperties.rotation.x, cameraProperties.rotation.y, cameraProperties.rotation.z);
        cameraArray.push(camera);
    }

    return cameraArray;
}

export { InitializeCameraArray };