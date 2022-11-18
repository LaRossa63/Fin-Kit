import React from 'react';
import styled, { css } from 'styled-components';

import { useGetDevice } from 'hooks';

const Container = styled.div<{ device: string }>`
  width: 100%;
  height: 963px;

  position: absolute;
  z-index: 1;

  background-color: #cbecff;

  ${(props) =>
    props.device === props.theme.device.name.TabletAndDesktop &&
    css`
      height: 678px;
    `}
`;

export const Background = () => {
  const { currentDevice } = useGetDevice();

  return <Container device={currentDevice} />;
};
