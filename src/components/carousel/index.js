import { useState, useEffect } from 'react'
import Slider from 'react-slick'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import "./index.css"
import axios from "axios";

export default function Carousel({ category }) {
  const [sliderRef, setSliderRef] = useState(null);
  const [news, setNews] = useState([]);
  const [currentPage] = useState(1);
  const [postsPerPage] = useState(3);

  const sliderSettings = {
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay:true,
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 800,
    //     settings: {
    //       slidesToShow: 1,
    //     },
    //   },
    // ],
  }

    useEffect(() => {
      const fetchData = async () => {
        const result = await axios(
          `https://newsapi.org/v2/top-headlines?country=tr&apiKey=676f017549224f488970f1835f9db971`
        );
        setNews(result.data.articles);
      };
      fetchData();
    }, []);

    // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = news.slice(indexOfFirstPost, indexOfLastPost);
  
    return (
    <div className='content'>
      <div className='controls'>
        <button onClick={sliderRef?.slickPrev}>
          <FaChevronLeft />
        </button>
        <button onClick={sliderRef?.slickNext}>
          <FaChevronRight />
        </button>
      </div>
      <Slider ref={setSliderRef} {...sliderSettings}>
        {currentPosts.map((news, index) => (
          <div key={news.title} className='card'>
            <img src={news.urlToImage} alt={news.title} className='card-image' />
            <div className='text-info'>
              <div className='card-header'>
                <h2>{news.title}</h2>
                <span>{news.author}</span>
              </div>
              <p>{news.description}</p>
              {/* <ul>
                {currentPosts.map((title, index) => (
                  <li key={index}>{news.title}</li>
                ))}
              </ul> */}
            </div>
            <button>Haber Detayı</button>
          </div>
        ))}
      </Slider>
    </div>
  )
}
