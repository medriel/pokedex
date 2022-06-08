import styled, { css } from 'styled-components/native';

interface ButtonCategoriaSelected {
  selected: boolean;
}

export const ButtonSelect = styled.View<ButtonCategoriaSelected>`
  flex: 1;
  background-color: #D8D8D8;
  border-radius: 4px;
  padding: 8px 20px ;
  align-items: center;
  margin-right: 12px;
  margin-bottom: 12px;

  ${({ selected }) => selected && css`
      background-color: #2E6EB5;
  `}
`;

export const ButtonSelectText = styled.Text<ButtonCategoriaSelected>`
  font-family: ${({ theme }) => theme.fonts.spartan500};
  font-size: 14px;
  color: #6B6060;

  ${({ selected }) => selected && css`
      color: #fff;
  `}
`;