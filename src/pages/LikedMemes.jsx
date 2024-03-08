import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import MemeCard from '../components/MemeCard';

function LikedMemes() {
    const [likedMemes, setLikedMemes] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchLikedMemes();
    }, []);

    const fetchLikedMemes = () => {
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
            .catch(error => {
                setError(error);
            });
    };

    const handleLikeClick = (id) => {
        fetch(`http://localhost:3000/memes/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ liked: !likedMemes.find(meme => meme.id === id).liked }),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to update like status');
            }
            console.log('Like status updated successfully');
            // Fetch liked memes again to update the list after like status change
            fetchLikedMemes();
        })
        .catch(error => {
            console.error('Error updating like status:', error);
        });
    };

    return (
        <div className='NavMenu'>
            <NavBar />

            <div className='page-header'>
               <h1></h1> <h2>DEES MEMES I'M DREAMIN'</h2>

            </div>
            <div className="liked-meme-list-container">
                

                {likedMemes.map(meme => (
                    <div key={meme.id}>
                        <MemeCard meme={meme} handleLikeClick={handleLikeClick} />
                        {/* Render other meme details */}
                    </div>
                ))}
            </div>
            {error && <p>Error: {error.message}</p>}
        </div>
    );
}

export default LikedMemes;
