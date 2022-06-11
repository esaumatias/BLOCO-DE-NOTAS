import  React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import AddNote from '../Pages/AddNote/AddNote';
import UpdateNote from '../Pages/UpdateNote/UpdateNote';

function Rotas() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/Adicionar" component={AddNote} />
      <Route exact path="/Editar" component={UpdateNote} />
    </Switch>
  )
}

export default Rotas;