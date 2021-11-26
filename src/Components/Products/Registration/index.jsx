import React, { useState } from 'react';
import ABMDestacados from './ABMDestacados'
import ABMCamisetas from './ABMCamisetas';
import ABMTech from './ABMTech';

const ABMPage = () => {
  const [category, setCategory] = useState('destacados');
  console.log(category);

  return (
    <div>
      <label>Categoria de producto</label>
      <select onChange={(e) => setCategory(e.target.value)}>
        <option value='destacados'>Destacados</option>
        <option value='camisetas'>Camisetas</option>
        <option value='tecnologia'>Tecnologia</option>
      </select>
      {category === 'destacados' && (
        <>
          <ABMDestacados />
        </>
      )}
      {category === 'camisetas' && (
        <>
          <ABMCamisetas />
        </>
      )}
      {category === 'tecnologia' && (
        <>
          <ABMTech />
        </>
      )}
    </div>
  );
};

export default ABMPage;
