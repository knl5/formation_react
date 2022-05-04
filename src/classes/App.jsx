import { Component } from 'react/cjs/react.development';


import PokemonList from './PokemonList';
import Trainer from './Trainer';
import Filters from './Filters';

import fetchPokemons from '../utils/fetchPokemon';


class App extends Component {
    constructor(){
        super();

        this.state = {
            selected: null,
            data: null,
            bag : [],
        };
        this.selectType = this.selectType.bind(this);
        this.catchAll = this.catchAll.bind(this);
        this.unCatch = this.unCatch.bind(this);

    }

    selectType(t) {

        this.setState({
            selected: this.state.selected === t ? null : t,
        })
    }

    catchAll(allInfos){

        const newPokemon = 
        {
            ...allInfos, trainedId : Date.now()
        }

        if (this.state.bag){
            this.setState({
                bag : [...this.state.bag, newPokemon]
            })
        }else{
            this.setState({
                bag : [newPokemon]
            })
        }
    }

    unCatch(id){
        this.setState({
            bag : this.state.bag.filter(pokemon => pokemon.trainedId !== id )
        })
    }

    async componentDidMount() {
        const data = await fetchPokemons();
    
        this.setState({ data: data });
        console.log('DATA', data);
    }


    render(){
        const { data, selected } = this.state;

        if (!data) {
            return <div>Loading...</div>;
          }
        

        const bag = this.state.bag ? this.state.bag : [];

        const deepTypes = data.map(p => p.types.map(t => t.type.name));
        const flatTypes = deepTypes.flat();
        const uniqueTypes = [...new Set(flatTypes)];

        const pokemonsToDisplay = selected
        ? data.filter(pokemon => 
            pokemon.types.find(t => t.type.name === selected),
        )
        : data;


        return(
            <div className='App'>
                <Trainer name='Knl' address='1 rue de Bordeaux, 33000' action={this.unCatch} bag={bag}/>
                <Filters types={uniqueTypes} selected={selected} filter={this.selectType} />
            <ul>
            
            <PokemonList pokemons={pokemonsToDisplay} action={this.catchAll}/>
            </ul>
            
            </div>
            
        );
    }
}


export default App;