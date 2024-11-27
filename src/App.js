import { useEffect } from 'react';
import './App.css';
const tg = window.Telegram.WebApp;

function App() {

  useEffect(() => {
    tg.ready();
  }, [])

  const onClose = () => {
    tg.close();
  }

  return (
    <div className="App">
      <button onClick={onClose}>
        close
      </button>
      <h1>
        salom
      </h1>
      <h2>
        {tg.initDataUnsafe?.user}
      </h2>
    </div>
  )
}

export default App