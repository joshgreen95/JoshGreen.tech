import { createRoot } from 'react-dom/client';
import { CameraIndex } from "../../Three/Camera/CameraIndex";
import NavButton from "../Pages/Components/NavButton.jsx";
import MobileNavMenu from "../Pages/MobileNavMenu.jsx";

let PageManager = {
        activeCamera: null,
        activePage: null,
        isWindowShown: false,
        navButtonContainer: null,
        navButtonRoot: null,
        navButton: NavButton,
        windowBoxContainer: null,
        windowBoxRoot: null,
        lastAccessedObject: null,
        lastCamera: null,
        isCameraCenter: true,
        
        isMobile: null,
        mobileNavMenuContainer: null,
        mobileNavMenuRoot: null,
        mobileNavMenu: MobileNavMenu,

        rootRelationArray: null,


        InitializeRoots() {
            this.navButtonContainer = document.getElementById('navButtonContainer');
            this.mobileNavMenuContainer = document.getElementById('mobileNavMenuContainer');
            this.windowBoxContainer = document.getElementById('windowBoxContainer');

            this.navButtonRoot = createRoot(this.navButtonContainer);
            this.mobileNavMenuRoot = createRoot(this.mobileNavMenuContainer);
            this.windowBoxRoot = createRoot(this.windowBoxContainer);


           this.rootRelationArray = [[this.navButtonContainer, this.navButtonRoot],
                                     [this.windowBoxContainer, this.windowBoxRoot],
                                     [this.mobileNavMenuContainer, this.mobileNavMenuRoot]];
        },

        BuildRoots(){
            //PROBLEM IS HERE>>> ARRAY IS NOT DIRECTLY LINKED 
            for (let i = 0; i < this.rootRelationArray.length; i++) {
                 if(this.rootRelationArray[i][1]._internalRoot === null){
                    console.log(this.rootRelationArray[i][1]);
                    console.log(` is null, Creating Root`);
                    this.rootRelationArray[i][1] = createRoot(this.rootRelationArray[i][0]);
                    console.log(this.rootRelationArray[i][1]);
                    console.log(this.navButtonRoot)
                }
             }
             console.log(this.windowBoxRoot, this.navButtonRoot, this.mobileNavMenuRoot);
        },

        ShowOverlay(page, cameraIndex, invoker){
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
                this.rootRelationArray[1][1].render(page());
                this.isWindowShown = true;

                invoker['focused'] = true;
                this.lastAccessedObject = invoker;

                this.rootRelationArray[0][1].unmount();
            }
            this.BuildRoots();
        },

        CloseOverlay() {

            this.rootRelationArray[1][1].unmount();

            this.isWindowShown = false
            this.lastAccessedObject['focused'] = false;
            this.lastAccessedObject = null;

            this.UpdateSubScene(this.lastCamera);
            this.BuildRoots();
        },

        UpdateSubScene(cameraIndex){
            this.rootRelationArray[0][1].render(this.navButton());

            console.log(this.lastCamera);
            this.isCameraCenter = false;
            this.activeCamera = cameraIndex;
            CameraIndex.index = this.activeCamera;
            this.BuildRoots();
        },

        CloseSubScene() {
            this.rootRelationArray[0][1].unmount();
            this.isCameraCenter = true;
            this.activeCamera = 0;
            CameraIndex.index = this.activeCamera;
            this.BuildRoots();
    },

}

export { PageManager };