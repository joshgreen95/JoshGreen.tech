import { tags } from "../Props/Tags.js";

/**
 * Initializes tags on scene group
 * @param {*} scene 
 */

function InitializeTags(scene){
        tags.forEach((tag) => {
            AssignTagToScene(scene, tag, false);
        })
}

/**
 * Assigns tags to scene group.
 * @param {*} scene 
 * @param {String} tag 
 * @param {*} val 
 */

function AssignTagToScene(scene, tag, val){
    if (scene.children.length === 0){
        if (scene && !('tags' in scene)) {
            scene['tags'] = {}
        }

        scene['tags'][tag] = val;
    }

    scene.children.forEach((child) => {
        if (child.children.length > 0) {
            AssignTagToScene(child, tag, val);
        } 

        if(child && !('tags' in child)){
            child['tags'] = {}
        }

        child['tags'][tag] = val;
        })
}

export { InitializeTags, AssignTagToScene };