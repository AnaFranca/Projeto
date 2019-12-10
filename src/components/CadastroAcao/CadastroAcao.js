import React, { Component } from 'react';import Chip from '@material-ui/core/Chip';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import './CadastroAcao.scss';
import { NavLink } from 'react-router-dom';

class CadastroAcao extends Component {
    render() {
        return (
            <div className="teste">

                

                <form action="">

                <h1 className="hDivisor">Cadastre sua ação!</h1>

                    <label>Nome da ação: <br/><input type="text" name="nome" placeholder="Nome da ação!"/></label><br/>

                    <label> Descrição: <br/><textarea name="message" rows="10" cols="30" placeholder="Digite sua descrição aqui!">
                    </textarea></label><br/>

                    <h1 className="hDivisor">Onde será?</h1>
                   

                    <label>Local: <br/>4<input type="text"name="local" placeholder=""/></label><br/>

                    <label>Data: <br/><input type="text"name="Data" placeholder=""/></label><br/>

                    <h1 className="hDivisor">Categorias e fotos!</h1>
                    

                    <Autocomplete
                        multiple
                        id="fixed-tags-demo"
                        options={InfoTags}
                        getOptionLabel={option => option.title}
                        renderTags={(value, getTagProps) =>
                            value.map((option, index) => (
                            <Chip disabled={index === 0} label={option.title} {...getTagProps({ index })} />
                            ))
                        }
                        style={{ width: 600 }}
                        renderInput={params => (
                            <TextField
                            {...params}
                            label="Escolher TAGS"
                            variant="outlined"
                            placeholder=""
                            fullWidth
                            />
                          )}
                        /><br/>

                    <button className="fotoUpload">Adicionar foto</button>
                   
                
                    <NavLink to="/acao"><input type="submit" value="Confirmar"/></NavLink>
                </form>
            </div>
        );
    }
}
const InfoTags = [
    { title: 'Crianças'},
    { title: 'Humanidade'},
    { title: 'Ao vivo'},
    { title: 'Em casa'},
    { title: 'Aula'},
    { title: 'Escola'}, 
    { title: "Animais"},
    { title: 'Caravana'},
    { title: 'Empresa'},
    { title: 'Evento'},
    { title: 'Eletronico'},
    { title: 'Manutenção' },
    { title: 'Marido de Aluguel' },
    { title: 'Serviço publico' },
];

export default CadastroAcao;