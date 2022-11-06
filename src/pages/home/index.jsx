import { Container, Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import CardPokemon from "./../../components/card/index";
import SkeletonC from "./../../components/Skeleton/";

const Home = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = () => {
    /*       axios
        .get("https://pokeapi.co/api/v2/pokemon?limit=50")
        .then((res) => setPokemons(res.data.results))
        .catch((err) => console.log("Error:", err));
    }; */

    let endpoints = [];
    for (let i = 1; i <= 50; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }

    let response = axios
      .all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then((res) => setPokemons(res));
    return response;
  };

  const pokemonFilter = (name) => {
    const nameLowerCase = name.toLocaleLowerCase();

    let filteredPokemon = [];
    if (nameLowerCase === "") {
      getPokemons();
    }

    for (var i in pokemons) {
      if (pokemons[i].data.name.includes(nameLowerCase)) {
        filteredPokemon.push(pokemons[i]);
      }
    }

    setPokemons(filteredPokemon);
  };

  return (
    <div>
      <Navbar pokemonFilter={pokemonFilter} />
      <Container maxWidth="false">
        <Grid container spacing={3}>
          {pokemons.length === 0 ? (
            <SkeletonC />
          ) : (
            pokemons.map((pokemon, i) => (
              <Grid item key={pokemon.data.name} xs={12} sm={6} md={4} lg={2}>
                <CardPokemon
                  name={pokemon.data.name}
                  image={pokemon.data.sprites.front_default}
                  types={pokemon.data.types}
                />
              </Grid>
            ))
          )}
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
