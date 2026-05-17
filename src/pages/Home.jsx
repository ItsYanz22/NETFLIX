import React from 'react';
import Banner from '../components/Banner/Banner';
import Row from '../components/Row/Row';
import { requests } from '../services/tmdb';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <Banner />
      
      <div className="relative z-10 -mt-32 md:-mt-48 pb-20">
        <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
        <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
        <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
        <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      </div>
      
      <Footer />
    </div>
  );
};

export default Home;
