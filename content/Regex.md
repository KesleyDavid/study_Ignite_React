# Regex
## Expressão Regular

> Exemplos  

- Verificar se termina com .jsx
  ```jsx
  isJavascript: /\.jsx$/
  // Expressão regular que retorna se é um arquivo javascript ou não
  // Verifica se termina com jsx
  // \ => antes do ponto -> o ponto indiga qualquer caracter, mas queremos o ponto (.)
  ```

- Verificar se termina com .jsx ou .tsx
  ```jsx
  isJavascript: /\.(j|t)sx$/
  // Expressão regular que retorna se é um arquivo javascript ou não
  // Verifica se termina com jsx ou tsx
  // (j|t) => "j" ou "t"
  // \ => antes do ponto -> o ponto indiga qualquer caracter, mas queremos o ponto (.)
  ```