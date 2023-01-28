import { useState } from 'react'
import { QuotesSearchPage } from './pages/QuotesSearchPage'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
     <QuotesSearchPage/>
    </div>
  )
}

export default App
