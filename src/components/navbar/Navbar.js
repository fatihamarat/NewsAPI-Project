import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import "./index.css"

function Navbar() {
  const [categories, setCategories] = useState([]);
  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    fetch(`https://newsapi.org/v2/top-headlines/sources?apiKey=${process.env.REACT_APP_API_KEY}`)
      .then(response => response.json())
      .then(data => {
        const availableCategories = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];
        const categories = data.sources
          .filter(source => availableCategories.includes(source.category))
          .map(source => source.category);
        setCategories(categories);
      });
  }, []);

  const uniqueCategories = [...new Set(categories)]; // kategorilerin tekrar etmemesi için filtreleme yapılır
  const routeFinder = r => pathname.startsWith(`/${r}`);

  return (
    <div>
      <nav className='navbar'>
        <ul>
          <li className={`nav-item ${pathname.length <= 1 ? "active" : ""}`}>
            <a href="/">HOME</a>
          </li>
          <li className={`nav-item ${routeFinder("about") ? "active" : ""}`}>
            <a href="/about">ABOUT</a>
          </li>
          {uniqueCategories.map((category, index) => (
            <li className={`nav-item ${routeFinder(category) ? "active" : ""}`} key={index}>
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