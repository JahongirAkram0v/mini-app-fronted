import { useEffect } from "react";
import "./App.css";
const tg = window.Telegram.WebApp;

function App() {
  useEffect(() => {
    tg.ready();
  }, []);

  const onClose = () => {
    tg.close();
  };

  return (
    <div className="App">
      <button onClick={onClose}>close</button>
      <h1>salom</h1>
      {(tg.initDataUnsafe?.user) ? <h2>{tg.initDataUnsafe?.user?.photo_url}</h2> : <h3>Hayr</h3>}
    </div>
  );
}

export default App;
