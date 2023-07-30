import { createRoot } from "react-dom/client";
import { CameraIndex } from "../../Three/Camera/CameraIndex";
import NavButton from "../Pages/Components/NavButton.jsx";

let PageManager = {
        activeCamera: null,
        activePage: null,
        isWindowShown: false,
        navButtonContainer: null,
        navButton: NavButton,
        windowBoxContainer: null,
        lastAccessedObject: null,
        lastCamera: null,
        isCameraCenter: true 
    ,
    
    ShowOverlay(page, cameraIndex, invoker){
        this.windowBoxContainer = document.getElementById('windowBoxContainer');

        if(this.isCameraCenter){ return; }

        if(!this.isWindowShown){
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

            this.activePage = page;
            createRoot(this.windowBoxContainer).render(page());
            this.isWindowShown = true;

            invoker['focused'] = true;
            this.lastAccessedObject = invoker;

            createRoot(this.navButtonContainer).unmount();
        }
    },
    
    CloseOverlay() {
        //TODO: Add logic to check if is already root. 
        createRoot(this.windowBoxContainer).unmount();

        this.isWindowShown = false
        this.lastAccessedObject['focused'] = false;
        this.lastAccessedObject = null;

        this.UpdateSubScene(this.lastCamera);
    },

    UpdateSubScene(cameraIndex){
        this.navButtonContainer = document.getElementById('navButtonContainer');
        createRoot(this.navButtonContainer).render(this.navButton());
        
        console.log(this.lastCamera);
        this.isCameraCenter = false;
        this.activeCamera = cameraIndex;
        CameraIndex.index = this.activeCamera;
    },

    CloseSubScene() {
        //TODO: Add logic to check if is already root. 
        createRoot(this.navButtonContainer).unmount();

        this.isCameraCenter = true;
        this.activeCamera = 0;
        CameraIndex.index = this.activeCamera;
    },

}

export { PageManager };