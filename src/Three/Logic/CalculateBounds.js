export default function Calculate2DBounds(mesh){
    let xyBounds = {
        xPosBound: mesh.geometry.boundingBox.max.x,
        xNegBound: mesh.geometry.boundingBox.min.x,
        zPosBound: mesh.geometry.boundingBox.max.z,
        zNegBound: mesh.geometry.boundingBox.min.z,
    }

    return [xyBounds.xPosBound, 
            xyBounds.xNegBound,
            xyBounds.zPosBound,
            xyBounds.zNegBound];
};