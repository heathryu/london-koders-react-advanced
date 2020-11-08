import React from 'react';
import Description from '../../Description';
import { Container, ExerciseSection } from '../ExerciseLayout';
import FoodList from './Exercise2';

const Exercise2 = () => {
  return (
    <Container>
      <Description>
        Rewrite the Food component in file 'Exercise2.js' to use Render Props to encapsulate logic
        to make API call and provide Food data.
      </Description>
      <Description>
        Stretch Goal: Also try the same with HOC and Custom Hook.
      </Description>
      <ExerciseSection borderColor="persianBlue">
        <FoodList />
      </ExerciseSection>
    </Container>
  );
};

export default Exercise2;
