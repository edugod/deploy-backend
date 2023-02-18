const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

app.use(express.static('build'))


const mongoose = require('mongoose')
const password = process.argv[2];
const url = `mongodb+srv://edugod:${password}@notes-backend.sszkjpe.mongodb.net/Notes?retryWrites=true&w=majority`;

mongoose.set('strictQuery',false)
mongoose.connect(url)

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
})  //isso é para não add a propriedade __v

const Note = mongoose.model('Note', noteSchema)

let notes = [
  {
    id: 1,
    content: "Para eu ter certeza de que isso foi no backend",
    important: true
  },
  {
    id: 2,
    content: "ÚLTIMA CONFIRMAÇÃO ANTES DE DORMIR",
    important: false
  },
  {
    id: 3,
    content: "tendo certeza novamente",
    important: true
  }
]

const generateId = () => {
    const maxId = notes.length > 0
    ? Math.max(...notes.map(n => n.id))
    : 0
    return maxId + 1
}

app.get('/', (request, response) => {
    response.send('<h1>Backend its been confusing</h1>')
})

app.get('/api/notes', (request, response) => {
    Note.find({}).then(notes => {
      response.json(notes)
    })
  })
  

app.get('/api/notes/:id', (request, response) => {
    const id = Number(request.params.id)
    const note = notes.find(note => note.id === id)
    
    if (note) {
        response.json(note)
    } else {
        response.status(404).end()
    }
})

app.post('/api/notes', (request, response) => {
    const body = request.body

    if (!body.content) {
        return response.status(400).json({
            error: 'content missing'
        })
    }

    const note = {
        content: body.content,
        important: body.important || false,
        date: new Date(),
        id: generateId(),
    }
    notes = notes.concat(note)

    response.json(note)
  })


app.delete('/api/notes/:id', (request , response) => {
    const id = Number(request.params.id)
    notes = notes.filter(note => note.id !== id)

    response.status(204).end()
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server está rodando na porta ${PORT}`)
})
