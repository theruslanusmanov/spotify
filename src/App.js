import './App.css'
import { Route } from "wouter";
import { Shell } from './components/shell/Shell'
import { Auth } from './components/auth/Auth'

function App () {
  return (
    <div className="App">
      <Route path="/" component={Shell} />
      <Route path="/auth" component={Auth} />
    </div>
  )
}

export default App
