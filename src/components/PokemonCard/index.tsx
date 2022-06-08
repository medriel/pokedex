import React from 'react';
import { Container, ImagePokemon, Title, TitleContainer } from './styles';
import { TouchableWithoutFeedback, TouchableWithoutFeedbackProps } from 'react-native';

interface PokemonCardProps extends TouchableWithoutFeedbackProps {
  name: string
  imageURL: string
}

export function PokemonCard({ name, imageURL, ...rest }: PokemonCardProps) {
  return (
    <TouchableWithoutFeedback {...rest}>
      <Container colors={['#7CFFD0', '#4A7B42']}>
        <ImagePokemon resizeMode="contain" source={{ uri: imageURL }} />
        <TitleContainer>
          <Title>
            {name}
          </Title>
        </TitleContainer>
      </Container>
    </TouchableWithoutFeedback>
  );
}
