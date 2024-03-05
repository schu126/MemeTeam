import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';

function LikedMemes() {
    const [likedMemes, setLikedMemes] = useState([]);
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
                // Filter the memes to get only liked ones
                const likedMemes = data.filter(meme => meme.liked === true);
                setLikedMemes(likedMemes);
            })
            .catch(error => {
                setError(error);
                console.error('Error fetching memes:', error);
            });
    }, []);

    return (
        <div className="liked-memes">
            <NavBar />
            <h2>Liked Memes</h2>
            <div className="memes-container">
                {likedMemes.map(meme => (
                    <div key={meme.id}>
                        <img src={meme.image} alt={meme.title} />
                        {/* Render other meme details */}
                    </div>
                ))}
            </div>
            {error && <p>Error: {error.message}</p>}
        </div>
    );
}

export default LikedMemes;
