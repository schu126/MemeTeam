import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import MemeCard from '../components/MemeCard'; 
import { Link } from 'react-router-dom';

function Home() {
  const [memes, setMemes] = useState([]);
  const [randomMeme, setRandomMeme] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/memes')
      .then(response => response.json())
      .then(data => {
        setMemes(data);
        const meme = getRandomMeme();
        setRandomMeme(meme);
      });
  }, []);

  const getRandomMeme = () => {
    if (memes.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * memes.length);
    return memes[randomIndex];
  };

  const generateRandomMeme = () => {
    const meme = getRandomMeme();
    setRandomMeme(meme);
  };

  
  return (
    <div>
      <NavBar />
      <h2>Home Page</h2>
      {randomMeme && (
        <div>
          {/* <h3>Random Meme</h3> */}
          <MemeCard meme={randomMeme} />
        </div>
      )}
      <button onClick={generateRandomMeme}>Meme Me</button>
      <br />
      {/* <Link to="/library">Go to Meme Library</Link> */}
    </div>
  );
}

export default Home;
