const reverseString = require('./index.js');

describe ("test inverted string", ()=>{
    it("empty string input", ()=>{
        const result = reverseString("");
        expect(result).toBe("Введена пустая строка")
    }) 
    it("inverted string input", ()=>{
        const result = reverseString("hello");
        expect(result).toBe("olleh")
    }) 
})