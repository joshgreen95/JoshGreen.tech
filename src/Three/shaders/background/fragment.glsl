varying vec2 vRaycastIntersect;
varying vec2 vUv;
varying float vElapsedTime;

uniform sampler2D uTexture;

void main(){

  vec4 textureColor = texture2D(uTexture, vUv);
  gl_FragColor = textureColor;

}