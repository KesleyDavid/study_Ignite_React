# Typescript

> Descrição  

Conjunto de funcionalidades adicionadas a uma linguagem  
Javascript tem tipadem dinamica, podemos alterar o tipo no decorrer do código  

### Typescript
Adiciona tipagem estática
Sempre utilizado em desenvolvimento, em PRODUÇÃO, é compilado em javascript 
Não necessário tipar todas variaveis 

#### Types

- any  
  Qualquer valor
- never  
  Não utilizar
- ReactNode  
  Aceita qualquer valor valido do react  

#### Informations

- Adicionar tipos apenas das informações que será utilizada no componente, e não de toda a resposta da API

Exemplos:
  ```jsx
  // Javascript
  function showMessage(user) {
    return `Welcome ${user.name}, your e-mail is ${user.email}. Your city is ${user.city}`;
  }

  showMessage('teste');
  // Response Error 
  ```
  ```tsx
  // Typescript
  type User = {
    name: string,
    email: string,
    address: {
      city: string,
      state?: string, // campo opcional
    }
  }

  function showMessage(user: User) {
    return `Welcome ${user.name}, your e-mail is ${user.email}. Your city is ${user.city}`;
  }
  // Especificação pode ser usado em qualquer variavel
  // const user:User = {
  //   ...
  // }

  showMessage('teste');
  // Code Error CONSOLE
  // Response Error 

  showMessage({
    name: 'Kesley David',
    emali: 'test@email.com',
    address: {
      city: 'New York',
      state: 'NY',
    }
  });
  // Response Success
  ```
