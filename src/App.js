/*Swamishriji*/ 

import React, {useState} from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./App.css";
import logo from "./SatsangHubLogo.png";
import img1 from "./msm_img1.png";
import img2 from "./msm_img2.png";
import img3 from "./msm_img3.png";
import img4 from "./msm_img4.png";

function Home() {

  const navigate = useNavigate();
  const handleGuestClick = () => {
    navigate("/topics");
  };
  return (
    <main className="main-content">
      <div className="welcome-section">
        <div className="side-images">
          <img src={img1} alt="Image-1" className="circle-image" />
          <img src={img2} alt="Image-2" className="circle-image" />
        </div>

        <h1 className="welcome-title">Welcome to SatsangHub!</h1>

        <div className="side-images">
          <img src={img3} alt="Image-3" className="circle-image" />
          <img src={img4} alt="Image-4" className="circle-image" />
        </div>
      </div>
      
      <p>Click the button to begin your journey!</p>
      <button className="primary-btn" onClick={handleGuestClick}>Continue as Guest</button>
      <h1 style={{ fontSize: "30px", fontWeight: "bold", marginTop: "30px" }}>About SatsangHub</h1>
      <h2 className="center-paragraph">
      SatsangHub is a heartfelt space dedicated to helping you deepen your connection with Maharaj and Swami through fun and interactive kirtan-based quizzes. 
      Whether you’re just beginning your journey or have grown up around Satsang, these quizzes are designed to help you learn and foster your passion for music while also strengthening your jodaan with the Satpurush. 
      From “Finish the Verse” challenges to fill-in-the-blank memory tests, SatsangHub offers a meaningful way to engage with kirtans.
      </h2>

      <h4>Explore, test your knowledge, and grow your love for kirtans - one quiz at a time!</h4> 
      <h4>Don’t forget to keep that streak burning! 🔥</h4>
    </main>


  );
}


function Topics() {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const handleTopicClick = (topic) => {
    setSelectedTopic(topic);
  };

  return (
    <main className="topics-content">
      <h1 style={{ fontSize: "30px", fontWeight: "bold" }}>Choose Your Topic</h1>
      <h2 style={{ fontSize: "15px", fontWeight: "normal" }}>More topics & quizzes to come soon!</h2>
      <h2 style={{ fontSize: "15px", fontWeight: "normal" }}>
        How to Play: 
      </h2>

      <div className="topics-list">
        <button onClick={() => handleTopicClick("dhun")}>Dhun</button>
        <button onClick={() => handleTopicClick("prarthana")}>Prarthana</button>
        <button onClick={() => handleTopicClick("kirtan")}>Kirtan</button>
      </div>

      {selectedTopic && (
        <div>
          <h2>{selectedTopic.charAt(0).toUppeCase() + selectedTopic.slicse(1)} Quizzes</h2>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {quizzesByTopic[selectedTopic].map((quiz, idx) => (
              <li key={idx} style={{ marginButtom: "10px"}}>
                <Link to={quiz.path}>
                  <button className="second-btn">Quiz {idx + 1}</button>
                </Link>
              </li>
            ))}

          </ul>
        </div>
      )}

    </main>
  );
}


function App() {
  return (
    <Router>
      <div className="app">
        <nav className="top-nav">
          <div className="logo-container">
            <img src={logo} alt="SatsangHub Logo" className="logo-img" />
            <span className="logo-text">SatsangHub</span>
          </div>

          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/topics">Topics</Link></li>
            <li><Link to="/login">Login</Link></li>
            <p id="victory_count">Your Streak 🔥: </p>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/topics" element={<Topics />} />
          {/* Add other routes here when ready */}
        </Routes>
      </div>

      <footer className="footer"></footer>

    </Router>
  );
}

const quizzesByTopic = {
  dhun: [
    { id: "jay-aksharpati", path: "/quiz/jay-aksharpati" },
  ],

  prarthana: [
    { id: "prarthana-1", path: "/quiz/prarthana-1" },
  ],

  kirtan: [
    { id: "kirtan-1", path: "/quiz/kirtan-1" },
  ],
}

var i=0;

function incrementCount() {
  i++;
  updateCount();
}

function updateCount() {
  document.getElementById("victory_count").textContent = `Your Streak 🔥: ${i}`;
}


export default App;

