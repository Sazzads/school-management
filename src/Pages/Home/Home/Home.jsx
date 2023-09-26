import React from 'react';
import Welcome from '../Welcome';
import Gallary from './Gallary';

const Home = () => {
    return (
        <div className='max-w-screen-xl mx-auto'>
            <h2>Home</h2>
          <Welcome></Welcome>
          <Gallary></Gallary>

        </div>
    );
};

export default Home;