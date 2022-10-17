import { API_KEY, everything_endpoint } from '../config/config';

export default getNewsArticles = async (searchParam) => {

    try {
        const apiData = await fetch(`${everything_endpoint}?q=${searchParam}&sortBy=publishedAt`, {
            headers: {
                'X-API-KEY': API_KEY
            },
        })
        const result = await apiData.json();
        return result.articles;
    } catch (err) {
        throw err
    }
} 