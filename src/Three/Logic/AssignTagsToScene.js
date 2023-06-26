import { tags } from "./Tags";

export function InitializeTags(scene){
        tags.forEach((tag) => {
            AssignTagToScene(scene, tag, false);
        })
}

export function AssignTagToScene(scene, tag, val){
    scene.children.forEach((child) => {
        if (child.children.length > 0) {
            AssignTagToScene(child, tag, val);
        } 

        if(child && !('tags' in child)){
            child['tags'] = {}
        }

        child['tags'][tag] = val;
        
        //EnableShadows
        enableShadows(child);
    })
}

function enableShadows(child){
    child.castShadow = true;
    child.receiveShadow = true;
}