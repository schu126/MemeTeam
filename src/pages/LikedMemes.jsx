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
                
                const likedMemes = data.filter(meme => meme.liked === true);
                setLikedMemes(likedMemes);
            })
    }, []);

    return (
        <div>
            <NavBar />
            
            <div className="liked-memes">
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
