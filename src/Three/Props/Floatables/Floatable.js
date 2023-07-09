import { LoadGLTFScene } from "../ImportModel";

class Floatable {
    constructor(modelRef, modelScale, pageRef, scene, waterMesh) {
        this.modelRef = modelRef;
        this.model = null;
        this.page = pageRef;
        this.scale = modelScale;
        this.scene = scene;
        this.waterMesh = waterMesh;
    }

    Instantiate() {
        LoadGLTFScene(this.scene, this.modelRef, this.loadCallback, this);
    }

    PlaceRandomly() {
        console.log(this.waterMesh);
    }

    loadCallback(self, model) {
        self.model = model;
        model.scale.setScalar(self.scale);
        console.log(self.model);

        //Random Placement;
        self.PlaceRandomly();
    }
}

export { Floatable };