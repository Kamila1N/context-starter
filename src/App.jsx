import './App.css'

import { First } from './components/First'
import { Second } from './components/Second'

function App() {
  return (
    <>
      <h1>React Context</h1>

      <div style={{display: 'flex', gap: 20}}>
        <First />
        <Second />
      </div>
    </>
  )
}

export default App
