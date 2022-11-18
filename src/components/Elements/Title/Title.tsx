import React from 'react';
import styled, { css } from 'styled-components';

import { TitleIcon } from 'images/Settings';
import { useGetDevice } from 'hooks';

const Container = styled.div<{ device: string }>`
  ${(props) =>
    props.device === props.theme.device.name.TabletAndDesktop &&
    css`
      position: absolute;
      top: 165px;
    `}
`;

const TitleIconStyled = styled(TitleIcon)<{ device: string }>`
  width: 157px;
  height: 59px;

  ${(props) =>
    props.device === props.theme.device.name.TabletAndDesktop &&
    css`
      width: 220px;
      height: 80px;
    `}
`;

const Text = styled.p<{ device: string }>`
  font-size: 16px;
  line-height: 130%;

  width: 100%;
  max-width: 384px;

  margin-top: 12px;

  color: ${(props) => props.theme.pallette.text.primary};

  ${(props) =>
    props.device === props.theme.device.name.TabletAndDesktop &&
    css`
      font-size: 22px;

      max-width: 366px;
    `}
`;

const Button = styled.button<{ device: string }>`
  font-size: 18px;
  line-height: 140%;

  width: 100%;
  max-width: 400px;
  height: 52px;

  margin-top: 16px;

  color: ${(props) => props.theme.pallette.common.white};

  border-radius: 8px;
  background-color: ${(props) => props.theme.pallette.text.secondary};

  ${(props) =>
    props.device === props.theme.device.name.TabletAndDesktop &&
    css`
      max-width: 380px;

      margin-top: 38px;
    `}
`;

export const Title = () => {
  const { currentDevice } = useGetDevice();

  return (
    <Container device={currentDevice}>
      <TitleIconStyled device={currentDevice} />

      <Text device={currentDevice}>
        Гибкая мобильная платформа для быстрой реализации инвестиционных
        сервисов.
      </Text>

      <Button device={currentDevice}>Заказать демо</Button>
    </Container>
  );
};
