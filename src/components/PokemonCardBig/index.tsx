import React from 'react';
import { Container, ImagePokemon } from './styles';

interface PokemonCardBigProps {
  imageURL: string,
  type: string
}
export function PokemonCardBig({ imageURL, type }: PokemonCardBigProps) {
  const colors = {
    fire: ['#FF6969', '#FD9E5B'],
    water: ['#7CC0FF', '#5F29FF'],
    grass: ['#7CFFD0', '#4A7B42'],
  };
  const color = (type: string) => {
    const index = Object.keys(colors).indexOf(type);
    if (index === -1) { return colors.fire; }
    return Object.values(colors)[index];
  };

  return (
    <Container colors={color(type)}>
      <ImagePokemon source={{ uri: imageURL }} resizeMode="contain" />
    </Container>
  );
}
