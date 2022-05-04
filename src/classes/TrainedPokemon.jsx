import React, { Component } from 'react';

class TrainedPokemon extends Component {
  constructor() {
    super();

    this.state = {
      exp: 0,
      idInterval: null,
    };

    this.grow = this.grow.bind(this);
  }

  grow() {
    this.setState({
      exp: this.state.exp + 1,
    });
  }

  componentDidMount() {
    const idInterval = setInterval(
        ()=>{
            this.setState({
                exp : this.state.exp + 15
            })
        }, 1000
    );
    this.setState({
        idInterval
    })
}

componentWillUnmount() {
    clearInterval(this.state.idInterval);
}

  render() {
    const { exp } = this.state;
    const { name, weight, src, action } = this.props;

    return (
      <li className='TrainedPokemon' onClick={action} /* onMouseMove={this.grow} */>
        <div className='name'>{name}</div>
        <div className='weight'>{weight}</div>
        <div className='exp'>{exp}</div>
        {src && <img src={src} alt={name} />}
      </li>
    );
  }
}

export default TrainedPokemon;