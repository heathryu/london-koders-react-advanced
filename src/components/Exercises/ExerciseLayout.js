import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  & div + div {
    margin-top: 10px;
  }
`;

export const ExerciseSection = styled.div`
  padding: 10px;
  display: inline-block;
  flex-grow: 1;

  border: solid 2px ${({ borderColor, theme }) => theme.colors[borderColor]};
  border-radius: 10px;
`;
