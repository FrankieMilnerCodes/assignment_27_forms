import './App.css'
import Authenticate from './Components/Authenticate'
import SignUpForm from './Components/SignUpForm'
import {useState} from 'react'

function App() {
  const [token, setToken] = useState(" ");

  return (
    <>
      <Authenticate token={token} setToken={setToken} />
      <SignUpForm token={token} setToken={setToken} />
    </>
  );
}

export default App
