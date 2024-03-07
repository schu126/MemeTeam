import React, { useState, useEffect } from 'react';
import MemeCard from '../components/MemeCard';
import NavBar from '../components/NavBar';
import { Link } from 'react-router-dom';

function MemeLibrary() {
    const [memes, setMemes] = useState([]);
    const [error, setError] = useState(null);
    const [searchedMeme, setSearchedMeme] = useState('');

    useEffect(() => {
        fetch('https://memeteam-server.onrender.com/memes')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch memes');
                }
                return response.json();
            })
            .then(data => {
                console.log("Fetched memes:", data);
                setMemes(data);
            })
            .catch(error => {
                setError(error.message);
            });

    }, [setMemes]);
  
    const handleLikeClick = (id) => {
        const updatedMemes = memes.map(meme => {
            if (meme.id === id) {
                return { ...meme, liked: !meme.liked };
            }
            return meme;
        });
        setMemes(updatedMemes); 
        // Update the state to see button change
        // Add fetch request here to update the like status on the server
    };
   
    const handleSearch = (event) => {
        setSearchedMeme(event.target.value);
    };

    const filteredMemesList = memes.filter(meme =>
        meme.tags.some(tag => tag.toLowerCase().includes(searchedMeme.toLowerCase()))
    );


    const memesList = filteredMemesList.map(meme => (
        meme.image && (
            <MemeCard key={meme.id} meme={meme} className="MemeCardsContainer" handleLikeClick={handleLikeClick} /> // Pass handleLikeClick function

        )
    ));

    return (
        <div className='NavMenu'>
            <NavBar />
          <div className="page-header">
                <h1><input
                className="Search"
                type="text"
                placeholder=" WHAT MEME YOU DREAMIN?"
                onChange={handleSearch}
                value={searchedMeme}
              /></h1>
            </div>
       
            {error && <p>Error: {error}</p>}
            <div className = "meme-list-container">
            {memesList} </div>
          
        </div>
        
      );

}

export default MemeLibrary;
