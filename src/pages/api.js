import axios from "axios";

export const getCategoryNews = async (cat, pageSize, page) => {
    const API_KEY = "1ce5b3fab6cc45caaada5f5e9af206bc";
    const url = `https://newsapi.org/v2/top-headlines?country=tr&category=${cat}&pageSize=${pageSize}&page=${page}&apiKey=${API_KEY}`;
    // return fetch(url)
    //     .then(response => response.json())
    //     .then(data => data.articles);
    return await axios.get(url);
};

export const getSearchFilterNews = async (q, pageSize, page) => {
    const API_KEY = "1ce5b3fab6cc45caaada5f5e9af206bc";
    const url = `https://newsapi.org/v2/everything?q=${q}&pageSize=${pageSize}&page=${page}&apiKey=${API_KEY}`;
    // return fetch(url)
    //     .then(response => response.json())
    //     .then(data => data.articles);
    return await axios.get(url);
};

export const getCountryFilterNews = async (country, pageSize, page) => {
    const API_KEY = "1ce5b3fab6cc45caaada5f5e9af206bc";
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&pageSize=${pageSize}&page=${page}&apiKey=${API_KEY}`;
    // return fetch(url)
    //     .then(response => response.json())
    //     .then(data => data.articles);
    return await axios.get(url);
};



