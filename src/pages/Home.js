import React from 'react';
import Herosection from '../components/Herosection';
import Featuresection from '../components/Featuresection';
import Footer from '../components/Footer';
import Crousal from '../components/Crousal';

const Home = () => {
    return ( 
        <>
           <Herosection /> 
           <Featuresection />
           <Crousal />

           <Footer />
        </>
     );
}
 
export default Home;