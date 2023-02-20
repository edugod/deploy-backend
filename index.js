const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());
app.use(cors());

const uri = 'mongodb+srv://edugod:292044@notes-backend.sszkjpe.mongodb.net/notes?retryWrites=true&w=majority';
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
});

const Note = mongoose.model('Note', noteSchema);

let notes = [
  {
    id: 1,
    content: "HTML is easy",
    important: true
  },
  {
    id: 2,
    content: "Browser can execute only JavaScript",
    important: false
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    important: true
  }
];

const generateId = () => {
    const maxId = notes.length > 0
    ? Math.max(...notes.map(n => n.id))
    : 0
    return maxId + 1
};

app.get('/', (request, response) => {
    console.log('até o primeiro get foi')
    response.send('<h1>Backend its been confusing</h1>');
});

app.get('/api/notes', (request, response) => {
  console.log('começou o get de visualização')
    Note.find({}).then(notes => {
      response.json(notes);
    });
  console.log('finalizou o get de visualização')
});

app.get('/api/notes/:id', (request, response) => {
    const id = Number(request.params.id);
    Note.findById(id).then(note => {
      if (note) {
        response.json(note);
      } else {
        response.status(404).end();
      }
    }).catch(error => {
      console.log(error);
      response.status(400).send({ error: 'Malformatted id' });
    });
});

app.post('/api/notes', (request, response) => {
    const body = request.body;

    if (!body.content) {
        return response.status(400).json({
            error: 'content missing'
        });
    }

    const note = new Note({
        content: body.content,
        important: body.important || false,
    });
    note.save().then(savedNote => {
      response.json(savedNote);
    });
});

app.delete('/api/notes/:id', (request , response) => {
    const id = Number(request.params.id);
    Note.findByIdAndRemove(id).then(() => {
      response.status(204).end();
    }).catch(error => {
      console.log(error);
      response.status(400).send({ error: 'Malformatted id' });
    });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server está rodando na porta ${PORT}`);
});
