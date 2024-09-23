import { createContext, useState } from 'react'

import Component1 from './Component1.jsx'
export const MyComponent=createContext();
function App() {
  const [count, setCount] = useState(10)
  return (
    <>
    <MyComponent.Provider value={count}>
    <Component1 user={count}/>
    </MyComponent.Provider>
    </>
  )
}

export default App
