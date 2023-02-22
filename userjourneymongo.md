```mermaid
journey
    title Fluxo do usuário utilizando aplicativo de notas

    section Criar nota
        Usuario->>Aplicativo de notas: Acessa o aplicativo
        Aplicativo de notas->>Usuario: Exibe a tela inicial do aplicativo
        Usuario->>Aplicativo de notas: Clica no botão "Nova nota"
        Aplicativo de notas->>Usuario: Exibe o formulário para criar uma nova nota
        Usuario->>Aplicativo de notas: Preenche os campos do formulário
        Usuario->>Aplicativo de notas: Clica no botão "Salvar"
        Aplicativo de notas->>Usuario: Exibe uma mensagem de confirmação da criação da nota

    section Visualizar notas
        Usuario->>Aplicativo de notas: Acessa o aplicativo
        Aplicativo de notas->>Usuario: Exibe a tela inicial do aplicativo com a lista de notas criadas
        Usuario->>Aplicativo de notas: Seleciona uma nota da lista
        Aplicativo de notas->>Usuario: Exibe a nota selecionada com seus detalhes

    section Editar nota
        Usuario->>Aplicativo de notas: Acessa o aplicativo
        Aplicativo de notas->>Usuario: Exibe a tela inicial do aplicativo com a lista de notas criadas
        Usuario->>Aplicativo de notas: Seleciona uma nota da lista
        Aplicativo de notas->>Usuario: Exibe a nota selecionada com seus detalhes
        Usuario->>Aplicativo de notas: Clica no botão "Editar"
        Aplicativo de notas->>Usuario: Exibe o formulário para editar a nota
        Usuario->>Aplicativo de notas: Edita os campos do formulário
        Usuario->>Aplicativo de notas: Clica no botão "Salvar"
        Aplicativo de notas->>Usuario: Exibe uma mensagem de confirmação da edição da nota

    section Deletar nota
        Usuario->>Aplicativo de notas: Acessa o aplicativo
        Aplicativo de notas->>Usuario: Exibe a tela inicial do aplicativo com a lista de notas criadas
        Usuario->>Aplicativo de notas: Seleciona uma nota da lista
        Aplicativo de notas->>Usuario: Exibe a nota selecionada com seus detalhes
        Usuario->>Aplicativo de notas: Clica no botão "Deletar"
        Aplicativo de notas->>Usuario: Exibe uma mensagem de confirmação da exclusão da nota
        Usuario->>Aplicativo de notas: Clica no botão "Sim" para confirmar
        Aplicativo de notas->>Usuario: Exibe uma mensagem de confirmação da exclusão da nota
end journey
```
