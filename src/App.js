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
      <h6>{tg.initDataUnsafe?.auth_date}</h6>
      <br/>
      <h6>{tg.initDataUnsafe?.can_send_after}</h6>
      <br/>
      <h6>{tg.initDataUnsafe?.chat}</h6>
      <br/>
      <h6>{tg.initDataUnsafe?.chat_instance}</h6>
      <br/>
      <h6>{tg.initDataUnsafe?.chat_type}</h6>
      <br/>
      <h6>{tg.initDataUnsafe?.hash}</h6>
      <br/>
      <h6>{tg.initDataUnsafe?.query_id}</h6>
      <br/>
      <h6>{tg.initDataUnsafe?.receiver}</h6>
      <br/>
      <h6>{tg.initDataUnsafe?.start_param}</h6>
      <br/>
      <h6>{user}</h6>
    </div>
  );
}

export default App;
