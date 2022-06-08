import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/Home';
import { PokemonDetail } from '../screens/PokemonDetail';

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
