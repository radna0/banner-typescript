import { useState,useEffect, useRef } from 'react';
import Mobille from './Components/Mobille';
import Desktop from './Components/Desktop';
import './App.css';


interface IDisplayState {
    id: number[]
}

function App() {
  const [display ] = useState<IDisplayState["id"]>([1,2,3])
  const[active, setActive]  = useState<number>(1)
  const[mobile, setMobile] = useState<boolean>(false)




       const checkMobile = () =>{
       if(window.innerWidth <= 960){

        setMobile(true);
     }else{
      setMobile(false);
     }
       }

       useEffect(()=>{
        checkMobile()

       },[])

  
 window.addEventListener('resize', checkMobile);



  return (
    <div className="App">
    {
      mobile === true ? <Mobille display={display} /> : <Desktop display={display} />
    }

  
    </div>
  );
}

export default App;

