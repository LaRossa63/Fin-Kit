import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: end;

  padding-top: 26px;
`;

const ContainerControls = styled.div`
  display: flex;
  gap: 20px;

  font-size: 16px;
  line-height: 130%;

  color: ${(props) => props.theme.pallette.text.primary};
`;

const ControlItem = styled.span<{ isSelected: boolean }>`
  ${(props) =>
    props.isSelected === true &&
    css`
      width: 26px;
      height: 24px;

      display: flex;
      align-items: center;
      justify-content: center;

      background-color: #fff;
      border-radius: 12px;

      color: ${(props) => props.theme.pallette.text.secondary};
    `}
`;

export const Header = () => {
  const [selectedItem, setSelectedItem] = useState(0);
  const [listItem, setListItem] = useState([
    { id: 0, text: 'Ru' },
    { id: 1, text: 'En' },
  ]);

  const handleClickItem = (id: number) => {
    setSelectedItem(id);
  };

  return (
    <Container>
      <ContainerControls>
        {listItem.map((element) => (
          <ControlItem
            key={element.id}
            isSelected={selectedItem === element.id}
            onClick={() => handleClickItem(element.id)}
          >
            {element.text}
          </ControlItem>
        ))}
      </ContainerControls>
    </Container>
  );
};
