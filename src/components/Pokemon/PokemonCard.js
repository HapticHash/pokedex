import React, { useEffect, useState } from "react";
import axios from "axios";

function PokemonCard({ key, name, imageUrl }) {
  const [imageurls, setImageUrls] = useState([]);
  const url = imageUrl;
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(url);
      setImageUrls(request.data.sprites);
      return request;
    }
    fetchData();
  }, [url]);

  return (
    <div className="col-md-3 col-sm-6 mb-5">
      <div class="card">
        <img src={imageurls.front_default} class="card-img-top" alt={key} />
        <h5 class="card-title">{name}</h5>
        <div class="card-body">desc.</div>
      </div>
    </div>
  );
}

export default PokemonCard;
