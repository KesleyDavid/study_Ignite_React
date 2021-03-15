# CSS

> REM  

- 1rem  
  Tamanho da font-size da página

> Fonts

- Google Font  
  - https://fonts.google.com/  
  - Copy **LINK**
  - Insert index.html
    ```html
      <head>
        <!-- SEMPRE no INICIO -->
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <!--  -->
        <link rel="icon" href="%PUBLIC_URL%/favicon.png" type="image/png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">
        <title>Title App</title>
      </head>
    ```

> Styled-components  

- Strong  
  Por padrão vem com display inline, e margin-top não funciona  

> Styled-components  

- Filter  
  ```scss
    div {
      // ...css

      // Efeito de Transição
      transition: filter 0.2s;

      button {
        color: #FFFFFF;
        background: var(--blue-light);

        &:hover {
          // Diferentes filtros no css

          // Blur (borrado)
          filter: blur(5px);
          // Escuresse um pouco
          filter: brightness(0.9);
        }
      }
    };
  ```

