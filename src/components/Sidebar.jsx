import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context/global'

function Sidebar() {
    const { topRankedAnime, getTopRankedAnime } = useGlobalContext()

    useEffect(() => {
        // Delay fetching top-ranked anime to avoid rate limits
        const timeout = setTimeout(() => {
            getTopRankedAnime();
        }, 200); // Delay by 0.2 seconds

        return () => clearTimeout(timeout);
    },[])

    return (
        <div className="mt-8 bg-clifford pr-20 pl-8 pt-8">
            {/* border-t-4 border-borcolor */}
            <h3 className="text-lg font-bold mb-4">Top 5 Ranked</h3>
            <div className="flex flex-col w-40">
                {topRankedAnime.map((anime) => (
                    <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id} className="mt-4 flex flex-col gap-2 text-green-600 transition-tranform transform hover:scale-105">
                        <img src={anime.images.jpg.large_image_url} alt="" className="w-full rounded-lg border-4 border-gray-300" />
                        <h5 className="text-sm font-semibold">{anime.title}</h5>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Sidebar
