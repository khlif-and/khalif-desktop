
import React from 'react';
import { HashRouter as Router } from 'react-router-dom'; // Using HashRouter for Electron safety
import { AppRoutes } from './routes/AppRoutes';
import './style.css';

const App: React.FC = () => {
    return (
        <Router>
            <AppRoutes />
        </Router>
    );
};

export default App;
