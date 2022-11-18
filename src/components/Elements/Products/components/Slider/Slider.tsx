import React from 'react';
import styled, { css } from 'styled-components';

import { useGetDevice } from 'hooks';

const List = styled.ul<{ device: string }>`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  margin-top: 24px;
  gap: 16px;

  ${(props) =>
    props.device === props.theme.device.name.TabletAndDesktop &&
    css`
      margin-top: 44px;
    `}
`;

const ListItem = styled.li<{ device: string }>`
  width: 100%;
  max-width: 344px;

  height: 215px;

  display: flex;
  justify-content: space-between;

  padding: 25px 20px 0 16px;

  background-color: #e9f6ff;
  border-radius: 30px;

  ${(props) =>
    props.device === props.theme.device.name.TabletAndDesktop &&
    css`
      max-width: 502px;
      height: 328px;

      padding: 37px 33px 0 20px;
    `}
`;

const ContainerText = styled.div<{ device: string }>`
  width: 100%;
  max-width: 160px;

  height: 100%;

  display: flex;
  flex-direction: column;

  overflow: auto;

  gap: 5px;

  ${(props) =>
    props.device === props.theme.device.name.TabletAndDesktop &&
    css`
      max-width: 175px;

      gap: 12px;
    `}
`;

const Title = styled.span<{ device: string }>`
  font-size: 16px;
  line-height: 140%;
  font-weight: ${(props) => props.theme.typography.fontWeightBold};

  color: ${(props) => props.theme.pallette.text.primary};

  ${(props) =>
    props.device === props.theme.device.name.TabletAndDesktop &&
    css`
      font-size: 20px;
    `}
`;

const Text = styled.span<{ device: string }>`
  font-size: 13px;
  line-height: 140%;

  color: ${(props) => props.theme.pallette.text.primary};

  ${(props) =>
    props.device === props.theme.device.name.TabletAndDesktop &&
    css`
      font-size: 14px;
    `}
`;

const Image = styled.img<{ device: string }>`
  width: 100%;
  max-width: 142px;

  ${(props) =>
    props.device === props.theme.device.name.TabletAndDesktop &&
    css`
      max-width: 218px;
    `}
`;

export const Slider = () => {
  const { currentDevice } = useGetDevice();

  return (
    <>
      <List device={currentDevice}>
        <ListItem device={currentDevice}>
          <ContainerText device={currentDevice}>
            <Title device={currentDevice}>Платформа для автоследования</Title>
            <Text device={currentDevice}>
              Копирование стратегий в автономном режиме
            </Text>
          </ContainerText>

          <Image
            src="./images/Strategies.png"
            alt="Strategies"
            device={currentDevice}
          />
        </ListItem>

        <ListItem device={currentDevice}>
          <ContainerText device={currentDevice}>
            <Title device={currentDevice}>Платформа для робо-эдвайзинга</Title>
            <Text device={currentDevice}>
              Персонализированный подбор стратегий исходя из заданных параметров
            </Text>
          </ContainerText>

          <Image
            src="./images/Asking.png"
            alt="Asking"
            device={currentDevice}
          />
        </ListItem>
      </List>
    </>
  );
};
