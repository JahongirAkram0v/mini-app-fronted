
const tg = window.Telegram.WebApp;

function App() {
  return (
    <div>
      <button>
        close
        {tg.initData}
      </button>
    </div>
  )
}

export default App