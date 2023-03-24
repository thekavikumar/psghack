import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Navbar, Profile, Trans } from "./components";
import Manage from "./components/user/Manage";

function App() {
  const [user, setUser] = React.useState(null);

  return (
    <BrowserRouter>
      <div className="App bg-hero-pattern">
        <Navbar user={user} setUser={setUser} />
        <Routes>
          <Route path="/" element={<Home />} />
          {user && <Route path="/transaction" element={<Trans />} />}
          {user && <Route path="/manage" element={<Manage />} />}
          {user && <Route path="/profile" element={<Profile user={user} />} />}
        </Routes>
      </div>
      <footer className="bottom-0 fixed w-full p-5">
        <h1 className="text-center">
          @copyright 2023 | Made with 💖 by Team Triads
        </h1>
      </footer>
    </BrowserRouter>
  );
}

export default App;
