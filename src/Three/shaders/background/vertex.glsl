uniform float uWaveAmplitude;
uniform float uWaveDampening;

uniform float uElapsedTime;

uniform vec2 uRaycastIntersect;



varying vec2 vRaycastIntersect;
varying vec2 vUv;
varying float vElapsedTime;

const float PI = 3.14159265;

vec2 SquareVec2(vec2 originalVec2){
    float squaredX = originalVec2.x * originalVec2.x;
    float squaredY = originalVec2.y * originalVec2.y;
    vec2 squaredVec2 = vec2(squaredX, squaredY);
    return squaredVec2; 
}

float GenerateFloat(float amplitude ){
    return 0.4;
}


void main(){
    //Assign varyings from uniforms for fragment shader
    vRaycastIntersect = uRaycastIntersect;
    vUv = uv;
    vElapsedTime = uElapsedTime;

    vec4 modelPosition = modelMatrix * vec4(position, 1.0);

    /*
        TODO:
        Impliment way to find size of mesh from UNIFORMS
        add time variable
        increase wave dampening and decrease amplitude over time 

    */

    vec2 distanceFromIntersect = vec2(distance(uRaycastIntersect.x, uv.x) * 10.0, distance(1.0 - uRaycastIntersect.y, uv.y) * 10.0);
    vec2 squaredDistance = SquareVec2(distanceFromIntersect);
    float sumSquaredDistance = squaredDistance.x + squaredDistance.y;

    float height =  1.0 - uWaveAmplitude * cos(sumSquaredDistance) * exp(-uWaveDampening *(sumSquaredDistance));

    //Add height to z coordinate
    modelPosition.y += height;

    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition ;
    gl_Position = projectedPosition;
}