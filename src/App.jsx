// src/App.jsx
import "./App.js";
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes';

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;