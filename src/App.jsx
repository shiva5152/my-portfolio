import { BrowserRouter as Router } from "react-router-dom"
import {About,Contact,Experience,Feedbacks,Hero,Navbar,Tech,Works,StarsCanvas} from './components'

const App=()=> {
  
  return (
    <Router>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero/>
        </div>
        <About/>
        <Experience/>
        <div className="relative z-0">
          <Tech />
          <StarsCanvas istech={true} />
        </div>
        <Works />
        {/* <Feedbacks/> */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas istech={false} />
        </div>
      </div>
    </Router>
  )

  
}

export default App
