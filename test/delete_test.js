const assert = require("assert");
const Student = require("../src/student")

describe('Delete the records', () => {
    let jason;
    let rosa

    beforeEach((done) =>{
        jason = new Student({name: 'Jason'})
        rosa = new Student({name : 'Rosa'})
        rosa.save()
        jason.save()
        .then(() => done())
    })

    it('delete by id', done =>{
        Student.findByIdAndDelete(jason._id)
        .then(() => Student.findOne({name: 'Jason'}))
        .then((student) => {
            assert(student === null)
            done()
        })
    })

    it('delete by name', done =>{
        Student.findOneAndDelete({name: 'Jason'})
        .then(() => Student.findOne({_id : jason._id}))
        .then((student) => {
            assert(student === null)
            done()
        })
    })

    it('delete Jason', done =>{
        Student.deleteOne({_id : jason._id})
        .then(() => Student.findOne({name: 'Jason'}))
        .then((student) => {
            assert(student === null)
            done()
        })
    })
})