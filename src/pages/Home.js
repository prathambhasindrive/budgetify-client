import React from 'react';
import Herosection from '../components/Herosection';
import Featuresection from '../components/Featuresection';
import Footer from '../components/Footer';
import Crousal from '../components/Crousal';
import Parallax from '../components/Parallax';

const Home = () => {
    return ( 
        <>
           <Herosection /> 
           <Featuresection />
            <Parallax />
           <Crousal />

           <Footer />
        </>
     );
}
 
export default Home;