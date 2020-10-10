import React, {useState} from 'react';
import ProjectImage from "../../assets/images/projects-img/ProjectImage";
import './styles.scss'
import ItemProject from "./Project/ItemProject";

const {...projectImage} = ProjectImage();
const MyProjects = () => {

    const [projectList, setProjectList] = useState([
        {
            name: 'Food Booking',
            img: projectImage.foodBooking,
            link: 'https://app-food-booking.herokuapp.com',
            techUsed:'JavaScript, Webpack, Babel.',
        },
    ])
    const renderItem = () => {
        let projectItem = projectList.map(({name, img,link,techUsed}) => {
            return (
                <ItemProject key={name} name={name} img={img} link={link} techUsed={techUsed}/>
            )
        })
        return projectItem;
    }
    return (
        <div id='myProjects' className='my-projects'
             style=
                 {{
                     height:'100%',
                     padding:'50px 0px',
                     backgroundColor:'white'
                 }}
        >
            <h1 style={{fontWeight:600,marginBottom:'0px'}} className='text-center'>Projects</h1>
            <div className="container-fluid h-100">
                <div style={{padding:'50px 50px 0px'}} className="my-projects__list row h-100 justify-content-center align-items-start">
                    {renderItem()}
                </div>
            </div>
        </div>
    );
};

export default MyProjects;