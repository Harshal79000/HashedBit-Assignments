import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Choose from "./Choose";
import CreateSurvey from "./CreateSurvey.jsx";
import TakeSurvey from "./TakeSurvey.jsx";
import Welcome from "./Welcome.jsx";
import Response from "./Response.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/"><h1>Survey Form</h1></Link>
        <Routes>
          <Route path="/createSurvey" element={<CreateSurvey />} />
          <Route path="/takeSurvey" element={<TakeSurvey />} />
          <Route path="/" element={<Choose />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/response" element={<Response />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}