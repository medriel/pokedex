import React, { useEffect, useState } from 'react';
import { Container, ContainerSearch, FilterView, Logo, SearchInput } from './styles';
import LogoImg from '../../assets/logo.png';
import { PokemonCard } from '../../components/PokemonCard';
import { ActivityIndicator, FlatList, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Modal, Portal } from 'react-native-paper';
import { ModalFilter } from '../../components/ModalFilter';
import { useNavigation } from '@react-navigation/native';
import { pokemonApi } from '../../services/pokemonApi';

interface PokemonResult {
  id?: number
  nome: string
  url: string
}

const navigation = useNavigation();

export function Home() {
  const [visible, setVisible] = useState(false);
  const [pokemonList, setPokemonList] = useState([] as PokemonResult[]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [loadingMore, setLoadingMore] = useState(false);
  const [pokemonType, setPokemonType] = useState(0);
  const [search, setSearch] = useState('');
  const [pokemonListFiltered, setPokemonListFiltered] = useState([] as PokemonResult[]);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = { flex: 1, marginLeft: 60, padding: 0, backgroundColor: 'white' };
  const changePokemonType = (value: number) => setPokemonType(value);

  useEffect(() => {
    console.log("useEffect1")
    if (search.length === 0) {
      setPokemonListFiltered(pokemonList);
    }
    else if (search.length > 1) {
      let filterList = pokemonList.filter(item => {
        const regex = new RegExp(search + '.*', 'i');
        return item.nome.match(regex);
      });
      setPokemonListFiltered(filterList);
    }
  }, [search, pokemonList]);

  useEffect(() => {
    console.log("useEffect2")
    searchPokemon();
  }, []);

  useEffect(() => {
    console.log("useEffect3")
    if (pokemonType === 0) {
      searchPokemon();
    } else {
      searchPokemonType();
    }
  }, [pokemonType])

  function conditionToReload() {
    return ((pokemonType === 0) && search.length === 0);
  }

  async function searchPokemonType() {
    try {
      const response = await pokemonApi.get(`/type/${pokemonType}/`);

      if (!response.data) {
        return setLoading(true);
      }

      const { pokemon } = response.data;

      let pokemons = pokemon.map(item => {
        if (item.pokemon) {
          return ({
            nome: item.pokemon.name.replace(/(^|\s)\S/g, letter => letter.toUpperCase()),
            url: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${Number(item.pokemon.url.match(/\/(\d+?)\//)[1])}.png`,
          });
        }
      });

      setPokemonList(pokemons);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }

  }

  async function searchPokemon() {
    const response = await pokemonApi.get(`/pokemon/?offset=${page * 10}&limit=10`);

    if (!response.data) {
      return setLoading(true);
    }

    const { results }: { results: PokemonResult[] } = response.data;
    const resultTranslate = results.map(item => (
      {
        nome: item.name.replace(/(^|\s)\S/g, letter => letter.toUpperCase()),
        url: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${Number(item.url.match(/\/(\d+?)\//)[1])}.png`,
      }
    ));
    if (page > 0) {
      setPokemonList([...pokemonList, ...resultTranslate]);
    }
    else {
      setPokemonList(resultTranslate);
    }
    setLoading(false);
    setLoadingMore(false);
  }

  function handleSearchMore(distance: number) {
    if (distance < 1) {
      return;
    }
    setLoadingMore(true);
    setPage(oldValue => oldValue + 1);
    searchPokemon();
  }

  function handlePokemonCard(pokemonNome: string) {
    navigation.navigate('PokemonDetail', { pokemonNome: pokemonNome });
  }

  return (
    <>
      <Portal>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle} style={{ marginTop: 0, backgroundColor: 'transparent' }}>
          <ModalFilter hideModal={hideModal} changePokemonType={changePokemonType} />
        </Modal>
      </Portal>

      <Container>
        <Logo source={LogoImg} />

        <ContainerSearch>
          <SearchInput value={search} onChangeText={(text) => setSearch(text)} placeholder="Buscar Pokémon" />
          <TouchableWithoutFeedback onPress={showModal}>
            <FilterView>
              <Icon name="tune" color="#5E5D5D" size={24} />
            </FilterView>
          </TouchableWithoutFeedback>
        </ContainerSearch>

        {loading ?
          (<ActivityIndicator />) :
          (
            <FlatList
              data={pokemonListFiltered}
              numColumns={2}
              renderItem={({ item }: { item: PokemonResult }) => (
                <PokemonCard key={item.nome} name={item.nome} imageURL={item.url} onPress={() => handlePokemonCard(item.nome)} />
              )}
              onEndReachedThreshold={0.2}
              onEndReached={({ distanceFromEnd }) => { conditionToReload() && handleSearchMore(distanceFromEnd); }}
              ListFooterComponent={loadingMore ? <ActivityIndicator color={'#333'} /> : <></>}
            />
          )}

      </Container>
    </>
  );
}
