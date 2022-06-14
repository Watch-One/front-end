let API_KEY_TMDB = process.env.REACT_APP_TMDB_KEY;
const apiConfigTMDB = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: API_KEY_TMDB,
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfigTMDB;