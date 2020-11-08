import { Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';

import { Menu, MenuItem } from './components/Menu';
import StyledLink from './components/StyledLink';

import Layout from './components/Layout';
import description from './components/Description';
import Exercise1 from './components/Exercises/Exercise1';
import Exercise2 from './components/Exercises/Exercise2';
import Description from './components/Description';

const AppContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.platinum};
  min-height: 100vh;
`;

function App() {
  return (
    <AppContainer>
      <Layout
        headerItems={
          <Menu>
            <MenuItem>
              <StyledLink to="/">Home</StyledLink>
            </MenuItem>
            <MenuItem>
              <StyledLink to="/exercise1">Exercise 1</StyledLink>
            </MenuItem>
            <MenuItem>
              <StyledLink to="/exercise2">Exercise 2</StyledLink>
            </MenuItem>
          </Menu>
        }
      >
        <Switch>
          <Route path="/exercise1">
            <Exercise1 />
          </Route>
          <Route path="/exercise2">
            <Exercise2 />
          </Route>
          <Route path="/">
            <Description>
              Welcome to London Koders React Advanced Class!
            </Description>
            <Description>
              Here you will learn techniques to isolate reusable features and
              logic into HOCs, Render Props and Hooks.
            </Description>
          </Route>
        </Switch>
      </Layout>
    </AppContainer>
  );
}

export default App;
