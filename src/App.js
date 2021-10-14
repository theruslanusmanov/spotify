import './App.css';
import {Route} from 'react-router-dom';
import {Shell} from './components/shell/Shell';
import {Auth} from './components/auth/Auth';
import {Search} from "./components/search/Search";

function App() {
  return (
      <div className="App">
        <Route path="/search" component={Search}/>
        <Route path="/auth" component={Auth}/>
        <Route path="/" component={Shell} exact />
      </div>
  );
}

export default App;
