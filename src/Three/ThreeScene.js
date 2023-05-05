//Core
import React, { Component } from "react";
import * as THREE from 'three';
import * as dat from 'dat.gui';

import { OrbitControls } from 'three/addons/controls/OrbitControls.js';


//Shaders
import backgroundVertexShader from './shaders/background/vertex.glsl';
import backgroundTestVertexShader from './shaders/background/testvertex.glsl';
import backgroundFragmentShader from './shaders/background/fragment.glsl';



export default class ThreeScene extends Component{
    componentDidMount(){
/**
 * Loaders
 */
        const textureLoader = new THREE.TextureLoader();

/**
 *      Textures 
 */
        const carpetTexture = textureLoader.load('/textures/carpet.jpg');
/**
 * GUI
 */
        const gui = new dat.GUI();
/**
 * Renderer
 */
        const renderer = new THREE.WebGLRenderer();

/**
 * Canvas
 */
        const canvas = document.getElementById('renderContainer').appendChild(renderer.domElement);
        
/**
 * Scene    
*/ 
        const scene = new THREE.Scene();

/**
 * Camera
 */
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.position.z = 8;
        camera.position.y = 8;


/**
 * Controls
 */

        const controls = new OrbitControls(camera, renderer.domElement);
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
            camera.aspect = sizes.width / sizes.height;
            camera.updateProjectionMatrix();

            // Update renderer
            renderer.setSize(sizes.width, sizes.height);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        });
        
/**
* Geometry
* */
                const backgroundGeometry = new THREE.PlaneGeometry(10, 10, 100, 100);
                console.log(backgroundGeometry);

/**
 * Materials
 */     
        const backgroundMaterial = new THREE.ShaderMaterial({
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

        const backgroundTestMaterial = new THREE.ShaderMaterial({
            vertexShader: backgroundTestVertexShader,
            fragmentShader: backgroundFragmentShader,
            uniforms: {
                uWaveAmplitude: { value: 0.5 },
                uWaveDampening: { value: 0.1 },
                uRaycastIntersect: { value: new THREE.Vector2(0, 0) },
                uElapsedTime: { value: 0.0 },
            }
        });
   
/**
 * Mesh
 */
        const background = new THREE.Mesh(backgroundGeometry, backgroundMaterial);
        background.uniforms = {
            uInteractable: {value: true},
        }
        
        background.rotateX(- 0.5 * Math.PI);
        
        scene.add(background);

        const clock = new THREE.Clock();

        function UpdateWaveShader(){
            let timeSinceLastMouseMovement;
        }
        
        
        
        function Tick() {
            requestAnimationFrame(Tick);
            const elapsedTime = clock.getElapsedTime();
            //backgroundMaterial.uniforms.uElapsedTime.value = elapsedTime;

            //Raycaster
            raycaster.setFromCamera(pointer, camera);
            const intersects = raycaster.intersectObjects(scene.children);
            
            if(intersects.length){
                for(const collision of intersects){
                    console.log(collision);
                    //if (collision.object.mesh !== undefined && collision.object.uniforms.uInteractable.value){

                    collision.object.material.uniforms.uRaycastIntersect.value = collision.uv;

                    if(elapsedTime % 10 == 0){
                        
                    //}
                    }
                }
            }
            
            
            
            renderer.render(scene, camera);
        }

        Tick();

        window.addEventListener('pointermove', OnPointerMove);
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


