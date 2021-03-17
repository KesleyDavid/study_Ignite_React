# Javascript

> Operadores  

- .? [tmp]
- ? [tmp]
- && [tmp]
- ??

> Array  

- [1,2,3,false]
  ```jsx
  // Filtrar false/true
  [1,2,3,false].filter(Boolean)
  ```

- .forEach
  ```jsx
  // Percorre array mas NÃO retorna nenhum valor
  ['1','2','3'].forEach()
  ```

- .map
  ```jsx
  // Percorre array mas SIM retorna algum valor para cada valor
  ['1','2','3'].map( item => {
    return <Test key={unique} item={item} />
  })
  ```
  ```jsx
  ['1','2','3'].map( item => (
    <Test key={unique} item={item} />
  ))
  ```
  ```jsx
  ['1','2','3'].map( item => <Test key={unique} item={item} />)
  ```

- .filter
  ```jsx
  // Percorre array e retorna um array que recebe true na condição
  const filteredTasks = tasks.filter(task => task.id !== id);
  // Retornará array que o id da "task" for diferente do "id" informado 
  ```

- .reduce (somando valor)
  ```jsx
  // Percorre array  e calcular um total
  const totalDeposits = transactions.reduce((acc, transaction) => { //acc => acumulado
    if (transaction.type === 'deposit') {
      return acc + transaction.amount;
    }
    // SE não
    return acc;
  }, 0) // 0 => Valor inicial
  ```