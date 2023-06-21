//FIX
export default function AssignTagsToScene(scene, tag, val){
    
    scene.forEach((child) => {
        if (child.children.length > 0) {
            AssignTagsToScene(scene, tag, val);
            return;
        }
        console.log(child);
        if(!('tags' in child)){
            console.log(('tags' in child))
            child['tags'] = {}
        }

        child['tags'][tag] = val;
    })
}