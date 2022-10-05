import { useTransition, animated } from 'react-spring';

import { IPokemon } from '../../types/Pokemons/types';
import pokeballBackground from '../../assets/img/pokeball_bg.png';

import {
  BottomBar,
  PokeballImage,
  PokemonCardStyle,
  PokemonContent,
  PokemonImage,
  PokemonName,
  PokemonNumber,
  PokemonType,
  PokemonTypeIcon,
  PokemonTypeList,
  TopBar,
} from './PokemonCard.style';
import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

const PokemonCard = (pokemon: IPokemon) => {
  const [isVisible, setVisible] = useState(false);
  const transition = useTransition(isVisible, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    delay: 200,
  });

  const changeVisible = useMemo(() => setVisible(true), [isVisible]);

  useEffect(() => {
    return () => {
      if (!isVisible) {
        changeVisible;
      }
    };
  }, [isVisible]);

  const renderTypes = pokemon.types.map((n, i) => {
    const pokemonTypeName = pokemon.types[i].type.name;
    if (pokemon.types[i].type.name != undefined)
      return (
        <PokemonType key={i} color_type={pokemon.types[i].type.name}>
          <PokemonTypeIcon
            src={`../../src/assets/img/poketypes/${pokemon.types[i].type.name}.svg`}
          />
          {pokemonTypeName[0].toUpperCase() + pokemonTypeName.substring(1)}
        </PokemonType>
      );
  });

  return transition(
    (styles, item) =>
      item && (
        <animated.div style={styles}>
          <Link to={`${pokemon.id}`} style={{ textDecoration: 'none' }}>
            <PokemonCardStyle>
              <TopBar>
                <PokemonName>{pokemon.name}</PokemonName>

                <PokemonNumber>
                  {pokemon.id < 10 ? '0' + pokemon.id : pokemon.id}
                </PokemonNumber>
              </TopBar>
              <PokemonContent>
                <PokeballImage src={pokeballBackground}></PokeballImage>
                <PokemonImage
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
                ></PokemonImage>
              </PokemonContent>
              <BottomBar>
                <PokemonTypeList>{renderTypes}</PokemonTypeList>
              </BottomBar>
            </PokemonCardStyle>
          </Link>
        </animated.div>
      )
  );
};

export default PokemonCard;
