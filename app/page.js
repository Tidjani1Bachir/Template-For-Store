"use client"
import React,{ useRef,useState,useEffect } from "react";
import Image from "next/image";
import image16 from "@/public/imgs/discount-background1.jpg"
/* import image17 from "@/public/imgs/" */
import image19 from "@/public/imgs/discount2.png"
import image20 from "@/public/imgs/dots.png"
import image45 from "@/public/imgs/skills.png"
import image55 from "@/public/imgs/videos-01.jpg"
import image41 from "@/public/imgs/hosting-basic.png"
import image40 from "@/public/imgs/hosting-advanced.png"
import image42 from "@/public/imgs/hosting-professional.png"
import Link from 'next/link'
import image44 from "@/public/imgs/megamenu.png"
import image7 from "@/public/imgs/cat-01.jpg"
import image8 from "@/public/imgs/cat-02.jpg"
import image9 from "@/public/imgs/cat-03.jpg"
import image10 from "@/public/imgs/cat-04.jpg"
import image11 from "@/public/imgs/cat-05.jpg"
import image12 from "@/public/imgs/cat-06.jpg"
import image13 from "@/public/imgs/cat-07.jpg"
import image14 from "@/public/imgs/cat-08.jpg"
import image43 from "@/public/imgs/landing-image.png"

import image25 from "@/public/imgs/gallery-01.png"
import image26 from "@/public/imgs/gallery-02.png"
import image27 from "@/public/imgs/gallery-03.jpg"
import image28 from "@/public/imgs/gallery-04.png"
import image29 from "@/public/imgs/gallery-05.jpg"
import image30 from "@/public/imgs/gallery-06.png"
import image22 from "@/public/imgs/features-01.jpg"
import image23 from "@/public/imgs/features-02.jpg"
import image24 from "@/public/imgs/features-03.jpg"
import image1 from "@/public/imgs/avatar-01.png"
import image2 from "@/public/imgs/avatar-02.png"
import image3 from "@/public/imgs/avatar-03.png"
import image4 from "@/public/imgs/avatar-04.png"
import image5 from "@/public/imgs/avatar-05.png"
import image6 from "@/public/imgs/avatar-06.png"
import image46 from "@/public/imgs/team-01.jpg"
import image47 from "@/public/imgs/team-02.jpg"
import image48 from "@/public/imgs/team-03.jpg"
import image49 from "@/public/imgs/team-04.jpg"
import image50 from "@/public/imgs/team-05.png"
import image51 from "@/public/imgs/team-06.png"
import image52 from "@/public/imgs/team-07.jpg"
import image53 from "@/public/imgs/team-08.jpg"

import image56 from "@/public/imgs/work-steps-1.png"
import image57 from "@/public/imgs/work-steps-2.png"
import image58 from "@/public/imgs/work-steps-3.png"
import image59 from "@/public/imgs/work-steps.png"
import image21 from "@/public/imgs/events.png"
import image54 from "@/public/imgs/video-preview.jpg"
import image18 from "@/public/imgs/discount.png"
import "./mainStyle.css"
import "./normalize.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook} from "@fortawesome/free-brands-svg-icons"
import {faTwitter} from "@fortawesome/free-brands-svg-icons"
import {faYoutube} from "@fortawesome/free-brands-svg-icons"
import {faArrowAltCircleRight} from "@fortawesome/free-regular-svg-icons"
import {faLocationDot} from "@fortawesome/free-solid-svg-icons"
import {faClock} from "@fortawesome/free-solid-svg-icons"
import {faPhoneVolume} from "@fortawesome/free-solid-svg-icons"
import {faAngleDown} from "@fortawesome/free-solid-svg-icons"
import {faAngleUp} from "@fortawesome/free-solid-svg-icons"

export default function Home() {
  const [showMegamen,setShowMegamen]=useState(false) 
//Start go to refrenbce when clicking like going to an element by using it's id by clicking over an a element

  const articlesRef = useRef(null);
  const GoToArticle = () => {
    articlesRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const GalleryRef = useRef(null);
  const GoToGallery = () => {
    GalleryRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const FeaturesRef = useRef(null);
  const GoToFeatures = () => {
    FeaturesRef.current.scrollIntoView({ behavior: 'smooth' });
  };


  const TestimonialsRef = useRef(null);
  const GoToTestimonials = () => {
    TestimonialsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const TeamMembersRef = useRef(null);
  const GoToTeamMembersRef = () => {
    TeamMembersRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const ServicesRef = useRef(null);
  const GoToServices = () => {
    ServicesRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const OurSkillsRef = useRef(null);
  const GoToOurSkills = () => {
    OurSkillsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const HowItWorksRef = useRef(null);
  const GoToHowItWorks = () => {
    HowItWorksRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const EventsRef = useRef(null);
  const GoToEvents = () => {
    EventsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const PricingPlansRef = useRef(null);
  const GoToPricingPlans = () => {
    PricingPlansRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const TopVideosRef = useRef(null);
  const GoTopVideos = () => {
    TopVideosRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const DiscountRef = useRef(null);
  const GoToDiscount = () => {
    DiscountRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const FooterRef  = useRef(null);
  const GoToFooter = () => {
    FooterRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const ScrollToTop = () => {
    window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  }

  //end go to refrenbce when clicking like going to an element by using it's id by clicking over an a element

  /*Show Progress Bar In Blue*/

  useEffect(() => {
    let el =document.querySelector(".scroller");
let height = document.documentElement.scrollHeight  - document.documentElement.clientHeight;

// console.log(document.documentElement.scrollHeight);
// console.log(document.documentElement.clientHeight);
// console.log(height)

window.addEventListener("scroll",() => {
let scrollTop = document.documentElement.scrollTop;
// console.log(scrollTop)
el.style.width=`${(scrollTop /height) *100}%`;
})
  }, [])

  // increase Numbers on Scrolling in Latest Events Section

  useEffect(() => {
    let nums = document.querySelectorAll(".num");
let section = document.querySelector(".three");
let started = false; // Function Started ? No

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
};

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}
  }, [])
  
  /*Start validation input */
  // states to manage input value
  const [username, setusername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setphone] = useState("");

  const [confirmphone, setConfirmphone] = useState("");

// states to mange erros
  const [errorUserName, setErrorUserName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorphone, setErrorphone] = useState("");
  const [errorConfrimphone, setErrorConfirmphone] = useState("");

// states to change colors after validation
  const [userColor, setUserColor] = useState("");
  const [emailColor, setEmailColor] = useState("");
  const [phoneColor, setphoneColor] = useState("");
  const [confirmphoneColor, setConfirmphoneColor] = useState("");

  function validate(e) {
    e.preventDefault();

    if (username.length > 8) {
      setErrorUserName("");
      setUserColor("green");
    } else {
      setErrorUserName("Username must be 8 letters long.");
      setUserColor("red");
    }

    if (email.includes("@gmail")) {
      setErrorEmail("");
      setEmailColor("green");
    } else {
      setEmailColor("red");
      setErrorEmail("Email should have @gmail");
    }

    if (phone.length > 8) {
      setErrorphone("");
      setphoneColor("green");
    } else {
      setErrorphone("phone should be 10 number long ");
      setphoneColor("red");
    }

    if (phone != "" && phone == confirmphone) {
      setErrorConfirmphone("");
      setConfirmphoneColor("green");
    } else {
      setErrorConfirmphone("phones didn't matched.");
      setConfirmphoneColor("red");
    }
  }
return (
    
  <div className="html">
    <div class="scroller">

</div>
       {/* // <!-- start Header --> */}
       <header id="header">
      <div className="container">
        <a href="#" className="logo">Template 3</a>

        <ul className="main-nav">
          <li><a><button onClick={GoToArticle}>Articles</button></a></li>
          <li>
          <a><button onClick={GoToGallery}>Gallery</button>
            </a></li>
          <li><a>
          <button onClick={GoToFeatures}>Features</button>
            </a></li>
          <li>
            {/* #otherlinks */}
            {/* <a className="other-links" href=""> OtherLinks </a> */}
            <a className='other-links'  onClick={()=> {setShowMegamen(!showMegamen)}}>Home</a>
          </li>
        </ul>
        <div >
          {/* <!--! start Mega Menu  --> */}
        <div className={`mega-menu ${showMegamen ? 'show' :""}`}>
          <div>
            <Image src={image44}  alt="" />
          </div>
          <ul className="links">
            <li>
              <a href="#testimonials"
                ><i className="far fa-comments fa-fw">
                  <button onClick={GoToTestimonials}>Testimonials</button>
                  </i> </a
              >
            </li>
            <li>
              <a href="#team"><i className="far fa-user fa-fw"></i> 
              <button onClick={GoToTeamMembersRef}>Team Members</button>
              </a>
            </li>
            <li>
              <a href="#services"
                ><i className="far fa-building fa-fw"></i> 
                <button onClick={GoToServices}>Services</button>
                </a
              >
            </li>
            <li>
              <a href="#our-skills"
                ><i className="far fa-check-circle fa-fw"></i> 
                <button onClick={GoToOurSkills}>Our Skills</button>
                </a>
            </li>
            <li>
              <a href="#work-steps"
                ><i className="far fa-clipboard fa-fw"></i>
                <button onClick={GoToHowItWorks}>How It Works</button>
                 </a>
            </li>
          </ul>
          <ul className="links">
            <li>
              <a href="#events"
                ><i className="far fa-calendar-alt fa-fw"></i> 
                <button onClick={GoToEvents}>latest events</button>
                </a>
            </li>
            <li>
              <a href="#pricing"
                ><i className="fas fa-server fa-fw"></i> 
                <button onClick={GoToPricingPlans}>Pricing Plans</button>
                </a>
            </li>
            <li>
              <a href="#video"
                ><i className="far fa-play-circle fa-fw"></i>
                <button onClick={GoToEvents}>Top Videos</button>
                 </a>
            </li>
            <li>
              <a href="#stats"><i className="far fa-chart-bar fa-fw"></i> 
              <button onClick={GoToDiscount}>Request A Discount</button>
              </a>
            </li>
            <li>
              <a href="#discount"
                ><i className="fas fa-percent fa-fw"></i>
                <button onClick={GoToFooter}>More Info About Me</button>
                </a>
            </li>
          </ul>
        </div>
        {/* <!--! End Mega Menu  --> */}
        </div>
      </div>
    </header>
       {/* <!--*Start Landing  --> */}
       <div className="landing">
      <div className="container">
        <div className="introduction">
          <h1>Welcome, To Template 3 Wourld</h1>
          <p>
            Here Iam gonna share everything about my life. Books Iam reading,
            Games Iam Playing, Stories and Events
          </p>

        </div>
        <div className="home-image">
          <Image src={image43} alt="" />
        </div>
      </div>
      <div className="arrow">
      <FontAwesomeIcon className="i" icon={faAngleDown} />
      <FontAwesomeIcon className="i" icon={faAngleDown} />
      </div>
    </div>
    {/* <!--*End Landing  --> */}
  
    {/* <!-- end Header --> */}
    
       {/* <!--! Start Articles --> */}
       <div ref={articlesRef} id="articles" className="articles">
      <div className="container">
        <h2 className="articels-title">Articles</h2>
        <div className="portfolio-content">
          <div className="col">
            <div className="srv">
              <Image src={image7} alt="" />

              <div className="text">
                <h3>Test Title</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis
                </p>
                <div className="read-more">
                  <p>Read More</p>
                  <i className="fa-solid fa-right-long"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="srv">
              <Image src={image8} alt="" />
              <div className="text">
                <h3>Test Title</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis
                </p>
                <div className="read-more">
                  <p>Read More</p>
                  <i className="fa-solid fa-right-long"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="srv">
              <Image src={image9} alt="" />
              <div className="text">
                <h3>Test Title</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis
                </p>

                <div className="read-more">
                  <p>Read More</p>
                  <i className="fa-solid fa-right-long"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="srv">
              <Image src={image10} alt="" />
              <div className="text">
                <h3>Test Title</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis
                </p>
                <div className="read-more">
                  <p>Read More</p>
                  <i className="fa-solid fa-right-long"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="srv">
              <Image src={image11} alt="" />
              <div className="text">
                <h3>Test Title</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis
                </p>
                <div className="read-more">
                  <p>Read More</p>
                  <i className="fa-solid fa-right-long"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="srv">
              <Image src={image12} alt="" />
              <div className="text">
                <h3>Test Title</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis
                </p>
                <div className="read-more">
                  <p>Read More</p>
                  <i className="fa-solid fa-right-long"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="srv">
              <Image src={image13} alt="" />
              <div className="text">
                <h3>Test Title</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis
                </p>
                <div className="read-more">
                  <p>Read More</p>
                  <i className="fa-solid fa-right-long"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="srv">
              <Image src={image14} alt="" />
              <div className="text">
                <h3>Test Title</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis
                </p>
                <div className="read-more">
                  <p>Read More</p>
                  <i className="fa-solid fa-right-long"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <!--! End Articles --> */}
    <div className="spikes"></div>
    <div ref={GalleryRef} className="gallery">
      <div className="container">
        <h2 className="articels-title">gallery</h2>
        <div className="imgs-container">
          <div className="box">
            <div className="image-wrapper">
            
            <Image  src={image30} alt="img" />
            
            
            
            </div>
          </div>
          <div className="box">
            <div className="image-wrapper">
              <Image src={image26}  alt="" />
            </div>
          </div>

          <div className="box">
            <div className="image-wrapper">
              <Image src={image27} alt="" />
            </div>
          </div>
          <div className="box">
            <div className="image-wrapper">
              <Image src={image28} alt="" />
            </div>
          </div>
          <div className="box">
            <div className="image-wrapper">
              <Image src={image29} alt="" />
            </div>
          </div>

          <div className="box">
            <div className="image-wrapper">
              <Image src={image30} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
      {/* <!-- ! Start features --> */}
      <div ref={FeaturesRef} className="features">
      <div className="container">
        <h2 className="articels-title">features</h2>
        <div className="features-container">
          <div className="box-1">
            <div className="image-container-features">
              <Image src={image22} alt="quality" />
            </div>
            <h1 className="quality-1">Quality</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Explicabo sed laboriosam at alias nihil! Aliquid
            </p>
            <a href="#" className="more-1">More</a>
          </div>
          <div className="box-2">
            <div className="image-container-features">
              <Image src={image23} alt="quality" />
            </div>
            <h1 className="quality-2">Quality</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Explicabo sed laboriosam at alias nihil! Aliquid
            </p>
            <a href="#" className="more-2">More</a>
          </div>
          <div className="box-3">
            <div className="image-container-features">
              <Image src={image24} alt="quality" />
            </div>
            <h1 className="quality-3">Quality</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Explicabo sed laboriosam at alias nihil! Aliquid
            </p>
            <a href="#" className="more-3">More</a>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- ! End features --> */}
      {/* <!--* Start testimonials  --> */}
      <div ref={TestimonialsRef} className="testimonials">
      <h2 className="articels-title" style={{width:"300px"}}>testimonials</h2>
      <div className="container">
        <div className="box">
          <Image src={image1} alt="avatar1" />
          <h2>Mohamed Farag</h2>
          <p>Full Stack Developer</p>
          <div className="start-container-4">
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et
            reiciendis voluptatum, amet est natus quaerat ducimus
          </p>
        </div>

        <div className="box">
          <Image src={image2} alt="avatar" />
          <h2>Mohamed Farag</h2>
          <p>Full Stack Developer</p>
          <div className="start-container-4">
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et
            reiciendis voluptatum, amet est natus quaerat ducimus
          </p>
        </div>

        <div className="box">
          <Image src={image3} alt="avatar3" />
          <h2>Mohamed Farag</h2>
          <p>Full Stack Developer</p>
          <div className="start-container-4">
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et
            reiciendis voluptatum, amet est natus quaerat ducimus
          </p>
        </div>
        <div className="box">
          <Image src={image4} alt="avatar4" />
          <h2>Mohamed Farag</h2>
          <p>Full Stack Developer</p>
          <div className="start-container-6">
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et
            reiciendis voluptatum, amet est natus quaerat ducimus
          </p>
        </div>

        <div className="box">
          <Image src={image5} alt="avatar5" />
          <h2>Mohamed Farag</h2>
          <p>Full Stack Developer</p>
          <div className="start-container-3">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et
            reiciendis voluptatum, amet est natus quaerat ducimus
          </p>
        </div>

        <div className="box">
          <Image src={image6} alt="avatar6" />
          <h2>Mohamed Farag</h2>
          <p>Full Stack Developer</p>
          <div className="start-container-3">
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et
            reiciendis voluptatum, amet est natus quaerat ducimus
          </p>
        </div>
      </div>
    </div>

    {/* <!--* End testimonials  --> */}
      {/* <!--Start Team Members  --> */}
      <div ref={TeamMembersRef} className="team-members">
      <h2 className="articels-title" style={{width: "300px"}}>team members</h2>
      <div className="container">
        <div className="box">
          <Image src={image46} alt="team1" />
          <div className="social-midea-link">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-linkedin-in"></i>
            <i className="fa-brands fa-youtube"></i>
          </div>
          <h2>Name</h2>
          <p>Simple Short Description</p>
        </div>
        <div className="box">
          <Image src={image47} alt="team2" />
          <div className="social-midea-link">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-linkedin-in"></i>
            <i className="fa-brands fa-youtube"></i>
          </div>
          <h2>Name</h2>
          <p>Simple Short Description</p>
        </div>
        <div className="box">
          <Image src={image48} alt="team3" />
          <div className="social-midea-link">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-linkedin-in"></i>
            <i className="fa-brands fa-youtube"></i>
          </div>
          <h2>Name</h2>
          <p>Simple Short Description</p>
        </div>
        <div className="box">
          <Image src={image49} alt="team4" />
          <div className="social-midea-link">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-linkedin-in"></i>
            <i className="fa-brands fa-youtube"></i>
          </div>
          <h2>Name</h2>
          <p>Simple Short Description</p>
        </div>
        <div className="box">
          <Image src={image50} alt="team5" />
          <div className="social-midea-link">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-linkedin-in"></i>
            <i className="fa-brands fa-youtube"></i>
          </div>
          <h2>Name</h2>
          <p>Simple Short Description</p>
        </div>
        <div className="box">
          <Image src={image51} alt="team6" />
          <div className="social-midea-link">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-linkedin-in"></i>
            <i className="fa-brands fa-youtube"></i>
          </div>
        </div>
        <div className="box">
          <Image src={image52} alt="team7" />
          <div className="social-midea-link">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-linkedin-in"></i>
            <i className="fa-brands fa-youtube"></i>
          </div>
          <h2>Name</h2>
          <p>Simple Short Description</p>
        </div>
        <div className="box">
          <Image src={image53} alt="team8" />
          <div className="social-midea-link">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-linkedin-in"></i>
            <i className="fa-brands fa-youtube"></i>
          </div>
          <h2>Name</h2>
          <p>Simple Short Description</p>
        </div>
      </div>
    </div>
    {/* <!--End Team Members  --> */}
    <div className="spikes"></div>
    {/* 
      {/* <!--*Start Services  --> */}
    <div ref={ServicesRef} className="services">
      <h2 className="articels-title">services</h2>
      <div className="container">
        <div className="box box-1">
          <h2>Security</h2>
          <i className="fas fa-user-shield fa-4x"></i>
          <a href="#" className="one">Details</a>
        </div>
        <div className="box box-2">
          <h2>Security</h2>
          <i className="fas fa-tools fa-4x"></i>
          <a href="#" className="two">Details</a>
        </div>
        <div className="box box-3">
          <h2>Security</h2>
          <i className="fas fa-map-marked-alt fa-4x"> </i>
          <a href="#" className="three">Details</a>
        </div>
        <div className="box box-4">
          <h2>Security</h2>
          <i className="fas fa-laptop-code fa-4x"></i>
          <a href="#" className="foor">Details</a>
        </div>
        <div className="box box-5">
          <h2>Security</h2>
          <i className="fas fa-palette fa-4x"></i>
          <a href="#" className="five">Details</a>
        </div>
        <div className="box box-6">
          <h2>Security</h2>
          <i className="fas fa-bullhorn fa-4x"></i>
          <a href="#" className="six">Details</a>
        </div>
      </div>
    </div>
    {/* <!--*End Services  --> */}
    
      {/* <!--!Start our Skills  --> */}
      <div ref={OurSkillsRef} className="our-skills">
      <h2 className="articels-title">our skills</h2>
      <div className="container">
        <Image src={image45} alt="skills" />
        <div className="Skills">
          <div className="prog-holder">
            <h4>HTML</h4>
            <div className="prog">
              <span style={{width: "80%"}} data-progress="80%"></span>
            </div>
          </div>
          <div className="prog-holder">
            <h4>CSS</h4>
            <div className="prog">
              <span style={{width: "85%"}} data-progress=" 85%"></span>
            </div>
          </div>
          <div className="prog-holder">
            <h4>JavaScript</h4>
            <div className="prog">
              <span style={{width: "80%"}} data-progress="70%"></span>
            </div>
          </div>
          <div className="prog-holder">
            <h4>Python</h4>
            <div className="prog">
              <span style={{width: "90%"}} data-progress="80%"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <!--!End our Skills  --> */}
      {/* <!--todo: Start how it works  --> */}
      <div ref={HowItWorksRef} className="how-it-works">
      <h2 className="articels-title" style={{width: "300px"}}>HOW IT WORKS ?</h2>
      <div className="container">
        <Image src={image59} alt="work-steps" />
        <div className="buiseness-plan">
          <div className="box">
            <Image src={image56} alt="work-steps-1" />
            <div className="text">
              <h2>Business Analysis</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
                nesciunt obcaecati quisquam quis laborum recusandae debitis vel
              </p>
            </div>
          </div>
          <div className="box">
            <Image src={image57} alt="work-steps-1" />
            <div className="text">
              <h2>Architecture</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
                nesciunt obcaecati quisquam quis laborum recusandae debitis vel
              </p>
            </div>
          </div>
          <div className="box">
            <Image src={image58} alt="work-steps-1" />
            <div className="text">
              <h2>Developement</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
                nesciunt obcaecati quisquam quis laborum recusandae debitis vel
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <!--todo: End how it works  --> */}
      {/* <!--*Start latest events  --> */}
      <div ref={EventsRef} className=" three latest-events">
      <h2 className="articels-title">latest events</h2>
      <div className="container">
        <div><Image src={image21} alt="events" /></div>
        <div className="box">
          <div className="date-box">
            <div className="days">
              <span className="num"  data-goal="197">0</span>
              Days
            </div>
            <div className="nums hours">
              <span className="num" data-goal="7"> 0 </span>
              Hours
            </div>
            <div className="minutes">
              <span className="num" data-goal="5"> 0 </span>
              Minutes
            </div>
            <div className="secondes">
              <span className="num" data-goal="22"> 0 </span>
              Secondes
            </div>
          </div>
          <div className="text">
            <h3>Tech Masters Event 2021</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et vero
              tenetur doloremque iusto ut adipisci quam ratione aliquam
              excepturi nulla in harum, veritatis porro
            </p>
          </div>
        </div>
      </div>
      <div className="input-container">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter Your Email"
        />
        <button>Subscribe</button>
      </div>
      <div className="dots dots-up"></div>
      <div className="dots dots-down"></div>
    </div>
    {/* <!--*End latest events  --> */}
    {/* 
    
      {/* <!--? Start Pricing Plans  --> */}
    <div ref={PricingPlansRef} className="pricing-plans">
      <h2 className="articels-title">pricing plans</h2>
      <div className="container">
        <div className="box">
          <h2>Basic</h2>
          <Image src={image41} alt="" />
          <div className="price">
            <p>$15</p>
            <p>Per Month</p>
          </div>
          <div className="server-abilities">
            <div>
              <i className="fa-solid fa-check"></i>
              10GB HDD Space
            </div>
            <div>
              <i className="fa-solid fa-check"></i>
              5 Email Addresses
            </div>
            <div>
              <i className="fa-solid fa-check"></i>
              2 Subdomains
            </div>
            <div>
              <i className="fa-solid fa-check"></i>
              4 Databases
            </div>
            <div>
              <i className="fa-solid fa-check"></i>
              Basic Support
            </div>
          </div>
          <a href="#">Choose Plan</a>
        </div>
        <div className="box advanced">
          <h2>
            Advanced
            <span>Most Popular</span>
          </h2>
          <Image src={image40} alt="hosting-advanced" />
          <div className="price">
            <p>$25</p>
            <p>Per Month</p>
          </div>
          <div className="server-abilities">
            <div>
              <i className="fa-solid fa-check"></i>
              20GB HDD Space
            </div>
            <div>
              <i className="fa-solid fa-check"></i>
              10 Email Addresses
            </div>
            <div>
              <i className="fa-solid fa-check"></i>
              5 Subdomains
            </div>
            <div>
              <i className="fa-solid fa-check"></i>
              8 Databases
            </div>
            <div>
              <i className="fa-solid fa-check"></i>
              Advanced Support
            </div>
          </div>
          <a href="#">Choose Plan</a>
        </div>
        <div className="box">
          <h2>Professional</h2>
          <Image src={image42} alt="hosting-professional" />
          <div className="price">
            <p>$45</p>
            <p>Per Month</p>
          </div>
          <div className="server-abilities">
            <div>
              <i className="fa-solid fa-check"></i>
              50GB HDD Space
            </div>
            <div>
              <i className="fa-solid fa-check"></i>
              20 Email Addresses
            </div>
            <div>
              <i className="fa-solid fa-check"></i>
              10 Subdomains
            </div>
            <div>
              <i className="fa-solid fa-check"></i>
              20 Databases
            </div>
            <div>
              <i className="fa-solid fa-check"></i>
              Professional Support
            </div>
          </div>
          <a href="#">Choose Plan</a>
        </div>
      </div>
    </div>
    {/* <!--? End Pricing Plans  --> */}
    
     {/* <!--! Start top videos  --> */}
     <div ref={TopVideosRef} className="top-videos">
      <h2 className="articels-title">top videos</h2>
      <div className="container">
        <div className="holder">
          <div className="top-videos-links">
            <div className="title">
              <h2>Top Videos</h2>
              <i className="fas fa-random"></i>
            </div>
            <div className="video-container">
              <p>How To Create Sub Domain</p>
              <p>05:18</p>
            </div>
            <div className="video-container">
              <p>How To Create Sub Domain</p>
              <p>05:18</p>
            </div>
            <div className="video-container">
              <p>How To Create Sub Domain</p>
              <p>05:18</p>
            </div>
            <div className="video-container">
              <p>How To Create Sub Domain</p>
              <p>05:18</p>
            </div>
            <div className="video-container">
              <p>How To Create Sub Domain</p>
              <p>05:18</p>
            </div>
            <div className="video-container">
              <p>How To Create Sub Domain</p>
              <p>05:18</p>
            </div>
            <div className="video-container">
              <p>How To Create Sub Domain</p>
              <p>05:18</p>
            </div>
          </div>
          <div className="thumbnail-video">
            <Image src={image54} alt="video-preview" />
            <div className="description-video">
              Everything About The Virtual Hosts
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <!--! End top videos  --> */}

      {/* <!--todo: Start discout  --> */}
      <div ref={DiscountRef} className="discount">
      <div className="discount-description">
        <h2>We Have A Discount</h2>
        <div>
          <p className="discont-title">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi
                  asperiores consectetur, recusandae ratione provident
                 necessitatibus,cumque delectus commodi fuga praesentium
             beatae. Totam vel similique laborum dicta aperiam odit doloribus
          corporis.
        </p>
        </div>
        <Image   src={image18} alt="img" />
      </div>
      <div className="discount-form">
        <div className="content">
          <h2>Request A Discount</h2>
          <input type="text" name="name" id="name" placeholder="Your Name"
          style={{ borderColor: userColor }}
          value={username}
          onChange={(e) => setusername(e.target.value)}
          />
          <p className="error">{errorUserName}</p>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your Email"
            style={{ borderColor: emailColor }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="error">{errorEmail}</p>
          <input type="text" name="phone" id="phone" placeholder="Your Phone"
          style={{ borderColor: phoneColor }}
          value={phone}
          onChange={(e) => setphone(e.target.value)}
          />
          <p className="error">{errorphone}</p>
          <input name="needs" id="needs" placeholder="Tell Us Your Needs" />
          <a href="#" onClick={validate}>Send</a>
          
        </div>
      </div>
    </div>
    {/* <!--todo: End discout  --> */}

     {/* <!--!Start Footer --> */}
     <footer ref={FooterRef}>
      <div className="container">
        <div className="my-social-media-links">
          <h2>Bachir</h2>
          <div className="social-media-icons">
          <FontAwesomeIcon className="i" icon={faFacebook} />
          
          <FontAwesomeIcon className="i" icon={faTwitter} />
            
          <FontAwesomeIcon className="i" icon={faYoutube} />
          </div>
          <div>
            <p style={{color:'gainsboro'}}>
              Lorem ipsum, dolor sit amet
              consectetur adipisicing elit.
              Temporibus nulla rem, dignissimos
              iste aspernatur
            </p>
          </div>
        </div>
        <div className="important-links">
          <div className="link">
          <FontAwesomeIcon className="i" icon={faArrowAltCircleRight} />
            <p style={{color:'gainsboro'}}>Important Link 1</p>
          </div>
          <div className="link">
            <FontAwesomeIcon className="i" icon={faArrowAltCircleRight} />
            <p style={{color:'gainsboro'}}>Important Link 1</p>
          </div>
          <div className="link">
            <FontAwesomeIcon className="i" icon={faArrowAltCircleRight} />
            <p style={{color:'gainsboro'}}>Important Link 1</p>
          </div>
          <div className="link">
            <FontAwesomeIcon className="i" icon={faArrowAltCircleRight} />
            <p style={{color:'gainsboro'}}>Important Link 1</p>
          </div>
          <div className="link">
            <FontAwesomeIcon className="i" icon={faArrowAltCircleRight} />
            <p style={{color:'gainsboro'}}>Important Link 1</p>
          </div>
        </div>
        <div className="business-info">
          <div className="location">
          <FontAwesomeIcon className="i" icon={faLocationDot} />
            <p style={{color:'gainsboro'}}>Egypt, Giza, Inside The Sphinx, Room Number 220</p>
          </div>
          <div className="business-hours">
          <FontAwesomeIcon className="i" icon={faClock} />
            <p style={{color:'gainsboro'}}>Business Hours: From 10:00 To 18:00</p>
          </div>
          <div className="Phone-numbers">
          <FontAwesomeIcon className="i" icon={faPhoneVolume} />
            <p style={{color:'gainsboro'}}>+20123456789</p>
            
            <p style={{color:'gainsboro'}}>+20198765432</p>
          </div>
        </div>
        <div className="footer-gallery">
          <Image src={image25} alt="gallery-02" />
          <Image src={image26} alt="gallery-02" />
          <Image src={image27} alt="gallery-03" />
          <Image src={image28} alt="gallery-04" />
          <Image src={image29} alt="gallery-05" />
          <Image src={image30} alt="gallery-06" />
        </div>
      </div>
      <p> Made With &lt; 3 Bachir</p>
      <div onClick={ScrollToTop} className="arrow-up">
      <FontAwesomeIcon className="i" icon={faAngleUp} />
      <FontAwesomeIcon className="i" icon={faAngleUp} />
      </div>
    </footer>
    
    {/* <!--!End Footer --> */}
    {/* 
    
    <Footer></Footer>   */}
  </div>
    
  
  );
}
