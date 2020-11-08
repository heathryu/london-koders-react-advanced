import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
  padding: 5px 20px;
  min-height: 50px;
  background-color: ${({ theme }) => theme.colors.lightSeaGreen};
`;

const Main = styled.div`
  padding: 20px 40px;

  background-color: ${({ theme }) => theme.colors.platinum};
`;

const Layout = ({ headerItems, children }) => {
  return (
    <>
      <Header>{headerItems}</Header>
      <Main>{children}</Main>
    </>
  );
};

export default Layout;
