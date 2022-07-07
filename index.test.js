const sum = require("./index")

describe("Testing sum function", ()=>{
    test("Add 2 positive numbers",()=>{
        expect(sum(1,2)).toBe(3);
    })
    test("Add 2 negative numbers",()=>{
        expect(sum(-1,-2)).toBe(-3);
    })
    test("Add 2 numbers as strings, and output is integer",()=>{
        expect(sum(1.5,1.5)).toBe(3);
    })
});