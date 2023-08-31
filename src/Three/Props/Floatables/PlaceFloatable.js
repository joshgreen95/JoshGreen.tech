function PlaceRandomly(model, waterMesh, positionsArray) {
    let validPlacement = false;
    const validPlacementDistance = 5;

    const waterPosX = waterMesh.position.x;
    const waterPosZ = waterMesh.position.z;
    const waterWidth = waterMesh.geometry.parameters.width;
    const waterHeight = waterMesh.geometry.parameters.height;

    const boundaryOffset = 5;
    const offsetWidth = waterWidth - boundaryOffset;
    const offsetHeight = waterHeight - boundaryOffset;

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
            console.log(model.position.distanceTo(positionsArray[i]));
            if (model.position.distanceTo(positionsArray[i]) > validPlacementDistance) {
                validCount ++;
            }
            
            if(validCount === positionsArray.length){
                validPlacement = true;
            }
        }
    }
    positionsArray.push(model.position);

    const rotationalFactor = Math.PI * 0.75;
    model.rotation.y = rotationalFactor / 2 - ((Math.random() * rotationalFactor));
}

function PlaceToiletFloatable(model){
    model.position.x = -12.7;
    model.position.y = -4.6;
    model.position.z = 1.1;

    model.rotation.y = 0.5 * 3.14;
}

export { PlaceRandomly, PlaceToiletFloatable };