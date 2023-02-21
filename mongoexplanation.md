```mermaid
sequenceDiagram
    participant Express as Express
    participant Mongoose as Mongoose
    participant MongoDB as MongoDB
    participant note as note
    participant app as app
    participant Browser as Browser

    Express->>app: Usa express
    Browser->>app: Faz requisição GET /api/notes
    app->>Mongoose: Conecta com o MongoDB
    Mongoose->>MongoDB: Conecta com o MongoDB
    MongoDB-->>Mongoose: Responde com sucesso
    Mongoose-->>app: Responde com sucesso
    app->>note: Faz consulta na coleção de notas
    note->>Mongoose: Retorna a coleção de notas
    Mongoose-->>app: Retorna a coleção de notas
    app->>Browser: Responde com a requisição GET /api/notes com a coleção de notas
    Browser->>app: Faz requisição POST /api/notes com os dados de uma nova nota
    app->>note: Cria uma nova nota
    note->>Mongoose: Salva a nova nota no banco de dados
    Mongoose-->>note: Retorna sucesso
    note-->>app: Retorna sucesso
    app->>Browser: Responde a requisição POST /api/notes com a nova nota
    Browser->>app: Faz requisição DELETE /api/notes/:id para deletar uma nota específica
    app->>note: Remove a nota especificada
    note->>Mongoose: Remove a nota do banco de dados
    Mongoose-->>note: Retorna sucesso
    note-->>app: Retorna sucesso
    app->>Browser: Responde a requisição DELETE /api/notes/:id com sucesso

```
