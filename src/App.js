
const tg = window.Telegram.WebApp;

function App() {
  return (
    <div>
      <button>
        close
        {tg.initDataUnsafe}
      </button>
    </div>
  )
}

export default App