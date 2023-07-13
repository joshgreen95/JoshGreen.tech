function GetDistance(pos1, pos2) {
    if (typeof pos1 == 'number' && typeof pos2 == 'number') {
        console.log(pos1, pos2);
        return pos2 - pos1;
    }

    //This is bad programming
    let xSquared, zSquared = 0;
    let xDifference, zDifference = 0;

    xDifference = Math.abs(pos2.x - pos1.x);
    zDifference = Math.abs(pos2.z - pos1.z);

    xSquared = Math.pow(xDifference, 2);
    zSquared = Math.pow(zDifference, 2);

    const sumCoordsSquared = xSquared + zSquared;
    const distance = Math.sqrt(sumCoordsSquared);

    return distance;
}

export { GetDistance };