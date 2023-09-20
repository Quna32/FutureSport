import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Axios from "axios";
import './App.css';
import WeatherComponent from "./Components/Aside/WeatherInfoComponent.js";
import Header from './Components/Header/Header.js';
import Welcome from './Components/Header/Welcome.js';
import Navigation from './Components/Navigation/Navigation.js';
import Main from './Components/Main/Main.js';
import NewsCarousel from './Components/News/NewsCarousel.js';
import AboutUs from './Components/AboutUs/AboutUs.js';
import Calendar from './Components/Main/Calendar.js';
import Table from './Components/Main/Table.js';
import Map from './Components/Main/Map.js';
import MembershipForm from './Components/Main/MembershipForm.js';
import Aside from './Components/Aside/Aside.js';
import FooterMessage from "./Components/Footer/FooterMessage.js";
import ScrollToTopButton from "./Components/Footer/ScrollToTopButton.js";
import Footer from './Components/Footer/Footer.js';
import ErrorBoundary from "./Components/ErrorBoundary/ErrorBoundary.js";
import ErrorThrower from "./Components/ErrorBoundary/ErrorThrower.js";

export const WeatherIcons = {
  "01d": "/icons/sunny.svg",
  "01n": "/icons/night.svg",
  "02d": "/icons/day.svg",
  "02n": "/icons/cloudy-night.svg",
  "03d": "/icons/cloudy.svg",
  "03n": "/icons/cloudy.svg",
  "04d": "/icons/perfect-day.svg",
  "04n": "/icons/cloudy-night.svg",
  "09d": "/icons/rain.svg",
  "09n": "/icons/rain-night.svg",
  "10d": "/icons/rain.svg",
  "10n": "/icons/rain-night.svg",
  "11d": "/icons/storm.svg",
  "11n": "/icons/storm.svg",
};

function App() {
  const [weather, updateWeather] = useState(null);

  const fetchWeather = async () => {
    try {
      const response = await Axios.get(
        "https://api.openweathermap.org/data/2.5/weather?q=Melbourne,au&appid=fe4feefa8543e06d4f3c66d92c61b69c"
      );
      updateWeather(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  useEffect(() => {
    // Fetch weather data for Melbourne, AU when the component mounts.
    fetchWeather();
  }, []);

  // Styled components
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 20px 10px;
    margin: auto;
    font-family: Montserrat;
  `;

  const newsImages = [
    'images/news-image-1.jpg',
    'images/news-image-2.jpg',
    'images/news-image-3.jpg',
  ];

  return (
    <ErrorBoundary>
      <div>
        <div className="App">
          <div className="container">
            <div className="left-container">
              <Header />
              <Welcome />
              <Navigation />
              <Main />
              <div id="news-section">
                <NewsCarousel images={newsImages} />
              </div>
              <div id="about-section">
                <AboutUs />
              </div>
              <div id="calendar-section">
                <Calendar />
              </div>
              <Table />
              <Map />
              <div id="membership-section">
                <MembershipForm />
              </div>
              <Aside />
              <FooterMessage />
              <ScrollToTopButton />
            </div>
            <div className="right-container">
              <Container className="weather">
                {weather && <WeatherComponent weather={weather} />}
              </Container>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    {/*<ErrorThrower />*/}
    </ErrorBoundary>
  );
}

export default App;