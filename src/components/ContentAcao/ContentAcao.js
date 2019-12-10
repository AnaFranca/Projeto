import React, { Component } from 'react';
import './ContentAcao.scss';
import placeLocalizer from './imgAcao/placeLocalizer.png'
import photoCamera from './imgAcao/photoCamera.png'
import results from './imgAcao/results.png'
import dropUpArrow from './imgAcao/dropUpArrow.png'
import one from './imgAcao/one.jpg'

class ContentAcao extends Component {
    render() {
        return (
        <div>
            <div className="col-100">
                <div className="content texto-destaque">
                    <h1>Você pode Me Escutar?</h1>
                    <p>Gostaríamos de oferecer atendimento psicológico para a nossa comunidade. Seria uma forma de dar acesso a
                    </p>
                    <p> serviço que não está ao seu alcance. Procuramos psicólogo voluntário para prestar </p>
                    <p>atendimento terapêutico e desenvolver atividades e dinâmicas que possam</p>
                    <p>trabalhar os sentimentos coletivos dos atendidos.</p>
        
                    <div className="col-3 bloco-texto">
                        <img src={placeLocalizer} />
                        <h3>LOCAL/DATA</h3>
                        <p>Data inicial: 15/11/2019</p>
                        <p>Data final: 22/01/2020</p>
                        <p>Local:<a
                                href="https://www.google.com.br/maps/place/UniAm%C3%A9rica+-+Centro+Universit%C3%A1rio/@-25.5533433,-54.5719674,17z/data=!3m1!4b1!4m5!3m4!1s0x94f69afc71e870fd:0x623f0025b8943e6f!8m2!3d-25.5533482!4d-54.5697787">
                                Uniamérica</a></p>
                    </div>

                    <div className="col-3 bloco-texto" style={{marginTop: "8em"}}>
                        <img src={photoCamera} />
                        <h3>FOTOS</h3>
                        <p>Fotos e comentários</p>
                    </div>

                    <div className="col-3 bloco-texto">
                        <img src={results} />
                        <h3>RESULTADO</h3>
                        <p>Total de voluntários: </p>
                        <p>Total de beneficiados: </p>
                    </div>
                </div>
            </div>
        
            <div className="col-100 bloco-imagens-texto">
                <img src={dropUpArrow} />
                <div className="content" style={{marginLeft: "24%", float: "left"}}>

                    <div className="col-3 bloco-texto bloco-imagem">
                        <img src={one}/>
                        <p><b>Leticia</b></p>
                        <p>Exelente!!
                            tô dentro desse projeto
                            Sou psicológa a 3 anos e amei fazer parte
                            parabéns a organização
                            show!!
                        </p>
                    </div>

                    <div className="col-3 bloco-texto bloco-imagem">
                        <img src={one}/>
                        <p><b>Ana</b></p>
                        <p>Exelente!!
                            tô dentro desse projeto
                            Sou psicológa a 3 anos e amei fazer parte
                            parabéns a organização
                            show!!
                        </p>
                    </div>

                </div>

                <div className="content" style={{marginLeft: "24%", float: "left", paddingBottom: "15px", marginTop: "-30px"}}>

                    <div className="col-3 bloco-texto bloco-imagem">
                        <img src={one}/>
                        <p><b>Fernanda</b></p>
                        <p>Exelente!!
                            tô dentro desse projeto
                            Sou psicológa a 3 anos e amei fazer parte
                            parabéns a organização
                            show!!
                        </p>
                    </div>

                    <div className="col-3 bloco-texto bloco-imagem">
                        <img src={one}/>
                        <p><b>Laura</b></p>
                        <p>Exelente!!
                            tô dentro desse projeto
                            Sou psicológa a 3 anos e amei fazer parte
                            parabéns a organização
                            show!!
                        </p>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default ContentAcao;