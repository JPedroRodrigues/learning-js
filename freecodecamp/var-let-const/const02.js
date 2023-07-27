function freezeObj() {
    "use strict";

    const math_constants = {
        pi : 3.14
    };

    // protegendo a constante de mudanças
    Object.freeze(math_constants); 

    try {
        math_constants.pi = 99;
    } catch (ex) {
        console.log(ex);
    }

    return math_constants.pi;
}

const PI = freezeObj();
console.log(PI);