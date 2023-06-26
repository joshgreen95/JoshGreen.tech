import { tags } from "./Tags";

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