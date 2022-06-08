import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled(LinearGradient)`
    height: 190px;
    border-radius: 20px;
    justify-content: center;
    align-items: center;
    padding: 12px;
    margin-top: 40px;
    padding-bottom: 20px;
`;

export const ImagePokemon = styled.Image`
    width: 254px;
    height: 217px;
    margin-top: -40px;
`;