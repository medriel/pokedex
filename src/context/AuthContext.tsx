import React from 'react';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import { userApi } from '../services/userApi';

interface AuthContextData {
  user: User
  login(email: string, senha: string): Promise<void>
  logout(): Promise<void>
}

interface User {
  email: string
}

interface AuthProviderProps {
  children: ReactNode
}

const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState({} as User);

  useEffect(() => {
    loadStorageDate();
  }, []);

  async function loadStorageDate() {
    const userStorage = await AsyncStorage.getItem('@Pokemon:User');
    if (userStorage) {
      const userLogged = JSON.parse(userStorage) as User;
      setUser(userLogged);
    }
  }

  async function login(email: string, senha: string) {
    try {
      const response = await userApi.post('/login', {
        'email': String(email),
        'password': String(senha),
      });

      if (response.status == 200) {
        setUser({ email });
        await AsyncStorage.setItem('@Pokemon:User', JSON.stringify({ email }));
      }
    } catch (error) {
      return Alert.alert('Login inválido', 'Forneça email e senha corretos');
    }
  }

  async function logout() {
    setUser({} as User);
    await AsyncStorage.removeItem('@Pokemon:User');
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export { AuthContext, AuthProvider, useAuth };
