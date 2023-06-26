//Core
import React, { Component } from "react";
import * as THREE from 'three';
import * as dat from 'dat.gui';

import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

//Loaders
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

//Shaders
import backgroundVertexShader from './shaders/background/vertex.glsl';
import backgroundFragmentShader from './shaders/background/fragment.glsl';

//Logic
import { LoadGLTFScene } from "./Logic/ImportModel";
import { InitializeCameraArray } from "./Logic/InitializeCameraArray";
import { CameraIndex } from "./Logic/CameraIndex";

//Props

export default class ThreeScene extends Component{
    componentDidMount(){
/**
 * Loaders
 */
        const textureLoader = new THREE.TextureLoader();
/**
 * GUI
 */
        const gui = new dat.GUI();
        
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
        const raycaster = new THREE.Raycaster()
        
/**
 * Pointer
 */
        const pointer = new THREE.Vector2();
        
        function OnPointerMove( event ){
            pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
            pointer.y = (event.clientY / window.innerHeight) * 2 - 1;
        }

        function OnPointerClick(event){
            //Raycaster
            raycaster.setFromCamera(pointer, cameraArray[0]);
            const intersects = raycaster.intersectObjects(scene.children);
            
            if (intersects.length) {
                for (const collision of intersects) {
                    if (!collision['needsUVCoords']) { return; }
                    console.log(collision);
                }
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
        const bathroom = LoadGLTFScene(scene, '/models/Scene.glb');

/**
 * Textures 
 */
        const carpetTexture = textureLoader.load('/textures/carpet.jpg');
/**
* Geometry
* */
        const bathWaterGeometry = new THREE.PlaneGeometry(1, 1, 100, 100);

/**
 * Materials
 */     
        const bathWaterMaterial = new THREE.ShaderMaterial({
            vertexShader: backgroundVertexShader,
            fragmentShader: backgroundFragmentShader,
            uniforms: {
                uWaveAmplitude: {value: 1},
                uWaveDampening: {value: 0.2},
                uRaycastIntersect: {value: new THREE.Vector2(0, 0)},
                uElapsedTime: {value: 0.0},
                uTexture: {value: carpetTexture},
            }
        });
/**
 * Mesh
 */
        const bathWater = new THREE.Mesh(bathWaterGeometry, bathWaterMaterial);
        bathWater.tags = {};
        bathWater.tags['needsUVCoords'] = true;


        bathWater.rotateX(- 0.5 * Math.PI);
        bathWater.position.y -= 0.1
        
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
            const elapsedTime = clock.getElapsedTime();
            //backgroundMaterial.uniforms.uElapsedTime.value = elapsedTime;
            renderer.render(scene, cameraArray[CameraIndex.index]);
        }

        Tick();

        window.addEventListener('pointermove', OnPointerMove);
        window.addEventListener('click', OnPointerMove);
    }



    render(){
        return (
            <div 
            ref={mount => {
                this.mount = mount;
                }} 
            id="renderContainer" />
        );
    }
}


