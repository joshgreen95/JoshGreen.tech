uniform vec3 uDaySurfaceColor;
uniform vec3 uDayDepthColor;
uniform vec3 uNightSurfaceColor;
uniform vec3 uNightDepthColor;

uniform float uColorOffset;
uniform float uColorMultiplier;

uniform bool uIsNight;

varying float vHeight;

void main(){
  vec3 color = vec3(0);

  if(uIsNight){
    color = mix(uNightDepthColor, uNightSurfaceColor, vHeight);
  } else {
    color = mix(uDayDepthColor, uDaySurfaceColor, vHeight);
  }

  gl_FragColor = vec4(color, 0.8);
}