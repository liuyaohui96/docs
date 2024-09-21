// Check if the predicate (second argument) is truthy 
// on all elements of a collection (first argument)

// In JavaScript, truthy values are values 
// that translate to true when evaluated in a Boolean context
function truchCheck(collection, pre){
    return collection.every(item => item.hasOwnProperty(pre)&&Boolean(item[pre]));
}

function truchCheck2(collection, pre){
    return collection.every(item => item[pre]);
}