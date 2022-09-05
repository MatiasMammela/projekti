import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Search(props) {
  const [haku, setHaku] = useState("");
  const [value, setValue] = useState("");

  function handleSubmit(e) {
    if (!haku) {
      props.Setpokemonit("Noresults");
    } else {
      let hakuLower = haku.toLowerCase();
      const url = 'https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0';
      axios.get(url).then(response => {
        let resultsLike = response.data.results;
        resultsLike.filter((val) => {
          if (val.name.includes(hakuLower)) {
            setValue(val.name);
            return null;
          }
        })
      })
        .catch((error) => {
          props.Setpokemonit("Noresults");
        });
    }
    e.preventDefault();
  }
  if (value) {
    const url2 = 'https://pokeapi.co/api/v2/pokemon/' + value;
    axios.get(url2).then(response2 => {
      props.Setpokemonit(response2.data);

      props.Setpokemonitcolor(response2.data.types[0].type.name);

    })

  }
  return (
    <>
      <div className="form-wrap">
        <form onSubmit={handleSubmit}>
          <input autoComplete="off" placeholder="Pokemon's name" id='haku' type="text" value={haku} onChange={(e) => setHaku(e.target.value)} />
          <input id='nappi' type="submit" value="Search For a Pokemon!" />
        </form>
      </div>
    </>
  )
}
