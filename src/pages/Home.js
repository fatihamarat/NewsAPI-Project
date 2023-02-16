import React from 'react'
import Carousel from '../components/carousel';
import Layout from '../components/Layout';
import News from '../components/news/News';

const Home = () => {
  return (
    <Layout>
       <Carousel />
       <News /> 
    </Layout>
  )
}

export default Home;