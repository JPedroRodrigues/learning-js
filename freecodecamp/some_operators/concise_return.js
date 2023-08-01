/*
const createPerson = (name, age, gender) => {
    return {
        name : name,
        age : age,
        gender : gender
    }
}
*/

const createPerson = (name, age, gender) => ({name, gender, age});
console.log(createPerson("Joãozinho", 20, "male"));