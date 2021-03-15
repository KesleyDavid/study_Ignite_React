# React

> Conceitos  

- State [tmp]
- Component [tmp]
- Component: Export Default <> Export 
  - **Export default**
    ```tsx
      // Quem define o nome do comonente NÃO é quem exporta, mas SIM quem IMPORTA
      
      // App.tsx
      function App() {
        return (
          <div className="App">
            <h1>Hello World</h1>
          </div>
        );
      }
      export default App;
      // Exportando apenas uma variavel

      // index.tsx
      import Batata from './App';
      render() => <Batata />;
    ```
  - **Export**  
    Aprimorada para o **auto-import** do editor
    ```tsx
      // App.tsx
      export function App() {
        return (
          <div className="App">
            <h1>Hello World</h1>
          </div>
        );
      }

      // index.tsx
      // [error] => quem está importando não pode definir nome
      import Batata from './App';
      render() => <Batata />;

      // [success] => nome definido
      import { App } from './App';
      render() => <App />;

      // [success] => nome definido, mas alterado
      import { App as Batata } from './App';
      render() => <Batata />;
    ```
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
- Create React App (yarn)  
  Toda configuração manual está no pacote **react-scripts**  
  ```bash
  yarn create react-app [name_app] --template typescript
  ```
  - package.json
      - Levar as dependencias de typescript, testes e tipos para **dev-dependencies**
      ```json
        "dependencies": {
          "@testing-library/jest-dom": "^5.11.4",
          "@testing-library/react": "^11.1.0",
          "@testing-library/user-event": "^12.1.10",
          "@types/jest": "^26.0.15",
          "@types/node": "^12.0.0",
          "@types/react": "^17.0.0",
          "@types/react-dom": "^17.0.0",
          "typescript": "^4.1.2",
          "react": "^17.0.1",
          "react-dom": "^17.0.1",
          "react-scripts": "4.0.3",
          "web-vitals": "^1.0.1"
        }
      ```
      to  
      ```json
        "dependencies": {
          "react": "^17.0.1",
          "react-dom": "^17.0.1",
          "react-scripts": "4.0.3",
          "web-vitals": "^1.0.1"
        },
        "devDependencies": {
          "@testing-library/jest-dom": "^5.11.4",
          "@testing-library/react": "^11.1.0",
          "@testing-library/user-event": "^12.1.10",
          "@types/jest": "^26.0.15",
          "@types/node": "^12.0.0",
          "@types/react": "^17.0.0",
          "@types/react-dom": "^17.0.0",
          "typescript": "^4.1.2"
        },
      ```
  - Script Eject  
    Se for necessário mudar algo nas configurações default do Creat React App  
    **NÃO** tem mais **Volta**  
    - Se executou, não conseguirá reverter futuramente  
    - Ele leva todas configurações do webpack para a raiz do projeto  


> Debug 

- React Developer tools
  - Components
  - Profile

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


> API Fake    

- Json Server
- MirajeJS