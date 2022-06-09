import React, { useState } from 'react';

import { Container, Header, TitleText, Content, TitleContentText, ResetTextFilter, ButtonApply } from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { FlatList, TouchableWithoutFeedback, View } from 'react-native';
import { CategoryOptions } from './CategoryOptions';

interface ModalFilterProps {
  hideModal(): void
  changePokemonType(value: number): void
}

export function ModalFilter({ hideModal, changePokemonType }: ModalFilterProps) {
  const [categorySelected, setCategorySelected] = useState(0);

  function handleReset() {
    changePokemonType(0);
    hideModal();
  }

  function handleApply() {
    changePokemonType(categorySelected);
    hideModal();
  }

  const categories = [
    { name: 'Todos', key: 0 }
    , { name: 'Água', key: 11 }
    , { name: 'Fogo', key: 10 }
    , { name: 'Planta', key: 12 }
    , { name: 'Fada', key: 18 }
    , { name: 'Fantasma', key: 8 }
    , { name: 'Gelo', key: 15 }
    , { name: 'Elétrico', key: 13 },
  ];

  return (
    <Container>
      <Header>
        <TitleText>Filtro</TitleText>
        <TouchableWithoutFeedback onPress={handleReset}>
          <ResetTextFilter>Limpar filtros</ResetTextFilter>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => hideModal()}>
          <Icon name="close" color="#5E5D5D" size={26} />
        </TouchableWithoutFeedback>
      </Header>
      <Content>
        <TitleContentText>Tipo</TitleContentText>
        <FlatList data={categories}
          numColumns={2}
          style={{ marginTop: 20 }}
          renderItem={({ item }) =>
            <CategoryOptions
              name={item.name}
              key={item.key}
              selected={categorySelected === item.key}
              onPress={() => setCategorySelected(item.key)}
            />
          }
        />
      </Content>
      <View>
        <ButtonApply mode="contained" onPress={handleApply}>aplicar</ButtonApply>
      </View>
    </Container>
  );
}
