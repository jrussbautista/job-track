import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from 'pages/Home';
import JobsPage from 'pages/Jobs';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
