function GetDistance(pos1, pos2) { 
    if(!pos1 || !pos2){
        return null;
    }
    
    const xSquared = Math.pow((pos2.x - pos1.x), 2);
    const ySquared = Math.pow((pos2.y - pos1.y), 2);
    const zSquared = Math.pow((pos2.z - pos1.z), 2);
    const sumCoordsSquared = xSquared + ySquared + zSquared;
    
    const distance = Math.sqrt(sumCoordsSquared);
    return distance;
}


export { GetDistance };