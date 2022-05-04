import React, { Component } from 'react';

import Pokemon from './Pokemon';

class PokemonList extends Component {
  render() {
    const { pokemons, action } = this.props;

    const instances = pokemons.map(pokemon => (
      <Pokemon
        name={pokemon.name}
        weight={pokemon.weight}
        src={pokemon.sprites.back_default}
        key={pokemon.id}
        action={()=>action(pokemon)}
      />
    ));

    return <ul className='PokemonList list'>{instances}</ul>;
  }
}

export default PokemonList;