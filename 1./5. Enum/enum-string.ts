enum EnumString {
    ADD_USER = "ADD_USER",
    EDIT_USER = "EDIT_USER",
    REMOVE_USER = "REMOVE_USER",
}

const enumStringObject = {
    ADD_USER: "ADD_USER",
    EDIT_USER: "EDIT_USER",
    REMOVE_USER: "REMOVE_USER",
}

enumStringObject.ADD_USER = 'Hello'

const test = enumStringObject.ADD_USER;

console.log(test);