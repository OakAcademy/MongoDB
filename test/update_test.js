const assert = require("assert");
const Student = require("../src/student");

describe("Updating records", () => {
  let jason;
  let jason2;

  beforeEach((done) => {
    jason = new Student({ name: "Jason", studentNumber:2500, articleCount: 5, grade:10});
    jason.save().then(() => done());
  });

//   it("set and save", (done) => {
//     console.log(jason);
//     jason.set("name", "Alex");
//     jason.save()
//     .then(() => Student.find({}))
//     .then((students) => {
//         assert(students[0].name === "Alex");
//         done();
//       });
//   });

    // it('Update one of the Jasons', async() => {
    //     const student = await Student.updateOne({name: 'Jason'}, {studentNumber: 3000})
    //     const res = await Student.find({})
    //     assert(res[0].studentNumber === 3000)
    //     console.log(res)
    // })

    // it('Update Jasons', async() => {
    //     const student = await Student.updateMany({name: 'Jason'}, {studentNumber: 3000})
    //     const res = await Student.find({})
    //     assert(res[0].studentNumber === 3000 && res[1].studentNumber === 3000)
    //     console.log(res)
    // })

    xit('Update grades', async () =>{
        const artCount = await Student.findOne({name: 'Jason'})
        const student = await Student.updateOne({name:'Jason'}, {$mul: {grade: artCount.articleCount }})
        const res = await Student.find({name: 'Jason'})
        assert(res[0].grade === 50)
        console.log(res)
    })
});
