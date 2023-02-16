import React, { useState, useCallback } from 'react'
import "./index.css"
import Navbar from '../navbar/Navbar';
import { getCategoryNews } from '../../pages/api';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Header() {

const [setData] = useState([]);  
const [search, setSearch] = useState("");

const handleSearchChange = useCallback(async (e) => {
  setSearch(e.target.value);
  const search = await getCategoryNews(e.target.value, "20", "1");
  setData(search?.data?.articles || []);
}, [setData]);

  return (
    <>
      <header className="header">
        <div className="header-left">
          <a href="https://drive.google.com/file/d/1ZMilK7dxaB1K_UHH3_JsI6f0xe2AVH6i/view?usp=share_link" className="header-title">FatiHamarat</a>
        </div>
        <div className="header-right">
          <form>
            <input type="text" value={search} onChange={handleSearchChange} placeholder="Ara..." />
            <button className="header-search-button">
              <i className="fa fa-search"></i>
              {/* <FontAwesomeIcon icon="fa-solid fa-magnifying-glass"/> */}
            </button>
          </form>
        </div>
      </header>
      <div className='navbar'><Navbar/></div>
    </>
  )
}

export default Header;