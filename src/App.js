import { useEffect } from "react";
import "./App.css";
const tg = window.Telegram.WebApp;
const user = tg.initDataUnsafe?.user;

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
      <h6>{tg.initDataUnsafe?.receiver?.first_name}</h6>
      <h6>{user?.first_name}</h6>
    </div>
  );
}

export default App;
