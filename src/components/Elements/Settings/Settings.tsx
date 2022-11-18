import React, { useState } from 'react';
import styled, { css } from 'styled-components';

import { IconActivity, IconFilter, IconGear, IconGraph } from 'images/Settings';
import { useGetDevice } from 'hooks';

const Container = styled.div<{ device: string }>`
  margin-top: 37px;

  ${(props) =>
    props.device === props.theme.device.name.TabletAndDesktop &&
    css`
      margin: 0;
    `}
`;

const List = styled.ul<{ device: string }>`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  gap: 15px;

  ${(props) =>
    props.device === props.theme.device.name.TabletAndDesktop &&
    css`
      gap: 20px;
    `}
`;

const ListItem = styled.li<{ device: string }>`
  width: 164px;
  height: 118px;

  padding: 0 11px 16px 18px;

  position: relative;

  background-color: #ffffff;
  box-shadow: 6px 4px 12px rgba(0, 0, 0, 0.05);
  border-radius: 20px;

  ${(props) =>
    props.device === props.theme.device.name.TabletAndDesktop &&
    css`
      width: 241px;
      height: 118px;

      padding: 22px 60px 0 20px;
    `}
`;

const ContainerIcon = styled.div<{ device: string }>`
  width: 40px;
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  top: -10px;

  border-radius: 50%;
  background-color: #eff9ff;

  ${(props) =>
    props.device === props.theme.device.name.TabletAndDesktop &&
    css`
      position: absolute;
      top: 15px;
      right: 17px;
    `}
`;

const Text = styled.span<{ device: string }>`
  font-size: 14px;
  line-height: 140%;

  color: ${(props) => props.theme.pallette.text.primary};

  ${(props) =>
    props.device === props.theme.device.name.TabletAndDesktop &&
    css`
      font-size: 16px;
    `}
`;

export const Settings = () => {
  const { currentDevice } = useGetDevice();
  const [settingList, setSettingList] = useState([
    {
      id: 0,
      icon: <IconGraph />,
      text: 'Удобный пользовательский интерфейс',
    },
    {
      id: 1,
      icon: <IconActivity />,
      text: 'Панель администратора для ведения учета',
    },
    {
      id: 2,
      icon: <IconFilter />,
      text: 'Простая и быстрая интеграция',
    },
    {
      id: 3,
      icon: <IconGear />,
      text: 'Гибкая масштабируемая система',
    },
  ]);

  return (
    <Container device={currentDevice}>
      <List device={currentDevice}>
        {settingList.map((element) => (
          <ListItem key={element.id} device={currentDevice}>
            <ContainerIcon device={currentDevice}>{element.icon}</ContainerIcon>

            <Text device={currentDevice}>{element.text}</Text>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};
