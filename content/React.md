# React

> Conceitos  

- State [tmp]
- Component [tmp]
- Propriedades [tmp]
- Imutabilidade  
  Uma variavel nunca pode ter seu valor alterado  
  Sempre irá receber um novo valor
  ```jsx
    // Simples
    // Alterando uma informação na memória (mutação no valor original)
    usuarios = ['kesley','david'];
    usuarios.push('ferreira');

    // Imutabilidade
    // Programação Funcional
    // Sempre se cria um novo espaço na memória com novo conteudo
    usuarios = [...usuarios, 'ferreira'];
  ```

> Novo Projeto  

- Criar package.json
  ```bash
  yarn init -y
  ```

> React Hooks

- useState [tmp]
- useEffect
  Dispara uma função quando algo acontecer em nossa aplicação
  Ex.: Variavel mudou 
  ```jsx
  // Executa sempre que a variavel "repositories" for alterada
  useEffect(() => {
    console.log(repositories);
  }, [repositories]);
  ```
  ```jsx
  // Executa na inicialização do sistema uma única vez quando comonente é exibido em tela
  useEffect(() => {
    console.log(repositories);
  }, []);
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
  
> Javascript  

- .? [tmp]
- ? [tmp]
- && [tmp]

> Array  

- [1,2,3,false]
  ```jsx
  // Filtrar false/true
  [1,2,3,false].filter(Boolean)
  ```