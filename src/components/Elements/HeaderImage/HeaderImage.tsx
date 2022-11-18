import React from 'react';
import styled, { css } from 'styled-components';

import { useGetDevice } from 'hooks';

const ContainerImage = styled.div<{ device: string }>`
  width: 100%;
  height: 390px;

  margin-top: 10px;

  position: relative;

  ${(props) =>
    props.device === props.theme.device.name.TabletAndDesktop &&
    css`
      height: 555px;
    `}
`;

const Image = styled.img<{ device: string }>`
  width: 100%;
  max-width: 390px;

  height: 100%;

  position: absolute;
  right: -16px;

  object-fit: cover;
  object-position: left;

  ${(props) =>
    props.device === props.theme.device.name.TabletAndDesktop &&
    css`
      max-width: 605px;

      right: 0;

      object-fit: none;
      object-position: unset;
    `}
`;

export const HeaderImage = () => {
  const { currentDevice } = useGetDevice();

  return (
    <ContainerImage device={currentDevice}>
      <Image
        src="./images/Header-TabletAndDesktop.png"
        alt="Header image"
        device={currentDevice}
      />
    </ContainerImage>
  );
};
