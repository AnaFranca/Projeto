import React from 'react';
import  {Switch, Route} from 'react-router-dom';
import TelaInicial from './Pages/TelaInicial';
import TelaPerfil from './Pages/TelaPerfil';
import TelaAcao from './Pages/TelaAcao';
import TelaAjudar from './Pages/TelaAjudar';

const Router = () => ( 
    <Switch>
        <Route exact path="/" component={TelaInicial}/>
        <Route path="/perfil" component={TelaPerfil}/>
        <Route path="/acao" component={TelaAcao}/>
        <Router path="/acoes" component={TelaAjudar}/>
    </Switch>
);

export default Router;