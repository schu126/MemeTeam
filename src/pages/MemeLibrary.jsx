import React, { useState, useEffect } from 'react';
import MemeCard from '../components/MemeCard';
import NavBar from '../components/NavBar';

function MemeLibrary() {
    const [memes, setMemes] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3000/memes')
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
    }, []);

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

    const memesList = memes.map(meme => (
        meme.image && (
            <MemeCard key={meme.id} meme={meme} handleLikeClick={handleLikeClick} />
        )
    ));

    return (
        <div>
            <header>
                <NavBar />
            </header>
            <main className='MemesLibrary'>
                {error && <p>Error: {error}</p>}
                {memesList}
            </main>
        </div>
    );
}

export default MemeLibrary;
