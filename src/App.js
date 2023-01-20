import './App.css';
import AllRoutes from './Routes/AllRoutes';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { particlesOptions } from './Components/Particlesoptions';


export default function App() {
  const particlesInit = async (main) => {
    console.log(main);

    await loadFull(main);
  };

  return (
    <div className="App">


      <Particles
        id="tsparticles"
        init={particlesInit}
        options={
          particlesOptions
        }
        
      />
      <AllRoutes />
    </div>
  );
}