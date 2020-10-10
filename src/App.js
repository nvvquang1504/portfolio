import React from 'react';
import './App.scss';
import NavigationBar from "./components/NavigationBar";
import MyCarousel from "./components/Carousel";
import Introduction from "./components/Introduction";
import MySkills from "./components/Skills";
import MyProjects from "./components/MyProjects";
import Footer from "./components/Footer";

// import MyEducation from "./components/Education";

function App() {
    return (
        <div id='home' style={{
            overflowX: 'auto'
        }} className="App">
            <NavigationBar/>
            <MyCarousel/>
            <Introduction/>
            <MySkills/>
            <MyProjects/>
            <Footer/>
        </div>
    );
}

export default App;
