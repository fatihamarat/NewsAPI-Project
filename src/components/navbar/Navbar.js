import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import "./index.css"

function Navbar() {
  const [categories, setCategories] = useState([]);
  const [setNews] = useState([]);
  const [category, setCategory] = useState('general');
  const [pageSize, setPageSize] = useState(20);
  const [page, setPage] = useState(1);

  const location = useLocation();
  const {pathname} = location;

  useEffect(() => {
    fetch('https://newsapi.org/v2/top-headlines/sources?apiKey=1ce5b3fab6cc45caaada5f5e9af206bc')
      .then(response => response.json())
      .then(data => {
        const availableCategories = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];
        const categories = data.sources
          .filter(source => availableCategories.includes(source.category))
          .map(source => source.category);
        setCategories(categories);
      });
  }, []);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const category = searchParams.get('category') || 'general';
    const pageSize = Number(searchParams.get('pageSize')) || 20;
    const page = Number(searchParams.get('page')) || 1;
    setCategory(category);
    setPageSize(pageSize);
    setPage(page);
  }, [location]);

  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?country=tr&category=${category}&pageSize=${pageSize}&page=${page}&apiKey=1ce5b3fab6cc45caaada5f5e9af206bc`;
    fetch(url)
      .then(response => response.json())
      .then(data => setNews(data.articles));
  }, [category, pageSize, page]);

  const uniqueCategories = [...new Set(categories)]; // kategorilerin tekrar etmemesi için filtreleme yapılır
  const routeFinder = r => pathname.startsWith(`/${r}`);

  return (
    <div>
    <nav className='navbar'>
      <ul>
      <li className={`nav-item ${pathname.length <= 1 ? "active" : ""}`}>
        <a href="/">HOME</a>
      </li>
      <li className={`nav-item ${routeFinder("about")?"active":""}`}>
        <a href="/about">ABOUT</a>
      </li>
        {uniqueCategories.map((category, index) => (
          <li className={`nav-item ${routeFinder(category)?"active":""}`} key={index}>
            <a href={`${category}`} className={category === 'general' ? 'active' : ''}>
              {category.toUpperCase()}
            </a>
          </li>
        ))}
      </ul>
    </nav>
    </div>
  );
  

}
export default Navbar;