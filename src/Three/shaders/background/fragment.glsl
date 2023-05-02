varying vec2 vRaycastIntersect;
varying vec2 vUv;
varying float vElapsedTime;

void main(){

  gl_FragColor = vec4(0, vUv.x + 0.1, vUv.x + 0.1, 1);
}