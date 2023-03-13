"use strict";
class User {
    constructor() {
        this.basicinfo = "hello";
    }
    
    name() {
        return "abc";
    }
}
class user2 extends User {
    name() {
        return "data";
    }
}
let info = new user2();
console.log(info.name() + info.basicinfo);
