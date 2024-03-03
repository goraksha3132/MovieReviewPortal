import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Registration from "./components/RegistrationForm";
import Login from "./components/Login";
import Collection from "./components/Collection";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Watchlist from "./components/Watchlist";

import "./App.css";
import TV_Streaming from "./components/TV_Streming";

// ################




export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="collection" element={<Collection />} />
          <Route path="login" element={<Login />} />
          <Route path="rf" element={<Registration />} />
          <Route path="tv_streming" element={<TV_Streaming />} />
          <Route path="watchlist" element={<Watchlist />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);