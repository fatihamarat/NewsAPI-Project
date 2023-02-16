import axios from "axios";

export const getCategoryNews = async ({ cat, pageSize, page, country, q }) => {
    const url = `https://newsapi.org/v2/${!country ? "everything" : "top-headlines"}?country=${country ? country : "tr"}&category=${cat}&pageSize=${pageSize}&page=${page}&apiKey=${process.env.REACT_APP_API_KEY}${q ? "&q=" + q : ""}`;
    return await axios.get(url);
};


