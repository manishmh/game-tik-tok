import './App.css';
import {scroll, loho } from './assets/export'
import {Carousel} from './components/export'
import { CarouselItem } from './components/Carousel';
import {BsDiscord, BsTwitter, BsLinkedin, BsInstagram, BsTiktok, BsController, BsHeartFill, BsHeart } from 'react-icons/bs'
import {TfiMedallAlt} from 'react-icons/tfi'
import images from './images.json'

function App() {

  return (
    <>
      <div className='carousel-container'>
        <Carousel bannerLength={images.length - 1}>
          {images.map((image) => {
            return <CarouselItem key={image.title}><img src={image.url} alt={image.title} /></CarouselItem>
          })}
        </Carousel>
      </div>
      <div className='gamify-container'>
        <div className='gamify-image'>
          <img src={loho} alt="loho" />
        </div>
        <div className='gamify-des'>
          <h2>Gamify</h2>
          <p>864 Hours till launch</p>
          <div className='socials'>
            <BsDiscord></BsDiscord>
            <BsTwitter></BsTwitter>
            <BsLinkedin></BsLinkedin>
            <BsInstagram></BsInstagram>
            <BsTiktok></BsTiktok>
          </div>
        </div>
      </div> 
      <div className='game-names'>
        <p>Minecraft</p>
        <p>Gta</p>
        <p>Call of Duty</p>
        <p>Freefire</p>
        <p>PUBG</p>
        <p>Valorant</p>
        <p>Clash of Clans</p>
        <p>clash Royale</p>
        <button>Request a game</button>
      </div>
      <div className='tired'>
        <p>Tired of live streaming for hours & not getting traction? Making Gaming Content on Shorts, Reels, tiktok & not getting paid anything? Welcome to Gamify        <span>
          <BsController className='controller'></BsController>
          <BsHeartFill className='heart'></BsHeartFill>
        </span>
        </p>
      </div>
      <div className='register'>
        <div className='pre-register'>
          <BsHeart></BsHeart>
          Pre-register Now
        </div>
        <div className='join'>
          <BsHeart></BsHeart>
          Join Out Team
        </div>
      </div>
      <div className='register-creator-cont'>
        <button className='register-creator'>pre-register as Creator
          <span><TfiMedallAlt></TfiMedallAlt></span>
        </button>
      </div>
      <div className='scroll-images'>
        <img src={scroll} alt="image1" />
        <img src={scroll} alt="image2" />
        <img src={scroll} alt="image3" />
        <img src={scroll} alt="image4" />
        <img src={scroll} alt="image5" />
        <img src={scroll} alt="image6" />
      </div>
      <div className='about'>
        <h2>About Gamify</h2>
        <p>Tired of live streaming for hours & not getting traction? Tired of making Gaming Content on Shorts, Reels, TikTok & not getting paid anything?</p>

        <p>We love you & that's why Gamify exists. We're a short-form content app, think of us as TikTok but exclusively for Gaming Content.</p>

        <p>Rather than Live streaming, create content on Gamify. You don't have to spend hours, you get more traction, you get paid for your Content from Day 1.</p>
      </div>
      <div className='why-pre'>
        <h2>Why Pre-register?</h2>
        <p>Gamify Beta will only be available to people who Pre-register before Launch. Here are a few other perks.</p>
      </div>
      <div className='game-names mont'>
        <p>Monetied from Day 1</p>
        <p>Secure your Username</p>
        <p>Get to test upcoming features</p>
        <p>Limited Seats Available</p>
      </div> 
      <div className='beta-seats'>
        <h2>Beta Seats Open</h2>
        <div className='beta-seats-son'>
          <div>16/20 Creators</div>
          <div>73/100 Testers</div>
        </div>
      </div>
    </>
  );
}

export default App;
