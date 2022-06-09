import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useAuth } from '../context/AuthContext';
import { AuthRoutes } from './auth.routes';
import { AppRoutes } from './app.routes';

export function Routes() {
  const { user } = useAuth();

  return (
    <NavigationContainer>
      {(user && Object.keys(user).length > 0) ?
        <AppRoutes />
        :
        <AuthRoutes />}
    </NavigationContainer>
  );
}
