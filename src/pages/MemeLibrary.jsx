import React, { useState, useEffect } from 'react';
import MemeCard from '../components/MemeCard';
import { Link } from 'react-router-dom';
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
           
    }, []);

    return (
        
    
        <div className="memesLibrary">
             <NavBar />
            {memes.map(meme => (
                meme.image && (
                    <Link key={meme.id} to={`/memes/${meme.id}`}>
                        <MemeCard meme={meme} />
                    </Link>
                )
            ))}
        </div>
    );
}

export default MemeLibrary;
