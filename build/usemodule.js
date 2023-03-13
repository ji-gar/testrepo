"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const student_1 = __importDefault(require("./modules/student"));
let data = new student_1.default();
console.log(data.info);
