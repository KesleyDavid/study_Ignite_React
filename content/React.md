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
  Informação compartilhada entre dois ou mais componentes  
  - Sempre passada de PAI para FILHO  
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
- Prop drilling  
  Quando uma propriedade é repassada entre varios componentes aninhados  
  Componente 1 => Componente 2 => Componente 3 => ...  
- Context (Contexto)  
  Compartilhamento de estado entre varios componentes, independente de onde estejam  
  ```jsx
    // TransactionsContext.ts
    import { createContext } from 'react';
    export const TransactionsContext = createContext([]); // Inicial

    // App.jsx
    <TransactionsContext.Provider value={[]}> // Atual
      <Header onOpenModalNewTransaction={handleOpenModalNewTransaction} />
      <Dashboard />
      <ModalNewTransaction 
        isOpen={isModalNewTransaction}
        onRequestClose={handleCloseModalNewTransaction} 
      />
      <GlobalStyle />
    </TransactionsContext.Provider>

    // Summary.jsx
    const data = useContext(TransactionsContext);
    console.log(data);
  ```
  // NEW  
  ```jsx
    // TransactionsContext.ts
    import { createContext, useEffect, useState, ReactNode } from 'react';
    import { api } from './services/api';

    interface Transaction {
      id: number;
      title: string;
      amount: number;
      type: string;
      category: string;
      createdAt: string;
    }

    interface TransactionsProviderProps {
      children: ReactNode, // Qualquer conteudo válido no react
    }

    export const TransactionsContext = createContext<Transaction[]>([]);

    export function TransactionsProvider({ children }: TransactionsProviderProps) {
      const [transactions, setTransactions] = useState<Transaction[]>([]);
      
      useEffect(() => {
        api.get('/transactions') // / => Opcional
          .then(response => setTransactions(response.data.transactions));
      }, []);

      return (
        <TransactionsContext.Provider value={transactions}>
          {children}
        </TransactionsContext.Provider>
      )
    }

    // App.jsx
    <TransactionsProvider>
      <Header onOpenModalNewTransaction={handleOpenModalNewTransaction} />
      <Dashboard />
      <ModalNewTransaction 
        isOpen={isModalNewTransaction}
        onRequestClose={handleCloseModalNewTransaction} 
      />
      <GlobalStyle />
    </TransactionsProvider>

    // Summary.jsx
    const data = useContext(TransactionsContext);
    console.log(data);
  ```
  Como o **context** está no App, todos os componentes FILHOS podem acessar as informações  

- 2 Principais maneiras de compartilhar estado entre componentes:  
  - 1: Repassando o estado para componente PAI e repassando para os FILHOS como propriedades  
  - 2: Utilizando conextos  

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

- Prevenir refresh em form após "submit"
  ```jsx
  function handleCreateNewTransaction(event: FormEvent) {
    // event do tipo FormEvent
    // Prevenir que após o submit faz refresh na pagina
    event.preventDefault();
  }
  ```

- **Intl** - Formatação de Preços
  ```jsx
  // Nativo dos navegadores
  <td className={transaction.type}>
    {new Intl.NumberFormat('pt-BR', {
      style: 'currency', // formato moeda
      currency: 'BRL', // moeda brasileira
    }).format(transaction.amount)}
  </td>
  ```

- **Intl** - Formatação de Datas
  ```jsx
  // Nativo dos navegadores
  <td>
    {new Intl.DateTimeFormat('pt-BR').format(
      new Date(transaction.createdAt)
    )}  
  </td>
  ```

> API Fake    

- Json Server
- MirajeJS