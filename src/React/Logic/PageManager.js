import { createRoot } from "react-dom/client";
import { CameraIndex } from "../../Three/Camera/CameraIndex";

let PageManager = {
        activeCamera: null,
        activePage: null,
        isWindowShown: false,
        navButtonBox: document.getElementById('navButton'),
        windowBox: null,
        lastAccessedObject: null,
        lastCamera: null,
        isHomeScreenActive: true
    ,
    
    Update(page, cameraIndex, invoker){
        this.windowBox = document.getElementById('windowBox')

        if(!this.isWindowShown){
            this.activeCamera = CameraIndex.index;
            this.lastCamera = this.activeCamera;
            this.activeCamera = cameraIndex;
            CameraIndex.index = this.activeCamera;

            this.activePage = page;
            createRoot(this.windowBox).render(page());
            this.isWindowShown = true;

            invoker['focused'] = true;
            this.lastAccessedObject = invoker;
        }
    },

    UpdateSubScene(){
        
    },

    CloseOverlayWindow(){
        createRoot(this.windowBox).unmount();
        
        this.isWindowShown = false
        this.lastAccessedObject['focused'] = false;
        this.lastAccessedObject = null;

        this.activeCamera = this.lastCamera
        CameraIndex.index = this.activeCamera;
        this.lastCamera = null;
    }
}

export { PageManager };