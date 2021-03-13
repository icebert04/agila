import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';

import Futer from '../components/Futer';

const Ventures = () => {
  
  return (
      <>
    <Hero hero="propertysHero">
    <Banner title='Ventures'>
      <Link to='/' className='btn-primary'>
        return home
      </Link>
    </Banner>
    </Hero>
    
      <div>
        WIP
      </div>

    <Futer />
    </>
    );
}

export default Ventures