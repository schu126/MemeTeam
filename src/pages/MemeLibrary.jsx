import React, { useState, useEffect } from 'react';
import MemeCard from '../components/MemeCard';
import NavBar from '../components/NavBar';
import { Link } from 'react-router-dom';

function MemeLibrary() {
    const [memes, setMemes] = useState([]);
    const [error, setError] = useState(null);
    const [searchedMeme, setSearchedMeme] = useState('');


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

    const handleSearch = (event) => {
        setSearchedMeme(event.target.value);
    };

    const filteredMemesList = memes.filter(meme =>
        meme.tags.some(tag => tag.toLowerCase().includes(searchedMeme.toLowerCase()))
    );

    return (
        <>
            <div className="MemesLibrary">
                <header>
                    <NavBar />
                </header>
                <main>
                    <input className="Search"
                        type="text"
                        placeholder=" What meme you dreamin?"
                        onChange={handleSearch}
                        value={searchedMeme}
                    />
                    {error && <p>Error: {error}</p>}
                    {filteredMemesList.map(meme => (
                        <Link key={meme.id} to={`/memes/${meme.id}`}>
                            <MemeCard meme={meme} />
                        </Link>
                    ))}
                </main>
            </div>
        </>
    );
}

export default MemeLibrary;
