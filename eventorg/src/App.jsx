import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { EventPage } from "./pages/EventPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event" element={<EventPage
          image="https://atneventstaffing.com/wp-content/uploads/2018/08/2018_Lipton_Cherry-Fest_Travese-City-MI_Brand-Ambassadors-.jpg.webp"
          title="Event 1"
          date="12/12/12"
          time="12:12"
          location="Location 1"
         />} />
      </Routes>
    </Router>
  );
}

export default App;
