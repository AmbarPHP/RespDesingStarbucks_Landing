import React from "react";
import logo from "../assets/logo.png";
import img1 from "../assets/matcha-white.png";
import "./Home.css";

function Home() {
  return (
    <div>
      <div>
        {/* logo */} <img src={logo} />{" "}
      </div>
      <div>
        <ul>
          <li>Home</li>
          <li>Menu</li>
          <li>New</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="content">
        <div className="textBox">
          <h2>
            It´s no just Coffee
            
              It's <span> Starkbucks</span>
            
          </h2> 
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            voluptates magni adipisci sed, aliquam dolorem maxime aperiam aut
            quod, optio ipsa neque ab esse porro ducimus debitis quibusdam
            cupiditate necessitatibus!
          </p>
           <a href="#">Learn More</a>
          <div className="imgBox">
            <img src={img1} alt="" className="starbucks" />
          </div> 
        </div>
      </div>
    </div>
  );
}

export default Home;
