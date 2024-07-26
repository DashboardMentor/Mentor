import React, { useState } from 'react';

// SideWindow component
const SideWindow = ({ show, handleClose, data, handleSave }) => {
  const [formData, setFormData] = useState(data);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSave(formData);
    handleClose();
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-end">
      <div className="bg-white w-1/3 h-full p-6 shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Edit Details</h2>
        <form onSubmit={handleSubmit}>
          {Object.keys(formData).map((key) => (
            <div className="mb-4" key={key}>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={key}>
                {key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())}
              </label>
              <input
                type="text"
                id={key}
                name={key}
                value={formData[key]}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          ))}
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Save
            </button>
            <button
              type="button"
              onClick={handleClose}
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Profile component
const Profile = () => {
  const [showSideWindow, setShowSideWindow] = useState(false);
  const [currentEditSection, setCurrentEditSection] = useState(null);
  const [profileData, setProfileData] = useState({
    name: 'XC SD',
    role: 'Executive',
    organization: 'U Digital',
    industry: 'Agriculture and Allied Industries',
    experience: '4 Years',
  });
  const [domainData, setDomainData] = useState({
    domain: 'Engineering, Technology & Data',
    topics: [
      'Ace Engineering Entrance Exams',
      'Change careers',
      'Change jobs',
      'Crack Hackathons and Coding Challenges',
      'Get a raise',
    ],
    skills: [
      'Linux',
      'Agile',
      'Algorithms',
      'Analytics',
      'Architecture',
      'Artificial Intelligence',
    ],
  });
  const [workData, setWorkData] = useState({
    position: 'Executive at U Digital',
    role: 'Executive',
    duration: '2019 - Present',
    responsibilities: [
      'Leading projects related to agricultural technology.',
      'Mentoring junior staff and overseeing their progress.',
      'Collaborating with stakeholders to drive project success.',
    ],
  });
  const [educationData, setEducationData] = useState({
    degree: 'Bachelor of Technology in Computer Science',
    university: 'XYZ University',
    graduationYear: '2019',
    achievements: [
      'Graduated with honors.',
      'Top 10% of the class.',
      'Member of the university coding club.',
    ],
  });

  const handleEditClick = (section) => {
    setCurrentEditSection(section);
    setShowSideWindow(true);
  };

  const handleClose = () => {
    setShowSideWindow(false);
  };

  const handleSave = (data) => {
    switch (currentEditSection) {
      case 'profile':
        setProfileData(data);
        break;
      case 'domain':
        setDomainData(data);
        break;
      case 'work':
        setWorkData(data);
        break;
      case 'education':
        setEducationData(data);
        break;
      default:
        break;
    }
  };

  return (
    <div className="p-8 bg-white rounded-lg shadow-lg w-2/3 mx-auto mt-8">
      <div className="relative">
        <div className="bg-blue-600 h-40 rounded-t-lg flex justify-end items-center p-4">
          <button className="text-white bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded">
            Change Theme
          </button>
        </div>
        <div className="absolute top-20 left-8">
          <img
            src="src/images/avatar.jpg"
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-white"
          />
        </div>
      </div>
      <div className="flex justify-end mt-5">
        <button
          onClick={() => handleEditClick('profile')}
          className="text-white bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded"
        >
          Edit
        </button>
      </div>
      <div className="mt-2 ml-4">
        <div className="mt-4">
          <h2 className="text-3xl font-bold">{profileData.name}</h2>
          <p className="text-gray-600 text-lg">Current Role: {profileData.role}</p>
          <p className="text-gray-600 text-lg">Current Organisation: {profileData.organization}</p>
          <p className="text-gray-600 text-lg">Current Industry: {profileData.industry}</p>
          <p className="text-gray-600 text-lg">Total years of experience: {profileData.experience}</p>
        </div>
        <div className="mt-4">
          <p className="text-gray-800 mb-6 text-lg">
            I'm an executive at U Digital, bringing 4 years of experience in the Agriculture and Allied Industries to the table. I'm passionate about using technology to empower farmers and drive sustainable growth in the sector. As a mentor, I'm eager to share my knowledge and insights to help others navigate the challenges and opportunities in this dynamic field.
          </p>
        </div>
        <div className="mt-4">
          <h3 className="text-xl font-bold mb-2">Social Media Handles</h3>
          <div className="flex items-center mb-4">
            <img
              src="src/images/img.jpg"
              alt="LinkedIn"
              className="w-6 h-6 mr-2"
            />
            <span className="text-gray-800 text-lg">LinkedIn</span>
          </div>
          <a href="https://www.linkedin.com/in/temp-profile-37352a26" className="text-blue-500 hover:underline text-lg">
            https://www.linkedin.com/in/temp-profile-37352a26
          </a>
        </div>
      </div>
      <div className="mt-8">
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-bold">Domain, Topics & Skills</h3>
          <button
            onClick={() => handleEditClick('domain')}
            className="text-white bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded"
          >
            Edit
          </button>
        </div>
        <div className="mt-4">
          <p className="text-gray-600 text-lg">Domain: {domainData.domain}</p>
          <div className="flex flex-wrap mt-2">
            {domainData.topics.map((topic, index) => (
              <p
                key={index}
                className="text-gray-600 text-lg bg-gray-200 rounded-full border border-gray-300 px-4 py-1 mr-2 mb-2"
              >
                {topic}
              </p>
            ))}
          </div>
          <div className="flex flex-wrap mt-2">
            {domainData.skills.map((skill, index) => (
              <p
                key={index}
                className="text-gray-600 text-lg bg-gray-200 rounded-full border border-gray-300 px-4 py-1 mr-2 mb-2"
              >
                {skill}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-8">
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-bold">Work Experience</h3>
          <button
            onClick={() => handleEditClick('work')}
            className="text-white bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded"
          >
            Edit
          </button>
        </div>
        <div className="mt-4">
          <p className="text-gray-600 text-lg">{workData.position}</p>
          <p className="text-gray-600 text-lg">Role: {workData.role}</p>
          <p className="text-gray-600 text-lg">Duration: {workData.duration}</p>
          <p className="text-gray-600 text-lg">Responsibilities:</p>
          <ul className="list-disc ml-8 text-gray-600 text-lg">
            {workData.responsibilities.map((responsibility, index) => (
              <li key={index}>{responsibility}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-8">
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-bold">Education Details</h3>
          <button
            onClick={() => handleEditClick('education')}
            className="text-white bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded"
          >
            Edit
          </button>
        </div>
        <div className="mt-4">
          <p className="text-gray-600 text-lg">Degree: {educationData.degree}</p>
          <p className="text-gray-600 text-lg">University: {educationData.university}</p>
          <p className="text-gray-600 text-lg">Graduation Year: {educationData.graduationYear}</p>
          <p className="text-gray-600 text-lg">Achievements:</p>
          <ul className="list-disc ml-8 text-gray-600 text-lg">
            {educationData.achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </div>
      </div>
      <SideWindow
        show={showSideWindow}
        handleClose={handleClose}
        data={
          currentEditSection === 'profile'
            ? profileData
            : currentEditSection === 'domain'
            ? domainData
            : currentEditSection === 'work'
            ? workData
            : currentEditSection === 'education'
            ? educationData
            : {}
        }
        handleSave={handleSave}
      />
    </div>
  );
};

export default Profile;
