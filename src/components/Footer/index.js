import React from 'react';
import './styles.scss'
import {ProjectOutlined} from '@ant-design/icons'
import iFacebook from '../../assets/images/social-icon/facebook.png'
const Footer = () => {
    return (
        <div style={{height:'500px'}} className='footer'>
            <div className="container content h-100 d-flex flex-column">
                <div className="content__top d-flex justify-content-center align-items-center" style={{flex:6}}>
                    <div className='d-flex flex-column justify-content-center align-items-stretch'>
                        <div className='d-flex justify-content-center align-items-center'>
                            <ProjectOutlined style={{fontSize:'4.5rem',marginRight:'8px'}} />
                            <span style={{fontSize:'3vw',fontWeight:600, textAlign:'center'}}>PORTFOLIO</span>
                        </div>
                        <a style={{fontSize:'3vw',color:'#1890ff',fontWeight:600,margin:'5px 0px 20px'}} href="mailto:nvvquang1504@gmail.com">nvvquang1504@gmail.com</a>
                        <a rel="noopener noreferrer" className='text-center' target='_blank' href='https://www.facebook.com/Funny1504'>
                            <img alt='icon-facebook' src={`${iFacebook}`}/>
                        </a>
                    </div>
                </div>
                <div style={{height:'1px',width:'100%',backgroundColor:'grey',opacity:0.8}} className="content__line"/>
                <div className="content__bottom" style={{flex:1}}>
                    <p style={{opacity:0.5, textAlign:'center',fontSize:'14px',margin:'14px 0'}}>Project made with ReactJS by Nguyen Vo Vinh Quang</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;