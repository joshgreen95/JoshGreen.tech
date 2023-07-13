import { LoadGLTFScene } from "../ImportModel";
import { AnimateFloatable } from "./AnimateFloatables";
import { PlaceRandomly } from "./PlaceFloatable";

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
        self.model.tags = {}
        self.model.tags['clickable'] = true;
        //Random Placement;
        self.Place();
    }

    Place() {
        PlaceRandomly(this.model, this.waterMesh);
    }

    Float() {
        if (this.model) {
            AnimateFloatable(this.model, this.waterMesh);
        }
    }
}

export { Floatable };