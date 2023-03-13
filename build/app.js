"use strict";
class data {
    constructor() {
        this.name = "";
        this.rollno = 0;
    }
    getData() {
        this.name = "hello word";
        this.rollno = 15;
        console.log("Super is called");
    }
    setData() {
        console.log(this.name);
        console.log(this.rollno);
    }
}
class b extends data {
    constructor() {
        super(...arguments);
        this.name = "hello";
        this.rollno = 13;
    }
    getData() {
        super.getData();
    }
}
let object = new b;
object.setData();
object.getData();
