import React, { useState, useEffect } from 'react';
import './Main.css'; // Import the custom CSS file

const Main = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    const mentorCards = document.querySelectorAll('.mentor-card');
    mentorCards.forEach(card => {
      card.addEventListener('click', () => {
        mentorCards.forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
        setSelectedCard(card);
      });
    });

    return () => {
      mentorCards.forEach(card => {
        card.removeEventListener('click', () => {});
      });
    };
  }, []);

  const updateMentorProfile = (card) => {
    const name = card.querySelector('h3').textContent;
    const experience = card.querySelector('p:nth-of-type(1)').textContent;
    const expertise = card.querySelector('p:nth-of-type(2)').textContent;
    const imageUrl = card.querySelector('img').src;

    return (
      <div className="mentor-profile bg-white rounded-xl shadow-md p-6 mb-4 border border-gray-100 transition-transform duration-300 ease-in-out hover:shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Mentor Profile</h2>
        <img src={imageUrl} alt={name} className="w-24 h-24 rounded-full mb-4 mx-auto"/>
        <h3 className="text-xl font-semibold mb-2 text-center">{name}</h3>
        <p className="text-gray-600 text-center">{expertise}</p>
        <p className="text-gray-600 text-center mb-4">{experience}</p>
        
        <h4 className="text-lg font-semibold mt-5 mb-2">About Mentor</h4>
        <p className="text-gray-600 mb-4">Detailed information about {name} would go here.</p>
  
        <h4 className="text-lg font-semibold mt-5 mb-2">Education</h4>
        <ul className="list-disc list-inside text-gray-600">
          <li>Placeholder education information</li>
        </ul>
  
        <h4 className="text-lg font-semibold mt-5 mb-2">Work Experience</h4>
        <ul className="list-disc list-inside text-gray-600">
          <li>Placeholder work experience information</li>
        </ul>
  
        <h4 className="text-lg font-semibold mt-5 mb-2">Reviews</h4>
        <div className="italic text-gray-600">
          <p>"Placeholder review for {name}" - Anonymous</p>
        </div>
  
        <button className="bg-blue-600 text-white border-none py-2 px-4 text-lg rounded mt-5 transition-colors duration-300 ease-in-out hover:bg-blue-700 mx-auto block">Book a Session</button>
      </div>
    );
  };

  return (
    <div className="flex w-100 h-[98vh]">
      <div className="w-[30%] ml-[70px] overflow-y-auto pr-5 mt-[145px]">
        <div className="bg-white rounded-xl shadow-md p-6 mb-4 border border-gray-100 transition-transform duration-300 ease-in-out cursor-pointer hover:translate-y-[-5px] hover:shadow-lg mentor-card">
          <div className="flex items-center mb-2">
            <img src="src/images/avatar1.jpg" alt="Mentor 1" className="w-12 h-12 rounded-full mr-3" />
            <h3 className="ml-2 text-lg">Monika</h3>
          </div>
          <p className="m-1 text-sm text-gray-600">10 years experience</p>
          <p className="m-1 text-sm text-gray-600">Web Development</p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 mb-4 border border-gray-100 transition-transform duration-300 ease-in-out cursor-pointer hover:translate-y-[-5px] hover:shadow-lg mentor-card">
          <div className="flex items-center mb-2">
            <img src="src/images/avatar2.jpg" alt="Mentor 2" className="w-12 h-12 rounded-full mr-3" />
            <h3 className="m-0 text-lg">Govinda</h3>
          </div>
          <p className="m-1 text-sm text-gray-600">7 years experience</p>
          <p className="m-1 text-sm text-gray-600">Artificial Intelligence</p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 mb-4 border border-gray-100 transition-transform duration-300 ease-in-out cursor-pointer hover:translate-y-[-5px] hover:shadow-lg mentor-card">
          <div className="flex items-center mb-2">
            <img src="src/images/avatar3.jpg" alt="Mentor 3" className="w-12 h-12 rounded-full mr-3" />
            <h3 className="m-0 text-lg">Nikhil</h3>
          </div>
          <p className="m-1 text-sm text-gray-600">9 years experience</p>
          <p className="m-1 text-sm text-gray-600">Machine Learning</p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 mb-4 border border-gray-100 transition-transform duration-300 ease-in-out cursor-pointer hover:translate-y-[-5px] hover:shadow-lg mentor-card">
          <div className="flex items-center mb-2">
            <img src="src/images/avatar4.jpg" alt="Mentor 4" className="w-12 h-12 rounded-full mr-3" />
            <h3 className="m-0 text-lg">Nandani</h3>
          </div>
          <p className="m-1 text-sm text-gray-600">6 years experience</p>
          <p className="m-1 text-sm text-gray-600">Management</p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 mb-4 border border-gray-100 transition-transform duration-300 ease-in-out cursor-pointer hover:translate-y-[-5px] mentor-card">
          <div className="flex items-center mb-2">
            <img src="src/images/avatar5.jpg" alt="Mentor 5" className="w-12 h-12 rounded-full mr-3" />
            <h3 className="m-0 text-lg">Shivani</h3>
          </div>
          <p className="m-1 text-sm text-gray-600">11 years experience</p>
          <p className="m-1 text-sm text-gray-600">Marketing</p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 mb-4 border border-gray-100 transition-transform duration-300 ease-in-out cursor-pointer hover:translate-y-[-5px] hover:shadow-lg mentor-card">
          <div className="flex items-center mb-2">
            <img src="src/images/avatar6.jpg" alt="Mentor 6" className="w-12 h-12 rounded-full mr-3" />
            <h3 className="m-0 text-lg">Bhavika</h3>
          </div>
          <p className="m-1 text-sm text-gray-600">8 years experience</p>
          <p className="m-1 text-sm text-gray-600">Cloud Computing</p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 mb-4 border border-gray-100 transition-transform duration-300 ease-in-out cursor-pointer hover:translate-y-[-5px] hover:shadow-lg mentor-card">
          <div className="flex items-center mb-2">
            <img src="src/images/avatar7.jpg" alt="Mentor 7" className="w-12 h-12 rounded-full mr-3" />
            <h3 className="m-0 text-lg">Sunil</h3>
          </div>
          <p className="m-1 text-sm text-gray-600">12 years experience</p>
          <p className="m-1 text-sm text-gray-600">Android Development</p>
        </div>
      </div>

      <div className="w-3/5 bg-white ml-5 overflow-y-auto pl-5 mt-[145px] rounded-xl shadow-md p-5">
        {selectedCard && updateMentorProfile(selectedCard)}
      </div>
    </div>
  );
}

export default Main;
