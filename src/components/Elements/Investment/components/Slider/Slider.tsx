import React, { useState } from 'react';
import styled, { css } from 'styled-components';

import { IconLoyalty, IconMen, IconMoney, IconNew } from 'images/Investment';
import { useGetDevice } from 'hooks';

const Container = styled.div`
  margin-top: 37px;
`;

const List = styled.ul<{ device: string }>`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  gap: 15px;

  ${(props) =>
    props.device === props.theme.device.name.TabletAndDesktop &&
    css`
      width: 522px;

      gap: 19px;
    `}
`;

const ListItem = styled.li<{ device: string }>`
  width: 164px;
  height: 118px;

  padding: 0 11px 16px 18px;

  background-color: #ffffff;
  box-shadow: 6px 4px 12px rgba(0, 0, 0, 0.05);
  border-radius: 20px;

  ${(props) =>
    props.device === props.theme.device.name.TabletAndDesktop &&
    css`
      background-color: unset;
      box-shadow: none;
    `}
`;

const ContainerIcon = styled.div`
  width: 40px;
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  top: -10px;

  background-color: #eff9ff;
  border-radius: 50%;
`;

const Text = styled.p`
  font-size: 14px;
  line-height: 140%;

  color: ${(props) => props.theme.pallette.text.primary};
`;

export const Slider = () => {
  const { currentDevice } = useGetDevice();
  const [list, setList] = useState([
    {
      id: 0,
      icon: <IconMoney />,
      text: 'Экономим время и деньги на запуск digital сервисов',
    },
    {
      id: 1,
      icon: <IconMen />,
      text: 'Создаем канал привлечения новых клиентов',
    },
    {
      id: 2,
      icon: <IconNew />,
      text: 'Помогаем увеличить выручку путем запуска нового продукта',
    },
    {
      id: 3,
      icon: <IconLoyalty />,
      text: 'Повышаем лояльность действующих клиентов',
    },
  ]);

  return (
    <Container>
      <List device={currentDevice}>
        {list.map((element) => (
          <ListItem key={element.id} device={currentDevice}>
            <ContainerIcon>{element.icon}</ContainerIcon>
            <Text>{element.text}</Text>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};
