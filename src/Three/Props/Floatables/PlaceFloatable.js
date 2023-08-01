function PlaceRandomly(model, waterMesh) {
    const waterPosX = waterMesh.position.x;
    const waterPosZ = waterMesh.position.z;
    const waterWidth = waterMesh.geometry.parameters.width;
    const waterHeight = waterMesh.geometry.parameters.height;

    const boundaryOffset = 5;
    const offsetWidth = waterWidth - boundaryOffset;
    const offsetHeight = waterHeight - boundaryOffset

    let xPos = (((Math.random() * (offsetWidth)) - (offsetWidth / 2)) + waterPosX);
    let zPos = (((Math.random() * offsetHeight) - (offsetHeight / 2)) + waterPosZ);

    model.position.x = xPos;
    model.position.z = zPos;

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