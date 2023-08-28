const float PI = 3.14159265;

uniform float uWaveAmplitude;
uniform float uWaveDampening;
uniform float uWaveFrequency;
uniform float uWaveScale;
uniform vec2 uWaterSize;
uniform float uElapsedTime;
uniform float uDecayTime;
uniform vec2 uRaycastIntersect;

varying float vHeight; 


vec2 SquareVec2(vec2 originalVec2){
    float squaredX = originalVec2.x * originalVec2.x;
    float squaredY = originalVec2.y * originalVec2.y;
    vec2 squaredVec2 = vec2(squaredX, squaredY);
    return squaredVec2; 
}

void main(){
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);

    float waveScale = 1.0 / uWaveScale;
    float clampedTime =  clamp(uElapsedTime, 0.0, uDecayTime);
    float timePercentage = (1.0 - (clampedTime / uDecayTime));
    float adjustedAmplitude = timePercentage * uWaveAmplitude;

    vec2 distanceFromIntersect = vec2(distance(uRaycastIntersect.x, uv.x) * uWaterSize.x * waveScale, distance(uRaycastIntersect.y, uv.y) * uWaterSize.y * waveScale);

    vec2 squaredDistance = SquareVec2(distanceFromIntersect);
    float sumSquaredDistance = squaredDistance.x + squaredDistance.y;
    float height = 1.0 - adjustedAmplitude  * cos(sumSquaredDistance + uElapsedTime * uWaveFrequency) * exp(-uWaveDampening * sumSquaredDistance);
    vHeight = height;
    //Add height to z coordinate
    modelPosition.y += height;

    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition ;
    gl_Position = projectedPosition;
}
