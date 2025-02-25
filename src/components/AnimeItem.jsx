import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function AnimeItem() {
    const { id } = useParams();
    const [anime, setAnime] = useState({});
    const [characters, setCharacters] = useState([]);
    const [showMore, setShowMore] = useState(false);

    const {
        title, synopsis, trailer, duration, aired, season, images,
        rank, score, scored_by, popularity, status, rating, source
    } = anime;

    const getAnime = async (animeId) => {
        const response = await fetch(`https://api.jikan.moe/v4/anime/${animeId}`);
        const data = await response.json();
        setAnime(data.data);
    };

    const getCharacters = async (animeId) => {
        const response = await fetch(`https://api.jikan.moe/v4/anime/${animeId}/characters`);
        const data = await response.json();
        setCharacters(data.data);
    };

    useEffect(() => {
        getAnime(id);
        getCharacters(id);
    }, [id]);

    return (
        <div className="p-12 bg-clifford">
            <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-green-500 mb-6">{title}</h1>
            <div className="bg-clifford p-6 rounded-lg shadow-xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <img className="rounded-lg" src={images?.jpg.large_image_url} alt="Anime" />
                    
                    <div className="grid grid-cols-2 gap-4 text-lg font-medium tracking-wide">
                        <p>
                            <span className="font-bold text-green-600">Aired:</span>
                            <span className="text-gray-500"> {aired?.string}</span>
                        </p>
                        <p>
                            <span className="font-bold text-green-600">Rating:</span>
                            <span className="text-gray-500"> {rating}</span>
                        </p>
                        <p>
                            <span className="font-bold text-green-600">Rank:</span>
                            <span className="text-gray-500"> {rank}</span>
                        </p>
                        <p>
                            <span className="font-bold text-green-600">Score:</span>
                            <span className="text-gray-500"> {score}</span>
                        </p>
                        <p>
                            <span className="font-bold text-green-600">Scored By:</span>
                            <span className="text-gray-500"> {scored_by}</span>
                        </p>
                        <p>
                            <span className="font-bold text-green-600">Popularity:</span>
                            <span className="text-gray-500"> {popularity}</span>
                        </p>
                        <p>
                            <span className="font-bold text-green-600">Status:</span>
                            <span className="text-gray-500"> {status}</span>
                        </p>
                        <p>
                            <span className="font-bold text-green-600">Source:</span>
                            <span className="text-gray-500"> {source}</span>
                        </p>
                        <p>
                            <span className="font-bold text-green-600">Season:</span>
                            <span className="text-gray-500"> {season}</span>
                        </p>
                        <p>
                            <span className="font-bold text-green-600">Duration:</span>
                            <span className="text-gray-500"> {duration}</span>
                        </p>
                    </div>
                </div>
                <p className="mt-4 text-gray-700">
                    {showMore ? synopsis : synopsis?.substring(0, 450) + '...'}
                    <button className="text-green-600 font-semibold ml-2" onClick={() => setShowMore(!showMore)}>
                        {showMore ? 'Show Less' : 'Read More'}
                    </button>
                </p>
            </div>
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-green-500 my-6">Trailer</h3>
            <div className="flex justify-center">
                {trailer?.embed_url ? (
                    <iframe className=" p-2 rounded-lg bg-white shadow-xl" src={trailer.embed_url} title="Trailer" width="800" height="450" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                ) : (
                    <h3 className="text-xl">Trailer not available</h3>
                )}
            </div>
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-green-500 my-6">Characters</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 bg-white p-6 rounded-lg shadow-lg">
                {characters
                ?.filter(character => character.role === "Main" || (character.role !== "Main" && character.favorites >= 1500))
                .map((character, index) => {
                    const { role } = character;
                    const { images, name, mal_id } = character.character;
                    return (
                        <Link to={`/character/${mal_id}`} key={index} className="p-2 bg-clifford rounded-lg transition-transform transform hover:scale-105">
                            <img className="w-full rounded-lg" src={images?.jpg.image_url} alt="Character" />
                            <h4 className="text-lg font-semibold mt-2 text-gray-700">{name}</h4>
                            <p className="text-green-600">{role}</p>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}

export default AnimeItem;