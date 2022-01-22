import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { NavBar } from "./Components/NavBar";
import { Home } from "./Components/pages/Home";
import { Register } from "./Components/pages/Register";
import { WellnessHub } from "./Components/pages/WellnessHub";
import { Login } from "./Components/pages/Login"


function App() {

        return (
            <div>
                <Router>
                    <NavBar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/account" element={<Login />} />
                        <Route path="/wellnesshub" element={<WellnessHub />} />
                        <Route path="/account/register" element={<Register />} />
                    </Routes>

                </Router>
            </div>
        );
};

export default App;