import React from 'react';
import logo from '../../img/logo.png';
import './styles.scss';

function header() {
  return (
    <header>
      <a><img className="logo" src={logo}/></a>
      <input type="search" placeholder="Pesquisar..."/>
        <div className="separadorHeader">
            <a href="/"><span>Onde ajudar</span></a>
            <a href="/"><span>Cadastrar ajuda</span></a>
        </div>
      <p className="login">Login</p> 
    </header>
  );
}

export default header; 