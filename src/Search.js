import React, {useState} from 'react';
import axios from 'axios';

export default function Search(props) {
    const [haku,setHaku]=useState("");
    
    function handleSubmit(e){
        if(!haku){
          props.Setpokemonit("Noresults");
        }else{
        let hakuLower=haku.toLowerCase();
        const url='https://pokeapi.co/api/v2/pokemon/'+hakuLower;
        axios.get(url)
        .then(response =>{
            props.Setpokemonit(response.data);

              props.Setpokemonitcolor(response.data.types[0].type.name);
          })
        .catch((error) => { 
          props.Setpokemonit("Noresults");
        });
        }
        e.preventDefault();
    }
    
  return (
    <>
      <div className="form-wrap">
      <form onSubmit={handleSubmit}>
          <input  autoComplete="off" placeholder="Pokemon's name" id='haku' type="text" value={haku} onChange={(e) => setHaku(e.target.value)}/>
        <input id='nappi' type="submit" value="Search For a Pokemon!"/>
      </form>
      </div>
    </>
  )
}
