import React, {useEffect, useState} from 'react';
import {Drawer, Layout, Typography, Button} from 'antd';
import './styles.scss'
import MyMenu from "./Menu";

const {Title} = Typography
const {Header} = Layout


const NavigationBar = () => {
    useEffect(() => {
        window.addEventListener('scroll', () => {
            const navigationBar = document.getElementById('navigationBar')
            if (window.scrollY > 480) {
                navigationBar.style.zIndex = '3';
            } else {
                navigationBar.style.zIndex = '1';
            }
        })
    }, [])
    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };

    return (
        <div>
            <Header id='navigationBar' style={{width:'100%', position: 'fixed', top: '0'}}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    zIndex: 0,
                    width: '80%',
                    margin: '0 auto',
                    height: '100%',
                }}>
                    <Title style={{color: 'white', fontSize: '24px', marginBottom: '0'}}>GLORY.</Title>
                    <div className='my-menu' id='my-menu'>
                        <MyMenu display='horizontal'/>
                    </div>
                    <Button className='my-menu__drawer-button' type="primary" onClick={showDrawer}>
                        Open
                    </Button>
                    <Drawer title="GLORY."
                            placement="left"
                            closable={false}
                            onClose={onClose}
                            visible={visible}>
                        <MyMenu  display='vertical'/>
                    </Drawer>
                </div>
            </Header>
        </div>

    );

};

export default NavigationBar;
