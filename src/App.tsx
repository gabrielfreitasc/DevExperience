import './styles/global.css'
import { Header } from './components/Header'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Experience } from './pages/Experience'
import { Projects } from './pages/Projects'
import { Footer } from './components/Footer'
import { Work } from './components/Experience/Work';

import translation_en from '../public/locales/en/translation_en.json';
import translation_ptbr from '../public/locales/pt-br/translation_ptbr.json';
import translation_es from '../public/locales/es/translation_es.json';

import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';

export function App() {
  i18next.init({
    interpolation: {escapeValue: false},
    lng: "en",
    resources: {
      en: {global: translation_en},
      ptbr: {global: translation_ptbr},
      es: {global: translation_es},
    },
  });

  return (
    <I18nextProvider i18n={i18next}>
        <div className='w-auto h-screen'>
          <Header />

          <Home />
          <About />
          <Experience />
          <Work />
          <Projects />
          <Footer />
        </div>
    </I18nextProvider>
  )
}
