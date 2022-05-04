import React, { Component } from 'react';

import TrainedPokemon from './TrainedPokemon';

class Trainer extends Component {
  render() {
    const { name, address, bag, action } = this.props;

    const instances = bag.map(pokemon => (
      <TrainedPokemon
        name={pokemon.name}
        weight={pokemon.weight}
        src={pokemon.sprites.back_default}
        key={pokemon.trainedId}
        action = {()=>action(pokemon.trainedId)}
      />
    ));

    return (
      <div className='Trainer'>
        <div className='name'>{name}</div>
        <div className='address'>{address}</div>
        <ul className='bag'>{instances}</ul>
      </div>
    );
  }
}

export default Trainer;