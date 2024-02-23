
import { Link } from "react-router-dom";
import {tv } from "../interfaces"
import {motion} from 'framer-motion';

type TvPreview = {
    Tv:tv
}
export const TvPreview = (tv:TvPreview) => {
    return(
    <motion.div
    initial={{
        opacity:0.1
    }}
    whileInView={{
        opacity:1
    }}
    transition={{
        duration:1
    }}
    key={tv.Tv.id} className=" shadow-lg group w-72 h-96  m-2 sm:m-4 relative flex items-center justify-center overflow-hidden">
        <img  src={tv.Tv.poster_path? `https://image.tmdb.org/t/p/original/${tv.Tv.poster_path}`: "/background_default.jpg"} className="relative group-hover:blur-sm rounded-sm shadow-md w-full h-full object-cover"/>
        <div className="group-hover:opacity-100 opacity-0 transition-all duration-300 absolute top-0 w-full h-full bg-ship-cove-950/50">
            <p className=" truncate font-Dmsans font-bold text-center text-ship-cove-50 p-2">{tv.Tv.name}</p>
            <p className="p-4 text-sm font-medium font-Dmsans text-white-200/90 line-clamp-6 text-justify">{tv.Tv.overview}</p>
            <span className="absolute bottom-2 left-2 font-Dmsans text-xs text-ship-cove-100 bg-ship-cove-800 py-1 px-2 rounded-md"><i className="bi bi-globe"></i> {tv.Tv.popularity}</span>
            <span className="absolute right-2 bottom-2 font-Dmsans font-bold text-abbey-200"><i className="bi bi-calendar3-event"></i> {tv.Tv.first_air_date}</span>
            <span className="absolute left-4 border-b-2 border-amber-600 bottom-10 font-Dmsans font-bold text-yellow-300"><i className="bi bi-star"></i> {tv.Tv.vote_average}</span>
            <span className="absolute left-4 bottom-20 border-b-2 font-Dmsans font-bold border-b-cyan-800 text-cyan-400"><i className="bi bi-hand-thumbs-up"></i> {tv.Tv.vote_count}</span>
            <Link to={`/tv/${tv.Tv.id}`} className="text-cyan-300 absolute bottom-10 right-8 text-4xl"><i className="bi bi-collection-play"></i></Link>
        </div>
    </motion.div>
    )
}
