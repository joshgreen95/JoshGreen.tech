let CameraIndex = {
    
    cameraIndex: 0,

    set index(index){
        this.cameraIndex = index;
    },

    get index() {
        return this.cameraIndex;
    }
}

export { CameraIndex }