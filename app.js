const write = require ('./write')
const read = require ('./read')
const add = require ('./add')
const present = require ('./present')
const del = require ('./del')
const update = require ('./update')
const data = process.argv

var note = {}
 
if (data[2] == 'add'){
    // build object
    note = {
        id: data[3],
        title: data[4],
        body: data[5],
    }
    var oldNote = read ()
    add (note , oldNote)
    present (read())
}

if  (data[2] == 'read'){

    present (read())
}

if (data [2] ==='delete'){
    let note = data [3]
    let oldNote= read()

    del (note, oldNote)

    console.log (read())

}
if (data [2]=== 'update'){
    note = {
        id:data [3],
        title:data [4],
        body:data [5],

    }
    let oldNote= read()
    update (note, oldNote)
    
    present (read())
}