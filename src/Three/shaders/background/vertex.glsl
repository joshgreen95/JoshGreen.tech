uniform float uWaveAmplitude;
uniform float uWaveDampening;

uniform float uElapsedTime;
uniform vec2 geometrySize;  

uniform vec2 uRaycastIntersect;

varying vec2 vRaycastIntersect;
varying vec2 vUv;
varying float vElapsedTime;
varying float vElevation;

const float PI = 3.14159265;

void main(){
    //Assign varyings from uniforms for fragment shader
    vRaycastIntersect = uRaycastIntersect;
    vUv = uv;
    vElapsedTime = uElapsedTime;

    vec4 modelPosition = modelMatrix * vec4(position, 1.0);

    /*
    Calculate depreciating 3d sine wave from x y coordinates.
    Distance from uv coordinate of vertex and uv coordinate of raycast intersect 

        TODO:
        Impliment way to find size of mesh from UNIFORMS
        add time variable
        increase wave dampening and decrease amplitude over time 

    */
    vec2 distanceFromIntersect = vec2(distance(uRaycastIntersect.x, uv.x) * 10.0, distance(1.0 - uRaycastIntersect.y, uv.y) * 10.0);
    float sumDistanceSquare = ((distanceFromIntersect.x * distanceFromIntersect.x) + (distanceFromIntersect.y * distanceFromIntersect.y));

    float height =  1.0 - uWaveAmplitude * cos(sumDistanceSquare) * exp(-uWaveDampening * ( sumDistanceSquare));

    //Add height to z coordinate
    modelPosition.y += height;

    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition ;
    gl_Position = projectedPosition;
}