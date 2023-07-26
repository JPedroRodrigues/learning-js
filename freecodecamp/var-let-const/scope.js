function checkScope() {
    "use strict";
    let i = "function scope";
    if (true) {
        let i = "block scope";
        console.log(`Block scope is ${i}`);
    }
    console.log(`Function scope is: ${i}`);
    return i;
}

checkScope();