import React from 'react';
import './App.css';
import Welcome from './Components/Welcome/Welcome';
import Aside from './Components/Aside/Aside.js';
//import WeatherDashboard from './Components/Weather/WeatherDashboard';
import NewsCarousel from './Components/News/NewsCarousel';
import AboutUs from './Components/AboutUs/AboutUs.js';
import Map from './Components/Map/Map.js';
import Footer from './Components/Footer/Footer.js';
import Calendar from './Components/Calendar/Calendar.js';
import Table from './Components/Table/Table';
import MembershipForm from './Components/MembershipForm/MembershipForm.js';
import Header from './Components/Header/Header.js';
import Main from './Components/Main/Main.js';
import Navigation from './Components/Navigation/Navigation.js';

function App() {
  const newsImages = [
    'images/news-image-1.jpg',
    'images/news-image-2.jpg',
    'images/news-image-3.jpg',
  ];

  return (
    <div className="App">
      <Header />
      <Welcome />
      <Navigation />
      <Main />
      <NewsCarousel images={newsImages} />
      <AboutUs />
      <Calendar />
      <Table />
      <Map />
      <MembershipForm />
      <Aside />
      <Footer />
    </div>
  );
}

export default App;
