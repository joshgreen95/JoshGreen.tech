/**
 * Randomly places floatable based on bath water meshes size and rotates them randomly.
 * Function keeps track of distance between all floatables and corrects so ducks are not inside eachother.
 * 
 * @param {model} floatable 
 * @param {THREE.Mesh} waterMesh
 * @param {Array} positionsArray
 */

function PlaceRandomly(model, waterMesh, positionsArray) {
    let validPlacement = false;
    var validPlacementDistance = 10;

    const waterPosX = waterMesh.position.x;
    const waterPosZ = waterMesh.position.z;
    const waterWidth = waterMesh.geometry.parameters.width;
    const waterHeight = waterMesh.geometry.parameters.height;

    const boundaryOffset = 5;
    const offsetWidth = waterWidth - boundaryOffset;
    const offsetHeight = waterHeight - boundaryOffset;

    var tryCount = 0;
    while (!validPlacement) {
        let xPos = (((Math.random() * (offsetWidth)) - (offsetWidth / 2)) + waterPosX);
        let zPos = (((Math.random() * offsetHeight) - (offsetHeight / 2)) + waterPosZ);

        model.position.x = xPos;
        model.position.z = zPos;

        if (positionsArray.length === 0) {
            validPlacement = true;
        }

        let validCount = 0;

        for (let i = 0; i < positionsArray.length; i++) {
            if (model.position.distanceTo(positionsArray[i]) > validPlacementDistance) {
                validCount ++;
            }
            
            if(validCount === positionsArray.length){
                validPlacement = true;
            }
        }

        if(tryCount >= 5){
            validPlacementDistance -= 0.3;
            tryCount = 0;
        }

        tryCount++;
    }

    positionsArray.push(model.position);

    const rotationalFactor = Math.PI * 0.5;
    model.rotation.y = rotationalFactor / 2 - ((Math.random() * rotationalFactor));
}

function PlaceToiletFloatable(model){
    model.position.x = -15.3;
    model.position.y = -2.5;
    model.position.z = 12.2;

    model.rotation.y = 0.5 * 3.14;
    model.receiveShadow = true;
}

export { PlaceRandomly, PlaceToiletFloatable };