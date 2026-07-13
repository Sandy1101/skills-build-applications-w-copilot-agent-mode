import { Routes, Route, Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container py-4">
      <h1 className="display-5 fw-bold">OctoFit Tracker</h1>
      <p className="lead">Modern multi-tier fitness tracking app.</p>
      <Link className="btn btn-primary" to="/about">Learn more</Link>
    </div>
  );
}

function About() {
  return (
    <div className="container py-4">
      <h2>About OctoFit</h2>
      <p>Track workouts, teams, and leaderboards from a modern React experience.</p>
      <Link className="btn btn-outline-secondary" to="/">Back home</Link>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}
