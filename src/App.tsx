import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from 'pages/Home';
import JobsPage from 'pages/Jobs';
import PublicLayout from 'layouts/PublicLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
        <Route path="/jobs" element={<JobsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
