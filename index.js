const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(cors())
app.use(bodyParser.json())
app.use(express.static('build'))

const generateId = () => {
    const maxId = notes.length > 0 ? notes.map(n => n.id).sort().reverse()[0] : 1
    return maxId + 1
}

let notes = [
    {
        id: 1,
        title: 'My first note :p',
        author: 'Santtu',
        content: 'Woo check it out babe it\'s my first note',
        date: new Date(),
        important: true
    }
]

// get notes
app.get('/notes', (request, response) => {
    response.json(notes)
})

// get note
app.get('/notes/:id', (request, response) => {
    const id = Number(request.params.id)
    const note = notes.find(note => note.id === id)
    
    if (note) {
        response.json(note)
    } else {
        response.status(404).end()
    }
})

// add note
app.post('/notes', (request, response) => {
    const body = request.body

    if (body.content === undefined) {
        return response.status(400).json({ error: 'content missing' })
    }

    const note = {
        title: body.title,
        author: body.author,
        content: body.content,
        important: body.important || false,
        date: new Date(),
        id: generateId()
    }

    notes = notes.concat(note)


    response.json(note)
})

// delete note
app.delete('/notes/:id', (request, response) => {
    const id = Number(request.params.id)
    notes = notes.filter(note => note.id !== id)

    response.status(204).end()
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})