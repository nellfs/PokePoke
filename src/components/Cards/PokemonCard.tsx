import { useTransition, animated } from 'react-spring';

import { IPokemon } from '../../types/Pokemons/types';
import pokeballBackground from '../../assets/img/pokeball_card_bg.png';

import {
  LeftSide,
  PokeballImage,
  PokemonCardStyle,
  PokemonContent,
  PokemonImage,
  PokemonName,
  PokemonNumber,
  PokemonType,
  PokemonTypeList,
  RightSide,
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
    if (pokemon.types[i].type.name != undefined)
      return <PokemonType key={i}>{pokemon.types[i].type.name}</PokemonType>;
  });

  return transition(
    (styles, item) =>
      item && (
        <animated.div style={styles}>
          <Link to={`${pokemon.id}`}>
            <PokemonCardStyle color_type={pokemon.types[0].type.name}>
              <PokemonName>{pokemon.name}</PokemonName>
              <PokemonContent>
                <LeftSide>
                  <PokemonTypeList>{renderTypes}</PokemonTypeList>
                </LeftSide>

                <RightSide>
                  <PokeballImage src={pokeballBackground}></PokeballImage>
                  <PokemonImage
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
                  ></PokemonImage>
                </RightSide>
              </PokemonContent>
              <PokemonNumber>
                #{pokemon.id < 10 ? '0' + pokemon.id : pokemon.id}
              </PokemonNumber>
            </PokemonCardStyle>
          </Link>
        </animated.div>
      )
  );
};

export default PokemonCard;
