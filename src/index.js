import ReactDOM from "react-dom/client";
import { BrowserRouter, Route } from "react-router-dom";
import Switch from "Routing/Switch";

export default function App() {
  return (
    <BrowserRouter>
      <Switch/>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);