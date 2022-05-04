import React, { Component } from 'react';

class Filters extends Component {
  render() {
    /* const { filter } = this.props; */
    const { types, filter, selected } = this.props;
    
    console.log('types', types);

    const buttons = types.map(type => <button 
      className={selected === type ? 'active' : ''} 
      key={types} 
      onClick={() => filter(type)}>{type}
      </button>);

    return <ul className='Filters'>{buttons}</ul>;
    
  }
}

export default Filters;