import './App.css';
import { createMedia } from '@artsy/fresnel'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import Home from './components/desktop/Home';
import { About } from './components/desktop/About';
import { Services } from './components/desktop/Services';
import { Contact } from './components/desktop/Contact';
import Projects from './components/desktop/Projects';
import RealEstate from './components/desktop/RealEstate';

const {MediaContextProvider, Media} = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  }
})

function App() {

  return (

    <MediaContextProvider>
      <Media at='mobile'>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home mobile />} />
            <Route path="/about" element={<About mobile />} />
            <Route path="/projects" element={<Projects mobile />} />
            <Route path="/services" element={<Services mobile />} />
            <Route path="/realestate" element={<RealEstate mobile />} />
            <Route path="/contact" element={<Contact mobile />} />
          </Routes>
        </BrowserRouter>
        
      </Media>

      <Media greaterThan="mobile">
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/services" element={<Services />} />
            <Route path="/realestate" element={<RealEstate />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </Media>
    </MediaContextProvider>
   
  );
}

export default App;
