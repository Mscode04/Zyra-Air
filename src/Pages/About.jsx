import React from 'react';
import logo from '../Assets/Main/bk-logo.png'; 
import teamImage from '../Assets/Images/team.jpg'; 
import missionImage from '../Assets/Images/mission.jpg'; 

function About() {
  return (
    <div className="flex flex-col items-center p-10 bg-slate-800 mt-14">
      
      <div className=" p-5 rounded-lg shadow-md mb-10 text-center">
        <img src={logo} alt="Company Logo" className="w-40 mb-5" />
      </div>
      
    
      <h1 className="text-4xl font-bold mb-4 text-slate-500">About Us</h1>
      <p className="text-lg text-center text-slate-300 mb-8">
        Welcome to Zyra Air, where we blend innovation and creativity to deliver exceptional products and services. Our passion for excellence drives us to push boundaries and redefine standards in the industry.
      </p>
      
 
      <div className="flex flex-col md:flex-row items-center justify-center mb-10 w-full">
        <div className="bg-white p-5 rounded-lg shadow-md w-full md:w-1/2 mr-0 md:mr-4 mb-4 md:mb-0 flex">
          <img src={missionImage} alt="Mission" className="w-1/2 rounded-lg mr-4" />
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">Our Mission</h2>
            <p className="text-gray-600">
              Our mission is to empower individuals and businesses by providing cutting-edge solutions that enhance their experience and foster growth. We believe in building lasting relationships with our clients through transparency, integrity, and exceptional service.
            </p>
          </div>
        </div>
        
        <div className="bg-white p-5 rounded-lg shadow-md w-full md:w-1/2 ml-0 md:ml-4 flex">
          <img src={teamImage} alt="Our Team" className="w-1/2 rounded-lg mr-4" />
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">Meet Our Team</h2>
            <p className="text-gray-600">
              Our diverse team of experts brings a wealth of knowledge and experience, collaborating to create impactful solutions tailored to our clients' needs. Together, we strive to make a difference in the world through technology and creativity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
