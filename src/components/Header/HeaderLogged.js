import React from 'react';
import logo from '../../img/logo.png';
import { NavLink } from 'react-router-dom';
import './HeaderLogged.scss';

function headerlogged() {
  return (
    <header>
      <NavLink to="/"><img className="logo" src={logo}/></NavLink>
      <input type="search" placeholder="Pesquisar..."/>
        <div className="separadorHeader">
            <NavLink to="/acoes"><span>Onde ajudar</span></NavLink>
            <NavLink to=""><span>Cadastrar ajuda</span></NavLink>
        </div>
      <NavLink to="/perfil"><p className="login">Perfil</p></NavLink>
    </header>
  );
}

export default headerlogged;
