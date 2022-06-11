import  React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import AddNote from '../Pages/AddNote/AddNote';

function Rotas() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/Adicionar" component={AddNote} />
    </Switch>
  )
}

export default Rotas;