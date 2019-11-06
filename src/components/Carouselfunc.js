import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import poster1 from './poster1.jpg';
import poster2 from './poster2.jpg';
import poster3 from './poster3.jpg';
import './carouselfunc.css';

function Carouselfunc() {
  return (
            <Carousel>
                <div>
                    <img src={poster1} alt="poster1" class="images"/>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={poster2} alt="poster2" class="images" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={poster3} alt="poster3" class="images"/>
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        )
}

export default Carouselfunc
