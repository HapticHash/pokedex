import React, { useEffect, useState } from "react";
import axios from "axios";
import "./PokemonCard.css";

function PokemonCard({ key, name, imageUrl }) {
  const [imageurls, setImageUrls] = useState([]);
  const [weight, setWeight] = useState([]);
  const [height, setHeight] = useState([]);
  const [baseExp, setBaseExp] = useState([]);

  const url = imageUrl;
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(url);
      setImageUrls(request.data.sprites.other.dream_world.front_default);
      setBaseExp(request.data.base_experience);
      setHeight(request.data.height);
      setWeight(request.data.weight);
      // setMoves(request.data.moves);

      console.log(">>>", request.data.sprites.versions);
      // black-white.animated.front_default
      return request;
    }
    fetchData();
  }, [url]);

  return (
    <div className="col-md-3 col-sm-6 mb-5">
      <div className="card">
        <img className="images" src={imageurls} alt={key} />
        <h5 className="card-title">{name}</h5>
        <div className="card-body">
          <div className="base_exp"> {baseExp} exp </div>
          <div className="height"> {height} in </div>
          <div className="weight"> {weight} lbs </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonCard;
