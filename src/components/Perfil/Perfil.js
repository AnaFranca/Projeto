import React from 'react';
import './Perfil.scss';
import { NavLink } from 'react-router-dom';
import profile from '../../img/profile.png';
import um from '../../img/um.png';
import dois from '../../img/dois.jpg';
import tres from '../../img/tres.jpg';
import quatro from '../../img/quatro.jpg';
import flag from '../../img/flag.png';
import rating8 from '../../img/rating8.png';
import shield from '../../img/shield.png';
import goldmedal from '../../img/goldmedal.png';
import stars from '../../img/stars.png';
import trophy from '../../img/trophy.png';
import badge from '../../img/badge.png';
import crown from '../../img/crown.png';
import aa from '../../img/aa.png';
import be from '../../img/be.jpg';
import ce from '../../img/ce.jpg';
import de from '../../img/de.jpg';
import ee from '../../img/ee.jpg';
import fe from '../../img/fe.jpg';
import ge from '../../img/ge.jpg';
import he from '../../img/he.jpg';



function mudaClass1() {
        document.getElementById("id1").style.display = "block";
        document.getElementById("id2").style.display = "none";
        document.getElementById("id3").style.display = "none";
}

function mudaClass2() {
        document.getElementById("id2").style.display = "flex";
        document.getElementById("id1").style.display = "none";
        document.getElementById("id3").style.display = "none";
}

function mudaClass3() {
        document.getElementById("id3").style.display = "flex";
        document.getElementById("id1").style.display = "none";
        document.getElementById("id2").style.display = "none";
}

function content() {
    return (
        <content>
            <img className="avatar" src={profile} alt=""/>

            <div className="xpBar">
                <div className="bar"><span>21</span></div>
            </div>

            <div className="bio">
                <span>João Pedro Felício</span>
                <div className="linha"></div>
                <p>Lorem ipsum dolor sit amet, con sectetur adipiscing elit. Vivamus interdum auctor blandit. Etiam tincidunt sapien. Nulla id auctor magna. Ut vel magna eu diam sagittis aliquam. In rhoncus dis tristique.</p>
            </div>

            
            <ul className="catego">
                <li onClick={mudaClass1}><i className="fa fa-home" aria-hidden="true"></i>   Home</li>
                <li onClick={mudaClass2}><i className="fa fa-trophy" aria-hidden="true"></i>   Conquistas</li>
                <li onClick={mudaClass3}><i className="fa fa-users" aria-hidden="true"></i>   Amigos</li>
            </ul>


            <div id="bigContent">
                
                <div id="id1" className="tipo1">
                    <div className="posts">
                        <NavLink to="/acao"><img src={um}/></NavLink><h1>Campanha do agasalho - 2019<br/><span>2 dias atrás -<span className="feito"> COMPLETO</span></span></h1><p>Proin leo elit, eleifend eu tincidunt vel, ornare a augue. Mauris ultricies imperdiet lacus et euismod. Suspendisse rutrum urna vel nunc posuere, quis hendrerit sapien sagittis. Nunc aliquet vestibulum mi. </p>
                        <div className="linha"></div>
                        <a href="#"><img src={dois}/></a><h1>Auxílio infantil<br/><span>3 dias atrás -<span className="feito"> COMPLETO</span></span></h1><p>Suspendisse ultricies libero vitae nulla elementum, ut molestie orci pharetra. Maecenas feugiat nisi eget varius tincidunt. Vestibulum commodo lacinia neque non bibendum.</p>
                        <div className="linha"></div>
                        <a href="#"><img src={tres}/></a><h1>Coleta de doações<br/><span>04/11 -<span className="naoFeito"> AUSENTE</span></span></h1><p>Etiam quis turpis tellus. Pellentesque cursus turpis lacus, ac euismod arcu ullamcorper non. Cras nec rhoncus massa. Maecenas feugiat nisi eget varius tincidunt. Mauris ultricies imperdiet lacus et euismod.</p>
                        <div className="linha"></div>
                        <a href="#"><img src={quatro}/></a><h1>Plantação de árvores na praça<br/><span>31/10 -<span className="feito"> COMPLETO</span></span></h1><p>Proin leo elit, eleifend eu tincidunt vel, ornare a augue. Mauris ultricies imperdiet lacus et euismod. Suspendisse rutrum urna vel nunc posuere, quis hendrerit sapien sagittis. Nunc aliquet vestibulum mi.</p>
                        <div className="linha"></div>
                        <a href="#"><img src={dois}/></a><h1>Auxílio infantil<br/><span>3 dias atrás -<span className="feito"> COMPLETO</span></span></h1><p>Suspendisse ultricies libero vitae nulla elementum, ut molestie orci pharetra. Maecenas feugiat nisi eget varius tincidunt. Vestibulum commodo lacinia neque non bibendum.</p>
                        <div className="linha"></div>
                        <a href="#"><img src={tres}/></a><h1>Coleta de doações<br/><span>04/11 -<span className="naoFeito"> AUSENTE</span></span></h1><p>Etiam quis turpis tellus. Pellentesque cursus turpis lacus, ac euismod arcu ullamcorper non. Cras nec rhoncus massa. Maecenas feugiat nisi eget varius tincidunt. Mauris ultricies imperdiet lacus et euismod.</p>
                    </div>
                </div>

                <div id="id2" className="tipo2">
                    <div>
                        <img src={flag}/>
                        <p>Bandeira</p>
                    </div>
                    <div>
                        <img src={rating8}/>
                        <p>Nível 3</p>
                    </div>
                    <div>
                        <img src={shield}/>
                        <p>Escudo</p>
                    </div>
                    <div>
                        <img src={goldmedal}/>
                        <p>Primeiro</p>
                    </div>
                    <div>
                        <img src={stars}/>
                        <p>Estrela</p>
                    </div>
                    <div>
                        <img src={trophy}/>
                        <p>Troféu</p>
                    </div>
                    <div>
                        <img src={badge}/>
                        <p>Presente</p>
                    </div>
                    <div>
                        <img src={crown}/>
                        <p>Coroa</p>
                    </div>
                </div>

                <div id="id3" className="tipo3">
                    <div>
                        <img src={ge}/>
                        <p>João</p>
                    </div>
                    <div>
                        <img src={be}/>
                        <p>Pamela</p>
                    </div>
                    <div>
                        <img src={ce}/>
                        <p>Pedro</p>
                    </div>
                    <div>
                        <img src={de}/>
                        <p>Victória</p>
                    </div>
                    <div>
                        <img src={ee}/>
                        <p>Vitor</p>
                    </div>
                    <div>
                        <img src={aa}/>
                        <p>Florípedes</p>
                    </div>
                    <div>
                        <img src={fe}/>
                        <p>Euflorinda</p>
                    </div>
                    <div>
                        <img src={he}/>
                        <p>Coroa</p>
                    </div>
                </div>

            </div>
    </content>
    );

}

export default content;
