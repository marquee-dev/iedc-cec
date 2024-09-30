import React from "react";
import "./Home.scss";
import About from "./About";
import UpcomingEvents from "./UpcomingEvents";
import Team from "./Team";
import Experiences from "./Experiences";
import OurJourney from "./OurJourney";
import Footer from "./Footer";
import Logo from "../assets/logo.png"
import Logo2 from "../assets/college.png"
import { useNavigate } from "react-router-dom";


export default function Home() {
    const navigate=useNavigate()
    const handleIdea = () =>{
        navigate('/idea')
    }
    return (
        <div className="total">
        <div className="home">
            {/* <Navbar /> */}
            <div className="navbar">
                <div className="logoclass">
                <img className="logo" src={Logo} alt="logo" />

                </div>
                <div>
                <img className="logo-2" src={Logo2} alt="logo" />
                </div>
            </div>
            <div className="home-body">
            <div class="container">
                
    <div className="box">

        <div className="title">
            <span className="block"></span>
            <h1>IEDC CEC<span></span></h1>
        </div>

        <div className="role">
            <div className="block"></div>
            <p>Empowering Innovators</p>
        </div>
        <div className="role-2">
            <div className="block-2"></div>
            <p className="button" onClick={handleIdea}>I Have An Idea</p>
        </div>

    </div>
</div>


            </div>
        </div>
        <About/>
        <UpcomingEvents/>
        <Team/>
        <Experiences/>
        <OurJourney/>
        <Footer/>
        </div>
    );
}
