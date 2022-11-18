import React from 'react';
import styled, { css } from 'styled-components';

import { useGetDevice } from 'hooks';
import { Slider } from './components/Slider';

const Container = styled.div<{ device: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 40px;

  ${(props) =>
    props.device === props.theme.device.name.TabletAndDesktop &&
    css`
      flex-direction: row;

      margin-top: 114px;
    `}
`;

const Content = styled.div<{ device: string }>`
  width: 100%;
  max-width: 452px;
`;

const TextSecondary = styled.p<{ device: string }>`
  font-size: 24px;
  line-height: 130%;

  text-align: center;

  color: ${(props) => props.theme.pallette.text.secondary};

  ${(props) =>
    props.device === props.theme.device.name.TabletAndDesktop &&
    css`
      font-size: 38px;
    `}
`;

const TextPrimary = styled.span`
  color: ${(props) => props.theme.pallette.text.primary};
`;

const TextDescription = styled.p<{ device: string }>`
  font-size: 14px;
  line-height: 140%;

  text-align: center;

  margin-top: 5px;

  color: ${(props) => props.theme.pallette.text.primary};

  ${(props) =>
    props.device === props.theme.device.name.TabletAndDesktop &&
    css`
      text-align: start;

      margin-top: 21px;
    `}
`;

const ContainerButton = styled.div<{ device: string }>`
  display: flex;
  justify-content: center;

  ${(props) =>
    props.device === props.theme.device.name.TabletAndDesktop &&
    css`
      justify-content: start;
    `}
`;

const Button = styled.button<{ device: string }>`
  font-size: 18px;
  line-height: 140%;

  width: 100%;
  max-width: 343px;

  height: 52px;

  margin-top: 12px;

  color: ${(props) => props.theme.pallette.common.white};

  background-color: #0962e8;
  border-radius: 8px;

  ${(props) =>
    props.device === props.theme.device.name.TabletAndDesktop &&
    css`
      margin-top: 37px;
      max-width: 200px;
    `}
`;

export const Investment = () => {
  const { currentDevice } = useGetDevice();

  return (
    <Container device={currentDevice}>
      <Content device={currentDevice}>
        <TextSecondary device={currentDevice}>
          Представляем ценность
          <TextPrimary> для брокера и банка</TextPrimary>
        </TextSecondary>

        <TextDescription device={currentDevice}>
          Мы помогаем брокерам и банкам запустить собственное мобильное
          приложение для инвестиций в короткие сроки и с экономией бюджета
        </TextDescription>

        <ContainerButton device={currentDevice}>
          <Button device={currentDevice}>Заказать демо</Button>
        </ContainerButton>
      </Content>

      <Slider />
    </Container>
  );
};
