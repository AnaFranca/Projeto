import React, { Component } from 'react';
import './Slider.scss';
import one from '../ContentAcao/imgAcao/one.jpg'
import two from '../ContentAcao/imgAcao/two.jpg'
import three from '../ContentAcao/imgAcao/three.jpg'
import four from '../ContentAcao/imgAcao/four.jpg'

class Slider extends Component {
    render() {
        return (
        <div>
            <div className="col-100">
                <div className="slider-principal">
                    <img src={one} />
                    <img src={two} />
                    <img src={three} />
                    <img src={four}/>
                </div>
            </div>
            <script type="text/javascript" src="./js/jquery.js"></script>
            <script type="text/javascript" src="./js/jquery-migrate.js"></script>
            <script type="text/javascript" src="./js/slick.min.js"></script>
            <script type="text/javascript" src="./js/main.js"></script>
        </div>
        );
    }
}

export default Slider;