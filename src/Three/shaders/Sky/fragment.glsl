uniform vec3 uSkyColor;
uniform vec3 uHorizonColor;
uniform vec3 uGroundColor;
varying vec2 vUv;

void main(){  
  float bottom = 0.0;
  float middle = 0.5;
  float top = 1.0;  

  vec3 color = mix(uGroundColor, uHorizonColor, smoothstep(bottom, middle, vUv.y));
  color = mix(color, uSkyColor, smoothstep(middle, top, vUv.y));

  gl_FragColor = vec4(color, 1);
}