import React from 'react';
import {Button} from 'antd'
import {ArrowRightOutlined} from '@ant-design/icons'

const ItemProject = (props) => {
    const handleOnclick = () => {
        window.open(`${props.link}`)
    }
    return (
        <div className='p-wrapper' style={{width:'320px'}}>
            <div className="position-relative my-projects__item" style={{backgroundImage: `url(${props.img})`}}>
                <div className="w-100 my-projects__item--overlay d-flex justify-content-center align-items-center">
                </div>
                <div className="my-projects__info d-flex flex-column justify-content-center align-items-center">
                    <h3 className='text-center' style={{color: 'white', fontWeight: 600}}>{props.name}</h3>
                    <p style={{color: 'white', textAlign: 'center'}}>Used: <br/> {props.techUsed}</p>
                    <Button size='large' onClick={handleOnclick} className='d-flex align-items-center'
                            icon={<ArrowRightOutlined style={{order: 2, marginLeft: '8px', fontSize: '20px'}}/>}
                            type="primary">
                        Preview
                    </Button>
                </div>
            </div>
        </div>

    );
};

export default ItemProject;