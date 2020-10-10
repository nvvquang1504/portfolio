import './styles.scss'
import React, {useEffect} from 'react';
import * as Scroll from 'react-scroll'
import img from '../../assets/images/poe01.jpeg'
import {Button} from 'antd';

let Link = Scroll.Link;
let scrollSpy = Scroll.scrollSpy;
const MyCarousel = () => {
    useEffect(() => {
        scrollSpy.update()
    })
    return (
        <div style={{zIndex: 1}} className='carousel-wrapper' id='carousel-wrapper'>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner position-relative " style={{zIndex: 2}}>
                    <div className="carousel-item active h-100">
                        <img alt='carousel' className="d-block w-100 h-100" src={img}/>
                    </div>
                    <div className='position-absolute' style={{top: 0, left: 0, width: '100%', height: '100%'}}>
                        <div className="h-100">
                            <div style={{margin: '0 auto', width: '70%'}}
                                 className='row h-100 align-items-center justify-content-center'>
                                <div className="col-12 d-flex flex-column justify-content-center align-items-center">
                                    <i style={{
                                        color: 'white',
                                        fontSize: '2.1875rem',
                                        fontWeight: 600,
                                        textAlign: 'center'
                                    }}>Front-end Web Developer</i>
                                    <span style={{
                                        color: 'white',
                                        fontSize: '3.125rem',
                                        fontWeight: 800,
                                        textAlign: 'center'
                                    }}>Nguyen Vo Vinh Quang</span>
                                    <div className='d-flex justify-content-start align-items-center'>
                                        <Button className='left-button' type="primary">
                                            <Link to='aboutMe' spy={true} smooth={true}
                                                  duration={400}
                                                  offset={-64}>
                                                Learn more
                                            </Link>
                                        </Button>
                                        <a href="mailto:nvvquang1504@gmail.com">
                                            <Button className='right-button' type="primary">
                                                Email for me
                                            </Button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default MyCarousel;