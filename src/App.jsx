import "./App.css";
import HomePage from "./homePage/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Work from "./work/Work";
import About from "./about/About";
import Wrapper from "./Wrapper";
import Contact from "./contact/Contact";
import Resume from "./blogs/Resume";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Wrapper>
              <HomePage />
            </Wrapper>
          }
        />
        <Route
          path="work"
          element={
            <Wrapper>
              <Work />
            </Wrapper>
          }
        />
        <Route
          path="about"
          element={
            <Wrapper>
              <About />
            </Wrapper>
          }
        />
        <Route
          path="resume"
          element={
            <Wrapper>
              <Resume />
            </Wrapper>
          }
        />
        <Route
          path="contact"
          element={
            <Wrapper>
              <Contact />
            </Wrapper>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
