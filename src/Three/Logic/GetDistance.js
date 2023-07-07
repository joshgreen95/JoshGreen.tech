function GetDistance(pos1, pos2) {
    //This is bad programming
    let xSquared, ySquared, zSquared = 0;
    let xDifference, yDifference, zDifference = 0;

    xDifference = pos2.x - pos1.x
    yDifference = pos2.y - pos1.y
    zDifference = pos2.z - pos1.z

    xSquared = Math.pow(xDifference, 2);
    ySquared = Math.pow(yDifference, 2);
    zSquared = Math.pow(zDifference, 2);

    const sumCoordsSquared = xSquared + ySquared + zSquared;
    const distance = Math.sqrt(sumCoordsSquared);

    return distance;
}

export { GetDistance };