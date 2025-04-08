import './App.css';
import { getCookie } from './Component/Cookies';
import Login from './Pages/LoginPage/Login';
import Main from './Pages/MainPage/Main';

function App() {
  const login = getCookie("state");
  
  return (
    <div className="App">
      {
        login ? <Main loginToken={login}/> : <Login loginToken/>

      }
    </div>
  );
}

export default App;
