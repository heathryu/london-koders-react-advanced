import React, { useState } from 'react';

const Switch = () => {
  // Beginning of logic to abstract away
  const [isToggleOn, setIsToggleOn] = useState(false);

  const switchToggle = () => setIsToggleOn(!isToggleOn);
  // end of logic to abstract away

  return (
    <div>
      <p>Toggle is currently {isToggleOn ? 'on' : 'off'}</p>
      <button onClick={switchToggle}>Toggle Me</button>
    </div>
  );
};

export default Switch;
