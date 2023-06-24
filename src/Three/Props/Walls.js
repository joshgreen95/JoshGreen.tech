const walls = {
    WallW: {
        Position: {
            x: -2.44,
            y: -2.44,
            z: 2,
        },
        Scale: {
            x: 2.44,
            y: 2.0,
            z: 1.0,
        },
        Rotation: {
            x: 90,
            y: 0,
            z: 90,
        },
        Material: {}
    },
    WallN: {
        Position: {
            x: 0,
            y: 0,
            z: 2.0,
        },
        Scale: {
            x: 2.44,
            y: 2,
            z: 1,
        },
        Rotation: {
            x: 90,
            y: 0,
            z: 0,
        },
        Material: {}
    },
    WallE: {
        Position: {
            x: 2.44,
            y: -2.44,
            z: 2.0,
        },
        Scale: {
            x: 2.44,
            y: 2.0,
            z: 1.0,
        },
        Rotation: {
            x: 90,
            y: 0,
            z: 90,
        },
        Material: {}
    },
    Floor: {
        Position: {
            x: 0,
            y: -2.44,
            z: 0,
        },
        Scale: {
            x: 3.0,
            y: 3.0,
            z: 1.0,
        },
        Rotation: {
            x: -180,
            y: 0,
            z: 90,
        },
        Material: {}
    },
}

exports = { walls };