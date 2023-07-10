import { LoadGLTFScene } from "../ImportModel";
import { AnimateFloatable } from "./AnimateFloatables";

class Floatable {
    constructor(modelRef, modelScale, pageRef, scene, waterMesh) {
        this.modelRef = modelRef;
        this.page = pageRef;
        this.scale = modelScale;
        this.scene = scene;
        this.waterMesh = waterMesh;
        this.model = LoadGLTFScene(this.scene, this.modelRef, this.Instantiate, this);
    }

    Instantiate(self, model) {
        self.model = model;
        model.scale.setScalar(self.scale);
        console.log(self.model);

        //Random Placement;
        self.PlaceRandomly();
    }

    PlaceRandomly() {
        console.log(this.waterMesh);
    }

    Float() {
        AnimateFloatable(this.model, this.waterMesh.material);
    }
}

export { Floatable };