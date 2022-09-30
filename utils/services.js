import { API_KEY, api_endpoint, country } from '../config/config';

export default getNewsArticlesByCategory = async (category) => {

    try {
        const apiData = await fetch(`${api_endpoint}?country=${country}&category=${category}`, {
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