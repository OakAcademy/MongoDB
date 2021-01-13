const assert = require('assert')
const Student = require('../src/student')

describe('Virtual types', () => {
    it('article counts', done => {
        const jason = new Student({name: 'Jason', articles :[{title : 'First Title'}]})
        jason.save()
        .then(()=> Student.findOne({name: 'Jason'}))
        .then(student => {
            assert(student.articleCount === 1)
            done()
        })
    })
})