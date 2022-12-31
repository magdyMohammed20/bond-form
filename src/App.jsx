import { useContext } from 'react'
import { AppContext } from './context/bondFormContext'
import './App.css'
import SignInSide from './Components/SignIn'
import Thanks from './Components/Thanks';

function App() {
  const { currentPage } = useContext(AppContext);
  return (
    <div className="App">
      {currentPage == 1 ? <SignInSide /> : <Thanks />}
    </div>
  )
}

export default App
