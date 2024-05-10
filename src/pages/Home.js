import React from 'react';
import Herosection from '../components/Herosection';
import Featuresection from '../components/Featuresection';
import Footer from '../components/Footer';
import Crousal from '../components/Crousal';
import Parallax from '../components/Parallax';
import Contactus from '../components/Contactus';

const Home = () => {
    return ( 
        <>
           <Herosection /> 
           <Featuresection />
            <Parallax />
           <Crousal />
            <Contactus/>
           <Footer />
        </>
     );
}
 
export default Home;