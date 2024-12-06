import './App.css';
import {Routes,Route} from 'react-router-dom'
import HomePage from './pages/Home.page';
import CaseStudePage from './pages/CaseStude.page';
import React from 'react'

function App() {
  // Adding test comment
    const [isMounted, setIsMounted] = React.useState(false)

    React.useEffect(() => {
        setIsMounted(true)
    }, [])

    if(!isMounted){
        return null
    }
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/:id' element={<CaseStudePage />} />
    </Routes>
  );
}

export default App;
