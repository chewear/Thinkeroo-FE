import React from 'react';
import backgroundImage from '../assets/LandingPageImg/LandingPageBg.png';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import FeaturesCard from '../components/LandingPage/FeaturesCard';
import TeamCard from '../components/LandingPage/TeamCard';

const GradientText = styled.h1`
  background: linear-gradient(90deg, rgba(255, 0, 150, 1) 0%, rgba(0, 204, 255, 1) 100%);
  -webkit-background-clip: text;
  color: transparent;
  font-size: 3rem; 
  font-weight: bold; 
  display: inline-block
`;

const LandingPage = () => {
  const navigate = useNavigate(); 

  const handleJoinNowClick = () => {
    navigate('/signup');
  };

  return (
  <div className='min-h-screen  bg-cover bg-center'
    style={{ backgroundImage: `url(${backgroundImage})` }}
  >

    <div className='flex flex-row pt-16 sticky top-0 z-50' style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>
      <img src='src\assets\LandingPageImg\Thinkeroo_Logo_Purple.png' className='ml-[65px] w-[3rem] sm:w-[3rem] transform translate-y-[-25px]'></img>
      <p className='ml-4 text-white font-lexend text-xl'>Thinkeroo</p>
      <div className='flex flex-row ml-auto gap-x-4 sm:gap-x-16 mr-4 sm:mr-20'>
        <p className='text-secondary-2  font-lexend text-lg sm:text-xl'>Home</p>
        <p className='text-white  font-lexend text-lg sm:text-xl'>Features</p>
        <p className='text-white  font-lexend text-lg sm:text-xl'>About</p>
        <button className='bg-accent-1 rounded-full font-lexend w-[120px] h-14 sm:w-[150px] transform translate-y-[-15px]'>Log In</button>
      </div>
    </div>

      <section className='h-[85vh]  pt-20 bg-cover bg-center'
        style={{ backgroundImage: `url(${backgroundImage})` }}>
          {/* texts */}
        <div className='flex flex-row flex-wrap items-start'>
          <div className='max-w-full flex flex-col flex-1 mr-auto ml-[6vw] sm:ml-[110px] gap-y-6 mt-14'>
            <h1 className='text-white font-lexend text-2xl sm:text-4xl' style={{ fontSize: '3rem'}} >
              Unlock Your Mind 
              <span className="mr-6"></span>
              <span className="block mb-6"></span> 
              <GradientText>
                with
                Fun, and Challenging <span className="block mb-6"></span>
                Quizzes!
              </GradientText>
              </h1>

              <p className='text-white'>
                Thinkeroo is the ultimate quiz platform designed to challenge your mind, 
                improve your <br /> knowledge, and entertain you along the way. 
                Whether you're a trivia enthusiast or <br /> looking to sharpen your skills
                in various subjects, we have something for everyone!</p>
              <div className='flex flex-row gap-x-4 mt-8'>
              <button className='inline text-accent-1 border p-2 border-accent-1 rounded-full font-lexend w-[120px] sm:w-[150px] transform translate-y-[-15px]'>Contact Us</button>
              <button 
              onClick={handleJoinNowClick}
              className='inline bg-accent-1 border p-2 border-accent-1 rounded-full font-lexend w-[120px] sm:w-[150px] transform translate-y-[-15px]'>Join Now</button>
              </div>
          </div>


          {/* img */}
          <div className=' flex-1 ml-auto mt-2  sm:mt-[10px] max-w-full sm:w-[70rem]  sm:max-h-[100px] transform translate-y-[-5rem]'>
            <img src='src\assets\LandingPageImg\LandingPageImg.png' className='inline w-[50rem] sm:w-[70rem] max-h-[40rem] object-cover '></img>
          </div>
        </div>

      </section>

      <section className=' h-screen bg-cover bg-center'
        style={{ backgroundImage: `url(${backgroundImage})`}}>
        <FeaturesCard />
      </section>

      <section className=' h-screen bg-cover bg-center'
        style={{ backgroundImage: `url(${backgroundImage})`}}>
          <div className='flex flex-col mt-48'>
            <p className='text-white font-lexend text-4xl text-center mb-4'>The Team Behind</p>
            <p className='text-white font-lexend text-xl text-center'>This web application is made possible with the collaborative help,
               inspiring ideas, and innovative work by the team.</p>
            
          </div>
        <TeamCard />
      </section>

  </div>
  )
}

export default LandingPage