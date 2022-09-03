import React, {useState} from 'react';
export default function Pokemonit(props){




  const [isToggled,setIsToggled] = useState(false); 
let pokemoni=props.pokemoni;
let pokemonicolor=props.pokemonicolor;
if(pokemoni && pokemoni!=="Noresults"){
  return (
    <div className='pokemon-wrap'>
      <div className='pokemon-card'>

  
    <div className="hoverwrap">
    
    {isToggled ? <img onClick={() => setIsToggled(!isToggled)} id="back" width="200px" height="200px" src={pokemoni.sprites.back_default}></img> : <img onClick={() => setIsToggled(!isToggled)} id="front" width="200px" height="200px" src={pokemoni.sprites.front_default}></img>}
    
    
    </div> 
    <span id="pokemon-name">{pokemoni.name}</span><br></br>
    <div style={{backgroundColor: `var(--${pokemonicolor})`}} id="info" className="info">
    <h4>Types:</h4>
    {pokemoni.types.map(a => {
        return <div><li><span key={a.type.url}> {a.type.name}</span></li></div>
    })}
   <h4>Moves:</h4> 
   <div className='moves'>
    {pokemoni.moves.map(a => {
        return <div><li><span key={a.move.url}>{a.move.name}</span></li></div>
    })}
    </div>
    </div>
</div>
    </div>
  )
}else if(pokemoni==="Noresults"){
  return (
    <div className='pokemon-wrap'>
    <div className="hoverwrap">  
    <span id="noResults"><br></br>No Results 404!</span><br></br>
</div>
    </div>
  )
}


}
