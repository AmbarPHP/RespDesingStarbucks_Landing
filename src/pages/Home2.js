import React, { Fragment } from "react";

import "./Home2.scss";
import img2 from "../assets/62115-tea-coffee.png";
import img1 from "../assets/matcha-white.png";
import img3 from "../assets/62120-starbucks-unicorn.png";

import logo from "../assets/logo.png";

import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import twitter from "../assets/twitter.png";
import { useState } from "react";

function Home() {
  const circuleTrans = [
    {
      img: img1,
      backgroudColor: "circle--green",
    },
    {
      img: img2,
      backgroudColor: "circle--pink",
    },
    {
      img: img3,
      backgroudColor: "circle--pink2",
    },
  ];

  console.log("src", circuleTrans[0].img);

  const [imgsrc, setImgsrc] = useState(circuleTrans[0].img);

  //TODO: COMO PONER EL BEM EN LOS ESTILOS
  //TODO crear un objeto que una im y background
  const [backgroudColor, setBackgroudColor] = useState(
    circuleTrans[0].backgroudColor
  );

  function ChangeSource(src) {
    console.log("src", src);
    const result = circuleTrans.find((item) => {
      return item.img === src;
    });
    console.log(result);
    setImgsrc(result.img);
    setBackgroudColor(result.backgroudColor);
  }
  return (
    <Fragment>
      <div className="header">
        <div className="togle"> </div>
        <img src={logo} className="logo" />{" "}
        <div className="NavBar">
          <h2>Home</h2>
          <h2>Menu</h2>
          <h2>New</h2>
          <h2>Contact</h2>
        </div>
      </div>
      <div className="section">
        <div className={backgroudColor}></div>

        <div className="content__left">
          <div className="textBox">
            <h2>
              It´s no just Coffee
              <p>
                It's <span> Starkbucks</span>
              </p>
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              voluptates magni adipisci sed, aliquam dolorem maxime aperiam aut
              quod, optio ipsa neque ab esse porro ducimus debitis quibusdam
              cupiditate necessitatibus!
            </p>
            <a href="#">Learn More</a>
          </div>

          <div className="thumb">
            <img src={img1} alt="beberage" onClick={() => ChangeSource(img1)} />
            <img src={img2} alt="beberage" onClick={() => ChangeSource(img2)} />
            <img src={img3} alt="beberage" onClick={() => ChangeSource(img3)} />
          </div>
        </div>

        <div className="content_right">
          <img src={imgsrc} alt="" className="starbucks" />
        </div>

        <div className="socialBox">
          <img src={facebook} alt="social" />
          <img src={instagram} alt="social" />
          <img src={twitter} alt="social" />
        </div>
      </div>
    </Fragment>
  );
}

export default Home;
