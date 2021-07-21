import React, { useState, useEffect } from 'react';
import ABMDestacados from '../../../components/ABMProducts/ABMDestacados';
import ABMCamisetas from '../../../components/ABMProducts/ABMCamisetas';
import ABMTech from '../../../components/ABMProducts/ABMTech';
import MenuOwner from '../../../components/Menu/MenuOwner/index';

const ABMPage = () => {
  const [category, setCategory] = useState(null);
  console.log(category);

  return (
    <div>
      <div>
        <MenuOwner />
      </div>
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
