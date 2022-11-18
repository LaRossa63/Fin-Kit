import styled from 'styled-components';

import {
  Background,
  Header,
  HeaderImage,
  Settings,
  Slider,
  Title,
  TitleContent,
} from 'components/Elements';

const Container = styled.div`
  position: relative;
  z-index: 10;

  padding: 0 16px;
`;

export const MobilePage = () => {
  return (
    <>
      <Background />

      <Container>
        <Header />
        <HeaderImage />
        <Title />
        <Settings />

        <TitleContent />
        <Slider />
      </Container>
    </>
  );
};
