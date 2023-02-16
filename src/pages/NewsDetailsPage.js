import React, { useCallback, useEffect, useState } from 'react'
import Layout from '../components/Layout';
import { getCategoryNews, getSearchFilterNews,getCountryFilterNews } from './api';
import "./NewsDetailsPage.css"

function NewsDetailsPage({category}) {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [country, setCountry] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");


  const getData = useCallback(async () => {
    const resp = await getCategoryNews(category || "business","20","1", country, searchTerm);
    setData(resp?.data?.articles || []);
  },[category, country, searchTerm]);

  useEffect(() => {
    getData();    
  }, [getData]);



  const handleCountryChange = useCallback((e) => {
    setCountry(e.target.value);
  }, []);

  const handleCategoryChange = useCallback((e) => {
    setCategoryFilter(e.target.value);
  }, []);

  const handleSearchTermChange = useCallback((e) => {
    setSearchTerm(e.target.value);
  }, []);

  const handleFilterButtonClick = useCallback(() => {
    getData();
  }, [getData]);

  return (
    <Layout>
      <div className="newsDetails-container">
        <div className="newsDetails-filter-container">
          <h2>Filtreleme</h2>
          <div className="newsDetails-filter-item">
            <label>Ülke:</label>
            <select value={country} onChange={handleCountryChange}>
              <option value="">Ülke Seçin</option>
              <option value="tr">Türkiye</option>
              <option value="us">ABD</option>
              <option value="gb">İngiltere</option>
              <option value="de">Almanya</option>
              <option value="fr">Fransa</option>
            </select>
          </div>
          <div className="newsDetails-filter-item">
            <label>Kategori:</label>
            <select value={categoryFilter} onChange={handleCategoryChange}>
              <option value="">Kategori Seçin</option>
              <option value="business">İş</option>
              <option value="entertainment">Eğlence</option>
              <option value="health">Sağlık</option>
              <option value="science">Bilim</option>
              <option value="sports">Spor</option>
              <option value="technology">Teknoloji</option>
            </select>
          </div>
          <div className="newsDetails-filter-item">
            <label>Arama:</label>
            <input type="text" value={searchTerm} onChange={handleSearchTermChange} placeholder="Haber Ara" />
          </div>
          <button onClick={handleFilterButtonClick}>Filtrele</button>
        </div>
        <div className="newsDetails-content">
          {data?.length ? 
          data.map((news, index) => (
            <div key={news.title} className='newsDetails-card'>
              <img src={news.urlToImage} alt={news.title} className='newsDetails-card-image' />
              <div className='newsDetails-text-info'>
                <div className='newsDetails-card-header'>
                  <h2>{news.title}</h2>
                  <span>{news.author}</span>
                </div>
                <p>{news.description}</p>
              </div>
              <button>Haber Detayı</button>
            </div>
          )) 
          : <>loading...</>}
        </div>
      </div>
    </Layout>
  )

}

export default NewsDetailsPage;
