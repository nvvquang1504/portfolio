import React from 'react';
import {Tabs} from 'antd';
import './styles.scss'
import skillsLogo from '../../assets/images/skills-icon/SkillIcon.js'
const {...Logo} = skillsLogo()

const {TabPane} = Tabs;

const handleOnchange = (key) => {
    console.log(key)
}

const MySkills = () => {
    return (
        <div id='mySkills' className='skills' style={{
            padding: '50px 0px'
        }}>
            <div className="container d-flex flex-column align-items-center">
                <h1 style={{fontWeight: 600}}>
                    Skills
                </h1>
                <Tabs defaultActiveKey="1" onChange={handleOnchange} className='skill-tab align-items-center'>
                    <TabPane tab="Technical Skills" key="1" style={{height: '100%', width: '100%'}}>
                        <div className="technical-skills">
                            <div className="container">
                                <table style={{marginBottom: 0}} className="table">
                                    <tbody>
                                    <tr className="technical-skills__item">
                                        <td style={{overflowX: 'auto'}} className='technical-skills__details'>
                                            <p className="technical-skills__title">Page structure and style:</p>
                                            <div className='d-flex'>
                                                <div className='c-skill'>
                                                    <div>
                                                    </div>
                                                    <p className='c-skill__title text-center'>
                                                        HTML5
                                                    </p>
                                                    <img src={Logo.iHtml5} alt="" className="c-skill__img"/>
                                                </div>
                                                <div className='c-skill'>
                                                    <p className='c-skill__title text-center'>
                                                        CSS3
                                                    </p>
                                                    <img src={Logo.iCss3} alt="" className="c-skill__img"/>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="technical-skills__item">
                                        <td className='technical-skills__details'>
                                            <p className="technical-skills__title">CSS Preprocessors:</p>
                                            <div className='d-flex'>
                                                <div className='c-skill'>
                                                    <p className='c-skill__title text-center'>
                                                        SASS
                                                    </p>
                                                    <img src={Logo.iSass} alt="" className="c-skill__img"/>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="technical-skills__item">
                                        <td className='technical-skills__details'>
                                            <p className="technical-skills__title">Programming Languages:</p>
                                            <div className='d-flex'>
                                                <div className='c-skill c-skill--long-title'>
                                                    <p className='c-skill__title text-center'>
                                                        JavaScript
                                                    </p>
                                                    <img src={Logo.iJavaScript} alt="" className="c-skill__img"/>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="technical-skills__item">
                                        <td className='technical-skills__details'>
                                            <p className="technical-skills__title">Frameworks / Platforms:</p>
                                            <div className='d-flex'>
                                                <div className='row justify-content-center'>
                                                    <div className='c-wrapper d-flex p-0'>
                                                        <div className='c-skill c-skill--long-title'>
                                                            <p className='c-skill__title text-center'>
                                                                ReactJS
                                                            </p>
                                                            <img src={Logo.iReact} alt="" className="c-skill__img"/>
                                                        </div>
                                                    </div>
                                                    <div className='c-wrapper d-flex p-0'>
                                                        <div className='c-skill c-skill--long-title'>
                                                            <p className='c-skill__title text-center'>
                                                                React Native
                                                            </p>
                                                            <img src={Logo.iReactNative} alt=""
                                                                 className="c-skill__img"/>
                                                        </div>
                                                    </div>
                                                    <div className='c-wrapper d-flex p-0'>
                                                        <div className='c-skill'>
                                                            <p className='c-skill__title text-center'>
                                                                Redux
                                                            </p>
                                                            <img src={Logo.iRedux} alt="" className="c-skill__img"/>
                                                        </div>
                                                    </div>
                                                    {/*<div className="w-100"/>*/}
                                                    <div className="c-wrapper d-flex p-0">
                                                        <div className='c-skill'>
                                                            <p className='c-skill__title text-center'>
                                                                Ant-Design
                                                            </p>
                                                            <img src={Logo.iAntd} alt="" className="c-skill__img"/>
                                                        </div>
                                                    </div>
                                                    <div className="c-wrapper d-flex p-0">
                                                        <div className='c-skill'>
                                                            <p className='c-skill__title text-center'>
                                                                Jquery
                                                            </p>
                                                            <img src={Logo.iJquery} alt="" className="c-skill__img"/>
                                                        </div>
                                                    </div>
                                                    <div className="c-wrapper d-flex p-0">
                                                        <div className='c-skill'>
                                                            <p className='c-skill__title text-center'>
                                                                Bootstrap
                                                            </p>
                                                            <img src={Logo.iBootstrap} alt="" className="c-skill__img"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="technical-skills__item">
                                        <td className='technical-skills__details'>
                                            <p className="technical-skills__title">Version Control:</p>
                                            <div className='d-flex'>
                                                <div className='c-skill c-skill--long-title'>
                                                    <p className='c-skill__title text-center'>
                                                        Github
                                                    </p>
                                                    <img src={Logo.iGithub} alt="" className="c-skill__img"/>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </TabPane>
                    <TabPane tab="Soft Skills" key="2">
                        <div className="soft-skills">
                            <div className="container d-flex flex-column">
                                <div className="soft-skills__item">
                                    <p>Teamwork</p>
                                </div>
                                <div className="soft-skills__item">
                                    <p>Creativity and willingness to learn</p>
                                </div>
                                <div className="soft-skills__item">
                                    <p>Good communication</p>
                                </div>
                                <div className="soft-skills__item">
                                    <p>Highly adaptable</p>
                                </div>
                                <div className="soft-skills__item">
                                    <p>English (reading, searching)</p>
                                </div>
                            </div>
                        </div>
                    </TabPane>
                </Tabs>
            </div>
        </div>
    )
};
export default MySkills