const fs  = require ('fs')

const update = function (note , oldNote){
    const oNote = JSON.parse ( oldNote)
    const newNote =oNote.map(function (n,idx){
        if (n.id == note.id ){
          n.title = note.title 
          n.body = note.body 
        }
        return n 
    })
fs.writeFileSync('./note.txt', JSON.stringify(newNote))
}
module.exports = update