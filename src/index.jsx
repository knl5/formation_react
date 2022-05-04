import React from 'react';
import ReactDOM from 'react-dom';

import data from './_data/pokemon.json';

import App from './classes/App';

import './reset.css';
import './index.css';

ReactDOM.render(<App data={data} />, document.getElementById('root'));
/* ReactDOM.render(pokemon, document.getElementById('root')); */
