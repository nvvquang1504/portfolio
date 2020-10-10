import './styles.scss'
import React from 'react';
import {Timeline} from 'antd';

const MyEducation = () => {
    return (
        <div className='education'>
            <div className="container">
                <h1 className='text-center'>Education</h1>
                <div className="education__list d-flex justify-content-center">
                    <Timeline style={{width: '80%'}} mode='left'>
                        <Timeline.Item style={{fontSize: '16px'}} label='November 2019 – June 2020'>
                            <p style={{fontWeight: 600}}>CyberSoft Academy</p>
                        </Timeline.Item>
                    </Timeline>
                </div>
            </div>
        </div>
    );
};

export default MyEducation;