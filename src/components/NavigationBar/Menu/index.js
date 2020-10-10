import React, {useState, useEffect} from 'react';
import './styles.scss'
import {Menu} from 'antd';
import * as Scroll from 'react-scroll';

let Link = Scroll.Link;
let Events = Scroll.Events;
let scroll = Scroll.animateScroll;
let scrollSpy = Scroll.scrollSpy;

const MyMenu = (props) => {
    const [current, setCurrent] = useState('home')
    useEffect(() => {
        Events.scrollEvent.register('begin', function (to) {
        });
        Events.scrollEvent.register('end', function (to) {
        });
        scrollSpy.update();
        return () => {
            Events.scrollEvent.remove('begin');
            Events.scrollEvent.remove('end');
        }
    }, [])
    const handleSetActive = (to) => {
        setCurrent(to)
    }
    const handleOnclick = (e) => {
        console.log(e.key)
        setCurrent(e.key)
    }
    const scrollTo = () => {
        scroll.scrollTo({
            duration: 400,
            smooth: true,
            spy: true,
        });
        setCurrent('home')
    }
    return (
        <Menu className='my-menu__wrapper'
              style={{
                  alignSelf: 'flex-end !important',
              }}
              onClick={handleOnclick}
              selectedKeys={[current]} mode={props.display}
              theme='dark'>
            <Menu.Item key='home'>
                <Link to={'home'} spy={true} smooth={true} duration={400}
                      onSetActive={handleSetActive}/>
                <a href='#b' onClick={scrollTo}>HOME</a>
            </Menu.Item>
            <Menu.Item key="aboutMe">
                ABOUT ME
                <Link to={'aboutMe'} spy={true} smooth={true}
                      duration={400} onSetActive={handleSetActive}
                      offset={-64}/>
            </Menu.Item>
            <Menu.Item key="mySkills">
                MY SKILLS
                <Link to={'mySkills'} spy={true} smooth={true} duration={400} onSetActive={handleSetActive}
                      offset={-64}/>
            </Menu.Item>
            <Menu.Item key="myProjects">
                MY PROJECTS
                <Link to={'myProjects'} spy={true} smooth={true} duration={400} onSetActive={handleSetActive}
                      offset={-64}/>
            </Menu.Item>
        </Menu>
    )
};

export default MyMenu