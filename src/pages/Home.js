import React from 'react';
import Herosection from '../components/Herosection';
import Featuresection from '../components/Featuresection';
import Footer from '../components/Footer';

const Home = () => {
    return ( 
        <>
           <Herosection /> 
           <Featuresection />

           <Footer />
        </>
     );
}
 
export default Home;