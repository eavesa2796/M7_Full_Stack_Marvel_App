// Import route handling from React Router
import { Routes, Route } from "react-router-dom";

// Import all the main pages of the app
import HomePage from "./pages/HomePage";
import ViewCharacters from "./pages/ViewCharacters";
import AddCharacter from "./pages/AddCharacter";
import EditCharacter from "./pages/EditCharacter";
import NotFound from "./pages/NotFound";

// Import global components
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

// Import custom styles
import "./App.css";

function App() {
  return (
    <>
      {/* Persistent Navigation Bar at the top */}
      <NavBar />

      {/* Define all the main routes for the app */}
      <Routes>
        {/* Home page route */}
        <Route path="/" element={<HomePage />} />

        {/* Character listing page */}
        <Route path="/characters" element={<ViewCharacters />} />

        {/* Form to add a new character */}
        <Route path="/characters/add" element={<AddCharacter />} />

        {/* Edit existing character (search-based or form pre-filled) */}
        <Route path="/characters/edit" element={<EditCharacter />} />

        {/* Catch-all route for any undefined paths (404) */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* Persistent Footer at the bottom */}
      <Footer />
    </>
  );
}

export default App;
