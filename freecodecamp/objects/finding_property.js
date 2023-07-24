var myObj = {
    "gift" : "pony",
    "pet" : "kitten",
    "bed" : "sleigh"
}

function property_exists(obj, property) {
    if (obj.hasOwnProperty(property)) {
        return obj[property];
    }
    return "Not found";
}

console.log(property_exists(myObj, "gift"));