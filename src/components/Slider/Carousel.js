import React from "react";
import Flickity from "react-flickity-component";
import "./Carousel.scss";
import one from '../ContentAcao/imgAcao/one.jpg'
import two from '../ContentAcao/imgAcao/two.jpg'
import three from '../ContentAcao/imgAcao/three.jpg'
import four from '../ContentAcao/imgAcao/four.jpg'

function Carousel() {
  return (
    <Flickity>
      <img src="https://placeimg.com/640/480/animals"/>
      <img src="https://placeimg.com/640/480/nature" />
      <img src="https://placeimg.com/640/480/architecture" />
      {/* <img src={one} />
      <img src={two} />
      <img src={three} />
      <img src={four} /> */}
    </Flickity>
  );
}

export default Carousel;