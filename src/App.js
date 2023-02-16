import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import "./App.css"
import NewsDetailsPage from './pages/NewsDetailsPage';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/about" exact element={<About/>} />
        <Route path="/business" exact element={<NewsDetailsPage category="business"/>} />
        <Route path="/general" exact element={<NewsDetailsPage category="general"/>} />
        <Route path="/health" exact element={<NewsDetailsPage category="health"/>} />
        <Route path="/science" exact element={<NewsDetailsPage category="science"/>} />
        <Route path="/sports" exact element={<NewsDetailsPage category="sports"/>} />
        <Route path="/technology" exact element={<NewsDetailsPage category="technology"/>} />
        <Route path="/entertainment" exact element={<NewsDetailsPage category="entertainment"/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
