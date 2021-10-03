import './App.css'
import { Route } from "wouter";
import { Shell } from './components/shell/Shell'
import { Auth } from './components/auth/Auth'
import { useEffect } from 'react'

function App () {
  useEffect(() => {
    console.log(process.env.PUBLIC_URL)
  })

  return (
    <div className="App">
      <Route path="/" component={Shell} />
      <Route path="/auth" component={Auth} />
    </div>
  )
}

export default App
