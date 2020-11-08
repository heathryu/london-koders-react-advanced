import React from 'react';
import Description from '../../Description';
import { Container, ExerciseSection } from '../ExerciseLayout';
import Switch from './Exercise1';

const Exercise1 = () => {
  return (
    <Container>
      <Description>
        Rewrite the Switch component in file 'Exercise1.js' to encapsulate toggle logic in a Higher-Order Component.
      </Description>
      <Description>
        Stretch Goal: Also try the same with Render Prop and Custom Hook
      </Description>
      <ExerciseSection borderColor="dragonwoodRose">
        <Switch />
      </ExerciseSection>
    </Container>
  );
};

export default Exercise1;
