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

        //Random Placement;
        self.PlaceRandomly();
    }

    PlaceRandomly() {
        console.log(this.model);
        const waterPosX = this.waterMesh.position.x;
        const waterPosZ = this.waterMesh.position.z;
        const waterWidth = this.waterMesh.geometry.parameters.width;
        const waterHeight = this.waterMesh.geometry.parameters.height;

        const boundaryOffset = 3;
        const offsetWidth = waterWidth - boundaryOffset;
        const offsetHeight = waterHeight - boundaryOffset

        let xPos = (((Math.random() * (offsetWidth)) - (offsetWidth / 2)) + waterPosX);
        let zPos = (((Math.random() * offsetHeight) - (offsetHeight / 2)) + waterPosZ);

        console.log(xPos, zPos);
        this.model.position.x = xPos;
        this.model.position.z = zPos;

        const rotationalFactor = Math.PI * 0.75;
        this.model.rotation.y = rotationalFactor / 2 - ((Math.random() * rotationalFactor));
    }

    Float() {
        if (this.model) {
            AnimateFloatable(this.model, this.waterMesh.material);
        }
    }
}

export { Floatable };