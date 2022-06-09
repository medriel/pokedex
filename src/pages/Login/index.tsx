import React, { useState } from 'react';
import { Container, Content, TextInputEmail, Logo, SubTitle, Title, TextInputPassword, ButtonLogin, ButtonText, Background } from './styles';
import { TextInput } from 'react-native-paper';
import LogoImg from '../../assets/logo.png';
import BackgroundImg from '../../assets/background.png';
import { useAuth } from '../../context/AuthContext';

export function Login() {
  const [email, setText] = useState('janet.weaver@reqres.in'); //janet.weaver@reqres.in
  const [password, setPassword] = useState('janet');//janet
  const [hidePass, setHidePass] = useState(true);

  const { login } = useAuth();

  return (
    <Container>
      <Background source={BackgroundImg}>
        <Logo source={LogoImg} />
        <Content>
          <Title>Bem-vindo</Title>
          <SubTitle>
            Insira os seus dados para acessar
          </SubTitle>

          <TextInputEmail
            label="Email"
            value={email}
            onChangeText={text => setText(text)}
          />

          <TextInputPassword
            label="Senha"
            value={password}
            onChangeText={text => setPassword(text)}
            secureTextEntry={hidePass}
            right={<TextInput.Icon onPress={() => setHidePass(!hidePass)} name="eye" />}
          />

          <ButtonLogin onPress={() => login(email, password)} mode="contained">
            <ButtonText>Login</ButtonText>
          </ButtonLogin>
        </Content>
      </Background>
    </Container>
  );
}
