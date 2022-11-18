import styled from 'styled-components';

import { Background, Header, HeaderImage, Title } from 'components/Elements';

const Container = styled.div`
  width: 100%;
  max-width: 1024px;

  height: 100%;

  position: relative;
  z-index: 10;

  margin: 0 auto;
  padding: 0 20px;
`;

export const TabletAndDesktopPage = () => {
  return (
    <>
      <Background />

      <Container>
        <Header />
        <HeaderImage />
        <Title />
      </Container>
    </>
  );
};
