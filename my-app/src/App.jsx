import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import './App.css'

function About() {
  return (
    <div className='max-w-3xl mx-auto p-6 mt-10 bg-grey rounded-lg shadow-md text-left'>
      <h1>About-side</h1>
      <p>Dette er en enkel about-side i React.</p>
      <h1 className="text-3xl font-bold text-red-600">Fungerer Tailwind?</h1>
    </div>
  )
}

function UX() {
  return (
    <div className="max-w-3xl mx-auto p-6 mt-10 bg-white rounded-lg shadow-md text-left">
      <h1 className="text-4xl font-bold mb-4 text-gray-900">UX-side</h1>
      <p className="text-lg text-gray-700">
        Dette er en enkel UX-side i React.
      </p>
    </div>
  )
}
function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <nav style={{ marginBottom: '20px' }}>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/ux">UX</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ux" element={<UX />} />
      </Routes>
    </BrowserRouter>
  )
}