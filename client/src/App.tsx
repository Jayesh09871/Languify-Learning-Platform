import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import Home from './Pages/Home.tsx';
import Dashboard from './Pages/Dashboard.tsx';

function App() {
  return (
    <Router>  
      <header>
        <nav>
          <Link to="/">Home</Link>
          <SignedIn>
            <Link to="/dashboard">Dashboard</Link>
          </SignedIn>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </nav>
      </header>
      <main>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<SignedIn><Dashboard /></SignedIn>} />
    </Routes>
</main>
    </Router>
  );
}

export default App;