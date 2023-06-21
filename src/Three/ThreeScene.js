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

//Functions
import Calculate2DBounds from './CalculateBounds.js'
import { InitializeTags } from "./AssignTagsToScene";

export default class ThreeScene extends Component{
    componentDidMount(){
/**
 * Loaders
 */
        const textureLoader = new THREE.TextureLoader();
        const gltLoader = new GLTFLoader();


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
 * Axis Helper
 */
        const axesHelper = new THREE.AxesHelper(5);
        scene.add(axesHelper);

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
 * Models
 */
        //Bath
        let bathTub2DBounds = null;

        gltLoader.load('/models/Bath.glb', (model) => {    
            console.log(model);
            
            InitializeTags(model.scene, 'needsUVCoords', false);
            
            console.log(model);
            scene.add(model.scene);
        
            const bathTub = model.scene.children[0];
            bathTub2DBounds = Calculate2DBounds(bathTub);

            bathWater.scale.set((bathTub2DBounds[0] - bathTub2DBounds[1]) * 0.9 , bathTub2DBounds[0]* 0.9, 0);
        }, 
        (progress) => {}, 
        (error) => {
            throw new Error(error);
        });
/**
 * Textures 
 */
        const carpetTexture = textureLoader.load('/textures/carpet.jpg');
/**
* Geometry
* */
        const bathWaterGeometry = new THREE.PlaneGeometry(1, 1, 100, 100);
        console.log(bathWaterGeometry);

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
        
        scene.add(bathWater);

        
        const clock = new THREE.Clock();
        
/**
 * Lights
 */
        scene.add(new THREE.AmbientLight(0x404040, 1) );

        function Tick() {
            requestAnimationFrame(Tick);
            const elapsedTime = clock.getElapsedTime();
            //backgroundMaterial.uniforms.uElapsedTime.value = elapsedTime;

            //Raycaster
            raycaster.setFromCamera(pointer, camera);
            const intersects = raycaster.intersectObjects(scene.children);
            
            if(intersects.length){
                for(const collision of intersects){
                    if(!collision['needsUVCoords']) {return ;}
                    console.log(collision);
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


