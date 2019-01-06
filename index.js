exports.changeAttributeOfObject = function(oldField, newField, objects){
    var status = true;
    // checking the data is in object format or not
    if(typeof objects === 'object'){
        if(Object.keys(objects).length > 0){
            for(key in objects){
                if(key == oldField){
                    objects[ newField] = objects[oldField];
                    delete objects[oldField];
                }else{
                    var newObject = objects[key];
                    if(Object.keys(newObject).length > 0){
                        for(var key1 in newObject){
                            if(key1 == oldField){
                                newObject[newField] = newObject[oldField];
                                delete newObject[oldField];
                            }
                        }
                    }else{
                        status = false;
                    }
                    
                }
                
            }
            // console.log(objects)
            return objects;
        }else{
            console.log('Sorry, your object is empty.');
        }
    }else{
        console.log('Sorry, please your data not in an object format.');
    }
}