const defaultCamera = {
    position: {
        x: 0.5,
        y: 2.0,
        z: 5.0
    },
    rotation: {
        x: -0.295,
        y: 0.0,
        z: 0.0
    }
};

const bathCamera = {
    position: {
        x: 1.65,
        y: 1.6,
        z: 3.55
    },
    rotation: {
        x: -0.348,
        y: 0.0,
        z: 0.0
    }
};

const toiletCamera = {
    position: {
        x: -1,
        y: 1.3,
        z: 0.65
    },
    rotation: {
        x: -1.57,
        y: 1,
        z: 1.57
    }
};

const cameras = [defaultCamera, bathCamera, toiletCamera]


export { cameras };