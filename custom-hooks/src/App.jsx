import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SimpleAxiosComponent from './SimpleAxiosComponent';
import CustomHookComponent from './CustomHookComponent';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <h1>Simple Axios Call</h1>
      <SimpleAxiosComponent />
      <hr />

      <h1>Custom Hook</h1>
      <CustomHookComponent />

    </>
  )
}

export default App;
