import styled from 'styled-components';

import {
  Background,
  Header,
  HeaderImage,
  Investment,
  Settings,
  Products,
  Title,
} from 'components/Elements';

const Container = styled.div`
  position: relative;
  z-index: 10;

  padding: 0 16px;

  margin-bottom: 50px;
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

        <Products />
        <Investment />
      </Container>
    </>
  );
};
