import { createRoot } from "react-dom/client";
import { CameraIndex } from "../../Three/Camera/CameraIndex";

class PageManager{
    constructor(){
        this.activeCamera = CameraIndex.index;
        this.activePage = null;
        this.isWindowShown = false;
        this.windowBox = document.getElementById('windowBox');
    };
    
    Update(page){
        if(!this.isWindowShown){
            this.activePage = page;
            console.log(this.activePage);
            createRoot(this.windowBox).render(this.activePage());
            this.isWindowShown = true;
        }
    }

    Close(){
        createRoot(this.windowBox).unmount();
        this.isWindowShown = false;
    }
}

export { PageManager };