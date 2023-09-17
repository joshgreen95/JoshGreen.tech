//Core
import { createRoot } from 'react-dom/client';
// Camera Logic
import { CameraIndex } from "../../Three/Camera/CameraIndex";
import { UpdateCameraArray } from '../../Three/Camera/InitializeCameraArray.js';
//JSX Components
import NavButton from "../Pages/Components/Window/NavBanner/NavButton.jsx";
import MobileNavMenu from "../Pages/MobileNavMenu.jsx";

let PageManager = {
        activeCamera: null,
        activePage: null,
        isWindowShown: false,
        lastAccessedObject: null,
        lastCamera: null,
        isCameraCenter: true,
        
        isMobile: null,

        isMuted: false,

        pages: {
            navButton: {
                container: null,
                containerString: 'navButtonContainer',
                root: null,
                page: NavButton
            },
            mobileNavMenu: {
                container: null,
                containerString: 'mobileNavMenuContainer',
                root: null,
                page: MobileNavMenu
            },
            windowBox: {
                container: null,
                containerString: 'windowBoxContainer',
                root: null,
                page: null
            }
        },


        InitializeRoots() {
            this.pages.navButton.container = document.getElementById(this.pages.navButton.containerString);
            this.pages.mobileNavMenu.container = document.getElementById(this.pages.mobileNavMenu.containerString);
            this.pages.windowBox.container = document.getElementById(this.pages.windowBox.containerString);

            this.pages.navButton.root = createRoot(this.pages.navButton.container);
            this.pages.mobileNavMenu.root = createRoot(this.pages.mobileNavMenu.container);
            this.pages.windowBox.root = createRoot(this.pages.windowBox.container);

            if(this.isMobile){
                this.pages.mobileNavMenu.root.render(this.pages.mobileNavMenu.page());
            }
        },

        BuildRoots(){
             for(const page in this.pages){
                 if (this.pages[page].root._internalRoot === null){
                    this.pages[page].root = createRoot(this.pages[page].container);
                }
             }
        },

        ShowOverlay(page, cameraIndex, invoker){
            if(this.isCameraCenter && invoker !== 'ui'){ return; }

            if(!this.isWindowShown || invoker === 'ui'){
                if(cameraIndex){
                    this.activeCamera = CameraIndex.index;
                    this.lastCamera = this.activeCamera;
                    this.activeCamera = cameraIndex;
                    CameraIndex.index = this.activeCamera;
                } else {
                    //If is no camera index in case of toilet floatable...
                    this.activeCamera = CameraIndex.index;
                    this.lastCamera = this.activeCamera;
                }
                console.log(UpdateCameraArray());
                this.activePage = page;
                this.pages.windowBox.root.render(page());
                this.isWindowShown = true;

                if (invoker && invoker !== 'ui'){
                    invoker['focused'] = true;
                    this.lastAccessedObject = invoker;
                }
                
                if(this.pages.navButton.root._internalRoot !== null){
                    this.pages.navButton.root.unmount();
                }
            }
            this.BuildRoots();
        },

        CloseOverlay() {
            this.pages.windowBox.root.unmount();

            this.isWindowShown = false
            
            if (this.lastAccessedObject){
                this.lastAccessedObject['focused'] = false;
                this.lastAccessedObject = null;
            }

            if(this.activeCamera !== 0){
                this.UpdateSubScene(this.lastCamera);
            }

            this.BuildRoots();
        },

        UpdateSubScene(cameraIndex){
            this.pages.navButton.root.render(this.pages.navButton.page());

            this.isCameraCenter = false;
            this.activeCamera = cameraIndex;
            CameraIndex.index = this.activeCamera;

            if(this.isMobile){
                this.pages.mobileNavMenu.root.unmount();
            }

            this.BuildRoots();
        },
        //For Upload
        CloseSubScene() {
            this.pages.navButton.root.unmount();
            
            this.isCameraCenter = true;
            this.activeCamera = 0;
            CameraIndex.index = this.activeCamera;

            if(this.isMobile){
                this.pages.mobileNavMenu.root.render(this.pages.mobileNavMenu.page());
            }

            this.BuildRoots();
    },

        ToggleMute(){
            this.isMuted = !this.isMuted;
        }

}

export { PageManager };