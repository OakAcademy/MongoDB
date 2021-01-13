const assert = require("assert");
const Student = require("../src/student")

describe("Create the first data", () => {
    it("Save the studet", (done) => {
        const jason = new Student({name :"Jason"});
        jason.save()
        .then(() =>{
            assert(!jason.isNew)
            done()
        })
    })
});