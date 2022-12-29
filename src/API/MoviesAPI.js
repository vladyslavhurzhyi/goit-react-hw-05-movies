import axios from 'axios';

const api = "78b03767048a6745695471bf0cbbdec0"

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';




// https://api.themoviedb.org/3/trending/all/day?api_key=78b03767048a6745695471bf0cbbdec0

export const getTrandingFilms = async () => {
    const response = await axios.get(`trending/all/day?api_key=${api}`)
    const { results }  = response.data;

    return results;
}


// https://api.themoviedb.org/3/search/movie?api_key=78b03767048a6745695471bf0cbbdec0&language=en-US&query=avatar&page=1&include_adult=false

export const getFilms = async (query) => {
    const response = await axios.get(`search/movie?api_key=${api}&query=${query}`)
    const { results }  = response.data;

    return results;
}

// https://api.themoviedb.org/3/movie/76600?api_key=78b03767048a6745695471bf0cbbdec0&language=en-US


export const getFilmsById = async (id) => {
    const response = await axios.get(`movie/${id}?api_key=${api}`)
    const results = response.data;

    return results;
}



// https://api.themoviedb.org/3/movie/436270/credits?api_key=78b03767048a6745695471bf0cbbdec0&language=en-US

export const getCastInfo = async (id) => {
    const response = await axios.get(`movie/${id}/credits?api_key=${api}`)
    const results = response.data;

    return results;
}


//https://api.themoviedb.org/3/movie/361743/reviews?api_key=78b03767048a6745695471bf0cbbdec0&language=en-US&page=1

export const getReviewsInfo = async (id) => {
    const response = await axios.get(`movie/${id}/reviews?api_key=${api}`)
    const {results} = response.data;
    

    return results;
}
