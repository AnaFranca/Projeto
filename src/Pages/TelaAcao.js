import React from 'react';
import Header from '../components/Header/Header';
import ContentAcao from '../components/ContentAcao/ContentAcao';
import Slider from '../components/Slider/Slider';
import Footer from '../components/Footer/Footer';
import Carousel from '../components/Slider/Carousel';

function TelaAcao() {
        return (
            <div>
            <Header/>
            {/* <Slider/> */}
            <Carousel/>
            <ContentAcao/>
            <Footer/>
            </div>
        );
    }

export default TelaAcao;
