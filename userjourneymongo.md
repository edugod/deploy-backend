```mermaid
  journey
title Fluxo de usuário - Notas

section Início
    - O usuário acessa o aplicativo de notas
    - O aplicativo carrega a página inicial com a lista de notas existentes

section Adicionar nova nota
    - O usuário clica no botão "Nova Nota"
    - O aplicativo carrega a página de adição de nova nota
    - O usuário preenche o título e o conteúdo da nova nota
    - O usuário clica no botão "Salvar"
    - O aplicativo salva a nova nota no banco de dados
    - O aplicativo redireciona o usuário de volta para a página inicial com a lista de notas atualizada

section Visualizar nota
    - O usuário clica em uma nota existente na lista de notas
    - O aplicativo carrega a página de visualização da nota
    - O aplicativo exibe o título e o conteúdo da nota selecionada

section Editar nota
    - O usuário clica no botão "Editar" na página de visualização da nota
    - O aplicativo carrega a página de edição da nota
    - O usuário modifica o título e/ou o conteúdo da nota
    - O usuário clica no botão "Salvar"
    - O aplicativo atualiza a nota no banco de dados
    - O aplicativo redireciona o usuário de volta para a página de visualização da nota atualizada

section Excluir nota
    - O usuário clica no botão "Excluir" na página de visualização da nota
    - O aplicativo exibe uma mensagem de confirmação para o usuário
    - O usuário confirma a exclusão
    - O aplicativo remove a nota do banco de dados
    - O aplicativo redireciona o usuário de volta para a página inicial com a lista de notas atualizada

end journey
```
