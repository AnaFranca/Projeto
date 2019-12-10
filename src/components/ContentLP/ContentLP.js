import React from 'react';
import './ContentLP.scss';

function Content() {

  var textos = ['SEJA BEM VINDO AO VOLUNTAR.ME', 'VAMOS AJUDAR ALGUÉM HOJE?', 'ESTAMOS A SUA ESPERA S2', 'VOCÊ AINDA ESTÁ LENDO ISSO?', 'ENTÃO VOCÊ É UM VENCEDOR!'];

  function escrever(str, done) {
    var char = str.split('').reverse();
    var typer = setInterval(function() {
        if (!char.length) {
            clearInterval(typer);
            return setTimeout(done, 600); // só para esperar um bocadinho
        }
        var next = char.pop();
        
        var div = document.getElementById('log');
        console.log(div);
        div.innerHTML = div.innerHTML + next;
    }, 100);
}

function limpar(done) {
    var div = document.getElementById('log');
    var char = div.innerHTML;
    var nr = char.length;
    var typer = setInterval(function() {
        if (nr-- == 0) {
            clearInterval(typer);
            return done();
        }
        div.innerHTML = char.slice(0, nr);
    }, 100);
}

function rodape(conteudos, el) {
    var atual = -1;
    function prox(cb){
        if (atual < conteudos.length - 1) atual++;
        else atual = 0;
        var str = conteudos[atual];
        escrever(str, function(){
            limpar(prox);
        });
    }
    prox(prox);
}
rodape(textos);

  return (
    <content>
        <div className="fake-parallax">
          <h1 id='log'></h1>
        </div>

        <div ClasName="Box"> 
        </div>

    </content>  
  );
}



export default Content; 