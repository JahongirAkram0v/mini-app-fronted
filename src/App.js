import './App.css';
const tg = window.Telegram.WebApp;

function App() {

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
    </div>
  )
}

export default App