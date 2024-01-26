import React, { useState, ChangeEvent } from 'react';

export default function CharacterStats() {
  const [character, setCharacter] = useState({
    name: 'Gandalf',
    strength: 10,
    intelligence: 18,
    charisma: 16
  });

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setCharacter({
      ...character,
      [e.target.name]: e.target.value
    });
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes realizar alguna acción con los datos del personaje
    console.log('Datos del personaje enviados:', character);
  };

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh'
  };

  const formStyle: React.CSSProperties = {
    backgroundColor: '#f0f0f0',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 0 15px rgba(0, 0, 0, 0.2)',
    width: '400px'
  };

  const buttonStyle: React.CSSProperties = {
    backgroundColor: '#4caf50',
    color: 'white',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px'
  };

  return (
    <div style={containerStyle}>
      <form style={formStyle} onSubmit={handleFormSubmit}>
        <label>
          Name:
          <input
            name="name"
            value={character.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Strength:
          <input
            name="strength"
            value={character.strength}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Intelligence:
          <input
            name="intelligence"
            value={character.intelligence}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Charisma:
          <input
            name="charisma"
            value={character.charisma}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit" style={buttonStyle}>Enviar</button>
      </form>
    </div>
  );
}





// import React, { useState } from 'react';
// import './App.css';

// export default function EmojiCounter(): JSX.Element {
//   const [emojiString, setEmojiString] = useState<string>('💩');

//   function handleButton1Click(): void {
//     setEmojiString((prevEmoji) => prevEmoji + '🌟');
//   }

//   function handleButton2Click(): void {
//     setEmojiString((prevEmoji) => prevEmoji + '🚀🚀');
//   }

//   function handleButton3Click(): void {
//     setEmojiString((prevEmoji) => prevEmoji + '🎉🎉🎉');
//   }

//   return (
//     <div className="emoji-counter-container">
//       <h1>{emojiString}</h1>

//       <button onClick={handleButton1Click}>Button 1</button>
//       <button onClick={handleButton2Click}>Button 2</button>
//       <button onClick={handleButton3Click}>Button 3</button>
//     </div>
//   );
// }
































// import React, { useState } from 'react';
// import './App.css';

// export default function EmojiCounter() {
//   const [emojiString, setEmojiString] = useState('💩');

//   function handleEmojiClick() {
//     const newEmojis = '💩💩💩'; // Modifica aquí para agregar más emojis si es necesario
//     setEmojiString(prevEmoji => prevEmoji + newEmojis);
//   }

//   return (
//     <div className="emoji-counter-container">
//       <h1>{emojiString}</h1>
//       <button onClick={handleEmojiClick}>Add 3 Smiles</button>
//     </div>
//   );
// }



























// function SpookyCounter() {
//   const [spookyCount, setSpookyCount] = useState(0);

//   return (
//     <div>
//       <p>Conteo espeluznante: {spookyCount}</p>
//       <button onClick={() => setSpookyCount(spookyCount + 1)}>Aumentar miedo</button>
//     </div>
//   );
// }

// export default SpookyCounter;










// import React, { useState } from 'react';

// function SpookyCounter() {
//   const [spookyCount, setSpookyCount] = useState(0);
//   const [showMessage, setShowMessage] = useState(false);

//   const increaseSpookyCount = () => {
//     setSpookyCount(spookyCount + 1);

//     // Después de 2 segundos, mostrar otro mensaje
//     setTimeout(() => {
//       setShowMessage(true);
//     }, 2000);
//   };

//   return (
//     <div>
//       <p>Conteo espeluznante: {spookyCount}</p>
//       {showMessage && <p>Ajajaja</p>}
//       <button onClick={increaseSpookyCount}>Aumentar miedo</button>
//     </div>
//   );
// }

// export default SpookyCounter;










// import React, { useState } from 'react';
// import './App.css';

// function App(): JSX.Element {
//   const [currentColor, setCurrentColor] = useState<string | null>(null);

//   const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, color: string): void => {
//     e.stopPropagation();
//     setCurrentColor(color);
//     alert(`Color: ${color}\nEcuador`);
//   };

//   return (
//     <div
//       style={{
//         width: '300px',
//         height: '100px',
//         border: '180px solid white',
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'space-between',
//         margin: 'auto', 
//       }}
//     >
//       <button style={{ flex: 1, background: 'yellow' }} onClick={(e) => handleClick(e, 'Yellow')}>
//         (; 
//           <button style={{ flex: 1, background: 'blue' }} onClick={(e) => handleClick(e, 'Blue')}>
//         (;  
//           <button style={{ flex: 1, background: 'red' }} onClick={(e) => handleClick(e, 'Red')}>
//         (; 
//       </button>
//       </button>
//       </button>
  

    
//     </div>
//   );
// }

// export default App;

