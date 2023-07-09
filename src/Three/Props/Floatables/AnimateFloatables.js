import { GetDistance } from "../../Logic/GetDistance";

function AnimateFloatable(floatable, bathWaterMaterial) {
    if (!floatable.model) { return; }

    const floatableModel = floatable.model;
    const amplitude = bathWaterMaterial.uniforms.uWaveAmplitude.value;
    const dampening = bathWaterMaterial.uniforms.uWaveDampening.value;
    const frequency = bathWaterMaterial.uniforms.uWaveFrequency.value;
    const elapsedTime = bathWaterMaterial.uniforms.uElapsedTime.value;
    const decayTime = bathWaterMaterial.uniforms.uDecayTime.value;
    const raycastIntersectWorld = bathWaterMaterial.uniforms.uRaycastIntersectWorld.value;


    let clampedTime = Math.min(Math.max(elapsedTime, 0), decayTime);
    let timePercentage = (1 - (clampedTime / decayTime));
    let adjustedAmplitude = timePercentage * amplitude;
    let distanceFromIntersect = GetDistance(floatableModel.position, raycastIntersectWorld);
    let squareDistance = Math.pow(distanceFromIntersect, 2);
    let height = 1 - adjustedAmplitude * Math.cos(squareDistance + elapsedTime * frequency) * Math.exp(-dampening * squareDistance);

    floatableModel.position.y = height;
}


export { AnimateFloatable };