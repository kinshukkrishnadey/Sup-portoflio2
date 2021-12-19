import React from "react";
import "./About.css";
import aboutImg from "./img/img/about.jpg";
import jsPDF from "jspdf";
import vitals from './img/img/SupVitals.png'

function About() {

  function pdfGenerate(e){
 
    var doc= new jsPDF('portrait', 'mm', 'a4');
    var width=doc.internal.pageSize.getWidth;
    var height= doc.internal.pageSize.getHeight;
    doc.addImage(vitals,'PNG', 0, 0, 0, 0);
    doc.save('SupVitals.pdf');

  }
  //  Up To Top Btn
  window.addEventListener("scroll", function () {
    const upToTop = document.querySelector("a.bottom__to__top");
    upToTop.classList.toggle("active", window.scrollY > 0);
  });
  return (
    <div className="about component__space" id="About">
      <div className="container">
        <div className="row">
          <div className="col__2">
            <img src={aboutImg} alt="" className="about__img" />
          </div>
          <div className="col__2">
            <h1 className="about__heading">About Me</h1>
            <div className="about__meta">
              <p className="about__text p__color">
                I’m Sup Zan, a model, an accountat and a humanitarian. I started
                my career as a model when I was very young, and have since
                discovered my passion for getting infront of camera and get
                shot. Raised in Kolkata, I fell in love with modeling by
                competing at a local pageant that I won, and has been doing it
                professionally ever since.
              </p>
              <p className="about__text p__color">
                I aim to keep following my heart and trust where fate
                leads me with the goals of expanding my modeling career, and
                continuing to explore the fashion world.
              </p>
              <p className="about__text p__color">
              I have experience in editorial, runway, commercial, and pageantry.
              </p>
              <div className="about__button d__flex align__items__center">
                <a>
                  <button className="about btn pointer" onClick={pdfGenerate} >Measurements</button>
                </a>
                <a href="#Contact">
                  <button className="about btn pointer" >Hire Me</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* UP TO TOP BTN */}
      <div className="up__to__top__btn">
        <a href="#" className="bottom__to__top">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-chevron-up white"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default About;


