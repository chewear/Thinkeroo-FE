import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

import Auth from './pages/Auth'
import LandingPage from './pages/LandingPage' 
import Student from './pages/Student' 
import Teacher from './pages/Teacher' 


function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/auth" element={<Auth />} />
                    <Route path="/main" element={<LandingPage />} />
                    <Route path="/student" element={<Student />} />
                    <Route path="/teacher" element={<Teacher />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
