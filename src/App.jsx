import React, { useState } from 'react';
import './App.css'; // Assurez-vous que le fichier CSS est bien lié

function App() {
  const [inch, setInch] = useState('');
  const [cm, setCm] = useState('');
  const [error, setError] = useState('');

  const handleConvert = () => {
    if (!inch) {
      setError('Veuillez entrer une valeur en pouces.');
      setCm('');
      return;
    }

    if (isNaN(inch)) {
      setError('La valeur doit être un nombre.');
      setCm('');
      return;
    }

    const result = (parseFloat(inch) * 2.54).toFixed(2);
    setCm(result);
    setError('');
  };

  return (
    <div className="App">
      <div className="converter">
        <h1>Convertisseur pouces en centimètres</h1>
        <input 
          type="text" 
          placeholder="Entrez la valeur en pouces"
          value={inch}
          onChange={(e) => setInch(e.target.value)}
        />
        <button onClick={handleConvert}>Convertir</button>
        {error && <p className="error">{error}</p>}
        {cm && <h2>{inch} pouces = {cm} cm</h2>}
      </div>
    </div>
  );
}

export default App;