"use strict";
class shorthand {
    constructor(name, rollno) {
        this.name = name;
        this.rollno = rollno;
        this.data = "";
    }
    getInformation() {
        console.log(this.name);
        console.log(this.rollno);
    }
}
let call = new shorthand("hello", 15);
call.data = "hello word";
console.log(call.data);
call.getInformation();
