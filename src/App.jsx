// import React from 'react';
// import Profile from './component/Profile';

// function App() {
//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//       <Profile />
//     </div>
//   );
// }

// export default App;



// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import Profile from './component/Profile.jsx';
// import MainContent from './component/MainContent.jsx';

// const App = () => {
//   return (
//     <Router>
//       <div className="App">
//         <Routes>
//           <Route path="/" element={<MainContent />} />
//           <Route path="/profile" element={<Profile />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;

import React from 'react';
import Services from './component/Services';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-6">Services</h1>
        <Services />
      </div>
    </div>
  );
};

export default App;




// import './App.css'
// import Navbar from './component/NavBar.jsx'
// import Search from './component/Search.jsx'
// import Main from './component/Main.jsx'


// function App() {

//   return (
//     <>
//       <Navbar />
//       <Search/>
//       <Main />
//     </>
//   )
// }

// export default App
