import React, { useEffect, useState } from 'react';
import { PokemonDetailProps } from '../../screens/PokemonDetail';
import { About, ITabBarAbout } from './About';
import { Section } from './Section';

import { Container, Header } from './styles';

interface TabBarProps {
  pokemon: PokemonDetailProps;
}

export function TabBar({ pokemon }: TabBarProps) {
  const [tabSelected, setTabSelected] = useState('about');

  const tabsArray = [
    { key: 'about', title: 'Sobre' },
    { key: 'status', title: 'Status' },
    { key: 'evolution', title: 'Evolução' },
  ];

  const tabAboutKeys = [
    { key: 'specie', title: 'Espécie' },
    { key: 'size', title: 'Tamanho' },
    { key: 'weight', title: 'Peso' },
    { key: 'skills', title: 'Habilidades' },
  ];

  const [tabAbout, setTabAbout] = useState([] as ITabBarAbout[]);

  useEffect(() => {
    console.log(Object.keys(pokemon.about).indexOf('tamanho'));

    let tabAboutValue = tabAboutKeys.map((item) => ({
      key: item.key,
      title: item.title,
      value: Object.values(pokemon.about)[Object.keys(pokemon.about).indexOf(item.key)],
    }));

    console.log(Object.values(pokemon.about))
    console.log(pokemon.about)

    setTabAbout(tabAboutValue);
  }, []);

  return (
    <Container>
      <Header>
        {tabsArray.map(item =>
          (<Section key={item.key} title={item.title} selected={tabSelected === item.key} onPress={() => setTabSelected(item.key)} />)
        )}
      </Header>
      <About items={tabAbout} />
    </Container>
  );
}
