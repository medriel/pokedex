import styled, { css } from 'styled-components/native';
interface TabSelected {
  selected?: boolean
}

export const TabSectionView = styled.View<TabSelected>`
  flex:1;
  padding: 20px 0;

  ${({ selected }) => selected && css`
      border-bottom-color: #FF1D1D;
      border-bottom-width: 2px;
  `}
`;

export const TabSectionText = styled.Text<TabSelected>`
  font-family: ${({ theme }) => theme.fonts.spartan600};
  font-size: 13px;
  line-height: 16px;
  color: rgba(94, 94, 94, 0.7);
  text-align: center;

  ${({ selected }) => selected && css`
    font-family: ${({ theme }) => theme.fonts.spartan800};
    font-size: 14px;
    color: #5E5E5E;
  `}
`;