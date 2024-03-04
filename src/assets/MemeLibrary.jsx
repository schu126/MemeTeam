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
                setMemes(data);
            })
    }, []);

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
