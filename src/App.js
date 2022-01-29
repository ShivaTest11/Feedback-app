import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FeedbackForm from "./Components/FeedbackForm";
import FeedbackList from "./Components/FeedbackList";
import FeedbackStats from "./Components/FeedbackStats";
import Header from "./Components/Header";
import About from "./Pages/About";
import AboutIconLink from "./Components/AboutIconLink";
import Post from "./Components/Post";
import { FeedbackProvider } from "./Context/FeedbackContext";

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                  <AboutIconLink />
                </>
              }
            />

            <Route path="/about" element={<About />} />
            <Route path="/post" element={<Post />} />
          </Routes>
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
