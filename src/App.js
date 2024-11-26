
const tg = window.Telegram.WebApp;

function App() {
  return (
    <div>
      <button>
        close
        {tg.initDataUnsafe.user}
      </button>
    </div>
  )
}

export default App