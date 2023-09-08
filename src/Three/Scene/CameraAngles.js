const defaultCamera = {
    position: {
        x: 1.681627725641144,
        y: 8.62714889731801,
        z: 39.88839919547512
    },
    rotation: {
        x: -0.22064499486553668,
        y: 0.0,
        z: 0.0
    }
};

const bathCamera = {
    position: {
        x: 13.71,
        y: 9.35,
        z: 27.465
    },
    rotation: {
        x: -0.5889637847387459,
        y: 0.005362218047267043,
        z: 0.003582229075327193
    }
};

const toiletCamera = {
    position: {
        x: -4.5,
        y: 2.5,
        z: 1.1
    },
    rotation: {
        x: -1.57,
        y: 1,
        z: 1.57
    }
};

const cameras = [defaultCamera, bathCamera, toiletCamera]


export { cameras };