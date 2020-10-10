import './styles.scss'
import React from 'react';
import luffy from '../../assets/images/Monkey_D._Luffy.png'

const Introduction = () => {
    return (
        <div className='about-me' id='aboutMe'
             style={{
                 backgroundColor:'white',
             }}
        >
            <div style={{fontSize: '16px !important'}} className="container h-100">
                <div className="row" style={{height: '100%',margin:'0'}}>
                    <div style={{padding: '0 50px'}} className="col-12 col-md-6 about-me__image d-flex align-items-center">
                        <div className='w-100 h-100' style={{
                            backgroundImage: `url(${luffy})`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            boxShadow: '-20px 20px 69px -27px rgba(0, 0, 0, 0.33)',
                            backgroundPosition:"top center"
                        }}>
                        </div>
                    </div>
                    <div style={{padding:'50px 0px'}} className="col-12 col-md-6 h-100 about-me__details d-flex flex-column justify-content-center">
                        <div>
                            <h1 style={{fontWeight:600}}>About me</h1>
                            <p style={{marginTop:'30px',marginBottom:"0",fontSize:'1rem'}}>I initially did a pharmacy degree, then I have
                                worked at Can Tho Stroke International Services Hospital for two years. At my workplace,
                                I check how many drugs were imported and exported from drugstore every day. While
                                working on my daily tasks using Microsoft
                                Excel, I tried to find ways to automate repetitive tasks and I feel interested in
                                searching, trying and solving puzzles. I wonder why I didn't learn to code. So I decided
                                to learn at CyberSoft Academy and want to become a Front end Wed Developer. Coming to
                                the company, I look forward to perfect myself in this major, having a stable job,
                                finding a good opportunity to devote myself.</p>
                        </div>
                        <div style={{marginTop:'20px'}}>
                            <table style={{marginBottom:0}} className="table detail-table">
                                <tbody>
                                <tr>
                                    <td>Name:</td>
                                    <td>Nguyen Vo Vinh Quang</td>
                                </tr>
                                <tr>
                                    <td>Date of birth:</td>
                                    <td>April 15, 1994</td>
                                </tr>
                                <tr>
                                    <td>Address:</td>
                                    <td>Ho Chi Minh city</td>
                                </tr>
                                <tr>
                                    <td>Email:</td>
                                    <td>nvvquang1504@gmail.com</td>
                                </tr>
                                <tr>
                                    <td>Phone:</td>
                                    <td>0898019214</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Introduction;