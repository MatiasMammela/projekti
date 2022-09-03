import React, {useState} from 'react';
import Search from './Search';


import Pokemonit from './pokemonit';

function App() {
  const [pokemoni,Setpokemonit]= useState(null);
  const [pokemonicolor,Setpokemonitcolor]= useState(null);
  return (
    <>
    <Search Setpokemonit={Setpokemonit} Setpokemonitcolor={Setpokemonitcolor}/>
     <Pokemonit pokemoni={pokemoni} pokemonicolor={pokemonicolor}/>
    </>
    
  )
}

export default App;
