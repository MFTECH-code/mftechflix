import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Pages/Home/App';
import CadastroVideo from './Pages/Cadastro/Video/index'
import CadastroCategoria from './Pages/Cadastro/Categoria/index'
import PageNotFound from './Pages/404/index'

import { BrowserRouter, Switch, Route } from 'react-router-dom'



// Desafio: Personalizar a Pagina 404 com um jogo


// Roteamento -> Usamos o BrowserRouter e dentro dele devemos ter o Switch
// O Switch vai fazer a verificação de qual rota queremos acessar
// Route -> São as nossas rotas que recebem um path que é o caminho e o component
// Se no path não tiver caminho será o nosso 404  
ReactDOM.render( 
  
  <BrowserRouter>
    <Switch>
    <Route path='/' component = {Home} exact />
    <Route path='/cadastro/video' component = {CadastroVideo} />
    <Route path='/cadastro/categoria' component = {CadastroCategoria} />
    <Route  component = {PageNotFound} />

    </Switch>

  </BrowserRouter>,


  document.getElementById('root')
);