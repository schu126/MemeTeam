import React, { useState, useEffect } from 'react';
import MemeCard from '../components/MemeCard';
import { useParams } from 'react-router-dom';
import NavBar from './NavBar';


function MemeDetail() {

    const {id} = useParams();
    const [meme, setMeme] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3000/memes/${id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch meme');
                }
                return response.json();
            })
            .then(data => {
                console.log("Fetched meme:", data);
                setMeme(data);
            })
            .catch(error => {
                setError(error.message);
            });

    }, [id]);

    
    return (
        <>
        <NavBar />
            <div className="memeDetail">
                {error && <p>Error: {error}</p>}
                {meme && <MemeCard meme={meme} />}
            </div>
        </>
    );
}

export default MemeDetail;
