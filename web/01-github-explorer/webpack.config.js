const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
  devServer: {
    contentBase: path.resolve(__dirname, 'public')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html')
    })
  ],
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