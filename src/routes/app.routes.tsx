import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../pages/Home';
import { PokemonDetail } from '../pages/PokemonDetail';

const Stack = createStackNavigator();

export function AppRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="PokemonDetail"
        component={PokemonDetail}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
