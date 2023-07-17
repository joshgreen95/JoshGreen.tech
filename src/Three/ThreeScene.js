//Core
import React, { Component} from "react";
import { createRoot } from 'react-dom/client';
import * as THREE from 'three';
import * as dat from 'dat.gui';

//Controls
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

//Shaders
import backgroundVertexShader from './shaders/background/vertex.glsl';
import backgroundFragmentShader from './shaders/background/fragment.glsl';

//Logic
import { LoadGLTFScene } from "./Props/ImportModel.js";
import { InitializeCameraArray, UpdateCameraArray } from "./Camera/InitializeCameraArray.js";
import { CameraIndex } from './Camera/CameraIndex.js'

//Props
import { Floatable } from "./Props/Floatables/Floatable";

//PageManger
import { PageManager } from "../React/Logic/PageManager";

//JSX Components
import TestScreen from "../React/Logic/Components/TestScreen";
import DuckTest1 from "../React/Logic/Components/DuckTest1";

export default class ThreeScene extends Component{
    componentDidMount(){
/**
 * HTML Elements
 */

/**
 * Page Manager
 */

/**
 * Loaders
 */

/**
 * GUI
 */
    //const gui = new dat.GUI();
        
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
 * Scene    
*/ 
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x953506B)
        
/**
 * Camera
 */
        const cameraArray = InitializeCameraArray(60, window.innerWidth / window.innerHeight, 0.1, 1000);

/**
 * Controls
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
            pointer.y = (event.clientY / window.innerHeight) * 2 - 1;
        }

        function OnPointerClick(event){
            console.log(PageManager);
            //Fix for Mobile
            OnPointerMove(event);
            //Raycaster
            raycaster.setFromCamera(pointer, cameraArray[CameraIndex.index]);
            const intersects = raycaster.intersectObjects(scene.children);
            if (intersects.length > 0) {
                let collision = intersects[0];
                
                
                //DisplayWindow
                if(collision.object.tags['floatable'] ){
                    if(!PageManager.isWindowShown){
                        const floatable = floatables[collision.object.tags['floatableIndex']];
                        floatable.Focus();
                    }
                }

                
                if (collision.object.tags['needsUVCoords']) {
                    collision.object.material.uniforms.uRaycastIntersect.value = collision.uv;

                    /**
                    For some reason raycast intersect world pos is flipped on Z axis 
                    This Inverts that back
                    TODO LOOK INTO THIS 
                    **/

                    const adjustedX = collision.point.x;
                    const adjustedZ = (1 - (collision.point.z / collision.object.geometry.parameters.height)) * collision.object.geometry.parameters.height;
                    
                    collision.object.material.uniforms.uRaycastIntersectWorld.value = new THREE.Vector3(adjustedX, 0, adjustedZ);
                    console.log(collision.object.material.uniforms.uRaycastIntersectWorld.value);
                    timeSinceLastMove = clock.getElapsedTime(); }
            }
        }
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
        });
        
/**
 * Models
 */
        //const bathroom = LoadGLTFScene(scene, '/models/Scene.glb');

/**
 * Textures 
 */

/**
* Geometry
* */
        const bathWaterGeometry = new THREE.PlaneGeometry(10, 22, 100, 100);
/**
* Materials
*/
        var timeSinceLastMove = 0;

        const bathWaterMaterial = new THREE.ShaderMaterial({
            vertexShader: backgroundVertexShader,
            fragmentShader: backgroundFragmentShader,
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

                uSurfaceColor: { value: new THREE.Color(0xbcffee) },
                uDepthColor: { value: new THREE.Color(0x9effe6) },
                uColorOffset: { value: 0.08 },
                uColorMultiplier: { value: 5 },
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
        
        scene.add(bathWater);
/**
* Floatables
*/
        const duck = new Floatable('/models/Duck.glb', 0, 0.5, DuckTest1, scene, bathWater);
        //const duck1 = new Floatable('/models/Devil_Duck.glb', 1, 0.5, null, scene, bathWater);
        //const duck2 = new Floatable('/models/G_Duck.glb', 2, 0.5, null, scene, bathWater);

        const floatables = [duck];
        console.log(floatables);
/**
* Clock
*/
        const clock = new THREE.Clock();

/**
 * Lights
 */
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.05);
        scene.add(ambientLight);

/**
 * Loop
 */
        function Tick() {
            requestAnimationFrame(Tick);
            UpdateWaterShader();
            UpdateCameraArray();
            
            //Animate Floatables
            for(let i = 0; i < floatables.length; i++){
                floatables[i].Float();
            }

            renderer.render(scene, cameraArray[CameraIndex.index]);
            
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

