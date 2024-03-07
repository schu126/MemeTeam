import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import MemeCard from '../components/MemeCard'; 


function Home() {
  const [memes, setMemes] = useState([]);
  const [randomMeme, setRandomMeme] = useState([1]);

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

    const handleLikeClick = (id) => {
    const updatedMemes = memes.map(meme => {
        if (meme.id === id) {
            return { ...meme, liked: !meme.liked };
        }
        return meme;
    });
    setMemes(updatedMemes);
  }

  return (
    <div className="home-container">
      <NavBar />
      <h2>Meme of the Day</h2>
      {randomMeme && (
        <div className="random-meme-container">          
          <MemeCard meme={randomMeme} handleLikeClick={handleLikeClick} memeClassName="home-meme"/>
        </div>
      )}
      <button className="random-meme-button" onClick={generateRandomMeme}>Meme Me</button>
    </div>
  );
}

export default Home;