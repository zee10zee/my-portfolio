import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { NavBar } from './components/NavBar.jsx'
import { Footer } from './components/Footer.jsx'
import { Home } from './pages/Home.jsx'
import { AboutPage } from './pages/AboutPage.jsx'
import { CoursesPage } from './pages/CoursesPage.jsx'
import { ThemeProvider } from './contexts/ThemeProvider.jsx'
import './App.css'

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/courses" element={<CoursesPage />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
