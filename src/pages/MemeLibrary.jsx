import React, { useState, useEffect } from 'react';
import MemeCard from '../components/MemeCard';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';

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

    }, []);

    const handleSearch = (event) => {
        setSearchedMeme(event.target.value);
    };

    const filteredMemesList = memes.filter(meme =>
        meme.tags.some(tag => tag.toLowerCase().includes(searchedMeme.toLowerCase()))
    );

    // const memesList = memes.map(meme => (
    //     meme.image && (
    //         <Link key={meme.id} to={`/memes/${meme.id}`}>
    //             <MemeCard meme={meme} />
    //         </Link>
    //     )
    // ));

    return (
        <>
            <div className="memesLibrary">
                <header>
                    <NavBar />
                </header>
                <main>
                    <input
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
