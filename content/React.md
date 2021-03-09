# React

> Novo Projeto  

- Criar package.json
  ```bash
  yarn init -y
  ```

> Recursos  

- Diretórios
  ```jsx
  const path = require('path');

  module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.jsx'),
    // path.resolve(__dirname, 'asdf') => Diretório raiz do sistema
    // Similar => ./src/index.jsx
  }
  ```