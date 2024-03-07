import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import MemeCard from '../components/MemeCard'; 

function Home() {
  const [memes, setMemes] = useState([]);
  const [randomMeme, setRandomMeme] = useState(null);

  useEffect(() => {
    fetch('https://memeteam-server.onrender.com/memes')
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

  const handleLikeClick = (id) => {
    const updatedMemes = memes.map(meme => {
      if (meme.id === id) {
        return { ...meme, liked: !meme.liked };
      }
      return meme;
    });
    setMemes(updatedMemes);

    // SAMMY!! This is the change we were missing. We needed to update State on RandomMeme! 
    const updatedRandomMeme = { ...randomMeme, liked: !randomMeme.liked };
    setRandomMeme(updatedRandomMeme);
  }

  return (
    <div className='NavMenu'>
      <NavBar />
      <div className="home-container">      
        <h2>Meme of the Day</h2>
        <button className="random-meme-button" onClick={generateRandomMeme}>Meme Me</button>
        {randomMeme && (
          <div className="random-meme-container">          
            <MemeCard meme={randomMeme} handleLikeClick={handleLikeClick} memeClassName="home-meme"/>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
