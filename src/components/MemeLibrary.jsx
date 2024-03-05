import React, { useState, useEffect } from 'react';

function MemeLibrary() {
    const [memes, setMemes] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/memes')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch memes');
                }
                return response.json();
            })
            .then(data => {
                console.log("Fetched memes:", data); // Add console log to check fetched data
                setMemes(data);
            });
    }, []);

    console.log("Memes state:", memes); // Add console log to check memes state

    return (
        <div className="memesLibrary">
            {memes.map(meme => (
                meme.image && (
                    <img key={meme.id} src={meme.image} alt={meme.title || 'Meme'} />
                )
            ))}
        </div>
    );
}

export default MemeLibrary;
