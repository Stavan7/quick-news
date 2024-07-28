import {
    API_KEY,
    country,
    language,
    LOCAL_ENDPOINT,
    GLOBAL_ENDPOINT,
} from '../config/config';

export const getLocalNews = async category => {
    try {
        const apiData = await fetch(`${LOCAL_ENDPOINT}?country=${country}&category=${category}`, {
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

export const getGlobalNews = async param => {

    try {
        const apiData = await fetch(`${GLOBAL_ENDPOINT}?q=${param}&sortBy=publishedAt&language=${language}`, {
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
