//Core
import React, { Component} from "react";
import * as THREE from 'three';

//Controls
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

//Shaders
import bathwaterVertexShader from './shaders/Bathwater/vertex.glsl';
import bathwaterFragmentShader from './shaders/Bathwater/fragment.glsl';
import skyVertexShader from './shaders/Sky/vertex.glsl';
import skyFragmentShader from './shaders/Sky/fragment.glsl';

//Logic
import { LoadGLTFScene } from "./Props/ImportModel.js";
import { InitializeCameraArray, UpdateCameraArray } from "./Camera/InitializeCameraArray.js";
import { CameraIndex } from './Camera/CameraIndex.js'
import { TimeOfDay } from "./Scene/DayNightCycle.js";
import { SceneSetter } from "./Props/SceneSetter.js";

//Props
import { Floatable } from "./Props/Floatables/Floatable";

//PageManger
import { PageManager } from "../React/Logic/PageManager";

//JSX Components
import DuckTest from "../React/Pages/PortfolioContent/DuckTest";
import DevilDuckTest from "../React/Pages/PortfolioContent/DevilDuckTest.jsx";
import GimpDuckTest from "../React/Pages/PortfolioContent/GimpDuckTest.jsx";
import { InitializeTags } from "./Logic/AssignTagsToScene.js";

export default class ThreeScene extends Component{
    componentDidMount(){
/**
 * Renderer
 */
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.shadowMap.enabled = true;

/**
 * Canvas
 */
        const canvas = document.getElementById('renderContainer').appendChild(renderer.domElement);

/**
 * Camera
 */
        const cameraArray = InitializeCameraArray(60, window.innerWidth / window.innerHeight, 0.1, 1000);

/**
 * Sizes
 */
        const sizes = {
            width: window.innerWidth,
            height: window.innerHeight
        };

        window.addEventListener('resize', () => {
            // Update sizes
            sizes.width = window.innerWidth;
            sizes.height = window.innerHeight;
            // Update camera
            cameraArray.forEach((camera) => {
                camera.aspect = sizes.width / sizes.height;
                camera.updateProjectionMatrix();
            })
            // Update renderer
            renderer.setSize(sizes.width, sizes.height);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            // Mobile Mode
            PageManager.isMobile = ((sizes.width / sizes.height) < 1);
            console.log(PageManager.isMobile);
        })

/**
 * Page Manager
 */
        PageManager.isMobile = ((sizes.width / sizes.height) < 1);
        PageManager.InitializeRoots();

/**
 * Loading Manager
 */
    const loadingScreen = document.getElementById('loadingScreen');

    const loadingManager = new THREE.LoadingManager(() => {
        loadingScreen.classList.add('hidden');
        loadingScreen.addEventListener('transitionend', transitionEnd);
        });

    function transitionEnd(){
        loadingScreen.remove();
    }

/**
 * Day/Night Cycle
 */
        const timeOfDay = new TimeOfDay();
        console.log(timeOfDay);

/**
 * Scene    
*/ 
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(timeOfDay.horizonColor);
        
/**
 * Debug Controls
 */
        const controls = new OrbitControls(cameraArray[0], renderer.domElement);
/**
 * Raycaster
 */
        const raycaster = new THREE.Raycaster();
        
/**
 * Pointer
 */
        const pointer = new THREE.Vector2();
        
        function OnPointerMove( event ){
            pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
            pointer.y = - (event.clientY / window.innerHeight) * 2 + 1;
        }

        function OnPointerClick(event){
            //Fix for Mobile
            OnPointerMove(event);
            //Raycaster
            raycaster.setFromCamera(pointer, cameraArray[CameraIndex.index]);
            const intersects = raycaster.intersectObjects(scene.children);
            if (intersects.length > 0) {
                let collision = intersects[0];
                
                if(!collision.object.tags){ return; }

                //Disables sceneSetter Collision when focused.
                //TODO REFINE
                if(!PageManager.isCameraCenter && (collision.object.tags['sceneSetter'] || collision.object.tags['ignore'])){
                    collision = intersects[1];
                }

                //DisplayWindow
                if(collision.object.tags['floatable'] ){
                    if(!PageManager.isWindowShown){
                        const floatable = floatables[collision.object.tags['floatableIndex']];
                        floatable.Focus();
                    }
                }

                if (collision.object.tags['needsUVCoords']) {
                        collision.object.material.uniforms.uRaycastIntersect.value = collision.uv;
                        collision.object.material.uniforms.uRaycastIntersectWorld.value = new THREE.Vector3(collision.point.x, 0, collision.point.z);
                        timeSinceLastMove = clock.getElapsedTime(); }
                        
                if(collision.object.tags['sceneSetter']){
                    const sceneSetter = sceneSetters[collision.object.tags['sceneSetterIndex']]
                    sceneSetter.Focus();
                }
            }
        }
/**
 * Models
 */
        const bathroom = LoadGLTFScene(scene, '/models/Scene.glb', null, null, loadingManager);

/**
* Geometry
* */
        const bathWaterGeometry = new THREE.PlaneGeometry(12, 25, 100, 100);
        const backgroundGeometry = new THREE.PlaneGeometry(100, 35, 5, 5);
/**
* Materials
*/
        var timeSinceLastMove = 0;
        const bathWaterMaterial = new THREE.ShaderMaterial({
            vertexShader: bathwaterVertexShader,
            fragmentShader: bathwaterFragmentShader,
            uniforms: {
                uWaveAmplitude: { value: 1 },
                uWaveDampening: { value: 0.2 },
                uWaveFrequency: { value: 10 },
                uWaveScale: { value: .9 },
                uWaterSize: { value: new THREE.Vector2(bathWaterGeometry.parameters.width, bathWaterGeometry.parameters.height) },
                uRaycastIntersect: { value: new THREE.Vector2(0, 0) },

                uRaycastIntersectWorld: { value: new THREE.Vector3(0, 0, 0) },
                uElapsedTime: { value: 0.0 },
                uDecayTime: { value: 1.0 },

                uDaySurfaceColor: { value: new THREE.Color(0xbcffee) },
                uDayDepthColor: { value: new THREE.Color(0x9effe6) },
                uNightSurfaceColor: { value: new THREE.Color(0x799fb8)},
                uNightDepthColor: { value: new THREE.Color(0x5D8AA8) },

                uColorOffset: { value: 0.08 },
                uColorMultiplier: { value: 5 },

                uIsNight: { value: timeOfDay.isNight},
            }
        });

        const backgroundMaterial = new THREE.ShaderMaterial({
            vertexShader: skyVertexShader,
            fragmentShader: skyFragmentShader,
            uniforms: {
                uSkyColor: { value: new THREE.Color(timeOfDay.skyColor) },
                uHorizonColor: { value: new THREE.Color(timeOfDay.horizonColor) },
                uGroundColor: { value: new THREE.Color(timeOfDay.groundColor) },
            }
        });
/**
 * Mesh
 */
        const bathWater = new THREE.Mesh(bathWaterGeometry, bathWaterMaterial);
        bathWater.tags = {};
        bathWater.tags['needsUVCoords'] = true;
        bathWater.position.set(13.3, -2.5, 10);
        bathWater.rotateX(-0.5 * Math.PI);

        const backgroundGradient = new THREE.Mesh(backgroundGeometry, backgroundMaterial);
        InitializeTags(backgroundGradient);
        backgroundGradient.position.set(0, 15, -35);
        
        scene.add(bathWater, backgroundGradient);

/**
 * Toilet Object
 */
        const toiletFloatable = new Floatable('/models/Duck.glb', 0, 0.95, DuckTest, scene, null, true);
        

/**
* Floatables
*/
        const duck = new Floatable('/models/Duck.glb', 1, 0.5, DuckTest, scene, bathWater, false);
        const devilDuck = new Floatable('/models/Devil_Duck.glb', 2, 0.5, DevilDuckTest, scene, bathWater, false);
        const gimpDuck = new Floatable('/models/G_Duck.glb', 3, 0.5, GimpDuckTest, scene, bathWater, false);

        const floatables = [toiletFloatable, duck, devilDuck, gimpDuck];

/**
 * Scene Setters
 */
        const bathSceneSetter = new SceneSetter(new THREE.Vector3(15, 12, 40), new THREE.Vector3(12.5, -5, 10), scene, 1, 0);
        const toiletSceneSetter = new SceneSetter(new THREE.Vector3(15, 15, 15), new THREE.Vector3(-10, -1, 1), scene, 2, 1);

        const sceneSetters = [bathSceneSetter, toiletSceneSetter];

/**
* Clock
*/
        const clock = new THREE.Clock();

/**
 * Lights
 */
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
        const skyLight = new THREE.HemisphereLight(timeOfDay.skyColor, timeOfDay.groundColor, 0.4);
        const lightHelper = new THREE.HemisphereLightHelper(skyLight, 3);
        ambientLight.position.y = 19;
        scene.add(ambientLight, lightHelper, skyLight);

        scene.add(new THREE.AxesHelper(5));
/**
 * Loop
 */
//Place counter to stop Time  update every frame
        function Tick() {
            requestAnimationFrame(Tick);
                        
            timeOfDay.UpdateHour();

            UpdateWaterShader();

            //Get Active Camera;
            UpdateCameraArray();
            renderer.render(scene, cameraArray[CameraIndex.index]);
            
            //Animate Floatables
            for(let i = 0; i < floatables.length; i++){
                floatables[i].Float();
            }
            //Animate Bathwater
            function UpdateWaterShader() {
                const elapsedTime = clock.getElapsedTime();
                const timeDifference = elapsedTime - timeSinceLastMove;
                bathWaterMaterial.uniforms.uElapsedTime.value = timeDifference;
            }
        }

        Tick();

        window.addEventListener('pointermove', OnPointerMove);
        window.addEventListener('click', OnPointerClick);
    }

    render(){
        return (
            <>
                <div 
                ref={mount => {
                    this.mount = mount;
                    }} 
                id="renderContainer" />
            </>
        );
    }
}

