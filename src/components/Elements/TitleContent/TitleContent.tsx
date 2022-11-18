import React from 'react';
import styled, { css } from 'styled-components';

import { useGetDevice } from 'hooks';

const Container = styled.div<{ device: string }>`
  margin-top: 75px;

  ${(props) =>
    props.device === props.theme.device.name.TabletAndDesktop &&
    css`
      margin-top: 115px;
    `}
`;

const TextPrimary = styled.p<{ device: string }>`
  font-size: 24px;
  line-height: 130%;

  text-align: center;

  color: ${(props) => props.theme.pallette.text.primary};

  ${(props) =>
    props.device === props.theme.device.name.TabletAndDesktop &&
    css`
      font-size: 38px;
    `}
`;

const TextSecondary = styled.span`
  color: ${(props) => props.theme.pallette.text.secondary};
`;

export const TitleContent = () => {
  const { currentDevice } = useGetDevice();

  return (
    <Container device={currentDevice}>
      <TextPrimary device={currentDevice}>
        Наши <TextSecondary>ключевые продукты </TextSecondary>
        <br />
        для инвестиций
      </TextPrimary>
    </Container>
  );
};
