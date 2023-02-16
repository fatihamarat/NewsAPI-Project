import React, { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";

const News = ({ category }) => {
  const [news, setNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://newsapi.org/v2/top-headlines?country=tr&apiKey=1ce5b3fab6cc45caaada5f5e9af206bc`
      );
      setNews(result.data.articles);
    };
    fetchData();
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = news.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  // const paginate = pageNumber => setCurrentPage(pageNumber);
  const pageCount = Math.ceil(news.length / postsPerPage);
  const pageNumbers = Array.from({ length: pageCount }, (_, index) => index + 1);

  return (
    <div className="news-content">
       <div className="pagination">
        {pageNumbers.map(pageNumber => (
          <button 
            className={`page-number ${currentPage === pageNumber ? 'active' : ''}`}
            key={pageNumber}
            onClick={() => setCurrentPage(pageNumber)}
            >
            {pageNumber}
          </button>
        ))}
      </div>
      {currentPosts.map((news, index) => (
        <div key={news.title} className='news-card'>
          <img src={news.urlToImage} alt={news.title} className='news-card-image' />
          <div className='news-text-info'>
            <div className='news-card-header'>
              <h2>{news.title}</h2>
              <span>{news.author}</span>
            </div>
            <p>{news.description}</p>
          </div>
          <button>Haber Detayı</button>
        </div>
      ))}
      <div className="pagination">
        {pageNumbers.map(pageNumber => (
          <button 
            className={`page-number ${currentPage === pageNumber ? 'active' : ''}`}
            key={pageNumber}
            onClick={() => setCurrentPage(pageNumber)}
            >
            {pageNumber}
          </button>
        ))}
      </div>
  </div>
  );
};

export default News;
