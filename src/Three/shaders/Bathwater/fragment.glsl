uniform vec3 uSurfaceColor;
uniform vec3 uDepthColor;
uniform float uColorOffset;
uniform float uColorMultiplier;

varying float vHeight;

void main(){
  float mixStrength = vHeight + uColorOffset;  
  vec3 color = mix(uDepthColor, uSurfaceColor, vHeight);

  gl_FragColor = vec4(color, 0.8);
}