import logo from './logo.svg';
import './App.css';
import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'

function App() {
  return (
    <Authenticator>
      {({signOut,uer})=>(
        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            hola mundo desde react
          </p>
          <button onClick={signOut}>Sign out</button>
        </header>

        </div>
      )}
    </Authenticator>
  );
}

export default App;
