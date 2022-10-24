import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { HomePage, AboutPage, ErrorPage } from "./pages";
import { Navbar } from "./components";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/about/" element={<AboutPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
