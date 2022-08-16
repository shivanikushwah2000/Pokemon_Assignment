import React from "react";
import { useState, useEffect } from "react";
import Card from "./Card";
import "./card.css";
import axios from "axios";
import Pagination from "./Pagination";
function PokemonList() {
  const [pokemonList, setPokemonList] = useState(null);
  const [page, setPage] = useState(1);

  const image =
    "https://assets.pokemon.com/static2/_ui/img/og-default-image.jpeg";
  useEffect(() => {
    axios
      .get("https://api.pokemontcg.io/v2/cards", {
        params: {
          page: page,
          pageSize: 10,
        },
      })
      .then((response) => {
        console.log("response", response?.data);
        setPokemonList(response?.data);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }, [page]);

  return (
    <>
      <div className="List">
        {pokemonList?.data?.map((item, i) => {
          return <Card key={i} name={item?.name} img={image} />;
        })}
      </div>
      <div className="pagination d-flex mt- 5">
        <Pagination
          pageSize={pokemonList?.pageSize}
          page={page}
          setPage={setPage}
          length={pokemonList?.totalCount}
        />
      </div>
    </>
  );
}

export default PokemonList;
