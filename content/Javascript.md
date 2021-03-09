# Javascript

> Operadores  

- .? [tmp]
- ? [tmp]
- && [tmp]

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