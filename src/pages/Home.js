import React from 'react';
import Navbar from '../componets/Navbar';
import Announcement from '../componets/Announcement';
import Slider from '../componets/Slider';
import About from '../componets/About';
import Services from '../componets/Services';
import PetCollections from '../componets/PetsCollection';
import Newsletter from '../componets/NewsLetter';
import Blogs from '../componets/Blogs';
import Footer from '../componets/Footer';

const Home = () => {
  return (
    <div>
      <Announcement/>
      <Navbar/>
      <Slider/>
      <About/>
      <Services/>
      <PetCollections/>
      <Newsletter/>
      <Blogs/>
      <Footer/>
    </div>
  );
}

export default Home;
