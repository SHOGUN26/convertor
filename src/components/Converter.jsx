import React, { useState } from 'react';

const Converter = () => {
  const [inches, setInches] = useState('');
  const [cm, setCm] = useState(null);

  const handleConvert = () => {
    const converted = inches * 2.54;  // Conversion en cm
    setCm(converted);
  };

  return (
    <div className="converter">
      <h2>Convertisseur de pouces en centimètres</h2>
      <input
        type="number"
        value={inches}
        onChange={(e) => setInches(e.target.value)}
        placeholder="Entrez la valeur en pouces"
      />
      <button onClick={handleConvert}>Convertir</button>
      {cm !== null && <p>{inches} pouces = {cm} cm</p>}
    </div>
  );
};

export default Converter;
