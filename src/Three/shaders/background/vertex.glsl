uniform float uWaveAmplitude;
uniform float uWaveDampening;

uniform float uElapsedTime;

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

    float sumIntersectSquare = ((uRaycastIntersect.x * uRaycastIntersect.x) + (uRaycastIntersect.y * uRaycastIntersect.y));
    float sumXYSquare =  ((modelPosition.x * modelPosition.x ) + (modelPosition.z * modelPosition.z)) ;

    // 5 is model size????
    vec2 distanceFromIntersect = vec2(distance(modelPosition.x - ((uRaycastIntersect.x * 2.0  ) * 5.0), (uRaycastIntersect.x * 2.0 - 1.0 * 5.0)),
                                 distance(modelPosition.z - ((uRaycastIntersect.y * 2.0) * 5.0), (uRaycastIntersect.y * 2.0 - 1.0)));

    float sumDistanceSquare = ((distanceFromIntersect.x * distanceFromIntersect.x) + (distanceFromIntersect.y * distanceFromIntersect.y));

    float height =  uWaveAmplitude * cos(sumDistanceSquare ) * exp(-uWaveDampening * ( sumDistanceSquare));

    modelPosition.y += height;

    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition ;
    gl_Position = projectedPosition;
}