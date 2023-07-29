import React from 'react';
import Navbar from '../componets/Navbar';
import Announcement from '../componets/Announcement';
import Slider from '../componets/Slider';
import About from '../componets/About';

const Home = () => {
  return (
    <div>
      <Announcement/>
      <Navbar/>
      <Slider/>
      <About/>
    </div>
  );
}

export default Home;
