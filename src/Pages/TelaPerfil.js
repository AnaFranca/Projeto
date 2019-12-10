import React from 'react';
import HeaderLogged from '../components/Header/HeaderLogged';
import Perfil from '../components/Perfil/Perfil';
import Footer from '../components/Footer/Footer';
import Footer2 from '../components/Footer2/Footer2';


function telaPerfil() {
  return (
    <div className="App">
       <HeaderLogged/>
       <Perfil/>
       <Footer2/>
    </div>
  );
}

export default telaPerfil;
