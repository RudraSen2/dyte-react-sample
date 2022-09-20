import React, { FC } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing/MeetingForm';
import './App.css';
import MeetingWrapper from './pages/Meeting/MeetingWrapper';

const App: FC = () => (
    <>
        <Router>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/meeting/:roomName/:authToken" element={<MeetingWrapper />} />
            </Routes>
        </Router>
    </>
);

export default App;
