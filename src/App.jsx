import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Navbar, Profile, Trans } from "./components";

function App() {
  const [user, setUser] = React.useState(null);
  return (
    <BrowserRouter>
      <div className="App bg-hero-pattern">
        <Navbar user={user} setUser={setUser} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/transaction" element={<Trans />} />
          {user && <Route path="/profile" element={<Profile user={user} />} />}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
