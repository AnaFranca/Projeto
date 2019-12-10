import React, { Component } from 'react';
import './Footer2.scss';

class Ola extends Component {
    render() {
        return (
        <div>
            <footer>
                <div className="col100 footer">
                    <div className="content">
                        <div className="col4">
                            <h3><b>Ações recentes</b></h3>
                            <p>Doutor Solidário</p>
                            <p className="clock">01 de novembo 2019</p>
                            <p>Movimento corpo e mente</p>
                            <p className="clock">01 de novembo 2019</p>
                        </div>
                        <div className="col4">
                            <h3><b>Tags</b></h3>
                            <p>Apps</p>
                            <p>Animais</p>
                            <p>Ong's</p>
                            <p>Limpeza</p>
                            <p>Saúde</p>
                            <p>Ensino</p>
                        </div>
                        <div className="col4">
                            <h3><b>Um pouco sobre nós</b></h3>
                            <p>
                                Esta plataforma foi feita para que você acesse ações de voluntariado, leia notícias sobre o
                                programa e interaja com outros voluntários. Além de se inscrever em ações promovidas por
                                instituições,
                                é possível publicar fotos e resultados das atividades de que você já participou.
                            </p>
                        </div>
                        <div className="col4">
                            <h3><b>Contatos</b></h3>
                            <p className="local">Uniamérica</p>
                            <p className="emailico">email@email.com</p>
                            <p className="telefoneico">4002-8922</p>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
        );
    }
}

export default Ola;
