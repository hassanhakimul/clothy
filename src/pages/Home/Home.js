import React from 'react';
import Brand from '../../Shared/Brand';
import ContactForm from '../../Shared/ContactForm';
import Divider from '../../Shared/Divider/Divider';
import Testimonial from '../../Shared/Testimonial/Testimonial';
import WomenCollection from '../../Shared/WomenCollection/WomenCollection';
import Products from '../Product/Products';
import Banner from './Banner';
import Explore from './Msg/Explore/Explore';
import MsgFloat from './Msg/MsgFloat';


const Home = () => {
    return (
        <div className='home'>

            <Banner/>
            <Explore/>
           <Divider></Divider>
            <Products/>
            <Testimonial/>
            <Divider/>
            <WomenCollection/>
            <Brand/>
            <ContactForm/>
            <MsgFloat/>
            
            
        </div>
    );
};

export default Home;