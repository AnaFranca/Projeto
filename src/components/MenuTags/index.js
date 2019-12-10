/* eslint-disable no-use-before-define */
import React from 'react';
import Chip from '@material-ui/core/Chip';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function MenuTags() {
  return (
    <Autocomplete
      multiple
      id="fixed-tags-demo"
      options={InfoTags}
      getOptionLabel={option => option.title}
      defaultValue={[InfoTags[6], InfoTags[13]]}
      renderTags={(value, getTagProps) =>
        value.map((option, index) => (
          <Chip disabled={index === 0} label={option.title} {...getTagProps({ index })} />
        ))
      }
      style={{ width: 500 }}
      renderInput={params => (
        <TextField
          {...params}
          label="Pesquisar por TAGS"
          variant="outlined"
          placeholder="Favorites"
          fullWidth
        />
      )}
    />
  );
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
