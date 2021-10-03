import './App.css'
import { Route, Router } from 'wouter'
import { Shell } from './components/shell/Shell'
import { Auth } from './components/auth/Auth'

function App () {
  const isProd = process.env.REACT_APP_ENV === 'prod'

  return (
    <div className="App">
      <Router base={isProd ? '/spotify' : ''}>
        <Route path="/" component={Shell}/>
        <Route path="/auth" component={Auth}/>
      </Router>
    </div>
  )
}

export default App
