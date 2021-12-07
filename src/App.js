import './App.css';
import {Route} from 'react-router-dom';
import {Shell} from './components/shell/Shell';
import {Auth} from './components/auth/Auth';

function App() {
  return (
      <div className="App">
        <Route path="/:access_token(access_token=.*)" component={Auth} />
        <Route path="/" component={Shell}/>
      </div>
  );
}

export default App;
