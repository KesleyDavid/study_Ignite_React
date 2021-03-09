const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src', 'index.jsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js','.jsx'],
  },
  module: {
    // Como os arquivos serão tratados pelo sistema
    rules: [
      {
        // Expressão regular que retorna se é um arquivo javascript ou não
        test: /\.jsx$/, // Verifica se termina com jsx
        // \ => antes do ponto -> o ponto indiga qualquer caracter, mas queremos o ponto (.)
        exclude: /node_modules/,
        use: 'babel-loader',
      }
    ]
  }
}