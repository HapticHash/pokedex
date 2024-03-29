import React, { useEffect, useState } from "react";
import axios from "axios";
import "./PokemonCard.css";

function PokemonCard({ name, imageUrl }) {
  const [id, setId] = useState([]);
  const [type, setType] = useState([]);
  const [abilities, setAbilities] = useState([]);
  const [imageurls, setImageUrls] = useState([]);
  const [weight, setWeight] = useState([]);
  const [height, setHeight] = useState([]);
  const [baseExp, setBaseExp] = useState([]);

  const url = imageUrl;
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(url);
      setId(String(request.data.id).padStart(3, "0"));

      setType(request.data.types);
      setAbilities(request.data.abilities);

      setImageUrls(request.data.sprites.other.dream_world.front_default);
      // setImageUrls(request.data.sprites.versions["generation-v"]["black-white"].animated["front_default"]);
      setBaseExp(request.data.base_experience);
      setHeight(request.data.height);
      setWeight(request.data.weight);

      return request;
    }
    fetchData();
  }, [url]);

  return (
    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-5">
      <div className="card">
        <div className="group">
          <img className="images" src={imageurls} alt={name} />
          <div className="id"> #{id} </div>
        </div>

        <div className="details">
          <h5 className="card-title">{name}</h5>
          <div className="card-desc">
            <div className="pokemon__type">
              {type.map((type) => (
                <div className={type.type.name} id="type">
                  {type.type.name}
                </div>
              ))}
            </div>
            <div className="pokemon__abilities">
              {abilities.map((abilities) => (
                <div className="ability">{abilities.ability.name}</div>
              ))}
            </div>
            <div className="pokemon__body">
              <div className="height"> {(height / 10).toFixed(1)} m </div>
              <div className="weight"> {weight / 10} kg </div>
              <div className="base_exp"> {baseExp} exp </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonCard;
