const voxel = {x:1, y:2, z:3};

/*
const a = voxel.x;
const b = voxel.y;
const c = voxel.z;
*/

const {x:a, y:b, z:c} = voxel;

const local_forecast = {
    today : {min : 13, max : 25},
    tomorrow : {min : 15, max : 29}
}

function get_max_tomorrow(forecast) {
    "use strict";

    const {tomorrow : {max : maxOfTomorrow}} = forecast;

    return maxOfTomorrow;
}

console.log(get_max_tomorrow(local_forecast));