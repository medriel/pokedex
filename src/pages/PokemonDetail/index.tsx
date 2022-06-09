import React, { useEffect, useState } from 'react';
import { Alert, TouchableWithoutFeedback } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { PokemonCardBig } from '../../components/PokemonCardBig';
import { TabBar } from '../../components/TabBar';
import { pokemonApi } from '../../services/pokemonApi';

import { Container, Header, Content, PokemonInfo, PokemonNameText, PokemonNumberText, PokemonInfoType, PokemonTypeContent, PokemonTypeNameText, PokemonInfoImage, Footer, BackButton } from './styles';

export interface AboutPokemonDetailProps {
  specie: string
  size: string
  skills: string
  weight: string
}

export interface PokemonDetailProps {
  name: string
  number: string
  types: string[]
  imageURL: string
  about: AboutPokemonDetailProps
}

export function PokemonDetail({ route, navigation }: any) {
  const [pokemon, setPokemon] = useState<PokemonDetailProps>();

  const colors = {
    fire: '#FF6969',
    water: '#7CC0FF',
    grass: '#7CFFD0',
  };

  const color = (type: string) => {
    const index = Object.keys(colors).indexOf(type);
    if (index === -1) { return colors.fire; }
    return Object.values(colors)[index];
  };

  const { pokemonNome } = route.params;

  useEffect(() => {
    searchSpecificPokemon(pokemonNome);
  }, []);

  function handleBack() {
    navigation.goBack();
  }

  async function searchSpecificPokemon(pokemonNome: string) {
    try {
      const response = await pokemonApi.get(`/pokemon/${pokemonNome.toLowerCase()}/`);

      if (!response.data) {
        return;
      }

      const { id, name, types, species, abilities, height, weight } = response.data;

      const typesTemp = types.map(item => {
        if (item && item.type) {
          return item.type.name.replace(/(^|\s)\S/g, letter => letter.toUpperCase());
        }
      });

      const habilidadesTemp = abilities.map(item => {
        if (item && item.ability) {
          return item.ability.name.replace(/(^|\s)\S/g, letter => letter.toUpperCase());
        }
      });

      const pokemonDetail: PokemonDetailProps = {
        number: id,
        name: name.replace(/(^|\s)\S/g, letter => letter.toUpperCase()),
        types: typesTemp,
        imageURL: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${Number(id)}.png`,
        about: {
          specie: species.name.replace(/(^|\s)\S/g, letter => letter.toUpperCase()),
          skills: habilidadesTemp.join(' , '),
          weight: weight + 'kg',
          size: height + 'm',
        },
      };
      setPokemon(pokemonDetail);
    } catch (error) {
      Alert.alert('Ocorreu um erro durante a busca dos Pokémon');
      handleBack();
    }
  }

  if (!pokemon) { return <ActivityIndicator />; }
  return (
    <Container>
      <Header>
        <TouchableWithoutFeedback onPress={handleBack}>
          <Icon name="arrow-back" size={28} color="#5E5D5D" />
        </TouchableWithoutFeedback>
      </Header>

      <Content>
        <PokemonInfo>
          <PokemonNameText>{pokemon.name}</PokemonNameText>
          <PokemonNumberText>#{pokemon.number}</PokemonNumberText>
        </PokemonInfo>
        <PokemonInfoType>
          {pokemon.types && pokemon.types.map(item => (
            <PokemonTypeContent
              key={item}
              colorSelected={color(pokemon.types[0].toLowerCase())}
            >
              <PokemonTypeNameText>
                {item}
              </PokemonTypeNameText>
            </PokemonTypeContent>
          ))}
        </PokemonInfoType>
        <PokemonInfoImage>
          <PokemonCardBig
            imageURL={pokemon.imageURL}
            type={pokemon.types[0].toLowerCase()}
          />
        </PokemonInfoImage>
      </Content>
      <Footer>
        <TabBar pokemon={pokemon} />
      </Footer>
    </Container>
  );
}
