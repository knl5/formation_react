import React, { Component } from 'react';

class Pokemon extends Component {
  /* constructor() {
    super();

    this.displayName = this.displayName.bind(this);
  } */

  /* displayName() {
    console.log('Je suis', this.props.name);
  } */

  render() {
    const { name, weight, src, action } = this.props;

    /* function displayName() {
      console.log('Je suis', name);
    } */

    return (
      <li className='Pokemon' onClick={action}>
        <div className='name'>{name}</div>
        <div className='weight'>{weight}</div>
        {src && <img src={src} alt={name} />}
      </li>
    );
  }
}

export default Pokemon;
