import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default styled(Link)`
  color: ${({ theme }) => theme.colors.onyx};
  font-weight: bold;
`;
