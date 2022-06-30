import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./scss/custom.scss";
import Header from "./layout/Header";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import About from "./pages/About";
import References from "./pages/References";
import Sidebar from "./layout/Sidebar";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-3" id="sidebar">
            <Sidebar />
          </div>

          <div className="col-12 col-md-9" id="main-content">
            <Header />
            <div className="detail-content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dovednosti/" element={<Skills />} />
                <Route path="/o-me/" element={<About />} />
                <Route path="/reference/" element={<References />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
