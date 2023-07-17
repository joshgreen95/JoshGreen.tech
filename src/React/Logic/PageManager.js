import { createRoot } from "react-dom/client";
import { CameraIndex } from "../../Three/Camera/CameraIndex";

let PageManager = {
        activeCamera: CameraIndex.index,
        activePage: null,
        isWindowShown: false,
        windowBox: null,
        lastAccessedObject: null,
        lastCamera: null
    ,
    
    Update(page, cameraIndex, invoker){
        this.windowBox = document.getElementById('windowBox')

        if(!this.isWindowShown){
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

    Close(){
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