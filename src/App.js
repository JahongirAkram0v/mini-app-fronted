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
      <h1>salom</h1>
      <h2>{JSON.parse(tg.initData)}</h2>
      {(user) ? <h2>{user.added_to_attachment_menu}</h2> : <h3>Hayr</h3>}
    </div>
  );
}

export default App;
