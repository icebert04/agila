import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import PropertysContainer from '../components/PropertysContainer';

const Propertys = () => {
   
  return (
      <>
    <Hero hero="propertysHero">
   <Banner title='our properties'>
     <Link to='/' className='btn-primary'>
       return home
     </Link>
   </Banner>
    </Hero>
    
    <PropertysContainer />
    </>
    );
}

export default Propertys