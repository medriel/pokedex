import React from "react";
import { ContainerTab, ContentText, LineInfo, TitleContainer, TitleText } from "./styles";

export interface ITabBarAbout {
  key: string;
  title: string;
  value?: string;
}

type TabBarAboutProps = {
  items: ITabBarAbout[];
}

export function About({ items }: TabBarAboutProps) {
  return (
    <ContainerTab>
      {items.map(item => (
        <LineInfo key={item.key}>
          <TitleContainer>
            <TitleText>{item.title}</TitleText>
          </TitleContainer>

          <TitleContainer>
            <ContentText>{item.value}</ContentText>
          </TitleContainer>
        </LineInfo>
      ))}

    </ContainerTab>
  );
}