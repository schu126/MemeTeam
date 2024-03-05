import React, { useState, useEffect } from 'react';


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
                console.error('Error fetching memes:', error);
                setError(error);
            });
    }, []);

    if (error) {
        return <div>Error: {error.message}</div>;
    }

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
