import {useEffect,useState} from 'react'

const useFetch = url =>  {

    const [movies,setMovies] = useState([])
    const [isLoading,setIsLoading] = useState(false)
    const [updateLoading,setUpdateLoading] = useState(false)
    const [error,setError] = useState(null)

    useEffect(()=>{
        setIsLoading(true)
        const fetchData = async () => {
            try {
                const res = await fetch(url) 
                if(!res.ok){
                    throw new Error('something went wrong......')
                }
                const data = await res.json()
                const movieData = data.results.map(movie => {
                return {
                    episode_id : movie.episode_id,
                    title : movie.title,
                    director :movie.director,
                    opening_crawl : movie.opening_crawl,
                    release_date : movie.release_date
                    }
                }) 
                setMovies(movieData) 
            } catch (error) {
                setError(error.message)
            }

        }
        fetchData()
    } ,[url])
    

    return ({
        movies,
        isLoading,
        error,
        updateData
     })
}    
    


export default useFetch
