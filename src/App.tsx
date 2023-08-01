import './styles/global.css'
import { Header } from './components/Header'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Experience } from './pages/Experience'
import { Projects } from './pages/Projects'

export function App() {
  return (
    <div className='w-auto h-screen'>
      <Header />

      <Home />
      <About />
      <Experience />
      <Projects />
    </div>
  )
}
