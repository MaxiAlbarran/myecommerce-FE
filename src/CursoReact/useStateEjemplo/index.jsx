import React, { useState } from 'react';

const Counts = () => {
  const [count, setCount] = useState(0);
  const handleChange = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2> Clickeaste {count} veces</h2>
      <button type='button' onClick={handleChange}>
        Apretame!
      </button>
    </div>
  );
};

export default Counts;
