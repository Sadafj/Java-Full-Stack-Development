import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SimpleAxiosComponent from './SimpleAxiosComponent';
import CustomHookComponent from './CustomHookComponent';
import AxiosInReact from './AxiosInReact.jsx';
import CustomAxiosReact from './CustomAxiosReact.jsx';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <h1>Simple Axios Call</h1>
      <SimpleAxiosComponent />
      <hr />

      <h1>Custom Hook</h1>
      <CustomHookComponent />

      <h1>Axios in React</h1>
      <AxiosInReact />

     <h1>Custom Hook with React Axios</h1>
      <CustomAxiosReact />

      

    </>
  )
}

export default App;
