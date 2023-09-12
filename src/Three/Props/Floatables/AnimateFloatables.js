import { GetDistance } from "../../Logic/GetDistance";
import * as THREE from 'three';
var count = 0;

function AnimateFloatable(floatable, bathWaterMesh) {
    if (!floatable) { return; }

    const amplitude = bathWaterMesh.material.uniforms.uWaveAmplitude.value;
    const dampening = bathWaterMesh.material.uniforms.uWaveDampening.value;
    const frequency = bathWaterMesh.material.uniforms.uWaveFrequency.value;
    const waveScale = 1 / bathWaterMesh.material.uniforms.uWaveScale.value;
    const elapsedTime = bathWaterMesh.material.uniforms.uElapsedTime.value;
    const decayTime = bathWaterMesh.material.uniforms.uDecayTime.value;
    const raycastIntersectWorld = bathWaterMesh.material.uniforms.uRaycastIntersectWorld.value;

    let clampedTime = Math.min(Math.max(elapsedTime, 0), decayTime);
    let timePercentage = (1 - (clampedTime / decayTime));
    let adjustedAmplitude = timePercentage * amplitude;

    let distanceFromIntersect = new THREE.Vector2(GetDistance(raycastIntersectWorld, floatable.position));

    let squareDistance = Math.pow(distanceFromIntersect.x, 2) + Math.pow(distanceFromIntersect.y, 2);
    let scaledSquareDistance = squareDistance * waveScale;

    
    let height = 1 - adjustedAmplitude * (Math.cos(scaledSquareDistance + elapsedTime * frequency) * Math.exp(-dampening * scaledSquareDistance));
    floatable.position.y = bathWaterMesh.position.y + height;
}


export { AnimateFloatable };