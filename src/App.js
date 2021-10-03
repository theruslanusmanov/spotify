import './App.css'
import { Route, Router } from 'wouter'
import { Shell } from './components/shell/Shell'
import { Auth } from './components/auth/Auth'
import { useEffect } from 'react'

function App () {
  useEffect(() => {
    console.log(process.env.PUBLIC_URL)
  })

  return (
    <div className="App">
      <Router base="/spotify">
        <Route path="/" component={Shell}/>
        <Route path="/auth" component={Auth}/>
      </Router>
    </div>
  )
}

export default App
