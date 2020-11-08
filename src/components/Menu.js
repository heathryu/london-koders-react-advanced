import styled from 'styled-components';

export const Menu = styled.ul`
  list-style: none;
  color: ${({ theme }) => theme.colors.onyx};

  & li + li {
    margin-left: 30px;
  }
`;

export const MenuItem = styled.li`
  display: inline;
`;
